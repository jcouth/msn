import React from "react";
import { ScrollView, View } from "react-native";
import Accordion from "../../../components/Accordion";
import GroupItem from "../../../components/Accordion/GroupItem";
import { Content } from "./styles";

const data_fut = {
  // notOffline: 2,
  length: 2,
  users: [
    {
      // avatar: "https://ui-avatars.com/api/?name=Fut&length=1",
      avatar: "",
      last_message: "Casimiro: eu sou um pônei poh",
      last_message_date: "yesterday",
      last_message_amount: 1,
      name: "Fut de quarta",
    },
    {
      avatar: "https://ui-avatars.com/api/?name=Fut&length=1",
      last_message: "Ferrettei: bora marca mano",
      last_message_date: "04/09/2021",
      last_message_amount: 79,
      name: "Fut de quarta",
    },
  ],
};

const data_family = {
  // notOffline: 1,
  length: 3,
  users: [
    {
      avatar: "https://ui-avatars.com/api/?name=Familia&length=1",
      last_message: "Tia neide: Bom tarde, meus amores",
      last_message_date: "12:43",
      last_message_amount: 30,
      name: "Família da Pesada",
    },
    {
      avatar: "https://ui-avatars.com/api/?name=Familia&length=1",
      last_message: "Tia neide: Bom tarde, meus amores",
      last_message_date: "12:04",
      last_message_amount: "",
      name: "Só os primos",
    },
    {
      avatar: "",
      last_message: "Primo zeca: ela é muito chata",
      last_message_date: "10:48",
      last_message_amount: 2,
      name: "Sem a tia Julha",
    },
  ],
};

const data_friends = {
  // notOffline: 0,
  length: 2,
  users: [
    {
      avatar: "",
      last_message: "renatinho: tem trabalho pra amanhã em",
      last_message_date: "18:23",
      last_message_amount: "",
      name: "Não aguento mais a faculdade",
    },
    {
      avatar: "",
      last_message: "Yan: vai na fé",
      last_message_date: "11:09",
      last_message_amount: 4,
      name: "Só os amigões",
    },
  ],
};

const data_work = {
  // notOffline: 1,
  length: 1,
  users: [
    {
      avatar: "",
      last_message: "Bárbara: Vai ter daily hoje?",
      last_message_date: "13:00",
      last_message_amount: 1,
      name: "Compasso",
    },
  ],
};

const TabGroups = () => {
  return (
    <>
      <Content colors={["#F9F9F9", "#FFFFFF", "#F9F9F9"]}>
        <ScrollView style={{ flex: 1 }}>
          <View style={{ flex: 1, padding: 25, paddingTop: 0 }}>
            <Accordion title="Fut" expanded groupType total={data_fut.length}>
              {data_fut.users.map((user, index) => (
                <GroupItem key={index} user={user} />
              ))}
            </Accordion>
            <Accordion title="Family" groupType total={data_family.length}>
              {data_family.users.map((user, index) => (
                <GroupItem key={index} user={user} />
              ))}
            </Accordion>
            <Accordion title="Friends" groupType total={data_friends.length}>
              {data_friends.users.map((user, index) => (
                <GroupItem key={index} user={user} />
              ))}
            </Accordion>
            <Accordion title="Work" groupType expanded total={data_work.length}>
              {data_work.users.map((user, index) => (
                <GroupItem key={index} user={user} />
              ))}
            </Accordion>
          </View>
        </ScrollView>
      </Content>
    </>
  );
};

export default TabGroups;
