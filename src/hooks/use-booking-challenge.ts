import { useEffect, useRef, useState } from "react";

type Turnstile = {
  render: (container: HTMLElement, options: {
    sitekey: string;
    action: string;
    theme: "dark";
    callback: (token: string) => void;
    "expired-callback": () => void;
    "error-callback": () => void;
  }) => string;
  reset: (id: string) => void;
  remove: (id: string) => void;
};

let script: Promise<Turnstile> | undefined;

function loadTurnstile() {
  script ??= new Promise<Turnstile>((resolve, reject) => {
    const tag = document.createElement("script");
    tag.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    tag.async = true;
    tag.onload = () => {
      const { turnstile } = window as Window & { turnstile?: Turnstile };
      if (turnstile) resolve(turnstile);
      else reject(new Error("Verification did not load."));
    };
    tag.onerror = () => {
      tag.remove();
      script = undefined;
      reject(new Error("Verification did not load."));
    };
    document.head.append(tag);
  });
  return script;
}

export function useBookingChallenge(endpoint: string) {
  const container = useRef<HTMLDivElement>(null);
  const widget = useRef<{ api: Turnstile; id: string } | null>(null);
  const [available, setAvailable] = useState(false);
  const [token, setToken] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function start() {
      const response = await fetch(endpoint, { signal: controller.signal });
      if (!response.ok) return;
      const { siteKey } = await response.json();
      if (typeof siteKey !== "string" || !siteKey || controller.signal.aborted) return;
      const api = await loadTurnstile();
      if (!container.current || controller.signal.aborted) return;
      const id = api.render(container.current, {
        sitekey: siteKey,
        action: "booking",
        theme: "dark",
        callback: setToken,
        "expired-callback": () => setToken(""),
        "error-callback": () => setToken(""),
      });
      widget.current = { api, id };
      setAvailable(true);
    }

    void start().catch(() => {});
    return () => {
      controller.abort();
      const current = widget.current;
      if (current) current.api.remove(current.id);
      widget.current = null;
    };
  }, [endpoint]);

  function reset() {
    setToken("");
    const current = widget.current;
    if (current) current.api.reset(current.id);
  }

  return { container, available, token, reset };
}
