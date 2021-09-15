import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #d8deef;
`;

export const Content = styled(LinearGradient)`
  flex-grow: 1;
`;

// export const InfoArea = styled.View`
//   align-items: center;
//   width: 120px;
//   margin: 10px 0;
//   padding: 0 5px;
// `;

// export const UserArea = styled.View`
//   align-items: center;
// `;

// export const UserNameText = styled.Text`
//   font-size: 16px;
//   /* margin-top: 5px; */
//   color: #4e609b;
// `;

export const ChannelsContainerArea = styled.View`
  flex: 1;
  margin-top: 10px;
`;

export const ChannelsTitle = styled.Text`
  font-size: 16px;
  margin-left: 5px;
  color: #4e609b;
`;

export const ChannelsArea = styled.View`
  align-items: center;
  width: 40%;
  margin: 10px 0;
  padding: 0 5px;
  position: relative;
  background-color: red;
`;

export const ChannelsTextArea = styled.View`
  position: absolute;
  /* bottom: 0; */
  /* left: 0; */
`;

export const ChannelsText = styled.Text`
  font-size: 16px;
  color: #4e609b;
`;
