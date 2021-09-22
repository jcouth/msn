import React, { useRef, useState } from "react";
import { StatusBar, TouchableOpacity, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
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
  InputError,
  InputErrorText,
} from "./styles";
import { Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import firebase from "firebase/app";

const SignIn = () => {
  const schema = yup.object().shape({
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
      .signInWithEmailAndPassword(data.email, data.password)
      .then((signData) => {
        if (signData.user.emailVerified) {
          navigation.reset({
            routes: [{ name: "Home" }],
          });
        } else {
          navigation.reset({
            routes: [
              {
                name: "VerifyEmail",
                params: {
                  user: { email: data.email, password: data.password },
                  justCreated: false,
                },
              },
            ],
          });
        }
      })
      .catch((error) => {
        setLoading(false);
        if (error.code === "auth/user-not-found") {
          console.log("That email address doesn't exist!");
          toastRef.current.show({
            type: "error",
            position: "bottom",
            text1: "E-mail não encontrado",
            text2: "Parece que este usuário não existe :(",
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

        if (error.code === "auth/network-request-failed") {
          console.log("A network error has occurred!");
          toastRef.current.show({
            type: "error",
            position: "bottom",
            text1: "Sem conexão com a internet",
            text2: "Houve um problema para nos conectarmos com o servidor :(",
          });
        }

        console.error(error.code, error);
      });
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
                  borderColor={errors.email ? "#ff0000" : "#ffffff"}
                  borderSize="1px"
                  placeholder="email"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  icon={
                    <FontAwesome
                      name="user-o"
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
                  borderColor={errors.password ? "#ff0000" : "#ffffff"}
                  borderSize="1px"
                  securyTextEntry={true}
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
          <FormButton>
            <FormButtonText>Forgot your password?</FormButtonText>
          </FormButton>
          <FormButton variant="primary" onPress={handleSubmit(onSubmit)}>
            <FormButtonText variant="primary">
              {loading ? <ActivityIndicator color="#ffffff" /> : "Sign In"}
            </FormButtonText>
          </FormButton>
          <FormButton
            variant="secondary"
            onPress={() => {
              // navigation.reset({
              //   routes: [{ name: "SignUp" }],
              // });
              navigation.navigate("SignUp");
            }}
          >
            <FormButtonText>Get a new account</FormButtonText>
          </FormButton>
        </FormArea>
      </Content>
    </Container>
  );
};

export default SignIn;
