import React from "react";
import { Area, PictureStatus, Picture } from "./styles";

const ProfilePicture = ({
  colors,
  source,
  width,
  height,
  borderSize,
  roundness,
  imageFill,
}) => {
  const linearBg = colors ? colors : ["#fff", "#fff", "#39CA54"];

  let style = { resizeMode: "contain" };
  if (imageFill) style = { ...style, width: "100%", height: "100%" };

  return (
    <Area
      colors={linearBg}
      width={width}
      height={height}
      borderSize={borderSize}
      roundness={roundness}
    >
      <PictureStatus roundness={roundness}>
        <Picture
          // style={{ resizeMode: "contain" }}
          style={style}
          // imageFill={imageFill}
          source={source}
        />
      </PictureStatus>
    </Area>
  );
};

export default ProfilePicture;
