export type Locale = "es" | "en"

export const translations = {
  es: {
    nav: {
      camera: "CÁMARA",
      map: "MAPA",
      wallet: "ZK-WALLET",
      docs: "DOCUMENTACIÓN",
      tech: "TECNOLOGÍA",
      roadmap: "ROADMAP",
      faq: "FAQ",
    },
    hero: {
      badge: "DEVCONNECT BUENOS AIRES // NOV 15, 2025",
      title1: "EL 15 DE NOV DE 2025,",
      title2: "EN DEVCONNECT,",
      title3: "EL CIELO SE CAYÓ.",
      subtitle: "VIENTO, LLUVIA, CALOR EXTREMO EN 24 HORAS.",
    },
    critical: {
      title: "Mientras el clima colapsaba afuera, adentro seguíamos optimizando rendimientos APY del 0.001%.",
      description:
        "Ethereum nació para coordinar a la humanidad, no solo para especular con ella. El 99% de las dApps hoy son casinos glorificados.",
      highlight: "Hemos fallado a la visión original.",
    },
    solution: {
      title1: "NO SOMOS DEFI.",
      title2: "SOMOS REFI.",
      subtitle: "RECUPERAMOS EL MUNDO FÍSICO DESDE EL DIGITAL.",
      anonymous: {
        title: "100% ANÓNIMO",
        desc: "Zero Knowledge Proofs protegen tu identidad",
      },
      ai: {
        title: "AI-POWERED",
        desc: "Standards x402 & 8002 validan impacto real",
      },
      gasless: {
        title: "SIN GAS",
        desc: "Sin permisos. Solo impacto verificable.",
      },
    },
    cta: {
      button: "PROOF OF CLEANUP // CAPTURE NOW",
      subtitle: "Toma una foto. Verifica el impacto. Gana recompensas. Todo anónimo.",
    },
    stats: {
      heading: "IMPACTO EN VIVO",
      cleanups: "Cleanups Verificados",
      agents: "AI Agents Activos",
      waste: "Toneladas Removidas",
      privacy: "Privacidad ZK",
    },
    cases: {
      heading: "CASOS DE USO",
      a: {
        label: "CASO_A://",
        title: "The Shadow Walker",
        desc: "Un cypherpunk que odia el KYC. Limpia su barrio, gana tokens, mantiene su identidad oculta con ZK-Proofs.",
        footer: "→ Impacto público, identidad privada.",
      },
      b: {
        label: "CASO_B://",
        title: "The AI Auditor",
        desc: "Agente autónomo ERC-8002 cruza datos satelitales con fotos. Detecta fraude automáticamente on-chain.",
        footer: "→ Confianza programática. No confíes, verifica.",
      },
      c: {
        label: "CASO_C://",
        title: "The Tax Hacker",
        desc: "Corporaciones compran Impact Certificates. No saben quién limpió, pero saben matemáticamente que ocurrió.",
        footer: "→ Bonos verdes verificables. Compliance instantáneo.",
      },
    },
    howto: {
      heading: "CÓMO FUNCIONA",
      step1: {
        title: "Captura",
        desc: "Toma una foto del área que limpiaste con tu smartphone",
      },
      step2: {
        title: "AI Valida",
        desc: "Agentes ERC-8002 verifican tu impacto contra datos satelitales",
      },
      step3: {
        title: "ZK Protege",
        desc: "Tu identidad permanece 100% anónima con ZK-STARKs",
      },
      step4: {
        title: "Gana Rewards",
        desc: "Recibe tokens + Impact Certificates verificables on-chain",
      },
    },
    tech: {
      heading: "Technical Stack",
      items: {
        zk: { title: "ZK-STARKs", desc: "Privacy Layer" },
        x402: { title: "x402 Standard", desc: "AI Agent Work" },
        erc: { title: "ERC-8002", desc: "Hybrid AI Logic" },
        circular: { title: "Circular Economy", desc: "Impact → Value" },
      },
    },
    roadmap: {
      heading: "ROADMAP PÚBLICO",
      phase1: {
        title: "FASE 1: PROOF OF CONCEPT",
        items: [
          "Deploy del protocolo en testnet",
          "Integración de cámara + geolocalización",
          "Primera validación con x402 AI Agent",
          "Sistema de reputación anónimo (ZK)",
        ],
      },
      phase2: {
        title: "FASE 2: MAINNET ALPHA",
        items: [
          "Launch en Buenos Aires post-DevConnect",
          "Integración con datos satelitales",
          "Marketplace de Impact Certificates",
          "Auditorías de seguridad ZK-STARKs",
        ],
      },
      phase3: {
        title: "FASE 3: ESCALA GLOBAL",
        items: [
          "Expansión a 10 ciudades latinoamericanas",
          "DAO para gobernanza del protocolo",
          "Partnerships con gobiernos locales",
          "Standard x402 como protocolo abierto",
        ],
      },
    },
    faq: {
      heading: "PREGUNTAS FRECUENTES",
      q1: {
        q: "¿Por qué ZK-Proofs?",
        a: "Porque la privacidad no es opcional. Si tu identidad está atada a cada acción, no eres libre. ZK-STARKs prueban el impacto sin revelar quién eres.",
      },
      q2: {
        q: "¿Cómo evitan el fraude?",
        a: "AI Agents (ERC-8002) cruzan tus fotos con datos satelitales y modelos de detección de objetos. No puedes falsificar el impacto porque la validación es matemática.",
      },
      q3: {
        q: "¿Quién paga las recompensas?",
        a: "Corporaciones que necesitan compliance ESG real. Compran Impact Certificates verificables on-chain. Es economía circular: impacto real genera valor real.",
      },
      q4: {
        q: "¿Es esto solo para crypto-nerds?",
        a: "No. Es una app con cámara. Tomas foto, ganas tokens. La complejidad técnica está oculta. El impacto es visible.",
      },
    },
    whitepaper: {
      title: "ReFi Universe Protocol (ReFiUP)",
      subtitle: "White-Paper Style · Typewriter Font · Black & White · No Scroll · No Buttons",
      tagline: '"Como Pokémon Go — pero en lugar de atrapar Pokémon, recolectas basura. Salva el mundo. Diviértete."',
      description:
        "Un protocolo de finanzas regenerativas para la humanidad. Vibes OG. Energía Cypher. Un mensaje del futuro disfrazado como white paper.",
      energy: "🜁 Powered by Open-Source Humanity",
      alerts: {
        defi: "SI ESTÁS CONSTRUYENDO DEFI NO ERES HUMANO 🚨",
        refi: "FXK DEFI — CONSTRUYE REFI.",
      },
      powered: {
        heading: "Powered by Open-Source Humanity",
      },
      inspiration: {
        heading: "Inspiration",
        video: '※ Video reference: "Hombre en África"',
      },
      modules: {
        heading: "Core Modules",
        tech: "Tech",
        context: "Context",
        history: "History",
        ux: "UX",
        empty: "(Open to fill later)",
      },
      manifesto: {
        p1: "El clima colapsó el 15 de noviembre de 2025 en DevConnect Buenos Aires. Mientras afuera había viento, lluvia y calor extremo en 24 horas, adentro seguíamos optimizando rendimientos del 0.001%. Ethereum nació para coordinar a la humanidad, no solo para especular.",
        p2: "ReFi Universe Protocol usa Zero Knowledge Proofs para proteger tu privacidad mientras verificas impacto real. AI Agents (x402, ERC-8002) validan cada limpieza contra datos satelitales. No más greenwashing. No más KYC. Solo matemática, impacto y recompensas.",
        p3: "Esta es la visión original de Ethereum: coordinar humanos para resolver problemas reales. No casinos. No especulación. Regeneración.",
      },
      footer: {
        heading: "Footer",
        message: "A message from the future disguised as a white paper. Built with OG Cypher energy.",
      },
    },
    footer: {
      powered: "Powered by ReFi Universe // ZK-STARKs // x402 AI",
      links: {
        docs: "Docs",
        github: "GitHub",
        discord: "Discord",
      },
    },
  },
  en: {
    nav: {
      camera: "CAMERA",
      map: "MAP",
      wallet: "ZK-WALLET",
      docs: "DOCUMENTATION",
      tech: "TECHNOLOGY",
      roadmap: "ROADMAP",
      faq: "FAQ",
    },
    hero: {
      badge: "DEVCONNECT BUENOS AIRES // NOV 15, 2025",
      title1: "ON NOV 15, 2025,",
      title2: "AT DEVCONNECT,",
      title3: "THE SKY FELL DOWN.",
      subtitle: "WIND, RAIN, EXTREME HEAT IN 24 HOURS.",
    },
    critical: {
      title: "While climate collapsed outside, inside we kept optimizing 0.001% APY yields.",
      description:
        "Ethereum was born to coordinate humanity, not just speculate with it. 99% of dApps today are glorified casinos.",
      highlight: "We have failed the original vision.",
    },
    solution: {
      title1: "WE'RE NOT DEFI.",
      title2: "WE'RE REFI.",
      subtitle: "WE RECLAIM THE PHYSICAL WORLD FROM THE DIGITAL.",
      anonymous: {
        title: "100% ANONYMOUS",
        desc: "Zero Knowledge Proofs protect your identity",
      },
      ai: {
        title: "AI-POWERED",
        desc: "Standards x402 & 8002 validate real impact",
      },
      gasless: {
        title: "GASLESS",
        desc: "Permissionless. Only verifiable impact.",
      },
    },
    cta: {
      button: "PROOF OF CLEANUP // CAPTURE NOW",
      subtitle: "Take a photo. Verify the impact. Earn rewards. All anonymous.",
    },
    stats: {
      heading: "LIVE IMPACT",
      cleanups: "Verified Cleanups",
      agents: "Active AI Agents",
      waste: "Tons Removed",
      privacy: "ZK Privacy",
    },
    cases: {
      heading: "USE CASES",
      a: {
        label: "CASE_A://",
        title: "The Shadow Walker",
        desc: "A cypherpunk who hates KYC. Cleans their neighborhood, earns tokens, keeps identity hidden with ZK-Proofs.",
        footer: "→ Public impact, private identity.",
      },
      b: {
        label: "CASE_B://",
        title: "The AI Auditor",
        desc: "Autonomous ERC-8002 agent crosses satellite data with photos. Detects fraud automatically on-chain.",
        footer: "→ Programmatic trust. Don't trust, verify.",
      },
      c: {
        label: "CASE_C://",
        title: "The Tax Hacker",
        desc: "Corporations buy Impact Certificates. They don't know who cleaned, but they know mathematically that it happened.",
        footer: "→ Verifiable green bonds. Instant compliance.",
      },
    },
    howto: {
      heading: "HOW IT WORKS",
      step1: {
        title: "Capture",
        desc: "Take a photo of the area you cleaned with your smartphone",
      },
      step2: {
        title: "AI Validates",
        desc: "ERC-8002 agents verify your impact against satellite data",
      },
      step3: {
        title: "ZK Protects",
        desc: "Your identity remains 100% anonymous with ZK-STARKs",
      },
      step4: {
        title: "Earn Rewards",
        desc: "Receive tokens + verifiable Impact Certificates on-chain",
      },
    },
    tech: {
      heading: "Technical Stack",
      items: {
        zk: { title: "ZK-STARKs", desc: "Privacy Layer" },
        x402: { title: "x402 Standard", desc: "AI Agent Work" },
        erc: { title: "ERC-8002", desc: "Hybrid AI Logic" },
        circular: { title: "Circular Economy", desc: "Impact → Value" },
      },
    },
    roadmap: {
      heading: "PUBLIC ROADMAP",
      phase1: {
        title: "PHASE 1: PROOF OF CONCEPT",
        items: [
          "Protocol deployment on testnet",
          "Camera + geolocation integration",
          "First validation with x402 AI Agent",
          "Anonymous reputation system (ZK)",
        ],
      },
      phase2: {
        title: "PHASE 2: MAINNET ALPHA",
        items: [
          "Launch in Buenos Aires post-DevConnect",
          "Satellite data integration",
          "Impact Certificates marketplace",
          "ZK-STARKs security audits",
        ],
      },
      phase3: {
        title: "PHASE 3: GLOBAL SCALE",
        items: [
          "Expansion to 10 Latin American cities",
          "DAO for protocol governance",
          "Partnerships with local governments",
          "x402 Standard as open protocol",
        ],
      },
    },
    faq: {
      heading: "FREQUENTLY ASKED QUESTIONS",
      q1: {
        q: "Why ZK-Proofs?",
        a: "Because privacy is not optional. If your identity is tied to every action, you're not free. ZK-STARKs prove impact without revealing who you are.",
      },
      q2: {
        q: "How do you prevent fraud?",
        a: "AI Agents (ERC-8002) cross your photos with satellite data and object detection models. You can't fake impact because validation is mathematical.",
      },
      q3: {
        q: "Who pays the rewards?",
        a: "Corporations that need real ESG compliance. They buy verifiable Impact Certificates on-chain. It's circular economy: real impact generates real value.",
      },
      q4: {
        q: "Is this only for crypto-nerds?",
        a: "No. It's an app with a camera. Take photo, earn tokens. Technical complexity is hidden. Impact is visible.",
      },
    },
    whitepaper: {
      title: "ReFi Universe Protocol (ReFiUP)",
      subtitle: "White-Paper Style · Typewriter Font · Black & White · No Scroll · No Buttons",
      tagline: '"Like Pokémon Go — but instead of catching Pokémon, you collect trash. Save the world. Have fun."',
      description:
        "A regenerative finance protocol for humanity. OG vibes. Cypher energy. A message from the future disguised as a white paper.",
      energy: "🜁 Powered by Open-Source Humanity",
      alerts: {
        defi: "IF YOU'RE BUILDING DEFI YOU ARE NOT HUMAN 🚨",
        refi: "FXK DEFI — BUILD REFI.",
      },
      powered: {
        heading: "Powered by Open-Source Humanity",
      },
      inspiration: {
        heading: "Inspiration",
        video: '※ Video reference: "Hombre en África"',
      },
      modules: {
        heading: "Core Modules",
        tech: "Tech",
        context: "Context",
        history: "History",
        ux: "UX",
        empty: "(Open to fill later)",
      },
      manifesto: {
        p1: "Climate collapsed on November 15, 2025 at DevConnect Buenos Aires. While outside there was wind, rain, and extreme heat in 24 hours, inside we kept optimizing 0.001% yields. Ethereum was born to coordinate humanity, not just to speculate.",
        p2: "ReFi Universe Protocol uses Zero Knowledge Proofs to protect your privacy while verifying real impact. AI Agents (x402, ERC-8002) validate each cleanup against satellite data. No more greenwashing. No more KYC. Just math, impact, and rewards.",
        p3: "This is Ethereum's original vision: coordinate humans to solve real problems. No casinos. No speculation. Regeneration.",
      },
      footer: {
        heading: "Footer",
        message: "A message from the future disguised as a white paper. Built with OG Cypher energy.",
      },
    },
    footer: {
      powered: "Powered by ReFi Universe // ZK-STARKs // x402 AI",
      links: {
        docs: "Docs",
        github: "GitHub",
        discord: "Discord",
      },
    },
  },
}

export function useTranslation(locale: Locale) {
  return translations[locale]
}
