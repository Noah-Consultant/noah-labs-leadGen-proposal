import React, { useState, useMemo } from 'react';
import { 
  TrendingUp, 
  Target, 
  ShieldCheck, 
  Coins, 
  ArrowRight, 
  Check, 
  ChevronRight, 
  Database, 
  Sparkles, 
  Flame, 
  Sliders, 
  Layers, 
  Calendar, 
  CheckCircle2, 
  X, 
  Menu,
  FileCheck2,
  Lock,
  ChevronDown,
  Mail,
  Users,
  AlertTriangle,
  BookOpen,
  DollarSign,
  Briefcase
} from 'lucide-react';

export default function App() {
  // Simulator State variables
  const [caPerStudent, setCaPerStudent] = useState<number>(1500);
  const [placesPerSession, setPlacesPerSession] = useState<number>(6);
  const [targetSessions, setTargetSessions] = useState<number>(2);
  const [filledSpots, setFilledSpots] = useState<number>(1);
  const [metaCAC, setMetaCac] = useState<number>(480);
  const [setupCost, setSetupCost] = useState<number>(2900);

  // New inputs for sector, size and objective
  const [companySector, setCompanySector] = useState<string>('OF'); // OF, B2B, LUX, SAAS
  const [companySize, setCompanySize] = useState<string>('TPE'); // TPE, PME, ETI
  const [companyObjective, setCompanyObjective] = useState<string>('LAUNCH'); // LAUNCH, ALWAYS_ON, OUTBOUND

  // Selector for pricing plan
  const [selectedPlan, setSelectedPlan] = useState<string>('B');

  // Contact form state
  const [contactName, setContactName] = useState<string>('Yann PLANCHENAULT');
  const [contactEmail, setContactEmail] = useState<string>('stanislas@noah-consultant.com');
  const [companyName, setCompanyName] = useState<string>('Dermacadémie / Lab Académie');
  const [customMsg, setCustomMsg] = useState<string>('Bonjour Stanislas, intéressé par le cadrage d\'un pilote sur mesure.');
  const [formIsSubmitted, setFormIsSubmitted] = useState<boolean>(false);
  const [showNotification, setShowNotification] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const handleSectorChange = (sector: string) => {
    setCompanySector(sector);
    if (sector === 'OF') {
      setCaPerStudent(1500);
      setMetaCac(480);
      setCustomMsg("Bonjour Stanislas, intéressé par la sécurisation et le remplissage de nos sessions de formation.");
    } else if (sector === 'B2B') {
      setCaPerStudent(3500);
      setMetaCac(950);
      setCustomMsg("Bonjour Stanislas, intéressé par un pilote de prospection de précision pour nos services B2B.");
    } else if (sector === 'LUX') {
      setCaPerStudent(2500);
      setMetaCac(650);
      setCustomMsg("Bonjour Stanislas, intéressé par un filtrage IA pour capter des clients exclusifs de haute valeur.");
    } else if (sector === 'SAAS') {
      setCaPerStudent(6000);
      setMetaCac(1500);
      setCustomMsg("Bonjour Stanislas, intéressé par un dispositif de prospection IA ciblant des comptes-clés SaaS Bourguignon.");
    }
  };

  const handleCompanySizeChange = (size: string) => {
    setCompanySize(size);
    if (size === 'TPE') {
      setSetupCost(2900);
      setPlacesPerSession(6);
      setTargetSessions(2);
      setFilledSpots(1);
    } else if (size === 'PME') {
      setSetupCost(4900);
      setPlacesPerSession(15);
      setTargetSessions(3);
      setFilledSpots(3);
    } else if (size === 'ETI') {
      setSetupCost(8500);
      setPlacesPerSession(30);
      setTargetSessions(4);
      setFilledSpots(6);
    }
  };

  const handleObjectiveChange = (obj: string) => {
    setCompanyObjective(obj);
    if (obj === 'LAUNCH') {
      setTargetSessions(2);
    } else if (obj === 'ALWAYS_ON') {
      setTargetSessions(3);
    } else if (obj === 'OUTBOUND') {
      setTargetSessions(4);
    }
  };

  // Dynamic labels for customizable industry configuration
  const dynamicLabels = useMemo(() => {
    switch(companySector) {
      case 'OF':
        return {
          unitName: "Stagiaire",
          unitNamePlural: "Stagiaires",
          revenueLabel: "CA PAR STAGIAIRE (TARIF HT)",
          revenueDesc: "Fixé de base à 1 500 € pour la Tricopigmentation.",
          jaugeLabel: "PLACES PAR SESSION (JAUGE)",
          jaugeDesc: "Jauge physique de formation à Bordeaux.",
          sessionsLabel: "SESSIONS CIBLÉES PILOTE",
          sessionsDesc: "Sessions planifiées (Septembre et Décembre).",
          filledLabel: "PLACES DÉJÀ RÉSERVÉES",
          filledDesc: "Stagiaires validés à ce jour par vos équipes.",
          lossLabel: "MANQUE À GAGNER EN JEU",
          lossDesc: "places encore vacantes",
          cacLabel: "CAC META ADS ESTIMÉ",
          cacDesc: "Coût d'acquisition indicatif par campagnes payantes tiers.",
          comparisonTitle: "SI META ADS EXCLUSIF POUR VOS SESSIONS :",
          comparisonDesc: "Coût estimé pour combler la vacance sans créer d'actif e-mailing pérenne.",
          scenarioTitle: "SÉCURISATION DU REMPLISSAGE",
          amortissementLabel: "Amorti dès les premiers inscrits.",
          coûtIndecision: "le coût de l'indécision",
          indecisionText: "chaque session de formation vide à date fixe est un actif égaré."
        };
      case 'B2B':
        return {
          unitName: "Client B2B",
          unitNamePlural: "Clients B2B",
          revenueLabel: "MARGE / CONTRAT SOURCE HT",
          revenueDesc: "Panier moyen ou honoraires par client B2B recruté.",
          jaugeLabel: "PROSPECTS QUALIFIÉS / MOIS",
          jaugeDesc: "Volume de leads hyper-ciblés et qualifiés IA.",
          sessionsLabel: "MOIS DE CAMPAGNES PILOTE",
          sessionsDesc: "Durée d'exécution du dispositif de prospection.",
          filledLabel: "CONTRATS DÉJÀ INITIÉS",
          filledDesc: "Prospects déjà convertis ou en cours de validation.",
          lossLabel: "REVENU RESTANT EN COULOIR",
          lossDesc: "opportunités encore libres",
          cacLabel: "CAC OUTBOUND TRADITIONNEL",
          cacDesc: "Dépenses de force commerciale pour générer ce volume de leads.",
          comparisonTitle: "SI PROSPECTION CLASSIQUE :",
          comparisonDesc: "Dépenses estimées en temps commercial et phoning sans actif de méthode.",
          scenarioTitle: "PILOTE D'ATTRACTION B2B",
          amortissementLabel: "Amorti dès le premier contrat signé.",
          coûtIndecision: "l'absence de pipeline structuré",
          indecisionText: "manquer ses objectifs de croissance en B2B faute de temps de cerveau."
        };
      case 'LUX':
        return {
          unitName: "Acheteur",
          unitNamePlural: "Acheteurs",
          revenueLabel: "VALEUR DU PANIER MOYEN HT",
          revenueDesc: "Marge d'opportunité générée sur chaque vente haut de gamme.",
          jaugeLabel: "TRANSACTIONS VISÉES / VAGUE",
          jaugeDesc: "Volume d'acheteurs haut de gamme à recruter.",
          sessionsLabel: "MOIS D'ACTIVATION DIRECTE",
          sessionsDesc: "Nombre de campagnes d'activation exclusive.",
          filledLabel: "VENTES DÉJÀ SÉCURISÉES",
          filledDesc: "Transactions ou précommandes confirmées.",
          lossLabel: "MANQUE À GAGNER FINANCIER",
          lossDesc: "commandes non traitées",
          cacLabel: "COÛT ACQUISITION REGIE PREMIUM",
          cacDesc: "Investissement requis sur les régies premium hors e-mailing direct.",
          comparisonTitle: "SI BUDGET PUBLICITAIRE PREMIUM :",
          comparisonDesc: "Budgets massifs réclamés par les intermédiaires sans de véritables relais de confiance.",
          scenarioTitle: "CAPTATION EXCLUSIVE CIBLÉE",
          amortissementLabel: "Rentable dès la première vente de collection.",
          coûtIndecision: "le coût d'une image diluée",
          indecisionText: "passer à côté de clients exclusifs qui préfèrent une approche directe soignée."
        };
      case 'SAAS':
      default:
        return {
          unitName: "Contrat SaaS",
          unitNamePlural: "Contrats SaaS",
          revenueLabel: "VALEUR ANNUELLE CONTRAT (ACV)",
          revenueDesc: "Revenu récurrent annuel moyen par compte d'entreprise.",
          jaugeLabel: "COMPTES CIBLES / DEPLOYEMENT",
          jaugeDesc: "Licences ou comptes stratégiques à conquérir.",
          sessionsLabel: "SPRINTS DE PROSPECTION MULTICANAL",
          sessionsDesc: "Nombre de sprints de ciblage de décisionnaires.",
          filledLabel: "COMPTES DÉJÀ SIGNÉS",
          filledDesc: "Comptes ou filiales déjà embarqués dans l'écosystème.",
          lossLabel: "ARR PAR EXPLOITATION PERDU",
          lossDesc: "comptes de valeur non captés",
          cacLabel: "CAC INBOUND / GOOGLE ADS",
          cacDesc: "Investissement marketing requis pour amener ces comptes par recherche payante.",
          comparisonTitle: "SI BUDGET SPONSORING & ADS :",
          comparisonDesc: "Dépenses astronomiques sur Google pour des leads de décisionnaires tièdes.",
          scenarioTitle: "CONQUÊTE COMPTES-CLÉS SAAS",
          amortissementLabel: "Modèle rentable sur la valeur de long terme (LTV).",
          coûtIndecision: "la fuite de parts de marché",
          indecisionText: "perdre la primeur du contact auprès de vos comptes de haute valeur."
        };
    }
  }, [companySector]);

  // Computations for ROI
  const calculations = useMemo(() => {
    const totalSpots = placesPerSession * targetSessions;
    const remainingSpots = Math.max(0, totalSpots - filledSpots);
    const totalCAPotential = totalSpots * caPerStudent;
    const vacancyLoss = remainingSpots * caPerStudent;
    
    // cost if we used meta ads for those remaining spots
    const equivalentMetaAdsInvest = remainingSpots * metaCAC;
    
    // break even in terms of signed students
    const breakEvenStudents = Math.ceil(setupCost / caPerStudent);
    
    // Multiplier of CA captured relative to the pilot cost
    const potentialROIValue = setupCost > 0 ? (vacancyLoss / setupCost).toFixed(1) : "0";

    return {
      totalSpots,
      remainingSpots,
      totalCAPotential,
      vacancyLoss,
      equivalentMetaAdsInvest,
      breakEvenStudents,
      potentialROIValue
    };
  }, [caPerStudent, placesPerSession, targetSessions, filledSpots, metaCAC, setupCost]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormIsSubmitted(true);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 6000);
  };

  return (
    <div className="min-h-screen bg-coffee-deep text-ivory font-sans relative overflow-x-hidden selection:bg-gold selection:text-ink">
      
      {/* Top Meta Hub bar */}
      <div className="border-b border-gold/10 bg-ink/90 backdrop-blur-md fixed top-0 left-0 right-0 z-50 w-full shadow-lg transition-all duration-300">
        <div className="max-w-[1200px] mx-auto px-5 py-3 md:py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full border border-gold/40 flex items-center justify-center bg-gradient-to-br from-coffee-raised to-ink shadow-[0_2px_8px_rgba(0,0,0,0.5)] transition duration-300 hover:border-gold-bright shrink-0">
              <span className="font-display italic text-gold-bright font-bold text-sm tracking-tight">NL</span>
            </div>
            <div className="min-w-0">
              <div className="font-display font-medium text-ivory tracking-tight text-sm flex flex-col sm:flex-row sm:items-center gap-1">
                <span className="truncate">NOAH LABS &middot; Dermacadémie</span>
                <span className="text-[9px] uppercase font-mono px-1.5 py-0.5 rounded bg-bordeaux/45 border border-bordeaux/30 text-gold-flash font-semibold w-max shrink-0">
                  SÉCURISATION PIPELINE
                </span>
              </div>
              <p className="text-[10px] font-mono text-parchment tracking-wider uppercase truncate hidden sm:block">
                Studio Boutique Data & IA &middot; Proposition de Collaboration
              </p>
            </div>
          </div>
          
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6 shrink-0">
            <a href="#contexte" className="text-xs font-mono text-ivory-muted hover:text-gold-flash transition">01 LA DOULEUR</a>
            <a href="#axes" className="text-xs font-mono text-ivory-muted hover:text-gold-flash transition">02 AXES</a>
            <a href="#simulateur" className="text-xs font-mono text-ivory-muted hover:text-gold-flash transition">03 SIMULATEUR</a>
            <a href="#methodology" className="text-xs font-mono text-ivory-muted hover:text-gold-flash transition">04 METHODE</a>
            <a href="#livrables" className="text-xs font-mono text-ivory-muted hover:text-gold-flash transition">05 ENSEMBLE</a>
            <a href="#contact" className="px-3 py-1.5 border border-gold/40 hover:border-gold-bright rounded text-xs font-mono text-gold-bright hover:text-gold-flash bg-gold/5 transition">
              CADRER LE PILOTE
            </a>
          </div>

          {/* Mobile hamburger button */}
          <button 
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-ivory-muted hover:text-gold-flash focus:outline-none cursor-pointer"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Panel */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gold/10 bg-ink/95 backdrop-blur-lg px-5 py-4 flex flex-col gap-3 font-mono text-left animate-fade-in pb-6">
            <a href="#contexte" onClick={() => setMobileMenuOpen(false)} className="text-xs text-ivory-muted hover:text-gold-flash py-2 border-b border-gold/5 transition block">01 LA DOULEUR</a>
            <a href="#axes" onClick={() => setMobileMenuOpen(false)} className="text-xs text-ivory-muted hover:text-gold-flash py-2 border-b border-gold/5 transition block">02 AXES</a>
            <a href="#simulateur" onClick={() => setMobileMenuOpen(false)} className="text-xs text-ivory-muted hover:text-gold-flash py-2 border-b border-gold/5 transition block">03 SIMULATEUR</a>
            <a href="#methodology" onClick={() => setMobileMenuOpen(false)} className="text-xs text-ivory-muted hover:text-gold-flash py-2 border-b border-gold/5 transition block">04 METHODE</a>
            <a href="#livrables" onClick={() => setMobileMenuOpen(false)} className="text-xs text-ivory-muted hover:text-gold-flash py-2 border-b border-gold/5 transition block">05 ENSEMBLE</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 border border-gold/40 hover:border-gold-bright rounded text-xs text-gold-bright text-center bg-gold/5 hover:text-gold-flash transition block mt-2">
              CADRER LE PILOTE
            </a>
          </div>
        )}
      </div>

      {/* Main Spacer Wrapper to counteract fixed navbar + containing all content */}
      <div className="pt-20 md:pt-24">

      {/* Decorative vertical gold rules */}
      <div className="absolute left-6 top-24 bottom-24 w-[1px] bg-gradient-to-b from-gold/20 via-transparent to-gold/10 pointer-events-none hidden lg:block" />
      <div className="absolute right-6 top-24 bottom-24 w-[1px] bg-gradient-to-b from-transparent via-gold/15 to-transparent pointer-events-none hidden lg:block" />

      {/* Hero Header Client Note */}
      <div className="max-w-[1120px] mx-auto px-5 pt-12 md:pt-16">
        <div className="border border-gold/20 bg-coffee/80 rounded p-4 md:p-6 mb-12 flex flex-col md:flex-row items-center md:items-stretch justify-between gap-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-gold" />
          <div className="flex-1 space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-gold-bright bg-coffee-raised px-2.5 py-1 rounded inline-block">
              NOTE D'INTÉGRATION COMMERCIALE
            </span>
            <h3 className="font-display font-medium text-lg text-ivory">
              Destinataire : Yann PLANCHENAULT &middot; Écosystème Lab Académie
            </h3>
            <p className="text-sm text-ivory-muted max-w-[690px] leading-relaxed">
              Diagnostic produit par <strong className="text-ivory">Stanislas BASQUIN</strong> suite à nos ateliers de co-construction stratégiques du 13 et 20 Mai 2026. L'objectif est de s'affranchir de la dépendance à l'unique canal Meta Ads pour sécuriser le remplissage des premières sessions de Septembre et Décembre 2026.
            </p>
          </div>
          <div className="flex flex-row md:flex-col justify-between items-end gap-2 border-t md:border-t-0 md:border-l border-gold/10 pt-4 md:pt-0 md:pl-6 text-right shrink-0">
            <div>
              <span className="block text-[10px] font-mono text-parchment uppercase">ÉTAT DE L'OFFRE</span>
              <span className="text-sm font-semibold text-gold-bright">Accord de principe</span>
            </div>
            <div>
              <span className="block text-[10px] font-mono text-parchment uppercase">RÉFÉRENCE CHARTE</span>
              <span className="text-[11px] font-mono text-ivory text-xs">NOAH-LABS-20260603-v1</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Hero Section */}
      <div className="max-w-[1120px] mx-auto px-5 pb-16 md:pb-24 text-left">
        <div className="max-w-4xl space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-gold" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-gold">00 &middot; ALCHIMIE DE PRÉCISION</span>
          </div>
          
          <h1 className="font-display font-light text-clamp-display text-4xl sm:text-5xl md:text-6xl lg:text-[76px] leading-[1.05] tracking-tight text-ivory">
            Sécuriser le <span className="font-medium">remplissage</span> de vos sessions à <span className="font-display italic text-gold-bright">date fixe.</span>
          </h1>
          
          <p className="font-display italic font-light text-lg sm:text-xl md:text-2xl text-ivory-muted max-w-3xl leading-relaxed">
            Un pilote de prospection data-driven conçu sur-mesure pour <strong className="text-gold-flash not-italic">Dermacadémie</strong>. Plus de dépendance aveugle aux coûts Ads en dérive, récupérez du temps de décision et protégez vos marges opérationnelles.
          </p>
          
          <div className="pt-6 flex flex-col sm:flex-row gap-4">
            <a href="#simulateur" className="px-6 py-4 rounded-sm bg-gradient-to-br from-gold-bright to-gold text-ink font-mono text-xs tracking-wider uppercase font-semibold text-center hover:translate-y-[-2px] transition shadow-[0_10px_30px_-10px_rgba(184,137,95,0.45)] hover:shadow-[0_14px_36px_-8px_rgba(212,165,116,0.65)] duration-300">
              Lancer le Simulateur de ROI &rarr;
            </a>
            <a href="#methodology" className="px-6 py-4 rounded-sm border border-gold/30 hover:border-gold text-ivory font-mono text-xs tracking-wider uppercase text-center transition hover:text-gold-flash bg-coffee/40">
              Découvrir la méthode en 6 étapes
            </a>
          </div>
        </div>

        {/* 4 Core Hero Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 pt-16">
          <div className="p-5 bg-coffee-raised/65 border border-gold/15 rounded-sm flex flex-col justify-between">
            <span className="font-mono text-[10px] text-parchment uppercase tracking-wider block">CAPACITÉ EXTRACTIBLE</span>
            <div>
              <span className="font-display font-light text-3xl sm:text-4xl text-gold-flash tracking-tight block mt-1">90 000+</span>
              <p className="text-xs text-ivory-muted mt-1">Salons esthétique & piercing (code NAF 9602B) sur DataGouv.</p>
            </div>
          </div>
          <div className="p-5 bg-coffee-raised/65 border border-gold/15 rounded-sm flex flex-col justify-between">
            <span className="font-mono text-[10px] text-parchment uppercase tracking-wider block">OBJECTIF PILOTE</span>
            <div>
              <span className="font-display font-light text-3xl sm:text-4xl text-gold-flash tracking-tight block mt-1">200 &agrave; 300</span>
              <p className="text-xs text-ivory-muted mt-1">Leads qualifiés hyper-ciblés et scorés par IA livrés clé-en-main.</p>
            </div>
          </div>
          <div className="p-5 bg-coffee-raised/65 border border-gold/15 rounded-sm flex flex-col justify-between">
            <span className="font-mono text-[10px] text-parchment uppercase tracking-wider block">CONFORMITÉ DU CANAL</span>
            <div>
              <span className="font-display font-light text-3xl sm:text-4xl text-gold-flash tracking-tight block mt-1">100%</span>
              <p className="text-xs text-ivory-muted mt-1">Séquence Outreach B2B conforme aux exigences strictes RGPD.</p>
            </div>
          </div>
          <div className="p-5 bg-coffee-raised/65 border border-gold/15 rounded-sm flex flex-col justify-between">
            <span className="font-mono text-[10px] text-parchment uppercase tracking-wider block">FIABILITÉ DU SETUP</span>
            <div>
              <span className="font-display font-light text-3xl sm:text-4xl text-gold-flash tracking-tight block mt-1 text-gold-bright italic">Pay-per-lead</span>
              <p className="text-xs text-ivory-muted mt-1">Paiement aligné sur le nombre de profils qualifiés réels délivrés.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative center gold separator Rule */}
      <div className="max-w-[1120px] mx-auto px-5">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
      </div>

      {/* Section 01: Le Contexte & La Douleur (contexte) */}
      <section id="contexte" className="scroll-mt-24 py-20 md:py-32 lg:py-36">
        <div className="max-w-[1120px] mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Header info */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-2">
                <span className="h-[1px] w-6 bg-gold" />
                <span className="eyebrow">01 &middot; LE PAIN PIVOT COMMERCIAL</span>
              </div>
              <h2 className="font-display text-4xl font-light text-ivory tracking-tight leading-tight">
                L'imprédictibilité du remplissage : <span className="italic text-gold-bright">un coût silencieux de 1 500 € par place vide.</span>
              </h2>
              <p className="text-ivory-muted leading-relaxed">
                Aujourd’hui, la prospection Dermacadémie repose exclusivement sur <strong>Meta Ads</strong>. Un seul canal de promotion dont les coûts par acquisition dérapent structurellement, apportant des leads tièdes et hors-cible, alors que les dates de vos sessions Tricopigmentation de Septembre et Décembre approchent à grand pas.
              </p>
              
              <div className="border border-bordeaux/30 bg-gradient-to-r from-bordeaux/20 to-coffee rounded p-4 flex items-start gap-3 mt-6">
                <AlertTriangle className="w-5 h-5 text-gold-flash shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase font-mono text-gold-bright font-semibold">ALERTE DÉPENDANCE</h4>
                  <p className="text-xs text-ivory-muted/90 mt-1">
                    Dépendre d&apos;un canal unique de tiers (Meta) alors que vous possédez intuitivement les registres de 90 000 experts à contacter directement est une asymétrie de risque intenable à long terme.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Specific Identified Pain blocks */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="p-6 bg-coffee/60 border border-gold/10 rounded-sm space-y-3">
                <div className="w-8 h-8 rounded-full bg-bordeaux/20 border border-bordeaux/40 flex items-center justify-center font-mono text-xs text-gold-flash">
                  P1
                </div>
                <h4 className="font-display text-lg font-medium text-ivory">Goulot d'étranglement logistique</h4>
                <p className="text-xs text-ivory-muted leading-relaxed">
                  Contrainte de jauge stricte à Bordeaux (4 à 6 stagiaires). Chaque session vide ou sous-utilisée pénalise l'impulsion de démarrage de l'OF et compromet la légitimité auprès de vos associées Estelle et Noémie.
                </p>
              </div>

              <div className="p-6 bg-coffee/60 border border-gold/10 rounded-sm space-y-3">
                <div className="w-8 h-8 rounded-full bg-bordeaux/20 border border-bordeaux/40 flex items-center justify-center font-mono text-xs text-gold-flash">
                  P2
                </div>
                <h4 className="font-display text-lg font-medium text-ivory">Trésor de données inexploitées</h4>
                <p className="text-xs text-ivory-muted leading-relaxed">
                  Vous avez identifié le code NAF 9602B (DataGouv), mais ces 90 000 lignes brutes de tableur restent une matière inerte. Sans technique pour les enrichir et les qualifier, elles restent inaccessibles.
                </p>
              </div>

              <div className="p-6 bg-coffee/60 border border-gold/10 rounded-sm space-y-3">
                <div className="w-8 h-8 rounded-full bg-bordeaux/20 border border-bordeaux/40 flex items-center justify-center font-mono text-xs text-gold-flash">
                  P3
                </div>
                <h4 className="font-display text-lg font-medium text-ivory">Flou juridique RGPD</h4>
                <p className="text-xs text-ivory-muted leading-relaxed">
                  L'envie d'envoyer des mails est réelle, mais la peur de la sanction CNIL bloque la séquence. Vous n'avez pas de protocole d'opt-out légal, d'hébergement européen ou de mentions juridiques cadrées.
                </p>
              </div>

              <div className="p-6 bg-coffee/60 border border-gold/10 rounded-sm space-y-3">
                <div className="w-8 h-8 rounded-full bg-bordeaux/20 border border-bordeaux/40 flex items-center justify-center font-mono text-xs text-gold-flash">
                  P4
                </div>
                <h4 className="font-display text-lg font-medium text-ivory">Charge décisionnelle excessive</h4>
                <p className="text-xs text-ivory-muted leading-relaxed">
                  Gérer 5 entités commerciales de front impose de préserver votre temps de cerveau. Vous avez besoin d'un canal automatisé alimenté à l'externe, sans gérer d'outils compliqués.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Decorative split line */}
      <div className="max-w-[1120px] mx-auto px-5">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gold/15 to-transparent" />
      </div>

      {/* Section 02: Axes de Valeur (axes) */}
      <section id="axes" className="scroll-mt-24 py-20 md:py-32 lg:py-36">
        <div className="max-w-[1120px] mx-auto px-5">
          <div className="max-w-2xl mx-auto text-center space-y-3 mb-12">
            <span className="eyebrow">02 &middot; AXES DE RÉSULTAT CO-CONSTRUITS</span>
            <h2 className="font-display text-3xl sm:text-4xl text-ivory tracking-tight font-light">
              Notre plan de capture : <span className="italic text-gold-bright">4 piliers d'impact direct.</span>
            </h2>
            <p className="text-xs font-mono text-parchment uppercase">Remplissage · Always-On · Conformité · Réplication</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Pivot AXE 1 */}
            <div className="p-6 bg-gradient-to-b from-coffee-raised to-ink border border-gold/20 rounded relative hover:translate-y-[-4px] transition-all duration-300 group">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-gold to-gold-bright" />
              <div className="text-3xl font-display italic text-gold-flash mb-4 font-light">01</div>
              <h3 className="font-display text-lg font-medium text-ivory mb-2 group-hover:text-gold-flash transition-colors">
                Remplissage ciblé à dates fixes
              </h3>
              <p className="text-xs text-ivory-muted leading-relaxed mb-4">
                Priorité absolue du pilote : remplir les 2 sessions tricopigmentation (Sept. et Déc. 2026 à Bordeaux). Scoring chirurgical IA par persona privilégiant la qualité.
              </p>
              <div className="pt-3 border-t border-gold/10 inline-flex items-center gap-1.5 text-[10px] font-mono uppercase text-gold-bright">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-flash animate-ping" />
                Impact : sessions sécurisées
              </div>
            </div>

            {/* Pivot AXE 2 */}
            <div className="p-6 bg-gradient-to-b from-coffee-raised to-ink border border-gold/10 rounded relative hover:translate-y-[-4px] transition-all duration-300 group">
              <div className="text-3xl font-display italic text-gold mb-4 font-light">02</div>
              <h3 className="font-display text-lg font-medium text-ivory mb-2 group-hover:text-gold-flash transition-colors">
                Canal outreach always-on
              </h3>
              <p className="text-xs text-ivory-muted leading-relaxed mb-4">
                Mise en place d'un flux de prospection récurrent par e-mail direct en complément à vos campagnes publicitaires Meta pour diversifier vos sources de contact.
              </p>
              <div className="pt-3 border-t border-gold/10 inline-flex items-center gap-1.5 text-[10px] font-mono uppercase text-parchment">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-deep" />
                Capitalisable & autonomisant
              </div>
            </div>

            {/* Pivot AXE 3 */}
            <div className="p-6 bg-gradient-to-b from-coffee-raised to-ink border border-gold/10 rounded relative hover:translate-y-[-4px] transition-all duration-300 group">
              <div className="text-3xl font-display italic text-gold mb-4 font-light">03</div>
              <h3 className="font-display text-lg font-medium text-ivory mb-2 group-hover:text-gold-flash transition-colors">
                Conformité RGPD opérationnelle
              </h3>
              <p className="text-xs text-ivory-muted leading-relaxed mb-4">
                Cadrage juridique verrouillé d&apos;entrée de jeu : clause d&apos;opt-out, politique d&apos;hébergement et mentions CNIL intégrées pour un démarchage serein et risqueless.
              </p>
              <div className="pt-3 border-t border-gold/10 inline-flex items-center gap-1.5 text-[10px] font-mono uppercase text-parchment">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-deep" />
                Zéro exposition CNIL dès J1
              </div>
            </div>

            {/* Pivot AXE 4 */}
            <div className="p-6 bg-gradient-to-b from-coffee-raised to-ink border border-gold/10 rounded relative hover:translate-y-[-4px] transition-all duration-300 group">
              <div className="text-3xl font-display italic text-gold mb-4 font-light">04</div>
              <h3 className="font-display text-lg font-medium text-ivory mb-2 group-hover:text-gold-flash transition-colors">
                Actif revendable via Lab Digital
              </h3>
              <p className="text-xs text-ivory-muted leading-relaxed mb-4">
                La méthode validée sur Dermacadémie servira d'étude de cas premium, encapsulée pour être commercialisée par vos soins à vos propres clients TPE/PME.
              </p>
              <div className="pt-3 border-t border-gold/10 inline-flex items-center gap-1.5 text-[10px] font-mono uppercase text-parchment">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-deep" />
                Démultiplication commerciale
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Decorative separator */}
      <div className="max-w-[1120px] mx-auto px-5">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gold/15 to-transparent" />
      </div>

      {/* Section 03: Interactive ROI Simulator (simulateur) */}
      <section id="simulateur" className="scroll-mt-24 py-20 md:py-32 lg:py-36">
        <div className="max-w-[1120px] mx-auto px-5">
          <div className="max-w-3xl space-y-4 mb-12">
            <div className="flex items-center gap-2">
              <span className="h-[1px] w-6 bg-gold" />
              <span className="eyebrow">03 &middot; SIMULATEUR ROI INTERACTIF (NOAH SIZER)</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl text-ivory tracking-tight font-light leading-snug">
              Évaluez votre gain et le <span className="italic text-gold-bright">seuil de rentabilité</span> en temps réel.
            </h2>
            <p className="text-sm text-ivory-muted">
              Sélectionnez vos paramètres stratégiques (secteur, taille, objectif) ou manipulez librement les curseurs pour observer en temps réel la sécurisation de votre actif de rentabilité directe.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Box: Control Panel */}
            <div className="lg:col-span-5 bg-coffee/80 border border-gold/15 rounded p-6 space-y-6 shadow-xl relative">
              <div className="absolute -top-3 left-4 bg-gold-bright text-ink font-mono text-[9px] font-bold px-2 py-0.5 rounded uppercase">
                PANNEAU DE CALIBRATION DU PILOTE
              </div>

              {/* Interactive Sizing Parameters (requested by user) */}
              <div className="space-y-4 pt-2">
                {/* 1. Secteur */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-parchment block uppercase tracking-wider">
                    Secteur d'activité (Cible de l'offre)
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { key: 'OF', label: '🎓 Formation / OF' },
                      { key: 'B2B', label: '🤝 Services / B2B' },
                      { key: 'LUX', label: '💎 Luxe & VIP' },
                      { key: 'SAAS', label: '💻 SaaS / Tech' }
                    ].map((sec) => (
                      <button
                        key={sec.key}
                        type="button"
                        onClick={() => handleSectorChange(sec.key)}
                        className={`px-2 py-2.5 rounded text-left text-xs transition-all duration-200 border cursor-pointer ${
                          companySector === sec.key
                            ? 'border-gold-bright bg-gold-deep/20 text-gold-bright font-semibold'
                            : 'border-gold/10 bg-coffee-raised/60 text-ivory-muted hover:border-gold/30 hover:bg-coffee'
                        }`}
                      >
                        {sec.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Taille de l'entreprise */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-parchment block uppercase tracking-wider">
                    Taille de l'entreprise (Amortissement & Volumes)
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { key: 'TPE', label: 'TPE <10 p.' },
                      { key: 'PME', label: 'PME 10-49' },
                      { key: 'ETI', label: 'ETI 50+ p.' }
                    ].map((sz) => (
                      <button
                        key={sz.key}
                        type="button"
                        onClick={() => handleCompanySizeChange(sz.key)}
                        className={`py-2 rounded text-center text-xs transition-all duration-200 border cursor-pointer ${
                          companySize === sz.key
                            ? 'border-gold-bright bg-gold-deep/20 text-gold-bright font-semibold'
                            : 'border-gold/10 bg-coffee-raised/60 text-ivory-muted hover:border-gold/30 hover:bg-coffee'
                        }`}
                      >
                        {sz.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Objectifs stratégiques */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-parchment block uppercase tracking-wider">
                    Objectif stratégique Principal
                  </label>
                  <div className="grid grid-cols-1 gap-2">
                    {[
                      { key: 'LAUNCH', label: '🚀 Remplissage de sessions / Lancements fixes' },
                      { key: 'ALWAYS_ON', label: '⚙ Flux d\'acquisition récurrent "Always-On"' },
                      { key: 'OUTBOUND', label: '🎯 Prise de rendez-vous Décideurs - Comptes-clés' }
                    ].map((obj) => (
                      <button
                        key={obj.key}
                        type="button"
                        onClick={() => handleObjectiveChange(obj.key)}
                        className={`px-3 py-2.5 rounded text-left text-xs transition-all duration-200 border cursor-pointer ${
                          companyObjective === obj.key
                            ? 'border-gold-bright bg-gold-deep/20 text-gold-bright font-semibold'
                            : 'border-gold/10 bg-coffee-raised/60 text-ivory-muted hover:border-gold/30 hover:bg-coffee'
                        }`}
                      >
                        {obj.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="h-[1px] w-full bg-gold/15 my-4" />

              <span className="text-[9px] font-mono text-parchment uppercase tracking-wider block">
                Ajustement chirurgical des variables de campagne
              </span>

              {/* Slider 1: Average Contract / Ticket Price */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-mono text-ivory-muted uppercase">{dynamicLabels.revenueLabel}</span>
                  <span className="font-mono text-gold-bright font-semibold">{caPerStudent.toLocaleString('fr-FR')} &euro; HT</span>
                </div>
                <input 
                  type="range" 
                  min="500" 
                  max="15000" 
                  step="100" 
                  value={caPerStudent} 
                  onChange={(e) => setCaPerStudent(Number(e.target.value))}
                  className="w-full accent-gold bg-coffee-raised h-1 rounded-sm cursor-pointer" 
                />
                <span className="text-[10px] text-parchment block">{dynamicLabels.revenueDesc}</span>
              </div>

              {/* Slider 2: Jauge (placesPerSession) */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-mono text-ivory-muted uppercase">{dynamicLabels.jaugeLabel}</span>
                  <span className="font-mono text-gold-bright font-semibold">
                    {placesPerSession} {placesPerSession > 1 ? dynamicLabels.unitNamePlural.toLowerCase() : dynamicLabels.unitName.toLowerCase()}
                  </span>
                </div>
                <input 
                  type="range" 
                  min="3" 
                  max="80" 
                  step="1" 
                  value={placesPerSession} 
                  onChange={(e) => setPlacesPerSession(Number(e.target.value))}
                  className="w-full accent-gold bg-coffee-raised h-1 rounded-sm cursor-pointer" 
                />
                <span className="text-[10px] text-parchment block">{dynamicLabels.jaugeDesc}</span>
              </div>

              {/* Slider 3: number of sessions (targetSessions) */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-mono text-ivory-muted uppercase">{dynamicLabels.sessionsLabel}</span>
                  <span className="font-mono text-gold-bright font-semibold">{targetSessions} {targetSessions > 1 ? "vagues" : "vague"} / campagne</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="8" 
                  step="1" 
                  value={targetSessions} 
                  onChange={(e) => setTargetSessions(Number(e.target.value))}
                  className="w-full accent-gold bg-coffee-raised h-1 rounded-sm cursor-pointer" 
                />
                <span className="text-[10px] text-parchment block">{dynamicLabels.sessionsDesc}</span>
              </div>

              {/* Slider 4: filled spots */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-mono text-ivory-muted uppercase">{dynamicLabels.filledLabel}</span>
                  <span className="font-mono text-gold-bright font-semibold">
                    {filledSpots} {filledSpots > 1 ? dynamicLabels.unitNamePlural.toLowerCase() : dynamicLabels.unitName.toLowerCase()}
                  </span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max={placesPerSession * targetSessions} 
                  step="1" 
                  value={filledSpots} 
                  onChange={(e) => setFilledSpots(Number(e.target.value))}
                  className="w-full accent-gold bg-coffee-raised h-1 rounded-sm cursor-pointer" 
                />
                <span className="text-[10px] text-parchment block">{dynamicLabels.filledDesc}</span>
              </div>

              {/* Slider 5: Cost of Acquisition Classique */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-mono text-ivory-muted uppercase">{dynamicLabels.cacLabel}</span>
                  <span className="font-mono text-gold-bright font-semibold">{metaCAC.toLocaleString('fr-FR')} &euro; HT / acquis</span>
                </div>
                <input 
                  type="range" 
                  min="100" 
                  max="4000" 
                  step="50" 
                  value={metaCAC} 
                  onChange={(e) => setMetaCac(Number(e.target.value))}
                  className="w-full accent-gold bg-coffee-raised h-1 rounded-sm cursor-pointer" 
                />
                <span className="text-[10px] text-parchment block">{dynamicLabels.cacDesc}</span>
              </div>

              {/* Slider 6: Pilot Setup Cost */}
              <div className="space-y-2 pt-2 border-t border-gold/10">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-mono text-ivory-muted">BUDGET INITIAL SETUP PILOTE</span>
                  <span className="font-mono text-gold-bright font-semibold">{setupCost.toLocaleString('fr-FR')} &euro; HT</span>
                </div>
                <input 
                  type="range" 
                  min="1000" 
                  max="12000" 
                  step="100" 
                  value={setupCost} 
                  onChange={(e) => setSetupCost(Number(e.target.value))}
                  className="w-full accent-gold bg-coffee-raised h-1 rounded-sm cursor-pointer" 
                />
                <span className="text-[10px] text-parchment block">Mise en place de l'outil de qualification & routage IA sous l'option {selectedPlan}.</span>
              </div>

            </div>

            {/* Right Box: Results & ROI indicators */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="p-6 bg-gradient-to-b from-coffee-raised to-ink border-2 border-gold rounded-sm shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-3">
                  <Coins className="w-12 h-12 text-gold/15 rotate-12" />
                </div>

                <span className="text-xs font-mono uppercase text-gold">SCÉNARIO : {dynamicLabels.scenarioTitle}</span>
                
                <h3 className="font-display text-2xl font-light text-ivory mt-2 mb-6">
                  Modèle d'impact économique de précision
                </h3>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-parchment block font-semibold">POTENTIEL CONTRACTUEL TOTAL</span>
                    <span className="text-2xl font-display text-ivory font-semibold">{calculations.totalCAPotential.toLocaleString('fr-FR')} &euro;</span>
                    <span className="text-[10px] text-ivory-muted block mt-0.5">{calculations.totalSpots} {dynamicLabels.unitNamePlural.toLowerCase()} possibles</span>
                  </div>
                  
                  <div>
                    <span className="text-[10px] font-mono uppercase text-parchment block font-semibold text-gold-flash">TRÉSORERIE À ACTIVER / PERDUE</span>
                    <span className="text-2xl font-display text-gold-flash font-bold">{calculations.vacancyLoss.toLocaleString('fr-FR')} &euro;</span>
                    <span className="text-[10px] text-bordeaux font-mono block mt-0.5">{calculations.remainingSpots} {dynamicLabels.lossDesc}</span>
                  </div>

                  <div className="col-span-2 md:col-span-1">
                    <span className="text-[10px] font-mono uppercase text-parchment block font-semibold">SEUIL AMORTISSEMENT SETUP</span>
                    <span className="text-xl font-display text-gold-bright font-semibold flex items-baseline gap-1 mt-1">
                      {calculations.breakEvenStudents} <span className="text-xs font-sans">{calculations.breakEvenStudents > 1 ? dynamicLabels.unitNamePlural.toLowerCase() : dynamicLabels.unitName.toLowerCase()}</span>
                    </span>
                    <span className="text-[10px] text-ivory-muted block mt-0.5">Pour couvrir {setupCost.toLocaleString('fr-FR')} &euro; HT</span>
                  </div>
                </div>

                {/* Progress bar for filling */}
                <div className="mt-8 space-y-2">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-ivory-muted">Remplissage / conversion du plan : {filledSpots} / {calculations.totalSpots} {dynamicLabels.unitNamePlural.toLowerCase()}</span>
                    <span className="text-gold-bright font-semibold">{calculations.totalSpots > 0 ? ((filledSpots / calculations.totalSpots) * 100).toFixed(0) : 0}%</span>
                  </div>
                  <div className="w-full bg-coffee h-3.5 rounded border border-gold/10 overflow-hidden p-0.5">
                    <div 
                      className="bg-gradient-to-r from-gold-deep via-gold to-gold-bright h-full rounded transition-all duration-500 ease-out flex items-center justify-end pr-2 text-[9px] font-mono font-bold text-ink"
                      style={{ width: `${calculations.totalSpots > 0 ? (filledSpots / calculations.totalSpots) * 100 : 0}%` }}
                    >
                      {filledSpots > 0 && calculations.totalSpots > 0 && `${((filledSpots / calculations.totalSpots) * 100).toFixed(0)}%`}
                    </div>
                  </div>
                </div>

                {/* Visual cost comparison */}
                <div className="mt-8 pt-6 border-t border-gold/10 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <div className="space-y-2">
                    <div className="text-xs font-mono text-parchment leading-tight uppercase">
                      {dynamicLabels.comparisonTitle}
                    </div>
                    <div className="text-2xl font-display text-ivory-muted/90 font-light">
                      ~ {calculations.equivalentMetaAdsInvest.toLocaleString('fr-FR')} &euro; HT
                    </div>
                    <p className="text-[10px] text-parchment leading-relaxed">
                      {dynamicLabels.comparisonDesc}
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-gold/5 to-gold/10 border border-gold-bright/30 rounded p-4 text-left">
                    <div className="text-xs font-mono uppercase text-gold-bright font-semibold flex items-center gap-1">
                      <Sparkles className="w-4 h-4 text-gold-flash" />
                      EFFET DU PILOTE DATA NOAH
                    </div>
                    <div className="text-3xl font-display font-bold text-gold-flash my-1.5 italic">
                      + {calculations.potentialROIValue}x
                    </div>
                    <p className="text-[10px] text-ivory-muted leading-relaxed">
                      Multiplier de trésorerie capturée ou protégée ({calculations.vacancyLoss.toLocaleString('fr-FR')} &euro;) par rapport au prix du setup pilote ({setupCost.toLocaleString('fr-FR')} &euro;).
                    </p>
                  </div>
                </div>

              </div>

              {/* Vacancy loss awareness box */}
              <div className="p-5 bg-bordeaux/15 border border-bordeaux/30 rounded-sm flex items-start gap-4">
                <div className="p-3 bg-bordeaux/20 rounded border border-bordeaux/40 shrink-0">
                  <Flame className="w-6 h-6 text-gold-flash" />
                </div>
                <div>
                  <h4 className="font-display text-lg text-ivory font-medium uppercase text-xs font-mono tracking-wider text-gold-flash">
                    {dynamicLabels.coûtIndecision}
                  </h4>
                  <p className="text-xs text-ivory-muted leading-relaxed mt-1">
                    En B2B ou en cohortes, {dynamicLabels.indecisionText} Avec <strong className="text-gold-flash font-normal">{calculations.remainingSpots} {dynamicLabels.unitNamePlural.toLowerCase()} restants</strong>, ce sont <strong className="text-gold-flash font-normal">{calculations.vacancyLoss.toLocaleString('fr-FR')} &euro; HT</strong> de trésorerie disponible non collectée. Le pilote de prospection IA s'autofinance dès {calculations.breakEvenStudents === 1 ? 'le premier' : `le ${calculations.breakEvenStudents}e`} {dynamicLabels.unitName.toLowerCase()} qualifié obtenu.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Decorative center rule */}
      <div className="max-w-[1120px] mx-auto px-5">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gold/15 to-transparent" />
      </div>

      {/* Section 04: Avant / Après comparaison */}
      <section id="transformation" className="scroll-mt-24 py-20 md:py-32 lg:py-36">
        <div className="max-w-[1120px] mx-auto px-5">
          <div className="max-w-3xl space-y-4 mb-12">
            <div className="flex items-center gap-2">
              <span className="h-[1px] w-6 bg-gold" />
              <span className="eyebrow">04 &middot; COMPARAISON ANALYTIQUE</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl text-ivory tracking-tight font-light leading-snug">
              Le passage au <span className="italic text-gold-bright">système de ciblage data-driven.</span>
            </h2>
            <p className="text-sm text-ivory-muted">
              Une confrontation entre la dépendance actuelle et la souveraineté commerciale visée avec le pilote de prospection.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* L'AVANT - Meta Ads dépendance */}
            <div className="p-6 bg-coffee/40 border border-bordeaux/20 rounded relative">
              <div className="absolute top-0 right-4 translate-y-[-50%] px-3 py-0.5 font-mono text-[9px] uppercase tracking-wider bg-bordeaux/45 text-gold-flash rounded border border-bordeaux/30">
                SITUATION INTERNE ACTUELLE
              </div>
              
              <h3 className="font-display text-xl text-ivory font-medium mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-bordeaux" />
                Dermacadémie sans dispositif Data
              </h3>

              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="w-5 h-5 font-mono text-xs text-bordeaux border border-bordeaux/50 rounded-full flex items-center justify-center shrink-0 mt-0.5">&#10005;</div>
                  <div>
                    <h4 className="text-sm font-semibold text-ivory">Monoculture publicitaire</h4>
                    <p className="text-xs text-ivory-muted leading-relaxed mt-1">
                      Dépendance absolue à Meta Ads. Si l&apos;algorithme fléchit ou si le coût de clic augmente, le flux de leads de tricopigmentation se tarit ou devient inaccessible financièrement.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-5 h-5 font-mono text-xs text-bordeaux border border-bordeaux/50 rounded-full flex items-center justify-center shrink-0 mt-0.5">&#10005;</div>
                  <div>
                    <h4 className="text-sm font-semibold text-ivory">Inertie des 90 000 prospects</h4>
                    <p className="text-xs text-ivory-muted leading-relaxed mt-1">
                      Une base NAF inemployée de 90 000 professionnels de l&apos;esthétique. Faute d&apos;outils techniques pour l&apos;extraire et de scoring IA pour qualifier les adresses, cet actif reste inerte.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-5 h-5 font-mono text-xs text-bordeaux border border-bordeaux/50 rounded-full flex items-center justify-center shrink-0 mt-0.5">&#10005;</div>
                  <div>
                    <h4 className="text-sm font-semibold text-ivory">Flou légal Outreach</h4>
                    <p className="text-xs text-ivory-muted leading-relaxed mt-1">
                      Angoisse permanente de la réglementation RGPD sur la prospection directe. Pas de clauses restrictives, d&apos;explications d&apos;opt-out, ni de conformité contractuelle B2B au démarrage.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-5 h-5 font-mono text-xs text-bordeaux border border-bordeaux/50 rounded-full flex items-center justify-center shrink-0 mt-0.5">&#10005;</div>
                  <div>
                    <h4 className="text-sm font-semibold text-ivory">Volume instable & leads tièdes</h4>
                    <p className="text-xs text-ivory-muted leading-relaxed mt-1">
                      Leads Meta à bas niveau d&apos;engagement, multipliant les faux numéros ou les cliqueurs d&apos;opportunité qui saturent votre temps d&apos;appel commercial de tri.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* L'APRÈS - Dispostif Noah Labs */}
            <div className="p-6 bg-gradient-to-br from-coffee-raised to-ink border-2 border-gold rounded relative">
              <div className="absolute top-0 right-4 translate-y-[-50%] px-3 py-0.5 font-mono text-[9px] uppercase tracking-wider bg-gold text-ink rounded font-bold">
                PROPOSITION SOUS PILOTE COMMANDEE
              </div>
              
              <h3 className="font-display text-xl text-gold-bright font-medium mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gold-flash animate-ping" />
                Avec le Dispositif IA Noah Labs
              </h3>

              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="w-5 h-5 font-mono text-xs text-gold border border-gold rounded-full flex items-center justify-center shrink-0 mt-0.5">&#10003;</div>
                  <div>
                    <h4 className="text-sm font-semibold text-ivory">Multi-canal de prospection</h4>
                    <p className="text-xs text-ivory-muted leading-relaxed mt-1">
                      Vous disposez de deux canaux autonomes de génération de leads (les réseaux publicitaires optimisés + l&apos;outreach sectoriel chirurgical pour cibler en direct).
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-5 h-5 font-mono text-xs text-gold border border-gold rounded-full flex items-center justify-center shrink-0 mt-0.5">&#10003;</div>
                  <div>
                    <h4 className="text-sm font-semibold text-ivory">Filtre chirurgical IA par persona</h4>
                    <p className="text-xs text-ivory-muted leading-relaxed mt-1">
                      Base NAF enrichie via Google Maps et Instagram, validée par un algorithme IA (Esthéticienne 70%, Tatoueur 20%, Perceur 10%) pour livrer des fiches ultra-engagées.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-5 h-5 font-mono text-xs text-gold border border-gold rounded-full flex items-center justify-center shrink-0 mt-0.5">&#10003;</div>
                  <div>
                    <h4 className="text-sm font-semibold text-ivory">RGPD Blindé de bout-en-bout</h4>
                    <p className="text-xs text-ivory-muted leading-relaxed mt-1">
                      Conformité irréprochable avec hébergement UE, mentions juridiques d&apos;intérêt légitime et lien d&apos;opt-out instantané pour supprimer toute trace d&apos;interrogation légale.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-5 h-5 font-mono text-xs text-gold border border-gold rounded-full flex items-center justify-center shrink-0 mt-0.5">&#10003;</div>
                  <div>
                    <h4 className="text-sm font-semibold text-ivory">Actif de méthode capitalisable B2B</h4>
                    <p className="text-xs text-ivory-muted leading-relaxed mt-1">
                      Les bases de données enrichies et la documentation méthodologique de scoring constituent un véritable actif breveté que vous pourrez revendre via Lab Digital d&apos;ici 3 mois.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Decorative center rule separator */}
      <div className="max-w-[1120px] mx-auto px-5">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gold/15 to-transparent" />
      </div>

      {/* Section 05: Méthodologie ( timeline ) */}
      <section id="methodology" className="scroll-mt-24 py-20 md:py-32 lg:py-36">
        <div className="max-w-[1120px] mx-auto px-5">
          <div className="max-w-2xl mx-auto text-center space-y-3 mb-16">
            <span className="eyebrow">05 &middot; FEUILLE DE ROUTE OPÉRATIONNELLE</span>
            <h2 className="font-display text-3xl sm:text-4xl text-ivory font-light tracking-tight">
              Le protocole de déploiement <span className="italic text-gold-bright">étape par étape.</span>
            </h2>
            <p className="text-sm text-ivory-muted">
              Un cycle d&apos;engagement d&apos;impact de 3 mois pour construire votre infrastructure d&apos;outreach sans monopoliser vos ressources techniques.
            </p>
          </div>

          <div className="max-w-3xl mx-auto relative pl-10 md:pl-24 space-y-12">
            
            {/* Master Vertical line */}
            <div className="absolute left-4 md:left-[55px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-gold via-gold/40 to-transparent" />

            {/* Step 0 */}
            <div className="relative">
              <div className="absolute left-[-32px] md:left-[-71px] top-0 w-8 md:w-14 h-8 md:h-14 rounded-full bg-gradient-to-br from-gold to-gold-bright flex items-center justify-center border-4 border-coffee-deep z-10 font-display italic font-semibold text-ink text-sm md:text-lg">
                0
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-gold-bright bg-coffee-raised px-2 py-0.5 rounded">
                  CADRER & PROTOCOLER
                </span>
                <h3 className="font-display text-xl text-ivory font-medium">Définir & Sécuriser la base (J1 - J10)</h3>
                <p className="text-sm text-ivory-muted leading-relaxed">
                  Atelier de cadrage de 2 heures en remote avec Yann et Estelle Carrasco. Définition contractuelle du profil cible qualifié (esthéticienne vs tatoueurs/perceurs), délimitation géographique et rédaction du document cadre de conformité RGPD.
                </p>
                <div className="text-[11px] font-mono text-parchment flex items-center gap-1.5 pt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-bright" />
                  Livrable : Modèle de qualification validé & charte de conformité RGPD.
                </div>
              </div>
            </div>

            {/* Step 1 */}
            <div className="relative">
              <div className="absolute left-[-32px] md:left-[-71px] top-0 w-8 md:w-14 h-8 md:h-14 rounded-full bg-coffee-raised flex items-center justify-center border-2 border-gold/40 z-10 font-display italic font-semibold text-gold-bright text-xs md:text-sm">
                1
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-parchment">
                  EXTRAIRE & ENRICHIR
                </span>
                <h3 className="font-display text-xl text-ivory font-medium">Extraction brute de la base NAF (J10 - J22)</h3>
                <p className="text-sm text-ivory-muted leading-relaxed">
                  Extraction et filtrage de la base de 90 000 salons esthétiques. Automatisation du scraping des données de contact : e-mails professionnels, liens de présence sur le web (profils Instagram, Google Maps, sites internet).
                </p>
                <div className="text-[11px] font-mono text-parchment flex items-center gap-1.5 pt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  Livrable : Base brute enrichie et requêtée hébergée en Europe.
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="absolute left-[-32px] md:left-[-71px] top-0 w-8 md:w-14 h-8 md:h-14 rounded-full bg-coffee-raised flex items-center justify-center border-2 border-gold/40 z-10 font-display italic font-semibold text-gold-bright text-xs md:text-sm">
                2
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-parchment">
                  SCORER & PRIORISER
                </span>
                <h3 className="font-display text-xl text-ivory font-medium">Scoring chirurgical par IA (J22 - J35)</h3>
                <p className="text-sm text-ivory-muted leading-relaxed">
                  Notre modèle d&apos;IA passe au crible chaque profil extrait pour écarter les faux numéros ou les cliqueurs d&apos;opportunités. Attribution d'un score de conversion (Esthéticienne 70%, Tatoueur 20%, Perceur 10%) pour cibler l&apos;urgence à boucher pour Bordeaux.
                </p>
                <div className="text-[11px] font-mono text-parchment flex items-center gap-1.5 pt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  Livrable : Shortlist de 200 à 300 prospects hautement prioritaires scorés.
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="absolute left-[-32px] md:left-[-71px] top-0 w-8 md:w-14 h-8 md:h-14 rounded-full bg-coffee-raised flex items-center justify-center border-2 border-gold/40 z-10 font-display italic font-semibold text-gold-bright text-xs md:text-sm">
                3
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-parchment">
                  OUTILLER & LANCER
                </span>
                <h3 className="font-display text-xl text-ivory font-medium">Déploiement des séquences et landings (J35 - J45)</h3>
                <p className="text-sm text-ivory-muted leading-relaxed">
                  Rédaction de 3 modèles de séquences e-mails différenciées par persona (adaptation du lexique et des thématiques) et déploiement de 3 Landing Pages ultra-rapides et épurées adaptées à chaque niche d&apos;étudiant.
                </p>
                <div className="text-[11px] font-mono text-parchment flex items-center gap-1.5 pt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  Livrable : 3 séquences emailings (avec A/B test) & 3 web pages opérationnelles.
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="absolute left-[-32px] md:left-[-71px] top-0 w-8 md:w-14 h-8 md:h-14 rounded-full bg-coffee-raised flex items-center justify-center border-2 border-gold/40 z-10 font-display italic font-semibold text-gold-bright text-xs md:text-sm">
                4
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-parchment">
                  PILOTER & QUALIFIER
                </span>
                <h3 className="font-display text-xl text-ivory font-medium">Contrôle hebdomadaire & Flux de leads (J45 - J90)</h3>
                <p className="text-sm text-ivory-muted leading-relaxed">
                  Suivi par Stanislas du taux d&apos;ouverture, de réponse et de qualification réelle. Remontée des leads s&apos;engageant directement dans votre boîte mail ou votre messagerie sans friction technique pour vous. Ajustement en continu du score d&apos;opportunité.
                </p>
                <div className="text-[11px] font-mono text-parchment flex items-center gap-1.5 pt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  Livrable : Dashboard Notion synchronisé, flux de qualification continue.
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="relative">
              <div className="absolute left-[-32px] md:left-[-71px] top-0 w-8 md:w-14 h-8 md:h-14 rounded-full bg-gradient-to-br from-coffee-raised to-ink flex items-center justify-center border-2 border-gold-bright/60 z-10 font-display italic font-semibold text-gold-flash text-xs md:text-sm">
                5
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-gold-bright">
                  RÉPLIQUER (ACTIF LAB DIGITAL)
                </span>
                <h3 className="font-display text-xl text-gold-bright font-medium">Packaging de l'offre en marque blanche (Post-Pilote)</h3>
                <p className="text-sm text-ivory-muted leading-relaxed">
                  En fin de mission, notre méthode validée et documentée est transmise à l&apos;entité Lab Digital. Vous disposez d&apos;un Playbook commercial béton ("Le canal de prospection sectoriel") pour le commercialiser à vos propres clients (avocats, artisans, artisans utilitaires).
                </p>
                <div className="text-[11px] font-mono text-gold-flash flex items-center gap-1.5 pt-1">
                  <span className="w-1.1 h-1.1 rounded-full bg-gold-flash" />
                  Livrable : Playbook commercial de la méthode Lab Digital & grille tarifaire.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Decorative divider */}
      <div className="max-w-[1120px] mx-auto px-5">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gold/15 to-transparent" />
      </div>

      {/* Section 06: Livrables complets & Budget contractuel */}
      <section id="livrables" className="scroll-mt-24 py-20 md:py-32 lg:py-36">
        <div className="max-w-[1120px] mx-auto px-5">
          <div className="max-w-3xl space-y-4 mb-16">
            <div className="flex items-center gap-2">
              <span className="h-[1px] w-6 bg-gold" />
              <span className="eyebrow font-bold">06 &middot; PROPORTIONS DU DEVIS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl text-ivory font-light tracking-tight leading-snug">
              L'intégrale des livrables et <span className="italic text-gold-bright">les scénarios d'engagement.</span>
            </h2>
            <p className="text-sm text-ivory-muted">
              Le pilote est un dispositif clé-en-main complet. En phase 2, le modèle au lead limite le risque financier de lancement de Dermacadémie.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Column: All 8 custom assets included */}
            <div className="lg:col-span-6 bg-coffee/40 border border-gold/15 rounded p-6 md:p-8 space-y-6">
              
              <div className="border-b border-gold/10 pb-4">
                <span className="text-[10px] font-mono uppercase text-parchment tracking-widest block">ASSETS LIVRÉS À DERMACADÉMIE</span>
                <h3 className="font-display text-xl text-ivory mt-1">L'infrastructure que vous possédez à l'issue du pilote</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-gold-bright">
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="text-xs uppercase font-mono font-semibold">01 . Fiche de Cadrage</span>
                  </div>
                  <p className="text-[10px] text-ivory-muted pl-6 leading-relaxed">Critères personas validés coavec Estelle pour éliminer le tri manuel.</p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-gold-bright">
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="text-xs uppercase font-mono font-semibold">02 . Accord RGPD</span>
                  </div>
                  <p className="text-[10px] text-ivory-muted pl-6 leading-relaxed">Template opt-out, mentions d&apos;intérêt légitime B2B déposé conforme.</p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-gold-bright">
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="text-xs uppercase font-mono font-semibold">03 . Base Enrichie</span>
                  </div>
                  <p className="text-[10px] text-ivory-muted pl-6 leading-relaxed">Données NAF avec les profils Web, Instagram et Maps actifs en UE.</p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-gold-bright">
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="text-xs uppercase font-mono font-semibold">04 . Modèle de Scoring</span>
                  </div>
                  <p className="text-[10px] text-ivory-muted pl-6 leading-relaxed">Algorithme de calibrage IA documenté pour vos associées.</p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-gold-bright">
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="text-xs uppercase font-mono font-semibold">05 . Pipeline Dashboard</span>
                  </div>
                  <p className="text-[10px] text-ivory-muted pl-6 leading-relaxed">Tableau synchronisé de suivi pour Yann lisible en 5 mins/semaine.</p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-gold-bright">
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="text-xs uppercase font-mono font-semibold">06 . 3 Séquences Email</span>
                  </div>
                  <p className="text-[10px] text-ivory-muted pl-6 leading-relaxed">Copywriting adapté aux thématiques (esthétique vs tatoueurs).</p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-gold-bright">
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="text-xs uppercase font-mono font-semibold">07 . 3 Landers Web</span>
                  </div>
                  <p className="text-[10px] text-ivory-muted pl-6 leading-relaxed">Pages formulaires épurées à fort taux de capture de contact.</p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-gold-bright">
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="text-xs uppercase font-mono font-semibold">08 . Playbook Lab Digital</span>
                  </div>
                  <p className="text-[10px] text-ivory-muted pl-6 leading-relaxed">Documentation de la méthode pour revente en direct sous marque blanche.</p>
                </div>

              </div>
              
              <div className="pt-4 border-t border-gold/10 text-[11px] text-parchment italic flex items-start gap-2">
                <Lock className="w-4 h-4 text-gold-flash shrink-0 mt-0.5" />
                <span>Tous les assets restent la propriété intellectuelle exclusive de l&apos;écosystème Lab Académie / Lab Digital dès le règlement final de la mise en place.</span>
              </div>

            </div>

            {/* Right: Three budget plans Selector */}
            <div className="lg:col-span-6 flex flex-col justify-between gap-4">
              
              {/* Plan A Option */}
              <div 
                onClick={() => setSelectedPlan('A')}
                className={`p-5 rounded-sm cursor-pointer border transition-all duration-300 relative overflow-hidden ${
                  selectedPlan === 'A' 
                    ? 'border-gold bg-gradient-to-r from-gold/10 to-coffee-warm' 
                    : 'border-gold/15 bg-coffee-raised/50 hover:border-gold/30 hover:bg-coffee'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="text-[10px] font-mono text-parchment tracking-widest uppercase">OPTION A</div>
                    <h4 className="font-display text-lg text-ivory font-medium">Sprint Événementiel Light</h4>
                    <p className="text-xs text-ivory-muted max-w-[360px] leading-relaxed">
                      Mise en place brute (0 à 3) + suivi succinct pour boucher les sessions de Septembre/Décembre. Idéal pour boucher au coup par coup.
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-lg font-display italic text-gold-bright">1 900 &euro;</span>
                    <span className="block text-[9px] font-mono text-parchment text-right uppercase mt-1">Setup + lead basis</span>
                  </div>
                </div>
              </div>

              {/* Plan B Recommended Option */}
              <div 
                onClick={() => setSelectedPlan('B')}
                className={`p-5 rounded-sm cursor-pointer border-2 transition-all duration-300 relative overflow-hidden ${
                  selectedPlan === 'B' 
                    ? 'border-gold-bright bg-gradient-to-br from-coffee-warm/50 to-coffee shadow-[0_12px_30px_-6px_rgba(212,165,116,0.22)]' 
                    : 'border-gold/15 bg-coffee-raised/50 hover:border-gold/30 hover:bg-coffee'
                }`}
              >
                <div className="absolute top-0 right-0 p-2">
                  <span className="text-[8px] font-mono font-bold uppercase tracking-wider bg-gold-bright text-ink px-1.5 py-0.5 rounded">
                    recommandé pour revente
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="text-[10px] font-mono text-gold-bright tracking-widest uppercase font-semibold">OPTION B</div>
                    <h4 className="font-display text-lg text-gold-flash font-medium">Programme Pilote Complet</h4>
                    <p className="text-xs text-ivory-muted max-w-[360px] leading-relaxed">
                      La totalité des modules 0 à 4 avec en bonus le <strong className="text-ivory">Playbook de réplication (5)</strong>. Conçu pour valider le modèle ET packager l&apos;actif de revente de Lab Digital d&apos;ici 3 mois.
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-xl font-display italic text-gold-flash font-bold">2 900 &euro;</span>
                    <span className="block text-[9px] font-mono text-parchment text-right uppercase mt-1">Setup + PPL qualifiés</span>
                  </div>
                </div>
              </div>

              {/* Plan C Option */}
              <div 
                onClick={() => setSelectedPlan('C')}
                className={`p-5 rounded-sm cursor-pointer border transition-all duration-300 relative overflow-hidden ${
                  selectedPlan === 'C' 
                    ? 'border-gold bg-gradient-to-r from-gold/10 to-coffee-warm' 
                    : 'border-gold/15 bg-coffee-raised/50 hover:border-gold/30 hover:bg-coffee'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="text-[10px] font-mono text-parchment tracking-widest uppercase">OPTION C</div>
                    <h4 className="font-display text-lg text-ivory font-medium">Externalisation outreach Always-On</h4>
                    <p className="text-xs text-ivory-muted max-w-[360px] leading-relaxed">
                      Idéal après validation du pilote. Accompagnement structurel à l&apos;année pour alimenter Dermacadémie et tester de nouvelles niches (artisans, juristes, etc).
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-lg font-display italic text-gold-bright">Forfait</span>
                    <span className="block text-[9px] font-mono text-parchment text-right uppercase mt-1">annuel négocié</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Checklist section verifying RGPD & sovereignty */}
      <div className="max-w-[1120px] mx-auto px-5 pb-16">
        <div className="p-6 md:p-8 bg-ink/75 border border-gold/15 rounded-sm grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-1 space-y-1">
            <span className="text-[9px] font-mono bg-coffee-raised px-2 py-0.5 rounded text-gold-flash font-semibold uppercase">
              VÉRIFICATION DE CONFORMITÉ
            </span>
            <h4 className="font-display text-xl text-ivory">Pourquoi la prospection B2B par e-mail direct est légale ?</h4>
            <p className="text-xs text-ivory-muted leading-relaxed">
              La CNIL applique une exception pour les adresses professionnelles génériques ou nominatives dans le cas d&apos;offres liées à l&apos;activité du destinataire.
            </p>
          </div>
          
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex gap-2.5 items-start">
              <span className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center shrink-0 mt-0.5 text-xs text-gold">✔</span>
              <div>
                <span className="text-xs font-semibold text-ivory block">L'objet est professionnel</span>
                <p className="text-[11px] text-ivory-muted leading-relaxed">L&apos;offre de Tricopigmentation ou de conformité d&apos;hygiène s&apos;aligne précisément sur l&apos;activité des salons esthétiques.</p>
              </div>
            </div>
            <div className="flex gap-2.5 items-start">
              <span className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center shrink-0 mt-0.5 text-xs text-gold">✔</span>
              <div>
                <span className="text-xs font-semibold text-ivory block">Droit d'opposition immédiat</span>
                <p className="text-[11px] text-ivory-muted leading-relaxed">Chaque e-mail d&apos;outreach intègre une option claire de désengagement totale en 1 clic pour cesser instantanément.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 07: CTA Form Block (contact) */}
      <section id="contact" className="scroll-mt-24 py-20 md:py-32 lg:py-36">
        <div className="max-w-[1120px] mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start bg-gradient-to-b from-coffee to-ink border border-gold/20 rounded p-6 md:p-12 shadow-2xl relative">
            
            <div className="absolute top-0 right-10 w-24 h-[1px] bg-gradient-to-r from-gold via-gold-bright to-transparent" />

            {/* Form copywriting left */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-2">
                <span className="h-[1px] w-4 bg-gold" />
                <span className="eyebrow">07 &middot; PRE-ENGAGEMENT CIBLÉ</span>
              </div>
              
              <h2 className="font-display text-3xl sm:text-4xl text-ivory font-light leading-tight">
                Engager le cadrage de votre <span className="italic text-gold-bright">dispositif pilote.</span>
              </h2>

              <p className="text-xs text-ivory-muted leading-relaxed">
                Ce formulaire n&apos;est pas une vente forcée, mais l&apos;ouverture d&apos;un canal d&apos;échange confidentiel. En appuyant sur envoyer, vous transmettez automatiquement les paramètres du simulateur ROI à <strong className="text-ivory">Stanislas BASQUIN</strong> pour préparer l&apos;atelier technique d&apos;extraction de DataGouv.
              </p>

              <div className="pt-4 border-t border-gold/10 space-y-3">
                <div className="flex items-center gap-2 text-xs text-ivory-muted">
                  <Mail className="w-4 h-4 text-gold-bright shrink-0" />
                  <span>Envoi direct : <strong className="text-gold-bright">stanislas@noah-consultant.com</strong></span>
                </div>
                <div className="flex items-center gap-2 text-xs text-ivory-muted">
                  <Briefcase className="w-4 h-4 text-gold-bright shrink-0" />
                  <span>Cadrage initial : <strong className="text-gold-bright">Gratuit & sans engagement</strong></span>
                </div>
              </div>

              {/* Dynamic feedback card showing calculated value for the checkout */}
              <div className="p-4 bg-coffee-raised/90 border border-gold/15 rounded-sm">
                <span className="text-[9px] font-mono uppercase text-parchment block">RÉSUMÉ DU PILOTE SÉLECTIONNÉ :</span>
                <div className="flex justify-between items-center mt-2 border-b border-gold/10 pb-2">
                  <span className="text-xs text-ivory font-semibold">
                    {selectedPlan === 'A' && 'Option A: Sprint Événementiel'}
                    {selectedPlan === 'B' && 'Option B: Programme Pilote Complet'}
                    {selectedPlan === 'C' && 'Option C: outreach récurrent'}
                  </span>
                  <span className="text-sm font-mono text-gold-flash font-semibold">
                    {selectedPlan === 'A' && '1 900 € HT'}
                    {selectedPlan === 'B' && '2 900 € HT'}
                    {selectedPlan === 'C' && 'Sur devis'}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-2 pt-1 text-[10px] text-ivory-muted leading-snug">
                  <div>
                    <span>Amorti dès : <strong className="text-gold-flash">{calculations.breakEvenStudents} stagiaire(s)</strong></span>
                  </div>
                  <div>
                    <span>CA cherché : <strong className="text-gold-flash">{calculations.vacancyLoss.toLocaleString('fr-FR')} &euro;</strong></span>
                  </div>
                </div>
              </div>

            </div>

            {/* Interactive Form Panel right */}
            <div className="lg:col-span-7 bg-ink/80 rounded p-6 md:p-8 border border-gold/10 shadow-xl">
              
              {formIsSubmitted ? (
                <div className="space-y-6 text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-gold/10 border-2 border-gold-bright flex items-center justify-center mx-auto text-gold-bright text-2xl font-bold animate-bounce">&#10003;</div>
                  <div className="space-y-2">
                    <h3 className="font-display text-2xl text-gold-flash">Proposition d&apos;atelier transmise</h3>
                    <p className="text-xs text-ivory-muted max-w-md mx-auto leading-relaxed">
                      Merci Yann. Stanislas BASQUIN va passer en revue vos paramètres requis (CA cible, jauge de {placesPerSession} places) pour calibrer l&apos;extraction de la base esthétique 9602B.
                    </p>
                    <p className="text-[11px] font-mono text-parchment pt-2">
                      Un e-mail de confirmation technique a été envoyé à {contactEmail}.
                    </p>
                  </div>
                  <button 
                    onClick={() => setFormIsSubmitted(false)}
                    className="px-4 py-2 border border-gold/30 rounded text-xs text-gold-bright hover:bg-gold/5 font-mono"
                  >
                    Modifier la configuration
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <h3 className="text-xs font-mono uppercase text-parchment tracking-wider block mb-4 border-b border-gold/10 pb-2">
                    CONFIGURER MA PROPOSITION DE CADRAGE :
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono text-parchment block">NOTRE CONTACT :</label>
                      <input 
                        type="text" 
                        required
                        value={contactName} 
                        onChange={(e) => setContactName(e.target.value)}
                        className="w-full bg-coffee-raised border border-gold/20 focus:border-gold rounded font-medium text-xs px-3.5 py-2.5 text-ivory focus:outline-none" 
                      />
                    </div>
                    
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono text-parchment block">E-MAIL DE CADRAGE :</label>
                      <input 
                        type="email" 
                        required
                        value={contactEmail} 
                        onChange={(e) => setContactEmail(e.target.value)}
                        className="w-full bg-coffee-raised border border-gold/20 focus:border-gold rounded text-xs px-3.5 py-2.5 text-ivory focus:outline-none" 
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-parchment block">ORGANISME DE FORMATION :</label>
                    <input 
                      type="text" 
                      required
                      value={companyName} 
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full bg-coffee-raised border border-gold/20 focus:border-gold rounded text-xs px-3.5 py-2.5 text-ivory focus:outline-none" 
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                    <div className="bg-coffee/40 border border-gold/10 rounded p-2 text-center">
                      <span className="block text-[8px] font-mono text-parchment uppercase">SESSIONS VISÉES</span>
                      <span className="text-sm font-semibold text-gold-bright">{targetSessions}</span>
                    </div>
                    <div className="bg-coffee/40 border border-gold/10 rounded p-2 text-center">
                      <span className="block text-[8px] font-mono text-parchment uppercase">PLACES CORRESPONDANTES</span>
                      <span className="text-sm font-semibold text-gold-bright">{calculations.remainingSpots} libres</span>
                    </div>
                    <div className="bg-coffee/40 border border-gold/10 rounded p-2 text-center">
                      <span className="block text-[8px] font-mono text-parchment uppercase">RÉPARTITION ESTIMÉE</span>
                      <span className="text-xs font-semibold text-gold-bright">70/20/10 IA</span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-parchment block">SPECIFICITÉS LOGISTIQUES DU PILOTE :</label>
                    <textarea 
                      rows={3}
                      value={customMsg}
                      onChange={(e) => setCustomMsg(e.target.value)}
                      className="w-full bg-coffee-raised border border-gold/20 focus:border-gold rounded text-xs px-3.5 py-2.5 text-ivory focus:outline-none resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button 
                      type="submit" 
                      className="w-full py-4 bg-gradient-to-br from-gold-bright to-gold text-ink uppercase font-mono text-xs font-bold tracking-widest hover:translate-y-[-2px] transition duration-300 shadow-[0_10px_30px_-10px_rgba(184,137,95,0.45)]"
                    >
                      Valider les données du Devis & Cadrer l'Atelier Gratuit &rarr;
                    </button>
                    <span className="text-[9px] text-parchment mt-1.5 block text-center">
                      Conformément à l&apos;éthique BNI, vos données restent cryptées et stockées uniquement en interne de Noah Labs.
                    </span>
                  </div>

                </form>
              )}

            </div>

          </div>
        </div>
      </section>

      {/* Floating alert bar when submitted */}
      {showNotification && (
        <div className="fixed bottom-5 right-5 z-50 p-4 bg-coffee-raised border-2 border-gold-bright rounded shadow-2xl max-w-md animate-slide-up flex gap-3 items-start">
          <div className="p-2 bg-gold/10 rounded text-gold-bright text-xs">✔</div>
          <div>
            <h5 className="text-xs font-semibold text-ivory uppercase">TRANSMISSION OK</h5>
            <p className="text-[11px] text-ivory-muted leading-relaxed mt-0.5">
              Le pilote {selectedPlan === 'A' ? 'Sprint' : 'Complet'} avec {placesPerSession} places par session a été envoyé. Stanislas BASQUIN va préparer l&apos;atelier.
            </p>
          </div>
          <button onClick={() => setShowNotification(false)} className="text-parchment hover:text-ivory">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Main Spacer Wrapper End */}
      </div>

      {/* Footer System */}
      <footer className="border-t border-gold/10 bg-gradient-to-b from-coffee-raised to-ink py-16 text-left relative z-10">
        <div className="max-w-[1120px] mx-auto px-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center bg-transparent">
                  <span className="font-display italic text-gold font-bold text-xs">NL</span>
                </div>
                <div className="font-display text-lg text-ivory">
                  Noah Labs <span className="text-parchment font-light text-sm">Boutique Studio IA & Data</span>
                </div>
              </div>
              <p className="text-xs text-ivory-muted max-w-[420px] leading-relaxed">
                Interventions de transmission Data & IA par sprints mesurables orientés performance pour les dirigeants de TPE/PME et de cabinets d&apos;expertise.
              </p>
              <div className="text-[10px] font-mono text-parchment-dim tracking-wide uppercase">
                PROPULSÉ PAR STANISLAS BASQUIN &middot; NOAH CONSULTANT 
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <span className="block text-[10px] font-mono text-parchment uppercase tracking-wider">OFFRE</span>
                <ul className="space-y-1.5 text-xs text-ivory-muted">
                  <li><a href="#contexte" className="hover:text-gold-flash">Le Pain Client</a></li>
                  <li><a href="#axes" className="hover:text-gold-flash">Les 4 Axes</a></li>
                  <li><a href="#simulateur" className="hover:text-gold-flash">Simulateur de Gains</a></li>
                </ul>
              </div>
              <div className="space-y-2">
                <span className="block text-[10px] font-mono text-parchment uppercase tracking-wider">COLLABORATION</span>
                <ul className="space-y-1.5 text-xs text-ivory-muted">
                  <li><a href="#methodology" className="hover:text-gold-flash">Méthodologie</a></li>
                  <li><a href="#livrables" className="hover:text-gold-flash">Livrables Du Pilote</a></li>
                  <li><a href="#contact" className="hover:text-gold-flash">Cadrer votre Atelier</a></li>
                </ul>
              </div>
              <div className="space-y-2">
                <span className="block text-[10px] font-mono text-parchment uppercase tracking-wider">CONTACT DIRECT</span>
                <ul className="space-y-1.5 text-xs text-ivory-muted">
                  <li className="text-gold-bright">stanislas@noah-consultant.com</li>
                  <li className="text-parchment">BNI Bordeaux &middot; France</li>
                </ul>
              </div>
            </div>

          </div>

          <div className="mt-12 pt-8 border-t border-gold/5 flex flex-col sm:flex-row items-center justify-between gap-6 text-[10px] font-mono text-parchment-dim uppercase">
            <div>
              &copy; 3 Juin 2026 Noah Labs &middot; Tous droits réservés &middot; Confidentialité maximum
            </div>
            <div className="flex gap-4">
              <span>Hébergé conformément aux normes UE</span>
              <span>Propriété de l&apos;OF : Lab Académie</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
