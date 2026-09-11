import { useLanguage } from '../../context/LanguageContext';

export default function DashboardFooter() {
  const { isMarathi } = useLanguage();

  return (
    <footer className="w-full pt-1 pb-0.5 border-t border-slate-200 mt-1 select-none shrink-0">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-1 text-[10px] text-slate-500 font-normal">
        <p>
          {isMarathi
            ? '© २०२५ महाप्रवाह. महाराष्ट्र शासन. सर्व हक्क सुरक्षित.'
            : '© 2025 MahaPravah. Government of Maharashtra. All rights reserved.'}
        </p>

        <div className="flex items-center gap-2">
          <a href="#privacy" className="hover:text-[#C2410C] transition-colors">
            {isMarathi ? 'गोपनीयता धोरण' : 'Privacy Policy'}
          </a>
          <span className="text-slate-300">|</span>
          <a href="#terms" className="hover:text-[#C2410C] transition-colors">
            {isMarathi ? 'वापर अटी' : 'Terms of Use'}
          </a>
          <span className="text-slate-300">|</span>
          <a href="#help" className="hover:text-[#C2410C] transition-colors">
            {isMarathi ? 'मदत व सहाय्य' : 'Help & Support'}
          </a>
          <span className="text-slate-300">|</span>
          <a href="#contact" className="hover:text-[#C2410C] transition-colors">
            {isMarathi ? 'संपर्क साधा' : 'Contact Us'}
          </a>
        </div>
      </div>
    </footer>
  );
}
