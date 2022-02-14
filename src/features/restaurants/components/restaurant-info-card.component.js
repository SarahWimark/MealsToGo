import React from 'react'
import styled from 'styled-components'
import { Text, StyleSheet } from 'react-native'
import { Card } from 'react-native-paper'

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary}; ;
`

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`
const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`
const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
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
      <Info>
        <Title>{name}Some text</Title>
        <Address>{address}Some text</Address>
      </Info>
    </RestaurantCard>
  )
}
