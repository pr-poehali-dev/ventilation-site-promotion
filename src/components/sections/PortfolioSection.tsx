import { Card } from '@/components/ui/card';

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in">
          <div className="inline-block px-4 py-2 bg-purple-100 rounded-full text-purple-700 font-semibold text-sm mb-4">
            Наши работы
          </div>
          <h2 className="text-5xl font-bold mb-4">Портфолио проектов</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Более 500 успешно реализованных объектов по всей России
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              image: "https://cdn.poehali.dev/projects/dce6e277-952f-4698-8543-d7f7aa3daf03/files/9f79d07a-2eea-4fe6-9679-f90386ccc523.jpg",
              title: "Промышленная вентиляция",
              category: "Производственный объект",
              description: "Монтаж промышленной системы вентиляции с воздуховодами большого сечения"
            },
            {
              image: "https://cdn.poehali.dev/projects/dce6e277-952f-4698-8543-d7f7aa3daf03/files/1a5d4512-f22d-4445-84d5-d510fe0b584d.jpg",
              title: "Пожарная сигнализация",
              category: "Торговый центр",
              description: "Установка адресной системы пожарной сигнализации с диспетчеризацией"
            },
            {
              image: "https://cdn.poehali.dev/projects/dce6e277-952f-4698-8543-d7f7aa3daf03/files/b7b6d3a0-c886-4bbe-802d-23c2d73ce70e.jpg",
              title: "Система пожаротушения",
              category: "Складской комплекс",
              description: "Монтаж автоматической спринклерной системы пожаротушения площадью 5000 м²"
            },
            {
              image: "https://cdn.poehali.dev/projects/dce6e277-952f-4698-8543-d7f7aa3daf03/files/82776997-0afa-4678-8211-2604f508e621.jpg",
              title: "Офисная вентиляция",
              category: "Бизнес-центр",
              description: "Проектирование и установка приточно-вытяжной вентиляции в офисном центре класса А"
            },
            {
              image: "https://cdn.poehali.dev/projects/dce6e277-952f-4698-8543-d7f7aa3daf03/files/7c5f6254-ee3c-48f2-a30b-1fff8fdafed3.jpg",
              title: "Датчики дыма",
              category: "Жилой комплекс",
              description: "Установка адресных дымовых извещателей в многоквартирном доме на 200 квартир"
            },
            {
              image: "https://cdn.poehali.dev/projects/dce6e277-952f-4698-8543-d7f7aa3daf03/files/888a7eab-feb0-493e-8edd-936730bd226b.jpg",
              title: "Промышленная вентиляция",
              category: "Складской комплекс",
              description: "Монтаж и пусконаладка промышленной вентиляционной системы на складе 8000 м²"
            }
          ].map((project, index) => (
            <Card key={index} className="overflow-hidden hover-scale border-0 shadow-lg group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <div className="text-sm text-purple-600 font-semibold mb-2">{project.category}</div>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
