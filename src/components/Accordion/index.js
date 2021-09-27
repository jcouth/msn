import React, { useState } from "react";
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from "accordion-collapse-react-native";
import { Container, TitleArea, TitleText, GreenCircle } from "./styles";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const Accordion = ({
  children,
  title,
  star,
  green,
  expanded = false,
  notOffline = 0,
  total = 0,
  groupType,
}) => {
  const [isExpanded, setIsExpanded] = useState(expanded);

  return (
    <Container>
      <Collapse
        isExpanded={isExpanded}
        onToggle={() => {
          setIsExpanded((isExpanded) => !isExpanded);
        }}
      >
        <CollapseHeader>
          <TitleArea>
            <MaterialIcons
              name={isExpanded ? "expand-less" : "expand-more"}
              size={16}
              color="#4E609B"
            />
            {star && <Ionicons name="star" size={16} color="#FAD02C" />}
            <TitleText>
              {title}
              {!groupType && ` (${notOffline}/${total})`}
            </TitleText>
            {!groupType && green && <GreenCircle />}
          </TitleArea>
        </CollapseHeader>
        <CollapseBody>{children}</CollapseBody>
      </Collapse>
    </Container>
  );
};

export default Accordion;
