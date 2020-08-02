import { useState } from 'react';

const useTranlation = (appLanguage, appDictionary) => {
  const [dictionary] = useState(appDictionary);
  const [language, setLanguage] = useState(appLanguage);

  const changeLanguage = newLanguage => setLanguage(newLanguage);

  const getTranslation = (text, replacements) => {
    const register = dictionary[text];
    if (typeof register === 'undefined') return text;

    let translation = register[language];
    if (replacements)
      replacements.forEach(replacement => {
        translation = translation.replace(
          `%${replacement.label}%`,
          replacement.value
        );
      });

    return translation || text;
  };

  return {
    changeLanguage,
    getTranslation
  };
};

export default useTranlation;
