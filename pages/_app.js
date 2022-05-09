import { useEffect, useState } from "react";
import { Router } from "next/router";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Aos from "aos";
import { ScreenLoading } from "@my-components";

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    Aos.init();

    const start = () => setIsLoading(true);
    const end = () => setIsLoading(false);

    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);

    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, [setIsLoading]);

  return <>{isLoading ? <ScreenLoading /> : <Component {...pageProps} />}</>;
}

export default MyApp;
