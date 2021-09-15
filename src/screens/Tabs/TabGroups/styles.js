import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #d8deef;
`;

export const Content = styled(LinearGradient)`
  flex-grow: 1;
  /* padding: 50px 25px; */
  /* padding: 25px; */
`;
