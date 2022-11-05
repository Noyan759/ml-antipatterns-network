// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

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
    defaultTheme: 'dark',
    themes: {
      dark: {
        dark: true,
        colors: {
          primary: '#1697f6',
        }
      }
    }
  },
})
