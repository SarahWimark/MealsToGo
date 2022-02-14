import React from 'react'
import styled from 'styled-components'
import { Text, StyleSheet } from 'react-native'
import { Card } from 'react-native-paper'

const Title = styled.Text`
  padding: ${(props) => props.theme.space[3]};
  color: ${(props) => props.theme.colors.ui.primary};
`
const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary}; ;
`

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
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
