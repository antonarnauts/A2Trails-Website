import { motion } from "motion/react";
import { Check, ShieldCheck, Settings, Wrench, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SEO from "../components/SEO";
import { getAssetPath } from "../lib/utils";

const MaintenanceFeature = ({ icon: Icon, title, description, features, image, imageRight = false }: { 
  icon: any;
  title: string; 
  description: string; 
  features: string[]; 
  image: string; 
  imageRight?: boolean;
}) => (
  <div className={`flex flex-col ${imageRight ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center py-16 scroll-mt-24`}>
    <motion.div 
      initial={{ opacity: 0, x: imageRight ? 20 : -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="w-full lg:w-1/2 rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl relative group"
    >
      <img 
        src={getAssetPath(image)} 
        alt={`${title} - A2Trails Maintenance Service`} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
        <div className="bg-brand-orange p-3 rounded-xl">
          <Icon className="h-6 w-6 text-white" />
        </div>
      </div>
    </motion.div>
    <motion.div 
      initial={{ opacity: 0, x: imageRight ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="w-full lg:w-1/2"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center">
          <Icon className="h-6 w-6 text-brand-orange" />
        </div>
        <h3 className="text-3xl font-bold">{title}</h3>
      </div>
      <p className="text-gray-400 text-lg mb-8 leading-relaxed">
        {description}
      </p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3 text-gray-300">
            <div className="flex-shrink-0 h-5 w-5 rounded-full border border-brand-orange/50 flex items-center justify-center bg-brand-orange/5">
              <Check className="h-3 w-3 text-brand-orange" strokeWidth={3} />
            </div>
            <span className="text-sm font-medium">{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  </div>
);

export default function Maintenance() {
  const { t } = useTranslation();

  return (
    <div className="pt-32 bg-brand-dark">
      <SEO 
        title={t('services.maintenance.title')}
        description={t('services.maintenance.subtitle')}
        canonical="https://a2trails.com/services/maintenance"
      />
      
      {/* Header */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-orange/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 tracking-tight"
            >
              {t('services.maintenance.title')}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            >
              {t('services.maintenance.subtitle')}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MaintenanceFeature 
            icon={Settings}
            title={t('services.maintenance.asphalt.title')}
            description={t('services.maintenance.asphalt.desc')}
            image="images/asfaltrepair.webp"
            features={t('services.maintenance.asphalt.features', { returnObjects: true }) as string[]}
          />
          
          <MaintenanceFeature 
            icon={Wrench}
            title={t('services.maintenance.gravelDirt.title')}
            description={t('services.maintenance.gravelDirt.desc')}
            image="images/trails.webp"
            imageRight={true}
            features={t('services.maintenance.gravelDirt.features', { returnObjects: true }) as string[]}
          />

          <MaintenanceFeature 
            icon={Leaf}
            title={t('services.maintenance.green.title')}
            description={t('services.maintenance.green.desc')}
            image="images/bosmaaier.webp"
            features={t('services.maintenance.green.features', { returnObjects: true }) as string[]}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-brand-card border border-white/5 rounded-[2.5rem]" />
            <div className="absolute top-0 right-0 p-12 opacity-5">
              <ShieldCheck className="h-64 w-64 text-brand-orange" />
            </div>
            
            <div className="relative p-12 md:p-24 text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
                {t('services.maintenance.cta.title')}
              </h2>
              <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
                {t('services.maintenance.cta.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link 
                  to="/contact"
                  className="group relative inline-flex items-center justify-center px-10 py-5 rounded-2xl bg-brand-orange font-bold text-white transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(239,68,68,0.2)]"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {t('services.maintenance.cta.button')}
                  </span>
                </Link>
                <Link 
                  to="/services/consultancy"
                  className="inline-flex items-center justify-center px-10 py-5 rounded-2xl bg-white/5 border border-white/10 font-bold text-white transition-all hover:bg-white/10"
                >
                  {t('nav.consultancy')}
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
