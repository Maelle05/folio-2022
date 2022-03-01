import * as fr from '../../static/fr.json';
import * as en from '../../static/en.json';
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

import { language } from '../../main';

const containerProjects = document.querySelector('section#projects')

export class Projects {
  constructor(){
    this.data = null,
    this.minRotate = -8,
    this.maxRotate = 8
  }

  init(){
    if (language.getLang() === 'fr') {
      this.data = fr.projects
    } else {
      this.data = en.projects
    }

    const nbProjects = this.data.length

    let animProjects = gsap.timeline()

    ScrollTrigger.create({
      trigger: "#projects",
      start: "top top",
      end: "bottom top",
      pin: "#projects",
      markers: true,
      scrub: 1,
      animation: animProjects
    });

    this.data.forEach((project, index ) => {
      const newProject = document.createElement('div')

      const link = document.createElement('a')
      link.href = project.link
      link.target = "_blank"
      newProject.appendChild(link)

      const img = document.createElement('img')
      img.classList.add('project', `project${index}`)
      img.src = `./static/assets/img/projects/${project.picture_name}`
      const deg = Math.random() * (this.maxRotate - this.minRotate + 1) + this.minRotate
      // img.style.transform = `rotate(${(((this.maxRotate - this.minRotate)/nbProjects) * index) + this.minRotate}deg)`
      img.style.transform = `rotate(${deg}deg)`
      link.appendChild(img)

      containerProjects.appendChild(newProject)

      

      animProjects.to(newProject, {duration: 1, x: -1000, rotation: 10}, '-=0.5')
      
      
    });

  }
}