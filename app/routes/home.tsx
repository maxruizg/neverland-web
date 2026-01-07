import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Neverland Consultants | Put to Flight" },
    {
      name: "description",
      content:
        "Boutique financial and commercial consulting firm specializing in investment banking. M&A, Capital Raising, Asset Management, and Strategic Planning.",
    },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <WhatWeDo />
      <Services />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#">
            <img src="/logo-black.png" alt="Neverland Consultants" className="h-14" />
          </a>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-gray-600 hover:text-primary-600 transition-colors text-sm font-medium"
            >
              About
            </a>
            <a
              href="#services"
              className="text-gray-600 hover:text-primary-600 transition-colors text-sm font-medium"
            >
              Services
            </a>
            <a
              href="#team"
              className="text-gray-600 hover:text-primary-600 transition-colors text-sm font-medium"
            >
              Team
            </a>
            <a
              href="#contact"
              className="bg-primary-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors"
            >
              Contact Us
            </a>
          </div>
          <button className="md:hidden p-2">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight flex flex-col items-center gap-2">
            <span className="inline-block">
              {"NEVERLAND".split("").map((letter, i) => (
                <span
                  key={i}
                  className="inline-block animate-letter-reveal opacity-0"
                  style={{ animationDelay: `${0.3 + i * 0.05}s` }}
                >
                  {letter}
                </span>
              ))}
            </span>
            <span className="flex items-center gap-4 md:gap-6">
              <span className="relative inline-flex items-center justify-center">
                <span className="absolute w-12 h-12 md:w-16 md:h-16 bg-accent-500/20 rounded-full animate-pulse-glow" />
                <span className="relative text-accent-500 text-4xl md:text-5xl lg:text-6xl font-light animate-plus-spin">
                  +
                </span>
              </span>
              <span className="text-3xl md:text-5xl lg:text-6xl tracking-wider">
                {"CONSULTANTS".split("").map((letter, i) => (
                  <span
                    key={i}
                    className="inline-block animate-letter-reveal opacity-0"
                    style={{ animationDelay: `${0.8 + i * 0.04}s` }}
                  >
                    {letter}
                  </span>
                ))}
              </span>
            </span>
          </h1>
          <p className="text-accent-500 text-xl md:text-2xl font-light tracking-[0.3em] uppercase mb-8 animate-fade-in opacity-0" style={{ animationDelay: "1.5s", animationFillMode: "forwards" }}>
            Put to Flight
          </p>
        </div>

        <div
          className="animate-fade-in-up opacity-0"
          style={{ animationDelay: "1.8s", animationFillMode: "forwards" }}
        >
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-white text-xl md:text-2xl font-light mb-4 leading-relaxed">
              Integrated investment banking & strategic advisory.
            </p>
            <p className="text-accent-500 text-lg md:text-xl tracking-wide">
              Independent <span className="mx-2 text-white/40">·</span> Client-Focused <span className="mx-2 text-white/40">·</span> Execution Driven
            </p>
          </div>
        </div>

        <div
          className="animate-fade-in-up opacity-0 flex flex-col sm:flex-row gap-4 justify-center"
          style={{ animationDelay: "2.1s", animationFillMode: "forwards" }}
        >
          <a
            href="#services"
            className="inline-flex items-center justify-center bg-accent-500 text-primary-950 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent-400 transition-all transform hover:scale-105"
          >
            Our Services
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-all"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white/50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}

function About() {
  const sectors = [
    "Fintech",
    "AI",
    "Health",
    "Tech-Enabled",
    "Agro",
    "Water",
    "Energy",
    "Infrastructure",
  ];

  const clients = [
    { name: "Startups", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
    { name: "Corporations", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
    { name: "Family Offices", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
    { name: "Angel Investors", icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" },
    { name: "PE Funds", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
    { name: "Strategic Operators", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-accent-600 font-semibold text-sm tracking-wider uppercase">
            About Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-950 mt-4 mb-6">
            Empowering businesses to achieve their full potential
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            At Neverland + Consultants, we specialize in accelerating business growth
            and enhancing financial efficiency through expert leadership and customized solutions.
          </p>
        </div>

        {/* Key Stats */}
        <div className="grid md:grid-cols-2 gap-4 mb-12 max-w-3xl mx-auto">
          <div className="relative overflow-hidden bg-gradient-to-br from-primary-950 to-primary-800 rounded-xl p-5 text-center">
            <div className="absolute top-0 right-0 w-20 h-20 bg-accent-500/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                +$600<span className="text-accent-500">M</span>
              </div>
              <div className="text-accent-500 font-medium text-sm">Active Transactions (USD)</div>
            </div>
          </div>
          <div className="relative overflow-hidden bg-gradient-to-br from-primary-950 to-primary-800 rounded-xl p-5 text-center">
            <div className="absolute top-0 right-0 w-20 h-20 bg-accent-500/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                LATAM
              </div>
              <div className="text-accent-500 font-medium text-sm">Active Mandates Across the Region</div>
            </div>
          </div>
        </div>

        {/* Sectors */}
        <div className="mb-10">
          <h3 className="text-center text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
            Sectors We Serve
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {sectors.map((sector) => (
              <span
                key={sector}
                className="px-3 py-1.5 bg-primary-50 text-primary-700 rounded-full text-xs font-medium hover:bg-primary-100 transition-colors"
              >
                {sector}
              </span>
            ))}
          </div>
        </div>

        {/* Clients */}
        <div className="bg-gray-50 rounded-xl p-6 md:p-8 mb-12">
          <h3 className="text-center text-xs font-semibold text-gray-500 uppercase tracking-wider mb-5">
            Who We Work With
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {clients.map((client) => (
              <div
                key={client.name}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center mb-2 group-hover:shadow-md group-hover:scale-105 transition-all">
                  <svg
                    className="w-5 h-5 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d={client.icon}
                    />
                  </svg>
                </div>
                <span className="text-xs font-medium text-gray-700">{client.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Our Edge & Experience */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Our team brings over <strong>35 years of combined expertise</strong> in
              financial consulting, working with private capital funds, investors,
              and strategic partners to deliver exceptional results.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-primary-50 rounded-xl">
                <div className="text-4xl font-bold text-primary-600 mb-2">35+</div>
                <div className="text-gray-600 text-sm">Years Combined Experience</div>
              </div>
              <div className="p-6 bg-primary-50 rounded-xl">
                <div className="text-4xl font-bold text-primary-600 mb-2">100%</div>
                <div className="text-gray-600 text-sm">Client Focused</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-1">
              <div className="bg-white rounded-xl p-8">
                <h3 className="text-xl font-bold text-primary-950 mb-4">
                  Our Edge
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center mt-0.5">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-600">
                      Strategic decision-making support for sustainable growth
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center mt-0.5">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-600">
                      Machine Learning applications for financial modeling
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center mt-0.5">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-600">
                      Deep capital markets experience and connections
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center mt-0.5">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-600">
                      Customized solutions for every client size
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatWeDo() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-accent-600 font-semibold text-sm tracking-wider uppercase">
          What We Do
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-primary-950 mt-4 mb-6">
          Your trusted financial partner
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-16">
          We work with startups, mid-sized enterprises, large corporations,
          and investors to find <span className="font-semibold text-primary-700">bespoke opportunities</span> — providing tailored financial solutions that drive real results.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-5 mx-auto">
              <svg
                className="w-6 h-6 text-primary-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-primary-950 mb-2 text-center">Startups</h3>
            <p className="text-gray-600 text-sm text-center">
              Early-stage funding, valuation, and strategic planning to help you
              scale efficiently.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-5 mx-auto">
              <svg
                className="w-6 h-6 text-primary-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-primary-950 mb-2 text-center">
              Mid-Sized Enterprises
            </h3>
            <p className="text-gray-600 text-sm text-center">
              Growth capital, operational optimization, and M&A advisory services.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-5 mx-auto">
              <svg
                className="w-6 h-6 text-primary-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-primary-950 mb-2 text-center">
              Large Corporations
            </h3>
            <p className="text-gray-600 text-sm text-center">
              Complex transactions, cross-border deals, and strategic partnerships.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border-2 border-accent-500/20">
            <div className="w-12 h-12 bg-accent-500/10 rounded-xl flex items-center justify-center mb-5 mx-auto">
              <svg
                className="w-6 h-6 text-accent-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-primary-950 mb-3 text-center">
              Project & Structured Finance
            </h3>
            <ul className="text-gray-600 text-sm space-y-1.5">
              <li className="flex items-start gap-2">
                <span className="text-accent-500 mt-1">•</span>
                <span>Infrastructure + real assets</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-500 mt-1">•</span>
                <span>BOT + PPP frameworks</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-500 mt-1">•</span>
                <span>Offtake-based + contract cashflows</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      title: "M&A",
      subtitle: "Mergers & Acquisitions",
      description:
        "Expert guidance through the entire M&A lifecycle, from target identification to post-merger integration.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
          />
        </svg>
      ),
    },
    {
      title: "Capital & Debt Raising",
      subtitle: "Funding Solutions",
      description:
        "Access to private capital funds, investors, and strategic partners for optimal financing structures.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Asset Management",
      subtitle: "Portfolio Optimization",
      description:
        "Strategic asset allocation and portfolio management to maximize returns while managing risk.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
    },
    {
      title: "Strategic Planning",
      subtitle: "Financial Strategy",
      description:
        "Comprehensive financial and strategic planning to align your business goals with market opportunities.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="py-24 bg-primary-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-accent-500 font-semibold text-sm tracking-wider uppercase">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Comprehensive financial solutions
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From M&A to strategic planning, we provide end-to-end financial
            consulting services tailored to your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-accent-500/50 transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 bg-accent-500/20 rounded-xl flex items-center justify-center text-accent-500 group-hover:bg-accent-500 group-hover:text-primary-950 transition-all">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {service.title}
                  </h3>
                  <p className="text-accent-500 text-sm mb-3">{service.subtitle}</p>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Team() {
  const luisYears = new Date().getFullYear() - 2016;

  const team = [
    {
      name: "Luis Martinez",
      role: "Co-Founder & Managing Director",
      bio: `Economics and Applied Mathematics graduate from ITAM with ${luisYears}+ years in financial consulting and IT. Holds a Master's in Finance and specializes in Machine Learning applications for financial modeling, credit risk assessment, and automated valuations.`,
      initials: "LM",
    },
    {
      name: "Carlos Castañeda",
      role: "Co-Founder & Managing Director",
      bio: "ITAM graduate with extensive technology sector experience. Previously held director-level positions in capital markets operations and investment banking at Mexican Stock Exchange, launching notable products including derivatives markets.",
      initials: "CC",
    },
  ];

  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-accent-600 font-semibold text-sm tracking-wider uppercase">
            Our Team
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-950 mt-4 mb-6">
            Meet our leadership
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Our experienced team combines deep financial expertise with innovative
            technology to deliver exceptional results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className="group bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-800 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  {member.initials}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-950">
                    {member.name}
                  </h3>
                  <p className="text-accent-600 text-sm">{member.role}</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-accent-600 font-semibold text-sm tracking-wider uppercase">
              Contact Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-950 mt-4 mb-6">
              Let's discuss your goals
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Ready to take your business to the next level? Get in touch with our
              team to discuss how we can help you achieve your financial objectives.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-950 mb-1">Location</h4>
                  <p className="text-gray-600">
                    Rafael Alducin 28, Del Valle
                    <br />
                    Mexico City 03100
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-950 mb-1">Email</h4>
                  <a
                    href="mailto:luis.martinez@neverlandconsultants.capital"
                    className="text-primary-600 hover:text-primary-700"
                  >
                    luis.martinez@neverlandconsultants.capital
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-primary-950 mb-6">
              Send us a message
            </h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                  placeholder="john@company.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                  placeholder="Your Company"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none outline-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary-600 text-white py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-primary-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <img src="/logo-white.png" alt="Neverland Consultants" className="h-14" />
            <div className="text-gray-400 text-sm">
              Integrated Investment Banking
            </div>
          </div>

          <div className="flex items-center gap-8">
            <a
              href="#about"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              About
            </a>
            <a
              href="#services"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Services
            </a>
            <a
              href="#team"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Team
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Contact
            </a>
          </div>

          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Neverland Consultants. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
