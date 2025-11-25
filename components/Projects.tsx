import { ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { InViewMotion } from './InViewMotion';

// Safe wrapper for InViewMotion to prevent errors
function SafeInViewMotion({ children, ...props }: any) {
  try {
    return <InViewMotion {...props}>{children}</InViewMotion>;
  } catch (error) {
    console.warn('InViewMotion error:', error);
    return <div className={props.className}>{children}</div>;
  }
}

// Import project images from the provided portfolio image
import portfolioImage from 'figma:asset/bf845e96af26512da66825311b5d41c297da1f8f.png';

export function Projects() {
  const projects = [
    {
      title: "Aeon 영어학습 사이트",
      description: "일본 사용자 대상 영어학습 사이트의 UX/UI를 디자인하여, 학습 편의성과 접근성을 강화하고 효과적인 학습 경험을 유도",
      image: portfolioImage,
      tags: ["LG CNS"],
      year: "2025",
      slug: "PJ-01",
      accent: "#A259FF",
      imagePosition: "0% 83%", // 빈 영역 (임시)
      customThumbnail: true
    },
    {
      title: "코웨이 서비스 구축/운영",
      description: "내부 직원이 판촉 활동을 효율적으로 관리하고 코디 업무를 지원할 수 있도록, 복잡한 데이터를 직관적으로 시각화한 직관적인 UX/UI를 적용",
      image: portfolioImage,
      tags: ["코웨이"],
      year: "2024",
      slug: "PJ-02",
      accent: "#1ABCFE",
      imagePosition: "0% 83%", // 빈 영역 (임시)
      customThumbnail: true
    },
    {
      title: "AIA생명 홈페이지 리뉴얼",
      description: "공식 홈페이지 리뉴얼을 통해 보험 상품 정보의 접근성과 고객 편의성을 강화하고 보험 서비스 특성에 맞는 정보 구조를 재설계하고 UX/UI를 개선",
      image: portfolioImage,
      tags: ["AIA생명"],
      year: "2023",
      slug: "PJ-03",
      accent: "#F24E1E",
      imagePosition: "0% 8%" // 원래 LG CNS 이미지
    },
    {
      title: "농협 올원뱅크APP 서비스 운영",
      description: "모바일 뱅킹 올원뱅크APP의 UX/UI 유지보수 및 화면 개선을 수행하여 사용자 경험을 지속적으로 개선하고, 고객 친화적 금융 서비스 지원",
      image: portfolioImage,
      tags: ["농협은행"],
      year: "2021",
      slug: "PJ-05",
      accent: "#0ACF83",
      imagePosition: "0% 23%" // 원래 코웨이 이미지
    }, 
    {
      title: "하나카드 서비스 운영",
      description: "하나카드내에서 진행하는 이벤트와 웹운영을 하면서 생활서비스 전용 모바일 플랫폼인 LIFE MUST Have앱을 담당",
      image: portfolioImage,
      tags: ["하나은행"],
      year: "2022",
      slug: "PJ-06",
      accent: "#1ABCFE",
      imagePosition: "0% 38%" // 원래 AIA생명 이미지
    }
  ];

  return (
    <section id="projects-section" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-10">
        <div className="w-32 h-32 bg-gradient-to-r from-[#A259FF]/5 to-[#1ABCFE]/5 rounded-full blur-2xl" />
      </div>
      
      <div className="absolute bottom-20 left-10">
        <div className="w-24 h-24 bg-gradient-to-r from-[#0ACF83]/5 to-[#F24E1E]/5 rounded-full blur-xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <InViewMotion className="text-center mb-16" direction="zoom" intensity="dramatic">
          <motion.h2 
            className="text-3xl md:text-4xl mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Projects
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-[#1ABCFE] to-[#0ACF83] mx-auto"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 80, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
          <motion.p 
            className="text-muted-foreground mt-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            사용자 중심의 디자인으로 비즈니스 임팩트를 만들어낸 주요 프로젝트들을 소개합니다.
          </motion.p>
        </InViewMotion>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <SafeInViewMotion 
              key={index} 
              delay={index * 0.1} 
              direction="up"
              intensity="normal"
            >
              <motion.div 
                className="group h-full"
                whileHover={{ 
                  y: -6,
                  scale: 1.02
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 20
                }}
              >
                <motion.div 
                  className="relative h-full"
                >
                  <div 
                    className="bg-card border rounded-xl sm:rounded-2xl overflow-hidden h-full transition-all duration-500 group-hover:shadow-2xl group-hover:border-opacity-50 relative"
                    style={{
                      boxShadow: `0 10px 40px ${project.accent}10, 0 0 0 1px ${project.accent}15`
                    }}
                  >
                    {/* Glow effect on hover */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at 50% 0%, ${project.accent}10, transparent 70%)`
                      }}
                      initial={{ scale: 0.8 }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />

                    <div className="relative overflow-hidden">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="relative"
                      >
                        <ImageWithFallback 
                          src={project.image}
                          alt={project.title}
                          className="w-full h-40 sm:h-48 object-cover"
                          style={{
                            objectPosition: project.imagePosition || 'center'
                          }}
                        />
                        
                        {/* Overlay gradient */}
                        <motion.div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{
                            background: `linear-gradient(135deg, ${project.accent}20, transparent 60%)`
                          }}
                        />
                      </motion.div>

                      <motion.div 
                        className="absolute top-4 right-4 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold shadow-lg"
                        style={{
                          background: `${project.accent}40`,
                          color: 'white',
                          border: `2px solid ${project.accent}60`
                        }}
                        whileHover={{ 
                          scale: 1.1,
                          rotate: [0, -5, 5, 0],
                          background: `${project.accent}60`
                        }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        {project.year}
                      </motion.div>
                    </div>

                    <Link to={`/projects/${project.slug}`}>
                      <div className="p-4 sm:p-6 relative">
                        <motion.div 
                          className="flex flex-wrap gap-2 mb-4"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.1 }}
                          viewport={{ once: true }}
                        >
                          {project.tags.map((tag, tagIndex) => (
                            <motion.span 
                              key={tagIndex} 
                              className="text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm"
                              style={{
                                color: project.accent,
                                background: `${project.accent}15`,
                                border: `1px solid ${project.accent}25`
                              }}
                              whileHover={{ 
                                scale: 1.15,
                                y: -2,
                                boxShadow: `0 5px 15px ${project.accent}30`
                              }}
                              transition={{ type: "spring", stiffness: 500, damping: 20 }}
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </motion.div>
                        
                        <motion.h3 
                          className="mb-3 transition-all duration-300 group-hover:font-semibold"
                          style={{ color: 'white' }}
                          whileHover={{ 
                            scale: 1.02,
                            color: project.accent
                          }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                          {project.title}
                        </motion.h3>
                        
                        <motion.p 
                          className="text-muted-foreground text-sm leading-relaxed mb-6 group-hover:text-white transition-colors duration-300"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.2 }}
                          viewport={{ once: true }}
                        >
                          {project.description}
                        </motion.p>
                      
                        <motion.div
                          className="hidden"
                          whileHover={{ x: 8, scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="p-0 h-auto py-2 px-4 transition-all duration-300 group-hover:text-white rounded-full"
                            style={{
                              background: `${project.accent}10`
                            }}
                          >
                            <span className="mr-2 font-medium">View Project</span>
                            <motion.div
                              animate={{ rotate: [0, 15, 0] }}
                              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            >
                              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </motion.div>
                          </Button>
                        </motion.div>
                      </div>
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            </SafeInViewMotion>
          ))}
        </div>
      </div>
    </section>
  );
}