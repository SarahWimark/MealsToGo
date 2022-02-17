import styled from "styled-components";
import MapView from "react-native-maps";

export const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  position: absolute;
  z-index: 999;
  top: 30px;
  width: 100%;
`;
