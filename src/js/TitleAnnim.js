import * as fr from '../../static/fr.json';

const title = document.querySelector('h1')
const titleShadow = document.querySelector('p.shadow')

const letters = fr.name
const chars = letters.split('');
let text = ''

window.addEventListener('load', ()=> {
  setTimeout( () => {
    newLetter(0) 
  } , 200)
})

function newLetter(i) {
  text = text + chars[i]

  const newLetterElTitre = document.createElement("span")
  newLetterElTitre.innerHTML = chars[i]

  const newLetterEl = document.createElement("span")
  newLetterEl.innerHTML = chars[i]

  if(chars[i] === ' '){
    newLetterElTitre.classList.add('space')
    newLetterEl.classList.add('space')
  }

  if(chars[i] === 'e' && chars[i-1] === 'a'){
    newLetterElTitre.classList.add('trema', 'title')
    newLetterEl.classList.add('trema')
  }

  title.appendChild(newLetterElTitre)
  titleShadow.appendChild(newLetterEl)

  
  if(i < chars.length - 1){
    const next = i + 1
    newLetter(next)
  } else if (i = chars.length - 1){
    unveil(0)
  }
}

function unveil(j){
  title.querySelector(`span:nth-child(${j+1})`).classList.add('active')
  titleShadow.querySelector(`span:nth-child(${j+1})`).classList.add('active')
  
  if(title.querySelector(`span:nth-child(${j+2})`)){
    setTimeout( () => { 
      const next = j + 1
      unveil(next)
    } , 70)
  }
}