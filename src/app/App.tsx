import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { ArrowRight, ArrowUpRight, Menu, X, Linkedin, Instagram, MapPin, Mail, Clock, Phone, Scale, Landmark, Gavel, type LucideIcon } from "lucide-react";
import volkanPhoto from "../assets/volkan-alkilic.avif";

const GOLD = "#C5A880";
const GOLD_DIM = "rgba(197,168,128,0.18)";

function GoldRule({ className = "" }: { className?: string }) {
  return (
    <div
      className={`h-px w-full ${className}`}
      style={{ background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)` }}
    />
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { label: "Hakkımızda", id: "hakkimizda" },
    { label: "Faaliyet Alanları", id: "faaliyet-alanlari" },
    { label: "Ekibimiz", id: "ekip" },
    { label: "İletişim", id: "iletisim" },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(17,17,17,0.97)" : "transparent",
        borderBottom: scrolled ? `1px solid ${GOLD_DIM}` : "1px solid transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <span
            className="text-sm tracking-[0.3em] font-medium"
            style={{ fontFamily: "'Cinzel', serif", color: GOLD }}
          >
            ALKILIÇ
          </span>
          <span style={{ color: GOLD_DIM, fontSize: "10px" }}>•</span>
          <span
            className="text-xs tracking-[0.2em]"
            style={{ fontFamily: "'Manrope', sans-serif", color: "rgba(251,251,251,0.5)" }}
          >
            HUKUK BÜROSU
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="text-xs tracking-[0.2em] uppercase transition-colors duration-300"
              style={{
                fontFamily: "'Manrope', sans-serif",
                color: "rgba(251,251,251,0.55)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = GOLD)}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(251,251,251,0.55)")}
            >
              {l.label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="tel:+905325819002"
          className="hidden md:flex items-center gap-2 text-xs tracking-[0.18em] uppercase px-6 py-3 transition-all duration-300"
          style={{
            fontFamily: "'Manrope', sans-serif",
            border: `1px solid ${GOLD_DIM}`,
            color: "rgba(251,251,251,0.7)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = GOLD;
            e.currentTarget.style.color = GOLD;
            e.currentTarget.style.background = "rgba(197,168,128,0.06)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = GOLD_DIM;
            e.currentTarget.style.color = "rgba(251,251,251,0.7)";
            e.currentTarget.style.background = "transparent";
          }}
        >
          <Phone size={13} />
          Danışmanlık Talep Edin
        </a>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setOpen(!open)} style={{ color: GOLD }}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu — full screen overlay, portalled to <body> so ancestor
          backdrop-filter (on the scrolled header) can't hijack `fixed` positioning */}
      {open &&
        createPortal(
          <div
            className="md:hidden fixed inset-0 z-[100] flex flex-col"
            style={{ background: "#111111" }}
          >
            {/* Top bar */}
            <div className="flex items-center justify-between px-8 h-20 shrink-0" style={{ borderBottom: `1px solid ${GOLD_DIM}` }}>
              <div className="flex items-center gap-3">
                <span
                  className="text-sm tracking-[0.3em] font-medium"
                  style={{ fontFamily: "'Cinzel', serif", color: GOLD }}
                >
                  ALKILIÇ
                </span>
                <span style={{ color: GOLD_DIM, fontSize: "10px" }}>•</span>
                <span
                  className="text-xs tracking-[0.2em]"
                  style={{ fontFamily: "'Manrope', sans-serif", color: "rgba(251,251,251,0.5)" }}
                >
                  HUKUK BÜROSU
                </span>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Kapat"
                className="flex items-center justify-center w-10 h-10 transition-colors duration-300"
                style={{ border: `1px solid ${GOLD_DIM}`, color: GOLD }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = GOLD)}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = GOLD_DIM)}
              >
                <X size={18} />
              </button>
            </div>

            {/* Links */}
            <div className="flex-1 flex flex-col justify-center px-8 gap-10">
              {links.map((l) => (
                <button
                  key={l.id}
                  onClick={() => scrollTo(l.id)}
                  className="text-left text-3xl transition-colors duration-300"
                  style={{
                    fontFamily: "'Cinzel', serif",
                    color: "rgba(251,251,251,0.85)",
                    letterSpacing: "0.05em",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = GOLD)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(251,251,251,0.85)")}
                >
                  {l.label}
                </button>
              ))}
            </div>

            {/* CTA */}
            <div className="px-8 pb-10 shrink-0">
              <a
                href="tel:+905325819002"
                className="flex items-center justify-center gap-3 w-full py-4 text-xs tracking-[0.25em] uppercase transition-all duration-300"
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  border: `1px solid ${GOLD}`,
                  color: GOLD,
                }}
              >
                <Phone size={14} />
                Danışmanlık Talep Edin
              </a>
            </div>
          </div>,
          document.body,
        )}
    </header>
  );
}

function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1800&h=1200&fit=crop&auto=format"
          alt="Adalet terazisi ve hukuk ofisi"
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.28) contrast(1.1)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(17,17,17,0.3) 0%, rgba(17,17,17,0.0) 30%, rgba(17,17,17,0.7) 80%, rgba(17,17,17,1) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative max-w-[1400px] mx-auto px-8 md:px-16 pb-28 pt-40 w-full">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="flex flex-col gap-4 mb-10">
            <span
              className="text-2xl md:text-3xl tracking-[0.3em] uppercase"
              style={{ fontFamily: "'Cinzel', serif", color: GOLD }}
            >
              Alkılıç
            </span>
            <div className="flex items-center gap-4">
              <div className="h-px w-12" style={{ background: GOLD }} />
              <span
                className="text-xs tracking-[0.35em] uppercase"
                style={{ fontFamily: "'Manrope', sans-serif", color: GOLD }}
              >
                Hukuk • Danışmanlık • Arabuluculuk
              </span>
            </div>
          </div>

          {/* Headline */}
          <h1
            className="leading-none mb-8 text-[clamp(2.6rem,7vw,6.5rem)] font-normal"
            style={{ fontFamily: "'Cinzel', serif", color: "#FBFBFB", letterSpacing: "0.03em" }}
          >
            HAKKIN
            <br />
            OLDUĞU
            <br />
            <span style={{ color: GOLD }}>YERDE DURUN.</span>
          </h1>

          <GoldRule className="mb-10 max-w-sm" />

          {/* Sub */}
          <p
            className="text-sm leading-relaxed mb-12 max-w-md"
            style={{ fontFamily: "'Manrope', sans-serif", color: "rgba(251,251,251,0.85)", letterSpacing: "0.04em" }}
          >
            Gerçek ve tüzel kişilere; güvene dayalı, çözüm odaklı ve etkin bir
            hukuki temsil anlayışıyla İstanbul'dan hizmet veriyoruz.
          </p>

          {/* CTA arrow */}
          <button
            className="flex items-center gap-3 group transition-all duration-300"
            onClick={() => document.getElementById("hakkimizda")?.scrollIntoView({ behavior: "smooth" })}
          >
            <span
              className="text-xs tracking-[0.25em] uppercase group-hover:text-[#C5A880] transition-colors duration-300"
              style={{ fontFamily: "'Manrope', sans-serif", color: "rgba(251,251,251,0.55)" }}
            >
              Büromuzu Tanıyın
            </span>
            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
              style={{ color: GOLD }}
            />
          </button>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const values = [
    { label: "Güven", desc: "Müvekkil ilişkisinin temeli." },
    { label: "Şeffaflık", desc: "Her aşamada açık iletişim." },
    { label: "Çözüm Odaklılık", desc: "Sonuca giden en etkin yol." },
  ];

  return (
    <section id="hakkimizda" className="max-w-[1400px] mx-auto px-8 md:px-16 py-36 scroll-mt-20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-0">
        {/* Left label */}
        <div className="md:col-span-3 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="h-px w-8" style={{ background: GOLD }} />
            <span
              className="text-xs tracking-[0.3em] uppercase"
              style={{ fontFamily: "'Manrope', sans-serif", color: GOLD }}
            >
              Hakkımızda
            </span>
          </div>
          <span
            className="text-xs tracking-[0.2em] uppercase"
            style={{ fontFamily: "'Manrope', sans-serif", color: "rgba(251,251,251,0.25)" }}
          >
            Kuruluş 2020
          </span>
        </div>

        {/* Right content */}
        <div className="md:col-span-9 md:pl-8">
          <blockquote
            className="text-[clamp(1.5rem,3.2vw,2.7rem)] font-normal leading-tight mb-10"
            style={{ fontFamily: "'Cinzel', serif", color: "#FBFBFB", letterSpacing: "0.02em" }}
          >
            "Hukuki sürecin her aşamasında,
            <br />
            müvekkilin hak ve menfaatini
            <br />
            <span style={{ color: GOLD }}>esas alan bir anlayış."</span>
          </blockquote>

          <GoldRule className="mb-10 max-w-lg" />

          <div className="max-w-2xl flex flex-col gap-6 mb-14">
            <p
              className="text-sm leading-[2]"
              style={{ fontFamily: "'Manrope', sans-serif", color: "rgba(251,251,251,0.85)", letterSpacing: "0.03em" }}
            >
              ALKILIÇ Hukuk | Danışmanlık | Arabuluculuk Bürosu, 2020 yılında
              Av. Volkan Alkılıç tarafından kurulmuştur. Büro, gerçek ve tüzel
              kişilere yönelik hukuki danışmanlık ve dava takibi hizmetleri
              sunmakta; müvekkillerinin hak ve menfaatlerinin korunmasını esas
              alan güvene dayalı, çözüm odaklı ve etkin bir hukuki hizmet
              anlayışıyla faaliyet göstermektedir.
            </p>
            <p
              className="text-sm leading-[2]"
              style={{ fontFamily: "'Manrope', sans-serif", color: "rgba(251,251,251,0.85)", letterSpacing: "0.03em" }}
            >
              ALKILIÇ Hukuk, her hukuki uyuşmazlığın kendine özgü koşulları
              bulunduğu bilinciyle hareket ederek müvekkillerinin ihtiyaçlarını
              titizlikle analiz etmekte; hukuki risklerin öngörülmesi,
              uyuşmazlıkların etkin şekilde yönetilmesi ve sürdürülebilir
              çözümler üretilmesi amacıyla kapsamlı bir yaklaşım
              benimsemektedir. Büro faaliyetlerinde mesleki etik ilkeler,
              şeffaflık ve müvekkil güveni temel değerler olarak kabul
              edilmektedir.
            </p>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl">
            {values.map((v) => (
              <div key={v.label} className="flex flex-col gap-2">
                <span
                  className="text-sm tracking-[0.1em] uppercase"
                  style={{ fontFamily: "'Cinzel', serif", color: GOLD }}
                >
                  {v.label}
                </span>
                <span
                  className="text-xs leading-relaxed"
                  style={{ fontFamily: "'Manrope', sans-serif", color: "rgba(251,251,251,0.85)" }}
                >
                  {v.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const practices = [
  {
    num: "01",
    title: "Ticaret Hukuku",
    desc: "Şirketler, Ortaklık Yapıları, Ticari Uyuşmazlıklar.",
    detail:
      "Şirket kuruluşundan birleşme ve devralma işlemlerine kadar tüm süreçlerde stratejik hukuki danışmanlık.",
    intro:
      "Ticaret Hukuku kapsamında, şirketlerin kuruluşundan birleşme ve devralma işlemlerine kadar uzanan tüm süreçlerde kapsamlı ve stratejik hukuki danışmanlık sunulmaktadır. Ticari hayatın dinamik yapısı göz önünde bulundurularak, müvekkillerin faaliyetlerini hukuki güvenlik içerisinde sürdürmeleri hedeflenmektedir.",
    definitionTitle: "Ticaret Hukuku Nedir?",
    definition:
      "Ticaret hukuku, gerçek ve tüzel kişilerin ticari faaliyetlerini düzenleyen, şirketlerin işleyişini belirleyen ve ticari ilişkilerden doğan uyuşmazlıkları konu alan hukuk dalıdır.",
    services: [
      "Şirket kuruluş işlemlerinin yürütülmesi",
      "Şirket ana sözleşmelerinin hazırlanması ve revizyonu",
      "Ortaklık yapılarının düzenlenmesi",
      "Birleşme ve devralma süreçlerinin yönetimi",
      "Ticari sözleşmelerin hazırlanması ve incelenmesi",
      "Ticari alacakların tahsili ve icra süreçleri",
      "Haksız rekabet ve ticari uyuşmazlıkların çözümü",
    ],
    closing:
      "Ticaret hukuku alanında alınan profesyonel destek, yalnızca mevcut sorunların çözümünü değil, aynı zamanda gelecekte doğabilecek hukuki risklerin önlenmesini sağlar.",
  },
  {
    num: "02",
    title: "Sözleşmeler Hukuku",
    desc: "Hazırlama, İnceleme, Risk Yönetimi.",
    detail:
      "Sözleşmesel ilişkilerin hukuki güvenliğini sağlayan, riskleri öngörülü bir yaklaşımla yöneten danışmanlık.",
    intro:
      "Sözleşmeler Hukuku kapsamında, tarafların hak ve yükümlülüklerini açık ve dengeli şekilde ortaya koyan sözleşmelerin hazırlanması, incelenmesi ve müzakere süreçlerinde hukuki destek sunulmaktadır.",
    definitionTitle: "Sözleşmeler Hukuku Nedir?",
    definition:
      "Sözleşmeler hukuku, tarafların karşılıklı irade beyanlarıyla kurdukları hukuki ilişkilerin şekil, içerik ve sonuçlarını düzenleyen; olası uyuşmazlıkları önlemeyi amaçlayan hukuk dalıdır.",
    services: [
      "Ticari ve bireysel sözleşmelerin hazırlanması",
      "Mevcut sözleşmelerin hukuki risk analizi",
      "Sözleşme müzakerelerinde danışmanlık",
      "Cezai şart ve teminat hükümlerinin düzenlenmesi",
      "Sözleşmeden doğan uyuşmazlıkların çözümü",
    ],
    closing:
      "Sözleşmeler, olası uyuşmazlıkları önleyecek ve müvekkilin menfaatlerini koruyacak şekilde hazırlanmakta; hukuki riskler önceden analiz edilerek minimize edilmektedir.",
  },
  {
    num: "03",
    title: "Ceza Hukuku",
    desc: "Soruşturma, Kovuşturma, Etkin Savunma.",
    detail:
      "Ceza yargılamasının tüm aşamalarında titiz ve etkin bir hukuki temsil.",
    intro:
      "Ceza Hukuku kapsamında, soruşturma aşamasından kovuşturma sürecinin sonuna kadar, müvekkillerin haklarının korunmasına yönelik titiz ve etkin bir hukuki temsil sağlanmaktadır.",
    definitionTitle: "Ceza Hukuku Nedir?",
    definition:
      "Ceza hukuku, suç teşkil eden fiilleri ve bu fiillere uygulanacak yaptırımları düzenleyen; şüpheli, sanık ve mağdurların haklarının güvence altına alındığı hukuk dalıdır.",
    services: [
      "Soruşturma aşamasında şüpheli/müşteki müdafiliği",
      "Kovuşturma aşamasında sanık müdafiliği",
      "Mağdur ve şikayetçi vekilliği",
      "İtiraz, istinaf ve temyiz süreçlerinin yürütülmesi",
      "Ceza infaz hukukuna ilişkin danışmanlık",
    ],
    closing:
      "Ceza yargılamasının hassasiyeti göz önünde bulundurularak, sürecin her aşamasında hızlı, kararlı ve stratejik bir savunma yaklaşımı benimsenmektedir.",
  },
  {
    num: "04",
    title: "Miras Hukuku",
    desc: "Miras Planlaması, Paylaşım, Uyuşmazlık Çözümü.",
    detail:
      "Miras planlaması ve miras uyuşmazlıklarının sistematik ve sonuç odaklı bir yaklaşımla ele alınması.",
    intro:
      "Miras Hukuku kapsamında, miras planlamasından paylaşım süreçlerine ve miras uyuşmazlıklarının çözümüne kadar sistematik ve sonuç odaklı bir hukuki destek sunulmaktadır.",
    definitionTitle: "Miras Hukuku Nedir?",
    definition:
      "Miras hukuku, bir kişinin ölümü halinde mal varlığının mirasçılara intikalini, mirasçılık sıfatını ve mirasa ilişkin uyuşmazlıkları düzenleyen hukuk dalıdır.",
    services: [
      "Veraset ilamı (mirasçılık belgesi) alınması",
      "Miras paylaşımı ve izale-i şüyu süreçleri",
      "Vasiyetname düzenlenmesi ve iptali",
      "Mirastan mal kaçırma (muris muvazaası) davaları",
      "Tenkis ve miras reddi süreçleri",
    ],
    closing:
      "Miras uyuşmazlıklarının aile içi hassasiyetleri de göz önünde bulundurularak, hem hukuki hem de insani boyutuyla çözüm odaklı bir yaklaşım benimsenmektedir.",
  },
  {
    num: "05",
    title: "Gayrimenkul Hukuku",
    desc: "Taşınmaz İşlemleri, Tapu, Uyuşmazlıklar.",
    detail:
      "Taşınmazlara ilişkin hukuki işlemler ve uyuşmazlıkların güven esaslı bir yaklaşımla yürütülmesi.",
    intro:
      "Gayrimenkul Hukuku kapsamında, taşınmaz alım-satımından kira ilişkilerine, tapu iptal ve tescil davalarından kamulaştırma süreçlerine kadar geniş bir yelpazede hukuki destek sağlanmaktadır.",
    definitionTitle: "Gayrimenkul Hukuku Nedir?",
    definition:
      "Gayrimenkul hukuku, taşınmaz mallara ilişkin hak ve yükümlülükleri, mülkiyet ilişkilerini ve bu ilişkilerden doğan uyuşmazlıkları düzenleyen hukuk dalıdır.",
    services: [
      "Tapu iptal ve tescil davaları",
      "Kira sözleşmeleri ve tahliye süreçleri",
      "Kat mülkiyeti ve kat irtifakına ilişkin uyuşmazlıklar",
      "Ortaklığın giderilmesi (izale-i şüyu) davaları",
      "İmar mevzuatına ilişkin danışmanlık",
    ],
    closing:
      "Taşınmazlara ilişkin hukuki işlemler, mülkiyet güvenliğini esas alan titiz bir inceleme süreciyle yürütülmektedir.",
  },
  {
    num: "06",
    title: "Aile Hukuku",
    desc: "Boşanma, Velayet, Nafaka.",
    detail:
      "Aile hukukuna ilişkin hassas süreçlerin gizlilik ilkeleri çerçevesinde yönetilmesi.",
    intro:
      "Aile Hukuku kapsamında, boşanma, velayet, nafaka ve mal paylaşımı gibi hassas süreçler; gizlilik ilkeleri ve müvekkil menfaati esas alınarak titizlikle yürütülmektedir.",
    definitionTitle: "Aile Hukuku Nedir?",
    definition:
      "Aile hukuku, evlilik birliğinin kurulması, yürütülmesi ve sona ermesi ile bu süreçte ortaya çıkan velayet, nafaka ve mal rejimi uyuşmazlıklarını düzenleyen hukuk dalıdır.",
    services: [
      "Anlaşmalı ve çekişmeli boşanma davaları",
      "Velayet ve kişisel ilişki tesisi süreçleri",
      "Nafaka (yoksulluk, iştirak, tedbir) talepleri",
      "Mal rejimi ve mal paylaşımı uyuşmazlıkları",
      "Evlilik öncesi/sonrası mal rejimi sözleşmeleri",
    ],
    closing:
      "Aile hukukuna ilişkin süreçlerde, müvekkillerin ve varsa çocuklarının menfaatini önceleyen, gizlilik ilkelerine bağlı bir yaklaşım benimsenmektedir.",
  },
  {
    num: "07",
    title: "Rekabet Hukuku",
    desc: "Mevzuat Uyumu, Uyuşmazlık Süreçleri.",
    detail:
      "Rekabet mevzuatına uyum ve uyuşmazlık süreçlerinin kurumsal bir yaklaşımla ele alınması.",
    intro:
      "Rekabet Hukuku kapsamında, işletmelerin rekabet mevzuatına uyumunun sağlanması ve Rekabet Kurumu nezdindeki süreçlerin yönetilmesi konularında kurumsal bir yaklaşımla danışmanlık sunulmaktadır.",
    definitionTitle: "Rekabet Hukuku Nedir?",
    definition:
      "Rekabet hukuku, piyasada serbest ve adil rekabet ortamının korunmasını amaçlayan; hakim durumun kötüye kullanılması ve rekabeti kısıtlayıcı anlaşmaları düzenleyen hukuk dalıdır.",
    services: [
      "Rekabet mevzuatına uyum (compliance) danışmanlığı",
      "Birleşme ve devralma bildirimleri",
      "Rekabet Kurumu soruşturmalarında temsil",
      "Haksız rekabet davaları",
      "Dikey ve yatay anlaşmaların hukuki incelenmesi",
    ],
    closing:
      "Uyuşmazlık süreçlerinde hızlı, etkin ve stratejik bir yaklaşım benimsenmekte; müvekkillerin ticari faaliyetleri mevzuata uygun şekilde sürdürülmektedir.",
  },
  {
    num: "08",
    title: "Kişisel Verilerin Korunması",
    desc: "KVKK Uyumu, Veri Güvenliği.",
    detail:
      "Veri işleme süreçlerinin mevzuata uyumunun sağlanması ve kurumsal veri güvenliğinin temini.",
    intro:
      "Kişisel Verilerin Korunması Hukuku kapsamında, işletmelerin veri işleme süreçlerinin 6698 sayılı KVKK ile uyumlu hale getirilmesi ve kurumsal veri güvenliğinin sağlanması konularında danışmanlık verilmektedir.",
    definitionTitle: "Kişisel Verilerin Korunması Hukuku Nedir?",
    definition:
      "Kişisel verilerin korunması hukuku, kişisel verilerin işlenmesinde kişilerin temel hak ve özgürlüklerinin korunmasını ve veri sorumlularının yükümlülüklerini düzenleyen hukuk dalıdır.",
    services: [
      "KVKK uyum süreçlerinin yürütülmesi",
      "Aydınlatma metni ve açık rıza formlarının hazırlanması",
      "Veri envanteri ve VERBİS kayıt süreçleri",
      "Veri ihlali bildirim süreçlerinin yönetilmesi",
      "Kişisel Verileri Koruma Kurulu nezdinde temsil",
    ],
    closing:
      "Veri işleme süreçlerinin mevzuata uyumunun sağlanması, hem yasal yükümlülüklerin yerine getirilmesini hem de kurumsal itibarın korunmasını temin etmektedir.",
  },
];

function PracticeModal({
  practice,
  onClose,
}: {
  practice: (typeof practices)[number];
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start md:items-center justify-center p-4 md:p-8 overflow-y-auto"
      style={{ background: "rgba(10,10,10,0.85)", backdropFilter: "blur(4px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl my-8 md:my-0"
        style={{ background: "#131313", border: `1px solid ${GOLD_DIM}` }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Kapat"
          className="absolute top-6 right-6 transition-colors duration-200 z-10"
          style={{ color: "rgba(251,251,251,0.5)" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = GOLD)}
          onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(251,251,251,0.5)")}
        >
          <X size={20} />
        </button>

        <div className="p-8 md:p-14">
          <span
            className="block text-5xl font-normal mb-6 leading-none"
            style={{ fontFamily: "'Cinzel', serif", color: GOLD, letterSpacing: "0.04em" }}
          >
            {practice.num}
          </span>
          <h3
            className="text-2xl md:text-3xl font-normal mb-6"
            style={{ fontFamily: "'Cinzel', serif", color: "#FBFBFB", letterSpacing: "0.04em" }}
          >
            {practice.title}
          </h3>

          <GoldRule className="mb-8 max-w-xs" />

          <p
            className="text-sm leading-[1.9] mb-10"
            style={{ fontFamily: "'Manrope', sans-serif", color: "rgba(251,251,251,0.55)" }}
          >
            {practice.intro}
          </p>

          <h4
            className="text-sm tracking-[0.15em] uppercase mb-4"
            style={{ fontFamily: "'Cinzel', serif", color: GOLD }}
          >
            {practice.definitionTitle}
          </h4>
          <p
            className="text-sm leading-[1.9] mb-10"
            style={{ fontFamily: "'Manrope', sans-serif", color: "rgba(251,251,251,0.55)" }}
          >
            {practice.definition}
          </p>

          <h4
            className="text-sm tracking-[0.15em] uppercase mb-4"
            style={{ fontFamily: "'Cinzel', serif", color: GOLD }}
          >
            Hizmet Kapsamımız
          </h4>
          <div className="flex flex-col gap-3 mb-10">
            {practice.services.map((s) => (
              <div key={s} className="flex items-start gap-3">
                <div className="h-px w-4 mt-2.5 shrink-0" style={{ background: GOLD }} />
                <span
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: "'Manrope', sans-serif", color: "rgba(251,251,251,0.55)" }}
                >
                  {s}
                </span>
              </div>
            ))}
          </div>

          <p
            className="text-sm leading-[1.9] mb-10"
            style={{ fontFamily: "'Manrope', sans-serif", color: "rgba(251,251,251,0.55)" }}
          >
            {practice.closing}
          </p>

          <a
            href="#iletisim"
            onClick={onClose}
            className="inline-flex items-center gap-3 px-8 py-4 text-xs tracking-[0.25em] uppercase transition-all duration-300 group"
            style={{
              fontFamily: "'Manrope', sans-serif",
              background: "transparent",
              border: `1px solid ${GOLD}`,
              color: GOLD,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = GOLD;
              e.currentTarget.style.color = "#111111";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = GOLD;
            }}
          >
            Bize Danışın
            <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  );
}

function PracticeSection() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="faaliyet-alanlari" className="py-20 scroll-mt-20" style={{ borderTop: `1px solid ${GOLD_DIM}` }}>
      <div className="max-w-[1400px] mx-auto px-8 md:px-16">
        {/* Header */}
        <div className="flex items-end justify-between mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8" style={{ background: GOLD }} />
              <span
                className="text-xs tracking-[0.3em] uppercase"
                style={{ fontFamily: "'Manrope', sans-serif", color: GOLD }}
              >
                Faaliyet Alanlarımız
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-normal"
              style={{ fontFamily: "'Cinzel', serif", color: "#FBFBFB", letterSpacing: "0.05em" }}
            >
              Uzmanlık Alanlarımız
            </h2>
          </div>
        </div>

        {/* Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          style={{ borderTop: `1px solid ${GOLD_DIM}`, borderLeft: `1px solid ${GOLD_DIM}` }}
        >
          {practices.map((p, i) => (
            <button
              key={p.num}
              onClick={() => setSelected(i)}
              className="relative p-10 text-left cursor-pointer transition-all duration-400 group"
              style={{
                borderRight: `1px solid ${GOLD_DIM}`,
                borderBottom: `1px solid ${GOLD_DIM}`,
                background: hovered === i ? "rgba(197,168,128,0.04)" : "transparent",
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <span
                className="block text-5xl font-normal mb-6 leading-none transition-colors duration-300"
                style={{
                  fontFamily: "'Cinzel', serif",
                  color: hovered === i ? GOLD : "rgba(197,168,128,0.25)",
                  letterSpacing: "0.04em",
                }}
              >
                {p.num}
              </span>
              <h3
                className="text-sm tracking-[0.1em] uppercase mb-3 font-normal"
                style={{
                  fontFamily: "'Cinzel', serif",
                  color: "#FBFBFB",
                  letterSpacing: "0.08em",
                }}
              >
                {p.title}
              </h3>
              <p
                className="text-xs mb-4"
                style={{ fontFamily: "'Manrope', sans-serif", color: GOLD, letterSpacing: "0.03em" }}
              >
                {p.desc}
              </p>
              <p
                className="text-xs leading-relaxed transition-opacity duration-300"
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  color: "rgba(251,251,251,0.35)",
                  opacity: hovered === i ? 1 : 0,
                }}
              >
                {p.detail}
              </p>

              {/* Corner accent */}
              <div
                className="absolute bottom-4 right-4 transition-opacity duration-300"
                style={{ opacity: hovered === i ? 1 : 0 }}
              >
                <ArrowUpRight size={14} style={{ color: GOLD }} />
              </div>
            </button>
          ))}
        </div>
      </div>

      {selected !== null && (
        <PracticeModal practice={practices[selected]} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}

const team = [
  {
    name: "Volkan Alkılıç",
    title: "Kurucu Avukat, Arabulucu",
    email: "volkan@alkilic.av.tr",
    img: volkanPhoto,
    icon: undefined as LucideIcon | undefined,
    isFounder: true,
    bio: [
      "Av. Volkan Alkılıç, lisans eğitimini Kemerburgaz (Altınbaş) Üniversitesi Hukuk Fakültesi'nde tamamlamış ve 2017 yılında mezun olmuştur. Mesleki kariyerinde özellikle Ceza Hukuku, Miras Hukuku, Gayrimenkul Hukuku, Rekabet Hukuku, Kişisel Verilerin Korunması Hukuku, Sözleşmeler Hukuku ve Elektronik Ticaret Hukuku alanlarında çalışmış; şirketlere ve bireysel müvekkillere yönelik hukuki danışmanlık, sözleşme hazırlama ve uyuşmazlık çözümü süreçlerinde aktif rol almıştır.",
      "Askerlik görevini Hava Kuvvetleri Komutanlığı bünyesinde Hava Hukuk Teğmen sınıfında tamamlamış olup bu süreçte askeri personel ve askeri öğrencilerin hukuki süreçlerine ilişkin uygulamalı tecrübe edinmiştir.",
    ],
    credentials: ["Kemerburgaz (Altınbaş) Üniversitesi Hukuk Fakültesi, 2017", "Hava Hukuk Teğmen, Hv.K.K.", "Kurucu, ALKILIÇ Hukuk"],
  },
  {
    name: "Buse Havva Göç",
    title: "Avukat",
    email: "buse@alkilic.av.tr",
    isFounder: false,
    icon: Scale,
    bio: ["ALKILIÇ Hukuk bünyesinde gerçek ve tüzel kişilere yönelik hukuki danışmanlık ve dava takibi süreçlerinde görev almaktadır."],
    credentials: ["Avukat, ALKILIÇ Hukuk"],
  },
  {
    name: "Serhat Ünver",
    title: "Avukat",
    email: "serhat@alkilic.av.tr",
    isFounder: false,
    icon: Landmark,
    bio: ["ALKILIÇ Hukuk bünyesinde gerçek ve tüzel kişilere yönelik hukuki danışmanlık ve dava takibi süreçlerinde görev almaktadır."],
    credentials: ["Avukat, ALKILIÇ Hukuk"],
  },
  {
    name: "Selda Gezli",
    title: "Avukat",
    email: "selda@alkilic.av.tr",
    isFounder: false,
    icon: Gavel,
    bio: ["ALKILIÇ Hukuk bünyesinde gerçek ve tüzel kişilere yönelik hukuki danışmanlık ve dava takibi süreçlerinde görev almaktadır."],
    credentials: ["Avukat, ALKILIÇ Hukuk"],
  },
];

function LawIconPlaceholder({ name, icon: Icon }: { name: string; icon: LucideIcon }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  return (
    <div
      className="relative w-full h-full flex flex-col items-center justify-center gap-6"
      style={{
        background:
          "radial-gradient(ellipse 70% 70% at 50% 35%, rgba(197,168,128,0.08) 0%, transparent 70%), linear-gradient(160deg, #1a1a1a 0%, #0d0d0d 100%)",
      }}
    >
      <div
        className="flex items-center justify-center"
        style={{
          width: "clamp(72px, 12vw, 108px)",
          height: "clamp(72px, 12vw, 108px)",
          border: `1px solid ${GOLD_DIM}`,
        }}
      >
        <Icon size={40} strokeWidth={1.2} style={{ color: GOLD }} />
      </div>
      <span
        style={{
          fontFamily: "'Cinzel', serif",
          color: "rgba(197,168,128,0.35)",
          fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)",
          letterSpacing: "0.15em",
        }}
      >
        {initials}
      </span>
    </div>
  );
}

function TeamSection() {
  const [active, setActive] = useState(0);
  const person = team[active];

  return (
    <section id="ekip" className="py-28 scroll-mt-20" style={{ borderTop: `1px solid ${GOLD_DIM}` }}>
      <div className="max-w-[1400px] mx-auto px-8 md:px-16">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8" style={{ background: GOLD }} />
            <span
              className="text-xs tracking-[0.3em] uppercase"
              style={{ fontFamily: "'Manrope', sans-serif", color: GOLD }}
            >
              Ekibimiz
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-normal"
            style={{ fontFamily: "'Cinzel', serif", color: "#FBFBFB", letterSpacing: "0.05em" }}
          >
            Kurucu Avukat ve Ortaklarımız
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0">
          {/* Person selector */}
          <div className="lg:col-span-3 flex flex-col gap-0">
            {team.map((p, i) => (
              <button
                key={p.name}
                onClick={() => setActive(i)}
                className="text-left px-0 py-5 transition-all duration-300 flex items-start gap-4 group"
                style={{ borderBottom: `1px solid ${GOLD_DIM}` }}
              >
                <div
                  className="w-0.5 self-stretch transition-all duration-300 shrink-0"
                  style={{ background: active === i ? GOLD : "transparent" }}
                />
                <div>
                  <p
                    className="text-xs tracking-[0.15em] uppercase mb-1 transition-colors duration-300"
                    style={{
                      fontFamily: "'Cinzel', serif",
                      color: active === i ? GOLD : "rgba(251,251,251,0.4)",
                    }}
                  >
                    {p.name}
                  </p>
                  <p
                    className="text-xs"
                    style={{
                      fontFamily: "'Manrope', sans-serif",
                      color: "rgba(251,251,251,0.25)",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {p.title}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Portrait & bio */}
          <div className="lg:col-span-9 lg:pl-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              {/* Image */}
              <div className="relative overflow-hidden bg-zinc-900" style={{ aspectRatio: "3/4" }}>
                {person.isFounder ? (
                  <img
                    src={person.img}
                    alt={person.name}
                    className="w-full h-full object-cover transition-all duration-700"
                    style={{ objectPosition: "center 15%", filter: "brightness(0.94) contrast(1.08) saturate(0.92)" }}
                  />
                ) : (
                  // TODO: gerçek fotoğraf eklendiğinde LawIconPlaceholder yerine img koyun
                  <LawIconPlaceholder name={person.name} icon={person.icon!} />
                )}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ boxShadow: `inset 0 0 0 1px ${GOLD_DIM}` }}
                />
              </div>

              {/* Details */}
              <div className="flex flex-col justify-start pt-4">
                <h3
                  className="text-3xl md:text-4xl font-normal leading-tight mb-2"
                  style={{ fontFamily: "'Cinzel', serif", color: "#FBFBFB", letterSpacing: "0.04em" }}
                >
                  {person.name}
                </h3>
                <p
                  className="text-xs tracking-[0.12em] uppercase mb-6"
                  style={{ fontFamily: "'Manrope', sans-serif", color: GOLD }}
                >
                  {person.title}
                </p>

                <GoldRule className="mb-6 max-w-xs" />

                {person.bio.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className="text-sm leading-[2] mb-6 last:mb-8"
                    style={{ fontFamily: "'Manrope', sans-serif", color: "rgba(251,251,251,0.85)" }}
                  >
                    {paragraph}
                  </p>
                ))}

                <div className="flex flex-col gap-3">
                  {person.credentials.map((c) => (
                    <div key={c} className="flex items-center gap-3">
                      <div className="h-px w-4" style={{ background: GOLD }} />
                      <span
                        className="text-xs tracking-[0.1em]"
                        style={{ fontFamily: "'Manrope', sans-serif", color: "rgba(251,251,251,0.75)" }}
                      >
                        {c}
                      </span>
                    </div>
                  ))}
                  <div className="flex items-center gap-3 mt-2">
                    <div className="h-px w-4" style={{ background: GOLD }} />
                    <a
                      href={`mailto:${person.email}`}
                      className="text-xs tracking-[0.1em] transition-colors duration-200"
                      style={{ fontFamily: "'Manrope', sans-serif", color: "rgba(251,251,251,0.75)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = GOLD)}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(251,251,251,0.75)")}
                    >
                      {person.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const contactCards = [
  {
    icon: MapPin,
    label: "Ofis",
    value: "Merkez Mah. Kağıthane Cad. DAP İ Ofis No:3 İç Kapı No:59, Kağıthane / İstanbul",
    href: "https://maps.apple.com/?q=Merkez+Mah.+Ka%C4%9F%C4%B1thane+Cad.+DAP+%C4%B0+Ofis+No:3+%C4%B0%C3%A7+Kap%C4%B1+No:59+Ka%C4%9F%C4%B1thane+%C4%B0stanbul",
    cta: "Apple Haritalar'da Aç",
  },
  {
    icon: Phone,
    label: "Telefon",
    value: "0532 581 90 02",
    href: "tel:+905325819002",
    cta: "Hemen Ara",
  },
  {
    icon: Mail,
    label: "E-posta",
    value: "info@alkilic.av.tr",
    href: "mailto:info@alkilic.av.tr",
    cta: "E-posta Gönder",
  },
  {
    icon: Clock,
    label: "Çalışma Saatleri",
    value: "Pazartesi – Cuma, 09:00 – 18:00",
    href: null,
    cta: null,
  },
];

function ContactSection() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && contact) setSubmitted(true);
  };

  const fieldStyle = {
    background: "#161616",
    border: `1px solid ${GOLD_DIM}`,
    color: "#FBFBFB",
    fontFamily: "'Manrope', sans-serif",
    letterSpacing: "0.03em",
    outline: "none",
  };

  return (
    <section id="iletisim" className="py-28 relative overflow-hidden scroll-mt-20" style={{ borderTop: `1px solid ${GOLD_DIM}` }}>
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 80% 50%, rgba(197,168,128,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-8 md:px-16">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8" style={{ background: GOLD }} />
            <span
              className="text-xs tracking-[0.3em] uppercase"
              style={{ fontFamily: "'Manrope', sans-serif", color: GOLD }}
            >
              Danışmanlık
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-normal leading-tight mb-6"
            style={{ fontFamily: "'Cinzel', serif", color: "#FBFBFB", letterSpacing: "0.04em" }}
          >
            Gizlilik İçinde Bir Görüşme.
          </h2>
          <p
            className="text-sm leading-[1.9]"
            style={{ fontFamily: "'Manrope', sans-serif", color: "rgba(251,251,251,0.85)", letterSpacing: "0.03em" }}
          >
            İlk görüşmeler tam bir gizlilik içerisinde yürütülür. Tüm
            paylaşımlarınız, ilk temas anından itibaren avukat-müvekkil
            gizliliği kapsamında korunur.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left: info cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {contactCards.map((c) => {
              const Icon = c.icon;
              const CardInner = (
                <>
                  <Icon size={18} style={{ color: GOLD }} className="shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-1">
                    <span
                      className="text-xs tracking-[0.15em] uppercase"
                      style={{ fontFamily: "'Manrope', sans-serif", color: GOLD }}
                    >
                      {c.label}
                    </span>
                    <span
                      className="text-sm leading-relaxed"
                      style={{ fontFamily: "'Manrope', sans-serif", color: "rgba(251,251,251,0.6)" }}
                    >
                      {c.value}
                    </span>
                    {c.cta && (
                      <span
                        className="text-xs tracking-[0.1em] uppercase mt-1 flex items-center gap-1.5"
                        style={{ fontFamily: "'Manrope', sans-serif", color: "rgba(197,168,128,0.7)" }}
                      >
                        {c.cta}
                        <ArrowUpRight size={12} />
                      </span>
                    )}
                  </div>
                </>
              );
              const cardClass = "flex items-start gap-4 p-6 transition-all duration-300";
              const cardStyle = { background: "#161616", border: `1px solid ${GOLD_DIM}` };

              return c.href ? (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className={cardClass}
                  style={cardStyle}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = GOLD)}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = GOLD_DIM)}
                >
                  {CardInner}
                </a>
              ) : (
                <div key={c.label} className={cardClass} style={cardStyle}>
                  {CardInner}
                </div>
              );
            })}

            {/* Social */}
            <div className="flex items-center gap-4 p-6" style={{ background: "#161616", border: `1px solid ${GOLD_DIM}` }}>
              <span
                className="text-xs tracking-[0.15em] uppercase"
                style={{ fontFamily: "'Manrope', sans-serif", color: GOLD }}
              >
                Sosyal Medya
              </span>
              <div className="flex items-center gap-4 ml-auto">
                <a
                  href="https://www.linkedin.com/in/volkan-alkilic"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  style={{ color: "rgba(251,251,251,0.5)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = GOLD)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(251,251,251,0.5)")}
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://www.instagram.com/volkanalkilic"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  style={{ color: "rgba(251,251,251,0.5)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = GOLD)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(251,251,251,0.5)")}
                >
                  <Instagram size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div
                className="flex flex-col items-start gap-6 p-10 h-full justify-center"
                style={{ background: "#161616", border: `1px solid ${GOLD_DIM}` }}
              >
                <div className="h-px w-24" style={{ background: GOLD }} />
                <h3
                  className="text-2xl font-normal"
                  style={{ fontFamily: "'Cinzel', serif", color: GOLD, letterSpacing: "0.06em" }}
                >
                  Talebiniz Alındı.
                </h3>
                <p
                  className="text-sm leading-[2]"
                  style={{ fontFamily: "'Manrope', sans-serif", color: "rgba(251,251,251,0.4)" }}
                >
                  Büromuzdan bir yetkili 24 saat içinde sizinle iletişime
                  geçecektir.
                  <br />
                  Gizliliğiniz kesinlikle güvence altındadır.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-6 p-8 md:p-10"
                style={{ background: "#161616", border: `1px solid ${GOLD_DIM}` }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label
                      className="text-xs tracking-[0.25em] uppercase"
                      style={{ fontFamily: "'Manrope', sans-serif", color: "rgba(251,251,251,0.9)" }}
                    >
                      Ad Soyad
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ad Soyad"
                      required
                      className="w-full px-4 py-3 text-sm placeholder:text-zinc-700 transition-all duration-300"
                      style={fieldStyle}
                      onFocus={(e) => (e.currentTarget.style.borderColor = GOLD)}
                      onBlur={(e) => (e.currentTarget.style.borderColor = GOLD_DIM)}
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      className="text-xs tracking-[0.25em] uppercase"
                      style={{ fontFamily: "'Manrope', sans-serif", color: "rgba(251,251,251,0.9)" }}
                    >
                      E-posta / Telefon
                    </label>
                    <input
                      type="text"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      placeholder="İletişim bilginiz"
                      required
                      className="w-full px-4 py-3 text-sm placeholder:text-zinc-700 transition-all duration-300"
                      style={fieldStyle}
                      onFocus={(e) => (e.currentTarget.style.borderColor = GOLD)}
                      onBlur={(e) => (e.currentTarget.style.borderColor = GOLD_DIM)}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    className="text-xs tracking-[0.25em] uppercase"
                    style={{ fontFamily: "'Manrope', sans-serif", color: "rgba(251,251,251,0.9)" }}
                  >
                    Mesajınız
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Talebinizi kısaca özetleyin"
                    rows={4}
                    className="w-full px-4 py-3 text-sm placeholder:text-zinc-700 transition-all duration-300 resize-none"
                    style={fieldStyle}
                    onFocus={(e) => (e.currentTarget.style.borderColor = GOLD)}
                    onBlur={(e) => (e.currentTarget.style.borderColor = GOLD_DIM)}
                  />
                </div>

                <div className="flex flex-col gap-5 mt-2">
                  <button
                    type="submit"
                    className="self-start flex items-center gap-3 px-8 py-4 text-xs tracking-[0.25em] uppercase transition-all duration-300 group"
                    style={{
                      fontFamily: "'Manrope', sans-serif",
                      background: GOLD,
                      border: `1px solid ${GOLD}`,
                      color: "#111111",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = GOLD;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = GOLD;
                      e.currentTarget.style.color = "#111111";
                    }}
                  >
                    Talebi Gönder
                    <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </button>

                  <p
                    className="text-xs"
                    style={{ fontFamily: "'Manrope', sans-serif", color: "rgba(251,251,251,0.85)", letterSpacing: "0.05em" }}
                  >
                    Gizlilik kesinlikle güvence altındadır. Tüm talepler
                    avukat-müvekkil gizliliği kapsamında korunur.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12" style={{ borderTop: `1px solid ${GOLD_DIM}` }}>
      <div className="max-w-[1400px] mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <p className="text-sm tracking-[0.25em] mb-2" style={{ fontFamily: "'Cinzel', serif", color: GOLD }}>
              ALKILIÇ HUKUK
            </p>
            <p
              className="text-xs tracking-[0.15em] mb-4"
              style={{ fontFamily: "'Manrope', sans-serif", color: "rgba(251,251,251,0.25)" }}
            >
              Danışmanlık | Arabuluculuk — Kuruluş 2020
            </p>
            <p
              className="text-xs leading-relaxed"
              style={{ fontFamily: "'Manrope', sans-serif", color: "rgba(251,251,251,0.2)" }}
            >
              Bu internet sitesindeki bilgiler hukuki tavsiye
              <br />
              niteliği taşımaz.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            {["Gizlilik Politikası", "Çalışma Koşulları", "Aydınlatma Metni"].map((l) => (
              <a
                key={l}
                href="#"
                className="text-xs tracking-[0.08em] transition-colors duration-200"
                style={{ fontFamily: "'Manrope', sans-serif", color: "rgba(251,251,251,0.25)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = GOLD)}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(251,251,251,0.25)")}
              >
                {l}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <a
              href="tel:+905325819002"
              className="text-xs tracking-[0.08em] transition-colors duration-200 w-fit"
              style={{ fontFamily: "'Manrope', sans-serif", color: "rgba(251,251,251,0.25)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = GOLD)}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(251,251,251,0.25)")}
            >
              0532 581 90 02
            </a>
            <a
              href="mailto:info@alkilic.av.tr"
              className="text-xs tracking-[0.08em] transition-colors duration-200 w-fit"
              style={{ fontFamily: "'Manrope', sans-serif", color: "rgba(251,251,251,0.25)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = GOLD)}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(251,251,251,0.25)")}
            >
              info@alkilic.av.tr
            </a>
            <p className="text-xs tracking-[0.08em]" style={{ fontFamily: "'Manrope', sans-serif", color: "rgba(251,251,251,0.25)" }}>
              Kağıthane / İstanbul
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a
                href="https://www.linkedin.com/in/volkan-alkilic"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="transition-colors duration-200"
                style={{ color: "rgba(251,251,251,0.35)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = GOLD)}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(251,251,251,0.35)")}
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://www.instagram.com/volkanalkilic"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="transition-colors duration-200"
                style={{ color: "rgba(251,251,251,0.35)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = GOLD)}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(251,251,251,0.35)")}
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>
        </div>

        <GoldRule className="mb-6" />

        <p
          className="text-xs text-center"
          style={{ fontFamily: "'Manrope', sans-serif", color: "rgba(251,251,251,0.18)", letterSpacing: "0.04em" }}
        >
          © {new Date().getFullYear()} ALKILIÇ Hukuk | Danışmanlık | Arabuluculuk. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen" style={{ background: "#111111", overflowX: "hidden" }}>
      <Nav />
      <HeroSection />
      <AboutSection />
      <PracticeSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
