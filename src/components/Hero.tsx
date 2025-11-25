import { ArrowDown, Star, Building2, Package, BriefcaseBusiness } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

// Static Text Component - no animations
const StaticText = ({ text, className = "" }: { text: string; className?: string }) => {
  return (
    <span className={className}>
      {text}
    </span>
  );
};

// Simple Number Counter without complex animations
const NumberCounter = ({ target }: { target: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      let current = 0;
      const increment = target / 30; // 30 steps
      const updateCount = () => {
        current += increment;
        if (current >= target) {
          setCount(target);
        } else {
          setCount(Math.floor(current));
          requestAnimationFrame(updateCount);
        }
      };
      updateCount();
    }, 800);

    return () => clearTimeout(timer);
  }, [target]);

  return <span>{count}</span>;
};

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Check if device is mobile
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Track mouse for desktop interactions
    const handleMouseMove = (e: MouseEvent) => {
      if (!isMobile) {
        setMousePosition({ x: e.clientX, y: e.clientY });
      }
    };
    
    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobile]);

  const statsData = [
    { icon: BriefcaseBusiness, number: 12, suffix: "+", label: "경력", color: "from-[#A259FF] to-[#A259FF]" },
    { icon: Package, number: 14, suffix: "+", label: "프로젝트", color: "from-[#1ABCFE] to-[#1ABCFE]" },
    { icon: Building2, number: 10, suffix: "+", label: "클라이언트", color: "from-[#F24E1E] to-[#F24E1E]" },
  ];

  if (!mounted) return null;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced background effects */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/80 pointer-events-none z-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      
      {/* Interactive mouse follow effect - desktop only */}
      {!isMobile && (
        <motion.div
          className="fixed inset-0 pointer-events-none z-0"
          style={{
            background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(162, 89, 255, 0.03), transparent 60%)`
          }}
        />
      )}
      
      {/* Animated background orbs - desktop only */}
      {!isMobile && (
        <>
          <motion.div
            className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-[#A259FF]/5 to-[#1ABCFE]/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
              x: [0, 50, 0],
              y: [0, -30, 0]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div
            className="absolute bottom-32 right-20 w-40 h-40 bg-gradient-to-r from-[#0ACF83]/5 to-[#F24E1E]/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.5, 0.2],
              x: [0, -60, 0],
              y: [0, 40, 0]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 5
            }}
          />
        </>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center space-y-6 sm:space-y-8">
          {/* Role Badge */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 whtie border border-whtie/20 rounded-full">
            <Star className="w-3 sm:w-4 h-3 sm:h-4 text-[#0ACF83]" />
            <span className="text-xs sm:text-sm font-medium text-[#0ACF83]">UX/UI Designer</span>
          </div>

          <div className="space-y-6 sm:space-y-8">
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl tracking-tight leading-none"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 1.2, 
                delay: 0.5,
                type: "spring",
                stiffness: 100,
                damping: 20
              }}
            >
              <motion.span 
                className="inline-block bg-gradient-to-r from-white via-[#A259FF] to-[#1ABCFE] bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  backgroundSize: '200% 200%'
                }}
              >
                <StaticText text="정금화" />
              </motion.span>
            </motion.h1>
            
            <motion.h3 
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <motion.p 
                className="mb-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.5 }}
              >
                다양한 프로젝트 경험과 AI 활용 역량을 바탕으로{" "}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.8 }}
              >
                차세대 사용자 경험을 디자인합니다.
              </motion.p>
            </motion.h3>
          </div>

          {/* Stats - Mobile Responsive */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 pt-6 sm:pt-8">
            {statsData.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="relative text-center py-4 sm:py-6 px-4 sm:px-6 w-32 sm:w-40 group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                {/* Clean background */}
                <motion.div
                  className="absolute inset-0 rounded-xl backdrop-blur-sm"
                  style={{
                    background: `
                      linear-gradient(135deg, 
                        rgba(20, 21, 25, 0.9) 0%,
                        rgba(26, 27, 33, 0.8) 50%,
                        rgba(20, 21, 25, 0.9) 100%
                      )
                    `,
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                  whileHover={{
                    border: '1px solid rgba(162, 89, 255, 0.3)'
                  }}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Clean icon */}
                  <motion.div 
                    className={`w-8 sm:w-10 h-8 sm:h-10 mx-auto mb-3 sm:mb-5 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <stat.icon className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
                  </motion.div>

                  {/* Clean number display */}
                  <motion.div 
                    className="text-xl sm:text-2xl md:text-3xl font-bold text-white relative font-mono mb-1 sm:mb-2"
                  >
                    <NumberCounter target={stat.number} />
                    <span className="ml-1 text-white">
                      {stat.suffix}
                    </span>
                  </motion.div>

                  {/* Clean label */}
                  <motion.div 
                    className="text-xs sm:text-sm text-muted-foreground font-medium tracking-wide"
                    whileHover={{
                      color: '#A259FF'
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {stat.label}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.5 }}
      >
        <motion.div 
          className="flex flex-col items-center gap-1 sm:gap-2 cursor-pointer"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.1 }}
          onClick={() => {
            document.getElementById('skills-section')?.scrollIntoView({ 
              behavior: 'smooth' 
            });
          }}
        >
          <motion.span 
            className="text-xs text-muted-foreground hidden sm:block"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            Scroll to explore
          </motion.span>
          <motion.div
            animate={{ 
              y: [0, 5, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <ArrowDown className="w-4 sm:w-5 h-4 sm:h-5 text-[#0ACF83]" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}