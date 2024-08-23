
type LanguagesAvailability = "us"|"es"
const languagesAvailability : LanguagesAvailability[] = ["us", "es"];

export const existsLang = (language : string | null) => {
    if(!language) return false;
    return languagesAvailability.some(languageArray => languageArray === language)
};