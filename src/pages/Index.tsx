import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl gradient-blue-purple flex items-center justify-center">
              <Icon name="Flame" size={28} className="text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ПКО Безопасность
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
                image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
                title: "ТЦ Мега",
                category: "Торговый центр",
                description: "Полный комплекс систем пожарной безопасности"
              },
              {
                image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
                title: "Офисный центр",
                category: "Бизнес-центр",
                description: "Вентиляция и кондиционирование 15 этажей"
              },
              {
                image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=600&h=400&fit=crop",
                title: "Производственный цех",
                category: "Промышленность",
                description: "Промышленная вентиляция и пожаротушение"
              },
              {
                image: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=600&h=400&fit=crop",
                title: "Жилой комплекс",
                category: "Жилая недвижимость",
                description: "Системы дымоудаления для 200 квартир"
              },
              {
                image: "https://images.unsplash.com/photo-1577495508326-19a1b3cf65b7?w=600&h=400&fit=crop",
                title: "Складской комплекс",
                category: "Логистика",
                description: "Автоматическое пожаротушение 5000 м²"
              },
              {
                image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop",
                title: "Отель",
                category: "Гостиничный бизнес",
                description: "Комплексная система безопасности 50 номеров"
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
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
                date: "15 января 2026",
                category: "Законодательство",
                title: "Новые требования пожарной безопасности 2026",
                excerpt: "Обзор изменений в нормативных документах и их влияние на объекты"
              },
              {
                image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&h=400&fit=crop",
                date: "10 января 2026",
                category: "Технологии",
                title: "Умные системы пожаротушения",
                excerpt: "Как IoT и AI меняют подход к обеспечению безопасности зданий"
              },
              {
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
                date: "5 января 2026",
                category: "Практика",
                title: "Как выбрать систему вентиляции",
                excerpt: "Практическое руководство по выбору оптимального решения для вашего объекта"
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

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 text-center hover-scale border-2 hover:border-purple-300">
              <div className="w-16 h-16 rounded-full gradient-blue-purple flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Телефон</h3>
              <a href="tel:+79991234567" className="text-purple-600 hover:text-purple-700 font-semibold text-lg">
                +7 (999) 123-45-67
              </a>
              <p className="text-gray-600 mt-2 text-sm">Пн-Пт: 9:00 - 18:00</p>
            </Card>

            <Card className="p-8 text-center hover-scale border-2 hover:border-blue-300">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Email</h3>
              <a href="mailto:info@pko-pb.ru" className="text-blue-600 hover:text-blue-700 font-semibold text-lg">
                info@pko-pb.ru
              </a>
              <p className="text-gray-600 mt-2 text-sm">Ответим в течение часа</p>
            </Card>

            <Card className="p-8 text-center hover-scale border-2 hover:border-orange-300">
              <div className="w-16 h-16 rounded-full gradient-orange flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Адрес</h3>
              <p className="text-gray-700 font-semibold">г. Москва</p>
              <p className="text-gray-600 mt-2 text-sm">ул. Примерная, д. 123</p>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl gradient-blue-purple flex items-center justify-center">
                  <Icon name="Flame" size={24} className="text-white" />
                </div>
                <span className="text-xl font-bold">ПКО Безопасность</span>
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
                  <span>+7 (999) 123-45-67</span>
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
    </div>
  );
}
