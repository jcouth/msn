import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const Area = styled(LinearGradient)`
  width: ${(props) => (props.width ? props.width : "100px")};
  height: ${(props) => (props.height ? props.height : "100px")};
  padding: ${(props) => (props.borderSize ? props.borderSize : "5px")};
  border: 1px solid #192758;
  border-radius: ${(props) => (props.roundness ? props.roundness : "10px")};
`;

export const PictureStatus = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border: 1px solid #192758;
  border-radius: ${(props) => (props.roundness ? props.roundness : "10px")};
  /* border-radius: 5px; */
`;

export const Picture = styled.Image`
  flex: 1;
`;
