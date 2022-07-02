
import 'styled-components'
import defaultTheme from './theme'

declare module 'styled-components' {
  type default_theme = typeof defaultTheme
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends default_theme {}
}