import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const usePageTitle = () => {
  const location = useLocation();

  useEffect(() => {
    let page = "";
    if (location.pathname.includes("/videos")) page = "- Videos";
    else if (location.pathname.includes("/about")) page = "- About";
    else if (location.pathname.includes("/home")) page = "- Home";

    document.title = `Ke Zhao ${page}`;
  }, [location]);
};

export default usePageTitle;
