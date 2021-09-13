import React from "react";
import { Area, PictureStatus, Picture } from "./styles";

const ProfilePicture = ({
  colors,
  source,
  width,
  height,
  borderSize,
  roundness,
}) => {
  const linearBg = colors ? colors : ["#fff", "#fff", "#39CA54"];

  return (
    <Area
      colors={linearBg}
      width={width}
      height={height}
      borderSize={borderSize}
      roundness={roundness}
    >
      <PictureStatus roundness={roundness}>
        <Picture style={{ resizeMode: "contain" }} source={source} />
      </PictureStatus>
    </Area>
  );
};

export default ProfilePicture;
