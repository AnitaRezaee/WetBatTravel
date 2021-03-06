import React from "react";
import CustomCard from "../common/components/CustomCard";
import { FastForwardOutlined } from "@material-ui/icons";
import QuickForm from "./quickForm";
import LuxonUtils from "@date-io/luxon";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

export const QuickQuote: React.FC = () => {
  return (
    <MuiPickersUtilsProvider utils={LuxonUtils}>
      <CustomCard
        title="Quick quotes"
        icon={<FastForwardOutlined color="secondary" fontSize="large" />}
        child={<QuickForm />}
      />
    </MuiPickersUtilsProvider>
  );
};

export default QuickQuote;
