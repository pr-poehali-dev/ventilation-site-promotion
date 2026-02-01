import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 fade-in">
            <div className="inline-block px-4 py-2 bg-purple-100 rounded-full text-purple-700 font-semibold text-sm">
              🔥 Профессиональная безопасность
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Монтаж вентиляции и 
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent"> пожарная безопасность</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Комплексные решения для защиты вашего бизнеса. Лицензии, сертификаты, опыт более 10 лет.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gradient-blue-purple text-white font-semibold hover-scale text-lg px-8 py-6">
                Получить консультацию
              </Button>
              <Button size="lg" variant="outline" className="font-semibold text-lg px-8 py-6 border-2 hover:border-purple-600">
                Наши проекты
              </Button>
            </div>
            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-4xl font-bold text-purple-600">500+</div>
                <div className="text-gray-600">Проектов</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600">10+</div>
                <div className="text-gray-600">Лет опыта</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-500">100%</div>
                <div className="text-gray-600">Гарантия</div>
              </div>
            </div>
          </div>

          <div className="relative fade-in">
            <div className="absolute inset-0 gradient-blue-purple rounded-3xl blur-3xl opacity-20"></div>
            <img 
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop" 
              alt="Монтаж вентиляции"
              className="relative rounded-3xl shadow-2xl hover-scale w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
