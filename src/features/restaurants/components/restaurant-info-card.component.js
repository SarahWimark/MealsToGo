import React from 'react'
import styled from 'styled-components'
import { Text, StyleSheet } from 'react-native'
import { Card } from 'react-native-paper'

const Title = styled.Text`
  padding: 16px;
`

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const { name, icon, photos, address, isOpen, rating, isClosed } = restaurant
  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover
        key={name}
        style={StyleSheet.cover}
        // source={{ uri: photos[0] }}
      />
      <Title>{name}Some text</Title>
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
