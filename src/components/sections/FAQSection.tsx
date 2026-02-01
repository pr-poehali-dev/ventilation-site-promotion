import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function FAQSection() {
  const faqs = [
    {
      question: "Сколько времени занимает монтаж системы вентиляции?",
      answer: "Сроки зависят от площади объекта и сложности системы. В среднем монтаж занимает от 3 до 14 рабочих дней. После выезда специалиста мы предоставим точный график работ."
    },
    {
      question: "Какие гарантии вы предоставляете на установленное оборудование?",
      answer: "Мы предоставляем гарантию на оборудование от 2 до 5 лет в зависимости от производителя, и гарантию на монтажные работы 3 года. Также доступны расширенные программы сервисного обслуживания."
    },
    {
      question: "Нужно ли согласование проекта с надзорными органами?",
      answer: "Да, для коммерческих объектов требуется согласование проектной документации в МЧС и получение заключения о соответствии. Мы берём на себя всю работу по согласованию документов."
    },
    {
      question: "Выполняете ли вы работы по техническому обслуживанию систем?",
      answer: "Да, мы предоставляем полный спектр услуг по сервисному обслуживанию: плановые проверки, диагностика, замена изношенных компонентов, модернизация систем. Доступны абонентские программы."
    },
    {
      question: "Можно ли установить пожарную сигнализацию в уже эксплуатируемом здании?",
      answer: "Да, мы специализируемся на монтаже систем в действующих объектах. Работы выполняются с минимальным вмешательством в интерьер и конструкции здания, возможна скрытая прокладка кабелей."
    },
    {
      question: "Какие документы я получу после завершения работ?",
      answer: "После завершения вы получите: акт выполненных работ, технический паспорт системы, инструкции по эксплуатации, сертификаты на оборудование, протоколы испытаний и заключение о соответствии требованиям пожарной безопасности."
    }
  ];

  return (
    <section id="faq" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 fade-in">
          <div className="inline-block px-4 py-2 bg-orange-100 rounded-full text-orange-700 font-semibold text-sm mb-4">
            Ответы на вопросы
          </div>
          <h2 className="text-5xl font-bold mb-4">Часто задаваемые вопросы</h2>
          <p className="text-xl text-gray-600">
            Собрали ответы на самые популярные вопросы наших клиентов
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-2 rounded-xl px-6 hover:border-orange-300 transition-colors">
              <AccordionTrigger className="text-left text-lg font-bold hover:text-orange-600 py-6">
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
  );
}
