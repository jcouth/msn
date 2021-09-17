import React from "react";
import { StatusBar, TouchableOpacity, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Controller, useForm } from "react-hook-form";
import Input from "../../components/Input";
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
  Scrollable,
  ScrollContent,
} from "./styles";
import { Feather, FontAwesome, Ionicons } from "@expo/vector-icons";

const SignUp = () => {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <Container>
      <StatusBar backgroundColor="#D8DEEF" barStyle="dark-content" />
      <Content colors={["#D8DEEF", "#94B8FB", "#D8DEEF"]}>
        <Scrollable contentContainerStyle={{ flexGrow: 1 }}>
          <ScrollContent>
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
              <InputArea>
                <Controller
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                      securyTextEntry={true}
                      placeholder="Confirm Password"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      icon={<Feather name="lock" size={20} color="#192758" />}
                    />
                  )}
                  name="confirmPassword"
                />
                {/* refatorar */}
                {errors.confirmPassword && (
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
              <FormButton variant="primary" onPress={handleSubmit(onSubmit)}>
                <FormButtonText variant="primary">Sign Up</FormButtonText>
              </FormButton>
              <FormButton
                variant="secondary"
                onPress={() => {
                  // navigation.reset({
                  //   routes: [{ name: "SignUp" }],
                  // });
                  navigation.navigate("SignIn");
                }}
              >
                <FormButtonText>Have an account? Sign In</FormButtonText>
              </FormButton>
            </FormArea>
          </ScrollContent>
        </Scrollable>
      </Content>
    </Container>
  );
};

export default SignUp;
