'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  textColor?: string; // Hacemos esta propiedad opcional
}

export default function NavLink({ href, children, textColor}: NavLinkProps) { 
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`${textColor} ${isActive ? 'font-extrabold border-b-4 py-2 border-custom-yellow' : 'font-normal'} hover:text-custom-yellow transition-colors duration-200`}
      aria-current={isActive ? 'page' : undefined} // Mejora la accesibilidad
    >
      {children}
    </Link>
  );
}
