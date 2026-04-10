import { motion, AnimatePresence } from "motion/react";
import { Mountain, Waves, Target, ArrowRight, Menu, X, ClipboardList, DraftingCompass, HardHat, ChevronDown, Facebook, Instagram, Mail, Phone, FileText, Zap, Bike } from "lucide-react";
import { useState, useEffect } from "react";
import { HashRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";
import SEO from "./components/SEO";

// Pages
import Consultancy from "./pages/Consultancy";
import Design from "./pages/Design";
import Construction from "./pages/Construction";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  return null;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const services = [
    { title: t('nav.consultancy'), href: "/services/consultancy" },
    { title: t('nav.design'), href: "/services/design" },
    { title: t('nav.construction'), href: "/services/construction" },
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const LanguageButtons = () => (
    <div className="flex items-center space-x-2 ml-4">
      {['en', 'nl', 'fr'].map((lng) => (
        <button
          key={lng}
          onClick={() => changeLanguage(lng)}
          className={`px-2 py-1 text-xs font-bold rounded transition-colors ${
            i18n.language === lng 
              ? 'bg-brand-orange text-white' 
              : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
          }`}
        >
          {lng.toUpperCase()}
        </button>
      ))}
    </div>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/90 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="images/A2TrailsLogo.webp" 
                alt="A2Trails - Sustainable Mountain Bike Trail Building Logo" 
                className="h-[60px] w-auto" 
                referrerPolicy="no-referrer"
              />
            </Link>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center">
            <div className="ml-10 flex items-center space-x-8">
              <Link to="/" className={`${location.pathname === '/' ? 'text-brand-orange' : 'text-gray-300 hover:text-white'} px-3 py-2 text-sm font-medium transition-colors`}>{t('nav.home')}</Link>
              
              {/* Services Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button className="flex items-center gap-1 text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
                  {t('nav.services')} <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-0 mt-0 w-64 bg-brand-card border border-white/10 rounded-xl shadow-2xl overflow-hidden"
                    >
                      {services.map((service) => (
                        <Link
                          key={service.href}
                          to={service.href}
                          className="block px-6 py-4 text-sm text-gray-300 hover:bg-white/5 hover:text-brand-orange transition-all"
                        >
                          {service.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link to="/projects" className={`${location.pathname === '/projects' ? 'text-brand-orange' : 'text-gray-300 hover:text-white'} px-3 py-2 text-sm font-medium transition-colors`}>{t('nav.projects')}</Link>
              <Link to="/about" className={`${location.pathname === '/about' ? 'text-brand-orange' : 'text-gray-300 hover:text-white'} px-3 py-2 text-sm font-medium transition-colors`}>{t('nav.about')}</Link>
              <Link to="/contact" className={`${location.pathname === '/contact' ? 'text-brand-orange' : 'text-gray-300 hover:text-white'} px-3 py-2 text-sm font-medium transition-colors`}>{t('nav.contact')}</Link>
            </div>
            <LanguageButtons />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <LanguageButtons />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-brand-dark border-b border-white/5 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" onClick={() => setIsOpen(false)} className="text-brand-orange block px-3 py-2 text-base font-medium">{t('nav.home')}</Link>
              <div className="px-3 py-2 text-gray-500 text-xs font-bold uppercase tracking-wider">{t('nav.services')}</div>
              {services.map((service) => (
                <Link
                  key={service.href}
                  to={service.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-white block px-6 py-2 text-base font-medium"
                >
                  {service.title}
                </Link>
              ))}
              <Link to="/projects" onClick={() => setIsOpen(false)} className={`${location.pathname === '/projects' ? 'text-brand-orange' : 'text-gray-300 hover:text-white'} block px-3 py-2 text-base font-medium`}>{t('nav.projects')}</Link>
              <Link to="/about" onClick={() => setIsOpen(false)} className={`${location.pathname === '/about' ? 'text-brand-orange' : 'text-gray-300 hover:text-white'} block px-3 py-2 text-base font-medium`}>{t('nav.about')}</Link>
              <Link to="/contact" onClick={() => setIsOpen(false)} className={`${location.pathname === '/contact' ? 'text-brand-orange' : 'text-gray-300 hover:text-white'} block px-3 py-2 text-base font-medium`}>{t('nav.contact')}</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className="relative min-h-[600px] md:h-[75vh] flex items-center justify-center overflow-hidden pt-32 pb-16 md:pt-0 md:pb-0">
      {/* Hero Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="images/A2trails-hero-background.webp"
          alt="Professional mountain bike trail construction background"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
          loading="eager"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "https://images.unsplash.com/photo-1544191161-53684e851244?q=80&w=2070&auto=format&fit=crop";
          }}
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight"
        >
          <Trans i18nKey="hero.title" components={{ br: <br /> }} />
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to="/projects" className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all group">
            {t('hero.cta')}
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to="/contact" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-lg font-bold transition-all text-center">
            {t('hero.cta2')}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const ConstructionProducts = () => {
  const { t } = useTranslation();
  const products = [
    { title: t('services.construction.pumptracks.title'), href: "/services/construction#pumptracks", icon: <Waves className="h-6 w-6" /> },
    { title: t('services.construction.mtbTrails.title'), href: "/services/construction#mtb-trails", icon: <Mountain className="h-6 w-6" /> },
    { title: t('services.construction.jumpTracks.title'), href: "/services/construction#jump-tracks", icon: <Target className="h-6 w-6" /> },
    { title: t('services.construction.skillTracks.title'), href: "/services/construction#skill-tracks", icon: <ClipboardList className="h-6 w-6" /> },
    { title: t('services.construction.bmxTracks.title'), href: "/services/construction#bmx-tracks", icon: <Bike className="h-6 w-6" /> },
    { title: t('services.construction.eMotoTracks.title'), href: "/services/construction#e-moto-tracks", icon: <Zap className="h-6 w-6" /> },
  ];

  return (
    <section className="bg-brand-dark/50 py-12 border-b border-white/5 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link 
                to={product.href}
                className="flex flex-col items-center justify-center p-6 bg-brand-card rounded-xl border border-white/5 hover:border-brand-orange/50 hover:bg-brand-orange/5 transition-all group text-center h-full"
              >
                <div className="mb-3 text-brand-orange group-hover:scale-110 transition-transform">
                  {product.icon}
                </div>
                <span className="text-base font-bold text-gray-300 group-hover:text-white transition-colors">
                  {product.title}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Expertise = () => {
  const { t } = useTranslation();
  const services = [
    {
      title: t('nav.consultancy'),
      description: t('expertise.consultancy.desc'),
      icon: <ClipboardList className="h-10 w-10 text-brand-orange" />,
      href: "/services/consultancy"
    },
    {
      title: t('nav.design'),
      description: t('expertise.design.desc'),
      icon: <DraftingCompass className="h-10 w-10 text-brand-orange" />,
      href: "/services/design"
    },
    {
      title: t('nav.construction'),
      description: t('expertise.construction.desc'),
      icon: <HardHat className="h-10 w-10 text-brand-orange" />,
      href: "/services/construction"
    },
  ];

  return (
    <section id="services" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            {t('expertise.title')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg"
          >
            {t('expertise.subtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-brand-card rounded-2xl border border-white/5 hover:border-brand-orange/30 transition-all group overflow-hidden"
            >
              <Link to={service.href} className="block p-10 h-full">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <div className="inline-flex items-center text-brand-orange font-bold group-hover:underline gap-2">
                  {t('expertise.learnMore')}
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  const { t } = useTranslation();
  return (
    <section id="contact" className="py-24 bg-brand-orange">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          {t('cta.title')}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/90 text-lg mb-10"
        >
          {t('cta.subtitle')}
        </motion.p>
        <Link 
          to="/contact"
          className="bg-white text-brand-orange hover:bg-gray-100 px-10 py-5 rounded-lg font-bold text-lg flex items-center justify-center gap-2 mx-auto transition-all group inline-flex"
        >
          {t('cta.button')}
          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
};

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-brand-dark py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="mb-6">
              <img 
                src="images/A2TrailsLogo.webp" 
                alt="A2Trails - Mountain Bike Infrastructure Experts" 
                className="h-[60px] w-auto" 
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t('footer.description')}
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">{t('footer.quickLinks')}</h4>
            <ul className="space-y-4">
              <li><Link to="/#services" className="text-gray-400 hover:text-brand-orange text-sm transition-colors">{t('nav.services')}</Link></li>
              <li><Link to="/projects" className="text-gray-400 hover:text-brand-orange text-sm transition-colors">{t('nav.projects')}</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-brand-orange text-sm transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-brand-orange text-sm transition-colors">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">{t('footer.services')}</h4>
            <ul className="space-y-4">
              <li><Link to="/services/consultancy" className="text-gray-400 hover:text-brand-orange text-sm transition-colors">{t('nav.consultancy')}</Link></li>
              <li><Link to="/services/design" className="text-gray-400 hover:text-brand-orange text-sm transition-colors">{t('nav.design')}</Link></li>
              <li><Link to="/services/construction" className="text-gray-400 hover:text-brand-orange text-sm transition-colors">{t('nav.construction')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">{t('footer.contact')}</h4>
            <ul className="space-y-4">
              <li className="text-gray-400 text-sm flex items-center gap-2">
                <Mail className="h-4 w-4 text-brand-orange" />
                antonarnauts@a2trails.com
              </li>
              <li className="text-gray-400 text-sm flex items-center gap-2">
                <FileText className="h-4 w-4 text-brand-orange" />
                {t('footer.vat')}: BE1024.359.194
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">{t('footer.followUs')}</h4>
            <div className="flex gap-4">
              <a href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-orange hover:text-white transition-all">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-orange hover:text-white transition-all">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} A2Trails. {t('footer.rights')}
          </div>
          <div className="flex gap-8 text-gray-500 text-sm">
            <Link to="/privacy" className="hover:text-white transition-colors">{t('footer.privacy')}</Link>
            <Link to="/terms" className="hover:text-white transition-colors">{t('footer.terms')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const HomePage = () => (
  <>
    <SEO 
      title="Home" 
      description="Professional construction of mountain biking infrastructure perfectly adapted to your specific needs. Building tracks, creating experiences."
    />
    <Hero />
    <ConstructionProducts />
    <Expertise />
    <CTA />
  </>
);

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-brand-dark">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services/consultancy" element={<Consultancy />} />
            <Route path="/services/design" element={<Design />} />
            <Route path="/services/construction" element={<Construction />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}
