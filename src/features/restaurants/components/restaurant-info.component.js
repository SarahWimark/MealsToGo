import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { Card } from 'react-native-paper'

export const RestaurantInfo = ({ restaurant = {} }) => {
  const { name, icon, photos, address, isOpen, rating, isClosed } = restaurant
  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover
        key={name}
        style={StyleSheet.cover}
        source={{ uri: photos[0] }}
      />
      <Text>{name}</Text>
    </Card>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
  },
  cover: {
    padding: 20,
    backgroundColor: '#fff',
  },
})
