import React from 'react'
import styled from 'styled-components'
import { Text, StyleSheet } from 'react-native'
import { SvgXml } from 'react-native-svg'
import { Card } from 'react-native-paper'
import star from '../../../../assets/star'

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary}; ;
`

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`
const Rating = styled.View`
  flex-direction: row;
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
  const {
    name,
    icon,
    photos,
    address,
    isOpen,
    rating = 4,
    isClosed,
  } = restaurant
  const ratingArray = Array.from(new Array(Math.floor(rating)))
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover
        key={name}
        style={StyleSheet.cover}
        // source={{ uri: photos[0] }}
      />
      <Info>
        <Title>{name}Some text</Title>
        <Rating>
          {ratingArray.map(() => (
            <SvgXml xml={star} width={20} height={20} />
          ))}
        </Rating>
        <Address>{address}Some text</Address>
      </Info>
    </RestaurantCard>
  )
}
