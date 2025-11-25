import { ArrowLeft, Calendar, Target, Banknote, Smartphone, CodeXml, BadgeCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import hanaDetailImage from 'figma:asset/7fe435c84c86512865ac8df9c1061f286f273f18.png';

export function PJ04() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            목록으로 돌아가기
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-[#1ABCFE]/5 to-[#0ACF83]/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="items-center gap-4 mb-4">
                <div className="flex items-center gap-2 text-sm text-white mb-6">
                  <Calendar className="w-4 h-4" />
                  2022
                </div>
                <div className="flex gap-2 mb-4">
                  {["Native", "Finance", "App"].map((tag, index) => (
                    <span key={index} className="text-xs bg-gradient-to-br from-[#1ABCFE]/20 to-[#0ACF83]/20 border border-white/10 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl mt-4 bg-[#0ACF83] bg-clip-text text-transparent">
                하나은행 원큐APP 모바일 번호표 고도화
              </h1>
            </div>
            <div className="flex justify-end">
               <div className="">
                <div className="grid lg:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-[#0ACF83]/10 to-[#0ACF83]/5 border border-[#0ACF83]/20 rounded-2xl p-6 text-center">
                    <div className="text-[#0ACF83] mb-2">Client</div>
                    <div className="mb-2">하나은행</div>
                  </div>
                  <div className="bg-gradient-to-br from-[#1ABCFE]/10 to-[#1ABCFE]/5 border border-[#1ABCFE]/20 rounded-2xl p-6 text-center">
                    <div className="text-[#1ABCFE] mb-2">Tool</div>
                    <div className="mb-2">Adobe Photoshop</div>
                  </div>
                  <div className="bg-gradient-to-br from-[#A259FF]/10 to-[#A259FF]/5 border border-[#A259FF]/20 rounded-2xl p-6 text-center">
                    <div className="text-[#A259FF] mb-2">Duration</div>
                    <div className="mb-2">5개월</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Project Overview */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div>
              <h2 className="text-2xl mb-6">프로젝트 개요</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-6">
                모바일 뱅킹 원큐APP의 모바일 번호표 서비스를 고도화하여, 영업점 대기 효율성을 높이고 고객 경험을 개선하는 작업을 수행했습니다.
                사용자가 편리하게 번호표를 발급하고 실시간 대기 현황을 확인할 수 있도록 접근성을 강화하여, 비대면 서비스 활용도를 높였습니다.
                UI를 재구성해 발급·호출·알림 등 주요 흐름을 직관적으로 개선하고, 시각적 요소를 단순화하여 누구나 쉽게 사용할 수 있도록 디자인했습니다.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                이 프로젝트를 통해 금융 서비스 내 비대면 프로세스 UX/UI 고도화 경험을 할 수 있었습니다.

                </p>
              </div>
            </div>
        </div>
      </section>
      {/* Design Process */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#A259FF] to-[#A259FF]/80 rounded-full flex items-center justify-center mx-auto mb-4">
                <CodeXml className="w-5 h-5 text-white" />
              </div>
              <h3 className="mb-3">Design & Front-end</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1ABCFE] to-[#1ABCFE]/80 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-5 h-5 text-white" />
              </div>
              <h3 className="mb-3">네이티브앱</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0ACF83] to-[#0ACF83]/80 rounded-full flex items-center justify-center mx-auto mb-4">
                <BadgeCheck className="w-5 h-5 text-white" />
              </div>
              <h3 className="mb-3">앱 접근성</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#F24E1E] to-[#FF7262]/80 rounded-full flex items-center justify-center mx-auto mb-4">
                <Banknote className="w-5 h-5 text-white" />
              </div>
              <h3 className="mb-3">금융권</h3>
            </div>
          </div>
        </div>
      </section>

      {/* IMG */}
      <section className="py-6 bg-card/30 max-w-6xl mx-auto">
        <div className="relative">
          <ImageWithFallback 
              src={hanaDetailImage}
              alt="하나은행 원큐APP 모바일 번호표 고도화 앱 화면"
              className="w-full h-auto rounded-2xl shadow-2xl object-cover"
              />
        </div>
      </section>


    

      {/* Navigation */}
      <section className="py-16 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center">
            <Link to="/projects/PJ-03">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                이전: AIA생명 홈페이지 리뉴얼
              </Button>
            </Link>
            <Link to="/projects/PJ-05">
              <Button className="flex items-center gap-2 bg-gradient-to-r from-[#0ACF83]/80 to-[#1ABCFE]/80">
                다음: 농협 올원뱅크APP
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}