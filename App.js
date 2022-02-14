import React from 'react'
import { ThemeProvider } from 'styled-components/native'
import { useFonts, Oswald_400Regular } from '@expo-google-fonts/oswald'
import { useFonts, Lato_400Regular } from '@expo-google-fonts/lato'
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurant.screen'
import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import { theme } from './src/infrastructure/theme'

export default function App() {
  const [oswaldLoaded] = useFonts({
    Oswald_400Regular,
  })

  const [latoLoaded] = useFonts({
    Lato_400Regular,
  })

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  )
}
