import styled from "styled-components";
import WebView from "react-native-webview";

export const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

export const CompactWebView = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

export const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;