import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const OnboardingFlow = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState({});
  const [symptoms, setSymptoms] = useState([]);
  const [goals, setGoals] = useState([]);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const totalSteps = 8;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleAnswer = (question, answer) => {
    setAnswers({ ...answers, [question]: answer });
    setTimeout(() => handleNext(), 300);
  };

  const handleSymptomToggle = (symptom) => {
    if (symptoms.includes(symptom)) {
      setSymptoms(symptoms.filter(s => s !== symptom));
    } else {
      setSymptoms([...symptoms, symptom]);
    }
  };

  const handleGoalToggle = (goal) => {
    if (goals.includes(goal)) {
      setGoals(goals.filter(g => g !== goal));
    } else {
      setGoals([...goals, goal]);
    }
  };

  // Progress bar component
  const ProgressBar = () => (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="h-2 bg-gray-200">
        <div 
          className="h-full bg-gradient-to-r from-green-500 to-green-600 transition-all duration-500"
          style={{ width: `${(currentStep / totalSteps) * 100}%` }}
        />
      </div>
    </div>
  );

  // Step 1: Welcome
  const WelcomeStep = () => (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100 px-6">
      <div className="max-w-md w-full text-center">
        <div className="bg-white rounded-3xl shadow-2xl p-10">
          <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-6 flex items-center justify-center">
            <span className="text-white text-5xl">🥑</span>
          </div>
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            Welcome to Your Health Journey
          </h1>
          <p className="text-gray-600 mb-8 text-lg">
            Let's create your personalized nutrition plan in just 2 minutes
          </p>
          <button
            onClick={handleNext}
            className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-full font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Get Started
          </button>
          <button
            onClick={() => navigate("/")}
            className="mt-4 text-gray-500 hover:text-gray-700 transition-colors"
          >
            Skip for now →
          </button>
        </div>
      </div>
    </div>
  );

  // Step 2: Quick Sign Up
  const SignUpStep = () => (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100 px-6">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-3xl shadow-2xl p-10">
          <h2 className="text-3xl font-bold mb-2 text-gray-900">
            Let's get to know you
          </h2>
          <p className="text-gray-600 mb-8">
            Enter your email to save your progress
          </p>
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl mb-6 focus:outline-none focus:border-green-500 text-lg"
            autoFocus
          />
          <button
            onClick={handleNext}
            className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-full font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Continue
          </button>
          <button
            onClick={handleNext}
            className="w-full mt-3 text-gray-500 hover:text-gray-700 transition-colors"
          >
            Continue without email
          </button>
        </div>
      </div>
    </div>
  );

  // Step 3: Health Assessment (Condensed)
  const HealthAssessment = () => {
    const questions = [
      {
        id: "nutrition",
        question: "How would you rate your current nutrition?",
        options: ["Poor", "Fair", "Good", "Excellent"]
      },
      {
        id: "processed",
        question: "How often do you eat ultra-processed foods?",
        options: ["Daily", "Few times a week", "Occasionally", "Rarely"]
      },
      {
        id: "labels",
        question: "Do you check food labels when shopping?",
        options: ["Never", "Sometimes", "Often", "Always"]
      }
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const handleQuestionAnswer = (answer) => {
      handleAnswer(questions[currentQuestion].id, answer);
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        handleNext();
      }
    };

    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100 px-6">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-3xl shadow-2xl p-10">
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-500">Question {currentQuestion + 1} of {questions.length}</span>
                <span className="text-sm text-gray-500">{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div 
                  className="h-full bg-green-500 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                />
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mb-6 text-gray-900">
              {questions[currentQuestion].question}
            </h2>
            
            <div className="space-y-3">
              {questions[currentQuestion].options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleQuestionAnswer(option)}
                  className="w-full p-4 text-left rounded-xl border-2 border-gray-200 hover:border-green-500 hover:bg-green-50 transition-all duration-200 font-medium"
                >
                  {option}
                </button>
              ))}
            </div>
            
            {currentQuestion > 0 && (
              <button
                onClick={() => setCurrentQuestion(currentQuestion - 1)}
                className="mt-6 text-gray-500 hover:text-gray-700 transition-colors"
              >
                ← Back
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  // Step 4: Calculating Results
  const CalculatingStep = () => {
    useEffect(() => {
      const timer = setTimeout(() => {
        handleNext();
      }, 3000);
      return () => clearTimeout(timer);
    }, []);

    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100 px-6">
        <div className="text-center">
          <div className="w-32 h-32 bg-white rounded-full mx-auto mb-8 shadow-xl flex items-center justify-center">
            <div className="w-24 h-24 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Analyzing Your Profile...
          </h2>
          <p className="text-gray-600 text-lg">
            Creating your personalized health plan
          </p>
        </div>
      </div>
    );
  };

  // Step 5: Symptom Checker
  const SymptomChecker = () => {
    const commonSymptoms = [
      "Low Energy", "Brain Fog", "Bloating", "Poor Sleep",
      "Skin Issues", "Weight Gain", "Mood Swings", "Digestive Issues",
      "Headaches", "Joint Pain", "Sugar Cravings", "Inflammation"
    ];

    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100 px-6 py-12">
        <div className="max-w-2xl w-full">
          <div className="bg-white rounded-3xl shadow-2xl p-10">
            <h2 className="text-3xl font-bold mb-2 text-gray-900">
              Do you experience any of these?
            </h2>
            <p className="text-gray-600 mb-8">
              Select all that apply (this helps us personalize your plan)
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
              {commonSymptoms.map((symptom) => (
                <button
                  key={symptom}
                  onClick={() => handleSymptomToggle(symptom)}
                  className={`p-3 rounded-xl border-2 transition-all duration-200 font-medium ${
                    symptoms.includes(symptom)
                      ? "border-green-500 bg-green-50 text-green-700"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  {symptom}
                </button>
              ))}
            </div>
            
            <button
              onClick={handleNext}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-full font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Step 6: Benefits Presentation
  const BenefitsPresentation = () => {
    const benefits = [
      {
        icon: "🚀",
        title: "Boost Your Energy",
        description: "Feel more energized throughout the day with optimized nutrition"
      },
      {
        icon: "🧠",
        title: "Clear Mental Fog",
        description: "Improve focus and mental clarity by eliminating harmful ingredients"
      },
      {
        icon: "💪",
        title: "Stronger Immunity",
        description: "Build a resilient immune system with clean, whole foods"
      },
      {
        icon: "😊",
        title: "Better Mood",
        description: "Balance your hormones and mood with proper nutrition"
      },
      {
        icon: "✨",
        title: "Glowing Skin",
        description: "Achieve clearer, healthier skin from the inside out"
      }
    ];

    const [currentBenefit, setCurrentBenefit] = useState(0);

    useEffect(() => {
      const timer = setInterval(() => {
        if (currentBenefit < benefits.length - 1) {
          setCurrentBenefit(prev => prev + 1);
        }
      }, 2000);
      return () => clearInterval(timer);
    }, [currentBenefit]);

    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100 px-6">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-3xl shadow-2xl p-10">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
              Your Transformation Awaits
            </h2>
            
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-4 p-4 rounded-xl transition-all duration-500 ${
                    index <= currentBenefit
                      ? "bg-green-50 opacity-100 transform scale-100"
                      : "opacity-30 transform scale-95"
                  }`}
                >
                  <div className="text-3xl">{benefit.icon}</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <button
              onClick={handleNext}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-full font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Unlock Your Plan
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Step 7: Choose Goals
  const ChooseGoals = () => {
    const availableGoals = [
      "Lose Weight", "Build Muscle", "More Energy", "Better Sleep",
      "Clear Skin", "Reduce Inflammation", "Improve Digestion", "Mental Clarity"
    ];

    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100 px-6 py-12">
        <div className="max-w-2xl w-full">
          <div className="bg-white rounded-3xl shadow-2xl p-10">
            <h2 className="text-3xl font-bold mb-2 text-gray-900">
              What are your health goals?
            </h2>
            <p className="text-gray-600 mb-8">
              Select up to 3 primary goals
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {availableGoals.map((goal) => (
                <button
                  key={goal}
                  onClick={() => handleGoalToggle(goal)}
                  disabled={goals.length >= 3 && !goals.includes(goal)}
                  className={`p-4 rounded-xl border-2 transition-all duration-200 font-medium ${
                    goals.includes(goal)
                      ? "border-green-500 bg-green-50 text-green-700"
                      : goals.length >= 3
                      ? "border-gray-200 opacity-50 cursor-not-allowed"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  {goal}
                </button>
              ))}
            </div>
            
            <button
              onClick={handleNext}
              disabled={goals.length === 0}
              className={`w-full py-4 rounded-full font-semibold text-lg transition-all duration-200 ${
                goals.length > 0
                  ? "bg-gradient-to-r from-green-500 to-green-600 text-white hover:shadow-lg transform hover:scale-105"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Continue ({goals.length}/3 selected)
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Step 8: Sales Page
  const SalesPage = () => {
    const [selectedPlan, setSelectedPlan] = useState("pro");

    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full mb-4">
              <span>🎉</span>
              <span className="font-semibold">Special Offer: 50% OFF First Month</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Your Personalized Health Plan is Ready!
            </h1>
            <p className="text-xl text-gray-600">
              Based on your assessment, we've identified {symptoms.length} areas for improvement
            </p>
          </div>

          {/* Results Summary */}
          <div className="bg-white rounded-3xl shadow-xl p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Your Health Score</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-red-500 mb-2">65</div>
                <div className="text-gray-600">Current Score</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-green-500 mb-2">92</div>
                <div className="text-gray-600">Potential Score</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-500 mb-2">30</div>
                <div className="text-gray-600">Days to See Results</div>
              </div>
            </div>
            
            {symptoms.length > 0 && (
              <div className="border-t pt-6">
                <h3 className="font-bold mb-3">Areas We'll Help You Improve:</h3>
                <div className="flex flex-wrap gap-2">
                  {symptoms.map((symptom) => (
                    <span key={symptom} className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">
                      {symptom}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {goals.length > 0 && (
              <div className="border-t pt-6 mt-6">
                <h3 className="font-bold mb-3">Your Selected Goals:</h3>
                <div className="flex flex-wrap gap-2">
                  {goals.map((goal) => (
                    <span key={goal} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                      {goal}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Pricing Plans */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
              Choose Your Plan
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Basic Plan */}
              <div 
                className={`bg-white rounded-2xl p-6 cursor-pointer transition-all duration-200 ${
                  selectedPlan === "basic" ? "ring-4 ring-green-500 shadow-xl" : "shadow-lg hover:shadow-xl"
                }`}
                onClick={() => setSelectedPlan("basic")}
              >
                <h3 className="text-xl font-bold mb-2">Basic</h3>
                <div className="text-3xl font-bold mb-4">
                  $4.99<span className="text-sm text-gray-600">/month</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Personalized meal plans</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Basic food scanner</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Weekly progress tracking</span>
                  </li>
                </ul>
              </div>

              {/* Pro Plan */}
              <div 
                className={`bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl p-6 cursor-pointer transition-all duration-200 transform ${
                  selectedPlan === "pro" ? "scale-105 shadow-2xl" : "shadow-lg hover:shadow-xl"
                }`}
                onClick={() => setSelectedPlan("pro")}
              >
                <div className="bg-yellow-400 text-green-900 text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                  MOST POPULAR
                </div>
                <h3 className="text-xl font-bold mb-2">Pro</h3>
                <div className="text-3xl font-bold mb-1">
                  <span className="line-through opacity-75 text-xl">$19.99</span> $9.99<span className="text-sm opacity-90">/month</span>
                </div>
                <div className="text-sm mb-4 opacity-90">First month 50% OFF!</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <span>✓</span>
                    <span>Everything in Basic</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span>✓</span>
                    <span>Advanced food scanner</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span>✓</span>
                    <span>Unlimited product scans</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span>✓</span>
                    <span>Personal nutrition coach</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span>✓</span>
                    <span>Recipe recommendations</span>
                  </li>
                </ul>
              </div>

              {/* Premium Plan */}
              <div 
                className={`bg-white rounded-2xl p-6 cursor-pointer transition-all duration-200 ${
                  selectedPlan === "premium" ? "ring-4 ring-green-500 shadow-xl" : "shadow-lg hover:shadow-xl"
                }`}
                onClick={() => setSelectedPlan("premium")}
              >
                <h3 className="text-xl font-bold mb-2">Premium</h3>
                <div className="text-3xl font-bold mb-4">
                  $29.99<span className="text-sm text-gray-600">/month</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Everything in Pro</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Family accounts (up to 6)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>1-on-1 coaching calls</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Custom meal prep service</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Priority support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <button
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-12 py-5 rounded-full font-bold text-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
            >
              Start Your 7-Day Free Trial
            </button>
            <p className="text-gray-600 mt-4">
              No credit card required • Cancel anytime
            </p>
          </div>

          {/* Trust Badges */}
          <div className="mt-16 text-center">
            <div className="flex justify-center gap-8 mb-8">
              <div>
                <div className="text-4xl mb-2">🔒</div>
                <div className="text-sm text-gray-600">SSL Secured</div>
              </div>
              <div>
                <div className="text-4xl mb-2">💳</div>
                <div className="text-sm text-gray-600">Safe Payment</div>
              </div>
              <div>
                <div className="text-4xl mb-2">✅</div>
                <div className="text-sm text-gray-600">Money Back Guarantee</div>
              </div>
            </div>
            <p className="text-gray-500 text-sm">
              Join 50,000+ people transforming their health with Almonds
            </p>
          </div>
        </div>
      </div>
    );
  };

  // Render current step
  const renderStep = () => {
    switch(currentStep) {
      case 1: return <WelcomeStep />;
      case 2: return <SignUpStep />;
      case 3: return <HealthAssessment />;
      case 4: return <CalculatingStep />;
      case 5: return <SymptomChecker />;
      case 6: return <BenefitsPresentation />;
      case 7: return <ChooseGoals />;
      case 8: return <SalesPage />;
      default: return <WelcomeStep />;
    }
  };

  return (
    <div>
      {currentStep !== 1 && currentStep !== 8 && <ProgressBar />}
      {renderStep()}
    </div>
  );
};

export default OnboardingFlow;
