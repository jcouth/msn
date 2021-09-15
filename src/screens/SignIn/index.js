import React from "react";
import {
  StatusBar,
  TouchableOpacity,
  Text,
  View,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Controller, useForm } from "react-hook-form";
import {
  Container,
  Content,
  HeaderArea,
  TitleArea,
  TextArea,
  TitleText,
  LogoIcon,
  UserIcon,
  FormArea,
  InputArea,
  FormButton,
  FormButtonText,
} from "./styles";
import { Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import Input from "../../components/Input";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SignIn = () => {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (data !== null) {
      console.log("login!", data);
      AsyncStorage.setItem("token", data.username + "|" + data.password)
    }
  };

  const handleNewAccount = () => {
    alert("a");
    // navigation.reset({
    //   routes: [{ name: "SignUp" }],
    // });
    navigation.navigate("SignUp");
  };

  return (
    <Container>
      <StatusBar backgroundColor="#D8DEEF" barStyle="dark-content" />
      <Content colors={["#D8DEEF", "#94B8FB", "#D8DEEF"]}>
        <HeaderArea>
          <TitleArea>
            <TextArea>
              <TitleText>welcome </TitleText>
              <TitleText variant="primary">msn</TitleText>
            </TextArea>
            <LogoIcon
              style={{ resizeMode: "contain" }}
              source={require("../../assets/msn_logo.png")}
            />
          </TitleArea>
          <TouchableOpacity>
            <Ionicons name="settings-sharp" size={26} color="#192758" />
          </TouchableOpacity>
        </HeaderArea>
        <UserIcon
          style={{ resizeMode: "contain" }}
          source={require("../../assets/msn_icon.png")}
        />
        <FormArea>
          <InputArea>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  placeholder="Username"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  icon={
                    <FontAwesome name="user-o" size={20} color="#192758" />
                  }
                />
              )}
              name="username"
              defaultValue=""
            />
            {/* refatorar */}
            {errors.username && (
              <View
                style={{
                  flex: 1,
                  marginBottom: 10,
                }}
              >
                <Text>O usuário não pode estar em branco.</Text>
              </View>
            )}
          </InputArea>
          <InputArea>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  securyTextEntry={true}
                  placeholder="Password"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  icon={<Feather name="lock" size={20} color="#192758" />}
                />
              )}
              name="password"
            />
            {/* refatorar */}
            {errors.password && (
              <View
                style={{
                  flex: 1,
                  marginBottom: 10,
                }}
              >
                <Text>A senha não pode estar em branco.</Text>
              </View>
            )}
          </InputArea>
          <FormButton>
            <FormButtonText>Forgot your password?</FormButtonText>
          </FormButton>
          <FormButton variant="primary" onPress={handleSubmit(onSubmit)}>
            <FormButtonText variant="primary">Sign In</FormButtonText>
          </FormButton>
          <FormButton variant="secondary" onPress={handleNewAccount}>
            <FormButtonText>Get a new account</FormButtonText>
          </FormButton>
        </FormArea>
      </Content>
    </Container>
  );
};

export default SignIn;
