import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  User,
  Lock,
  Eye,
  EyeOff,
  Globe,
  ChevronDown,
  HelpCircle,
  BookOpen,
  TrendingUp,
  Users,
  Briefcase,
  ShieldCheck,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface LoginPageProps {
  onNavigateHome?: () => void;
}

export default function LoginPage({ onNavigateHome }: LoginPageProps) {
  const { lang, setLang, isMarathi } = useLanguage();
  const [loginType, setLoginType] = useState<'individual' | 'organization'>('individual');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigateHome) {
      onNavigateHome();
    } else {
      window.location.hash = '';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.hash = '#dashboard';
  };

  // Platform localized strings
  const content = {
    en: {
      headlinePart1: 'कौशल्यातून समृद्ध',
      headlineHighlight: 'महाराष्ट्र',
      headlinePart2: 'घडवूया!',
      subtitleLine1: 'Empowering Skills. Enabling Opportunities.',
      subtitleLine2: 'Building a Stronger Maharashtra.',
      learn: 'Learn',
      learnMr: 'शिका',
      grow: 'Grow',
      growMr: 'विकसा',
      connect: 'Connect',
      connectMr: 'जुडा',
      succeed: 'Succeed',
      succeedMr: 'यशस्वी व्हा',
      quote: 'युवकांच्या कौशल्यात, महाराष्ट्राच्या विकासाची शक्ती आहे.',
      quoteAuthor: '— महाराष्ट्र शासन',
      skilledYouth: 'Skilled Youth',
      strongerMaha: 'Stronger Maharashtra',
      welcome: 'Welcome to MahaPravah',
      welcomeSub: 'Sign in to continue your learning and skill journey',
      individualLogin: 'Individual Login',
      orgLogin: 'Organization Login',
      userLabelIndividual: 'Mobile Number / Email ID',
      userLabelOrg: 'Organization ID / Email',
      userPlaceholder: 'Enter your mobile number or email',
      passLabel: 'Password',
      passPlaceholder: 'Enter your password',
      rememberMe: 'Remember me',
      forgotPassword: 'Forgot Password?',
      signInBtn: 'Sign In',
      orText: 'OR',
      digiLockerTitle: 'Sign in with DigiLocker',
      digiLockerSub: 'Access with your government account',
      newPrompt: 'New to MahaPravah?',
      createAccount: 'Create an Account',
      trustGovtTitle: 'A Government of Maharashtra Initiative',
      trustGovtSub: 'Secure | Trusted | For a Skilled Maharashtra',
      home: 'Home',
      help: 'Need Help?',
      allRightsReserved: '© 2025 MahaPravah. All rights reserved.',
      privacyPolicy: 'Privacy Policy',
      termsOfUse: 'Terms of Use',
      helpSupport: 'Help & Support',
      contactUs: 'Contact Us',
    },
    mr: {
      headlinePart1: 'कौशल्यातून समृद्ध',
      headlineHighlight: 'महाराष्ट्र',
      headlinePart2: 'घडवूया!',
      subtitleLine1: 'कौशल्यांचे सक्षमीकरण. संधींचे दालन.',
      subtitleLine2: 'समृद्ध महाराष्ट्राची घडण.',
      learn: 'Learn',
      learnMr: 'शिका',
      grow: 'Grow',
      growMr: 'विकसा',
      connect: 'Connect',
      connectMr: 'जुडा',
      succeed: 'Succeed',
      succeedMr: 'यशस्वी व्हा',
      quote: 'युवकांच्या कौशल्यात, महाराष्ट्राच्या विकासाची शक्ती आहे.',
      quoteAuthor: '— महाराष्ट्र शासन',
      skilledYouth: 'कुशल युवा',
      strongerMaha: 'समृद्ध महाराष्ट्र',
      welcome: 'महाप्रवाहमध्ये आपले स्वागत आहे',
      welcomeSub: 'आपला शिक्षण आणि कौशल्य प्रवास सुरू ठेवण्यासाठी लॉगिन करा',
      individualLogin: 'वैयक्तिक लॉगिन',
      orgLogin: 'संस्था लॉगिन',
      userLabelIndividual: 'मोबाईल नंबर / ईमेल आयडी',
      userLabelOrg: 'संस्था आयडी / ईमेल',
      userPlaceholder: 'आपला मोबाईल नंबर किंवा ईमेल टाका',
      passLabel: 'पासवर्ड',
      passPlaceholder: 'आपला पासवर्ड प्रविष्ट करा',
      rememberMe: 'लक्षात ठेवा',
      forgotPassword: 'पासवर्ड विसरलात?',
      signInBtn: 'साइन इन करा',
      orText: 'किंवा',
      digiLockerTitle: 'डिजीलॉकरद्वारे साइन इन करा',
      digiLockerSub: 'आपल्या शासकीय खात्याद्वारे प्रवेश करा',
      newPrompt: 'महाप्रवाहवर नवीन आहात?',
      createAccount: 'नवीन खाते तयार करा',
      trustGovtTitle: 'महाराष्ट्र शासनाचा पुढाकार',
      trustGovtSub: 'सुरक्षित | विश्वासार्ह | कुशल महाराष्ट्रासाठी',
      home: 'मुख्यपृष्ठ',
      help: 'मदत हवी आहे?',
      allRightsReserved: '© २०२५ महाप्रवाह. सर्व हक्क राखीव.',
      privacyPolicy: 'गोपनीयता धोरण',
      termsOfUse: 'वापराच्या अटी',
      helpSupport: 'मदत व सहाय्य',
      contactUs: 'संपर्क साधा',
    },
  }[lang];

  return (
    <div
      className={`min-h-screen lg:h-screen lg:max-h-screen lg:overflow-hidden w-full relative flex flex-col justify-between select-none bg-[#FDFBF7] ${
        isMarathi ? 'font-poppins' : 'font-sans'
      }`}
    >
      {/* Faint Background Image Layer (Softened for Content & Login Card Focus) */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `url('/login-bg.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.80,
        }}
      />
      {/* ── Top Header (Moved Downside Away from Edges) ── */}
      <header className="w-full z-20 px-6 sm:px-10 lg:px-14 pt-5 sm:pt-6 lg:pt-7 pb-2 sm:pb-3 shrink-0 flex items-center justify-between">
        {/* Left: Official Government & MahaPravah Branding Block */}
        <a
          href="#home"
          onClick={handleHomeClick}
          className="flex items-center gap-2.5 sm:gap-3.5 text-decoration-none group cursor-pointer"
          title="Return to MahaPravah Home"
        >
          {/* Maharashtra Government section */}
          <div className="flex items-center gap-2.5">
            <img
              src="/maharashtra-govt-logo.png"
              alt="महाराष्ट्र शासन"
              className="h-[40px] sm:h-[46px] lg:h-[50px] w-auto object-contain"
            />
            <div className="hidden sm:flex flex-col text-left justify-center">
              <span className="font-display font-bold text-[11px] sm:text-[12px] lg:text-[12.5px] text-[#2C1A0E] leading-[1.12] tracking-tight">
                Maharashtra
              </span>
              <span className="font-display font-bold text-[11px] sm:text-[12px] lg:text-[12.5px] text-[#2C1A0E] leading-[1.12] tracking-tight">
                State Innovation
              </span>
              <span className="font-display font-bold text-[11px] sm:text-[12px] lg:text-[12.5px] text-[#2C1A0E] leading-[1.12] tracking-tight">
                Society
              </span>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="w-[1px] h-7 sm:h-8 lg:h-8 bg-[#2C1A0E]/30 shrink-0 self-center" aria-hidden="true" />

          {/* MahaPravah section */}
          <div className="flex items-center gap-2.5">
            <img
              src="/mahapravah-logo.png"
              alt="MahaPravah Official Logo"
              className="h-[40px] sm:h-[46px] lg:h-[50px] w-auto object-contain"
            />
            <div className="flex flex-col text-left justify-center">
              <span className="font-display font-extrabold text-lg sm:text-xl leading-none tracking-tight">
                <span className="text-[#2C1A0E]">Maha</span>
                <span className="text-[#F56600]">Pravah</span>
              </span>
              <span className="text-[8.5px] sm:text-[9.5px] text-[#6B351B] font-medium leading-none tracking-normal mt-0.5">
                Skills for a Stronger Maharashtra
              </span>
            </div>
          </div>
        </a>

        {/* Right: Language Switcher & Help */}
        <div className="flex items-center gap-2.5 sm:gap-4">
          {/* Back to Home Button */}
          <button
            onClick={handleHomeClick}
            className="hidden md:flex items-center gap-1.5 text-xs font-semibold text-stone-600 hover:text-[#F56600] transition-colors py-1 px-2.5 rounded-full hover:bg-stone-100/70"
          >
            <ArrowLeft size={13} />
            <span>{content.home}</span>
          </button>

          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-stone-300/80 bg-white/80 backdrop-blur-sm text-xs font-bold text-stone-800 shadow-sm hover:bg-white transition-all cursor-pointer"
            >
              <Globe size={13} className="text-[#F56600]" />
              <span className={isMarathi ? 'font-poppins' : ''}>{lang === 'mr' ? 'मराठी' : 'English'}</span>
              <ChevronDown size={11} className="text-stone-500" />
            </button>

            <AnimatePresence>
              {langDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 4, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 4, scale: 0.95 }}
                  className="absolute right-0 mt-1 w-32 bg-white rounded-xl shadow-lg border border-stone-200 p-1 z-30"
                >
                  <button
                    onClick={() => { setLang('mr'); setLangDropdownOpen(false); }}
                    className={`w-full text-left px-3 py-1.5 text-xs rounded-lg font-semibold font-poppins ${lang === 'mr' ? 'bg-[#F56600]/10 text-[#F56600]' : 'text-stone-700 hover:bg-stone-50'}`}
                  >
                    मराठी
                  </button>
                  <button
                    onClick={() => { setLang('en'); setLangDropdownOpen(false); }}
                    className={`w-full text-left px-3 py-1.5 text-xs rounded-lg font-semibold ${lang === 'en' ? 'bg-[#F56600]/10 text-[#F56600]' : 'text-stone-700 hover:bg-stone-50'}`}
                  >
                    English
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Need Help link */}
          <a
            href="#help"
            className="flex items-center gap-1.5 text-xs font-semibold text-stone-700 hover:text-[#F56600] transition-colors"
          >
            <HelpCircle size={14} className="text-stone-500" />
            <span className="hidden sm:inline">{content.help}</span>
          </a>
        </div>
      </header>

      {/* ── Main Hero Content & Login Card (Aligned with Top Header) ── */}
      <main className="flex-1 w-full px-6 sm:px-10 lg:px-14 py-1 sm:py-2 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 lg:gap-8 z-10 min-h-0">
        
        {/* Left Hero Section: Headline, Subtitle, Floating Circular Icons (Flush with Logo) */}
        <div className="w-full lg:w-[52%] max-w-[700px] xl:max-w-[780px] flex flex-col justify-between self-stretch py-1 lg:py-2 text-left">
          {/* Upper Group: Shifted down gracefully for balanced visual composition */}
          <div className="space-y-3.5 sm:space-y-4 pt-7 sm:pt-10 lg:pt-12 xl:pt-16">
            {/* Bold Devanagari Headline using Platform Font (Single Line with Orange Highlight) */}
            <h1 className="font-poppins text-xl sm:text-2xl md:text-3xl lg:text-[32px] xl:text-[36px] 2xl:text-[40px] font-black text-[#5C1D08] leading-tight tracking-tight whitespace-nowrap">
              {content.headlinePart1} <span className="text-[#F56600]">{content.headlineHighlight}</span> {content.headlinePart2}
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base lg:text-[15.5px] text-[#4A2614] font-medium max-w-xl leading-relaxed">
              {content.subtitleLine1} <br className="hidden sm:block" />
              {content.subtitleLine2}
            </p>

            {/* 4 Feature Badges Row: Floating circular icons (NO square card background) */}
            <div className="pt-2 sm:pt-2.5 flex items-start gap-4 sm:gap-6">
              {/* 1: Learn */}
              <div className="flex flex-col items-center text-center group cursor-default">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#D5C2AA] bg-white/40 backdrop-blur-[2px] flex items-center justify-center text-[#8C3200] transition-transform group-hover:-translate-y-0.5 shadow-sm">
                  <BookOpen size={18} strokeWidth={2.2} />
                </div>
                <span className="text-xs font-bold text-[#2C1A0E] mt-1.5 leading-tight">{content.learn}</span>
                <span className="text-[10px] text-[#6B4530] font-poppins font-medium leading-tight">{content.learnMr}</span>
              </div>

              {/* 2: Grow */}
              <div className="flex flex-col items-center text-center group cursor-default">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#D5C2AA] bg-white/40 backdrop-blur-[2px] flex items-center justify-center text-[#8C3200] transition-transform group-hover:-translate-y-0.5 shadow-sm">
                  <TrendingUp size={18} strokeWidth={2.2} />
                </div>
                <span className="text-xs font-bold text-[#2C1A0E] mt-1.5 leading-tight">{content.grow}</span>
                <span className="text-[10px] text-[#6B4530] font-poppins font-medium leading-tight">{content.growMr}</span>
              </div>

              {/* 3: Connect */}
              <div className="flex flex-col items-center text-center group cursor-default">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#D5C2AA] bg-white/40 backdrop-blur-[2px] flex items-center justify-center text-[#8C3200] transition-transform group-hover:-translate-y-0.5 shadow-sm">
                  <Users size={18} strokeWidth={2.2} />
                </div>
                <span className="text-xs font-bold text-[#2C1A0E] mt-1.5 leading-tight">{content.connect}</span>
                <span className="text-[10px] text-[#6B4530] font-poppins font-medium leading-tight">{content.connectMr}</span>
              </div>

              {/* 4: Succeed */}
              <div className="flex flex-col items-center text-center group cursor-default">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#D5C2AA] bg-white/40 backdrop-blur-[2px] flex items-center justify-center text-[#8C3200] transition-transform group-hover:-translate-y-0.5 shadow-sm">
                  <Briefcase size={18} strokeWidth={2.2} />
                </div>
                <span className="text-xs font-bold text-[#2C1A0E] mt-1.5 leading-tight">{content.succeed}</span>
                <span className="text-[10px] text-[#6B4530] font-poppins font-medium leading-tight">{content.succeedMr}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Login Card (Centered with Balanced Space on Left & Right) */}
        <div className="w-full lg:w-[48%] flex justify-center lg:justify-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="w-full max-w-[442px] bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:py-6 lg:px-6.5 shadow-[0_14px_45px_rgba(44,26,14,0.12)] border border-[#EAE3D6] relative"
          >
            {/* Card Title */}
            <h2 className="font-display text-xl sm:text-2xl font-bold text-[#2C1A0E] tracking-tight">
              {content.welcome}
            </h2>
            <p className="text-[11.5px] sm:text-xs text-stone-500 mt-0.5 font-normal">
              {content.welcomeSub}
            </p>

            {/* Segmented Switcher: Individual Login vs Organization Login */}
            <div className="mt-3.5 p-1 rounded-xl bg-[#F4F1EA] flex gap-1">
              <button
                type="button"
                onClick={() => setLoginType('individual')}
                className={`flex-1 py-1.5 sm:py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  loginType === 'individual'
                    ? 'bg-[#F56600] text-white shadow-sm'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {content.individualLogin}
              </button>
              <button
                type="button"
                onClick={() => setLoginType('organization')}
                className={`flex-1 py-1.5 sm:py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  loginType === 'organization'
                    ? 'bg-[#F56600] text-white shadow-sm'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {content.orgLogin}
              </button>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="mt-3.5 space-y-3 sm:space-y-3.5">
              {/* Mobile Number / Email ID */}
              <div>
                <label className="block text-[11.5px] font-bold text-stone-700 mb-1">
                  {loginType === 'individual' ? content.userLabelIndividual : content.userLabelOrg}
                </label>
                <div className="relative flex items-center">
                  <User size={16} className="absolute left-3.5 text-stone-400 pointer-events-none" />
                  <input
                    type="text"
                    required
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    placeholder={content.userPlaceholder}
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-stone-200 bg-white text-xs sm:text-[13px] text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#F56600]/20 focus:border-[#F56600] transition-all"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-[11.5px] font-bold text-stone-700 mb-1">
                  {content.passLabel}
                </label>
                <div className="relative flex items-center">
                  <Lock size={16} className="absolute left-3.5 text-stone-400 pointer-events-none" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder={content.passPlaceholder}
                    className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-stone-200 bg-white text-xs sm:text-[13px] text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#F56600]/20 focus:border-[#F56600] transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 text-stone-400 hover:text-stone-600 transition-colors cursor-pointer"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between pt-0.5">
                <label className="flex items-center gap-1.5 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-3.5 h-3.5 rounded border-stone-300 text-[#F56600] focus:ring-[#F56600]/30 accent-[#F56600]"
                  />
                  <span className="text-[11.5px] text-stone-600 font-medium">{content.rememberMe}</span>
                </label>

                <a
                  href="#forgot-password"
                  className="text-[11.5px] font-bold text-[#F56600] hover:text-[#D94E00] hover:underline"
                >
                  {content.forgotPassword}
                </a>
              </div>

              {/* Sign In Primary CTA Button */}
              <button
                type="submit"
                className="w-full py-2.5 sm:py-3 px-4 rounded-xl bg-gradient-to-r from-[#F56600] to-[#D94E00] hover:from-[#E55600] hover:to-[#C84000] active:scale-[0.99] text-white font-bold text-xs sm:text-sm shadow-[0_4px_14px_rgba(245,102,0,0.30)] hover:shadow-[0_6px_20px_rgba(245,102,0,0.40)] transition-all flex items-center justify-center gap-2 cursor-pointer mt-1"
              >
                <span>{content.signInBtn}</span>
                <ArrowRight size={15} />
              </button>
            </form>

            {/* OR Divider */}
            <div className="relative my-2.5 sm:my-3 flex items-center justify-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-stone-200" />
              </div>
              <span className="relative px-2.5 bg-white text-[10.5px] font-bold text-stone-400 uppercase tracking-wider">
                {content.orText}
              </span>
            </div>

            {/* Sign In with DigiLocker Button */}
            <button
              type="button"
              onClick={() => alert('Redirecting to DigiLocker authentication...')}
              className="w-full py-2.5 px-3 rounded-xl border border-stone-200/90 bg-white hover:bg-stone-50 active:scale-[0.99] transition-all flex items-center justify-center gap-2.5 cursor-pointer shadow-sm group"
            >
              {/* DigiLocker Icon */}
              <div className="w-5 h-5 rounded-md bg-[#253B80] flex items-center justify-center text-white shrink-0">
                <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current" aria-hidden="true">
                  <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"/>
                </svg>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[11.5px] font-bold text-stone-800 leading-tight group-hover:text-[#253B80]">
                  {content.digiLockerTitle}
                </span>
                <span className="text-[9.5px] text-stone-400 leading-tight">
                  {content.digiLockerSub}
                </span>
              </div>
            </button>

            {/* Create Account Link */}
            <p className="text-center text-[11.5px] text-stone-600 mt-2.5 sm:mt-3 font-medium">
              {content.newPrompt}{' '}
              <a href="#register" className="font-bold text-[#F56600] hover:text-[#D94E00] hover:underline">
                {content.createAccount}
              </a>
            </p>

            {/* Institutional Trust Badge */}
            <div className="mt-3 p-2.5 rounded-xl bg-[#FFF6ED] border border-[#FDE3C8] flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-[#FFEADB] flex items-center justify-center text-[#F56600] shrink-0">
                <ShieldCheck size={16} strokeWidth={2.2} />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[11px] font-bold text-[#4A2414] leading-tight">
                  {content.trustGovtTitle}
                </span>
                <span className="text-[9.5px] text-[#7A452D] font-medium leading-tight mt-0.5">
                  {content.trustGovtSub}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
