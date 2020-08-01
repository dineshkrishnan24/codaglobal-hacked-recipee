import {
  SentimentDissatisfied,
  SentimentVeryDissatisfied,
  SentimentSatisfied,
  SentimentSatisfiedAltOutlined,
  SentimentVerySatisfied,
} from "@material-ui/icons";
import React from "react";

export const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfied />,
    label: "Very Dissatisfied",
  },
  2: {
    icon: <SentimentDissatisfied />,
    label: "Dissatisfied",
  },
  3: {
    icon: <SentimentSatisfied />,
    label: "Neutral",
  },
  4: {
    icon: <SentimentSatisfiedAltOutlined />,
    label: "Satisfied",
  },
  5: {
    icon: <SentimentVerySatisfied />,
    label: "Very Satisfied",
  },
};
