import { ArrowLeft, Calendar, Brush, Wrench, FileCheck2, MonitorSmartphone, Banknote, Hand } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import nhDetailImage from 'figma:asset/8c6ac2c038cf03658faa78f93d7c9a10c7c434f5.png';

export function PJ05() {
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
                  2023
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
                농협 올원뱅크APP
              </h1>
            </div>
            <div className="flex justify-end">
               <div className="">
                <div className="grid lg:grid-cols-3 gap-4">
                  <div className="w-full bg-gradient-to-br from-[#0ACF83]/10 to-[#0ACF83]/5 border border-[#0ACF83]/20 rounded-2xl p-6 text-center">
                    <div className="text-[#0ACF83] mb-2">Client</div>
                    <div className="mb-2">농협</div>
                  </div>
                  <div className="w-full bg-gradient-to-br from-[#1ABCFE]/10 to-[#1ABCFE]/5 border border-[#1ABCFE]/20 rounded-2xl p-6 text-center">
                    <div className="text-[#1ABCFE] mb-2">Tool</div>
                    <div className="mb-2">Adobe Photoshop</div>
                    <div className="mb-1">Adobe Illustrator</div>
                  </div>
                  <div className="w-full bg-gradient-to-br from-[#A259FF]/10 to-[#A259FF]/5 border border-[#A259FF]/20 rounded-2xl p-6 text-center">
                    <div className="text-[#A259FF] mb-2">Duration</div>
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
                  농협 올원뱅크 앱은 금융 서비스뿐 아니라 여행·부동산·자동차 등 일상생활 전반의 비금융 서비스까지 제공하는 종합 플랫폼으로 신규 금융상품 소개 화면부터 이벤트 화면까지 
                  운영에 필요한 전반적인 UI 디자인을 담당하였습니다. 기업 아이덴티티에 맞는 일러스트를 직접 제작·활용하였습니다. 
                  또한 폭넓은 고객층을 고려해 한 화면에서 발생할 수 있는 다양한 케이스를 설계하고 그에 맞는 산출물을 체계적으로 정리하였습니다. 
                  
                </p>
                <p className="text-muted-foreground leading-relaxed">
                웹·모바일과 네이티브 앱을 동시에 운영하는 프로젝트 특성상 퍼블리셔 및 개발자와 긴밀히 협업하며, 효율적인 디자인 가이드 제작과 전달 방식을 습득할 수 있었습니다.
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
                <FileCheck2 className="w-5 h-5 text-white" />
              </div>
              <h3 className="mb-3">디자인가이드 제작</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1ABCFE] to-[#1ABCFE]/80 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brush className="w-5 h-5 text-white" />
              </div>
              <h3 className="mb-3">일러스트 작업</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1ABCFE] to-[#1ABCFE]/80 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-5 h-5 text-white" />
              </div>
              <h3 className="mb-3">서비스 UX/UI운영</h3>
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
              src={nhDetailImage}
              alt="올원뱅크APP Output"
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
            <Link to="/projects/PJ-06">
              <Button className="flex items-center gap-2 bg-gradient-to-r from-[#0ACF83] to-[#1ABCFE]">
                다음: 하나카드 서비스 운영
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}