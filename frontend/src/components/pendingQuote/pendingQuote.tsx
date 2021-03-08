import React from 'react';
import RestoreIcon from '@material-ui/icons/Restore';
import LuxonUtils from '@date-io/luxon';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { CustomCard } from '../common/components';
import QuotesComponent from './quotesComponent';

export const PendingQuote: React.FC = () => {
  return (
    <MuiPickersUtilsProvider utils={LuxonUtils}>
      <CustomCard
        title="Pending quotes"
        icon={<RestoreIcon color="secondary" fontSize="large" />}
        child={<QuotesComponent />}
      />
    </MuiPickersUtilsProvider>
  );
};

export default PendingQuote;
