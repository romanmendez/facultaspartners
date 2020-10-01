const advisoryLarge = require('../../assets/strategigadvisory-bg.jpg')
const advisorySmall = require('../../assets/advisory-img.jpg')

const advisory = {
  header: {
    en: 'Strategic Advisory',
    es: 'Asesoramiento en estrategia',
  },
  description: {
    en:
      'Based upon our deep knowledge of the life sciences landscape on both sides of the Atlantic we identify companies that exhibit compelling complementarities, and work to bring them together to achieve (1+1=3). We subsequently invest in them via two separate investments funds based in the EU and the US.',
    es:
      'Basándonos en nuestro profundo conocimiento del entorno de las ciencias de la vida a ambos lados del Atlántico, identificamos empresas que tengan potencial para complementarse, y trabajamos en la vinculación de ambas para incrementar su valor (1+1=3). Posteriormente invertimos con el objetivo de potenciar sus resultados, a través de dos fondos de inversión independientes con sede Europa y Estados Unidos.',
  },
  img: {
    large: advisoryLarge,
    small: advisorySmall,
  },
  subheader: {
    en:
      'We build innovative companies from all sectors of life sciences, including drug development, medical devices, digital health technology & services, nutraceuticals and diagnostics with the following attributes.',
    es:
      'Nuestro objetivo es construir empresas del sector ciencias de la vida en todos los segmentos (desarrollo de fármacos, med-tech, salud digital y nutracéuticos) con los siguientes parámetros:',
  },
  cards: [
    {
      text: {
        en: 'A presence in two large markets; the US and Europe.',
        es: 'Presencia en dos grandes mercados: Estados Unidos y Europa.',
      },
      icon: 'public',
      color: 'white',
    },
    {
      text: {
        en: 'A broader and strategically complimentary product portfolio.',
        es:
          'Portfolio de productos más amplios y mejor posicionado estratégicamente.',
      },
      icon: 'all_inbox',
      color: 'black',
    },
    {
      text: {
        en:
          'Complementary strengths in core operational area – technology, manufacturing, R&D and product development.',
        es:
          'Fortalezas complementarias en las principales áreas operativas: tecnología, fabricación, I+D y desarrollo de productos.',
      },
      icon: 'donut_small',
      color: 'white',
    },
    {
      text: {
        en:
          'An enhanced ability to raise funding both dilutive and non-dilutive from a wider number of sources.',
        es:
          'Mayor capacidad y diversidad de fuentes de financiación, tanto dilutiva como no dilutiva.',
      },
      icon: 'attach_money',
      color: 'black',
    },
    {
      text: {
        en:
          'A greater and more diverse set of relationships on both sides of the Atlantic.',
        es:
          'Amplio y diverso esquema de relaciones a ambos lados del Atlántico.',
      },
      icon: 'people',
      color: 'white',
    },
    {
      text: {
        en:
          'A new found ability to pursue two separate regulatory paths and choose the fastest and most promising one.',
        es:
          'Capacidad para seguir dos vías regulatorias distintas, con objeto de elegir la más rápida y prometedora.',
      },
      icon: 'account_balance',
      color: 'black',
    },
  ],
}

module.exports = advisory
