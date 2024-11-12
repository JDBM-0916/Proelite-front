'use client'

import Image from 'next/image';
import Link from 'next/link';
import { IoChevronDown } from 'react-icons/io5';
import { useState, useRef, useEffect } from 'react';
import NavLink from './links-navigation-bar';
import { usePathname } from 'next/navigation';

interface NavbarProps {
  logoImage: string;
  textColor: string;
  borderColor: string;
}

const navLinks1 = [
  { href: '/home', label: 'Inicio' },
];

const navLinks = [
  { href: '/company', label: 'Empresa' },
  { href: '/services', label: 'Servicios' },
  { href: '/contacts', label: 'Contacto' },
];

export default function Navbar({ logoImage, textColor, borderColor }: NavbarProps) {

  const activeRoutes = [
    '/portfolio/vehicle_insurance',
    '/portfolio/compliance_insurance',
    '/portfolio/life_insurance',
    '/portfolio/transport_insurance',
    '/portfolio/business_insurance'
  ];

  const pathname = usePathname();
  const isActive = activeRoutes.includes(pathname);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <nav className="flex items-center justify-between bg-transparent mx-auto px-4">
      {/* Logo */}
      <Link href="/" className="relative w-[201.83px] h-14">
        <Image
          src={logoImage}
          alt="Logo"
          height={56}
          width={201.83}
        />
      </Link>

      {/* Navigation Links */}
      <div className="hidden lg:flex items-center space-x-6 2xl:space-x-10 mx-16">
        {navLinks1.map((link) => (
          <NavLink key={link.href} href={link.href} textColor={textColor}>
            {link.label}
          </NavLink>
        ))}

        {/* Portfolio Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            id="dropdown-button"
            className={`flex items-center ${textColor} ${isActive ? 'font-semibold border-b-4 py-2 border-custom-yellow' : 'font-normal'}`}
            onClick={toggleDropdown}
            aria-expanded={isDropdownOpen}
            aria-controls="dropdown-menu"
          >
            <IoChevronDown className="mr-2 h-4 w-4" />
            Portafolio
          </button>

          {isDropdownOpen && (
            <div
              id="dropdown-menu"
              className="absolute mt-2 w-[344px] h-[326px] rounded-md shadow-lg bg-white z-50"
              role="menu"
            >
              <div className="px-5 py-2" aria-orientation="vertical">
                <Link href='/portfolio/vehicle_insurance' className="block w-[328px] h-16 ">
                  <b className='text-sm'>Seguro de vehículos.</b>
                  <p className='text-[12px]'>Protege tu auto con nuestras coberturas completas.</p>
                </Link>
                <Link href='/portfolio/compliance_insurance' className="block w-[328px] h-16 ">
                  <b className='text-sm'>Seguro de cumplimiento Fianzas.</b>
                  <p className='text-[12px]'>Garantiza tus contratos y evita riesgos financieros.</p>
                </Link>
                <Link href='/portfolio/life_insurance' className="block w-[328px] h-16 ">
                  <b className='text-sm'>Seguro de vida. </b>
                  <p className='text-[12px]'>Cuida a tu familia con un seguro de vida confiable.</p>
                </Link>
                <Link href='/portfolio/transport_insurance' className="block w-[328px] h-16 ">
                  <b className='text-sm'>Seguro de transporte.</b>
                  <p className='text-[12px]'>Protege tus envíos y mercancías en tránsito.</p>
                </Link>
                <Link href='/portfolio/business_insurance' className="block w-[328px] h-16 ">
                  <b className='text-sm'>Seguro empresarial o para tu negocio.</b>
                  <p className='text-[12px]'>Protege tu negocio contra imprevistos.</p>
                </Link>
              </div>
            </div>
          )}
        </div>

        {navLinks.map((link) => (
          <NavLink key={link.href} href={link.href} textColor={textColor}>
            {link.label}
          </NavLink>
        ))}
      </div>

      <button
        className={`hidden md:flex bg-transparent px-4 py-2 rounded-lg border-2 ${borderColor} ${textColor} transition duration-200`}
      >
        Hablar con un Asesor ahora
      </button>
    </nav>
  );
}
