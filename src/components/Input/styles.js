import styled from "styled-components";

export const InputArea = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px;
  border-radius: 12.5px;
  background-color: #fff;
`;

export const StyledInput = styled.TextInput`
  flex: 1;
  margin-left: ${(props) => (props.leftMargin ? "10px" : 0)};
  font-size: ${(props) => (props.textSize ? props.textSize : "16px")};
`;

export const RevealPassword = styled.TouchableOpacity`
  margin-left: 10px;
`;
