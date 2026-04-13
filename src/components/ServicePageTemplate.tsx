import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ReactNode } from "react";
import { getAssetPath } from "../lib/utils";

interface ServicePageProps {
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  image: string;
  icon: ReactNode;
}

export const ServicePageTemplate = ({ title, description, longDescription, features, image, icon }: ServicePageProps) => {
  return (
    <div className="pt-20">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src={getAssetPath(image)}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-dark"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="mb-6">{icon}</div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{title}</h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {description}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-brand-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Expert Solutions for Modern Infrastructure</h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                {longDescription}
              </p>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-300">
                    <div className="h-2 w-2 bg-brand-orange rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden aspect-video shadow-2xl"
            >
              <img
                src={getAssetPath(image)}
                alt={title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-dark">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to discuss your {title.toLowerCase()} needs?</h2>
          <Link
            to="/#contact"
            className="inline-flex items-center bg-brand-orange hover:bg-brand-orange/90 text-white px-10 py-5 rounded-lg font-bold text-lg gap-2 transition-all group"
          >
            Get In Touch
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};
