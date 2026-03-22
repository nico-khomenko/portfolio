import { PropsWithChildren } from 'react';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#values', label: 'Values' },
  { href: '#ambitions', label: 'Ambitions' },
  { href: '#contact', label: 'Contact' }
];

export function SiteLayout({ children }: PropsWithChildren) {
  return (
    <>
      <header className="site-header">
        <a className="site-header__brand" href="#top" aria-label="Go to top">
          Nicolas
        </a>
        <nav aria-label="Section navigation">
          <ul className="site-header__nav">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main id="top">{children}</main>
    </>
  );
}
