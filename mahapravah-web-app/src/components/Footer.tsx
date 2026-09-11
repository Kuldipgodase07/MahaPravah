import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t, isMarathi } = useLanguage();

  const footerLinks = {
    [t.footer.platformTitle]: [
      isMarathi ? 'महाप्रवाह विषयी' : 'About MahaPravah',
      isMarathi ? 'वैशिष्ट्ये' : 'Features',
      isMarathi ? 'विद्यार्थ्यांसाठी' : 'For Students',
      isMarathi ? 'संस्थांसाठी' : 'For Institutions',
      isMarathi ? 'नियोक्त्यांसाठी' : 'For Employers',
      isMarathi ? 'डॅशबोर्ड' : 'Dashboard',
    ],
    [t.footer.govtTitle]: [
      isMarathi ? 'शासकीय प्रवेश' : 'Government Access',
      isMarathi ? 'धोरण चौकट' : 'Policy Framework',
      isMarathi ? 'डेटा अहवाल' : 'Data Reports',
      'MSDM',
      isMarathi ? 'कौशल्य विकास महाराष्ट्र' : 'Skill Development Maharashtra',
      'MahaIT',
    ],
    [t.footer.resourcesTitle]: [
      isMarathi ? 'अभ्यासक्रम' : 'Courses',
      isMarathi ? 'ब्लॉग व माहिती' : 'Blog & News',
      isMarathi ? 'मार्गदर्शिका' : 'Guides',
      isMarathi ? 'मदत केंद्र' : 'Help Center',
      isMarathi ? 'संशोधन' : 'Research',
      isMarathi ? 'प्रकाशन' : 'Publications',
    ],
    [t.footer.supportTitle]: [
      isMarathi ? 'वारंवार विचारले जाणारे प्रश्न' : 'FAQs',
      isMarathi ? 'संपर्क साधा' : 'Contact Us',
      isMarathi ? 'अभिप्राय' : 'Feedback',
      isMarathi ? 'तक्रार निवारण' : 'Grievance Redressal',
      isMarathi ? 'साइटमॅप' : 'Sitemap',
      isMarathi ? 'सुलभता' : 'Accessibility',
    ],
  };

  return (
    <footer style={{ background: '#1C1917' }} className={isMarathi ? 'font-poppins' : ''}>
      {/* Main footer content */}
      <div
        className="py-14 sm:py-16"
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          paddingLeft: 'clamp(16px, 2.2vw, 36px)',
          paddingRight: 'clamp(16px, 2.2vw, 36px)',
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            {/* Official Dual Branding Block (Like Navbar) */}
            <div className="flex items-center gap-3 sm:gap-3.5 mb-5 select-none">
              {/* Maharashtra Government Section */}
              <div className="flex flex-col items-center justify-center shrink-0 h-[38px] sm:h-[46px]">
                <img
                  src="/Seal_of_Maharashtra.svg"
                  alt="महाराष्ट्र शासन बोधचिन्ह"
                  className="h-[26px] w-[26px] sm:h-[32px] sm:w-[32px] object-contain"
                />
                <img
                  src="/maharashtra-shasan-text-white.png"
                  alt="महाराष्ट्र शासन"
                  className="w-[36px] sm:w-[44px] h-auto object-contain mt-1.5 sm:mt-2 select-none"
                />
              </div>

              {/* Vertical Separator Line */}
              <div className="w-[1px] h-[28px] bg-white/20 shrink-0 self-center" aria-hidden="true" />

              {/* MahaPravah Section */}
              <div className="flex items-center gap-2.5">
                <img
                  src="/footer-logo.png"
                  alt="MahaPravah"
                  className="w-[38px] h-[38px] sm:w-[46px] sm:h-[46px] object-contain shrink-0"
                />
                <div>
                  <div
                    className="font-bold text-xl leading-tight"
                    style={{ fontFamily: isMarathi ? 'Poppins, sans-serif' : 'Manrope, Inter, sans-serif' }}
                  >
                    <span style={{ color: '#FFF7ED' }}>Maha</span>
                    <span style={{ color: '#F56600' }}>Pravah</span>
                  </div>
                  <div
                    className="text-xs devanagari-text mt-0.5"
                    style={{ color: 'rgba(255,247,237,0.65)' }}
                  >
                    {t.common.tagline}
                  </div>
                </div>
              </div>
            </div>

            <p
              className="text-sm leading-relaxed mb-5"
              style={{ color: 'rgba(255,247,237,0.65)', fontFamily: isMarathi ? 'Poppins, sans-serif' : 'Inter, sans-serif' }}
            >
              {t.footer.brandDesc}
            </p>

            {/* Contact */}
            <div className="space-y-2 mb-2">
              {[
                { icon: Mail, text: 'support@mahapravah.gov.in' },
                { icon: Phone, text: isMarathi ? '१८००-१२३-७७२८ (टोल फ्री)' : '1800-123-7728 (Toll Free)' },
                { icon: MapPin, text: isMarathi ? 'मंत्रालय, मुंबई, महाराष्ट्र' : 'Mantralaya, Mumbai, Maharashtra' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <item.icon size={13} style={{ color: '#F56600', flexShrink: 0 }} />
                  <span className="text-xs" style={{ color: 'rgba(255,247,237,0.65)' }}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4
                className="text-sm font-bold mb-4"
                style={{ color: '#FFF7ED', fontFamily: isMarathi ? 'Poppins, sans-serif' : 'Manrope, sans-serif' }}
              >
                {section}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-xs transition-colors duration-200 hover:text-saffron-400"
                      style={{ color: 'rgba(255,247,237,0.55)', fontFamily: isMarathi ? 'Poppins, sans-serif' : 'Inter, sans-serif' }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t py-5"
        style={{ borderColor: 'rgba(255,247,237,0.08)' }}
      >
        <div
          style={{
            maxWidth: '1440px',
            margin: '0 auto',
            paddingLeft: 'clamp(16px, 2.2vw, 36px)',
            paddingRight: 'clamp(16px, 2.2vw, 36px)',
          }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p
              className="text-xs text-center sm:text-left"
              style={{ color: 'rgba(255,247,237,0.50)', fontFamily: isMarathi ? 'Poppins, sans-serif' : 'Inter, sans-serif' }}
            >
              {t.footer.copyright}
            </p>
            <div className="flex items-center gap-4">
              {[
                isMarathi ? 'गोपनीयता धोरण' : 'Privacy Policy',
                isMarathi ? 'सेवा अटी' : 'Terms of Use',
                isMarathi ? 'सुलभता' : 'Accessibility',
                isMarathi ? 'साइटमॅप' : 'Sitemap',
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-xs transition-colors duration-200 hover:text-saffron-400"
                  style={{ color: 'rgba(255,247,237,0.50)', fontFamily: isMarathi ? 'Poppins, sans-serif' : 'Inter, sans-serif' }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
