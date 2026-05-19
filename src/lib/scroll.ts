const SCROLL_KEY = "bora-taxi-scroll-y";

export function saveScrollPosition() {
  if (typeof window === "undefined") return;
  sessionStorage.setItem(SCROLL_KEY, String(window.scrollY));
}

export function restoreScrollPosition() {
  if (typeof window === "undefined") return;
  const saved = sessionStorage.getItem(SCROLL_KEY);
  if (saved == null) return;
  const y = Number(saved);
  if (!Number.isNaN(y)) {
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
    window.scrollTo(0, y);
  }
}

export function scrollToTop(smooth = true) {
  if (typeof window === "undefined") return;
  const url = window.location.pathname + window.location.search;
  window.history.replaceState(null, "", url);
  sessionStorage.setItem(SCROLL_KEY, "0");
  window.scrollTo({ top: 0, behavior: smooth ? "smooth" : "instant" });
}
