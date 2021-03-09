import React, { useCallback, useState } from 'react';
import { Quote } from '../common/types';
import PendingTable from './pendingTable';
import QuoteDetailsDialog from './quoteDetailsDialog';

const createData = (
  id: string,
  from: string,
  destination: string,
  departureDate: string,
  returnDate: string,
  people: string,
  transportation: string,
  name: string,
  email: string,
  price: string
): Quote => {
  return {
    id,
    from,
    name,
    destination,
    price,
    departureDate,
    returnDate,
    people,
    transportation,
    email,
  };
};

const rows = [
  createData(
    '123456',
    'CALGARY',
    'VANCOUVER',
    'Mar 13, 2021',
    'Mar 14, 2021',
    '2',
    'Car',
    'Katty abcd',
    'katty@mail.com',
    '$1000'
  ),
  createData(
    '123456',
    'CALGARY',
    'VANCOUVER',
    'Mar 13, 2021',
    'Mar 14, 2021',
    '2',
    'Car',
    'Katty abcd',
    'katty@mail.com',
    '$1000'
  ),
  createData(
    '123456',
    'CALGARY',
    'VANCOUVER',
    'Mar 13, 2021',
    'Mar 14, 2021',
    '2',
    'Car',
    'Katty abcd',
    'katty@mail.com',
    '$1000'
  ),
  createData(
    '123456',
    'CALGARY',
    'VANCOUVER',
    'Mar 13, 2021',
    'Mar 14, 2021',
    '2',
    'Car',
    'Katty abcd',
    'katty@mail.com',
    '$1000'
  ),
];

export const QuotesComponent: React.FC = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedQuote, setSelectedQuote] = useState<Quote | undefined>(
    undefined
  );

  const rowSelectHandler = useCallback((quote: Quote) => {
    setSelectedQuote(quote);
    setOpenDialog(true);
  }, []);

  const onCloseHandler = useCallback(() => {
    setOpenDialog(false);
  }, []);
  return (
    <>
      <PendingTable quotes={rows} rowSelectHandler={rowSelectHandler} />
      <QuoteDetailsDialog
        quote={selectedQuote}
        open={openDialog}
        onCloseHandler={onCloseHandler}
      />
    </>
  );
};

export default QuotesComponent;
