const links = [
  {
    text: {
      en: 'About Us',
      es: 'Quiénes Somos',
    },
    link: 'about',
  },
  {
    text: {
      en: 'What We Do',
      es: 'Servicios',
    },
    link: 'wedo',
  },
  {
    text: {
      en: 'The Team',
      es: 'Equipo',
    },
    link: 'team',
  },
  {
    text: {
      en: 'Special Relationships',
      es: 'Relaciones Especiales',
    },
    link: 'relationships',
  },
  {
    text: {
      en: 'Contact',
      es: 'Contacto',
    },
    link: 'contact',
  },
]

const header = {
  header: {
    en: 'Gain Scale And Lower Risks',
    es: 'GANAR ESCALABILIDAD Y REDUCIR RIESGOS',
  },
  subheader: {
    en:
      'An EU - US advisory firm and provider of capital that bridges the Atlantic bringing together early stage life sciences companies to',
    es:
      'Consultora Estadounidense y Europea,  que conecta empresas del sector Ciencias de la Vida a ambos lados del Atlántico, y pone a su disposición capital de inversión para',
  },
  button: {
    text: {
      en: 'Contact Us',
      es: 'Contáctanos',
    },
    link: 'contact',
  },
}

const dna = require('../assets/dna.svg')
const cert = require('../assets/experience.svg')
const link = require('../assets/link.svg')
const handshake = require('../assets/agreement.svg')

const about = {
  header: {
    en:
      'Facultas partners is a team based in the US and Europe, with extensive experience working in the life sciences sector on both sides of the Atlantic.',
    es:
      'El equipo que configura Facultas Partner está localizado tanto en Estados Unidos como en Europa, y cuenta con una amplia experiencia en el sector de Ciencias de la Vida a ambos lados del Atlántico.',
  },
  cards: [
    {
      text: {
        en:
          'A track record of heading life sciences start-ups and growth companies.',
        es:
          'Historial de éxito liderando start-ups y empresas en crecimiento, del sector de ciencias de la vida.',
      },
      icon: dna,
    },
    {
      text: {
        en:
          'Veteran founders and C-level executives (CEO, COO) with experience across all aspects of life sciences operations.',
        es:
          'Fundadores y ejecutivos con amplia experiencia en distintos aspectos del sector.',
      },
      icon: cert,
    },
    {
      text: {
        en:
          'Deep established relationships with the life sciences ecosystems in the US and the EU',
        es:
          'Con relaciones muy bien establecidas en el ecosistema de ciencias de la vida, tanto en Estados Unidos como en Europa',
      },
      icon: link,
    },
    {
      text: {
        en:
          'Experience with cross border M&A, JV, post-merger integration, negotiating deals terms over successive rounds of investment and exit.',
        es:
          'Experiencia en fusiones y adquisiciones, joint ventures, integración de empresas, negociación y gestión de rondas de inversión y desinversión.',
      },
      icon: handshake,
    },
  ],
}
const mendez = require('../assets/profile_imgs/mendez.jpg')
const masterson = require('../assets/profile_imgs/masterson.jpg')
const igielski = require('../assets/profile_imgs/igielski.jpg')
const flucht = require('../assets/profile_imgs/flucht.jpg')
const coats = require('../assets/profile_imgs/coats.jpg')
const bunnenberg = require('../assets/profile_imgs/bunnenberg.jpg')
const sainzMartinez = require('../assets/profile_imgs/sainz-martinez.jpg')
const castellanoJimenez = require('../assets/profile_imgs/castellano-jimenez.jpeg')
const odriozola = require('../assets/profile_imgs/odriozola.jpg')
const montoya = require('../assets/profile_imgs/montoya.png')
const monis = require('../assets/profile_imgs/monis.jpg')

const team = {
  header: {
    en: 'The Team',
    es: 'El Equipo',
  },
  hover: {
    en: 'View Profile',
    es: 'Ver Perfil',
  },
  members: [
    {
      name: 'Miguel A. Mendez',
      title: {
        en: 'Managing Partner',
        es: 'Managing Partner',
      },
      bio: {
        en:
          'A multinational and entrepreneurial trajectory spanning the US and Europe. A successful career as a Managing Director investment banker advising European companies on cross border M&A, followed by a career as CEO/founder or advisor of technology growth companies in Europe and the US across multiple sectors, including life sciences.',
        es:
          'Su trayectoria multinacional y empresarial abarca Estados Unidos y Europa. Ha desarrollado una exitosa carrera como director general de banca de negocios, asesorando a empresas europeas en fusiones y adquisiciones internacionales. Ha sido CEO/fundador y asesor de empresas de crecimiento tecnológico en Europa y Estados Unidos en múltiples sectores, incluidas las ciencias de la vida.',
      },
      email: 'mmendez@facultaspartners.com',
      team: 'us',
      img: mendez,
    },
    {
      name: 'Robert Masterson',
      title: {
        en: 'Partner',
        es: 'Partner',
      },
      bio: {
        en:
          '25 years of executive experience in the Seattle area life sciences sector. Founder of multiple Medtech companies, Tessera Diagnostics, Prevencio, Opticyte. As Entrepreneur in Residence mentored and supported fellow entrepreneurs at UW and OHSU. BA in Science Microbiology and Ph.D in Molecular, Cellular and Development Biology.',
        es:
          '25 años de experiencia como ejecutivo en el sector de las ciencias de la vida en el área de Seattle (Wa). Fundador de múltiples empresas: Medtech, Tessera Diagnostics, Prevencio, Opticyte. “Entrepreneur-in-Residense”, ha sido mentor y asesorado  a otros emprendedores en la Universidad de Washington y en OHSU (Oregon Health & Science University). Licenciado en Microbiología Científica y Doctor en Biología Molecular y Celular.',
      },
      email: 'rmasterson@facultaspartners.com',
      team: 'us',
      img: masterson,
    },
    {
      name: 'Chris Igielski',
      title: {
        en: 'Partner',
        es: 'Partner',
      },
      bio: {
        en:
          'Chris raised capital for the WFund an early stage venture fund with a life sciences focus. As its Chief Operating Officer, he negotiated more than 40 company investments. He served as interim CEO of TwinStrand Bio. He currently serves as board member or observer on four life sciences companies. Chris is a member of the US patent bar, but in addition holds a degree in chemical engineering.',
        es:
          'Chris levantó capital de inversión para el WFnd Fondo de capital riesgo de la Universidad de Washington,  enfocado en el sector de Ciencias de la Vida. Como COO (Chief Operating Officer) llevó a cabo más de 40 inversiones en distintas compañías. Fue CEO interino de TwinStrand Bio. Actualmente, es consejero y observador en cuatro empresas del sector de ciencias de la vida. Chris es ingeniero químico y miembro del tribunal de patentes estadounidense.',
      },
      email: 'cigielski@facultaspartners.com',
      team: 'us',
      img: igielski,
    },
    {
      name: 'Brian Flucht',
      title: {
        en: 'Advisor',
        es: 'Advisor',
      },
      bio: {
        en:
          'He has operated and invested across the IT and Life sciences domains for over 22 years, including direct equity purchases and structured debt financing. His experience as venture capitalist and corporate development professional spans seed stage to large multinationals. MBA from the University of Southern California, BSc in Material Science & Engineering,  Northwestern University.',
        es:
          'Ha desarrollado su carrera profesional como ejecutivo e inversor en compañías del sector de TI y Ciencias de la Vida durante más de 22 años. Realizado operaciones de adquisición con capital y deuda. Su experiencia como capitalista de riesgo y profesional de desarrollo corporativo abarca empresas desde fase semilla a grandes multinacionales. MBA con especialización en finanzas corporativas y grado en Ciencias de los Materiales e Ingeniería.',
      },
      email: 'bflucht@facultaspartners.com',
      team: 'us',
      img: flucht,
    },
    {
      name: 'Jack Coats',
      title: {
        en: 'Advisor',
        es: 'Advisor',
      },
      bio: {
        en:
          'A senior executive and entrepreneur. He has led and founded multiple companies – CardioWise, 3dMD, Vision RT in the medical imaging segment. Prior to that he led the life sciences businesses of FEI and Xradia leaders in nanotechnology imaging. As President of Nucletron Corp., formulated a groundbreaking strategy and guided several successful market introductions at Varian Medical Systems.',
        es:
          'Ejecutivo de alta dirección y empresario. Ha fundado y dirigido múltiples empresas – CardioWise, 3dMD, Vision RT, del segmento de imagen médica. Con anterioridad dirigió varios negocios de ciencias de la vida FEI y Xradia, líder en imágenes de nanotecnología. Como Presidente de Nucletron Corp., formuló una estrategia innovadora y guió la exitosa introducción en el mercado de Varian Medical Systems.',
      },
      email: 'jcoats@facultaspartners.com',
      team: 'us',
      img: coats,
    },
    {
      name: 'Ann Bunnenberg',
      title: {
        en: 'Advisor',
        es: 'Advisor',
      },
      bio: {
        en:
          'Twenty-five years founding, leading and exiting medical device companies. Co-founded and took public Geodesis Inc. (now Phillips Neuro) high resolution EEG systems. Currently CEO of two biomedical companies- Synergic Medical Technologies Inc and CytoImage. Board member of various private and not for profit companies – WellRythms, Invivo Biosciences, Oregon Inc. A lawyer by training with experience in transactional and commercial litigation.',
        es:
          'Veinticinco años fundando, y liderando compañías de dispositivos médicos. Cofundó y introdujo en bolsa Geodesis Inc. (Phillips Neuro) sistemas de alta resolución EEG. Actualmente es CEO de dos empresas biomédicas: Synergic Medical Technologies Inc y CytoImage. Miembro del consejo de administración de varias empresas privadas y sin ánimo de lucro – WellRythms, Invivo Biosciences, Oregon Inc. Abogado de formación, con experiencia en litigios transaccionales y comerciales.',
      },
      email: 'abunnenberg@facultaspartners.com',
      team: 'us',
      img: bunnenberg,
    },
    {
      name: 'Enrique Sainz Martinez',
      title: {
        en: 'Partner',
        es: 'Partner',
      },
      bio: {
        en:
          'Entrepreneur and founder of multiple companies; Subvenciuris, grant consulting, Areka Telelcom electromagnetic installations, Valoralia I MAS D development of molecular building blocks for antibiotics from cyanobacteria. Founder and Chairman of Canaan Research the Spanish life sciences investment company, majority shareholder of Mirnax Biosens, Isquaemia Biotech, Forchronic and Derma Innovate. Lawyer by training and MBA.',
        es:
          'Emprendedor y fundador de múltiple empresas: Subvenciuris,  gestión de ayudas y subvenciones , Areka Telecom  instalaciones electromagnéticas. Cofundador de Valoralia I MAS D.  especializada en el desarrollo de líneas moleculares para Antibióticos procedentes de cianobacterias. \n Cofundador y Presidente de Canaan Research . Compañía de inversión  en salud y accionista mayoritaria en Mirnax Biosens, Isquaemia Biotech , Forchronic  y Derma Innovate. Licenciado en derecho por la UAM MBA.',
      },
      email: 'esainz@facultaspartners.com',
      team: 'eu',
      img: sainzMartinez,
    },
    {
      name: 'Jose L. Castellano Jimenez',
      title: {
        en: 'Partner',
        es: 'Partner',
      },
      bio: {
        en:
          'Corporate lawyer. Twenty years’ experience advising European companies of different size, from different sectors; technology, renewable energies, food, real estate and life sciences. Professional experience in the US and Spain. Master in international business and finance.',
        es:
          'Abogado de empresa. Veinte años de experiencia en el asesoramiento de empresa europeas de distinto tamaño en diferentes sectores: tecnología, energías renovables, alimentación, inmobiliario y ciencias de la vida. Cuenta con experiencia profesional en Estados Unidos y España. MBA, master en negocio internacional y financiero.',
      },
      email: 'jlcastellano@facultaspartners.com',
      team: 'eu',
      img: castellanoJimenez,
    },
    {
      name: 'Juan Jose Montoya Miñano',
      title: {
        en: 'Partner',
        es: 'Partner',
      },
      bio: {
        en:
          'Extensive experience leading and managing R& D project. Chief Research Officer at Universidad Alfonso X el Sabio, (UAX) the leading engineering and medical private university in Spain. Professor of Medicine at Universidad Complutense. Founder and board member Canaan Research the Spanish life sciences investment company, the majority shareholder of Mirnax Biosens, Isquaemia Biotech, Forchronic and Derma Innovate. PhD in medicine, MBA.',
        es:
          'Amplia experiencia en dirección y gestión de R+D+i: más de 10 años como Responsable de Investigación en la Universidad Alfonso X el Sabio. Así como en emprendimiento: Socio fundador y consejero de Canaan Research . Venture Capital especializada en salud y promotor de Mirnax Biosens (CEO), Isquaemia Biotech , Forchronic  y Derma Innovate Doctor (PhD) en Medicina y Cirugía UAM, MBA en la UAX y  Programa Alta Dirección de Innovación en el IESE. Profesor Facultad de Medicina de la Universidad Complutense de Madrid.',
      },
      email: 'jjmontoya@facultaspartners.com',
      team: 'eu',
      img: montoya,
    },
    {
      name: 'Ignacio Odriozola',
      title: {
        en: 'Advisor',
        es: 'Advisor',
      },
      bio: {
        en:
          'Ignacio has more than 30 years in senior management positions in the healthcare sector, Palex Medical, CH Werfen Group. He has worked in Spain, the US and Italy. Since 2000 founding partner of LIM Global Consulting an executive search firm and consulting firm focused on life sciences across Europe.  A Spanish national fluent in English and based in Barcelona.',
        es:
          'Ignacio cuenta con más de 30 años de experiencia en puestos de alta dirección en el sector sanitario, Palex Medical, CH Werfen Group. Ha trabajado en España, Estados Unidos e Italia. Desde el año 2000, es socio fundador de LIM Global Consulting, una firma de búsqueda ejecutiva y consultora enfocada en ciencias de la vida en toda Europa.  Español de nacimiento, con fluidez en inglés y sede en Barcelona.',
      },
      email: 'iodriozola@facultaspartners.com',
      team: 'eu',
      img: odriozola,
    },
    {
      name: 'Antonio Monis',
      title: {
        en: 'Advisor',
        es: 'Advisor',
      },
      bio: {
        en:
          'Antonio has over 30 years’ experience in the finance and insurance sectors, as well as in life sciences at most senior level. CFO of ING Insurance Company, independent director of Reale Seguros de Vida (Reale Group). Chairman of the board of Mirnax Biosens a diagnostic company. MBA and Advanced Management Program at INSEAD.',
        es:
          'Más de treinta años de experiencia en el sector financiero, asegurador y ciencias de la vida. Ex Director Financiero y de Riesgos de ING Seguros. Consejero independiente de Reale Seguros de Vida. Presidente de Mirnax Biosens empresa de diagnóstico, pronóstico y control de enfermedades cardiovasculares.\n Licenciado en Ciencias Empresariales. Master en Dirección Financiera (Instituto de Empresa) y Advanced Management Programme (Insead – Fontainebleau).',
      },
      email: 'amonis@facultaspartners.com',
      team: 'eu',
      img: monis,
    },
  ],
}

const globe = require('../assets/world.jpg')
const briefcase = require('../assets/briefcase.jpg')
const arm = require('../assets/arm.jpg')
const money = require('../assets/money.jpg')
const hands = require('../assets/hands.jpg')
const heart = require('../assets/heart.jpg')
const advisoryLarge = require('../assets/strategigadvisory-bg.jpg')
const advisorySmall = require('../assets/advisory-img.jpg')

const advisory = {
  header: {
    en: 'Strategic Advisory',
    es: 'Asesoramiento en estrategia',
  },
  description: {
    en:
      'Based upon our deep knowledge of the life sciences landscape on both sides of the Atlantic we identify companies that exhibit compelling complementarities, and work to bring them together to achieve (1+1=3). We subsequently invest in them via two separate investments funds based in the EU and the US.',
    es:
      'Basándonos en nuestro profundo conocimiento del entorno de las ciencias de la vida a ambos lados del Atlántico, identificamos empresas que tengan potencial de complementarse y trabajamos en la unión de ambas para incrementar su valor (1+1=3). Posteriormente invertimos para potenciar sus resultados, a través de dos fondos de inversión independientes con sede en la UE y los Estados Unidos.',
  },
  img: {
    large: advisoryLarge,
    small: advisorySmall,
  },
  subheader: {
    en:
      'We build innovative companies from all sectors of life sciences, including drug development, medical devices, digital health technology & services, nutraceuticals and diagnostics with the following attributes.',
    es:
      'Nuestro objetivo es construir empresas del sector ciencias de la vida en todos los segmentos (desarrollo de fármacos, med-tech, salud digital y nutracéuticos) con los siguientes parámetros.',
  },
  cards: [
    {
      text: {
        en: 'A presence in two large markets; the US and Europe.',
        es: 'Presencia en dos grandes mercados: Estados Unidos y Europa.',
      },
      icon: globe,
      color: 'white',
    },
    {
      text: {
        en: 'A broader and strategically complimentary product portfolio.',
        es:
          'Portfolio de productos más amplios y mejor posicionado estratégicamente.',
      },
      icon: briefcase,
      color: 'black',
    },
    {
      text: {
        en:
          'Complementary strengths in core operational area – technology, manufacturing, R&D and product development.',
        es:
          'Fortalezas complementarias en las principales áreas operativas: tecnología, fabricación, I+D y desarrollo de productos.',
      },
      icon: arm,
      color: 'white',
    },
    {
      text: {
        en:
          'An enhanced ability to raise funding both dilutive and non-dilutive from a wider number of sources.',
        es:
          'Mayor capacidad y diversidad de fuentes de financiación, tanto dilutiva como no dilutiva.',
      },
      icon: money,
      color: 'black',
    },
    {
      text: {
        en:
          'A greater and more diverse set of relationships on both sides of the Atlantic.',
        es:
          'Amplio y diverso esquema de relaciones a ambos lados del Atlántico.',
      },
      icon: hands,
      color: 'white',
    },
    {
      text: {
        en:
          'A new found ability to pursue two separate regulatory paths and choose the fastest and most promising one.',
        es:
          'Capacidad para seguir dos vías regulatorias distintas, con objeto de elegir la más rápida y prometedora.',
      },
      icon: heart,
      color: 'black',
    },
  ],
}

const capitalLarge = require('../assets/providerofcapital-bg.jpg')
const capitalSmall = require('../assets/provider-img.jpg')
const plant = require('../assets/hand-plant.jpg')
const triangles = require('../assets/polygons.jpg')

const capital = {
  header: {
    en: 'Provider of Capital',
    es: 'PROVEEDOR DE CAPITAL',
  },
  description: {
    en:
      'Drawing on two separate investment funds based in the EU and the US, we aim to  invest in the newly “merged” life sciences companies we have contributed to bring together.',
    es:
      'Basándonos en dos fondos de inversión separados con sede en la UE y Estados Unidos, invertimos en las nuevas empresas de ciencias de la vida "fusionadas" gracias a nuestra intervención profesional.',
  },
  img: {
    large: capitalLarge,
    small: capitalSmall,
  },
  subheader: {
    en: 'We are an active partner and investor',
    es: 'Nos configuramos como un inversor y socio activo.',
  },
  cards: [
    {
      text: {
        en:
          'We take a hands-on approach to facilitate the post-merger integration process.',
        es:
          'Adoptamos un enfoque práctico para facilitar el proceso de integración posterior a la fusión',
      },
      icon: plant,
      color: 'black',
    },
    {
      text: {
        en:
          'We work tirelessly with the merged entity to ascertain all the strategic synergies are realized.',
        es:
          'Trabajamos incansablemente con la entidad fusionada para asegurar la efectividad de todas las sinergias estratégicas.',
      },
      icon: triangles,
      color: 'white',
    },
  ],
}

const canaan = require('../assets/canaan_rd.png')

const relationships = {
  header: {
    en: 'Special Relationships',
    es: 'RELACIONES ESPECIALES',
  },
  subheader: {
    en:
      'Facultas Partners in-depth knowledge of life sciences ecosystems in both the US and the EU comes about thanks to the special relationship we build in those ecosystems.',
    es:
      'El profundo conocimiento de Facultas Partners en el ecosistema de Ciencias de la Vida, a ambos lados del Atlántico, resulta de las especiales relaciones que construimos en este ecosistema, tanto en Europa como en Estados Unidos.',
  },
  list: [
    {
      header: {
        en: 'Canaan Research & Investment',
        es: 'Canaan Research & Investment',
      },
      text: {
        en:
          "A leading Spanish life sciences early stage investment group. It enjoys very close working relationships with Spain's leading life sciences research institutions and works to translate ground breaking and proprietary technologies into successful spin-offs.",
        es:
          'Grupo de inversión español en empresas en fase de early stage, del sector Ciencias de la Vida. Goza de relaciones muy estrechas con las principales instituciones de investigación de ciencias de la vida, y trabaja para convertir tecnologías innovadoras en spin-offs de éxito.',
      },
      img: {
        src: canaan,
        margin: {margin: '-10px 0 0 0'},
      },
    },
  ],
}

const contact = {
  header: {
    en: 'Contact',
    es: 'Contacta',
  },
  form: {
    to: {
      en: 'Send to:',
      es: 'Enviar a:',
    },
    from: {
      en: 'Email Address',
      es: 'Dirección de correo electrónico',
    },
    name: {
      en: 'Full Name',
      es: 'Nombre completo',
    },
    message: {
      en: 'Message',
      es: 'Mensaje',
    },
    send: {
      en: 'Send',
      es: 'Enviar',
    },
    errorMessage: {
      name: {
        en: 'Please provide us with your name',
        es: 'Indícanos tu nombre',
      },
      noEmail: {
        en: 'You must enter your email address',
        es: 'Debes indicar una dirección de correo',
      },
      invalidEmail: {
        en: 'Please provide a valid email address',
        es: 'Debes introducir un correo válido',
      },
    },
  },
  thankyou: {
    header: {
      en: 'Thank You',
      es: 'Gracias',
    },
    text: {
      en:
        "We've received your message and we will get back to you as soon as posible.",
      es:
        'Hemos recibido su mensaje y nos pondremos en contacto con usted lo antes posible.',
    },
    back: {
      en: 'Back',
      es: 'Volver',
    },
    again: {
      en: 'Send Another Message',
      es: 'Enviar Otro Mensaje',
    },
  },
}

module.exports = {
  links,
  header,
  about,
  team,
  advisory,
  capital,
  relationships,
  contact,
}
