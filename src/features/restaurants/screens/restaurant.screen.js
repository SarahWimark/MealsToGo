import React from "react";

import { Searchbar } from "react-native-paper";
import { SafeArea, SearchContainer } from "./restaurant.screen.styles";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

export const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantInfoCard />
    </SafeArea>
  );
};
