import { ArrowLeft, Calendar, Target, MousePointerClick, FileCheck2, Wrench, ChartPie, Hand } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import cowayDetailImage from 'figma:asset/dc8d7e49579fcfaefcdf5b942a16d75bbb33b8ae.png';

export function PJ02() {
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
                  2024
                </div>
                <div className="flex gap-2 mb-4">
                  {["Dashboard", "B2E", "App"].map((tag, index) => (
                    <span key={index} className="text-xs bg-gradient-to-br from-[#1ABCFE]/20 to-[#0ACF83]/20 border border-white/10 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl mt-4 bg-[#0ACF83] bg-clip-text text-transparent">
                코웨이 서비스 구축/운영
              </h1>
            </div>
            <div className="flex justify-end">
               <div className="">
                <div className="grid lg:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-[#0ACF83]/10 to-[#0ACF83]/5 border border-[#0ACF83]/20 rounded-2xl p-6 text-center">
                    <div className="text-[#0ACF83] mb-2">Client</div>
                    <div className="mb-2">코웨이</div>
                  </div>
                  <div className="bg-gradient-to-br from-[#1ABCFE]/10 to-[#1ABCFE]/5 border border-[#1ABCFE]/20 rounded-2xl p-6 text-center">
                    <div className="text-[#1ABCFE] mb-2">Tool</div>
                    <div className="mb-2">Adobe XD</div>
                  </div>
                  <div className="bg-gradient-to-br from-[#A259FF]/10 to-[#A259FF]/5 border border-[#A259FF]/20 rounded-2xl p-6 text-center">
                    <div className="text-[#A259FF] mb-2">Duration</div>
                    <div className="mb-2">1년10개월</div>
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
                내부 직원이 판촉 활동을 효율적으로 관리하고 코디 업무를 지원할 수 있는 전용 업무 앱의 UX/UI 디자인을 담당했습니다.
                업무 과정에서 발생하는 다양한 데이터와 정보를 직관적으로 시각화하여, 복잡한 내용을 빠르게 이해하고 활용할 수 있도록 UI를 설계하여
                모바일 환경에서 최적화된 화면 구성을 적용해, 이동 중에도 직원들이 편리하게 판촉 현황을 확인하고 업무를 수행할 수 있도록 지원했습니다.
                서비스 전반의 디자인 가이드를 수립하고 최종 산출물은 개발팀과의 협업을 통해 원활히 구현될 수 있도록 체계적으로 정리·전달하였습니다.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">  
                이 프로젝트를 통해 내부 직원 업무 프로세스를 지원하는 B2E(Business to Employee) 서비스 디자인 경험을 할 수 있었습니다.
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
              <div className="w-16 h-16 bg-gradient-to-br from-[#F24E1E] to-[#F24E1E]/80 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileCheck2 className="w-5 h-5 text-white" />
              </div>
              <h3 className="mb-3">디자인가이드 제작</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#A259FF] to-[#A259FF]/80 rounded-full flex items-center justify-center mx-auto mb-4">
                <MousePointerClick className="w-5 h-5 text-white" />
              </div>
              <h3 className="mb-3">프로토타입</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1ABCFE] to-[#1ABCFE]/80 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-5 h-5 text-white" />
              </div>
              <h3 className="mb-3">서비스 UX/UI운영</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0ACF83] to-[#0ACF83]/80 rounded-full flex items-center justify-center mx-auto mb-4">
                <ChartPie className="w-5 h-5 text-white" />
              </div>
              <h3 className="mb-3">데이터 시각화</h3>
            </div>
          </div>
        </div>
      </section>

      {/* IMG */}
      <section className="py-6 bg-card/30 max-w-6xl mx-auto">
        <div className="relative">
          <ImageWithFallback 
              src={cowayDetailImage}
              alt="올원뱅크APP Output - 모바일 앱 화면 및 대시보드"
              className="w-full h-auto rounded-2xl shadow-2xl object-cover"
              />
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center">
            <Link to="/projects/PJ-01">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                이전: Aeon 영어학습 사이트
              </Button>
            </Link>
            <Link to="/projects/PJ-03">
              <Button className="flex items-center gap-2 bg-gradient-to-r from-[#0ACF83]/80 to-[#1ABCFE]/80">
                다음: AIA생명 홈페이지 리뉴얼
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}