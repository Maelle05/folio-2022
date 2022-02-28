import * as fr from '../../static/fr.json';
import * as en from '../../static/en.json';

export class Languages {
  constructor() {
    this.lang = null;
    this.fr = null;
    this.en = null;
  }

  init(){
    this.fr = fr
    this.en = en
    this.hendelLanguages()
  }

  hendelLanguages(){
    const browserLanguage = navigator.language
    if(browserLanguage != "fr" && browserLanguage != "en"){
      this.lang = "en"
    } else {
      this.lang = browserLanguage
    }
    this.setText()
  }

  updateLanguages(lang) {
    this.lang = lang
    this.setText()
  }

  setText(){
    let langObjectKeys
    let langObjectValues 

    switch (this.lang) {
      case 'fr':
        langObjectKeys = Object.keys(this.fr)
        langObjectValues = Object.values(this.fr)
        break;
      
      case 'en':
        langObjectKeys = Object.keys(this.en)
        langObjectValues = Object.values(this.en)
        break;
    
      default:
        langObjectKeys = Object.keys(this.en)
        langObjectValues = Object.values(this.en)
        break;
    }

    for (let i = 0; i < langObjectKeys.length; i++) {
      const nameClass = `.text_${langObjectKeys[i]}`
      const allElements = document.querySelectorAll(nameClass)
      allElements.forEach(el => {
        el.innerHTML = langObjectValues[i]
      })
    }

  }

  getLang(){
    return this.lang
  }
}
