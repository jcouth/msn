import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const Area = styled(LinearGradient)`
  width: ${(props) => (props.width ? props.width : "90px")};
  height: ${(props) => (props.height ? props.height : "90px")};
  padding: ${(props) => (props.borderSize ? props.borderSize : "5px")};
  border: 0.5px solid #4e609b;
  border-radius: ${(props) => (props.roundness ? props.roundness : "5px")};
`;

export const PictureStatus = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border: 0.5px solid #4e609b;
  border-radius: ${(props) => (props.roundness ? props.roundness : "5px")};
`;

export const Picture = styled.Image`
  flex: 1;
`;
