import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const navItems = [
  { href: '/', icon: '🏠', label: 'Main' },
  { href: '/favorites', icon: '⭐', label: 'Favorites' },
  { href: '/history', icon: '📅', label: 'History' },
  { href: '/friends', icon: '👥', label: 'Friends' },
];

const Footer: React.FC = () => {
  const router = useRouter();

  return (
    <footer className="bg-white shadow-md">
      <nav className="flex justify-around items-center h-16">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            <a className={`flex flex-col items-center text-xs ${
              router.pathname === item.href 
                ? 'text-primary' 
                : 'text-gray-600 hover:text-secondary'
              } transition-colors duration-200 ease-in-out`}>
              <span className="text-xl mb-1">{item.icon}</span>
              {item.label}
            </a>
          </Link>
        ))}
      </nav>
    </footer>
  );
};

export default Footer;
