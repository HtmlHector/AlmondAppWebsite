import "./App.css";
import LandingPage from "./pages/LandingPage.jsx";
import UpdatesPage from "./pages/UpdatesPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import OnboardingFlow from "./pages/OnboardingFlow.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import TermsOfService from "./pages/TermsOfService.jsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/join" element={<UpdatesPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/get-started" element={<OnboardingFlow />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
