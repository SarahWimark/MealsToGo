import styled from "styled-components";
import { StatusBar } from "react-native";
import { ActivityIndicator } from "react-native-paper";

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;
export const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
export const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;
