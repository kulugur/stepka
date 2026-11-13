'use client';

import Image from 'next/image';
import { useState } from 'react';
import { BurgerMenu } from './BurgerMenu';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <div className="text-xl font-bold text-gray-900 dark:text-white">
                    <Image
                        src="/imgg.png"
                        alt="logo"
                        width={96}
                        height={96}
                        style={{ width: '50%', height: 'auto' }}
                    />
                </div>

                <nav className="hidden md:flex space-x-6">
                    <a
                        href="#"
                        className="text-gray-600 dark:text-gray-300 hover:text-blue-500"
                    >
                        Главная
                    </a>
                    <a
                        href="#"
                        className="text-gray-600 dark:text-gray-300 hover:text-blue-500"
                    >
                        Услуги
                    </a>
                    <a
                        href="#"
                        className="text-gray-600 dark:text-gray-300 hover:text-blue-500"
                    >
                        Контакты
                    </a>
                </nav>

                <div className="md:hidden">
                    <BurgerMenu
                        isOpen={isMenuOpen}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    />
                </div>
            </div>

            <div
                className={`
          md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white dark:bg-gray-900
          ${isMenuOpen ? 'max-h-96 border-t border-gray-200 dark:border-gray-800' : 'max-h-0'}
        `}
            >
                <nav className="flex flex-col p-4 space-y-4">
                    <a
                        href="#"
                        className="text-gray-700 dark:text-gray-200 hover:text-blue-500"
                    >
                        Главная
                    </a>
                    <a
                        href="#"
                        className="text-gray-700 dark:text-gray-200 hover:text-blue-500"
                    >
                        Услуги
                    </a>
                    <a
                        href="#"
                        className="text-gray-700 dark:text-gray-200 hover:text-blue-500"
                    >
                        Контакты
                    </a>
                </nav>
            </div>
        </header>
    );
}
