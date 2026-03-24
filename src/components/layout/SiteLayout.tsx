import { PropsWithChildren, useEffect, useRef, useState } from 'react';
import { useLanguage } from '../../i18n';

export function SiteLayout({ children }: PropsWithChildren) {
  const { language, setLanguage, content } = useLanguage();
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [isAvatarVisible, setIsAvatarVisible] = useState(true);
  const languageMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      if (!languageMenuRef.current) {
        return;
      }

      if (!languageMenuRef.current.contains(event.target as Node)) {
        setIsLanguageMenuOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsLanguageMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleDocumentClick);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleDocumentClick);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen((previousState) => !previousState);
  };

  const handleLanguageSelect = (selectedLanguage: 'fr' | 'en') => {
    setLanguage(selectedLanguage);
    setIsLanguageMenuOpen(false);
  };

  return (
    <>
      <header className="site-header">
        <a className="site-header__brand" href="#top" aria-label={content.brandAriaLabel}>
          <span className="site-header__brand-text">Nicolas</span>
          {isAvatarVisible ? (
            <span className="site-header__avatar" aria-hidden="true">
              <img
                className="site-header__avatar-image"
                src="/images/nicolas.jpg"
                alt=""
                decoding="async"
                loading="eager"
                onError={() => setIsAvatarVisible(false)}
              />
            </span>
          ) : null}
        </a>
        <nav aria-label="Section navigation">
          <ul className="site-header__nav">
            {content.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="site-header__language-picker" ref={languageMenuRef}>
          <button
            className="site-header__menu-button"
            type="button"
            aria-label={content.languageMenu.buttonLabel}
            aria-expanded={isLanguageMenuOpen}
            aria-controls="language-dropdown"
            onClick={toggleLanguageMenu}
          >
            <span />
            <span />
            <span />
          </button>
          <div
            id="language-dropdown"
            className={`site-header__language-menu${isLanguageMenuOpen ? ' is-open' : ''}`}
            role="menu"
            aria-label={content.languageMenu.menuAriaLabel}
          >
            <button
              type="button"
              role="menuitemradio"
              aria-checked={language === 'fr'}
              className={`site-header__language-option${language === 'fr' ? ' is-active' : ''}`}
              onClick={() => handleLanguageSelect('fr')}
            >
              {content.languageMenu.french}
            </button>
            <button
              type="button"
              role="menuitemradio"
              aria-checked={language === 'en'}
              className={`site-header__language-option${language === 'en' ? ' is-active' : ''}`}
              onClick={() => handleLanguageSelect('en')}
            >
              {content.languageMenu.english}
            </button>
          </div>
        </div>
      </header>
      <main id="top">{children}</main>
    </>
  );
}
