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

const logo = require('../../assets/logo-menu.png')
const header = {
  header: {
    en: 'Gain Scale And Lower Risks',
    es: 'Crecer y reducir riesgos',
  },
  subheader: {
    en:
      'An EU - US advisory firm and provider of capital that bridges the Atlantic bringing together early stage life sciences companies to',
    es:
      'Empresa asesora y proveedora de capital Estadounidense y Europea,  que conecta empresas del sector Ciencias de la Vida a ambos lados del Atlántico, y pone a su disposición capital de inversión para',
  },
  button: {
    text: {
      en: 'Contact Us',
      es: 'Contacto',
    },
    link: 'contact',
  },
  logo: logo,
}

module.exports = {links, header}
