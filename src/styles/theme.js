export default {
  grid: {
    container: '130rem',
    gutter: '3.2rem'
  },
  colors: {
    primary: '#FF4853',
    primaryLightest: '#FFE5E7',
    primaryLight: '#FF7F87 ',
    primaryDark: '#BD2F33',
    secondary: '#135464',
    secondaryLightest: '#DAF0F5',
    secondaryLight: '#69ACBD',
    secondaryDark: '#0A2A32',
    red: '#D01515',
    redLight: '#FFEDEE',
    yellow: '#F3B71B',
    yellowLight: '#FBF2E5',
    green: '#99FFD9 ',
    greenFluorescent: '#00FF99',
    gray: '#737373',
    grayLight: '#F4F4F4',
    grayDark: '#424242', //text
    offwhite: '#F4F4F4',
    white: '#ffffff',
    black: '#222222'
  },
  font: {
    family: {
      normal:
        "Source Sans Pro, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
      heading:
        "Space Grotesk, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
    },
    sizes: {
      xxsmall: '1rem', // xs
      xsmall: '1.2rem', // sm
      small: '1.4rem', // base
      medium: '1.6rem', // md
      large: '1.8rem', // lg
      xlarge: '2.4rem', // xl
      xxlarge: '3rem' // xxl
    },
    weight: {
      light: 300,
      normal: 400, // base
      bold: 700
    },
    height: {
      medium: 1.4, // base
      heading: 1.2
    }
  },
  spacings: {
    xxsmall: '0.4rem', // xxs
    xsmall: '0.8rem', // xs
    small: '1.6rem', // sm
    medium: '2.4rem', // base
    large: '3.2rem', // md
    xlarge: '4.8rem', // lg
    xxlarge: '6.4rem' // xlg
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  border: {
    radius: '0.4rem',
    radiusFull: '10rem'
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  },
  shadow: {
    card: '0px 1px 6px 1px rgba(115, 115, 115, 0.16)',
    cardElevated: '0px 2px 6px 2px rgba(115, 115, 115, 0.32)',
    header: '0px 1px 6px  rgba(142, 142, 142, 0.1)'
  }
}
