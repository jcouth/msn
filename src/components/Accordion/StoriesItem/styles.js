import styled from "styled-components";

export const InfoArea = styled.View`
  align-items: center;
  width: 120px;
  margin: 10px 0;
  padding: 0 5px;
`;

export const UserArea = styled.View`
  align-items: center;
  position: ${(props) => (props.bigger ? "absolute" : "relative")};
  bottom: 0;
  left: 0;
  padding: ${(props) => props.bigger && "15px 20px"};
`;

export const UserNameText = styled.Text`
  font-size: 16px;
  color: ${(props) => (props.bigger ? "#ffffff" : "#4e609b")};
`;
