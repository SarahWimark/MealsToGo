import React from 'react'
import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import { SearchBar } from 'react-native-paper'
import { StatusBar, StyleSheet, Text, View, SafeAreaView } from 'react-native'

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.safeAreaViewStyles}>
        <View style={styles.search}>
          <SearchBar />
        </View>
        <View style={styles.list}>
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
  search: {
    padding: 16,
    backgroundColor: 'purple',
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: 'blue',
  },
})
