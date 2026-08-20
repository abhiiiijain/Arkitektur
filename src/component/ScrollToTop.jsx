import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PAGE_TITLES = {
  '/': 'Arkitektur | Architecture & Interior Design',
  '/about': 'About | Arkitektur',
  '/services': 'Services | Arkitektur',
  '/contact': 'Appointment | Arkitektur',
  '/login': 'Login | Arkitektur',
  '/register': 'Register | Arkitektur',
};

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    const path = pathname.replace(/\/+$/, '') || '/';
    document.title = PAGE_TITLES[path] || 'Arkitektur';
  }, [pathname]);

  return null;
}
