
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Phone, Check, ChevronRight, Search, Globe, Users, TrendingUp, UserCheck, ShieldCheck, BarChart3, Clock, Target, Database, ScrollText, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServiceBreadcrumb from '@/components/ServiceBreadcrumb';
import { useTheme } from '@/utils/themeContext';
import HoverableSteps from '@/components/HoverableSteps';

const WebDevelopment = () => {
  const { theme } = useTheme();
  
  // Data for the hoverable steps section
  const steps = [
    {
      id: "01",
      title: "Planowanie projektu strony WWW",
      description: "Pierwszym krokiem w tworzeniu strony internetowej jest dokładne zaplanowanie całego projektu, w oparciu o analizę potrzeb i celów biznesowych.",
      features: [
        "Analiza celów biznesowych i potrzeb klienta",
        "Określenie grupy docelowej i buyer personas",
        "Research konkurencji i analiza rynku",
        "Planowanie architektury informacji",
        "Stworzenie planu działania i harmonogramu"
      ]
    },
    {
      id: "02",
      title: "Projektowanie UX/UI",
      description: "Tworzymy prototypy i projekty graficzne strony, dbając o intuicyjny interfejs oraz atrakcyjny wygląd dopasowany do Twojej marki.",
      features: [
        "Tworzenie wireframe'ów i prototypów",
        "Projektowanie ścieżki użytkownika (user flow)",
        "Przygotowanie makiety graficznej strony",
        "Dobór kolorystyki i typografii zgodnej z identyfikacją wizualną",
        "Projektowanie responsywnych widoków dla różnych urządzeń"
      ]
    },
    {
      id: "03",
      title: "Programowanie front-end",
      description: "Przekształcamy projekt graficzny w funkcjonalny kod HTML, CSS i JavaScript, dbając o wysoką jakość i zgodność ze standardami.",
      features: [
        "Kodowanie szablonów HTML5 zgodnych ze standardami W3C",
        "Implementacja stylów CSS z wykorzystaniem nowoczesnych frameworków",
        "Programowanie interakcji i animacji JavaScript",
        "Optymalizacja wydajności ładowania strony",
        "Testy cross-browser dla zapewnienia kompatybilności"
      ]
    },
    {
      id: "04",
      title: "Programowanie back-end",
      description: "Implementujemy funkcjonalności serwera, bazy danych oraz systemu zarządzania treścią, aby Twoja strona działała sprawnie.",
      features: [
        "Konfiguracja serwera i środowiska hostingowego",
        "Implementacja systemu zarządzania treścią (CMS)",
        "Integracja z bazą danych",
        "Tworzenie formularzy i systemu kontaktowego",
        "Implementacja zaawansowanych funkcjonalności (sklep, forum, itp.)"
      ]
    },
    {
      id: "05",
      title: "Testowanie i optymalizacja",
      description: "Przeprowadzamy kompleksowe testy funkcjonalności, użyteczności oraz wydajności, aby zapewnić najwyższą jakość strony.",
      features: [
        "Testy funkcjonalne wszystkich elementów strony",
        "Audyt UX i testy z użytkownikami",
        "Optymalizacja szybkości ładowania",
        "Dostosowanie do wymagań SEO",
        "Testy bezpieczeństwa i ochrony danych"
      ]
    },
    {
      id: "06",
      title: "Wdrożenie i publikacja",
      description: "Uruchamiamy Twoją stronę na serwerze produkcyjnym, przeprowadzamy finalne testy i publikujemy ją w sieci.",
      features: [
        "Konfiguracja środowiska produkcyjnego",
        "Migracja zawartości na serwer docelowy",
        "Konfiguracja domen i certyfikatów SSL",
        "Finalne testy wydajności i bezpieczeństwa",
        "Szkolenie z obsługi systemu CMS"
      ]
    }
  ];

  // Data for the benefits section
  const websiteBenefits = [
    {
      icon: <Globe className="h-[3rem] w-[3rem] text-premium-blue" />,
      title: "Zwiększony zasięg",
      description: "Zwiększa zasięg Twojego biznesu do nowych klientów."
    },
    {
      icon: <Users className="h-[3rem] w-[3rem] text-premium-blue" />,
      title: "Budowanie relacji",
      description: "Buduje trwałe relacje z Twoimi klientami."
    },
    {
      icon: <Search className="h-[3rem] w-[3rem] text-premium-blue" />,
      title: "Analiza użytkowników",
      description: "Daje Ci możliwość analizy zachowań użytkowników."
    },
    {
      icon: <TrendingUp className="h-[3rem] w-[3rem] text-premium-blue" />,
      title: "Pozyskiwanie leadów",
      description: "Pozyskuje dla Ciebie wartościowe leady, aby rozwijać Twój biznes."
    },
    {
      icon: <Sparkles className="h-[3rem] w-[3rem] text-premium-blue" />,
      title: "Przewaga konkurencyjna",
      description: "Zapewnia Ci przewagę konkurencyjną na rynku."
    }
  ];

  // Data for professional website section
  const professionalWebsiteFeatures = [
    {
      icon: <CheckCircle className="h-6 w-6 text-premium-blue" />,
      title: "Pierwsze wrażenie",
      description: "Tworzy pozytywne pierwsze wrażenie jako cyfrowa wizytówka dostępna 24/7."
    },
    {
      icon: <UserCheck className="h-6 w-6 text-premium-blue" />,
      title: "Profesjonalny wizerunek",
      description: "Buduje profesjonalny wizerunek marki, który wyróżnia Cię na tle konkurencji."
    },
    {
      icon: <ScrollText className="h-6 w-6 text-premium-blue" />,
      title: "Jasna komunikacja",
      description: "Przekazuje jasno i strategicznie Twoją ofertę, wartości oraz unikalne korzyści."
    },
    {
      icon: <Target className="h-6 w-6 text-premium-blue" />,
      title: "Prezentacja portfolio",
      description: "Prezentuje portfolio i case studies jako konkretne dowody Twojego doświadczenia."
    },
    {
      icon: <Users className="h-6 w-6 text-premium-blue" />,
      title: "Opinie klientów",
      description: "Zawiera opinie zadowolonych klientów, które budują zaufanie społeczne."
    },
    {
      icon: <Database className="h-6 w-6 text-premium-blue" />,
      title: "Treści eksperckie",
      description: "Dostarcza aktualne treści eksperckie, potwierdzające Twoją wiedzę branżową."
    },
    {
      icon: <Sparkles className="h-6 w-6 text-premium-blue" />,
      title: "Spójność wizualna",
      description: "Zapewnia spójność wizualną zgodną z identyfikacją marki."
    },
    {
      icon: <Phone className="h-6 w-6 text-premium-blue" />,
      title: "Przejrzysty kontakt",
      description: "Oferuje przejrzysty kontakt – pokazuje dostępność i transparentność."
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-premium-blue" />,
      title: "Zgodność z prawem",
      description: "Potwierdza legalność działania poprzez politykę prywatności i regulaminy."
    }
  ];

  // Data for Website Type section
  const websiteTypes = [
    {
      icon: "📄",
      title: "Landing Page",
      description: "Strona o uproszczonej strukturze, skupiona na jednej ofercie, idealna dla kampanii marketingowych."
    },
    {
      icon: "📝",
      title: "Blog firmowy",
      description: "Zwiększa organiczną widoczność w wyszukiwarkach, buduje ekspercki wizerunek marki."
    },
    {
      icon: "🏢",
      title: "Strony firmowe",
      description: "Strona firmowa prezentuje ofertę, wyróżniki na tle konkurencji oraz możliwości zakupu."
    },
    {
      icon: "📅",
      title: "One page",
      description: "Zawiera wszystkie informacje na jednej, przewijanej stronie bez dodatkowych podstron."
    },
    {
      icon: "📚",
      title: "Multipage",
      description: "Rozbudowana witryna z wieloma podstronami, idealna dla firm z szeroką ofertą."
    }
  ];

  // Data for the business growth section
  const businessGrowthFeatures = [
    {
      icon: <ShieldCheck className="h-12 w-12 text-premium-blue" />,
      title: "Wiarygodność marki",
      description: "Budowanie zaufania i rozpoznawalności marki."
    },
    {
      icon: <Globe className="h-12 w-12 text-premium-blue" />,
      title: "Zwiększony zasięg",
      description: "Rozszerzanie publiczności i dotarcie do potencjalnych klientów."
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-premium-blue" />,
      title: "Usprawniona ścieżka zakupowa",
      description: "Ułatwienie procesu zakupu dla wygody klienta."
    },
    {
      icon: <Users className="h-12 w-12 text-premium-blue" />,
      title: "Generowanie leadów",
      description: "Przyciąganie wartościowych potencjalnych klientów do wzrostu."
    },
    {
      icon: <Clock className="h-12 w-12 text-premium-blue" />,
      title: "Dostępność 24/7",
      description: "Zapewnienie całodobowej dostępności i wsparcia."
    },
    {
      icon: <Target className="h-12 w-12 text-premium-blue" />,
      title: "Precyzyjne targetowanie",
      description: "Stosowanie działań reklamowych dla określonych odbiorców."
    },
    {
      icon: <ScrollText className="h-12 w-12 text-premium-blue" />,
      title: "Przejrzyste informacje",
      description: "Dostarczanie przejrzystych informacji o produktach i usługach."
    },
    {
      icon: <Database className="h-12 w-12 text-premium-blue" />,
      title: "Zbieranie danych",
      description: "Gromadzenie cennych informacji analitycznych dla usprawnień."
    }
  ];

  // Data for the steps to create website section
  const websiteCreationSteps = [
    {
      number: "1",
      title: "Analiza branży",
      description: "Przeprowadzamy dogłębną analizę branży i konkurencji, aby zidentyfikować kluczowe elementy."
    },
    {
      number: "2",
      title: "Planowanie treści",
      description: "Tworzymy szczegółowy plan treści z nagłówkami i podtytułami dostosowany do potrzeb SEO."
    },
    {
      number: "3",
      title: "Struktura linków",
      description: "Planujemy nawigację, menu i linkowanie wewnętrzne dla optymalnej struktury strony."
    },
    {
      number: "4",
      title: "Projekt wizualny",
      description: "Opracowujemy unikalny design dopasowany do Twojej marki i celów biznesowych."
    },
    {
      number: "5",
      title: "Tworzenie treści",
      description: "Tworzymy angażujące i zoptymalizowane pod SEO treści, które odpowiadają na potrzeby użytkowników."
    },
    {
      number: "6",
      title: "Optymalizacja SEO",
      description: "Wdrażamy zaawansowane techniki SEO, aby zwiększyć widoczność w wyszukiwarkach."
    },
    {
      number: "7",
      title: "Uruchomienie strony",
      description: "Przenosimy gotową stronę na serwer produkcyjny i przeprowadzamy finalne testy."
    }
  ];

  // Data for the FAQ section
  const faqItems = [
    {
      question: "Jak długo trwa proces tworzenia strony internetowej?",
      answer: "Czas realizacji zależy od złożoności projektu. Prosta strona wizytówkowa może być gotowa w 2-3 tygodnie, bardziej rozbudowane projekty mogą zająć od 4 do 12 tygodni. Na czas realizacji wpływa również szybkość dostarczania przez klienta niezbędnych materiałów i zatwierdzeń."
    },
    {
      question: "Czy będę mógł samodzielnie aktualizować treści na stronie?",
      answer: "Tak, wszystkie nasze strony wyposażamy w łatwy w obsłudze system zarządzania treścią (CMS), który pozwala na samodzielną aktualizację tekstów, zdjęć i innych elementów. Dodatkowo przeprowadzamy szkolenie z obsługi systemu, aby klient mógł swobodnie zarządzać swoją stroną."
    },
    {
      question: "Czy projekty są responsywne?",
      answer: "Wszystkie nasze strony internetowe są w pełni responsywne, co oznacza, że doskonale wyświetlają się na wszystkich urządzeniach - od dużych monitorów komputerowych, przez tablety, po smartfony. Responsywność jest obecnie standardem i kluczowym elementem pozycjonowania w Google."
    },
    {
      question: "Czy zajmujecie się hostingiem i utrzymaniem strony?",
      answer: "Tak, oferujemy kompleksowe usługi hostingowe oraz pakiety utrzymania i wsparcia technicznego. Zapewniamy szybkie i bezpieczne serwery, regularne kopie zapasowe, monitoring wydajności oraz szybkie wsparcie w przypadku jakichkolwiek problemów."
    },
    {
      question: "Czy pomagacie w pozycjonowaniu strony?",
      answer: "Tak, każda nasza strona jest zoptymalizowana pod kątem wyszukiwarek (SEO) już na etapie projektowania i kodowania. Dodatkowo oferujemy zaawansowane usługi pozycjonowania i content marketingu, które pomagają osiągnąć wysokie pozycje w wynikach wyszukiwania Google."
    }
  ];

  // Data for the industry types section
  const industryTypes = [
    {
      icon: "🏢",
      name: "Nieruchomości",
      description: "Strony dla deweloperów",
    },
    {
      icon: "🍽️",
      name: "Gastronomia",
      description: "Strony dla restauracji",
    },
    {
      icon: "🏫",
      name: "Szkolnictwo",
      description: "Strony dla szkół i przedszkoli",
    },
    {
      icon: "⚖️",
      name: "Prawo",
      description: "Strony dla prawników i adwokatów",
    },
    {
      icon: "✈️",
      name: "Turystyka",
      description: "Strony dla hoteli i biur podróży",
    },
    {
      icon: "🎨",
      name: "Sztuka",
      description: "Strony dla fotografów i artystów",
    },
    {
      icon: "🏥",
      name: "Medycyna",
      description: "Strony dla lekarzy",
    },
    {
      icon: "💼",
      name: "Firmy",
      description: "Strony B2B",
    },
    {
      icon: "🏛️",
      name: "Architektura",
      description: "Strony dla architektów",
    }
  ];

  // Data for the locations section
  const locations = [
    { name: "Katowice", icon: "🏙️" },
    { name: "Kraków", icon: "🏰" },
    { name: "Białystok", icon: "🌆" },
    { name: "Częstochowa", icon: "🌇" },
    { name: "Dąbrowa Górnicza", icon: "🏭" },
    { name: "Gdańsk", icon: "⚓" },
    { name: "Gdynia", icon: "🌊" },
    { name: "Gliwice", icon: "🌉" },
    { name: "Krosno", icon: "🏘️" }
  ];

  // Data for the why technology matters section
  const technologyImportance = [
    {
      icon: <BarChart3 className="h-12 w-12 text-premium-blue" />,
      title: "Wydajność",
      description: "Szybkość ładowania i działania strony internetowej."
    },
    {
      icon: <ShieldCheck className="h-12 w-12 text-premium-blue" />,
      title: "Bezpieczeństwo",
      description: "Ochrona przed atakami i włamaniami."
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-premium-blue" />,
      title: "Skalowalność",
      description: "Możliwość rozbudowy wraz z rozwojem firmy."
    }
  ];

  return (
    <div className="min-h-screen bg-premium-dark">
      <Navbar />
      
      <ServiceBreadcrumb currentPage="Tworzenie stron WWW" currentPath="/tworzenie-stron-www" />
      
      {/* Hero Section */}
      <section className="pt-20 pb-20 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-10 right-10 w-80 h-80 bg-premium-purple/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-12 left-10 w-80 h-60 bg-premium-blue/20 rounded-full blur-[100px]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="w-full lg:w-1/2 space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold">
                Profesjonalne <span className="bg-premium-gradient text-transparent bg-clip-text">strony internetowe</span> dla Twojego biznesu
              </h1>
              <p className="text-xl text-premium-light/70">
                Tworzymy nowoczesne, responsywne i szybkie strony internetowe, które przyciągają klientów i zwiększają konwersję.
              </p>
              
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-premium-purple" size={20} />
                  <span>Przyjazne dla wyszukiwarek (SEO)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-premium-purple" size={20} />
                  <span>Dopasowane do urządzeń mobilnych</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-premium-purple" size={20} />
                  <span>Intuicyjny panel zarządzania treścią</span>
                </div>
              </div>
              
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button className="bg-premium-gradient hover:opacity-90 transition-opacity text-white">
                    Zamów bezpłatną wycenę
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
                <Button variant="outline" className="border-premium-purple/50 text-black dark:text-premium-light hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black">
                  Zobacz realizacje
                </Button>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute -inset-0.5 bg-premium-gradient rounded-xl blur-sm opacity-50"></div>
              <img
                src="https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                alt="Projektowanie stron internetowych"
                className="w-full h-auto rounded-lg relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* O czym się dowiesz sekcja */}
      <section className="py-12 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="bg-premium-dark/60 border border-white/10 rounded-xl p-8">
            <h2 className="text-2xl lg:text-3xl font-bold mb-8">O czym się dowiesz z tego artykułu</h2>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <ChevronRight size={20} className="text-premium-purple" />
                <span>Tworzenie stron WWW w IDZ.TECH</span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight size={20} className="text-premium-purple" />
                <span>Dlaczego nowoczesna strona internetowa to podstawa rozwoju Twojej działalności?</span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight size={20} className="text-premium-purple" />
                <span>Jakie rodzaje stron WWW oferujemy w IDZ.TECH?</span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight size={20} className="text-premium-purple" />
                <span>Jak przebiega tworzenie stron WWW w IDZ.TECH?</span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight size={20} className="text-premium-purple" />
                <span>Ile kosztuje stworzenie strony internetowej i od czego zależy cena?</span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight size={20} className="text-premium-purple" />
                <span>Co zyskujesz, tworząc stronę internetową z IDZ.TECH?</span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight size={20} className="text-premium-purple" />
                <span>Czy da się samemu zrobić stronę internetową dla biznesu?</span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight size={20} className="text-premium-purple" />
                <span>Jak rozpocząć współpracę z IDZ.TECH przy tworzeniu strony WWW?</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-premium-purple/20 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-premium-blue/20 rounded-full blur-[100px] -z-10"></div>
        
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-premium-purple font-medium">Nasza oferta</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-3 mb-6">
              Co możemy dla Ciebie zrobić?
            </h2>
            <p className="text-xl text-premium-light/70">
              Oferujemy kompleksowe usługi związane z tworzeniem stron internetowych, od projektu po wdrożenie i optymalizację.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-premium-dark/60 border border-white/10 rounded-xl p-6 transition-transform duration-300">
              <h3 className="text-2xl font-semibold mb-4">Projektowanie stron internetowych</h3>
              <p className="text-premium-light/70 mb-4">
                Tworzymy unikalne projekty graficzne, które odzwierciedlają charakter Twojej marki i przyciągają uwagę klientów.
              </p>
              <Link to="/kontakt">
                <Button variant="secondary" className="w-full">
                  Dowiedz się więcej
                </Button>
              </Link>
            </div>
            
            {/* Service Card 2 */}
            <div className="bg-premium-dark/60 border border-white/10 rounded-xl p-6 transition-transform duration-300">
              <h3 className="text-2xl font-semibold mb-4">Tworzenie stron responsywnych</h3>
              <p className="text-premium-light/70 mb-4">
                Zapewniamy, że Twoja strona będzie wyglądać i działać doskonale na każdym urządzeniu, od smartfonów po komputery.
              </p>
              <Link to="/kontakt">
                <Button variant="secondary" className="w-full">
                  Dowiedz się więcej
                </Button>
              </Link>
            </div>
            
            {/* Service Card 3 */}
            <div className="bg-premium-dark/60 border border-white/10 rounded-xl p-6 transition-transform duration-300">
              <h3 className="text-2xl font-semibold mb-4">Optymalizacja SEO</h3>
              <p className="text-premium-light/70 mb-4">
                Dbamy o to, aby Twoja strona była widoczna w wynikach wyszukiwania Google, co przekłada się na większy ruch i więcej klientów.
              </p>
              <Link to="/kontakt">
                <Button variant="secondary" className="w-full">
                  Dowiedz się więcej
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Technology Stack Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-10 right-10 w-80 h-80 bg-premium-purple/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-12 left-10 w-80 h-60 bg-premium-blue/20 rounded-full blur-[100px]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-premium-purple font-medium">Technologie</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-3 mb-6">
              W czym tworzymy strony internetowe?
            </h2>
            <p className="text-xl text-premium-light/70">
              Korzystamy z najnowszych technologii, aby zapewnić Ci szybką, bezpieczną i funkcjonalną stronę internetową.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 justify-items-center">
            {/* Technology Logos - Updated to use colorful logos */}
            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                alt="JavaScript"
                className="h-12 w-auto transition-all duration-300"
              />
              <p className="text-sm text-premium-light/70 mt-2 text-center">JavaScript</p>
            </div>
            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
                alt="CSS3"
                className="h-12 w-auto transition-all duration-300"
              />
              <p className="text-sm text-premium-light/70 mt-2 text-center">CSS3</p>
            </div>
            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png"
                alt="HTML5"
                className="h-12 w-auto transition-all duration-300"
              />
              <p className="text-sm text-premium-light/70 mt-2 text-center">HTML5</p>
            </div>
            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
                alt="TypeScript"
                className="h-12 w-auto transition-all duration-300"
              />
              <p className="text-sm text-premium-light/70 mt-2 text-center">TypeScript</p>
            </div>
            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                alt="React"
                className="h-12 w-auto transition-all duration-300"
              />
              <p className="text-sm text-premium-light/70 mt-2 text-center">React</p>
            </div>
            <div>
              <img
                src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg"
                alt="Tailwind CSS"
                className="h-12 w-auto transition-all duration-300"
              />
              <p className="text-sm text-premium-light/70 mt-2 text-center">Tailwind CSS</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Importance Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-premium-purple font-medium">Technologie</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-3 mb-6">
              Dlaczego dobór technologii ma znaczenie?
            </h2>
            <p className="text-xl text-premium-light/70">
              Wybór odpowiednich technologii wpływa bezpośrednio na funkcjonalność, bezpieczeństwo i wydajność Twojej strony.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {technologyImportance.map((item, index) => (
              <div key={index} className={`${theme === 'light' ? 'bg-white shadow-lg' : 'bg-black/40 border border-white/10'} rounded-xl p-8 text-center`}>
                <div className="flex justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className={theme === 'light' ? 'text-gray-600' : 'text-gray-300'}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Steps Section */}
      <section className="py-20 relative overflow-hidden bg-premium-dark/40">
        <div className="absolute top-0 right-0 w-96 h-96 bg-premium-blue/20 rounded-full blur-[120px] -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-premium-purple/20 rounded-full blur-[120px] -z-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-premium-purple font-medium">Nasz proces</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-3 mb-6">
              Dowiedz się więcej o tworzeniu stron www
            </h2>
            <p className="text-xl text-premium-light/70">
              Poznaj szczegółowo etapy realizacji projektu strony internetowej - od planowania do wdrożenia.
            </p>
          </div>
          
          <HoverableSteps steps={steps} className="mt-10" />
        </div>
      </section>

      {/* Benefits of having a website section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-premium-purple/20 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-premium-blue/20 rounded-full blur-[100px] -z-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-premium-purple font-medium">Korzyści</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-3 mb-6">
              Korzyści z własnej strony internetowej
            </h2>
            <p className="text-xl text-premium-light/70">
              Posiadanie profesjonalnej strony WWW to inwestycja, która przynosi wymierne korzyści dla Twojego biznesu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {websiteBenefits.map((benefit, index) => (
              <div key={index} className={`${theme === 'light' ? 'bg-white shadow-lg' : 'bg-black border border-white/10'} rounded-xl p-8 text-center flex flex-col items-center hover:transform hover:scale-105 transition-transform duration-300`}>
                <div className="mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className={theme === 'light' ? 'text-gray-600' : 'text-gray-300'}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Website Features Section */}
      <section className="py-20 relative overflow-hidden bg-premium-dark/40">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-10 right-10 w-80 h-80 bg-premium-purple/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-12 left-10 w-80 h-60 bg-premium-blue/20 rounded-full blur-[100px]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-premium-purple font-medium">Wiarygodność</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-3 mb-6">
              Co daje profesjonalna strona WWW?
            </h2>
            <p className="text-xl text-premium-light/70">
              Dowiedz się, jak dobrze zaprojektowana strona internetowa zwiększa wiarygodność Twojej firmy w oczach klientów.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {professionalWebsiteFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="min-w-[40px] mt-1">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{feature.title}</h3>
                  <p className={theme === 'light' ? 'text-gray-600 text-sm' : 'text-gray-300 text-sm'}>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Growth Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-premium-blue/20 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-premium-purple/20 rounded-full blur-[100px] -z-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-premium-purple font-medium">Rozwój biznesu</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-3 mb-6">
              Profesjonalna strona internetowa zapewnia wzrost sprzedaży!
            </h2>
            <p className="text-xl text-premium-light/70">
              Odkryj, jak profesjonalna strona WWW przekłada się na konkretne wyniki biznesowe i wzrost sprzedaży.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {businessGrowthFeatures.map((feature, index) => (
              <div key={index} className={`${theme === 'light' ? 'bg-white shadow-lg' : 'bg-black border border-white/10'} rounded-xl p-6 text-center`}>
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-300'} text-sm`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Website Types Section */}
      <section className="py-20 relative overflow-hidden bg-premium-dark/40">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-10 right-10 w-80 h-80 bg-premium-purple/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-12 left-10 w-80 h-60 bg-premium-blue/20 rounded-full blur-[100px]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-premium-purple font-medium">Rodzaje stron</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-3 mb-6">
              Rodzaje stron internetowych
            </h2>
            <p className="text-xl text-premium-light/70">
              W IDZ.TECH tworzymy różne typy stron dostosowane do indywidualnych potrzeb biznesowych.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {websiteTypes.map((type, index) => (
              <div 
                key={index} 
                className={`${theme === 'light' ? 'bg-white shadow-lg' : 'bg-black border border-white/10'} rounded-xl p-6 text-center w-full md:w-[200px]`}
              >
                <div className="text-4xl mb-4">{type.icon}</div>
                <h3 className="font-bold mb-3">{type.title}</h3>
                <p className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-300'} text-sm`}>
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Types Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-premium-blue/20 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-premium-purple/20 rounded-full blur-[100px] -z-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-premium-purple font-medium">Branże</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-3 mb-6">
              Tworzenie stron internetowych dla różnych branż
            </h2>
            <p className="text-xl text-premium-light/70">
              Tworzymy dedykowane strony WWW dla różnorodnych branż, dostosowane do ich specyficznych potrzeb.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              <div className={`${theme === 'light' ? 'bg-black text-white' : 'bg-black border border-white/20 text-white'} rounded-xl p-6 text-center mb-8`}>
                <div className="text-3xl mb-2">🖥️</div>
                <h3 className="font-bold text-lg">Tworzenie<br/>Stron<br/>Internetowych</h3>
              </div>

              <div className="flex flex-wrap justify-center gap-4 w-full">
                {industryTypes.map((industry, index) => (
                  <div 
                    key={index} 
                    className={`${theme === 'light' ? 'bg-black text-white' : 'bg-black border border-white/20 text-white'} rounded-xl p-4 text-center flex flex-col items-center w-[150px]`}
                  >
                    <div className="text-2xl mb-2">{industry.icon}</div>
                    <h3 className="font-bold text-sm mb-1">{industry.name}</h3>
                    <p className="text-xs opacity-80">{industry.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 relative overflow-hidden bg-premium-dark/40">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-10 right-10 w-80 h-80 bg-premium-purple/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-12 left-10 w-80 h-60 bg-premium-blue/20 rounded-full blur-[100px]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-premium-purple font-medium">Lokalizacje</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-3 mb-6">
              Tworzenie stron WWW w IDZ.TECH
            </h2>
            <p className="text-xl text-premium-light/70">
              Świadczymy usługi tworzenia stron internetowych w całej Polsce.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              <div className={`${theme === 'light' ? 'bg-black text-white' : 'bg-black border border-white/20 text-white'} rounded-xl p-6 text-center mb-8`}>
                <div className="text-3xl mb-2">🖥️</div>
                <h3 className="font-bold text-lg">IDZ.TECH</h3>
              </div>

              <div className="flex flex-wrap justify-center gap-4 w-full">
                {locations.map((location, index) => (
                  <div 
                    key={index} 
                    className={`${theme === 'light' ? 'bg-black text-white' : 'bg-black border border-white/20 text-white'} rounded-xl p-4 text-center w-[130px]`}
                  >
                    <div className="text-2xl mb-2">{location.icon}</div>
                    <h3 className="font-bold text-sm">{location.name}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Website Creation Steps Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-premium-blue/20 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-premium-purple/20 rounded-full blur-[100px] -z-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-premium-purple font-medium">Proces tworzenia</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-3 mb-6">
              Kroki do stworzenia strony internetowej
            </h2>
            <p className="text-xl text-premium-light/70">
              Poznaj etapy tworzenia skutecznej strony internetowej, która będzie wspierać Twój biznes.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Steps display */}
              <div className="hidden md:block h-3 bg-gradient-to-r from-premium-blue to-premium-purple absolute top-1/2 left-0 -translate-y-1/2 w-full rounded-full"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-7 gap-8 relative">
                {websiteCreationSteps.map((step, index) => (
                  <div key={index} className="flex flex-col items-center relative">
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center z-10 text-white font-bold text-lg ${theme === 'light' ? 'bg-premium-gradient' : 'bg-premium-gradient'}`}>
                      {step.number}
                    </div>
                    
                    <div className={`mt-6 p-4 rounded-xl text-center ${theme === 'light' ? 'bg-white shadow-lg' : 'bg-premium-dark/60 border border-white/10'}`}>
                      <h3 className="font-bold mb-2">{step.title}</h3>
                      <p className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative overflow-hidden bg-premium-dark/40">
        <div className="absolute top-0 right-0 w-96 h-96 bg-premium-purple/20 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-premium-blue/20 rounded-full blur-[100px] -z-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-premium-purple font-medium">FAQ</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-3 mb-6">
              Najczęściej zadawane pytania
            </h2>
            <p className="text-xl text-premium-light/70">
              Odpowiadamy na najczęstsze pytania dotyczące procesu tworzenia stron internetowych.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {faqItems.map((item, index) => (
              <div 
                key={index} 
                className={`rounded-xl p-6 ${theme === 'light' ? 'bg-white shadow-md' : 'bg-premium-dark/60 border border-white/10'}`}
              >
                <h3 className={`text-xl font-semibold mb-3 ${theme === 'light' ? 'text-black' : 'text-white'}`}>{item.question}</h3>
                <p className={theme === 'light' ? 'text-gray-600' : 'text-gray-300'}>{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-premium-gradient opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-premium-purple/30 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-premium-blue/30 rounded-full blur-[100px] -z-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-premium-purple font-medium">Zacznijmy!</span>
            <h2 className="text-3xl lg:text-5xl font-bold mt-3 mb-6">
              Stwórzmy razem Twoją nową stronę internetową
            </h2>
            <p className="text-premium-light/70 text-lg mb-8 max-w-2xl mx-auto">
              Skontaktuj się z nami już dziś, aby omówić szczegóły Twojego projektu i otrzymać bezpłatną wycenę.
            </p>
            <Link to="/contact">
              <Button className="bg-premium-gradient hover:opacity-90 transition-opacity text-white rounded-full px-8 py-6">
                Darmowa konsultacja
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default WebDevelopment;
