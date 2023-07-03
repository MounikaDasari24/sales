import { Routes, Route, useNavigationType, useLocation, useNavigate } from "react-router-dom";
import Failure from "./pages/Failure";
import CSAT11Desktop from "./pages/CSAT11Desktop";
import CSAT1Desktop from "./pages/CSAT1Desktop";
import Success from "./pages/Success";
import Landing from "./pages/Landing";
import { useEffect } from "react";
import { isUserAuthenticatedState } from "./atom";
import { useRecoilState } from 'recoil';

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;
  const [isUserAuthenticated] = useRecoilState(isUserAuthenticatedState);
  const accessToken = localStorage.getItem('token');
  const navigate = useNavigate(); // Use the useNavigate hook

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/csat-11-desktop":
        title = "";
        metaDescription = "";
        break;
      case "/csat-1-desktop":
        title = "";
        metaDescription = "";
        break;
      case "/success-desktop":
        title = "";
        metaDescription = "";
        break;
      case "/connect-calendar-desktop":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  useEffect(() => {
    if (isUserAuthenticated || accessToken) {
      navigate("/success");
    } else {
      navigate("/"); // Redirect to landing page
    }
  }, [isUserAuthenticated, accessToken, navigate]);

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/failure" element={<Failure />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  );
}

export default App;
