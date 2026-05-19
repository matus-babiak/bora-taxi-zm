import { useEffect, useLayoutEffect } from "react";
import { restoreScrollPosition, saveScrollPosition } from "@/lib/scroll";

export function useScrollRestoration() {
  useLayoutEffect(() => {
    restoreScrollPosition();
  }, []);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const onScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(saveScrollPosition, 150);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pagehide", saveScrollPosition);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pagehide", saveScrollPosition);
    };
  }, []);
}
