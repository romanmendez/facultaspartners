const capitalLarge = require('../../assets/providerofcapital-bg.jpg')
const capitalSmall = require('../../assets/provider-img.jpg')

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
      icon: 'touch_app',
      color: 'black',
    },
    {
      text: {
        en:
          'We work tirelessly with the merged entity to ascertain all the strategic synergies are realized.',
        es:
          'Trabajamos incansablemente con la entidad fusionada para asegurar la efectividad de todas las sinergias estratégicas.',
      },
      icon: 'call_merge',
      color: 'white',
    },
  ],
}

module.exports = capital
