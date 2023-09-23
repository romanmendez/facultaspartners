# Facultas Partners

## Purpose 🎯

The website was created to serve as the digital face of the consulting company Facultas Partners. It highlights their mission, values, and key members.

The companies main focus is to serve as a bridge for businesses looking to bridge the Atlantic, so the main feature of the website is the quick language toggle to switch between English and Spanish.

The app is wrapped in a context function using `react.createContext` and `react.useContext` which holds the language selection.

```js
const LanguageContext = React.createContext('en');

function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within the LanguageProvider');
  }
  return context;
}

function LanguageProvider(props) {
  const [language, setLanguage] = useState('en');
  const storedSetting = JSON.parse(localStorage.getItem('language'));

  useEffect(() => {
    if (storedSetting) setLanguage(storedSetting);
    else setLanguage(navigator.language.substring(0, 2) || 'en');
  }, [language]);

  const value = useMemo(() => [language, setLanguage], [language]);
  return <LanguageContext.Provider value={value} {...props} />;
}
```

Every component in the app then uses this context to determine which language to display from an object file containing both versions.

```js
function BannerSection({ header, text, img, side }) {
  const [language] = useLanguage();

  return (
    <Stack space={0}>
      <Box background={theme.lightBlue} width='100%'>
        <Center>
          <h2 style={{ color: `${theme.darkBlue}` }}>{header[language]}</h2>
        </Center>
      </Box>
      <Box img={img}>
        <p style={{ color: 'white' }}>{text[language]}</p>
      </Box>
    </Stack>
  );
}
```

## Tech Stack 🛠

- React
- Serverless SPA

## Features ✨

### Quick Language Toggle 🌍

Quickly switch between English and Spanish versions of the website. The site will default to the user's navigator language setting.

### Scroll 📜

Navigate to your desired section smoothly with `react-scroll`.

### The Team 👥

Toggle between US and European team members. Member details popup for deep dives.

### Contact 💌

Select the regional lead you wish to connect. Send them an email by filling out a form powered by `react-hook-form` and `emailjs-com`.

### Design 🎨

Built following Every Layout principles and styled with styled-components. Buttons and icons by Material UI.

## Installation 🚀

Clone the repo, then:

```bash
npm i
npm start
```

## Usage 🧭

The site aims to be a breeze to navigate. Fast, easy, and simple.

## Credits 📝

- Form Submission: `react-hook-form` & `emailjs-com`
- Icons & Buttons: `Material UI`
- CSS Design Principles: Every Layout by Heydon Pickering & Andy Bell
- CSS Style: `styled-components`
- Scroll: `react-scroll`
- Build & Compiling: `parcel`
