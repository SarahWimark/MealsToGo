import React, { useContext, useEffect, useState } from "react";
import { Map } from "./map.screen.styles";
import { Search } from "../components/search.component";
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import MapView from "react-native-maps";
import { Lato_100Thin } from "@expo-google-fonts/lato";

export const MapScreen = () => {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantsContext);
  const [latDelta, setLatDelta] = useState(0);
  const { lat, lng, viewport } = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;
    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  const regionOptions = {
    latitude: lat,
    longitude: lng,
    latitudeDelta: latDelta,
    longitudeDelta: 0.02,
  };

  return (
    <>
      <Search />
      <Map region={regionOptions}></Map>
    </>
  );
};
