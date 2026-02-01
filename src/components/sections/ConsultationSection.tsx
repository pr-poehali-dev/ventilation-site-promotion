import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export default function ConsultationSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://functions.poehali.dev/a221cba9-fe4a-42f2-a9e1-a1a468670f9d', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Заявка отправлена!",
          description: "Мы свяжемся с вами в ближайшее время.",
        });
        setFormData({ name: '', phone: '', email: '', message: '' });
      } else {
        toast({
          title: "Ошибка",
          description: "Не удалось отправить заявку. Пожалуйста, попробуйте позже или позвоните нам.",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось отправить заявку. Пожалуйста, попробуйте позже.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
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

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <Input 
                  placeholder="Ваше имя *" 
                  className="h-14 text-lg border-2 focus:border-purple-500"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <Input 
                  type="tel"
                  placeholder="Телефон *" 
                  className="h-14 text-lg border-2 focus:border-purple-500"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <div>
                <Input 
                  type="email"
                  placeholder="Email" 
                  className="h-14 text-lg border-2 focus:border-purple-500"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <Textarea 
                  placeholder="Опишите ваш объект и задачи" 
                  className="min-h-32 text-lg border-2 focus:border-purple-500"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>
              <Button 
                type="submit"
                size="lg" 
                className="w-full gradient-blue-purple text-white font-semibold text-lg h-14 hover-scale"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
              </Button>
              <p className="text-sm text-gray-500 text-center">
                Нажимая кнопку, вы соглашаетесь с <Link to="/privacy" className="text-purple-600 hover:underline">политикой конфиденциальности</Link>
              </p>
            </form>
          </div>
        </Card>
      </div>
    </section>
  );
}
