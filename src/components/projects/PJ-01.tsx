import { ArrowLeft, Calendar, Target, Users, Layers3, MonitorSmartphone, ChartPie, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import lgcnsDetailImage from 'figma:asset/1be7996c73c8090d4c3d8f57ccf2619987b6af59.png';

export function PJ01() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <Link to="/" className="inline-flex items-center text-white hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            목록으로 돌아가기
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-[#1ABCFE]/5 to-[#0ACF83]/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-2 text-sm text-white mb-6">
            <Calendar className="w-4 h-4" />
            2025
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="items-center gap-4 mb-4">
                <div className="flex gap-2 mb-6">
                  {["Learning", "Dashboard", "Responsive Design"].map((tag, index) => (
                    <span key={index} className="text-xs bg-gradient-to-br from-[#0ACF83]/20 to-[#1ABCFE]/20 border border-white/10 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl mt-6 bg-[#0ACF83] bg-clip-text text-transparent">
                Aeon 영어학습 사이트
              </h1>
            </div>
            <div className="flex justify-end">
               <div className="max-w-6xl mx-auto px-6">
                <div className="grid lg:grid-cols-3 gap-4">
                  <div className="w-36 bg-gradient-to-br from-[#F24E1E]/10 to-[#F24E1E]/5 border border-[#F24E1E]/20 rounded-2xl p-6 text-center">
                    <div className="text-[#F24E1E] mb-2">Client</div>
                    <div className="mb-2">LG CNS</div>
                  </div>
                  <div className="w-36 bg-gradient-to-br from-[#A259FF]/10 to-[#A259FF]/5 border border-[#A259FF]/20 rounded-2xl p-6 text-center">
                    <div className="text-[#A259FF] mb-2">Tool</div>
                    <div className="mb-2">Figma</div>
                  </div>
                  <div className="w-36 bg-gradient-to-br from-[#1ABCFE]/10 to-[#1ABCFE]/5 border border-[#1ABCFE]/20 rounded-2xl p-6 text-center">
                    <div className="text-[#1ABCFE] mb-2">Duration</div>
                    <div className="mb-2">1년</div>
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
                일본 사용자를 대상으로 한 영어학습 플랫폼 리뉴얼 프로젝트에 참여하여, UX 방향성을 고려한 UI 디자인을 담당했습니다.
                사용자의 다양한 연령대룰 고려하여 직관적이고 사용성이 높은 화면 디자인을 구현하는 데 집중했습니다.
                또한 일본 시장 특성에 맞춰 문화적 차이를 고려한 디자인을 적용하였습니다.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                최종 단계에서는 디자인 산출물을 체계적으로 정리하여 고객사와 개발팀에 전달하고, 원활한 구현을 지원했습니다.
                이 프로젝트를 통해 일본 시장을 타깃으로 한 로컬라이징 기반 UI 디자인 경험을 쌓을 수 있었습니다.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Design Process */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#F24E1E] to-[#F24E1E]/80 rounded-full flex items-center justify-center mx-auto mb-4">
                <Layers3 className="w-5 h-5 text-white" />
              </div>
              <h3 className="mb-3">디자인시스템 제작</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#A259FF] to-[#A259FF]/80 rounded-full flex items-center justify-center mx-auto mb-4">
                <MonitorSmartphone className="w-5 h-5 text-white" />
              </div>
              <h3 className="mb-3">반응형 디자인</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1ABCFE] to-[#1ABCFE]/80 rounded-full flex items-center justify-center mx-auto mb-4">
                <ChartPie className="w-5 h-5 text-white" />
              </div>
              <h3 className="mb-3">데이터 시각화</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0ACF83] to-[#0ACF83]/80 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <h3 className="mb-3">글로벌 프로젝트</h3>
            </div>
          </div>
        </div>
      </section>

      {/* IMG */}
      <section className="py-6 bg-card/30 max-w-6xl mx-auto">
        <div className="relative">
          <ImageWithFallback 
              src={lgcnsDetailImage}
              alt="Aeon 영어학습 사이트 화면 및 대시보드"
              className="w-full h-auto rounded-2xl shadow-2xl object-contain"
              />
        </div>
      </section>

      {/* Navigation */}
       <section className="py-16 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center">
            <Link to="/">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Portfolio로 돌아가기
              </Button>
            </Link>
            <Link to="/projects/PJ-02">
              <Button className="flex items-center gap-2 bg-gradient-to-r from-[#0ACF83]/80 to-[#1ABCFE]/80">
                다음: 코웨이 서비스 구축/운영
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}