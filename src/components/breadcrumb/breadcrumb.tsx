'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface BreadcrumbProps {
  currentPageName?: string
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ currentPageName }) => {
  const pathname = usePathname()
  
  const formatPageName = (name: string) => {
    return name
      .replace(/-/g, ' ')
      .replace(/_/g, ' ')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }

  const pageName = currentPageName || formatPageName(pathname.split('/').pop() || '')

  return (
    <div className="my-14">
      <Link href="/" className="text-custom-blue  font-semibold">Inicio</Link>
      <b className="mx-4">{'>'}</b>
      <Link href="/portfolio" className="text-custom-blue hover:font-semibold">Portafolio</Link>
      <b className="mx-4">{'>'}</b>
      <span>{pageName}</span> 
    </div>
  )
}

export default Breadcrumb