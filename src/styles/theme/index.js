export const theme = {
  darkBlue: '#005990',
  lightBlue: '#E8F1F5',
  navLinks: '#FAFAFA',
  grey: '#717272',
}

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1250px',
  desktop: '2560px',
}

export const device = {
  medium: `(min-width: ${size.mobileL}) and (max-width: 900px)`,
  large: `(min-width: 900px) and (max-width: ${size.laptopL})`,
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileS}) and (max-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileM}) and (max-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.mobileL}) and (max-width: ${size.tablet})`,
  laptop: `(min-width: ${size.tablet}) and (max-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptop}) and (max-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.laptopL}) and (max-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
}
