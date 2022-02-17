import React, { useContext } from "react";
import styled from "styled-components/native";
import { Colors } from "react-native-paper";
import { FlatList, Pressable } from "react-native";
import { Spacer } from "../../../components/spacer/spacer.component";
import {
  SafeArea,
  Loading,
  LoadingContainer,
} from "./restaurant.screen.styles";
import { Search } from "../components/search.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = ({ navigation }) => {
  const { isLoading, restaurants } = useContext(RestaurantsContext);

  const onPress = () => navigation.navigate("RestaurantDetail");

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
      <Search />
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => (
          <Pressable onPress={onPress}>
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          </Pressable>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
