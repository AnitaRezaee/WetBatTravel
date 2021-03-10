import React, { useCallback, useEffect, useState } from 'react';
import { Quote } from '../common/types';
import { useGetQuotes } from '../hooks';
import PendingTable from './pendingTable';
import QuoteDetailsDialog from './quoteDetailsDialog';

export const QuotesComponent: React.FC = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedQuote, setSelectedQuote] = useState<Quote | undefined>(
    undefined
  );
  const { allQuotes, getAllQuotes } = useGetQuotes();
  useEffect(() => {
    getAllQuotes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const rowSelectHandler = useCallback((quote: Quote) => {
    setSelectedQuote(quote);
    setOpenDialog(true);
  }, []);

  const onCloseHandler = useCallback(() => {
    setOpenDialog(false);
  }, []);
  return (
    <>
      <PendingTable quotes={allQuotes} rowSelectHandler={rowSelectHandler} />
      <QuoteDetailsDialog
        quote={selectedQuote}
        open={openDialog}
        onCloseHandler={onCloseHandler}
      />
    </>
  );
};

export default QuotesComponent;
