import { NavLink, Route, Routes } from "react-router-dom";
import {
  Disc3,
  Instagram,
  Mail,
  ArrowUpRight,
  Globe,
  Wrench,
  LayoutDashboard,
  ShoppingBag,
  ChevronRight,
  Check,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import logo from "./assets/logo.png";
import heroBanner from "./assets/hero-banner.png";
import portfolioPreview from "./assets/portfolio-preview.png";

const contactLinks = {
  discord: "https://discord.com/users/794594669443022888",
  instagram: "https://instagram.com/nicogmg.websiteservice",
  mail: "mailto:info@nicogmg-preview.com",
};

const navItems = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Preise", to: "/pricing" },
  { label: "Kontakt", to: "/contact" },
];

const stats = [
  { label: "Fokus", value: "Esports" },
  { label: "Leistung", value: "Design + Hosting" },
  { label: "Support", value: "Laufend" },
  { label: "Reaktionszeit", value: "Schnell" },
];

const services = [
  {
    icon: Globe,
    title: "Webdesign",
    text: "Moderne und professionelle Websites für Esports Teams, Orgas und Communities – individuell auf euren Stil angepasst.",
  },
  {
    icon: LayoutDashboard,
    title: "Funktionen",
    text: "Teams, Spielerprofile, News, Partner, Shop, Bewerbungs- oder Kontaktseiten – alles sauber strukturiert und leicht erweiterbar.",
  },
  {
    icon: Wrench,
    title: "Support & Pflege",
    text: "Ich halte eure Website aktuell, passe Inhalte an und pflege neue Spieler, Banner, News und weitere Änderungen ein.",
  },
  {
    icon: ShoppingBag,
    title: "Hosting & Bereitstellung",
    text: "Ich übernehme Hosting, Domain-Anbindung und die Veröffentlichung – damit eure Website zuverlässig online ist sofern erwünscht.",
  },
];

const pricing = [
  {
    name: "Basic",
    price: "99€",
    monthly: "+ 15€ / Monat sofern Hosting sowie Betreuung gewünscht ist.",
    featured: false,
    features: ["Einfache Website","Team- und Kontaktseite","Hosting inklusive","Grundlegende Betreuung"],
  },
  {
    name: "Standard",
    price: "199€",
    monthly: "+ 25€ / Monat sofern Hosting sowie Laufende Updates gewünscht sind.",
    featured: true,
    features: ["Mehrere Unterseiten","Teams, News, Partner, Shop","Individuelle Anpassungen","Hosting & laufende Updates"],
  },
  {
    name: "Premium",
    price: "ab 299€",
    monthly: "+ 40€ / Monat sofern Hosting, Priorisierte betreuung und laufende Updates gewünscht sind.",
    featured: false,
    features: ["Komplett individueller Auftritt","Erweitertes Design","Priorisierte Änderungen","Volle Betreuung & Support"],
  },
];

const portfolioCards = [
  {
    title: "Clan- und Team-Websites",
    text: "Perfekt für Teams, die professionell auftreten und neue Spieler, Partner oder Sponsoren überzeugen möchten.",
  },
  {
    title: "Klare Struktur",
    text: "Saubere Seiten für Home, Services, Preise, Kontakt, Roster, News oder individuelle Sonderwünsche.",
  },
  {
    title: "Professioneller Auftritt",
    text: "Die Seite ist so aufgebaut, dass Direktanfragen einfacher werden und euer Team professioneller wirkt.",
  },
];

function SectionHeader({ eyebrow, title, text, center = false }) {
  return (
    <div className={`mb-10 ${center ? "text-center" : ""}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.38em] text-sky-400">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">{title}</h2>
      {text ? (
        <p className={`mt-4 text-sm leading-7 text-slate-300 ${center ? "mx-auto max-w-2xl" : "max-w-2xl"}`}>{text}</p>
      ) : null}
    </div>
  );
}

function Shell({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-stars" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(180deg,rgba(59,130,246,.12),transparent_18%,transparent_82%,rgba(59,130,246,.10))]" />
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <NavLink to="/" className="flex items-center gap-3">
            <img src={logo} alt="NicoGMG Logo" className="h-11 w-11 object-contain" />
            <div>
              <div className="text-sm font-black uppercase tracking-[0.28em] text-white">NicoGMG</div>
              <div className="text-[11px] uppercase tracking-[0.24em] text-sky-300/70">Website Service</div>
            </div>
          </NavLink>
          <nav className="hidden items-center gap-2 lg:flex">
            {navItems.map((item) => (
              <NavLink key={item.label} to={item.to}
                className={({ isActive }) => `rounded-xl px-4 py-2 text-sm font-medium transition ${isActive ? "bg-sky-500/15 text-white" : "text-slate-300 hover:bg-white/5 hover:text-white"}`}>
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="hidden lg:block">
            <NavLink to="/contact" className="inline-flex items-center gap-2 rounded-2xl border border-sky-400/30 bg-sky-500/15 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-500/25">
              Anfrage senden <ArrowUpRight className="h-4 w-4" />
            </NavLink>
          </div>
          <button onClick={() => setOpen(!open)} className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 lg:hidden" aria-label="Menü öffnen">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {open && (
          <div className="border-t border-white/10 px-5 pb-5 pt-3 lg:hidden">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <NavLink key={item.label} to={item.to} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 text-sm text-slate-200 transition hover:bg-white/5">
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </header>
      {children}
      <footer className="border-t border-white/10 bg-slate-950/70">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 lg:grid-cols-[1.1fr_0.8fr_0.8fr] lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="NicoGMG Logo" className="h-12 w-12 object-contain" />
              <div>
                <div className="text-lg font-black uppercase tracking-[0.26em] text-white">NicoGMG</div>
                <div className="text-xs uppercase tracking-[0.22em] text-sky-300/70">Esports Website Service</div>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
              Professionelle Websites für Esports Teams, Clans und Organisationen – inklusive Hosting, Updates und laufender Betreuung.
            </p>
          </div>
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.22em] text-white">Navigation</div>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-400">
              {navItems.map((item) => (
                <NavLink key={item.label} to={item.to} className="transition hover:text-white">{item.label}</NavLink>
              ))}
            </div>
          </div>
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.22em] text-white">Kontakt</div>
            <div className="mt-4 space-y-3 text-sm text-slate-300">
              <a href={contactLinks.discord} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3 transition hover:bg-white/10 hover:text-white"><Disc3 className="h-4 w-4 text-sky-400" /><span>Nicogmg</span></a>
              <a href={contactLinks.instagram} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3 transition hover:bg-white/10 hover:text-white"><Instagram className="h-4 w-4 text-sky-400" /><span>nicogmg.websiteservice</span></a>
              <a href={contactLinks.mail} className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3 transition hover:bg-white/10 hover:text-white"><Mail className="h-4 w-4 text-sky-400" /><span>info@nicogmg-preview.com</span></a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-5 text-center text-xs text-slate-500 md:flex-row md:px-8">
            <div className="uppercase tracking-[0.22em]">© 2026 NicoGMG • Professionelle Esports Websites</div>
            <div className="flex items-center gap-4">
              <a href="#" className="transition hover:text-white">Impressum</a>
              <span className="text-slate-700">|</span>
              <a href="#" className="transition hover:text-white">Datenschutz</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <section className="relative border-b border-white/10">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div>
            <div className="inline-flex items-center rounded-full border border-sky-400/25 bg-sky-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-sky-300">
              Professioneller Auftritt für Esports Teams
            </div>
            <h1 className="mt-6 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              Professionelle Websites für
              <span className="block glow-text text-sky-400">Esports Teams & Organisationen</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Ich entwickle hochwertige und individuelle Websites, die euer Team professionell präsentieren – inklusive Design, Hosting, Updates und laufender Betreuung.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <NavLink to="/contact" className="inline-flex items-center gap-2 rounded-2xl bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400">
                Kontaktiere mich <ChevronRight className="h-4 w-4" />
              </NavLink>
              <NavLink to="/portfolio" className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                Portfolio ansehen
              </NavLink>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((item) => (
                <div key={item.label} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <div className="text-xs uppercase tracking-[0.22em] text-slate-500">{item.label}</div>
                  <div className="mt-2 text-xl font-black text-white">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 rounded-[34px] bg-sky-500/10 blur-3xl" />
            <div className="section-card blue-border relative overflow-hidden shadow-glow">
              <img src={heroBanner} alt="NicoGMG Hero Banner" className="h-full min-h-[420px] w-full object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <div className="inline-flex items-center rounded-full border border-sky-400/25 bg-slate-950/60 px-3 py-1 text-xs uppercase tracking-[0.24em] text-sky-300">
                  NICOGMG Website Service
                </div>
                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-200">
                  Klares Branding, moderner Look und ein Auftritt, der euer Team oder eure Dienstleistung hochwertig präsentiert.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <main className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="section-card p-7 sm:p-8">
            <SectionHeader eyebrow="Meine Services" title="Esports Websites nach Maß" text="Perfekt für Clans, Teams und Orgas, die professioneller wirken, neue Spieler anziehen und sauber nach außen auftreten wollen." />
            <div className="grid gap-4 sm:grid-cols-2">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div key={service.title} className="rounded-3xl border border-white/10 bg-slate-950/40 p-5">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-400/25 bg-sky-500/10 text-sky-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-white">{service.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-400">{service.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="section-card blue-border overflow-hidden">
            <img src={portfolioPreview} alt="Portfolio Vorschau" className="h-full min-h-[620px] w-full object-cover object-center" />
          </div>
        </section>
      </main>
    </>
  );
}

function ServicesPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <SectionHeader eyebrow="Services" title="Meine Leistungen" text="Alles, was ihr für einen professionellen Webauftritt braucht – von der Erstellung bis zur laufenden Betreuung." center />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div key={service.title} className="section-card p-6">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-400/25 bg-sky-500/10 text-sky-300">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-2xl font-black text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{service.text}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
}

function PortfolioPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <SectionHeader eyebrow="Portfolio" title="Beeindruckende Esports Websites" text="Hier stehen in Zukunft alle fertigen Websites." center />
      <div className="grid gap-6 lg:grid-cols-[0.55fr_1.45fr]">
        <div className="section-card p-6">
          <h3 className="text-2xl font-black text-white">Warum das funktioniert</h3>
          <div className="mt-5 space-y-4">
            {portfolioCards.map((card) => (
              <div key={card.title} className="rounded-2xl bg-slate-950/50 p-4">
                <div className="font-semibold text-white">{card.title}</div>
                <p className="mt-2 text-sm leading-7 text-slate-400">{card.text}</p>
              </div>
            ))}
          </div>
          <NavLink to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400">
            Projekt anfragen <ArrowUpRight className="h-4 w-4" />
          </NavLink>
        </div>
        <div className="section-card blue-border overflow-hidden">
          <img src={portfolioPreview} alt="NicoGMG Portfolio Vorschau" className="h-full min-h-[620px] w-full object-cover object-center" />
        </div>
      </div>
    </main>
  );
}

function PricingPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <SectionHeader eyebrow="Preise" title="Meine Angebote" text="Klare Pakete für kleine Clans, ambitionierte Teams und größere Organisationen." center />
      <div className="grid gap-6 lg:grid-cols-3">
        {pricing.map((plan) => (
          <div key={plan.name} className={`rounded-[28px] border p-6 shadow-soft ${plan.featured ? "border-sky-400/35 bg-sky-500/10" : "border-white/10 bg-white/5"}`}>
            <div className="text-xs uppercase tracking-[0.24em] text-sky-300">{plan.name}</div>
            <div className="mt-4 text-4xl font-black text-white">{plan.price}</div>
            <div className="mt-2 text-sm text-slate-400">{plan.monthly}</div>
            <div className="mt-6 space-y-3">
              {plan.features.map((feature) => (
                <div key={feature} className="flex items-center gap-3 rounded-2xl bg-slate-950/40 px-4 py-3 text-sm text-slate-200">
                  <Check className="h-4 w-4 text-sky-400" /><span>{feature}</span>
                </div>
              ))}
            </div>
            {plan.featured ? <div className="mt-6 rounded-2xl bg-sky-500 px-4 py-3 text-center text-sm font-semibold text-slate-950">Beliebteste Wahl</div> : null}
          </div>
        ))}
      </div>
    </main>
  );
}

function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-16 lg:px-8">
      <div className="section-card blue-border overflow-hidden p-7 sm:p-8">
        <SectionHeader eyebrow="Kontakt" title="Kontaktiere mich" text="Wenn du eine professionelle Website für dein Team oder deine Organisation möchtest, schreib mir einfach direkt." center />
        <div className="mx-auto grid max-w-3xl gap-4">
          <a href={contactLinks.discord} target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/50 px-5 py-4 transition hover:border-sky-400/30 hover:bg-slate-900/70"><span className="inline-flex items-center gap-3"><Disc3 className="h-5 w-5 text-sky-400" /><span className="text-slate-300">Discord</span></span><span className="font-semibold text-white">Nicogmg</span></a>
          <a href={contactLinks.instagram} target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/50 px-5 py-4 transition hover:border-sky-400/30 hover:bg-slate-900/70"><span className="inline-flex items-center gap-3"><Instagram className="h-5 w-5 text-sky-400" /><span className="text-slate-300">Instagram</span></span><span className="font-semibold text-white">nicogmg.websiteservice</span></a>
          <a href={contactLinks.mail} className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/50 px-5 py-4 transition hover:border-sky-400/30 hover:bg-slate-900/70"><span className="inline-flex items-center gap-3"><Mail className="h-5 w-5 text-sky-400" /><span className="text-slate-300">Mail</span></span><span className="font-semibold text-white">info@nicogmg-preview.com</span></a>
        </div>
        <div className="mt-8 text-center text-sm leading-7 text-slate-400">
          Hast du Fragen oder möchtest du direkt starten? Schreib mir einfach auf Discord, Instagram oder per Mail.
        </div>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <Shell>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Shell>
  );
}