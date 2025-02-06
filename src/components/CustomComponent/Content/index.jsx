import React, { useState, useEffect, Suspense, lazy } from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrophy,
  faCamera,
  faCalendarAlt,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import "./index.scss";
import { motion } from "framer-motion";

const WelcomeSection = lazy(() => import("./sections/WelcomeSection"));
const WinnersSection = lazy(() => import("./sections/WinnersSections"));
const FeaturedContests = lazy(() => import("./sections/FeaturedContests"));
const HowItWorks = lazy(() => import("./sections/HowItWorks"));
const TrendingSection = lazy(() => import("./sections/TrendingSection"));
const InspirationSection = lazy(() => import("./sections/InspirationSection"));

const LoadingSpinner = () => (
  <div className="section-loading">
    <FontAwesomeIcon icon={faSpinner} spin />
    <span>Yükleniyor...</span>
  </div>
);

const Content = ({ children }) => {
  const location = useLocation();
  const [winners, setWinners] = useState([]);
  const [loading, setLoading] = useState(true);

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
      },
    },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.main
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      className="content"
    >
      <div className="content-container">
        {location.pathname === "/" && (
          <>
            <Suspense fallback={<LoadingSpinner />}>
              <WelcomeSection />
            </Suspense>

            <Suspense fallback={<LoadingSpinner />}>
              <WinnersSection
                setWinners={setWinners}
                loading={loading}
                setLoading={setLoading}
              />
            </Suspense>

            <Suspense fallback={<LoadingSpinner />}>
              <FeaturedContests />
            </Suspense>

            <Suspense fallback={<LoadingSpinner />}>
              <HowItWorks />
            </Suspense>

            <Suspense fallback={<LoadingSpinner />}>
              <TrendingSection />
            </Suspense>

            <Suspense fallback={<LoadingSpinner />}>
              <InspirationSection />
            </Suspense>
          </>
        )}
        {children}
      </div>
    </motion.main>
  );
};

export default Content;
