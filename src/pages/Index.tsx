
import { useState } from 'react';
import { Calendar, Clock, Star, Phone, MapPin, Instagram, Facebook, Globe, Settings } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import BookingForm from '@/components/BookingForm';
import TestimonialCard from '@/components/TestimonialCard';
import GallerySection from '@/components/GallerySection';
import AdminPanel from '@/components/AdminPanel';

const Index = () => {
  const [showBooking, setShowBooking] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  const [language, setLanguage] = useState('mk');
  const [nonWorkingDays, setNonWorkingDays] = useState<string[]>([]);

  const translations = {
    mk: {
      salonName: "Bella Salon",
      tagline: "Убавина и елеганција",
      nav: {
        services: "Услуги",
        gallery: "Галерија",
        testimonials: "Мислења",
        contact: "Контакт",
        bookAppointment: "Закажи термин",
        admin: "Администрација"
      },
      hero: {
        title: "Твојата убавина",
        subtitle: "е наша страст",
        description: "Добредојде во Bella Salon - место каде што традицијата се среќава со иновацијата. Нашиот тим од стручни фризери ќе ти помогне да ја откриеш твојата најдобра верзија.",
        bookNow: "Закажи термин",
        viewServices: "Погледни услуги",
        happyClients: "задоволни клиенти"
      },
      services: {
        title: "Наши услуги",
        description: "Од секојдневни фризури до специјални настани - ние сме тука за да ја остварите вашата визија"
      },
      testimonials: {
        title: "Што велат нашите клиенти",
        description: "Вашето задоволство е наша најголема награда"
      },
      contact: {
        title: "Контактирај не",
        description: "Сакаме да те видиме во нашиот салон!",
        address: "Адреса",
        phone: "Телефон",
        hours: "Работно време",
        quickBooking: "Брза резервација",
        bookNow: "Закажи сега",
        callUs: "Или нè повикај на +389 70 123 456",
        closedNotice: "Салонот е затворен"
      },
      footer: {
        description: "Убавина и елеганција во срцето на Скопје",
        rights: "Сите права се задржани."
      }
    },
    en: {
      salonName: "Bella Salon",
      tagline: "Beauty and elegance",
      nav: {
        services: "Services",
        gallery: "Gallery",
        testimonials: "Reviews",
        contact: "Contact",
        bookAppointment: "Book Appointment",
        admin: "Administration"
      },
      hero: {
        title: "Your beauty",
        subtitle: "is our passion",
        description: "Welcome to Bella Salon - where tradition meets innovation. Our team of professional stylists will help you discover your best version.",
        bookNow: "Book Appointment",
        viewServices: "View Services",
        happyClients: "happy clients"
      },
      services: {
        title: "Our Services",
        description: "From everyday hairstyles to special occasions - we're here to bring your vision to life"
      },
      testimonials: {
        title: "What our clients say",
        description: "Your satisfaction is our greatest reward"
      },
      contact: {
        title: "Contact Us",
        description: "We'd love to see you at our salon!",
        address: "Address",
        phone: "Phone",
        hours: "Working Hours",
        quickBooking: "Quick Booking",
        bookNow: "Book Now",
        callUs: "Or call us at +389 70 123 456",
        closedNotice: "Salon is closed"
      },
      footer: {
        description: "Beauty and elegance in the heart of Skopje",
        rights: "All rights reserved."
      }
    },
    sq: {
      salonName: "Bella Salon",
      tagline: "Bukuria dhe eleganca",
      nav: {
        services: "Shërbime",
        gallery: "Galeria",
        testimonials: "Vlerësime",
        contact: "Kontakt",
        bookAppointment: "Rezervo",
        admin: "Administrimi"
      },
      hero: {
        title: "Bukuria jote",
        subtitle: "është pasioni ynë",
        description: "Mirë se vini në Bella Salon - vendi ku tradita takohet me inovacionin. Ekipi ynë i stilistëve profesionalë do t'ju ndihmojë të zbuloni versionin tuaj më të mirë.",
        bookNow: "Rezervo Termin",
        viewServices: "Shiko Shërbimet",
        happyClients: "klientë të kënaqur"
      },
      services: {
        title: "Shërbimet Tona",
        description: "Nga flokët e përditshëm deri te rastet e veçanta - jemi këtu për të realizuar vizionin tuaj"
      },
      testimonials: {
        title: "Çfarë thonë klientët tanë",
        description: "Kënaqësia juaj është shpërblimi ynë më i madh"
      },
      contact: {
        title: "Na Kontaktoni",
        description: "Do të donim t'ju shohim në salonin tonë!",
        address: "Adresa",
        phone: "Telefoni",
        hours: "Orari i Punës",
        quickBooking: "Rezervim i Shpejtë",
        bookNow: "Rezervo Tani",
        callUs: "Ose na telefononi në +389 70 123 456",
        closedNotice: "Saloni është i mbyllur"
      },
      footer: {
        description: "Bukuria dhe eleganca në zemër të Shkupit",
        rights: "Të gjitha të drejtat e rezervuara."
      }
    }
  };

  const t = translations[language as keyof typeof translations];

  const services = [
    {
      title: language === 'mk' ? "Фризура и стилизирање" : language === 'en' ? "Hair Styling" : "Stilizimi i Flokëve",
      description: language === 'mk' ? "Професионално фризирање и стилизирање според вашите желби" : language === 'en' ? "Professional hair styling according to your wishes" : "Stilizim profesional i flokëve sipas dëshirave tuaja",
      price: "1.500 ден",
      duration: "60 мин",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=300&fit=crop"
    },
    {
      title: language === 'mk' ? "Боење на коса" : language === 'en' ? "Hair Coloring" : "Ngjyrosja e Flokëve",
      description: language === 'mk' ? "Премиум боење со најквалитетни производи" : language === 'en' ? "Premium coloring with highest quality products" : "Ngjyrim premium me produktet më cilësore",
      price: "2.500 ден",
      duration: "120 мин",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=300&fit=crop"
    },
    {
      title: language === 'mk' ? "Рефлекси и мелири" : language === 'en' ? "Highlights & Balayage" : "Reflekse dhe Balayage",
      description: language === 'mk' ? "Модерни техники за совршени рефлекси" : language === 'en' ? "Modern techniques for perfect highlights" : "Teknika moderne për reflekse të përsosura",
      price: "3.000 ден",
      duration: "150 мин",
      image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=300&fit=crop"
    },
    {
      title: language === 'mk' ? "Кератинска терапија" : language === 'en' ? "Keratin Treatment" : "Trajtimi me Keratin",
      description: language === 'mk' ? "Нега и регенерација на косата" : language === 'en' ? "Hair care and regeneration" : "Kujdesi dhe rigjenerimi i flokëve",
      price: "4.000 ден",
      duration: "180 мин",
      image: "https://images.unsplash.com/photo-1559599101-f09722fb4948?w=400&h=300&fit=crop"
    },
    {
      title: language === 'mk' ? "Свечени фризури" : language === 'en' ? "Special Occasion Styles" : "Stilet për Raste të Veçanta",
      description: language === 'mk' ? "Елегантни фризури за специјални настани" : language === 'en' ? "Elegant hairstyles for special events" : "Flokë elegantë për ngjarje të veçanta",
      price: "2.000 ден",
      duration: "90 мин",
      image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400&h=300&fit=crop"
    },
    {
      title: language === 'mk' ? "Машко шишање" : language === 'en' ? "Men's Haircuts" : "Prerje për Meshkuj",
      description: language === 'mk' ? "Модерни машки фризури" : language === 'en' ? "Modern men's hairstyles" : "Flokë modernë për meshkuj",
      price: "800 ден",
      duration: "30 мин",
      image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&h=300&fit=crop"
    }
  ];

  const testimonials = [
    {
      name: language === 'mk' ? "Марија Петковска" : language === 'en' ? "Maria Petkovska" : "Maria Petkovska",
      text: language === 'mk' ? "Секогаш излегувам од салонот како нова жена! Сите се многу професионални и внимателни." : language === 'en' ? "I always leave the salon feeling like a new woman! Everyone is very professional and attentive." : "Gjithmonë dal nga saloni duke u ndjerë si një grua e re! Të gjithë janë shumë profesionalë dhe të kujdesshëm.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616c9a9a24b?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: language === 'mk' ? "Анастасија Николовска" : language === 'en' ? "Anastasija Nikolovska" : "Anastasija Nikolovska",
      text: language === 'mk' ? "Најдобриот салон во градот! Секогаш добивам комплименти за мојата фризура." : language === 'en' ? "The best salon in the city! I always get compliments on my hairstyle." : "Saloni më i mirë në qytet! Gjithmonë marr komplimente për flokët e mi.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: language === 'mk' ? "Елена Стојановска" : language === 'en' ? "Elena Stojanovska" : "Elena Stojanovska",
      text: language === 'mk' ? "Превосходна услуга и атмосфера. Се чувствувам како принцеза тука!" : language === 'en' ? "Excellent service and atmosphere. I feel like a princess here!" : "Shërbim dhe atmosferë të shkëlqyer. Ndihem si një princeshë këtu!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const isNonWorkingDay = (date: Date) => {
    const dateString = date.toISOString().split('T')[0];
    return nonWorkingDays.includes(dateString);
  };

  const today = new Date();
  const isTodayClosed = isNonWorkingDay(today);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-rose-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">Б</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                {t.salonName}
              </h1>
              <p className="text-sm text-gray-600">{t.tagline}</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-rose-600 transition-colors">{t.nav.services}</a>
            <a href="#gallery" className="text-gray-700 hover:text-rose-600 transition-colors">{t.nav.gallery}</a>
            <a href="#testimonials" className="text-gray-700 hover:text-rose-600 transition-colors">{t.nav.testimonials}</a>
            <a href="#contact" className="text-gray-700 hover:text-rose-600 transition-colors">{t.nav.contact}</a>
            
            {/* Beautiful Language Switcher */}
            <div className="relative group">
              <button className="flex items-center space-x-2 bg-gradient-to-r from-rose-100 to-pink-100 hover:from-rose-200 hover:to-pink-200 text-rose-700 px-4 py-2 rounded-full border border-rose-200 transition-all duration-300 shadow-sm hover:shadow-md">
                <Globe size={16} className="text-rose-500" />
                <span className="font-medium text-sm">
                  {language === 'mk' ? '🇲🇰 МК' : language === 'en' ? '🇬🇧 EN' : '🇦🇱 SQ'}
                </span>
              </button>
              <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-rose-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <button 
                  onClick={() => setLanguage('mk')}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-rose-50 first:rounded-t-lg transition-colors ${language === 'mk' ? 'bg-rose-50 text-rose-700 font-medium' : 'text-gray-700'}`}
                >
                  🇲🇰 Македонски
                </button>
                <button 
                  onClick={() => setLanguage('en')}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-rose-50 transition-colors ${language === 'en' ? 'bg-rose-50 text-rose-700 font-medium' : 'text-gray-700'}`}
                >
                  🇬🇧 English
                </button>
                <button 
                  onClick={() => setLanguage('sq')}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-rose-50 last:rounded-b-lg transition-colors ${language === 'sq' ? 'bg-rose-50 text-rose-700 font-medium' : 'text-gray-700'}`}
                >
                  🇦🇱 Shqip
                </button>
              </div>
            </div>

            {/* Admin Button */}
            <button 
              onClick={() => setShowAdmin(true)}
              className="text-gray-500 hover:text-rose-600 transition-colors p-2 rounded-full hover:bg-rose-50"
              title={t.nav.admin}
            >
              <Settings size={20} />
            </button>
            
            <button 
              onClick={() => setShowBooking(true)}
              className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-6 py-2 rounded-full hover:from-rose-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {t.nav.bookAppointment}
            </button>
          </nav>
        </div>
      </header>

      {/* Non-Working Day Notice */}
      {isTodayClosed && (
        <div className="bg-rose-100 border-l-4 border-rose-500 text-rose-700 p-4 text-center">
          <p className="font-semibold">⚠️ {t.contact.closedNotice}</p>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 bg-gradient-to-r from-rose-100 via-pink-50 to-purple-100">
        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                  {t.hero.title}
                </span>
                <br />
                <span className="text-gray-800">{t.hero.subtitle}</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {t.hero.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button 
                  onClick={() => setShowBooking(true)}
                  disabled={isTodayClosed}
                  className={`px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl ${
                    isTodayClosed 
                      ? 'bg-gray-400 text-white cursor-not-allowed' 
                      : 'bg-gradient-to-r from-rose-500 to-pink-500 text-white hover:from-rose-600 hover:to-pink-600'
                  }`}
                >
                  <Calendar className="inline-block mr-2" size={20} />
                  {t.hero.bookNow}
                </button>
                <button className="border-2 border-rose-300 text-rose-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-rose-50 transition-all">
                  {t.hero.viewServices}
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=700&fit=crop&crop=center" 
                  alt="Hair Salon"
                  className="rounded-3xl shadow-2xl w-full object-cover"
                />
                <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full flex items-center justify-center">
                      <Star className="text-white fill-current" size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-gray-800">500+ {t.hero.happyClients}</p>
                      <p className="text-sm text-gray-600">5.0 ⭐⭐⭐⭐⭐</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-rose-200 to-pink-200 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-20 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
              {t.services.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.services.description}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <GallerySection />

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-r from-rose-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
              {t.testimonials.title}
            </h2>
            <p className="text-xl text-gray-600">
              {t.testimonials.description}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
              {t.contact.title}
            </h2>
            <p className="text-xl text-gray-600">
              {t.contact.description}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full flex items-center justify-center">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{t.contact.address}</h3>
                  <p className="text-gray-600">ул. Македонија 123, Скопје</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full flex items-center justify-center">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{t.contact.phone}</h3>
                  <p className="text-gray-600">+389 70 123 456</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full flex items-center justify-center">
                  <Clock className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{t.contact.hours}</h3>
                  <p className="text-gray-600">
                    {language === 'mk' ? "Пон-Сабота: 09:00-20:00" : language === 'en' ? "Mon-Sat: 09:00-20:00" : "Hën-Sht: 09:00-20:00"}
                  </p>
                  <p className="text-gray-600">
                    {language === 'mk' ? "Недела: 10:00-18:00" : language === 'en' ? "Sunday: 10:00-18:00" : "E diel: 10:00-18:00"}
                  </p>
                </div>
              </div>
              <div className="flex space-x-4">
                <button className="w-12 h-12 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full flex items-center justify-center hover:from-rose-500 hover:to-pink-600 transition-all">
                  <Instagram className="text-white" size={20} />
                </button>
                <button className="w-12 h-12 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full flex items-center justify-center hover:from-rose-500 hover:to-pink-600 transition-all">
                  <Facebook className="text-white" size={20} />
                </button>
              </div>
            </div>
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">{t.contact.quickBooking}</h3>
              <button 
                onClick={() => setShowBooking(true)}
                disabled={isTodayClosed}
                className={`w-full py-4 rounded-2xl text-lg font-semibold transition-all transform hover:scale-105 shadow-lg ${
                  isTodayClosed 
                    ? 'bg-gray-400 text-white cursor-not-allowed' 
                    : 'bg-gradient-to-r from-rose-500 to-pink-500 text-white hover:from-rose-600 hover:to-pink-600'
                }`}
              >
                {t.contact.bookNow}
              </button>
              <p className="mt-4 text-sm text-gray-600 text-center">
                {t.contact.callUs}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">Б</span>
              </div>
              <h3 className="text-2xl font-bold">{t.salonName}</h3>
            </div>
            <p className="text-gray-400 mb-4">
              {t.footer.description}
            </p>
            <p className="text-sm text-gray-500">
              © 2024 Bella Salon. {t.footer.rights}
            </p>
          </div>
        </div>
      </footer>

      {/* Booking Modal */}
      {showBooking && (
        <BookingForm onClose={() => setShowBooking(false)} />
      )}

      {/* Admin Panel */}
      {showAdmin && (
        <AdminPanel 
          onClose={() => setShowAdmin(false)}
          nonWorkingDays={nonWorkingDays}
          setNonWorkingDays={setNonWorkingDays}
        />
      )}
    </div>
  );
};

export default Index;
