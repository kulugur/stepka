interface BurgerMenuProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

export function BurgerMenu({ isOpen, onClick, className = '' }: BurgerMenuProps) {
  return (
    <button
      onClick={onClick}
      className={`
        relative w-10 h-10 flex items-center justify-center 
        rounded-lg text-gray-800 dark:text-gray-100
        hover:bg-gray-100 dark:hover:bg-gray-800 
        transition-colors duration-200 
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900
        ${className}
      `}
      aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
      aria-expanded={isOpen}
    >
      <span
        className={`
          absolute left-2 block h-0.5 w-6 bg-current 
          transition-all duration-300 ease-in-out 
          ${isOpen ? 'top-[19px] rotate-45' : 'top-2.5'}
        `}
      />
      
      <span
        className={`
          absolute left-2 block h-0.5 w-6 bg-current 
          transition-all duration-300 ease-in-out 
          ${isOpen ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100 top-[19px]'}
        `}
      />
      
      <span
        className={`
          absolute left-2 block h-0.5 w-6 bg-current 
          transition-all duration-300 ease-in-out 
          ${isOpen ? 'top-[19px] -rotate-45' : 'bottom-2.5'}
        `}
      />
    </button>
  );
}
