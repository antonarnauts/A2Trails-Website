import { motion } from "motion/react";
import { Award, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SEO from "../components/SEO";

const StatItem = ({ icon: Icon, value, label }: { icon: any, value: string, label: string }) => (
  <div className="text-center">
    <div className="flex justify-center mb-4">
      <Icon className="h-8 w-8 text-brand-orange" />
    </div>
    <div className="text-3xl font-bold text-white mb-1">{value}</div>
    <div className="text-gray-500 text-sm uppercase tracking-wider font-medium">{label}</div>
  </div>
);

const ApproachCard = ({ title, description }: { title: string, description: string }) => (
  <div className="bg-brand-card p-8 rounded-2xl border border-white/5 hover:border-brand-orange/20 transition-all">
    <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
    <p className="text-gray-400 leading-relaxed">
      {description}
    </p>
  </div>
);

const TeamMember = ({ name, role, description, image, imageClassName = "" }: { name: string, role: string, description: string, image: string, imageClassName?: string }) => (
  <div className="bg-brand-card p-8 rounded-2xl border border-white/5 text-center group hover:border-brand-orange/20 transition-all">
    <div className="w-24 h-24 rounded-full bg-white/5 mx-auto mb-6 overflow-hidden border-2 border-transparent group-hover:border-brand-orange/50 transition-all">
      <img 
        src={image} 
        alt={`${name} - ${role} at A2Trails`} 
        className={`w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 ${imageClassName}`} 
        referrerPolicy="no-referrer" 
        loading="lazy"
      />
    </div>
    <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
    <div className="text-brand-orange text-sm font-semibold mb-4">{role}</div>
    <p className="text-gray-400 text-sm leading-relaxed">
      {description}
    </p>
  </div>
);

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="pt-32 bg-brand-dark">
      <SEO 
        title={t('nav.about')}
        description={t('about.p1')}
        canonical="https://a2trails.com/about"
      />
      {/* Hero Section */}
      <section className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl font-bold text-white mb-8 leading-tight">
                {t('about.title')}
              </h1>
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                <p>
                  {t('about.p1')}
                </p>
                <p>
                  {t('about.p2')}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="pt-12 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">{t('about.approach.title')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ApproachCard 
              title={t('about.approach.community.title')} 
              description={t('about.approach.community.desc')} 
            />
            <ApproachCard 
              title={t('about.approach.design.title')} 
              description={t('about.approach.design.desc')} 
            />
            <ApproachCard 
              title={t('about.approach.quality.title')} 
              description={t('about.approach.quality.desc')} 
            />
            <ApproachCard 
              title={t('about.approach.pricing.title')} 
              description={t('about.approach.pricing.desc')} 
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center gap-12 md:gap-24">
            <StatItem icon={Award} value="5" label={t('about.stats.experience')} />
            <StatItem icon={Users} value="23" label={t('about.stats.projects')} />
          </div>
        </div>
      </section>

      {/* Meet The Team Section */}
      <section className="py-24 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">{t('about.team.title')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamMember 
              name="Anton Arnauts" 
              role={t('about.team.anton.role')} 
              description={t('about.team.anton.desc')}
              image="images/Anton-Arnauts.webp"
            />
            <TeamMember 
              name="Ward De Prins" 
              role={t('about.team.ward.role')} 
              description={t('about.team.ward.desc')}
              image="images/ward-de-prins.webp"
            />
            <TeamMember 
              name="Jelle Harnisfeger" 
              role={t('about.team.jelle.role')} 
              description={t('about.team.jelle.desc')}
              image="images/Jelle-Harnisfeger.webp"
            />
            <TeamMember 
              name="Rafael Comptdaer" 
              role={t('about.team.rafael.role')} 
              description={t('about.team.rafael.desc')}
              image="images/Rafael-Comptdaer.webp"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-brand-orange rounded-3xl p-12 md:p-20 text-center shadow-2xl shadow-brand-orange/20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t('about.cta.title')}</h2>
            <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              {t('about.cta.subtitle')}
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center bg-white text-brand-orange hover:bg-gray-100 px-10 py-4 rounded-xl font-bold text-lg transition-all group"
            >
              {t('about.cta.button')}
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
