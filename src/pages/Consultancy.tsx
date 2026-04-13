import { motion } from "motion/react";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SEO from "../components/SEO";
import { getAssetPath } from "../lib/utils";

const ServiceSection = ({ title, description, features, image, imageRight = false }: { 
  title: string; 
  description: string; 
  features: string[]; 
  image: string; 
  imageRight?: boolean;
}) => (
  <div className={`flex flex-col ${imageRight ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center py-16`}>
    <motion.div 
      initial={{ opacity: 0, x: imageRight ? 20 : -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="w-full lg:w-[37.5%] rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl"
    >
      <img 
        src={getAssetPath(image)} 
        alt={`${title} - A2Trails Consultancy Service`} 
        className="w-full h-full object-cover" 
        loading="lazy"
      />
    </motion.div>
    <motion.div 
      initial={{ opacity: 0, x: imageRight ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="w-full lg:w-[62.5%]"
    >
      <h3 className="text-3xl font-bold mb-4">{title}</h3>
      <p className="text-gray-400 text-lg mb-8 leading-relaxed">
        {description}
      </p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3 text-gray-300">
            <div className="flex-shrink-0 h-5 w-5 rounded-full border border-brand-orange flex items-center justify-center">
              <Check className="h-3 w-3 text-brand-orange" strokeWidth={3} />
            </div>
            <span className="text-sm font-medium">{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  </div>
);

export default function Consultancy() {
  const { t } = useTranslation();

  return (
    <div className="pt-32 bg-brand-dark">
      <SEO 
        title={t('services.consultancy.title')}
        description={t('services.consultancy.subtitle')}
        canonical="https://a2trails.com/services/consultancy"
      />
      {/* Header */}
      <section className="py-24 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            {t('services.consultancy.title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            {t('services.consultancy.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceSection 
            title={t('services.consultancy.feasibility.title')}
            description={t('services.consultancy.feasibility.desc')}
            image="images/image-soil.webp"
            features={t('services.consultancy.feasibility.features', { returnObjects: true }) as string[]}
          />
          
          <ServiceSection 
            title={t('services.consultancy.engineering.title')}
            description={t('services.consultancy.engineering.desc')}
            image="images/image-drainage.webp"
            imageRight={true}
            features={t('services.consultancy.engineering.features', { returnObjects: true }) as string[]}
          />

          <ServiceSection 
            title={t('services.consultancy.strategic.title')}
            description={t('services.consultancy.strategic.desc')}
            image="images/image-planning.webp"
            features={t('services.consultancy.strategic.features', { returnObjects: true }) as string[]}
          />
        </div>
      </section>

      {/* Custom Solutions Card */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brand-card rounded-3xl p-12 md:p-20 text-center border border-white/5"
          >
            <h2 className="text-4xl font-bold mb-6">{t('services.consultancy.cta.title')}</h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              {t('services.consultancy.cta.subtitle')}
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center bg-brand-orange hover:bg-brand-orange/90 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all"
            >
              {t('services.consultancy.cta.button')}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
