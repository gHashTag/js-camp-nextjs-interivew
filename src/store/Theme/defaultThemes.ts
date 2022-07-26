import {
  tomorrow,
  funky,
  duotoneForest,
  dracula,
  prism
} from 'react-syntax-highlighter/dist/cjs/styles/prism'

export const themes = {
  dark: {
    title: '#F5F5F5',
    paragraph: '#ededed',
    background: '#17191A',
    card: '#FF06F4',
    icon: '#FAD961',
    border: '#BAB9B9',
    link: '#50E3C2',
    gray: '#949494',
    shadow: '#17191A',
    evenRows: '#3D3D3D',
    importantInfo: '#EC5488'
  },
  light: {
    title: '#0B0B0B',
    paragraph: '#212121',
    background: '#fff',
    card: '#FAD961',
    icon: '#FF06F4',
    border: '#242526',
    link: '#50E3C2',
    gray: '#949494',
    shadow: '#0B0B0B',
    evenRows: '#DAF5F8',
    importantInfo: '#EC5488'
  },
  tulum: {
    title: '#3a3d28',
    paragraph: '#766040',
    background: '#fff',
    card: '#6e7440',
    icon: '#8ca7bd',
    border: '#998c6b',
    link: '#20aedf',
    gray: '#777f74',
    shadow: '#0B0B0B',
    evenRows: '#e9e3d9',
    importantInfo: '#bc5684'
  }
}

export type ColorsT = {
  title: string
  paragraph: string
  background: string
  card: string
  icon: string
  border: string
  link: string
  gray: string
  shadow: string
  evenRows: string
  importantInfo: string
}

export const CodeThemes = {
  funky,
  tomorrow,
  duotoneForest,
  dracula,
  prism
}
export type allCodeThemes =
  | 'funky'
  | 'tomorrow'
  | 'tulumduotoneForest'
  | 'dracula'
  | 'prism'
export type allThemes = 'dark' | 'light' | 'tulum'
