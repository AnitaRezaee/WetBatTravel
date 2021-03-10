import { useState } from 'react';
import axios from 'axios';
import { Quote } from '../common/types';
import { DB_PATHS } from '../common/constants/databaseTables';

export type GetQuoteResult = {
  getAllQuotes: () => void;
  allQuotes: Quote[];
};

export const useGetQuotes = (): GetQuoteResult => {
  const [allQuotes, setAllQuotes] = useState<Quote[]>([]);

  const getAllQuotes = async () => {
    const res = await axios.get<Quote[]>(
      `${process.env.REACT_APP_BASE_URL}${DB_PATHS.GETALL}`
    );
    const { data } = res;
    setAllQuotes(data);
  };

  return {
    getAllQuotes,
    allQuotes,
  };
};
