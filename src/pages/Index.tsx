import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-industrial-light to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-industrial rounded-full flex items-center justify-center">
              <Icon name="Flame" size={16} className="text-white" />
            </div>
            <span className="text-xl font-bold text-industrial-dark">ГазСнаб</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-industrial-steel hover:text-industrial transition-colors">О компании</a>
            <a href="#services" className="text-industrial-steel hover:text-industrial transition-colors">Услуги</a>
            <a href="#safety" className="text-industrial-steel hover:text-industrial transition-colors">Безопасность</a>
            <a href="#contacts" className="text-industrial-steel hover:text-industrial transition-colors">Контакты</a>
          </nav>
          <Button className="bg-industrial hover:bg-industrial/90">
            <Icon name="Phone" size={16} className="mr-2" />
            Заказать доставку
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-6 bg-industrial/10 text-industrial border-industrial/20">
            Профессиональные решения для газового оборудования
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-industrial-dark mb-6 leading-tight">
            Надёжная доставка<br />
            <span className="text-industrial">сжиженного газа</span>
          </h1>
          <p className="text-xl text-industrial-steel mb-8 max-w-2xl mx-auto">
            Обеспечиваем бесперебойные поставки высококачественного сжиженного газа 
            для промышленных предприятий и частных потребителей
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-industrial hover:bg-industrial/90 text-lg px-8 py-4">
              <Icon name="Truck" size={20} className="mr-2" />
              Заказать доставку
            </Button>
            <Button size="lg" variant="outline" className="border-industrial-steel text-industrial-steel hover:bg-industrial-steel/10 text-lg px-8 py-4">
              <Icon name="Calculator" size={20} className="mr-2" />
              Рассчитать стоимость
            </Button>
          </div>
          
          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-industrial/10">
              <div className="text-3xl font-bold text-industrial mb-2">24/7</div>
              <div className="text-industrial-steel">Круглосуточная доставка</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-industrial/10">
              <div className="text-3xl font-bold text-industrial mb-2">500+</div>
              <div className="text-industrial-steel">Довольных клиентов</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-industrial/10">
              <div className="text-3xl font-bold text-industrial mb-2">15 лет</div>
              <div className="text-industrial-steel">На рынке</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-industrial-dark mb-4">О компании ГазСнаб</h2>
            <p className="text-xl text-industrial-steel max-w-3xl mx-auto">
              Мы - ведущий поставщик сжиженного газа с многолетним опытом работы на российском рынке. 
              Гарантируем качество, безопасность и своевременную доставку.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-industrial/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Award" size={24} className="text-industrial" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-industrial-dark mb-2">Сертифицированное качество</h3>
                  <p className="text-industrial-steel">Весь наш газ соответствует ГОСТу и имеет необходимые сертификаты качества</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-industrial/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Shield" size={24} className="text-industrial" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-industrial-dark mb-2">Максимальная безопасность</h3>
                  <p className="text-industrial-steel">Соблюдаем все требования безопасности при транспортировке и хранении</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-industrial/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" size={24} className="text-industrial" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-industrial-dark mb-2">Оперативная доставка</h3>
                  <p className="text-industrial-steel">Собственный автопарк позволяет осуществлять доставку в кратчайшие сроки</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-industrial/5 to-industrial-steel/5 rounded-2xl p-8 border border-industrial/10">
              <div className="text-center">
                <div className="w-20 h-20 bg-industrial/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Factory" size={32} className="text-industrial" />
                </div>
                <h3 className="text-2xl font-bold text-industrial-dark mb-4">Промышленные масштабы</h3>
                <p className="text-industrial-steel mb-6">
                  Работаем как с крупными промышленными предприятиями, так и с частными клиентами. 
                  Любые объёмы поставок.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-industrial">1000+</div>
                    <div className="text-sm text-industrial-steel">тонн в месяц</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-industrial">50+</div>
                    <div className="text-sm text-industrial-steel">автоцистерн</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-industrial-light/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-industrial-dark mb-4">Наши услуги</h2>
            <p className="text-xl text-industrial-steel max-w-2xl mx-auto">
              Полный спектр услуг по поставке и обслуживанию газового оборудования
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-industrial/10 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-industrial/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Truck" size={24} className="text-industrial" />
                </div>
                <CardTitle className="text-industrial-dark">Доставка газа</CardTitle>
                <CardDescription>
                  Круглосуточная доставка сжиженного газа собственным автопарком
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-industrial-steel">
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-industrial mr-2" />Доставка 24/7</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-industrial mr-2" />Любые объёмы</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-industrial mr-2" />По всей области</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-industrial/10 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-industrial/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Settings" size={24} className="text-industrial" />
                </div>
                <CardTitle className="text-industrial-dark">Монтаж оборудования</CardTitle>
                <CardDescription>
                  Установка и настройка газового оборудования силами специалистов
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-industrial-steel">
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-industrial mr-2" />Сертифицированные специалисты</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-industrial mr-2" />Гарантия на работы</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-industrial mr-2" />Быстрые сроки</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-industrial/10 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-industrial/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Wrench" size={24} className="text-industrial" />
                </div>
                <CardTitle className="text-industrial-dark">Техобслуживание</CardTitle>
                <CardDescription>
                  Регулярное обслуживание и ремонт газового оборудования
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-industrial-steel">
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-industrial mr-2" />Плановые проверки</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-industrial mr-2" />Аварийный ремонт</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-industrial mr-2" />Запчасти в наличии</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-industrial/10 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-industrial/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="FileText" size={24} className="text-industrial" />
                </div>
                <CardTitle className="text-industrial-dark">Документооборот</CardTitle>
                <CardDescription>
                  Оформление всех необходимых документов и разрешений
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-industrial-steel">
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-industrial mr-2" />Лицензии и сертификаты</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-industrial mr-2" />Паспорта безопасности</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-industrial mr-2" />Акты выполненных работ</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-industrial/10 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-industrial/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Headphones" size={24} className="text-industrial" />
                </div>
                <CardTitle className="text-industrial-dark">Консультации</CardTitle>
                <CardDescription>
                  Техническая поддержка и консультации по газовому оборудованию
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-industrial-steel">
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-industrial mr-2" />Подбор оборудования</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-industrial mr-2" />Расчёт потребности</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-industrial mr-2" />Техподдержка 24/7</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-industrial/10 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-industrial/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="BarChart3" size={24} className="text-industrial" />
                </div>
                <CardTitle className="text-industrial-dark">Аналитика</CardTitle>
                <CardDescription>
                  Мониторинг потребления и оптимизация расходов на газ
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-industrial-steel">
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-industrial mr-2" />Учёт потребления</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-industrial mr-2" />Отчёты и статистика</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-industrial mr-2" />Рекомендации по экономии</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section id="safety" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-industrial-dark mb-4">Безопасность превыше всего</h2>
            <p className="text-xl text-industrial-steel max-w-3xl mx-auto">
              Соблюдаем строжайшие стандарты безопасности на всех этапах работы с газом
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="ShieldCheck" size={28} className="text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-industrial-dark mb-2">Сертификация ISO 14001</h3>
                  <p className="text-industrial-steel">Международный стандарт экологического менеджмента</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="HardHat" size={28} className="text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-industrial-dark mb-2">Обучение персонала</h3>
                  <p className="text-industrial-steel">Регулярная аттестация и повышение квалификации сотрудников</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Gauge" size={28} className="text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-industrial-dark mb-2">Контроль качества</h3>
                  <p className="text-industrial-steel">Многоступенчатая система проверки качества газа</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border border-red-100">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="AlertTriangle" size={32} className="text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-industrial-dark mb-4">Аварийная служба</h3>
                <p className="text-industrial-steel mb-6">
                  Круглосуточная аварийная служба готова быстро отреагировать на любую нештатную ситуацию
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white/70 rounded-lg p-4 flex items-center justify-between">
                  <span className="font-medium text-industrial-dark">Время реагирования</span>
                  <Badge className="bg-red-100 text-red-700">до 30 мин</Badge>
                </div>
                <div className="bg-white/70 rounded-lg p-4 flex items-center justify-between">
                  <span className="font-medium text-industrial-dark">Охват территории</span>
                  <Badge className="bg-orange-100 text-orange-700">200+ км</Badge>
                </div>
                <div className="bg-white/70 rounded-lg p-4 flex items-center justify-between">
                  <span className="font-medium text-industrial-dark">Бригад на дежурстве</span>
                  <Badge className="bg-green-100 text-green-700">24/7</Badge>
                </div>
              </div>
              
              <Button className="w-full mt-6 bg-red-600 hover:bg-red-700">
                <Icon name="Phone" size={16} className="mr-2" />
                8-800-555-01-23
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 px-4 bg-industrial-dark text-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Оставьте заявку, и мы свяжемся с вами в течение 15 минут
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Контактная информация</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-industrial/20 rounded-lg flex items-center justify-center">
                      <Icon name="Phone" size={20} className="text-industrial" />
                    </div>
                    <div>
                      <p className="text-gray-300">Телефон</p>
                      <p className="text-xl">8 (800) 555-01-23</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-industrial/20 rounded-lg flex items-center justify-center">
                      <Icon name="Mail" size={20} className="text-industrial" />
                    </div>
                    <div>
                      <p className="text-gray-300">Email</p>
                      <p className="text-xl">info@gazsnab.ru</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-industrial/20 rounded-lg flex items-center justify-center">
                      <Icon name="MapPin" size={20} className="text-industrial" />
                    </div>
                    <div>
                      <p className="text-gray-300">Адрес</p>
                      <p className="text-xl">г. Москва, ул. Промышленная, д. 15</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-industrial/20 rounded-lg flex items-center justify-center">
                      <Icon name="Clock" size={20} className="text-industrial" />
                    </div>
                    <div>
                      <p className="text-gray-300">Режим работы</p>
                      <p className="text-xl">Круглосуточно, без выходных</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-industrial/10 rounded-2xl p-6 border border-industrial/20">
                <h4 className="text-lg font-semibold mb-4">Экстренные ситуации</h4>
                <p className="text-gray-300 mb-4">
                  При обнаружении утечки газа или других аварийных ситуаций немедленно звоните:
                </p>
                <Button className="w-full bg-red-600 hover:bg-red-700">
                  <Icon name="AlertTriangle" size={16} className="mr-2" />
                  Аварийная служба: 8-800-555-01-23
                </Button>
              </div>
            </div>
            
            <Card className="bg-white/10 border-industrial/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Заказать доставку</CardTitle>
                <CardDescription className="text-gray-300">
                  Заполните форму, и мы рассчитаем стоимость доставки
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-300 mb-2">Имя</label>
                    <Input placeholder="Ваше имя" className="bg-white/5 border-gray-600 text-white placeholder:text-gray-400" />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-300 mb-2">Телефон</label>
                    <Input placeholder="+7 (999) 123-45-67" className="bg-white/5 border-gray-600 text-white placeholder:text-gray-400" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Email</label>
                  <Input type="email" placeholder="example@email.com" className="bg-white/5 border-gray-600 text-white placeholder:text-gray-400" />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-300 mb-2">Объём (кг)</label>
                    <Input placeholder="50" className="bg-white/5 border-gray-600 text-white placeholder:text-gray-400" />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-300 mb-2">Тип газа</label>
                    <Input placeholder="Пропан" className="bg-white/5 border-gray-600 text-white placeholder:text-gray-400" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Адрес доставки</label>
                  <Textarea placeholder="Укажите полный адрес доставки" className="bg-white/5 border-gray-600 text-white placeholder:text-gray-400" />
                </div>
                
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Комментарий</label>
                  <Textarea placeholder="Дополнительная информация..." className="bg-white/5 border-gray-600 text-white placeholder:text-gray-400" />
                </div>
                
                <Button className="w-full bg-industrial hover:bg-industrial/90">
                  <Icon name="Send" size={16} className="mr-2" />
                  Отправить заявку
                </Button>
                
                <p className="text-xs text-gray-400 text-center">
                  Нажимая "Отправить заявку", вы соглашаетесь с обработкой персональных данных
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-industrial-dark/95 text-gray-300 py-12 px-4 border-t border-industrial/20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-industrial rounded-full flex items-center justify-center">
                  <Icon name="Flame" size={16} className="text-white" />
                </div>
                <span className="text-xl font-bold text-white">ГазСнаб</span>
              </div>
              <p className="text-gray-400">
                Надёжный поставщик сжиженного газа для промышленности и частных клиентов.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Доставка газа</li>
                <li>Монтаж оборудования</li>
                <li>Техобслуживание</li>
                <li>Консультации</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li>О нас</li>
                <li>Лицензии</li>
                <li>Вакансии</li>
                <li>Новости</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p>8 (800) 555-01-23</p>
                <p>info@gazsnab.ru</p>
                <p>г. Москва, ул. Промышленная, д. 15</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 ГазСнаб. Все права защищены. Лицензия №ABC123456 от 15.03.2020
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}