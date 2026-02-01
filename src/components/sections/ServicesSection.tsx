import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in">
          <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-semibold text-sm mb-4">
            Что мы делаем
          </div>
          <h2 className="text-5xl font-bold mb-4">Наши услуги</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Полный спектр работ по обеспечению безопасности и комфорта вашего объекта
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: "Wind",
              title: "Монтаж вентиляции",
              description: "Проектирование и установка систем вентиляции любой сложности для жилых и коммерческих объектов",
              gradient: "from-blue-500 to-cyan-500"
            },
            {
              icon: "Flame",
              title: "Пожарная сигнализация",
              description: "Установка современных систем пожарной сигнализации с автоматическим оповещением",
              gradient: "from-red-500 to-orange-500"
            },
            {
              icon: "Droplets",
              title: "Системы пожаротушения",
              description: "Монтаж автоматических систем пожаротушения: водяных, газовых, порошковых",
              gradient: "from-purple-500 to-pink-500"
            },
            {
              icon: "ShieldCheck",
              title: "Пожарный аудит",
              description: "Комплексная проверка объекта на соответствие требованиям пожарной безопасности",
              gradient: "from-green-500 to-emerald-500"
            },
            {
              icon: "FileText",
              title: "Разработка документации",
              description: "Подготовка проектной документации, планов эвакуации, инструкций по пожарной безопасности",
              gradient: "from-indigo-500 to-blue-500"
            },
            {
              icon: "Wrench",
              title: "Сервисное обслуживание",
              description: "Регулярное техническое обслуживание установленного оборудования",
              gradient: "from-orange-500 to-yellow-500"
            }
          ].map((service, index) => (
            <Card key={index} className="p-8 hover-scale border-2 hover:border-purple-300 transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6`}>
                <Icon name={service.icon} size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
