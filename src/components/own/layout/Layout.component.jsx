import { useRouter } from "next/router";
import styles from "./Layout.module.scss";

import LayoutHead from "./LayoutHead.component";
import { Header } from "./header";
import { Footer } from "./footer";

import { ROOT_DOMAIN } from "@constants/Api.constants";
import { useCallback, useEffect, useMemo, useState } from "react";
import produce from "immer";

const Layout = ({ children, SEOInfo = {} }) => {
  const location = useRouter();
  const [{ firstClientX }, setState] = useState({
    firstClientX: 0,
  });

  const url = useMemo(
    () => ROOT_DOMAIN + location?.asPath?.replace("/", ""),
    [location?.asPath]
  );

  const touchStart = useCallback((e) => {
    setState(
      produce((draft) => {
        draft.firstClientX = e.touches[0].clientX;
      })
    );
  }, []);

  const preventTouch = useCallback(
    (e) => {
      const minValue = 5; // threshold

      const clientX = e.touches[0].clientX - firstClientX;

      // Vertical scrolling does not work when you start swiping horizontally.
      if (Math.abs(clientX) > minValue) {
        e.preventDefault();
        e.returnValue = false;
        return false;
      }
    },
    [firstClientX]
  );

  useEffect(() => {
    window.addEventListener("touchstart", touchStart);
    window.addEventListener("touchmove", preventTouch, { passive: false });
    return () => {
      window.removeEventListener("touchstart", touchStart);
      window.removeEventListener("touchmove", preventTouch, { passive: false });
    };
  }, [preventTouch, touchStart]);

  return (
    <div className={styles.container} id="layout-container">
      <LayoutHead SEOInfo={Object.assign(SEOInfo, { url })} />
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export { Layout };
