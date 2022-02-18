import React from "react";
import { TouchableOpacity } from "react-native";
import { Platform } from "react-native";
import {
  CompactImage,
  CompactWebView,
  Item,
} from "./compact-restaurant-info.styles";
import { Text } from "../typography/text.component";

const isAndroid = Platform.OS === "android";

export const CompactRestarauntInfo = ({ restaurant }) => {
  const Image = isAndroid ? CompactWebView : CompactImage;
  return (
    <Item>
      <Image source={{ uri: restaurant.photos[0] }} />
      <Text variant="caption" numberOfLines={3}>
        {restaurant.name}
      </Text>
    </Item>
  );
};
