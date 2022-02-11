import React from 'react'
import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import { StatusBar, StyleSheet, Text, View, SafeAreaView } from 'react-native'

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.safeAreaViewStyles}>
        <View style={styles.view1Styles}>
          <Text>Search...</Text>
        </View>
        <View style={styles.view2Styles}>
          <Text>ListItems...</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  )
}

const styles = StyleSheet.create({
  safeAreaViewStyles: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  view1Styles: {
    padding: 16,
    backgroundColor: 'purple',
  },
  view2Styles: {
    flex: 1,
    padding: 16,
    backgroundColor: 'blue',
  },
})
