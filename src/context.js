import React, {useContext, useState, useMemo, useEffect} from 'react'

const LanguageContext = React.createContext('en')

function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within the LanguageProvider')
  }
  return context
}

function LanguageProvider(props) {
  const [language, setLanguage] = useState('en')
  const storedSetting = JSON.parse(localStorage.getItem('language'))

  useEffect(() => {
    if (storedSetting) setLanguage(storedSetting)
    else setLanguage(navigator.language.substring(0, 2) || 'en')
  }, [language])

  const value = useMemo(() => [language, setLanguage], [language])
  return <LanguageContext.Provider value={value} {...props} />
}

export {useLanguage, LanguageProvider}
