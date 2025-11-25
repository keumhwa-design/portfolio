import { ArrowLeft, Calendar, Target, Users, Layers3, MonitorSmartphone, Globe, Hand } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import aiaDetailImage from 'figma:asset/05f575178deb79e54477dfa8e2989463330d13f8.png';

export function PJ03() {
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
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="items-center gap-4 mb-4">
                <div className="flex items-center gap-2 text-sm text-white mb-6">
                  <Calendar className="w-4 h-4" />
                  2023
                </div>
                <div className="flex gap-2 mb-4">
                  {["Web", "Finance", "Responsive Design"].map((tag, index) => (
                    <span key={index} className="text-xs bg-gradient-to-br from-[#1ABCFE]/20 to-[#0ACF83]/20 border border-white/10 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl mt-4 bg-[#0ACF83] bg-clip-text text-transparent">
                AIA생명 홈페이지 리뉴얼
              </h1>
            </div>
            <div className="flex justify-end">
               <div className="">
                <div className="grid lg:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-[#0ACF83]/10 to-[#0ACF83]/5 border border-[#0ACF83]/20 rounded-2xl p-6 text-center">
                    <div className="text-[#0ACF83] mb-2">Client</div>
                    <div className="mb-2">AIA생명</div>
                  </div>
                  <div className="bg-gradient-to-br from-[#1ABCFE]/10 to-[#1ABCFE]/5 border border-[#1ABCFE]/20 rounded-2xl p-6 text-center">
                    <div className="text-[#1ABCFE] mb-2">Tool</div>
                    <div className="mb-2">Figma</div>
                  </div>
                  <div className="bg-gradient-to-br from-[#A259FF]/10 to-[#A259FF]/5 border border-[#A259FF]/20 rounded-2xl p-6 text-center">
                    <div className="text-[#A259FF] mb-2">Duration</div>
                    <div className="mb-2">6개월</div>
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
                아시아 지역에서 활동하는 글로벌 보험사의 다국어 홈페이지를 일관되고 효율적으로 유지하기 위해, 메인 디자인 시스템을 기반으로 한국 시장에 맞는 디자인 가이드와 컴포넌트 라이브러리를 제작하였습니다.
                또한 기존 사이트의 UX/UI를 개선하여 PC와 모바일 전 화면을 설계·디자인하였으며, 최종 핸드오프 단계에서는 디자인 요소들을 개발 가이드에 맞추어 체계적으로 네이밍하여 전달하였습니다.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                이 프로젝트를 통해 디자인 시스템 변형(Variation) 구축 경험과 더불어, 해외 개발 인력과의 원활한 협업 및 소통 역량을 쌓을 수 있었습니다.
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
                <Layers3 className="w-5 h-5 text-white" />
              </div>
              <h3 className="mb-3">디자인시스템</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1ABCFE] to-[#1ABCFE]/80 rounded-full flex items-center justify-center mx-auto mb-4">
                <MonitorSmartphone className="w-5 h-5 text-white" />
              </div>
              <h3 className="mb-3">반응형 디자인</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0ACF83] to-[#0ACF83]/80 rounded-full flex items-center justify-center mx-auto mb-4">
                <Hand className="w-5 h-5 text-white" />
              </div>
              <h3 className="mb-3">디자인 산출물 핸드오프</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#F24E1E] to-[#FF7262]/80 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <h3 className="mb-3">글로벌 프로젝트</h3>
            </div>
          </div>
        </div>
      </section>


      {/* AIA Detail Image */}
      <section className="py-6 bg-card/30 max-w-6xl mx-auto">
        <div className="relative">
          <ImageWithFallback 
              src={aiaDetailImage}
              alt="AIA생명 프로젝트 상세 내용"
              className="w-full h-auto rounded-2xl shadow-2xl object-cover"
              />
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center">
            <Link to="/projects/PJ-02">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                이전: 코웨이 서비스 구축/운영
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