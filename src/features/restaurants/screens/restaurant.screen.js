import React from 'react'
import { Searchbar } from 'react-native-paper'
import { StatusBar, StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { RestaurantInfo } from '../components/restaurant-info.component'

export const RestaurantsScreen = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.search}>
        <Searchbar />
      </View>
      <View style={styles.list}>
        <RestaurantInfo />
      </View>
    </SafeAreaView>
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
