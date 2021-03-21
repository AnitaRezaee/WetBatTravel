import React from 'react';
import RestoreIcon from '@material-ui/icons/Restore';
import { CustomCard } from '../common/components';
import QuotesComponent from './quotesComponent';

export const PendingQuote: React.FC = () => {
  return (
    <CustomCard
      title="Pending quotes"
      icon={<RestoreIcon color="secondary" fontSize="large" />}
      child={<QuotesComponent />}
    />
  );
};

export default PendingQuote;
