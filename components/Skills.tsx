import {
  Search,
  Palette,
  Layers,
  Sparkles,
  Figma,
  Smartphone,
  Monitor,
  PenTool,
  Settings,
  Image,
  Readdy,
  Lightbulb,
  Activity,
} from "lucide-react";

import {
  CgFigma,
} from "react-icons/cg";

import {
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobexd,
} from "react-icons/si";

import {
  RiImageAiFill,
  RiLayout3Fill,
  RiCodeBoxFill,
  RiFolderSharedFill,
} from "react-icons/ri";

import { motion } from 'motion/react';
import { InViewMotion } from './InViewMotion';
import { useInView } from '../hooks/useInView';
import { useState, useEffect } from 'react';

export function Skills() {
  const skillCategories = [
    {
      title: "AI-UXDTQ",
      icon: Lightbulb,
      description: "2025.08",
      skills: ["인공지능디자인협회장"],
    },
    {
      title: "시각디자인 기사",
      icon: Palette,
      description: "2018.08",
      skills: ["한국인력관리공단"],
    },
    {
      title: "컴퓨터 그래픽스 운용 기능사",
      icon: PenTool,
      description: "2008.08",
      skills: ["한국인력관리공단"],
    },
  ];

  const tools = [
    { name: "Figma", icon: CgFigma, category: "Design" },
    { name: "Photoshop", icon: SiAdobephotoshop, category: "Design" },
    { name: "Illustrator", icon: SiAdobeillustrator, category: "Design" },
    { name: "Adobe XD", icon: SiAdobexd, category: "Design" },
    { name: "Jeplin", icon: RiFolderSharedFill, category: "Design" },
    { name: "Protopie", icon: RiCodeBoxFill, category: "Prototyping" },
    { name: "Midjourney", icon: RiImageAiFill, category: "AI" },
    { name: "Relume", icon: RiLayout3Fill, category: "AI" },
  ];

  return (
    <section id="skills-section" className="py-24 bg-gradient-to-b from-[#1a1b21] to-background relative overflow-hidden">
      {/* Enhanced Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-[#A259FF] to-[#1ABCFE] rounded-full blur-3xl" 
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-[#0ACF83] to-[#F24E1E] rounded-full blur-3xl" 
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
            x: [0, -40, 0],
            y: [0, 30, 0]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
        <motion.div 
          className="absolute top-1/2 right-1/3 w-16 h-16 bg-gradient-to-r from-[#FF7262] to-[#A259FF] rounded-full blur-2xl" 
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.15, 0.4, 0.15],
            rotate: [0, 180, 360],
            x: [0, 25, 0],
            y: [0, -35, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 7
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <InViewMotion className="text-center mb-12 sm:mb-16">
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            Skills & Tools
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-[#A259FF] to-[#F24E1E] mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false }}
          />
        </InViewMotion>

        {/* Core Skills */}
        <InViewMotion delay={0.2}>
          <h3 className="text-center text-lg sm:text-xl mb-8 sm:mb-10">자격증</h3>
        </InViewMotion>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <InViewMotion key={index} delay={index * 0.1} direction="up">
                <motion.div 
                  className="text-center group h-full"
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="bg-background border rounded-2xl p-6 sm:p-8 h-full transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#A259FF]/10 group-hover:border-[#A259FF]/30">
                    <motion.div 
                      className="inline-flex items-center justify-center w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-[#A259FF]/20 to-[#1ABCFE]/20 rounded-2xl mb-4 sm:mb-6 border border-white/10"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5,
                        background: "linear-gradient(135deg, rgba(162, 89, 255, 0.3), rgba(26, 188, 254, 0.3))"
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <IconComponent className="w-6 sm:w-8 h-6 sm:h-8 text-[#A259FF] group-hover:text-[#1ABCFE] transition-colors duration-300" />
                    </motion.div>
                    <h3 className="mb-3 sm:mb-4 text-base sm:text-lg">{category.title}</h3>
                    <p className="text-muted-foreground mb-2 text-sm leading-relaxed">
                      {category.description}
                    </p>
                    <div className="space-y-2">
                      {category.skills.map((skill, skillIndex) => (
                        <div
                          key={skillIndex}
                          className="text-sm text-muted-foreground"
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </InViewMotion>
            );
          })}
        </div>

        {/* Tools와 핵심 역량을 가로로 배치 - 높이 맞춤 */}
        <InViewMotion delay={0.2}>
          <h3 className="text-center text-lg sm:text-xl mb-8 sm:mb-10">Skills</h3>
        </InViewMotion>
        
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {/* Tools - 왼쪽 1/2 */}
          <div className="flex flex-col min-w-0">
            <motion.div 
              className="grid grid-cols-3 sm:grid-cols-4 gap-4 sm:gap-6 flex-1"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.05
                  }
                }
              }}
            >
              {tools.map((tool, index) => {
                const IconComponent = tool.icon;
                return (
                  <motion.div 
                    key={index} 
                    className="text-center group"
                    variants={{
                      hidden: { opacity: 0, y: 20, scale: 0.9 },
                      visible: { opacity: 1, y: 0, scale: 1 }
                    }}
                    transition={{ duration: 0.4 }}
                    whileHover={{ 
                      y: -8,
                      scale: 1.05,
                      transition: { type: "spring", stiffness: 400, damping: 17 }
                    }}
                  >
                    <div className="bg-background border rounded-xl p-3 sm:p-5 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#A259FF]/10 group-hover:border-[#A259FF]/30 h-full flex flex-col justify-center">
                      <motion.div
                        whileHover={{ 
                          rotate: [0, -10, 10, 0],
                          scale: 1.2
                        }}
                        transition={{ duration: 0.4 }}
                      >
                        <IconComponent className="w-6 sm:w-8 h-6 sm:h-8 text-muted-foreground mx-auto mb-2 sm:mb-3 group-hover:text-[#A259FF] transition-colors duration-300" />
                      </motion.div>
                      <div className="text-xs sm:text-sm mb-1 group-hover:text-white transition-colors duration-300 text-center">
                        {tool.name}
                      </div>
                      <div className="text-xs text-muted-foreground group-hover:text-[#1ABCFE] transition-colors duration-300 text-center">
                        {tool.category}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* 핵심 역량 그래프 - 오른쪽 1/2 */}
          <div className="flex flex-col min-w-0 w-full">
             <div className="flex-1 flex items-center w-full">
              <FillUpChart delay={0.5}>
                <div className="bg-card border rounded-2xl p-6 sm:p-8 w-full h-full flex flex-col justify-center min-w-0">
                  <div className="space-y-6 sm:space-y-8 w-full">
                    <SkillBar 
                      name="디자인 시스템 구축" 
                      percentage={100} 
                      color="from-[#F24E1E] to-[#A259FF]" 
                      textColor="text-[#F24E1E]"
                      delay={0.2}
                    />
                    <SkillBar 
                      name="반응형 디자인" 
                      percentage={100} 
                      color="from-[#A259FF] to-[#1ABCFE]" 
                      textColor="text-[#A259FF]"
                      delay={0.4}
                    />
                    <SkillBar 
                      name="비주얼 디자인" 
                      percentage={95} 
                      color="from-[#1ABCFE] to-[#0ACF83]" 
                      textColor="text-[#1ABCFE]"
                      delay={0.6}
                    />
                    <SkillBar 
                      name="AI 도구 활용" 
                      percentage={90} 
                      color="from-[#0ACF83] to-[#FF7262]" 
                      textColor="text-[#0ACF83]"
                      delay={0.8}
                    />
                  </div>
                </div>
              </FillUpChart>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 부드러운 페이드인 효과가 적용된 래퍼 컴포넌트 - 스크롤할 때마다 실행
function FillUpChart({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, isInView } = useInView({ threshold: 0.3, triggerOnce: false });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.95 }}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: [0.25, 0.25, 0.25, 1]
      }}
      className="relative w-full"
    >
      {children}
    </motion.div>
  );
}

// 개별 스킬 바 컴포넌트 - 스크롤할 때마다 실행
function SkillBar({ 
  name, 
  percentage, 
  color, 
  textColor, 
  delay = 0 
}: { 
  name: string; 
  percentage: number; 
  color: string; 
  textColor: string; 
  delay?: number; 
}) {
  const { ref, isInView } = useInView({ threshold: 0.3, triggerOnce: false });

  return (
    <div ref={ref}>
      <div className="flex justify-between items-center mb-2">
        <span className={`text-xs sm:text-sm ${textColor}`}>{name}</span>
        <motion.span 
          className="text-xs sm:text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: delay + 1.0 }}
        >
          {percentage}%
        </motion.span>
      </div>
      <div className="h-2 sm:h-3 bg-muted rounded-full overflow-hidden relative">
        {/* 배경 그라데이션 */}
        <div className={`absolute inset-0 bg-gradient-to-r ${color} opacity-20 rounded-full`} />
        
        {/* 메인 진행 바 - 왼쪽에서 오른쪽으로 채워짐 */}
        <motion.div 
          className={`h-2 sm:h-3 bg-gradient-to-r ${color} rounded-full relative overflow-hidden`}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ 
            duration: 1.5, 
            delay: delay,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          {/* 진행 바 위의 하이라이트 효과 */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            initial={{ x: "-100%" }}
            animate={isInView ? { x: "100%" } : { x: "-100%" }}
            transition={{
              duration: 1.0,
              delay: delay + 0.8,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}