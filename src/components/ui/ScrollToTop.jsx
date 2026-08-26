import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Route changes should start at the top — but never fight an in-page #anchor. */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
