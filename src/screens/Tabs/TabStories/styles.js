import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #d8deef;
`;

export const Content = styled(LinearGradient)`
  flex-grow: 1;
`;

export const ChannelsContainer = styled.View`
  flex: 1;
  margin-top: 10px;
`;

export const ChannelsTitle = styled.Text`
  font-size: 16px;
  margin-left: 5px;
  color: #4e609b;
`;

export const ChannelsContent = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const ChannelsArea = styled.View`
  align-items: center;
  width: 49%;
  margin: 10px 0;
  padding: 0 5px;
  position: relative;
`;

export const ChannelsTextArea = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 15px;
`;

export const ChannelsText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
`;
