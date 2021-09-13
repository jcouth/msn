import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Content = styled(LinearGradient)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ImageIcon = styled.Image`
  width: 100%;
  height: 125px;
`;

export const LoadingIcon = styled.ActivityIndicator`
  margin-top: 20px;
`;
