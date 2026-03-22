import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

export type Language = 'fr' | 'en';

const STORAGE_KEY = 'portfolio-language';
const LANGUAGE_TAGS: Record<Language, string> = {
  fr: 'fr-CA',
  en: 'en-CA'
};

const supportedLanguages: Language[] = ['fr', 'en'];

const isLanguage = (value: string): value is Language => {
  return supportedLanguages.includes(value as Language);
};

const getInitialLanguage = (): Language => {
  if (typeof window === 'undefined') {
    return 'fr';
  }

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored && isLanguage(stored)) {
    return stored;
  }

  return 'fr';
};

type LocalizedContent = {
  nav: Array<{ href: string; label: string }>;
  brandAriaLabel: string;
  hero: {
    tag: string;
    title: string;
    description: string;
    primaryAction: string;
    secondaryAction: string;
  };
  about: {
    heading: string;
    highlights: Array<{ title: string; lineOne: string; lineTwo: string }>;
    paragraphs: string[];
  };
  values: {
    heading: string;
    lead: string;
    items: Array<{ title: string; description: string }>;
  };
  ambitions: {
    heading: string;
    lead: string;
    items: Array<{ title: string; description: string }>;
  };
  contact: {
    heading: string;
    lead: string;
    emailLabel: string;
    githubLabel: string;
  };
  languageMenu: {
    buttonLabel: string;
    menuAriaLabel: string;
    english: string;
    french: string;
  };
};

const translations: Record<Language, LocalizedContent> = {
  fr: {
    nav: [
      { href: '#about', label: 'À propos' },
      { href: '#values', label: 'Valeurs' },
      { href: '#ambitions', label: 'Ambitions' },
      { href: '#contact', label: 'Contact' }
    ],
    brandAriaLabel: 'Aller en haut de la page',
    hero: {
      tag: 'Étudiant · Entrepreneur · Visionnaire',
      title: 'Transformer Les Idées En Réalité',
      description:
        "Je m'appelle Nicolas, élève de 9e année au Collège Héritage, avec un esprit entrepreneurial guidé par l'idée que des projets intentionnels peuvent devenir concrets.",
      primaryAction: 'En apprendre plus',
      secondaryAction: 'Me contacter'
    },
    about: {
      heading: 'À propos de moi',
      highlights: [
        {
          title: 'Éducation',
          lineOne: 'Élève de 9e année',
          lineTwo: 'Collège Héritage'
        },
        {
          title: 'Lieu',
          lineOne: 'Québec, Canada',
          lineTwo: 'Ouvert aux collaborations à distance'
        },
        {
          title: 'Objectif',
          lineOne: 'Entrepreneuriat',
          lineTwo: 'Affaires et leadership'
        }
      ],
      paragraphs: [
        "Je suis motivé par une conviction simple mais puissante : les idées, lorsqu'elles sont poursuivies avec intention, peuvent devenir réelles. En 9e année, je n'attends pas le bon moment. Je pense déjà comme un entrepreneur, en explorant comment les entreprises se construisent et ce qu'il faut pour les diriger.",
        "J'apporte un esprit curieux et analytique dans tout ce que je fais, en me demandant toujours pourquoi les choses fonctionnent ainsi et comment elles pourraient mieux fonctionner. En même temps, je reste concentré sur des progrès constants plutôt que sur les raccourcis.",
        "Mon ambition est de créer des projets qui comptent. Que ce soit pour résoudre un problème dans ma communauté ou développer quelque chose de plus grand, je suis ici pour apprendre vite, penser avec audace et construire avec intention."
      ]
    },
    values: {
      heading: 'Valeurs essentielles',
      lead: "Les principes qui guident mon approche de l'entrepreneuriat et de la vie.",
      items: [
        {
          title: 'Curieux et analytique',
          description:
            "Je me demande toujours pourquoi les choses fonctionnent et comment les améliorer. J'applique une pensée analytique à chaque défi."
        },
        {
          title: 'Posé et concentré',
          description:
            'Je privilégie des progrès durables plutôt que des raccourcis. Construire quelque chose de solide demande patience et rigueur.'
        },
        {
          title: 'Ambitieux et déterminé',
          description:
            "Je veux créer des projets utiles. J'apprends vite, je pense avec audace et je construis avec une intention claire."
        }
      ]
    },
    ambitions: {
      heading: 'Ambitions et objectifs',
      lead: 'La direction que je prends et ce sur quoi je travaille.',
      items: [
        {
          title: 'Apprendre et explorer',
          description:
            "Approfondir la création d'entreprises en comprenant les bases de l'entrepreneuriat, du leadership et de l'innovation."
        },
        {
          title: 'Résoudre des enjeux locaux',
          description:
            'Identifier des défis réels dans ma communauté et proposer des solutions concrètes qui font une différence.'
        },
        {
          title: 'Créer de vrais projets',
          description:
            'Transformer des idées en réalité en lançant des projets utiles, en commençant petit et en développant stratégiquement.'
        },
        {
          title: 'Diriger avec intention',
          description:
            'Développer mes compétences en leadership et bâtir des projets à impact durable, au-delà du simple succès commercial.'
        }
      ]
    },
    contact: {
      heading: 'Restons en contact',
      lead: 'Intéressé par une collaboration, une discussion ou un simple bonjour ?',
      emailLabel: 'Courriel',
      githubLabel: 'GitHub'
    },
    languageMenu: {
      buttonLabel: 'Choisir la langue',
      menuAriaLabel: 'Menu de langue',
      english: 'English',
      french: 'Français'
    }
  },
  en: {
    nav: [
      { href: '#about', label: 'About' },
      { href: '#values', label: 'Values' },
      { href: '#ambitions', label: 'Ambitions' },
      { href: '#contact', label: 'Contact' }
    ],
    brandAriaLabel: 'Go to top',
    hero: {
      tag: 'Student · Entrepreneur · Visionary',
      title: 'Building Ideas Into Reality',
      description:
        "I'm Nicolas, a 9th grade student at Collège Héritage with an entrepreneurial mindset, driven by the belief that intentional ideas can become something real.",
      primaryAction: 'Learn More',
      secondaryAction: 'Get In Touch'
    },
    about: {
      heading: 'About Me',
      highlights: [
        {
          title: 'Education',
          lineOne: '9th Grade Student',
          lineTwo: 'Collège Héritage'
        },
        {
          title: 'Location',
          lineOne: 'Quebec, Canada',
          lineTwo: 'Open to remote collaboration'
        },
        {
          title: 'Focus',
          lineOne: 'Entrepreneurship',
          lineTwo: 'Business & Leadership'
        }
      ],
      paragraphs: [
        "I'm driven by a simple but powerful belief: that ideas, when pursued with intention, can become something real. At 9th grade, I'm not waiting to start. I'm already thinking like an entrepreneur, exploring how businesses are built and what it takes to lead them.",
        'I bring a curious and analytical mindset to everything I do, always asking why things work the way they do and how they could work better. At the same time, I stay grounded and focused on steady progress over shortcuts.',
        "My ambition is to create ventures that matter. Whether that's solving a problem in my community or scaling something bigger down the road, I'm here to learn fast, think boldly, and build with purpose."
      ]
    },
    values: {
      heading: 'Core Values',
      lead: 'The principles that guide my approach to entrepreneurship and life.',
      items: [
        {
          title: 'Curious & Analytical',
          description:
            'Always asking why things work the way they do and how they could work better. I bring an analytical mindset to every challenge.'
        },
        {
          title: 'Grounded & Focused',
          description:
            'Staying focused on steady progress over shortcuts. Building things that actually last requires patience and dedication.'
        },
        {
          title: 'Ambitious & Purposeful',
          description:
            'Driven to create ventures that matter. Learning fast, thinking boldly, and building with clear purpose and intention.'
        }
      ]
    },
    ambitions: {
      heading: 'Ambitions & Goals',
      lead: "Where I'm headed and what I'm working towards.",
      items: [
        {
          title: 'Learn & Explore',
          description:
            'Deep dive into how businesses are built, understanding the fundamentals of entrepreneurship, leadership, and innovation.'
        },
        {
          title: 'Solve Community Problems',
          description:
            'Identify and address real challenges in my local community, creating solutions that make a tangible difference.'
        },
        {
          title: 'Build Real Ventures',
          description:
            'Transform ideas into reality by launching ventures that provide value, starting small and scaling strategically.'
        },
        {
          title: 'Lead with Purpose',
          description:
            'Develop leadership skills and build ventures that create lasting impact, going beyond just business success.'
        }
      ]
    },
    contact: {
      heading: "Let's Connect",
      lead: 'Interested in collaboration, discussing ideas, or just saying hello?',
      emailLabel: 'Email',
      githubLabel: 'GitHub'
    },
    languageMenu: {
      buttonLabel: 'Choose language',
      menuAriaLabel: 'Language menu',
      english: 'English',
      french: 'Français'
    }
  }
};

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  content: LocalizedContent;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = LANGUAGE_TAGS[language];
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      content: translations[language]
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider.');
  }

  return context;
}
