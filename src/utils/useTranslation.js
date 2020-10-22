import { useState } from 'react';

const useTranlation = (
  appLanguage = 'en',
  appDictionary = {},
  replaceStartSign = '{{',
  replaceEndSign = '}}'
) => {
  const [dictionary] = useState(appDictionary);
  const [language, setLanguage] = useState(appLanguage);

  const onChangeLanguage = (callback = () => {}) => callback();
  const changeLanguage = newLanguage => {
    setLanguage(newLanguage);
    onChangeLanguage();
  };

  const getTranslation = (text = '', replacements = []) => {
    const register = dictionary[text];
    if (typeof register === 'undefined') return text;

    let translation = register[language];
    if (replacements) {
      if (Array.isArray(replacements)) {
        replacements.forEach(replacement => {
          translation = translation.replace(
            `${replaceStartSign}${replacement.label}${replaceEndSign}`,
            replacement.value
          );
        });
      } else if (replacements.label) {
        translation = translation.replace(
          `${replaceStartSign}${replacements.label}${replaceEndSign}`,
          replacements.value
        );
      }
    }

    return translation || text;
  };

  return {
    changeLanguage,
    onChangeLanguage,
    getTranslation
  };
};

export default useTranlation;
