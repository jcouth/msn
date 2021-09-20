import React, { useState } from "react";
import { InputArea, StyledInput, RevealPassword } from "./styles";
import { Ionicons } from "@expo/vector-icons";

const Input = ({
  securyTextEntry,
  icon,
  rightIcon,
  textSize,
  textAlign,
  backgroundColor,
  borderSize,
  borderColor,
  borderRadius,
  padding,
  eyeColor,
  ...rest
}) => {
  const [secureEntry, setSecureEntry] = useState(securyTextEntry);

  return (
    <InputArea
      backgroundColor={backgroundColor}
      borderSize={borderSize}
      borderColor={borderColor}
      borderRadius={borderRadius}
      customPadding={padding}
    >
      {icon}
      <StyledInput
        leftMargin={icon ? true : false}
        textSize={textSize}
        secureTextEntry={secureEntry}
        textAlign={textAlign}
        {...rest}
      />
      {rightIcon}
      {!rightIcon && securyTextEntry && (
        <RevealPassword onPress={() => setSecureEntry(!secureEntry)}>
          {secureEntry ? (
            <Ionicons
              name="eye"
              size={24}
              color={eyeColor ? eyeColor : "#192758"}
            />
          ) : (
            <Ionicons
              name="eye-off"
              size={24}
              color={eyeColor ? eyeColor : "#192758"}
            />
          )}
        </RevealPassword>
      )}
    </InputArea>
  );
};

export default Input;
