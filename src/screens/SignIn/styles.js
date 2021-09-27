import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Content = styled(LinearGradient)`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding: 50px 25px;
`;

export const HeaderArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;
`;

export const TitleArea = styled.View`
  flex-direction: row;
`;

export const TextArea = styled.View`
  flex-direction: row;
  align-items: baseline;
`;

export const TitleText = styled.Text`
  font-weight: bold;
  font-size: ${(props) =>
    props.variant ? (props.variant === "primary" ? "26px" : "24px") : "24px"};
  font-style: ${(props) =>
    props.variant
      ? props.variant === "primary"
        ? "italic"
        : "normal"
      : "normal"};
  color: ${(props) =>
    props.variant
      ? props.variant === "primary"
        ? "#192758"
        : "#929bb3"
      : "#929bb3"};
`;

export const LogoIcon = styled.Image`
  width: 20px;
  height: 20px;
`;

export const UserIcon = styled.Image`
  width: 100%;
  height: 150px;
  margin: 25px 0;
`;

export const FormArea = styled.View`
  padding: 10px;
`;

export const InputArea = styled.View`
  width: 100%;
  margin: 10px 0;
`;

export const FormButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: ${(props) =>
    props.variant
      ? props.variant === "primary"
        ? "center"
        : props.variant === "secondary"
        ? "center"
        : "flex-end"
      : "flex-end"};
  margin-top: ${(props) =>
    props.variant
      ? props.variant === "primary"
        ? "25px"
        : props.variant === "secondary"
        ? "50px"
        : 0
      : 0};
  padding: ${(props) =>
    props.variant ? (props.variant === "primary" ? "15px" : 0) : 0};
  border-radius: 10px;
  background-color: ${(props) =>
    props.variant
      ? props.variant === "primary"
        ? "#192758"
        : "transparent"
      : "transparent"};
`;

export const FormButtonText = styled.Text`
  font-size: ${(props) =>
    props.variant ? (props.variant === "primary" ? "16px" : "14px") : "14px"};
  text-decoration: ${(props) =>
    props.variant
      ? props.variant === "primary"
        ? "none"
        : "underline"
      : "underline"};
  color: ${(props) =>
    props.variant
      ? props.variant === "primary"
        ? "#ffffff"
        : "#192758"
      : "#192758"};
`;

export const InputError = styled.View`
  /* flex-grow: 1; */
  /* margin: 5px 0 20px; */
`;

export const InputErrorText = styled.Text`
  font-size: 16px;
  color: #ff0000;
`;
