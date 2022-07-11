import {
  dataAPI,
  dataBackend,
  dataBlogs,
  dataBootcamp,
  dataCheatSheet,
  dataCodeChallenges,
  dataColorPallets,
  dataFrontend,
  dataGithub,
  dataHosting,
  dataImagesPhotos,
  dataJavascript,
  dataLearning,
  dataMiscellaneous,
  dataOptimization,
  dataPrototyping,
  dataRoadmap,
  dataSolidjs,
  dataStackSolutions,
  dataWebFonts,
  dataWebIllustrations,
  dataYoutube
} from './resourcing'

export const data = [
  [
    ['Learning', dataLearning],
    ['Bootcamps', dataBootcamp]
  ],
  [
    ['Backend', dataBackend],
    ['Frontend', dataFrontend]
  ],
  [
    ['Javascript', dataJavascript],
    ['Github (repositorios)', dataGithub]
  ],
  [
    ['Paleta de colores', dataColorPallets],
    ['Roadmap', dataRoadmap]
  ],
  [
    ['Code Challenges', dataCodeChallenges],
    ['Hosting', dataHosting]
  ],
  [
    ['Prototipo UI/UX', dataPrototyping],
    ['Fuentes Web', dataWebFonts]
  ],
  [
    ['Imagenes/Fotos', dataImagesPhotos],
    ['Ilustración web', dataWebIllustrations]
  ],
  [
    ['Solid.js', dataSolidjs],
    ['Cheat Sheets', dataCheatSheet]
  ],
  [
    ['Misceláneos', dataMiscellaneous],
    ['Youtube', dataYoutube]
  ],
  [
    ['APIs', dataAPI],
    ['Optimización tools', dataOptimization]
  ],
  [
    ['Blogs', dataBlogs],
    ['Stackoverflow/Q&A', dataStackSolutions]
  ]
]

export const dataTitles = data
  .flat(2)
  .map(item => typeof item === 'string' && item)
  .filter(item => item) as string[]
