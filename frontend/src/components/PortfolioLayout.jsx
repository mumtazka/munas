import React, { useEffect, useRef } from 'react';
// Temporary disable GSAP to debug
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LeftSidebar from './LeftSidebar';
import RightContent from './RightContent';
import AIAssistant from './AIAssistant';
import { portfolioData } from '../mock/portfolioData';

// gsap.registerPlugin(ScrollTrigger);

const PortfolioLayout = () => {
  const mainRef = useRef(null);
  const heroImageRef = useRef(null);
  const sidebarRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // Temporarily disable GSAP animations for debugging
    // const setupAnimations = () => {
    //   // Hero image animation on scroll
    //   gsap.timeline({
    //     scrollTrigger: {
    //       trigger: mainRef.current,
    //       start: "top top",
    //       end: "+=100vh",
    //       scrub: 1,
    //       pin: false,
    //     }
    //   })
    //   .to(heroImageRef.current, {
    //     scale: 0.4,
    //     x: -200,
    //     y: -100,
    //     duration: 1,
    //     ease: "power2.out"
    //   })
    //   .to(sidebarRef.current, {
    //     x: 0,
    //     opacity: 1,
    //     duration: 0.8,
    //     ease: "power2.out"
    //   }, "-=0.5");

    //   // Content fade in
    //   gsap.fromTo(contentRef.current, 
    //     { opacity: 0, x: 50 },
    //     {
    //       opacity: 1,
    //       x: 0,
    //       duration: 1,
    //       ease: "power2.out",
    //       scrollTrigger: {
    //         trigger: contentRef.current,
    //         start: "top 80%",
    //         end: "bottom 20%",
    //       }
    //     }
    //   );
    // };

    // // Small delay to ensure DOM is ready
    // const timer = setTimeout(setupAnimations, 100);

    // return () => {
    //   clearTimeout(timer);
    //   ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    // };
  }, []);

  return (
    <div ref={mainRef} className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section - Full screen initially */}
      <div className="fixed inset-0 z-10 flex items-center justify-center">
        <div 
          ref={heroImageRef}
          className="relative transform-gpu"
          style={{ transformOrigin: 'center center' }}
        >
          <img
            src={portfolioData.personal.profileImage}
            alt={portfolioData.personal.name}
            className="w-80 h-80 rounded-full object-cover shadow-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-full" />
        </div>
      </div>

      {/* Left Sidebar - Hidden initially, shows after scroll */}
      <div 
        ref={sidebarRef}
        className="fixed left-0 top-0 w-80 h-full z-20 opacity-0"
        style={{ transform: 'translateX(-100px)' }}
      >
        <LeftSidebar data={portfolioData} />
      </div>

      {/* Right Content - Scrollable */}
      <div 
        ref={contentRef}
        className="ml-80 min-h-screen"
        style={{ paddingTop: '100vh' }}
      >
        <RightContent data={portfolioData} />
      </div>

      {/* AI Assistant */}
      <AIAssistant />
    </div>
  );
};

export default PortfolioLayout;