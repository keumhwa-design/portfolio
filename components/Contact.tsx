import { Mail, Phone, MapPin, Download, Copy, Check } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';
import { InViewMotion } from './InViewMotion';
import { useState } from 'react';

export function Contact() {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const socialLinks = [
    {
      icon: Mail,
      label: "이메일",
      value: "height156@kakao.com",
      href: "mailto:height156@kakao.com",
      description: "height156@kakao.com",
      copyable: true
    },
    {
      icon: Phone,
      label: "전화",
      value: "+82 10-9210-2233",
      href: "tel:+82-10-9210-2233",
      description: "010-9210-2233",
      copyable: true
    },
    {
      icon: MapPin,
      label: "위치",
      value: "서울 강서구 등촌동",
      description: "서울 강서구 등촌동",
      copyable: false
    }
  ];

  const copyToClipboard = async (text: string) => {
    try {
      // Method 1: Modern clipboard API
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        console.log('Modern clipboard API 복사 성공:', text);
      } 
      // Method 2: Legacy execCommand
      else {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-9999px';
        textArea.style.top = '-9999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        const successful = document.execCommand('copy');
        document.body.removeChild(textArea);
        
        if (successful) {
          console.log('Legacy execCommand 복사 성공:', text);
        } else {
          throw new Error('execCommand failed');
        }
      }
      
      // Show success feedback
      setCopiedItem(text);
      setTimeout(() => setCopiedItem(null), 2000);
      
    } catch (err) {
      console.error('복사 실패:', err);
      
      // Method 3: Manual selection fallback
      try {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'absolute';
        textArea.style.left = '-9999px';
        document.body.appendChild(textArea);
        textArea.select();
        textArea.setSelectionRange(0, 99999);
        document.execCommand('copy');
        document.body.removeChild(textArea);
        
        setCopiedItem(text);
        setTimeout(() => setCopiedItem(null), 2000);
        console.log('Fallback 복사 성공:', text);
      } catch (fallbackErr) {
        console.error('모든 복사 방법 실패:', fallbackErr);
        alert(`복사 실패. 수동으로 복사해주세요: ${text}`);
      }
    }
  };

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <InViewMotion className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Contact
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-[#F24E1E] to-[#A259FF] mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
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
            새로운 프로젝트나 협업 기회에 대해 언제든지 연락해주세요. 
          </motion.p>
        </InViewMotion>

        {/* Contact Info */}
        <div className="space-y-8 mb-20">            
          <div>
            <div className="grid md:grid-cols-3 gap-8">
              {socialLinks.map((link, index) => {
                const IconComponent = link.icon;
                const isCopied = copiedItem === link.value;
                
                return (
                  <InViewMotion key={index} delay={index * 0.1} direction="up">
                    <div className="group">
                      {/* Main contact card */}
                      {link.href ? (
                        <a 
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block p-4 bg-background border border-[#FF7262]/20 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#FF7262]/10 hover:border-[#FF7262]/30 hover:-translate-y-2"
                        >
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-[#FF7262]/20 to-[#A259FF]/20 rounded-lg flex items-center justify-center border border-white/10">
                              <IconComponent className="w-5 h-5 text-[#FF7262] group-hover:text-[#A259FF] transition-colors duration-300" />
                            </div>
                            <div className="flex-1">
                              <div className="group-hover:text-white transition-colors duration-300 mb-1">
                                {link.label}
                              </div>
                              <div className="flex items-center justify-between">
                                <div className="text-sm text-muted-foreground group-hover:text-[#FF7262] transition-colors duration-300">
                                  {link.description}
                                </div>
                                {link.copyable && (
                                  <button
                                    onClick={(e) => {
                                      e.preventDefault();
                                      e.stopPropagation();
                                      copyToClipboard(link.value);
                                    }}
                                    className="ml-2 p-1 hover:bg-[#FF7262]/20 rounded transition-colors duration-200"
                                    title={`${link.label} 복사`}
                                  >
                                    {isCopied ? (
                                      <Check className="w-4 h-4 text-[#0ACF83]" />
                                    ) : (
                                      <Copy className="w-4 h-4 text-muted-foreground hover:text-[#FF7262] transition-colors" />
                                    )}
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>
                        </a>
                      ) : (
                        <div className="p-4 bg-background border border-[#FF7262]/20 rounded-lg">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-[#FF7262]/20 to-[#A259FF]/20 rounded-lg flex items-center justify-center border border-white/10">
                              <IconComponent className="w-5 h-5 text-[#FF7262]" />
                            </div>
                            <div className="flex-1">
                              <div className="mb-1">
                                {link.label}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                {link.description}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </InViewMotion>
                );
              })}
            </div>
          </div>
        </div>

        <InViewMotion delay={0.3}>
          <div>
            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-16 hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button size="lg" className="px-8 py-4 w-52 h-auto bg-backgroud duration-300 group-hover:text-white group-hover:[#F24E1E] rounded-full hover:shadow-[#F24E1E]/30 transition-all duration-300 font-bold">
                  <Download className="w-4 h-4 mr-2" />
                  경력기술서 다운로드
                </Button>
              </motion.div>
            
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button size="lg" className="px-8 py-4 w-52 h-auto bg-backgroud duration-300 group-hover:text-white group-hover:[#F24E1E] rounded-full hover:shadow-[#F24E1E]/30 transition-all duration-300 font-bold">
                  <Download className="w-4 h-4 mr-2" />
                  포트폴리오 다운로드
                </Button>
              </motion.div>
            </motion.div>              
          </div>
        </InViewMotion>

        {/* Footer */}
        <InViewMotion delay={0.5}>
          <motion.div 
            className="mt-20 pt-8 border-t text-center text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p>© 2025 정금화. All rights reserved. Made with ❤️ in Seoul, Korea.</p>
          </motion.div>
        </InViewMotion>
      </div>
    </section>
  );
}