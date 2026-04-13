import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Calendar, Search, Filter, X } from "lucide-react";
import { useState, useMemo } from "react";
import { useTranslation, Trans } from "react-i18next";
import SEO from "../components/SEO";
import { projectsData } from "../data/projects";
import { getAssetPath } from "../lib/utils";

export default function Projects() {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = useMemo(() => {
    const cats = ["All", ...new Set(projectsData.map(p => p.category))];
    return cats;
  }, []);

  const translateCategory = (category: string) => {
    if (category === "All") return t('projects.all');
    const key = category.toLowerCase().replace(/\s+/g, '');
    const translated = t(`projects.categories.${key}`);
    return translated === `projects.categories.${key}` ? category : translated;
  };

  const translateService = (service: string) => {
    if (service === "Consultancy & Engineering") return t('nav.consultancy');
    if (service === "Design") return t('nav.design');
    if (service === "Construction") return t('nav.construction');
    return service;
  };

  const filteredProjects = useMemo(() => {
    return projectsData.filter(project => {
      const matchesSearch = 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.location.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="pt-32 bg-brand-dark min-h-screen">
      <SEO 
        title={t('projects.title')}
        description={t('projects.subtitle')}
        canonical="https://a2trails.com/projects"
      />
      {/* Header */}
      <section className="py-24 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            {t('projects.title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            {t('projects.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Project Directory */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-card/50 border border-white/5 rounded-3xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
              <div>
                <h2 className="text-3xl font-bold mb-4">{t('projects.directory')}</h2>
                <p className="text-gray-400">
                  {t('projects.browse')}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                <div className="relative flex-grow min-w-[300px]">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                  <input 
                    type="text"
                    placeholder={t('projects.search')}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-brand-dark border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-orange/50 transition-colors"
                  />
                  {searchQuery && (
                    <button 
                      onClick={() => setSearchQuery("")}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-3 mb-12">
              <div className="flex items-center gap-2 text-gray-500 mr-2">
                <Filter className="h-4 w-4" />
                <span className="text-xs uppercase tracking-widest font-bold">{t('projects.filter')}</span>
              </div>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2.5 rounded-full text-base font-semibold transition-all ${
                    selectedCategory === category 
                      ? "bg-brand-orange text-white shadow-lg shadow-brand-orange/20" 
                      : "bg-brand-dark text-brand-orange border border-brand-orange/20 hover:border-brand-orange/40"
                  }`}
                >
                  {translateCategory(category)}
                </button>
              ))}
            </div>

            {/* List View */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/5 text-gray-500 text-xs uppercase tracking-widest">
                    <th className="pb-4 font-semibold">{t('projects.table.project')}</th>
                    <th className="pb-4 font-semibold hidden sm:table-cell">{t('projects.table.category')}</th>
                    <th className="pb-4 font-semibold">{t('projects.table.location')}</th>
                    <th className="pb-4 font-semibold hidden md:table-cell">{t('projects.table.services')}</th>
                    <th className="pb-4 font-semibold text-right">{t('projects.table.year')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {filteredProjects.map((project) => (
                    <motion.tr 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      key={project.id}
                      className="group hover:bg-white/[0.02] transition-colors"
                    >
                        <td className="py-6 pr-4">
                          <span className="text-white font-medium group-hover:text-brand-orange transition-colors">
                            {project.title}
                          </span>
                        </td>
                        <td className="py-6 pr-4 hidden sm:table-cell">
                          <span className="text-sm font-medium text-brand-orange bg-brand-orange/10 border border-brand-orange/20 px-3 py-1 rounded-full">
                            {translateCategory(project.category)}
                          </span>
                        </td>
                        <td className="py-6 pr-4 text-gray-400 text-sm">
                          {project.location}
                        </td>
                        <td className="py-6 pr-4 hidden md:table-cell">
                          <div className="flex flex-wrap gap-1">
                            {project.services.map(service => (
                              <span key={service} className="text-[10px] text-brand-orange bg-brand-orange/10 border border-brand-orange/20 px-1.5 py-0.5 rounded">
                                {translateService(service)}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="py-6 text-right text-gray-500 font-mono text-sm">
                          {project.year || "—"}
                        </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
              
              {filteredProjects.length === 0 && (
                <div className="py-20 text-center">
                  <p className="text-gray-500">{t('projects.noResults')}</p>
                  <button 
                    onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
                    className="mt-4 text-brand-orange hover:underline text-sm"
                  >
                    {t('projects.clearFilters')}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-orange rounded-3xl p-12 md:p-16 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('projects.cta.title')}</h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
              {t('projects.cta.subtitle')}
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center bg-white text-brand-orange hover:bg-gray-100 px-10 py-4 rounded-xl font-bold text-lg transition-all"
            >
              {t('projects.cta.button')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
