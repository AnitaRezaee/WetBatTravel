import React from 'react';
import { FastForwardOutlined } from '@material-ui/icons';
import LuxonUtils from '@date-io/luxon';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import CustomCard from '../common/components/CustomCard';
import QuickForm from './quickForm';

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
