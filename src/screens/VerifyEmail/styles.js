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

export const TextArea = styled.View`
  align-items: center;
  /* margin-top: 20px; */
  padding: 20px;
`;

export const PrimaryText = styled.Text`
  font-size: 24px;
  color: #4e609b;
`;

export const SecondaryText = styled.Text`
  margin-top: 10px;
  font-size: 18px;
  color: #4e609b;
`;

export const TextBold = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #4e609b;
`;

export const ButtonArea = styled.View`
  margin-top: 10px;
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  margin: 10px 0;
  padding: 7.5px 25px;
  border-radius: 10px;
  background-color: ${(props) => (props.primary ? "green" : "#929bb3")};
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  color: #ffffff;
`;
