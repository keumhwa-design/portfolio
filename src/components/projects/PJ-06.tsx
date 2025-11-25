import { ArrowLeft, Calendar, Target, CodeXml, Wrench, BadgeCheck, Banknote, Hand } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import hanaCardDetailImage from 'figma:asset/7fe435c84c86512865ac8df9c1061f286f273f18.png';

export function PJ06() {
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
                  {["App", "Finance", "Management"].map((tag, index) => (
                    <span key={index} className="text-xs bg-gradient-to-br from-[#1ABCFE]/20 to-[#0ACF83]/20 border border-white/10 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl mt-4 bg-[#0ACF83] bg-clip-text text-transparent">
                하나카드 서비스 운영
              </h1>
            </div>
            <div className="flex justify-end">
               <div className="">
                <div className="grid lg:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-[#0ACF83]/10 to-[#0ACF83]/5 border border-[#0ACF83]/20 rounded-2xl p-6 text-center">
                    <div className="text-[#0ACF83] mb-2">Client</div>
                    <div className="mb-2">하나금융그룹</div>
                  </div>
                  <div className="bg-gradient-to-br from-[#1ABCFE]/10 to-[#1ABCFE]/5 border border-[#1ABCFE]/20 rounded-2xl p-6 text-center">
                    <div className="text-[#1ABCFE] mb-2">Tool</div>
                    <div className="mb-2">Adobe Photoshop</div>
                  </div>
                  <div className="bg-gradient-to-br from-[#A259FF]/10 to-[#A259FF]/5 border border-[#A259FF]/20 rounded-2xl p-6 text-center">
                    <div className="text-[#A259FF] mb-2">Duration</div>
                    <div className="mb-2">2년</div>
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
                  금융권 디자인 업무를 처음 경험하며 고객과 직접 소통하고 체계적인 디자인 프로세스를 익힐 수 있었던 기회였습니다. 
                  하나카드 내 이벤트와 웹 운영을 담당하며, 생활 서비스 전용 모바일 플랫폼인 LIFE MUST HAVE 앱의 UX/UI 디자인을 수행하면서  
                  그 성과로 WEB AWARD KOREA 2019에서 수상하는 성과를 거두었습니다. 
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  내부 콘텐츠를 신규 제작하고 어드민 등록 및 개별 퍼블리싱을 수행하면서 백오피스를 이해하는 데 중요한 경험을 쌓을 수 있었습니다.
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
                <BadgeCheck className="w-5 h-5 text-white" />
              </div>
              <h3 className="mb-3">웹 접근성</h3>
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
              src={hanaCardDetailImage}
              alt="하나카드 라이프머스트해브APP 화면"
              className="w-full h-auto rounded-2xl shadow-2xl object-cover"
              />
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center">
            <Link to="/projects/PJ-05">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                이전: 농협 올원뱅크APP
              </Button>
            </Link>
            <Link to="/">
              <Button className="flex items-center gap-2 bg-gradient-to-r from-[#0ACF83] to-[#1ABCFE]">
                Portfolio 메인으로
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}