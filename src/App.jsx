import "./App.css";
import LandingPage from "./pages/LandingPage.jsx";
import UpdatesPage from "./pages/UpdatesPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import OnboardingFlow from "./pages/OnboardingFlow.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import TermsOfService from "./pages/TermsOfService.jsx";
import { Routes, Route, BrowserRouter, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function AppRoutes() {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectPath = sessionStorage.getItem('redirectPath');
    if (redirectPath) {
      sessionStorage.removeItem('redirectPath');
      navigate(redirectPath);
    }
  }, [navigate]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/join" element={<UpdatesPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/get-started" element={<OnboardingFlow />} />
      <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      <Route path="/termsofservice" element={<TermsOfService />} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
