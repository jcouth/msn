import styled from "styled-components";

export const InputArea = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.width ? props.width : "100%")};
  padding: ${(props) => (props.padding ? props.padding : "10px")};
  /* padding: 5px 10px; */
  border: ${(props) => (props.borderSize ? props.borderSize : 0)} solid
    ${(props) => (props.borderColor ? props.borderColor : "transparent")};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "12.5px"};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#ffffff"};
`;

export const StyledInput = styled.TextInput`
  flex: 1;
  margin-left: ${(props) => (props.leftMargin ? "10px" : 0)};
  font-size: ${(props) => (props.textSize ? props.textSize : "16px")};
`;

export const RevealPassword = styled.TouchableOpacity`
  margin-left: 10px;
`;
