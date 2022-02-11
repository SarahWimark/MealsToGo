import React from 'react'
import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import { Searchbar } from 'react-native-paper'
import { StatusBar, StyleSheet, Text, View, SafeAreaView } from 'react-native'

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.search}>
          <Searchbar />
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
  safeAreaView: {
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
