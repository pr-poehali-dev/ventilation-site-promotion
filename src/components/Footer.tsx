import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl gradient-blue-purple flex items-center justify-center">
                <Icon name="Flame" size={24} className="text-white" />
              </div>
              <span className="text-xl font-bold">ПКО "Пожарная Безопасность"</span>
            </div>
            <p className="text-gray-400">
              Профессиональные решения в области пожарной безопасности и вентиляции
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Услуги</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Монтаж вентиляции</a></li>
              <li><a href="#" className="hover:text-white transition">Пожарная сигнализация</a></li>
              <li><a href="#" className="hover:text-white transition">Системы пожаротушения</a></li>
              <li><a href="#" className="hover:text-white transition">Пожарный аудит</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Компания</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-white transition">О компании</a></li>
              <li><a href="#portfolio" className="hover:text-white transition">Портфолио</a></li>
              <li><a href="#blog" className="hover:text-white transition">Блог</a></li>
              <li><a href="#contacts" className="hover:text-white transition">Контакты</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Контакты</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={18} />
                <span>+7 (902) 238-92-03</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={18} />
                <span>info@pko-pb.ru</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="MapPin" size={18} />
                <span>г. Москва</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">
            © 2026 ООО "ПКО Пожарная Безопасность". Все права защищены.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-white transition">Политика конфиденциальности</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
}