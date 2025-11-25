import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { WorkExperience } from './components/WorkExperience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { MotionProvider } from './components/MotionProvider';
import React, { useEffect, useState, lazy, Suspense, useCallback } from 'react';

// Lazy load project components for better performance
const PJ01 = lazy(() => import('./components/projects/PJ-01').then(module => ({ default: module.PJ01 })));
const PJ02 = lazy(() => import('./components/projects/PJ-02').then(module => ({ default: module.PJ02 })));
const PJ03 = lazy(() => import('./components/projects/PJ-03').then(module => ({ default: module.PJ03 })));
const PJ04 = lazy(() => import('./components/projects/PJ-04').then(module => ({ default: module.PJ04 })));
const PJ05 = lazy(() => import('./components/projects/PJ-05').then(module => ({ default: module.PJ05 })));
const PJ06 = lazy(() => import('./components/projects/PJ-06').then(module => ({ default: module.PJ06 })));

// Loading component
const ProjectLoading = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="flex flex-col items-center gap-4">
      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      <span className="text-muted-foreground">Loading...</span>
    </div>
  </div>
);

// Error Boundary Component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="text-center">
            <h2 className="text-xl mb-4">Something went wrong.</h2>
            <button 
              onClick={() => window.location.reload()} 
              className="px-4 py-2 bg-primary text-white rounded"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Optimized page transition variants
const pageVariants = {
  initial: {
    opacity: 0,
    y: 10
  },
  in: {
    opacity: 1,
    y: 0
  },
  out: {
    opacity: 0,
    y: -10
  }
};

const pageTransition = {
  type: "tween",
  ease: [0.25, 0.25, 0.25, 1],
  duration: 0.4
};

// Scroll management component
function ScrollManager() {
  const location = useLocation();
  
  useEffect(() => {
    // Check if coming from a project page to portfolio
    const fromProject = sessionStorage.getItem('fromProject');
    
    if (location.pathname === '/' && fromProject === 'true') {
      // Clear the flag
      sessionStorage.removeItem('fromProject');
      
      // Scroll to Projects section after a brief delay for page to render
      setTimeout(() => {
        const projectsSection = document.getElementById('projects-section');
        if (projectsSection) {
          projectsSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    } else if (location.pathname.startsWith('/projects/')) {
      // For project pages, scroll to top
      window.scrollTo(0, 0);
    } else if (location.pathname === '/') {
      // For portfolio page (not from project), scroll to top
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return null;
}

function Portfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile/tablet
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024 || 'ontouchstart' in window);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Throttled mouse tracking - only on desktop
  useEffect(() => {
    if (isMobile) return;

    let timeoutId: NodeJS.Timeout;
    
    const handleMouseMove = (e: MouseEvent) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      }, 16); // ~60fps throttling
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeoutId);
    };
  }, [isMobile]);

  return (
    <MotionProvider>
      <motion.div 
        className="min-h-screen relative overflow-hidden"
        variants={pageVariants}
        initial="initial"
        animate="in"
        exit="out"
        transition={pageTransition}
      >
        {/* Optimized background - only on desktop */}
        {!isMobile && (
          <motion.div
            className="fixed inset-0 pointer-events-none z-0"
            style={{
              background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(162, 89, 255, 0.02), transparent 50%)`
            }}
          />
        )}
        
        {/* Enhanced floating elements - only on desktop */}
        {!isMobile && (
          <>
            {/* Primary floating orbs */}
            <motion.div
              className="fixed top-10 left-10 w-4 h-4 bg-gradient-to-r from-[#A259FF] to-[#1ABCFE] rounded-full opacity-30 blur-sm"
              animate={{
                y: [0, -40, 0],
                x: [0, 20, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <motion.div
              className="fixed top-1/4 right-10 w-6 h-6 bg-gradient-to-r from-[#0ACF83] to-[#A259FF] rounded-full opacity-25 blur-sm"
              animate={{
                y: [0, 30, 0],
                x: [0, -25, 0],
                rotate: [0, -180, -360],
                scale: [1, 0.8, 1]
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />
            
            <motion.div
              className="fixed bottom-1/3 right-16 w-3 h-8 bg-gradient-to-r from-[#1ABCFE] to-[#FF7262] rounded-full opacity-20"
              animate={{
                x: [0, 50, 0],
                y: [0, -20, 0],
                rotate: [0, 90, 180],
                scaleY: [1, 1.5, 1]
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 3
              }}
            />
            
            <motion.div
              className="fixed bottom-20 left-1/4 w-5 h-5 bg-gradient-to-r from-[#F24E1E] to-[#0ACF83] rounded-full opacity-20"
              animate={{
                y: [0, -35, 0],
                x: [0, 30, 0],
                rotate: [0, 270, 360],
                scale: [1, 1.3, 1]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 5
              }}
            />

            {/* Geometric shapes */}
            <motion.div
              className="fixed top-1/2 left-20 w-2 h-12 bg-gradient-to-b from-[#A259FF]/20 to-transparent rounded-full"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            <motion.div
              className="fixed top-2/3 right-1/4 w-8 h-2 bg-gradient-to-r from-[#1ABCFE]/15 to-[#FF7262]/15 rounded-full"
              animate={{
                x: [0, -40, 0],
                y: [0, 20, 0],
                rotate: [0, -180, 0],
                scaleX: [1, 1.5, 1]
              }}
              transition={{
                duration: 16,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 7
              }}
            />

            {/* Particle trails */}
            <motion.div
              className="fixed top-1/3 left-1/3 w-1 h-1 bg-[#0ACF83] rounded-full opacity-40"
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
                scale: [0, 1, 0],
                opacity: [0, 0.6, 0]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeOut",
                delay: 1
              }}
            />
            
            <motion.div
              className="fixed bottom-1/2 right-1/3 w-1 h-1 bg-[#FF7262] rounded-full opacity-40"
              animate={{
                x: [0, -80, 0],
                y: [0, 60, 0],
                scale: [0, 1, 0],
                opacity: [0, 0.5, 0]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeOut",
                delay: 4
              }}
            />
          </>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative z-10"
        >
          <Hero />
          <Skills />
          <WorkExperience />
          <Projects />
          <Contact />
        </motion.div>
      </motion.div>
    </MotionProvider>
  );
}

// Optimized project wrapper component
function ProjectWrapper({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Set flag when entering a project page
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      // This runs when leaving the project page
      sessionStorage.setItem('fromProject', 'true');
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <MotionProvider>
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="in"
        exit="out"
        transition={pageTransition}
        className="relative"
      >
        {/* Simplified background for project pages - only on desktop */}
        {!isMobile && (
          <motion.div
            className="fixed inset-0 pointer-events-none z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-r from-[#A259FF]/3 to-[#1ABCFE]/3 rounded-full blur-3xl"
              animate={{
                x: [0, 50, 0],
                y: [0, -50, 0]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        )}
        
        <div className="relative z-10">
          {children}
        </div>
      </motion.div>
    </MotionProvider>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <div className="relative bg-background">
        <Router>
          <ScrollManager />
          <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
            <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/projects/PJ-01" element={
              <ProjectWrapper>
                <Suspense fallback={<ProjectLoading />}>
                  <PJ01 />
                </Suspense>
              </ProjectWrapper>
            } />
            <Route path="/projects/PJ-02" element={
              <ProjectWrapper>
                <Suspense fallback={<ProjectLoading />}>
                  <PJ02 />
                </Suspense>
              </ProjectWrapper>
            } />
            <Route path="/projects/PJ-03" element={
              <ProjectWrapper>
                <Suspense fallback={<ProjectLoading />}>
                  <PJ03 />
                </Suspense>
              </ProjectWrapper>
            } />
            <Route path="/projects/PJ-04" element={
              <ProjectWrapper>
                <Suspense fallback={<ProjectLoading />}>
                  <PJ04 />
                </Suspense>
              </ProjectWrapper>
            } />
            <Route path="/projects/PJ-05" element={
              <ProjectWrapper>
                <Suspense fallback={<ProjectLoading />}>
                  <PJ05 />
                </Suspense>
              </ProjectWrapper>
            } />
            <Route path="/projects/PJ-06" element={
              <ProjectWrapper>
                <Suspense fallback={<ProjectLoading />}>
                  <PJ06 />
                </Suspense>
              </ProjectWrapper>
            } />
            {/* Legacy routes for backwards compatibility */}
            <Route path="/projects/aeon" element={<Navigate to="/projects/PJ-01" replace />} />
            <Route path="/projects/coway" element={<Navigate to="/projects/PJ-02" replace />} />
            <Route path="/projects/aia" element={<Navigate to="/projects/PJ-03" replace />} />
            <Route path="/projects/one-q" element={<Navigate to="/projects/PJ-04" replace />} />
            <Route path="/projects/allone-bank" element={<Navigate to="/projects/PJ-05" replace />} />
            <Route path="/projects/hana-card" element={<Navigate to="/projects/PJ-06" replace />} />
            {/* Handle specific preview page route */}
            <Route path="/preview_page.html" element={<Navigate to="/" replace />} />
            {/* Catch-all route for any other undefined paths */}
            <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </AnimatePresence>
        </Router>
      </div>
    </ErrorBoundary>
  );
}