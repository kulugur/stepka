// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-neutral-primary-soft rounded-base shadow-xs border border-default m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          
          <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img 
              src="https://flowbite.com/docs/images/logo.svg" 
              className="h-7" 
              alt="Flowbite Logo" 
            />
            <span className="text-heading self-center text-2xl font-semibold whitespace-nowrap">
              Flowbite
            </span>
          </a>

          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-body sm:mb-0">
            <li>
              <a href="/about" className="hover:underline me-4 md:me-6">О нас</a>
            </li>
            <li>
              <a href="/privacy" className="hover:underline me-4 md:me-6">Политика конфиденциальности</a>
            </li>
            <li>
              <a href="/contacts" className="hover:underline">Контакты</a>
            </li>
          </ul>
          
        </div>
        
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        
        {/* 👇 ИСПРАВЛЕННАЯ СТРОКА: просто указываем 2026 год */}
        <span className="block text-sm text-gray-500 sm:text-center">
          © 2026{' '}
          <a href="https://flowbite.com/" className="hover:underline">
            Flowbite™
          </a>. Все права защищены.
        </span>
        
      </div>
    </footer>
  );
}
