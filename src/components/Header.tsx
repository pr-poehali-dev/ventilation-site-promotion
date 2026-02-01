import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}

export default function Header({ isMenuOpen, setIsMenuOpen }: HeaderProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl gradient-blue-purple flex items-center justify-center">
            <Icon name="Flame" size={28} className="text-white" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            ПКО "Пожарная Безопасность"
          </span>
        </div>
        
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden"
        >
          <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
        </button>

        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-gray-700 hover:text-purple-600 transition font-medium">Услуги</a>
          <a href="#portfolio" className="text-gray-700 hover:text-purple-600 transition font-medium">Портфолио</a>
          <a href="#about" className="text-gray-700 hover:text-purple-600 transition font-medium">О компании</a>
          <a href="#blog" className="text-gray-700 hover:text-purple-600 transition font-medium">Блог</a>
          <a href="#faq" className="text-gray-700 hover:text-purple-600 transition font-medium">FAQ</a>
          <a href="#contacts" className="text-gray-700 hover:text-purple-600 transition font-medium">Контакты</a>
          <Button className="gradient-blue-purple text-white font-semibold hover-scale">
            Заказать консультацию
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 p-4 space-y-3">
          <a href="#services" className="block py-2 text-gray-700">Услуги</a>
          <a href="#portfolio" className="block py-2 text-gray-700">Портфолио</a>
          <a href="#about" className="block py-2 text-gray-700">О компании</a>
          <a href="#blog" className="block py-2 text-gray-700">Блог</a>
          <a href="#faq" className="block py-2 text-gray-700">FAQ</a>
          <a href="#contacts" className="block py-2 text-gray-700">Контакты</a>
          <Button className="w-full gradient-blue-purple text-white">Заказать консультацию</Button>
        </div>
      )}
    </nav>
  );
}