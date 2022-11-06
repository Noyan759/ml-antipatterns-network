// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify, type ThemeDefinition } from 'vuetify'

const RWTHTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: '#0072BB',
    'primary-darken-1': '#00549F',
    secondary: '#FFA500',
    'secondary-darken-1': '#018786',
    error: '#FF5252',
    info: '#7DA7D9',
    success: '#FFFFFF',
    warning: '#FFC107',
  }
}

export default createVuetify({
  // https://next.vuetifyjs.com/features/global-configuration/
  defaults: {
    global: {
      rounded: 'sm',
    },
    VAppBar: {
      flat: true,
    },
    VBtn: {
      color: 'primary',
      height: 44,
    },
    VSheet: {
      color: '#212121',
    },
  },
  // https://next.vuetifyjs.com/features/theme/
  theme: {
    defaultTheme: 'RWTHTheme',
    themes: {
      RWTHTheme 
    }
  },
})
