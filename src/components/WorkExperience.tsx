import { motion } from 'motion/react';
import { InViewMotion } from './InViewMotion';

export function WorkExperience() {
  const experiences = [
    {
      title: "LG CNS",
      description: "2024.11 - 현재 / 프리랜서",
      details: ["에듀테크사업팀에서 일본 영어학습 사이트 UX/UI 리뉴얼 진행", "Design System 제작으로 컴포넌트와 브랜드 아이덴티티 일관성 강화", "멀티 디바이스 환경을 고려한 반응형 모바일·태블릿·PC 해상도 디자인 설계", "일본 고객사 대상 프로젝트 협업 수행"]
    },
    {
      title: "코웨이",
      description: "2023.08 - 2024.10 / 프리랜서",
      details: ["현장 직원용 코디 업무 앱 UX/UI 디자인", "Design System 가이드 문서화", "웹·모바일 서비스 전반의 UX/UI 개선"]
    },
    {
      title: "SK지오센트릭",
      description: "2023.04 - 2023.07 / 프리랜서",
      details: ["직원 업무 효율 향상을 위한 사내 업무망 사이트 UX/UI 구축", "프로젝트 초기 단계에서 컨셉 기획 및 UX 방향성 수립"]
    },
    {
      title: "AIA생명",
      description: "2022.11 - 2023.04 / 프리랜서",
      details: ["기업 공식 홈페이지 리디자인 및 기능 고도화", "반응형 디자인으로 웹/앱 대응, 접근성과 사용성 강화", "홈페이지 UX/UI 개선 및 기능 고도화로 고객 접근성 증대", "글로벌 본사 홍콩과 협업하여 디자인시스템 고도화 및 개발자 핸드오프 수행"]
    },
    {
      title: "(주)티웍스아이엔씨",
      description: "2022.08 - 2022.10 / 프리랜서",
      details: ["자동차 직거래 서비스 APP구축", "UX 흐름을 고려한 UI 시각 설계", "근거리 사용자 간 안전하고 편리한 거래를 위한 로컬 마켓 서비스 디자인"]
    },
    {
      title: "하나은행",
      description: "2022.04 - 2022.08 / 프리랜서",
      details: ["하나은행 원큐APP 모바일 번호표 고도화 ", "UX 요소를 반영한 UI 디자인", "UX/UI 디자인부터 퍼블리싱(HTML/CSS)까지 전 과정 수행"]
    },
     {
      title: "(주)프론비즈",
      description: "2021.02 - 2022.01 / 정규직(파견)",
      details: ["모바일 금융 서비스 올원뱅크 UI 디자인", "UX/UI 디자인과 더불어 일러스트 작업을 통해 브랜드 아이덴티티 강화", "iOS/Android 네이티브 가이드 문서화 및 공유를 통해 디자인-개발 간 원활한 협업 지원"]
    },
     {
      title: "(주)프레임아웃",
      description: "2018.10 - 2020.10 / 정규직(파견)",
      details: ["금융 서비스 하나금융그룹 APP 서비스 운영", "UI 시각 설계와 함께 퍼블리싱을 통해 실제 이벤트 페이지 화면 구현", "이커머스 플랫폼 SK스토아 UX/UI 디자인 및 운영 지원", "프로모션·배너·상세페이지 디자인을 통해 판매 효율 향상"]
    },
     {
      title: "(주)오마이컴퍼니",
      description: "2017.05 - 2018.06 / 정규직",
      details: ["크라우드펀딩 플랫폼 UX/UI 서비스 운영", "사이트 내 기업별 서비스 소개 페이지 브랜딩 디자인", "기업 특성에 맞는 소개 페이지 디자인으로 투자자 신뢰도 및 서비스 이해도 향상"]
    },
     {
      title: "(주)크림하우스",
      description: "2016.11 - 2017.05 / 정규직",
      details: ["SK스포츠, GS스포츠, FC서울 등 대기업 웹사이트 운영 디자인", "대기업 스포츠 브랜드 웹사이트 운영 디자인(프로모션·배너·UI 개선)으로 서비스 완성도 강화", "FC서울 APP서비스 구축"]
    },
     {
      title: "(주)GS홈쇼핑",
      description: "2015.05 - 2016.05 / 계약직",
      details: ["신사업TFT에서 중국 여행자 대상 한국 여행 서비스 플랫폼 UX/UI 디자인", "중국어 UI 및 위챗페이·알리페이 결제 현지화 반영"]
    },
     {
      title: "(주)에스엔알미디어",
      description: "2012.09 - 2015.01 / 정규직",
      details: ["KOICA 교육용 플랫폼 웹사이트 디자인", "글로벌 사용자 대상 교육자료 및 다양한 콘텐츠 제공을 위한 UI디자인", "공공 교육자료의 체계적 배포 지원"]
    },
     {
      title: "(주)이노시안",
      description: "2011.01 - 2012.03 / 정규직",
      details: ["사이트 UX/UI 운영 디자인 담당", "이벤트 페이지·프로모션 배너 제작과 UI 개선을 통해 마케팅 성과 및 사용자 만족도 향상 지원"]
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-background to-[#1a1b21] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <motion.div 
          className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-r from-[#1ABCFE] to-[#A259FF] rounded-full blur-3xl" 
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, -20, 0],
            y: [0, 25, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-10 w-28 h-28 bg-gradient-to-r from-[#0ACF83] to-[#FF7262] rounded-full blur-2xl" 
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, 30, 0],
            y: [0, -15, 0]
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
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
            viewport={{ once: true }}
          >
            Work Experience
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-[#1ABCFE] to-[#A259FF] mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
          <motion.p 
            className="text-sm sm:text-base text-muted-foreground mt-4 sm:mt-6 max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            다양한 기업과 프로젝트에서 쌓은 UX/UI 디자인 경험을 소개합니다.
          </motion.p>
        </InViewMotion>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="relative">
            <div className="space-y-8">
              {experiences.map((experience, index) => {
                return (
                  <InViewMotion key={index} delay={index * 0.1} direction="up">
                    <motion.div 
                      className="relative group"
                      whileHover={{ y: -8 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      {/* Experience Card */}
                      <div className="bg-card border border-white/10 rounded-lg p-4 sm:p-6 transition-all duration-300 group-hover:border-secondary/50 group-hover:shadow-lg group-hover:shadow-[#1ABCFE]/10">
                        <div>
                          {/* Content */}
                          <div className="flex-1">
                            <motion.h3 
                              className="mb-2 text-base sm:text-lg group-hover:text-secondary transition-all group-hover:font-bold"
                              whileHover={{ scale: 1.02 }}
                              transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            >
                              {experience.title}
                            </motion.h3>
                            <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 group-hover:text-[#1ABCFE] transition-colors duration-300">
                              {experience.description}
                            </p>
                            
                            {/* Skills/Details */}
                            <div className="space-y-2">
                              {experience.details.filter(detail => detail.trim() !== '').map((detail, detailIndex) => (
                                <motion.div 
                                  key={detailIndex} 
                                  className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-white"
                                  initial={{ opacity: 0, x: -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.4, delay: detailIndex * 0.05 }}
                                  viewport={{ once: true }}
                                >
                                  <motion.div 
                                    className="w-1 h-1 bg-secondary rounded-full flex-shrink-0 mt-2"
                                    whileHover={{ scale: 2 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                  />
                                  <span className="leading-relaxed group-hover:text-white transition-colors duration-300">{detail}</span>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </div>
                        
                        {/* Hover gradient line */}
                        <motion.div 
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </motion.div>
                  </InViewMotion>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-4 sm:space-y-6">
          {experiences.map((experience, index) => {
            return (
              <InViewMotion key={index} delay={index * 0.05} direction="up">
                <motion.div 
                  className="bg-card border border-white/10 rounded-lg p-4 group"
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div>
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="mb-1 text-sm sm:text-base group-hover:text-secondary transition-colors duration-300">{experience.title}</h3>
                      <p className="text-xs text-muted-foreground mb-3 group-hover:text-[#1ABCFE] transition-colors duration-300">
                        {experience.description}
                      </p>
                      
                      {/* Skills/Details */}
                      <div className="space-y-1.5">
                        {experience.details.filter(detail => detail.trim() !== '').map((detail, detailIndex) => (
                          <div 
                            key={detailIndex} 
                            className="flex items-start gap-1.5 text-xs text-white"
                          >
                            <div className="w-0.5 h-0.5 bg-secondary rounded-full flex-shrink-0 mt-1.5"></div>
                            <span className="leading-relaxed">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </InViewMotion>
            );
          })}
        </div>
      </div>
    </section>
  );
}