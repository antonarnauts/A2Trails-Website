import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          nav: {
            home: 'Home',
            services: 'Services',
            projects: 'Projects',
            about: 'About',
            contact: 'Contact',
            consultancy: 'Consultancy & Engineering',
            design: 'Design',
            construction: 'Construction',
            maintenance: 'Maintenance',
            designBuild: 'Design and Build',
          },
          hero: {
            title: 'Building Tracks,<br />Creating Experiences',
            subtitle: 'Professional construction of mountain biking infrastructure that is perfectly adapted to your specific needs',
            cta: 'View Our Projects',
            cta2: 'Get In Touch',
          },
          expertise: {
            title: 'Our Expertise',
            subtitle: 'Specialized construction services for riders of all levels',
            learnMore: 'Learn More',
            consultancy: {
              desc: 'Strategic feasibility studies, site assessments, and technical engineering for sustainable biking and mountain-biking infrastructure.',
            },
            design: {
              desc: 'Creative and functional design of trail centers, skill parks, and pump tracks tailored to your specific needs.',
            },
            construction: {
              desc: 'Professional building using specialized machinery and hand-finishing for durable, high-quality bike infrastructure.',
            },
            maintenance: {
              desc: 'Preserving the quality and safety of your infrastructure through routine inspections and professional repairs.',
            },
          },
          cta: {
            title: 'Ready to Build Your Vision?',
            subtitle: "Let's create something amazing together. Contact us for a consultation.",
            button: 'Start Your Project',
          },
          footer: {
            description: 'Professional construction of mountain biking infrastructure that is perfectly adapted to your specific needs',
            quickLinks: 'Quick Links',
            services: 'Services',
            followUs: 'Follow Us',
            contact: 'Contact',
            vat: 'VAT',
            rights: 'All rights reserved.',
            privacy: 'Privacy Policy',
            terms: 'Terms of Service',
          },
          about: {
            title: 'Passion Meets Precision',
            p1: 'A2Trails was founded by riders, for riders. Our team combines a deep passion for mountain biking, BMX, and skateboarding with professional construction expertise to design and build world-class riding facilities.',
            p2: 'From pump tracks and trail centers to skill parks, every project is carefully tailored to your needs. We deliver spaces that prioritize flow, safety, durability, and sustainability—built with the same attention to detail we expect as riders ourselves.',
            stats: {
              experience: 'Years Experience',
              projects: 'Projects Completed',
            },
            approach: {
              title: 'Our Approach',
              community: {
                title: 'Community Focus',
                desc: 'We work closely with local communities to ensure our projects meet their needs and become beloved gathering places.',
              },
              design: {
                title: 'Adapted Design',
                desc: 'We analyze terrain, rider needs, and environmental factors to create optimal designs that maximize flow, challenge, and sustainability.',
              },
              quality: {
                title: 'Quality Construction',
                desc: 'Using professional-grade equipment and proven techniques, we build facilities that stand the test of time and heavy use.',
              },
              pricing: {
                title: 'Competitive Pricing',
                desc: 'We offer high-quality construction at competitive rates because we are an independent firm with no franchise fees.',
              },
            },
            team: {
              title: 'Meet The Team',
              anton: {
                role: 'Founder & Designer',
                desc: 'Landscape architect with 5 years of track building experience.',
              },
              ward: {
                role: 'Freelance designer - Dirt Jumps',
                desc: 'Dedicated trail builder with an eye for detail.',
              },
              jelle: {
                role: 'Freelance Designer - Urban solutions',
                desc: 'Expert in street installations focused on BMX riders',
              },
              rafael: {
                role: 'Freelance Shaper',
                desc: 'Experienced MX rider who will never put his tools down before the job is done',
              },
            },
            cta: {
              title: "Let's Build Together",
              subtitle: "Have a project in mind? We'd love to hear about it and discuss how we can bring your vision to life.",
              button: 'Start a Conversation',
            },
          },
          projects: {
            title: 'Our Projects',
            subtitle: 'Showcasing our commitment to quality, flow, and sustainable bike infrastructure across Europe.',
            directory: 'Project Directory',
            browse: 'Browse our complete portfolio of projects where we assisted, planned, constructed and designed multiple types of mountain biking infrastructure.',
            search: 'Search by city or project...',
            filter: 'Filter:',
            all: 'All',
            table: {
              project: 'Project',
              category: 'Category',
              location: 'Location',
              services: 'Services',
              year: 'Year',
            },
            noResults: 'No projects found matching your criteria.',
            clearFilters: 'Clear all filters',
            cta: {
              title: 'Have a Project in Mind?',
              subtitle: 'Let\'s build something incredible together. From initial feasibility to final construction, we\'re with you every step of the way.',
              button: 'Get in Touch',
            },
            categories: {
              pumptrack: 'Pumptrack',
              skillPark: 'Skill Park',
              trailCenter: 'Trail Center',
              dirtJumps: 'Dirt Jumps',
            },
          },
          contact: {
            title: 'Get In Touch',
            subtitle: 'Ready to start your project? Fill out the form below or reach out directly.',
            info: 'Contact Information',
            phone: 'Phone',
            email: 'Email',
            office: 'Office',
            vat: 'VAT',
            hours: {
              title: 'Office Hours',
              monFri: 'Monday - Friday',
              weekend: 'Weekend',
              hoursRange: '8am - 6pm',
              closed: 'Closed',
            },
            form: {
              name: 'Name *',
              namePlaceholder: 'Your name',
              email: 'Email *',
              emailPlaceholder: 'Your email',
              phone: 'Phone',
              phonePlaceholder: 'Your phone number',
              projectType: 'Project Type *',
              projectTypePlaceholder: 'Select a project type',
              details: 'Project Details *',
              detailsPlaceholder: 'Tell us about your project, location, timeline, and any specific requirements...',
              submit: 'Send Message',
              success: 'Thank you for your message! We have received your request and will get back to you soon.',
              error: 'Something went wrong. Please ensure you have verified your email with Formspree or contact us directly at antonarnauts@a2trails.com.',
            },
          },
          services: {
            consultancy: {
              title: 'Consultancy & Engineering',
              subtitle: 'Strategic planning and technical expertise for sustainable bike infrastructure',
              feasibility: {
                title: 'Feasibility & Impact Studies',
                desc: 'Comprehensive analysis of site potential, environmental impact, and community needs to ensure project viability.',
                features: [
                  'Site potential assessment',
                  'Environmental impact analysis',
                  'Community need surveys',
                  'Risk assessment',
                  'Regulatory compliance check',
                ],
              },
              engineering: {
                title: 'Technical Engineering',
                desc: 'Precision engineering for drainage, soil stability, and structural technical features.',
                features: [
                  'Adapted drainage design',
                  'Soil composition analysis',
                  'Structural engineering',
                  'Technical specifications',
                  'Material sourcing strategy',
                  'Safety standards audit',
                ],
              },
              strategic: {
                title: 'Strategic Planning',
                desc: 'Long-term master planning for trail networks and urban bike park integration.',
                features: [
                  'Master plan development',
                  'Phased implementation strategy',
                  'Grant & funding support',
                  'Maintenance planning',
                  'Future-proofing designs',
                ],
              },
              cta: {
                title: 'Expert Advice',
                subtitle: 'Need technical guidance for your project? Our engineering team is ready to help you navigate the complexities of trail building.',
                button: 'Consult with Us',
              },
            },
            design: {
              title: 'Design',
              subtitle: 'Creative and functional trail designs that maximize flow and rider experience',
              micro: {
                title: 'Micro Design',
                desc: 'Designing specific tracks tailored to local demands and user groups.',
                features: [
                  'Local demand analysis',
                  'Track-specific layouts',
                  'User-group targeting',
                  'Feature-specific blueprints',
                  'Technical obstacle design',
                  'Progression-based features',
                ],
              },
              meso: {
                title: 'Meso Design',
                desc: 'Seamless integration of bike infrastructure into surrounding parks, recreational areas, or sports complexes.',
                features: [
                  'Park & sports area integration',
                  'Landscape architecture',
                  'Multi-use synergy',
                  'Accessibility & flow',
                  'Aesthetic integration',
                  'Environmental blending',
                ],
              },
              macro: {
                title: 'Macro Design',
                desc: 'Large-scale strategic planning for recreation networks and trail centers to activate regional tourism.',
                features: [
                  'Regional network planning',
                  'Trail center master plans',
                  'Tourism activation strategy',
                  'Economic impact planning',
                  'Long-term sustainability',
                ],
              },
              cta: {
                title: 'Creative Vision',
                subtitle: 'Ready to see your project take shape? Let our designers create a vision that inspires your community.',
                button: 'Start Designing',
              },
            },
            construction: {
              title: 'Construction',
              subtitle: 'Professional trail building with a focus on durability, safety, and flow',
              pumptracks: {
                title: 'Pumptracks',
                desc: 'Professional asphalt pumptracks built for durability and perfect flow.',
                features: [
                  'Asphalt surfacing',
                  'Perfect geometry',
                  'All-weather durability',
                  'Low maintenance',
                  'Multi-user accessibility',
                  'Precision shaping',
                ],
              },
              mtbTrails: {
                title: 'Mountain Bike Trails',
                desc: 'Sustainable trail building that respects the natural environment while providing maximum fun.',
                features: [
                  'Natural terrain blending',
                  'Sustainable drainage',
                  'Erosion control',
                  'Technical trail features',
                  'Flow-trail expertise',
                  'Environmental protection',
                ],
              },
              jumpTracks: {
                title: 'Jump Tracks',
                desc: 'Technical jump lines designed for progression and airtime.',
                features: [
                  'Precision dirt shaping',
                  'Progression-based lines',
                  'Safety-first design',
                  'Technical jump geometry',
                  'Compaction expertise',
                  'Tuning & testing',
                ],
              },
              skillTracks: {
                title: 'Skill Tracks',
                desc: 'Educational tracks with technical obstacles to improve bike handling skills.',
                features: [
                  'Technical obstacles',
                  'Balance features',
                  'Progression zones',
                  'Safe learning environment',
                  'Wooden structures',
                  'Skill-specific challenges',
                ],
              },
              bmxTracks: {
                title: 'BMX Tracks',
                desc: 'Professional race tracks and freestyle parks designed for BMX athletes.',
                features: [
                  'UCI standard geometry',
                  'Starting gate integration',
                  'Pro-section lines',
                  'Technical rhythm sections',
                  'Asphalt or dirt turns',
                  'Race-ready surfacing',
                ],
              },
              eMotoTracks: {
                title: 'E-Moto Tracks',
                desc: 'Specialized tracks designed for electric motocross, focusing on power management, traction, and sustainable trail design.',
                features: [
                  'Sustainable soil stabilization',
                  'Technical climbing sections',
                  'Heavy-duty trail surfacing',
                ],
              },
              cta: {
                title: 'Built to Last',
                subtitle: 'Ready to break ground? Our construction team brings decades of experience to every build.',
                button: 'Build with Us',
              },
            },
            maintenance: {
              title: 'Maintenance',
              subtitle: 'Preserving the quality and safety of your bike infrastructure',
              asphalt: {
                title: 'Asphalt Pumptracks',
                desc: 'Specialized maintenance for asphalt surfaces to ensure long-lasting performance and rider safety.',
                features: [
                  'Crack repair',
                  'Erosion repair',
                  'Safety lines',
                  'Safety inspections',
                  'Surface repair',
                ],
              },
              gravelDirt: {
                title: 'Gravel and Dirt Trails',
                desc: 'Keeping natural surface trails in top shape through expert shaping and erosion management.',
                features: [
                  'Reshaping',
                  'Erosion repair',
                  'Feature inspection and repair',
                  'Signage and Information Panels',
                  'Green Maintenance',
                ],
              },
              green: {
                title: 'Green Maintenance',
                desc: 'Ecological management of the surroundings to preserve visibility and natural aesthetics.',
                features: [
                  'Vegetation control',
                  'Trimming overgrowth',
                  'Invasive species management',
                  'Accessibility of trails',
                ],
              },
              cta: {
                title: 'Protect Your Investment',
                subtitle: 'Regular maintenance extends the lifespan of your infrastructure and ensures maximum safety for users.',
                button: 'Schedule Maintenance',
              },
            },
          },
          privacy: {
            title: "Privacy Policy: A2Trails",
            lastUpdated: "Last Updated: March 12, 2026",
            controller: {
              title: "1. Data Controller",
              text: "The entity responsible for processing your personal data is:",
              company: "Company Name",
              office: "Registered Office",
              cbe: "CBE/KBO Number",
              email: "Contact Email"
            },
            legalBasis: {
              title: "2. Legal Basis for Processing",
              text: "We process personal data only when a valid legal basis exists under Article 6(1) GDPR:",
              contractual: "Contractual Necessity: To provide quotes for MTB trail design, construction, or maintenance.",
              legal: "Legal Obligation: For mandatory social security declarations (e.g., Check-in-at-work / 30bis declaration) or tax reporting.",
              consent: "Consent: When you subscribe to our newsletter or use non-essential cookies.",
              legitimate: "Legitimate Interest: To ensure the security of our website and to communicate with B2B partners."
            },
            categories: {
              title: "3. Categories of Data Collected",
              text: "We collect and process the following data categories:",
              identification: "Identification Data: Name, address, telephone number, and email.",
              professional: "Professional Data: Company name, VAT number, and project location (GPS coordinates for trail sites).",
              technical: "Technical Data: IP address, browser type, and duration of visit (via cookies)."
            },
            retention: {
              title: "4. Retention Periods",
              text: "Data is stored no longer than necessary for the purposes for which it was collected:",
              accounting: "Accounting/Tax Data: Strictly 7 years (statutory Belgian requirement).",
              contractual: "Contractual Documents: 10 years following the end of the contract (to cover 10-year liability for construction works under Articles 1792 and 2270 of the Civil Code).",
              requests: "Contact Requests: 1 year if no contract is concluded."
            },
            sharing: {
              title: "5. Data Sharing and Transfers",
              text: "Data may be shared with:",
              subcontractors: "Subcontractors: Specialized earthmovers or ecologists, strictly under a signed Data Processing Agreement (DPA).",
              authorities: "Public Authorities: RSZ/ONSS for mandatory attendance registration on construction sites.",
              it: "IT Providers: Hosting and cloud services located within the EEA."
            },
            rights: {
              title: "6. Rights of the Data Subject",
              text: "Under Belgian and EU law, you possess the following rights, which we will honor within 30 days of a request:",
              access: "Right of Access: To know what data we hold.",
              rectification: "Right to Rectification: To correct inaccurate data.",
              erasure: "Right to Erasure (\"Right to be Forgotten\"): Subject to legal retention obligations.",
              restriction: "Right to Restriction: To temporarily halt processing.",
              portability: "Right to Data Portability: To receive your data in a structured, machine-readable format."
            },
            security: {
              title: "7. Security Measures",
              text: "We implement technical and organizational measures (encryption, firewalls, access controls) to protect data against unauthorized access, loss, or destruction. On-site project data is restricted to personnel on a \"need-to-know\" basis."
            },
            complaints: {
              title: "8. Complaints",
              text: "If you believe your data is being mishandled, you have the right to lodge a complaint with the Belgian Data Protection Authority (GBA/APD):",
              authority: "Data Protection Authority"
            }
          },
          terms: {
            title: "Terms of Service: A2Trails",
            partnership: {
              title: "1. Our Partnership",
              text: "These Terms of Service (the \"Terms\") define the professional relationship between A2Trails (the \"Company\") and the Client. We build with passion and precision; these terms ensure that the quality and integrity of our work are preserved for the long term."
            },
            intellectualProperty: {
              title: "2. Intellectual Property & Design Integrity",
              text: "Our trail designs are the result of specialized engineering and creative vision. Under Book XI of the Belgian Code of Economic Law, these designs are protected works of authorship.",
              authorizedUse: "Authorized Use: The Client is granted an exclusive license to use and enjoy the trail at the agreed-upon location.",
              protection: "Protection of Work: To maintain the safety and \"DNA\" of our builds, the Client agrees not to replicate, copy, or allow third parties to mimic our technical features or layouts elsewhere without our written consent.",
              modifications: "Modifications: Because our name is attached to the project's reputation, any significant structural changes to the trail must be discussed with us first to ensure the \"moral rights\" and safety standards of the original design are respected."
            },
            warranty: {
              title: "3. Warranty and Maintenance",
              text: "We stand behind the quality of our builds. Our warranty structure is as follows:",
              limited: "3-Year Limited Warranty: The Company provides a three-year warranty against defects in craftsmanship and non-structural components (e.g., specific surfacing issues or minor drainage adjustments), provided the trail is maintained according to our provided Maintenance Manual.",
              structural: "Structural Integrity: In accordance with Articles 1792 and 2270 of the Belgian Civil Code, liability for the fundamental stability of major earthworks and structures remains 10 years by law.",
              exclusions: "Exclusions: This warranty does not cover damage from natural disasters (force majeure), lack of routine maintenance, or unauthorized \"DIY\" modifications by the Client."
            },
            ownership: {
              title: "4. Ownership and Payment",
              retention: "Retention of Title: Per the Law of 11 July 2013, all materials and the finished work remain the legal property of the Company until the final invoice is settled in full.",
              payment: "Payment Terms: We appreciate timely payments. Late payments will incur interest at the statutory rate for commercial transactions, plus a standard recovery fee as permitted under Belgian law."
            },
            confidentiality: {
              title: "5. Confidentiality",
              text: "During the build, we may share proprietary \"trail-building secrets\" or specialized drainage techniques. The Client agrees to treat this technical information as confidential and will not share blueprints or construction methodologies with competing firms."
            },
            dispute: {
              title: "6. Dispute Resolution",
              text: "We prefer a handshake over a courtroom. Should an issue arise, both parties agree to attempt formal mediation. If a resolution cannot be reached, the courts of the Company’s registered office in Belgium shall have exclusive jurisdiction."
            }
          },
        },
      },
      nl: {
        translation: {
          nav: {
            home: 'Home',
            services: 'Diensten',
            projects: 'Projecten',
            about: 'Over ons',
            contact: 'Contact',
            consultancy: 'Consultancy & Engineering',
            design: 'Ontwerp',
            construction: 'Bouw',
            maintenance: 'Onderhoud',
            designBuild: 'Design and Build',
          },
          hero: {
            title: 'Tracks Bouwen,<br />Ervaringen Creëren',
            subtitle: 'Professionele aanleg van mountainbike-infrastructuur die perfect is aangepast aan uw specifieke behoeften',
            cta: 'Bekijk Onze Projecten',
            cta2: 'Neem Contact Op',
          },
          expertise: {
            title: 'Onze Expertise',
            subtitle: 'Gespecialiseerde bouwdiensten voor rijders van alle niveaus',
            learnMore: 'Lees meer',
            consultancy: {
              desc: 'Strategische haalbaarheidsstudies, locatiebeoordelingen en technische engineering voor duurzame trailcenters en skillparks.',
            },
            design: {
              desc: 'Creatief en functioneel ontwerp van trailcenters, skillparks en pumptracks afgestemd op uw specifieke behoeften.',
            },
            construction: {
              desc: 'Professionele bouw met gespecialiseerde machines en handmatige afwerking voor duurzame fietsinfrastructuur van hoge kwaliteit.',
            },
            maintenance: {
              desc: 'Behoud van de kwaliteit en veiligheid van uw infrastructuur door routinematige inspecties en professionele reparaties.',
            },
          },
          cta: {
            title: 'Klaar om Uw Visie te Realiseren?',
            subtitle: 'Laten we samen iets geweldigs creëren. Neem contact met ons op voor een consultatie.',
            button: 'Start Uw Project',
          },
          footer: {
            description: 'Professionele aanleg van mountainbike-infrastructuur die perfect is aangepast aan uw specifieke behoeften',
            quickLinks: 'Snelle Links',
            services: 'Diensten',
            followUs: 'Volg Ons',
            contact: 'Contact',
            vat: 'BTW',
            rights: 'Alle rechten voorbehouden.',
            privacy: 'Privacybeleid',
            terms: 'Algemene Voorwaarden',
          },
          about: {
            title: 'Passie Ontmoet Precisie',
            p1: 'A2Trails is opgericht door rijders, voor rijders. Ons team combineert een diepe passie voor mountainbiken, BMX en skateboarden met professionele bouwexpertise om rijfaciliteiten van wereldklasse te ontwerpen en te bouwen.',
            p2: 'Van pumptracks en trailcenters tot skillparks, elk project wordt zorgvuldig afgestemd op uw behoeften. Wij leveren ruimtes die prioriteit geven aan flow, veiligheid, duurzaamheid en houdbaarheid—gebouwd met dezelfde aandacht voor detail die wij als rijders zelf verwachten.',
            stats: {
              experience: 'Jaar Ervaring',
              projects: 'Projecten Voltooid',
            },
            approach: {
              title: 'Onze Aanpak',
              community: {
                title: 'Focus op Lokale Gebruikers',
                desc: 'We werken nauw samen met lokale gebruikers om ervoor te zorgen dat onze projecten aan hun behoeften voldoen en geliefde ontmoetingsplaatsen worden.',
              },
              design: {
                title: 'Aangepast Ontwerp',
                desc: 'We analyseren het terrein, de behoeften van de rijder en omgevingsfactoren om optimale ontwerpen te creëren die flow, uitdaging en duurzaamheid maximaliseren.',
              },
              quality: {
                title: 'Kwaliteitsbouw',
                desc: 'Met behulp van professionele apparatuur en bewezen technieken bouwen we faciliteiten die de tand des tijds en intensief gebruik doorstaan.',
              },
              pricing: {
                title: 'Scherpe Prijzen',
                desc: 'Wij bieden hoogwaardige constructie tegen scherpe tarieven omdat wij een onafhankelijk bedrijf zijn zonder franchisekosten.',
              },
            },
            team: {
              title: 'Ontmoet Het Team',
              anton: {
                role: 'Oprichter & Ontwerper',
                desc: 'Landschapsarchitect met 5 jaar ervaring in het bouwen van tracks.',
              },
              ward: {
                role: 'Freelance ontwerper - Dirt Jumps',
                desc: 'Toegewijde trailbouwer met oog voor detail.',
              },
              jelle: {
                role: 'Freelance Ontwerper - Stedelijke oplossingen',
                desc: 'Expert in straatinstallaties gericht op BMX-rijders',
              },
              rafael: {
                role: 'Freelance Shaper',
                desc: 'Ervaren MX-rijder die zijn gereedschap nooit neerlegt voordat de klus is geklaard',
              },
            },
            cta: {
              title: 'Laten We Samen Bouwen',
              subtitle: 'Heeft u een project in gedachten? We horen er graag over en bespreken hoe we uw visie tot leven kunnen brengen.',
              button: 'Start een Gesprek',
            },
          },
          projects: {
            title: 'Onze Projecten',
            subtitle: 'Onze toewijding aan kwaliteit, flow en duurzame fietsinfrastructuur in heel Europa.',
            directory: 'Projectoverzicht',
            browse: 'Bekijk ons volledige portfolio van projecten waarbij we hebben geholpen, gepland, gebouwd en ontworpen voor meerdere soorten mountainbike-infrastructuur.',
            search: 'Zoek op stad of project...',
            filter: 'Filter:',
            all: 'Alle',
            table: {
              project: 'Project',
              category: 'Categorie',
              location: 'Locatie',
              services: 'Diensten',
              year: 'Jaar',
            },
            noResults: 'Geen projecten gevonden die aan uw criteria voldoen.',
            clearFilters: 'Wis alle filters',
            cta: {
              title: 'Heeft u een Project in Gedachten?',
              subtitle: 'Laten we samen iets ongelooflijks bouwen. Van de eerste haalbaarheid tot de uiteindelijke constructie, we begeleiden u bij elke stap.',
              button: 'Neem Contact Op',
            },
            categories: {
              pumptrack: 'Pumptrack',
              skillPark: 'Skill Park',
              trailCenter: 'Trail Center',
              dirtJumps: 'Dirt Jumps',
            },
          },
          contact: {
            title: 'Neem Contact Op',
            subtitle: 'Klaar om uw project te starten? Vul het onderstaande formulier in of neem direct contact op.',
            info: 'Contactinformatie',
            phone: 'Telefoon',
            email: 'E-mail',
            office: 'Kantoor',
            vat: 'BTW',
            hours: {
              title: 'Kantooruren',
              monFri: 'Maandag - Vrijdag',
              weekend: 'Weekend',
              hoursRange: '08:00 - 18:00',
              closed: 'Gesloten',
            },
            form: {
              name: 'Naam *',
              namePlaceholder: 'Uw naam',
              email: 'E-mail *',
              emailPlaceholder: 'Uw e-mail',
              phone: 'Telefoon',
              phonePlaceholder: 'Uw telefoonnummer',
              projectType: 'Projecttype *',
              projectTypePlaceholder: 'Selecteer een projecttype',
              details: 'Projectdetails *',
              detailsPlaceholder: 'Vertel ons over uw project, locatie, tijdlijn en eventuele specifieke vereisten...',
              submit: 'Bericht Verzenden',
              success: 'Bedankt voor uw bericht! We hebben uw aanvraag ontvangen en nemen snel contact met u op.',
              error: 'Er is iets misgegaan. Zorg ervoor dat u uw e-mailadres heeft geverifieerd bij Formspree of neem direct contact met ons op via antonarnauts@a2trails.com.',
            },
          },
          services: {
            consultancy: {
              title: 'Consultancy & Engineering',
              subtitle: 'Strategische planning en technische expertise voor duurzame fietsinfrastructuur',
              feasibility: {
                title: 'Haalbaarheids- & Impactstudies',
                desc: 'Uitgebreide analyse van het potentieel van de site, de impact op het milieu en de behoeften van de lokale gebruikers om de levensvatbaarheid van het project te waarborgen.',
                features: [
                  'Beoordeling van het potentieel van de site',
                  'Milieueffectanalyse',
                  'Enquêtes naar de behoeften van de lokale gebruikers',
                  'Risicobeoordeling',
                  'Controle op naleving van regelgeving',
                ],
              },
              engineering: {
                title: 'Technische Engineering',
                desc: 'Precisie-engineering voor drainage, bodemstabiliteit en structurele technische kenmerken.',
                features: [
                  'Hydraulisch & drainage-ontwerp',
                  'Analyse van de bodemsamenstelling',
                  'Structurele engineering',
                  'Technische specificaties',
                  'Strategie voor materiaalinkoop',
                  'Audit van veiligheidsnormen',
                ],
              },
              strategic: {
                title: 'Strategische Planning',
                desc: 'Lange-termijn masterplanning voor trailnetwerken en stedelijke bikepark-integratie.',
                features: [
                  'Ontwikkeling van masterplannen',
                  'Gefaseerde implementatiestrategie',
                  'Ondersteuning bij subsidies & financiering',
                  'Onderhoudsplanning',
                  'Toekomstbestendige ontwerpen',
                ],
              },
              cta: {
                title: 'Deskundig Advies',
                subtitle: 'Technische begeleiding nodig voor uw project? Ons engineeringteam staat klaar om u te helpen bij de complexiteit van trailbouw.',
                button: 'Raadpleeg Ons',
              },
            },
            design: {
              title: 'Ontwerp',
              subtitle: 'Creatieve en functionele trailontwerpen die flow en rijervaring maximaliseren',
              micro: {
                title: 'Micro Ontwerp',
                desc: 'Ontwerpen van specifieke tracks afgestemd op lokale behoeften en gebruikersgroepen.',
                features: [
                  'Analyse van lokale vraag',
                  'Track-specifieke lay-outs',
                  'Doelgroepgerichtheid',
                  'Functiespecifieke blauwdrukken',
                  'Ontwerp van technische obstakels',
                  'Op progressie gebaseerde functies',
                ],
              },
              meso: {
                title: 'Meso Ontwerp',
                desc: 'Naadloze integratie van fietsinfrastructuur in omliggende parken, recreatiegebieden of sportcomplexen.',
                features: [
                  'Integratie in parken & sportgebieden',
                  'Landschapsarchitectuur',
                  'Synergie met meervoudig gebruik',
                  'Toegankelijkheid & flow',
                  'Esthetische integratie',
                  'Natuurlijke inpassing',
                ],
              },
              macro: {
                title: 'Macro Ontwerp',
                desc: 'Grootschalige strategische planning voor recreatienetwerken en trailcenters om regionaal toerisme te activeren.',
                features: [
                  'Regionale netwerkplanning',
                  'Masterplannen voor trailcenters',
                  'Strategie voor toerisme-activatie',
                  'Planning van economische impact',
                  'Duurzaamheid op lange termijn',
                ],
              },
              cta: {
                title: 'Creatieve Visie',
                subtitle: 'Klaar om uw project vorm te zien krijgen? Laat onze ontwerpers een visie creëren die uw lokale gebruikers inspireert.',
                button: 'Begin Met Ontwerpen',
              },
            },
            construction: {
              title: 'Constructie',
              subtitle: 'Professionele trailbouw met een focus op duurzaamheid, veiligheid en flow',
              pumptracks: {
                title: 'Pumptracks',
                desc: 'Professionele asfalt pumptracks gebouwd voor duurzaamheid en perfecte flow.',
                features: [
                  'Asfaltverharding',
                  'Perfecte geometrie',
                  'Duurzaamheid in alle weersomstandigheden',
                  'Weinig onderhoud',
                  'Toegankelijkheid voor meerdere gebruikers',
                  'Precisievormgeving',
                ],
              },
              mtbTrails: {
                title: 'Mountainbike Trails',
                desc: 'Duurzame trailbouw die de natuurlijke omgeving respecteert en maximaal plezier biedt.',
                features: [
                  'Mengen met natuurlijk terrein',
                  'Duurzame drainage',
                  'Erosiebestrijding',
                  'Technische trailkenmerken',
                  'Expertise in flow-trails',
                  'Milieubescherming',
                ],
              },
              jumpTracks: {
                title: 'Jump Tracks',
                desc: 'Technische jumplijnen ontworpen voor progressie en airtime.',
                features: [
                  'Precisievormgeving van aarde',
                  'Op progressie gebaseerde lijnen',
                  'Veiligheid-eerst ontwerp',
                  'Technische jump-geometrie',
                  'Expertise in verdichting',
                  'Afstemming & testen',
                ],
              },
              skillTracks: {
                title: 'Skill Tracks',
                desc: 'Educatieve tracks met technische obstakels om de fietstechniek te verbeteren.',
                features: [
                  'Technische obstakels',
                  'Balanskenmerken',
                  'Progressiezones',
                  'Veilige leeromgeving',
                  'Houten constructies',
                  'Vaardigheidsspecifieke uitdagingen',
                ],
              },
              bmxTracks: {
                title: 'BMX Tracks',
                desc: 'Professionele racebanen en freestyle parken ontworpen voor BMX-atleten.',
                features: [
                  'UCI-standaard geometrie',
                  'Integratie van starthekken',
                  'Pro-sectie lijnen',
                  'Technische ritmesecties',
                  'Asfalt of onverharde bochten',
                  'Race-klare verharding',
                ],
              },
              eMotoTracks: {
                title: 'E-Moto Tracks',
                desc: 'Gespecialiseerde tracks ontworpen voor elektrische motorcross, met de focus op vermogensbeheer, tractie en duurzaam trailontwerp.',
                features: [
                  'Duurzame bodemstabilisatie',
                  'Technische klimsecties',
                  'Heavy-duty trailverharding',
                ],
              },
              cta: {
                title: 'Gebouwd Om Mee Te Gaan',
                subtitle: 'Klaar om te beginnen? Ons constructieteam brengt tientallen jaren ervaring mee naar elke bouw.',
                button: 'Bouw Met Ons',
              },
            },
            maintenance: {
              title: 'Onderhoud',
              subtitle: 'Behoud van de kwaliteit en veiligheid van uw fietsinfrastructuur',
              asphalt: {
                title: 'Asfalt Pumptracks',
                desc: 'Gespecialiseerd onderhoud voor asfaltoppervlakken om prestaties op lange termijn en veiligheid van de rijder te garanderen.',
                features: [
                  'Scheurreparatie',
                  'Erosieherstel',
                  'Veiligheidsbelijning',
                  'Veiligheidsinspecties',
                  'Oppervlakteherstel',
                ],
              },
              gravelDirt: {
                title: 'Grind- en Onverharde Trails',
                desc: 'Natuurlijke trails in topvorm houden door deskundige vormgeving en erosiebeheer.',
                features: [
                  'Hervormen',
                  'Erosieherstel',
                  'Inspectie en reparatie van features',
                  'Signalisatie en Informatiepanelen',
                  'Groenonderhoud',
                ],
              },
              green: {
                title: 'Groenonderhoud',
                desc: 'Ecologisch beheer van de omgeving om de zichtbaarheid en natuurlijke esthetiek te behouden.',
                features: [
                  'Vegetatiecontrole',
                  'Snoeien van overgroei',
                  'Beheer van invasieve soorten',
                  'Toegankelijkheid van trails',
                ],
              },
              cta: {
                title: 'Bescherm Uw Investering',
                subtitle: 'Regelmatig onderhoud verlengt de levensduur van uw infrastructuur en garandeert maximale veiligheid voor gebruikers.',
                button: 'Onderhoud Inplannen',
              },
            },
          },
          privacy: {
            title: "Privacybeleid: A2Trails",
            lastUpdated: "Laatst bijgewerkt: 12 maart 2026",
            controller: {
              title: "1. Verwerkingsverantwoordelijke",
              text: "De entiteit die verantwoordelijk is voor de verwerking van uw persoonsgegevens is:",
              company: "Bedrijfsnaam",
              office: "Maatschappelijke zetel",
              cbe: "KBO-nummer",
              email: "Contact e-mail"
            },
            legalBasis: {
              title: "2. Rechtsgrondslag voor verwerking",
              text: "Wij verwerken persoonsgegevens alleen wanneer er een geldige rechtsgrondslag bestaat onder Artikel 6(1) AVG:",
              contractual: "Contractuele noodzaak: Om offertes te verstrekken voor het ontwerp, de aanleg of het onderhoud van MTB-trails.",
              legal: "Wettelijke verplichting: Voor verplichte sociale zekerheidsaangiften (bijv. Check-in-at-work / 30bis aangifte) of belastingrapportage.",
              consent: "Toestemming: Wanneer u zich aanmeldt voor onze nieuwsbrief of niet-essentiële cookies gebruikt.",
              legitimate: "Gerechtvaardigd belang: Om de veiligheid van onze website te waarborgen en om te communiceren met B2B-partners."
            },
            categories: {
              title: "3. Categorieën van verzamelde gegevens",
              text: "Wij verzamelen en verwerken de volgende gegevenscategorieën:",
              identification: "Identificatiegegevens: Naam, adres, telefoonnummer en e-mail.",
              professional: "Professionele gegevens: Bedrijfsnaam, BTW-nummer en projectlocatie (GPS-coördinaten voor trail-locaties).",
              technical: "Technische gegevens: IP-adres, browsertype en duur van het bezoek (via cookies)."
            },
            retention: {
              title: "4. Bewaarperioden",
              text: "Gegevens worden niet langer bewaard dan nodig is voor de doeleinden waarvoor ze zijn verzameld:",
              accounting: "Boekhoudkundige/fiscale gegevens: Strikt 7 jaar (wettelijke Belgische vereiste).",
              contractual: "Contractuele documenten: 10 jaar na het einde van het contract (ter dekking van de 10-jarige aansprakelijkheid voor bouwwerken onder de artikelen 1792 en 2270 van het Burgerlijk Wetboek).",
              requests: "Contactverzoeken: 1 jaar als er geen contract wordt gesloten."
            },
            sharing: {
              title: "5. Delen en doorgeven van gegevens",
              text: "Gegevens kunnen worden gedeeld met:",
              subcontractors: "Onderaannemers: Gespecialiseerde grondverzetters of ecologen, strikt onder een ondertekende verwerkersovereenkomst (VWO).",
              authorities: "Overheidsinstanties: RSZ voor verplichte aanwezigheidsregistratie op bouwplaatsen.",
              it: "IT-providers: Hosting- en clouddiensten gevestigd binnen de EER."
            },
            rights: {
              title: "6. Rechten van de betrokkene",
              text: "Onder de Belgische en EU-wetgeving beschikt u over de volgende rechten, die wij binnen 30 dagen na een verzoek zullen honoreren:",
              access: "Recht op inzage: Om te weten welke gegevens we bewaren.",
              rectification: "Recht op rectificatie: Om onjuiste gegevens te corrigeren.",
              erasure: "Recht op gegevenswissing (\"Recht om vergeten te worden\"): Behoudens wettelijke bewaarplichten.",
              restriction: "Recht op beperking: Om de verwerking tijdelijk stop te zetten.",
              portability: "Recht op overdraagbaarheid van gegevens: Om uw gegevens te ontvangen in een gestructureerd, machineleesbaar formaat."
            },
            security: {
              title: "7. Veiligheidsmaatregelen",
              text: "Wij implementeren technische en organisatorische maatregelen (encryptie, firewalls, toegangscontroles) om gegevens te beschermen tegen ongeoorloofde toegang, verlies of vernietiging. Projectgegevens op locatie zijn beperkt tot personeel op basis van \"need-to-know\"."
            },
            complaints: {
              title: "8. Klachten",
              text: "Als u van mening bent dat uw gegevens verkeerd worden behandeld, heeft u het recht om een klacht in te dienen bij de Belgische Gegevensbeschermingsautoriteit (GBA):",
              authority: "Gegevensbeschermingsautoriteit"
            }
          },
          terms: {
            title: "Algemene Voorwaarden: A2Trails",
            partnership: {
              title: "1. Onze Samenwerking",
              text: "Deze Algemene Voorwaarden (de \"Voorwaarden\") definiëren de professionele relatie tussen A2Trails (het \"Bedrijf\") en de Klant. Wij bouwen met passie en precisie; deze voorwaarden zorgen ervoor dat de kwaliteit en integriteit van ons werk op lange termijn behouden blijven."
            },
            intellectualProperty: {
              title: "2. Intellectuele Eigendom & Integriteit van het Ontwerp",
              text: "Onze trailontwerpen zijn het resultaat van gespecialiseerde engineering en creatieve visie. Onder Boek XI van het Belgisch Wetboek van Economisch Recht zijn deze ontwerpen beschermde werken van auteurschap.",
              authorizedUse: "Geautoriseerd Gebruik: De Klant krijgt een exclusieve licentie om de trail te gebruiken en ervan te genieten op de overeengekomen locatie.",
              protection: "Bescherming van het Werk: Om de veiligheid en het \"DNA\" van onze constructies te behouden, stemt de Klant ermee in om onze technische kenmerken of lay-outs elders niet te repliceren, te kopiëren of derden toe te staan deze na te bootsen zonder onze schriftelijke toestemming.",
              modifications: "Wijzigingen: Omdat onze naam verbonden is aan de reputatie van het project, moeten alle belangrijke structurele wijzigingen aan de trail eerst met ons worden besproken om ervoor te zorgen dat de \"morele rechten\" en veiligheidsnormen van het oorspronkelijke ontwerp worden gerespecteerd."
            },
            warranty: {
              title: "3. Garantie en Onderhoud",
              text: "Wij staan achter de kwaliteit van onze constructies. Onze garantiestructuur is als volgt:",
              limited: "3 jaar beperkte garantie: Het Bedrijf biedt een garantie van drie jaar tegen gebreken in vakmanschap en niet-structurele componenten (bijv. specifieke verhardingsproblemen of kleine drainage-aanpassingen), op voorwaarde dat de trail wordt onderhouden volgens onze verstrekte Onderhoudshandleiding.",
              structural: "Structurele Integriteit: In overeenstemming met de artikelen 1792 en 2270 van het Belgisch Burgerlijk Wetboek blijft de aansprakelijkheid voor de fundamentele stabiliteit van belangrijke grondwerken en structuren wettelijk 10 jaar.",
              exclusions: "Uitsluitingen: Deze garantie dekt geen schade door natuurrampen (overmacht), gebrek aan routineonderhoud of ongeoorloofde \"doe-het-zelf\" wijzigingen door de Klant."
            },
            ownership: {
              title: "4. Eigendom en Betaling",
              retention: "Eigendomsvoorbehoud: Volgens de Wet van 11 juli 2013 blijven alle materialen en het voltooide werk het wettelijk eigendom van het Bedrijf totdat de slotfactuur volledig is voldaan.",
              payment: "Betalingsvoorwaarden: Wij stellen tijdige betalingen op prijs. Bij laattijdige betalingen wordt rente aangerekend tegen de wettelijke rentevoet voor handelstransacties, plus een standaard invorderingsvergoeding zoals toegestaan onder de Belgische wetgeving."
            },
            confidentiality: {
              title: "5. Vertrouwelijkheid",
              text: "Tijdens de bouw kunnen we eigen \"trailbouwgeheimen\" of gespecialiseerde drainagetechnieken delen. De Klant stemt ermee in deze technische informatie als vertrouwelijk te behandelen en zal geen blauwdrukken of constructiemethodologieën delen met concurrerende bedrijven."
            },
            dispute: {
              title: "6. Geschillenbeslechting",
              text: "Wij verkiezen een handdruk boven een rechtszaal. Mocht er een probleem ontstaan, dan komen beide partijen overeen om formele bemiddeling te proberen. Indien geen oplossing kan worden bereikt, zijn de rechtbanken van de maatschappelijke zetel van het Bedrijf in België exclusief bevoegd."
            }
          },
        },
      },
      fr: {
        translation: {
          nav: {
            home: 'Accueil',
            services: 'Services',
            projects: 'Projets',
            about: 'À propos',
            contact: 'Contact',
            consultancy: 'Conseil & Ingénierie',
            design: 'Conception',
            construction: 'Construction',
            maintenance: 'Entretien',
            designBuild: 'Design and Build',
          },
          hero: {
            title: 'Construire des Pistes,<br />Créer des Expériences',
            subtitle: 'Construction professionnelle d\'infrastructures de VTT parfaitement adaptées à vos besoins spécifiques',
            cta: 'Voir Nos Projets',
            cta2: 'Contactez-nous',
          },
          expertise: {
            title: 'Notre Expertise',
            subtitle: 'Services de construction spécialisés pour les riders de tous niveaux',
            learnMore: 'En savoir plus',
            consultancy: {
              desc: 'Études de faisabilité stratégiques, évaluations de sites et ingénierie technique pour des centres de pistes et des parcs de compétences durables.',
            },
            design: {
              desc: 'Conception créative et fonctionnelle de centres de pistes, de parcs de compétences et de pump tracks adaptés à vos besoins spécifiques.',
            },
            construction: {
              desc: 'Construction professionnelle utilisant des machines spécialisées et des finitions manuelles pour une infrastructure cyclable durable et de haute qualité.',
            },
            maintenance: {
              desc: 'Préserver la qualité et la sécurité de vos infrastructures grâce à des inspections de routine et des réparations professionnelles.',
            },
          },
          cta: {
            title: 'Prêt à Réaliser Votre Vision ?',
            subtitle: 'Créons quelque chose d\'incroyable ensemble. Contactez-nous pour une consultation.',
            button: 'Démarrer Votre Projet',
          },
          footer: {
            description: 'Construction professionnelle d\'infrastructures de VTT parfaitement adaptées à vos besoins spécifiques',
            quickLinks: 'Liens Rapides',
            services: 'Services',
            followUs: 'Suivez-nous',
            contact: 'Contact',
            vat: 'TVA',
            rights: 'Tous droits réservés.',
            privacy: 'Politique de Confidentialité',
            terms: 'Conditions d\'Utilisation',
          },
          about: {
            title: 'La Passion Rencontre la Précision',
            p1: 'A2Trails a été fondé par des riders, pour des riders. Notre équipe combine une profonde passion pour le VTT, le BMX et le skateboard avec une expertise professionnelle en construction pour concevoir et construire des installations de classe mondiale.',
            p2: 'Des pump tracks et centres de pistes aux parcs de compétences, chaque projet est soigneusement adapté à vos besoins. Nous livrons des espaces qui privilégient le flow, la sécurité, la durabilité et la pérennité—construits avec le même souci du détail que nous attendons en tant que riders nous-mêmes.',
            stats: {
              experience: 'Années d\'Expérience',
              projects: 'Projets Réalisés',
            },
            approach: {
              title: 'Notre Approche',
              community: {
                title: 'Focus Communautaire',
                desc: 'Nous travaillons en étroite collaboration avec les communautés locales pour garantir que nos projets répondent à leurs besoins et deviennent des lieux de rencontre appréciés.',
              },
              design: {
                title: 'Conception Adaptée',
                desc: 'Nous analysons le terrain, les besoins des riders et les facteurs environnementaux pour créer des conceptions optimales qui maximisent le flow, le défi et la durabilité.',
              },
              quality: {
                title: 'Construction de Qualité',
                desc: 'En utilisant un équipement de qualité professionnelle et des techniques éprouvées, nous construisons des installations qui résistent à l\'épreuve du temps et à une utilisation intensive.',
              },
              pricing: {
                title: 'Prix Compétitifs',
                desc: 'Nous proposons une construction de haute qualité à des tarifs compétitifs car nous sommes une entreprise indépendante sans frais de franchise.',
              },
            },
            team: {
              title: 'Rencontrez l\'Équipe',
              anton: {
                role: 'Fondateur & Designer',
                desc: 'Architecte paysagiste avec 5 ans d\'expérience en construction de pistes.',
              },
              ward: {
                role: 'Designer freelance - Dirt Jumps',
                desc: 'Constructeur de pistes dévoué avec un sens du détail.',
              },
              jelle: {
                role: 'Designer Freelance - Solutions urbaines',
                desc: 'Expert en installations de rue axées sur les riders BMX',
              },
              rafael: {
                role: 'Shaper Freelance',
                desc: 'Rider MX expérimenté qui ne posera jamais ses outils avant que le travail ne soit terminé',
              },
            },
            cta: {
              title: 'Construisons Ensemble',
              subtitle: 'Vous avez un projet en tête ? Nous serions ravis d\'en entendre parler et de discuter de la manière dont nous pouvons donner vie à votre vision.',
              button: 'Démarrer une Conversation',
            },
          },
          projects: {
            title: 'Nos Projets',
            subtitle: 'Présentation de notre engagement envers la qualité, le flow et les infrastructures cyclables durables à travers l\'Europe.',
            directory: 'Répertoire des Projets',
            browse: 'Parcourez notre portfolio complet de projets où nous avons assisté, planifié, construit et conçu plusieurs types d\'infrastructures de VTT.',
            search: 'Rechercher par ville ou projet...',
            filter: 'Filtrer :',
            all: 'Tous',
            table: {
              project: 'Projet',
              category: 'Catégorie',
              location: 'Lieu',
              services: 'Services',
              year: 'Année',
            },
            noResults: 'Aucun projet trouvé correspondant à vos critères.',
            clearFilters: 'Effacer tous les filtres',
            cta: {
              title: 'Vous avez un Projet en Tête ?',
              subtitle: 'Construisons quelque chose d\'incroyable ensemble. De la faisabilité initiale à la construction finale, nous vous accompagnons à chaque étape.',
              button: 'Contactez-nous',
            },
            categories: {
              pumptrack: 'Pump Track',
              skillPark: 'Skill Park',
              trailCenter: 'Centre de Pistes',
              dirtJumps: 'Dirt Jumps',
            },
          },
          contact: {
            title: 'Contactez-nous',
            subtitle: 'Prêt à démarrer votre projet ? Remplissez le formulaire ci-dessous ou contactez-nous directement.',
            info: 'Informations de Contact',
            phone: 'Téléphone',
            email: 'E-mail',
            office: 'Bureau',
            vat: 'TVA',
            hours: {
              title: 'Heures d\'Ouverture',
              monFri: 'Lundi - Vendredi',
              weekend: 'Week-end',
              hoursRange: '08:00 - 18:00',
              closed: 'Fermé',
            },
            form: {
              name: 'Nom *',
              namePlaceholder: 'Votre nom',
              email: 'E-mail *',
              emailPlaceholder: 'Votre e-mail',
              phone: 'Téléphone',
              phonePlaceholder: 'Votre numéro de téléphone',
              projectType: 'Type de Projet *',
              projectTypePlaceholder: 'Sélectionnez un type de projet',
              details: 'Détails du Projet *',
              detailsPlaceholder: 'Parlez-nous de votre projet, de son emplacement, de votre calendrier et de toute exigence spécifique...',
              submit: 'Envoyer le Message',
              success: 'Merci pour votre message ! Nous avons reçu votre demande et nous vous recontacterons bientôt à l\'adresse antonarnauts@a2trails.com.',
            },
          },
          services: {
            consultancy: {
              title: 'Conseil & Ingénierie',
              subtitle: 'Planification stratégique et expertise technique pour des infrastructures cyclables durables',
              feasibility: {
                title: 'Études de Faisabilité & d\'Impact',
                desc: 'Analyse complète du potentiel du site, de l\'impact environnemental et des besoins de la communauté pour assurer la viabilité du projet.',
                features: [
                  'Évaluation du potentiel du site',
                  'Analyse d\'impact environnemental',
                  'Enquêtes sur les besoins de la communauté',
                  'Évaluation des risques',
                  'Contrôle de conformité réglementaire',
                ],
              },
              engineering: {
                title: 'Ingénierie Technique',
                desc: 'Ingénierie de précision pour le drainage, la stabilité des sols et les caractéristiques techniques structurelles.',
                features: [
                  'Conception hydraulique & drainage',
                  'Analyse de la composition du sol',
                  'Ingénierie structurelle',
                  'Spécifications techniques',
                  'Stratégie d\'approvisionnement en matériaux',
                  'Audit des normes de sécurité',
                ],
              },
              strategic: {
                title: 'Planification Stratégique',
                desc: 'Planification directrice à long terme pour les réseaux de pistes et l\'intégration des parcs cyclables urbains.',
                features: [
                  'Développement du plan directeur',
                  'Stratégie de mise en œuvre progressive',
                  'Soutien aux subventions & financements',
                  'Planification de la maintenance',
                  'Conceptions tournées vers l\'avenir',
                ],
              },
              cta: {
                title: 'Conseils d\'Experts',
                subtitle: 'Besoin d\'un accompagnement technique pour votre projet ? Notre équipe d\'ingénierie est prête à vous aider à naviguer dans les complexités de la construction de pistes.',
                button: 'Consultez-nous',
              },
            },
            design: {
              title: 'Conception',
              subtitle: 'Des conceptions de pistes créatives et fonctionnelles qui maximisent le flow et l\'expérience du rider',
              micro: {
                title: 'Design Micro',
                desc: 'Conception de pistes spécifiques adaptées aux demandes locales et aux groupes d\'utilisateurs.',
                features: [
                  'Analyse de la demande locale',
                  'Mises en page spécifiques aux pistes',
                  'Ciblage des groupes d\'utilisateurs',
                  'Plans spécifiques aux fonctionnalités',
                  'Conception d\'obstacles techniques',
                  'Fonctionnalités basées sur la progression',
                ],
              },
              meso: {
                title: 'Design Méso',
                desc: 'Intégration harmonieuse de l\'infrastructure cyclable dans les parcs environnants, les zones de loisirs ou les complexes sportifs.',
                features: [
                  'Intégration parcs & zones sportives',
                  'Architecture de paysage',
                  'Synergie multi-usages',
                  'Accessibilité & flow',
                  'Intégration esthétique',
                  'Mélange environnemental',
                ],
              },
              macro: {
                title: 'Design Macro',
                desc: 'Planification stratégique à grande échelle pour les réseaux de loisirs et les centres de pistes afin d\'activer le tourisme régional.',
                features: [
                  'Planification de réseaux régionaux',
                  'Plans directeurs de centres de pistes',
                  'Stratégie d\'activation du tourisme',
                  'Planification de l\'impact économique',
                  'Durabilité à long terme',
                ],
              },
              cta: {
                title: 'Vision Créative',
                subtitle: 'Prêt à voir votre projet prendre forme ? Laissez nos designers créer une vision qui inspire votre communauté.',
                button: 'Commencer la Conception',
              },
            },
            construction: {
              title: 'Construction',
              subtitle: 'Construction de pistes professionnelle axée sur la durabilité, la sécurité et le flow',
              pumptracks: {
                title: 'Pumptracks',
                desc: 'Pumptracks en asphalte professionnels construits pour la durabilité et un flow parfait.',
                features: [
                  'Revêtement en asphalte',
                  'Géométrie parfaite',
                  'Durabilité par tous les temps',
                  'Faible entretien',
                  'Accessibilité multi-utilisateurs',
                  'Façonnage de précision',
                ],
              },
              mtbTrails: {
                title: 'Pistes de VTT',
                desc: 'Construction de pistes durables qui respectent l\'environnement naturel tout en offrant un maximum de plaisir.',
                features: [
                  'Mélange avec le terrain naturel',
                  'Drainage durable',
                  'Contrôle de l\'érosion',
                  'Caractéristiques techniques de la piste',
                  'Expertise en flow-trails',
                  'Protection de l\'environnement',
                ],
              },
              jumpTracks: {
                title: 'Pistes de Saut',
                desc: 'Lignes de saut techniques conçues pour la progression et le temps de vol.',
                features: [
                  'Façonnage de précision de la terre',
                  'Lignes basées sur la progression',
                  'Conception axée sur la sécurité',
                  'Géométrie de saut technique',
                  'Expertise en compactage',
                  'Mise au point & tests',
                ],
              },
              skillTracks: {
                title: 'Pistes de Maniabilité',
                desc: 'Pistes éducatives avec des obstacles techniques pour améliorer les compétences de conduite.',
                features: [
                  'Obstacles techniques',
                  'Caractéristiques d\'équilibre',
                  'Zones de progression',
                  'Environnement d\'apprentissage sûr',
                  'Structures en bois',
                  'Défis spécifiques aux compétences',
                ],
              },
              bmxTracks: {
                title: 'Pistes de BMX',
                desc: 'Pistes de course professionnelles et parcs freestyle conçus pour les athlètes BMX.',
                features: [
                  'Géométrie standard UCI',
                  'Intégration de grille de départ',
                  'Lignes de section pro',
                  'Sections rythmiques techniques',
                  'Virages en asphalte ou terre',
                  'Revêtement prêt pour la course',
                ],
              },
              eMotoTracks: {
                title: 'Pistes E-Moto',
                desc: 'Pistes spécialisées conçues pour le motocross électrique, axées sur la gestion de la puissance, la traction et la conception de pistes durables.',
                features: [
                  'Stabilisation durable des sols',
                  'Sections de montée techniques',
                  'Revêtement de piste ultra-résistant',
                ],
              },
              cta: {
                title: 'Construit Pour Durer',
                subtitle: 'Prêt à commencer les travaux ? Notre équipe de construction apporte des décennies d\'expérience à chaque réalisation.',
                button: 'Construisez Avec Nous',
              },
            },
            maintenance: {
              title: 'Entretien',
              subtitle: 'Préserver la qualité et la sécurité de vos infrastructures cyclables',
              asphalt: {
                title: 'Pump Tracks en Asphalte',
                desc: 'Entretien spécialisé des surfaces en asphalte pour garantir des performances durables et la sécurité des riders.',
                features: [
                  'Réparation de fissures',
                  'Réparation de l\'érosion',
                  'Lignes de sécurité',
                  'Inspections de sécurité',
                  'Réparation de surface',
                ],
              },
              gravelDirt: {
                title: 'Pistes en Gravier et Terre',
                desc: 'Maintenir les pistes à surface naturelle en excellent état grâce à un façonnage expert et une gestion de l\'érosion.',
                features: [
                  'Remodelage',
                  'Réparation de l\'érosion',
                  'Inspection et réparation des éléments',
                  'Signalisation et Panneaux d\'Information',
                  'Entretien Vert',
                ],
              },
              green: {
                title: 'Entretien Vert',
                desc: 'Gestion écologique des abords pour préserver la visibilité et l\'esthétique naturelle.',
                features: [
                  'Contrôle de la végétation',
                  'Taille de la croissance excessive',
                  'Gestion des espèces envahissantes',
                  'Accessibilité des pistes',
                ],
              },
              cta: {
                title: 'Protégez Votre Investissement',
                subtitle: 'Un entretien régulier prolonge la durée de vie de votre infrastructure et assure une sécurité maximale aux utilisateurs.',
                button: 'Planifier un Entretien',
              },
            },
          },
          privacy: {
            title: "Politique de Confidentialité : A2Trails",
            lastUpdated: "Dernière mise à jour : 12 mars 2026",
            controller: {
              title: "1. Responsable du traitement",
              text: "L'entité responsable du traitement de vos données personnelles est :",
              company: "Nom de l'entreprise",
              office: "Siège social",
              cbe: "Numéro BCE",
              email: "E-mail de contact"
            },
            legalBasis: {
              title: "2. Base juridique du traitement",
              text: "Nous ne traitons les données personnelles que lorsqu'une base juridique valide existe en vertu de l'article 6(1) du RGPD :",
              contractual: "Nécessité contractuelle : Pour fournir des devis pour la conception, la construction ou l'entretien de pistes de VTT.",
              legal: "Obligation légale : Pour les déclarations de sécurité sociale obligatoires (ex. Check-in-at-work / déclaration 30bis) ou les rapports fiscaux.",
              consent: "Consentement : Lorsque vous vous abonnez à notre newsletter ou utilisez des cookies non essentiels.",
              legitimate: "Intérêt légitime : Pour assurer la sécurité de notre site web et pour communiquer avec des partenaires B2B."
            },
            categories: {
              title: "3. Catégories de données collectées",
              text: "Nous collectons et traitons les catégories de données suivantes :",
              identification: "Données d'identification : Nom, adresse, numéro de téléphone et e-mail.",
              professional: "Données professionnelles : Nom de l'entreprise, numéro de TVA et emplacement du projet (coordonnées GPS pour les sites de pistes).",
              technical: "Données techniques : Adresse IP, type de navigateur et durée de la visite (via cookies)."
            },
            retention: {
              title: "4. Périodes de conservation",
              text: "Les données ne sont pas conservées plus longtemps que nécessaire aux fins pour lesquelles elles ont été collectées :",
              accounting: "Données comptables/fiscales : Strictement 7 ans (exigence légale belge).",
              contractual: "Documents contractuels : 10 ans après la fin du contrat (pour couvrir la responsabilité décennale des travaux de construction en vertu des articles 1792 et 2270 du Code civil).",
              requests: "Demandes de contact : 1 an si aucun contrat n'est conclu."
            },
            sharing: {
              title: "5. Partage et transferts de données",
              text: "Les données peuvent être partagées avec :",
              subcontractors: "Sous-traitants : Terrassiers ou écologistes spécialisés, strictement sous un accord de traitement des données (DPA) signé.",
              authorities: "Autorités publiques : ONSS pour l'enregistrement obligatoire des présences sur les chantiers de construction.",
              it: "Prestataires informatiques : Services d'hébergement et de cloud situés au sein de l'EEE."
            },
            rights: {
              title: "6. Droits de la personne concernée",
              text: "En vertu de la législation belge et européenne, vous possédez les droits suivants, que nous honorerons dans les 30 jours suivant une demande :",
              access: "Droit d'accès : Pour savoir quelles données nous détenons.",
              rectification: "Droit de rectification : Pour corriger des données inexactes.",
              erasure: "Droit à l'effacement (\"Droit à l'oubli\") : Sous réserve des obligations légales de conservation.",
              restriction: "Droit à la limitation : Pour suspendre temporairement le traitement.",
              portability: "Droit à la portabilité des données : Pour recevoir vos données dans un format structuré et lisible par machine."
            },
            security: {
              title: "7. Mesures de sécurité",
              text: "Nous mettons en œuvre des mesures techniques et organisationnelles (cryptage, pare-feu, contrôles d'accès) pour protéger les données contre tout accès non autorisé, perte ou destruction. Les données des projets sur site sont limitées au personnel sur la base du \"besoin d'en connaître\"."
            },
            complaints: {
              title: "8. Plaintes",
              text: "Si vous estimez que vos données sont mal traitées, vous avez le droit de déposer une plainte auprès de l'Autorité de protection des données (APD) belge :",
              authority: "Autorité de protection des données"
            }
          },
          terms: {
            title: "Conditions Générales de Service : A2Trails",
            partnership: {
              title: "1. Notre Partenariat",
              text: "Ces Conditions Générales de Service (les \"Conditions\") définissent la relation professionnelle entre A2Trails (la \"Société\") et le Client. Nous construisons avec passion et précision ; ces conditions garantissent que la qualité et l'intégrité de notre travail sont préservées sur le long terme."
            },
            intellectualProperty: {
              title: "2. Propriété Intellectuelle et Intégrité de la Conception",
              text: "Nos conceptions de pistes sont le résultat d'une ingénierie spécialisée et d'une vision créative. En vertu du livre XI du Code de droit économique belge, ces conceptions sont des œuvres protégées par le droit d'auteur.",
              authorizedUse: "Utilisation autorisée : Le Client se voit accorder une licence exclusive pour utiliser et profiter de la piste à l'endroit convenu.",
              protection: "Protection de l'œuvre : Pour maintenir la sécurité et l'« ADN » de nos constructions, le Client accepte de ne pas reproduire, copier ou permettre à des tiers d'imiter nos caractéristiques techniques ou nos agencements ailleurs sans notre consentement écrit.",
              modifications: "Modifications : Parce que notre nom est attaché à la réputation du projet, tout changement structurel important apporté à la piste doit être discuté avec nous au préalable afin de garantir le respect des « droits moraux » et des normes de sécurité de la conception originale."
            },
            warranty: {
              title: "3. Garantie et Entretien",
              text: "Nous garantissons la qualité de nos constructions. Notre structure de garantie est la suivante :",
              limited: "Garantie limitée de 3 ans : La Société offre une garantie de trois ans contre les défauts de fabrication et les composants non structurels (par exemple, des problèmes de revêtement spécifiques ou des ajustements mineurs de drainage), à condition que la piste soit entretenue conformément à notre manuel d'entretien fourni.",
              structural: "Intégrité structurelle : Conformément aux articles 1792 et 2270 du Code civil belge, la responsabilité pour la stabilité fondamentale des travaux de terrassement et des structures importants reste de 10 ans selon la loi.",
              exclusions: "Exclusions : Cette garantie ne couvre pas les dommages causés par des catastrophes naturelles (force majeure), le manque d'entretien de routine ou les modifications « DIY » non autorisées par le Client."
            },
            ownership: {
              title: "4. Propriété et Paiement",
              retention: "Réserve de propriété : Conformément à la loi du 11 juillet 2013, tous les matériaux et l'œuvre finie restent la propriété légale de la Société jusqu'au règlement intégral de la facture finale.",
              payment: "Conditions de paiement : Nous apprécions les paiements en temps voulu. Les retards de paiement entraîneront des intérêts au taux légal pour les transactions commerciales, plus des frais de recouvrement standard comme le permet la loi belge."
            },
            confidentiality: {
              title: "5. Confidentialité",
              text: "Pendant la construction, nous pouvons partager des « secrets de construction de pistes » exclusifs ou des techniques de drainage spécialisées. Le Client accepte de traiter ces informations techniques comme confidentielles et ne partagera pas de plans ou de méthodologies de construction avec des entreprises concurrentes.",
            },
            dispute: {
              title: "6. Résolution des Litiges",
              text: "Nous préférons une poignée de main à une salle d'audience. En cas de problème, les deux parties acceptent de tenter une médiation formelle. Si une résolution ne peut être trouvée, les tribunaux du siège social de la Société en Belgique seront exclusivement compétents."
            }
          },
        },
      },
    },
  });

export default i18n;
