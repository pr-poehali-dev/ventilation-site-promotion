import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

export default function MainContent() {
  return (
    <>
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

      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <div className="inline-block px-4 py-2 bg-orange-100 rounded-full text-orange-700 font-semibold text-sm mb-4">
                О нас
              </div>
              <h2 className="text-5xl font-bold mb-6">ООО "ПКО Пожарная Безопасность"</h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Мы — профессиональная команда специалистов с более чем 10-летним опытом работы в сфере обеспечения пожарной безопасности и монтажа систем вентиляции.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Наша компания имеет все необходимые лицензии МЧС и сертификаты для проведения полного комплекса работ. Мы используем только сертифицированное оборудование от ведущих производителей и предоставляем гарантию на все виды работ.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg gradient-blue-purple flex items-center justify-center flex-shrink-0">
                    <Icon name="Award" size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">Лицензии МЧС</div>
                    <div className="text-gray-600 text-sm">Все разрешительные документы</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg gradient-orange flex items-center justify-center flex-shrink-0">
                    <Icon name="Users" size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">25+ специалистов</div>
                    <div className="text-gray-600 text-sm">Квалифицированная команда</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">24/7 поддержка</div>
                    <div className="text-gray-600 text-sm">Круглосуточная служба</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                    <Icon name="FileCheck" size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">Гарантия качества</div>
                    <div className="text-gray-600 text-sm">До 5 лет на оборудование</div>
                  </div>
                </div>
              </div>

              <Button size="lg" className="gradient-blue-purple text-white font-semibold hover-scale">
                Наши лицензии и сертификаты
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6 fade-in">
              <Card className="p-6 border-2 border-purple-200">
                <Icon name="Target" size={40} className="text-purple-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Наша миссия</h3>
                <p className="text-gray-600">Обеспечение максимальной безопасности каждого объекта с использованием передовых технологий</p>
              </Card>
              <Card className="p-6 border-2 border-blue-200">
                <Icon name="Zap" size={40} className="text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Быстрая работа</h3>
                <p className="text-gray-600">Оперативное выполнение проектов в сжатые сроки без потери качества</p>
              </Card>
              <Card className="p-6 border-2 border-orange-200">
                <Icon name="Lightbulb" size={40} className="text-orange-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Инновации</h3>
                <p className="text-gray-600">Применение современных решений и новейшего оборудования</p>
              </Card>
              <Card className="p-6 border-2 border-green-200">
                <Icon name="ThumbsUp" size={40} className="text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Надёжность</h3>
                <p className="text-gray-600">Долгосрочные гарантии и профессиональное обслуживание</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 fade-in">
            <div className="inline-block px-4 py-2 bg-green-100 rounded-full text-green-700 font-semibold text-sm mb-4">
              Полезная информация
            </div>
            <h2 className="text-5xl font-bold mb-4">Блог и статьи</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Новости отрасли, советы экспертов и полезные материалы
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: "https://cdn.poehali.dev/projects/dce6e277-952f-4698-8543-d7f7aa3daf03/files/1a5d4512-f22d-4445-84d5-d510fe0b584d.jpg",
                date: "28 января 2026",
                category: "Технологии",
                title: "Адресные системы пожарной сигнализации: что нужно знать в 2026 году",
                excerpt: "Современные адресные системы позволяют точно определить место возгорания и значительно сократить время реагирования. Рассказываем о ключевых преимуществах и требованиях к установке."
              },
              {
                image: "https://cdn.poehali.dev/projects/dce6e277-952f-4698-8543-d7f7aa3daf03/files/c42af6f1-ca85-43a1-982a-c13a5871ed0e.jpg",
                date: "15 января 2026",
                category: "Экономия",
                title: "Энергоэффективная вентиляция: экономия до 40% на электричестве",
                excerpt: "Современные системы с рекуперацией тепла и частотными преобразователями позволяют существенно снизить эксплуатационные расходы. Разбираем на реальных примерах наших объектов."
              },
              {
                image: "https://cdn.poehali.dev/projects/dce6e277-952f-4698-8543-d7f7aa3daf03/files/b7b6d3a0-c886-4bbe-802d-23c2d73ce70e.jpg",
                date: "8 января 2026",
                category: "Экспертиза",
                title: "Спринклерное пожаротушение на складах: требования и особенности монтажа",
                excerpt: "Складские помещения категории В требуют особого подхода к проектированию систем пожаротушения. Делимся опытом установки спринклерных систем на объектах от 3000 до 15000 м²."
              }
            ].map((article, index) => (
              <Card key={index} className="overflow-hidden hover-scale border-0 shadow-lg">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3 text-sm">
                    <span className="text-gray-500">{article.date}</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full font-semibold">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 hover:text-purple-600 transition">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <Button variant="ghost" className="text-purple-600 hover:text-purple-700 p-0 h-auto font-semibold">
                    Читать далее →
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 fade-in">
            <div className="inline-block px-4 py-2 bg-yellow-100 rounded-full text-yellow-700 font-semibold text-sm mb-4">
              Ответы на вопросы
            </div>
            <h2 className="text-5xl font-bold mb-4">Часто задаваемые вопросы</h2>
            <p className="text-xl text-gray-600">
              Ответы на самые популярные вопросы о наших услугах
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: "Какие лицензии необходимы для работ по пожарной безопасности?",
                answer: "Для проведения работ по монтажу, техническому обслуживанию и ремонту средств обеспечения пожарной безопасности необходима лицензия МЧС России. Наша компания имеет все необходимые разрешительные документы."
              },
              {
                question: "Сколько времени занимает установка системы пожарной сигнализации?",
                answer: "Сроки зависят от площади объекта и сложности системы. Для стандартного офиса площадью 200 м² установка занимает 3-5 рабочих дней. Крупные объекты могут потребовать 2-4 недели."
              },
              {
                question: "Предоставляете ли вы гарантию на выполненные работы?",
                answer: "Да, мы предоставляем гарантию на монтажные работы сроком до 2 лет, а на установленное оборудование — гарантию производителя (от 1 до 5 лет в зависимости от типа оборудования)."
              },
              {
                question: "Как часто нужно проводить техническое обслуживание систем?",
                answer: "Согласно нормативам, техническое обслуживание систем пожарной сигнализации должно проводиться не реже 1 раза в месяц, систем пожаротушения — 1 раз в квартал. Системы вентиляции проверяются 1-2 раза в год."
              },
              {
                question: "Работаете ли вы с объектами в регионах?",
                answer: "Да, мы выполняем проекты по всей России. Для объектов в регионах мы направляем выездные бригады специалистов и обеспечиваем полное сопровождение проекта."
              },
              {
                question: "Можно ли получить консультацию до заключения договора?",
                answer: "Конечно! Мы предоставляем бесплатную консультацию и выезд специалиста на объект для оценки объёма работ. После осмотра мы подготовим коммерческое предложение с подробной сметой."
              }
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-2 border-gray-200 rounded-xl px-6 hover:border-purple-300 transition">
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-purple-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="consultation" className="py-20 px-4 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600">
        <div className="container mx-auto max-w-5xl">
          <Card className="p-12 border-0 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <div className="inline-block px-4 py-2 bg-purple-100 rounded-full text-purple-700 font-semibold text-sm mb-4">
                  Оставить заявку
                </div>
                <h2 className="text-4xl font-bold mb-6">Закажите бесплатную консультацию</h2>
                <p className="text-gray-600 text-lg mb-8">
                  Оставьте заявку, и наш специалист свяжется с вами в течение 15 минут для обсуждения вашего проекта
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg gradient-blue-purple flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="font-bold">Быстрый ответ</div>
                      <div className="text-gray-600">Перезвоним в течение 15 минут</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg gradient-orange flex items-center justify-center flex-shrink-0">
                      <Icon name="Calculator" size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="font-bold">Бесплатный расчёт</div>
                      <div className="text-gray-600">Подготовим смету за 1 день</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="font-bold">Выезд на объект</div>
                      <div className="text-gray-600">Бесплатный осмотр и консультация</div>
                    </div>
                  </div>
                </div>
              </div>

              <form className="space-y-4">
                <div>
                  <Input 
                    placeholder="Ваше имя *" 
                    className="h-14 text-lg border-2 focus:border-purple-500"
                  />
                </div>
                <div>
                  <Input 
                    type="tel"
                    placeholder="Телефон *" 
                    className="h-14 text-lg border-2 focus:border-purple-500"
                  />
                </div>
                <div>
                  <Input 
                    type="email"
                    placeholder="Email" 
                    className="h-14 text-lg border-2 focus:border-purple-500"
                  />
                </div>
                <div>
                  <Textarea 
                    placeholder="Опишите ваш объект и задачи" 
                    className="min-h-32 text-lg border-2 focus:border-purple-500"
                  />
                </div>
                <Button 
                  type="submit"
                  size="lg" 
                  className="w-full gradient-blue-purple text-white font-semibold text-lg h-14 hover-scale"
                >
                  Отправить заявку
                </Button>
                <p className="text-sm text-gray-500 text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </div>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 fade-in">
            <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-semibold text-sm mb-4">
              Свяжитесь с нами
            </div>
            <h2 className="text-5xl font-bold mb-4">Контакты</h2>
            <p className="text-xl text-gray-600">
              Мы всегда на связи и готовы ответить на ваши вопросы
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 hover-scale border-2 hover:border-purple-300">
              <div className="w-16 h-16 rounded-full gradient-blue-purple flex items-center justify-center mb-4">
                <Icon name="Phone" size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Телефоны</h3>
              <div className="space-y-2">
                <a href="tel:+79022389203" className="block text-purple-600 hover:text-purple-700 font-semibold text-lg">
                  +7 (902) 238-92-03
                </a>
                <a href="tel:+79879064201" className="block text-purple-600 hover:text-purple-700 font-semibold text-lg">
                  +7 (987) 906-42-01
                </a>
              </div>
              <p className="text-gray-600 mt-4 text-sm">Пн-Пт: 9:00 - 18:00</p>
            </Card>

            <Card className="p-8 hover-scale border-2 hover:border-blue-300">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
                <Icon name="Mail" size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Email</h3>
              <div className="space-y-2">
                <a href="mailto:pko_pb2014@mail.ru" className="block text-blue-600 hover:text-blue-700 font-semibold text-lg break-all">
                  pko_pb2014@mail.ru
                </a>
                <a href="mailto:udin_max@mail.ru" className="block text-blue-600 hover:text-blue-700 font-semibold text-lg break-all">
                  udin_max@mail.ru
                </a>
              </div>
              <p className="text-gray-600 mt-4 text-sm">Ответим в течение часа</p>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}