import React, { useRef, useState } from "react";
import {
  StatusBar,
  TouchableOpacity,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Controller, useForm } from "react-hook-form";
import Input from "../../components/Input";
import Toast from "react-native-toast-message";
import * as Yup from "yup";
import { signIn } from "../../services/api";
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
  InputErrorText,
  InputError,
} from "./styles";
import { Feather, FontAwesome, Ionicons } from "@expo/vector-icons";

const SignIn = () => {
  const navigation = useNavigation();
  const toastRef = useRef();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    const validate = async (data) => {
      let isValid = true;
      // ------------------- yup
      // try {
      //   const schema = Yup.object().shape({
      //     username: Yup.string().matches("\a\g").required(),
      //     password: Yup.string().matches("\a\g").required(),
      //   });

      //   await schema.validate(data, { abortEarly: false });

      //   // console.log("isvalid: ",isValid);
      //   isValid = true;
      // } catch (err) {
      //   // console.error(err);
      //   if (err instanceof Yup.ValidationError) {
      //     // Validation failed
      //     console.log(err.message);
      //   }
      // }

      return isValid;
    };

    if (data !== null) {
      setLoading(true);
      if (await validate(data)) {
        const { signed, info, token } = await signIn(data);
        if (signed) {
          // AsyncStorage.setItem("token", token);
          navigation.navigate("Home");
          // navigation.reset({
          //   routes: [{ name: "Home" }],
          // });
          // console.log("Logou!", info);
        } else {
          Toast.show({
            type: "error",
            position: "bottom",
            text1: "Usuário ou senha incorretos!",
            text2: "Verifique seus dados",
          });
        }
      } else {
        console.log("Não validou!");
      }
      setLoading(false);
    }
  };

  return (
    <Container>
      <StatusBar backgroundColor="#D8DEEF" barStyle="dark-content" />
      <Content colors={["#D8DEEF", "#94B8FB", "#D8DEEF"]}>
        <Toast
          ref={(ref) => Toast.setRef(ref)}
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
                <InputErrorText>
                  O usuário não pode estar em branco.
                </InputErrorText>
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
            {/* refatorar */}
            {errors.password && (
              <InputError>
                <InputErrorText>
                  A senha não pode estar em branco.
                </InputErrorText>
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
