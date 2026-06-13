import { useEffect } from "react";

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

export const useParallax = (routeKey: string) => {
  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const root = document.documentElement;

    if (reducedMotion) {
      root.style.setProperty("--scroll-progress", "0");
      return;
    }

    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-parallax]"),
    );
    let frame = 0;

    const update = () => {
      const viewportHeight = window.innerHeight;
      const scrollableHeight =
        document.documentElement.scrollHeight - viewportHeight;
      const scrollProgress =
        scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;

      root.style.setProperty(
        "--scroll-progress",
        `${clamp(scrollProgress, 0, 1)}`,
      );

      nodes.forEach((node) => {
        const rect = node.getBoundingClientRect();
        const centerOffset =
          (rect.top + rect.height / 2 - viewportHeight / 2) /
          (viewportHeight + rect.height);
        const speed = Number(node.dataset.parallax || 0.12);
        const travel = clamp(centerOffset, -1, 1) * speed * -220;

        node.style.setProperty("--parallax-y", `${travel.toFixed(2)}px`);
      });

      frame = 0;
    };

    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      nodes.forEach((node) => node.style.removeProperty("--parallax-y"));
    };
  }, [routeKey]);
};
