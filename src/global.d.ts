import { theme } from './theme'

declare module '*.jpg' {
  export default '' as string;
}
declare module '*.png' {
  export default '' as string;
}

declare module '*.svg' {
  const value: any;
  export default value;
}

declare global {
  const sv: typeof theme;
}