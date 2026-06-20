export const scrollToHash = (hash: string) => {
  const target = hash ? document.querySelector(hash) : null;

  if (!target) return;

  target.scrollIntoView({ behavior: "smooth", block: "start" });
};
