import React from 'react'
import styled from 'styled-components'
import { Text, StyleSheet } from 'react-native'
import { Card } from 'react-native-paper'

const Title = styled.Text`
  padding: 16px;
`
const RestaurantCard = styled(Card)`
  background-color: #fff;
`

const RestaurantCardCover = styled(Card.Cover)`
  background-color: #fff;
  padding: 20px;
`

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const { name, icon, photos, address, isOpen, rating, isClosed } = restaurant
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover
        key={name}
        style={StyleSheet.cover}
        // source={{ uri: photos[0] }}
      />
      <Title>{name}Some text</Title>
    </RestaurantCard>
  )
}
