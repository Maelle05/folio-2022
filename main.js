import './style.scss'
import { Languages } from './src/js/LanguagesManager'
import './src/js/ShadowText'
import './src/js/TitleAnnim'
import { Projects } from './src/js/ProjectsManager'

export const language = new Languages
language.init()

const projects = new Projects
projects.init()
