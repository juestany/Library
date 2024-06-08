import React, { createContext, useContext, useState } from 'react';

// @ts-ignore
const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

// @ts-ignore
export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('English'); // Default language is English

    const toggleLanguage = () => {
        setLanguage(prevLanguage => prevLanguage === 'English' ? 'Polish' : 'English');
    };

    // @ts-ignore
    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
