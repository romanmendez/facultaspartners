import React, {useContext, useState, useMemo} from 'react'

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
  const value = useMemo(() => [language, setLanguage], [language])
  return <LanguageContext.Provider value={value} {...props} />
}

export {useLanguage, LanguageProvider}
