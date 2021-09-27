import React, { useRef, useState } from "react";
import { ActivityIndicator, StatusBar, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Toast from "react-native-toast-message";
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
  InputError,
  InputErrorText,
} from "./styles";
import { Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import firebase from "firebase/app";

const SignUp = () => {
  const schema = yup.object().shape({
    username: yup
      .string()
      .min(4, "O usuário deve ter no mínimo 4 caracteres")
      .max(32, "O usuário deve ter no máximo 6 caracteres")
      .required("O usuário não pode estar em branco"),
    email: yup
      .string()
      .email("O e-mail informado não é válido")
      .required("O e-mail não pode estar em branco"),
    password: yup
      .string()
      .min(8, "A senha deve ter no mínimo 8 caracteres")
      .max(32, "A senha deve ter no máximo 32 caracteres")
      .matches(/(?=.*[A-Z].*[A-Z]).+/g, "Ao menos dois caracteres maiúsculos")
      .matches(/(?=.*[!@#$&*]).+/g, "Ao menos um caractere especial")
      .matches(/(?=.*[0-9].*[0-9]).+/g, "Ao menos dois números")
      .matches(
        /(?=.*[a-z].*[a-z].*[a-z]).+/g,
        "Ao menos três caracteres minúsculos"
      )
      .required("A senha não pode estar em branco"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "As senhas devem ser iguais")
      .required("A senha não pode estar em branco"),
  });

  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const [loading, setLoading] = useState(false);
  const toastRef = useRef(null);

  const onSubmit = async (data) => {
    setLoading(true);
    firebase
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password)
      .then((userData) => {
        firebase
          .firestore()
          .collection("users")
          .doc(userData.user.uid)
          .set({
            name: data.username,
            email: data.email,
            status: "Online",
            avatar: `https://ui-avatars.com/api/?name=${data.username}&length=1`,
          })
          .then(() => {
            userData.user.sendEmailVerification();
            navigation.reset({
              routes: [
                {
                  name: "VerifyEmail",
                  params: {
                    user: { email: data.email, password: data.password },
                    justCreated: true,
                  },
                },
              ],
            });
          });
      })
      .catch((error) => {
        setLoading(false);
        if (error.code === "auth/email-already-in-use") {
          console.log("That email address is already in use!");
          toastRef.current.show({
            type: "error",
            position: "bottom",
            text1: "E-mail já existe",
            text2: "Alguém já está usando este e-mail :(",
          });
        }

        if (error.code === "auth/invalid-email") {
          console.log("That email address is invalid!");
          toastRef.current.show({
            type: "error",
            position: "bottom",
            text1: "E-mail inválido",
            text2: "Este e-mail está em um formato inválido :(",
          });
        }
      });
    // reset();
  };

  return (
    <Container>
      <StatusBar backgroundColor="#D8DEEF" barStyle="dark-content" />
      <Content colors={["#D8DEEF", "#94B8FB", "#D8DEEF"]}>
        <Toast
          ref={toastRef}
          // ref={(ref) => Toast.setRef(ref)}
          style={{ zIndex: 1, elevation: 1 }}
        />
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
                      borderColor={errors.username ? "#ff0000" : "#ffffff"}
                      borderSize="1px"
                      placeholder="Username"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      icon={
                        <FontAwesome
                          name="user-o"
                          size={20}
                          color={errors.username ? "#ff0000" : "#192758"}
                        />
                      }
                    />
                  )}
                  name="username"
                  defaultValue=""
                />
                {errors.username && (
                  <InputError>
                    <InputErrorText>{errors.username.message}</InputErrorText>
                  </InputError>
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
                      borderColor={errors.email ? "#ff0000" : "#ffffff"}
                      borderSize="1px"
                      placeholder="E-mail"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      icon={
                        <Ionicons
                          name="mail-outline"
                          size={20}
                          color={errors.email ? "#ff0000" : "#192758"}
                        />
                      }
                    />
                  )}
                  name="email"
                  defaultValue=""
                />
                {errors.email && (
                  <InputError>
                    <InputErrorText>{errors.email.message}</InputErrorText>
                  </InputError>
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
                      borderColor={errors.password ? "#ff0000" : "#ffffff"}
                      borderSize="1px"
                      placeholder="Password"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      eyeColor={errors.password ? "#ff0000" : "#192758"}
                      value={value}
                      icon={
                        <Feather
                          name="lock"
                          size={20}
                          color={errors.password ? "#ff0000" : "#192758"}
                        />
                      }
                    />
                  )}
                  name="password"
                />
                {errors.password && (
                  <InputError>
                    <InputErrorText>{errors.password.message}</InputErrorText>
                  </InputError>
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
                      borderColor={
                        errors.confirmPassword ? "#ff0000" : "#ffffff"
                      }
                      borderSize="1px"
                      placeholder="Confirm Password"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      eyeColor={errors.confirmPassword ? "#ff0000" : "#192758"}
                      value={value}
                      icon={
                        <Feather
                          name="lock"
                          size={20}
                          color={errors.confirmPassword ? "#ff0000" : "#192758"}
                        />
                      }
                    />
                  )}
                  name="confirmPassword"
                />
                {errors.confirmPassword && (
                  <InputError>
                    <InputErrorText>
                      {errors.confirmPassword.message}
                    </InputErrorText>
                  </InputError>
                )}
              </InputArea>

              <FormButton variant="primary" onPress={handleSubmit(onSubmit)}>
                <FormButtonText variant="primary">
                  {loading ? <ActivityIndicator color="#ffffff" /> : "Sign Up"}
                </FormButtonText>
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
