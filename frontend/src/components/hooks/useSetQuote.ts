import axios from 'axios';
import { DB_PATHS } from '../common/constants/databaseTables';
import { AddQuote } from '../common/types';

export const useSetQuote = (quote: AddQuote): void => {
  axios
    .post(`${process.env.REACT_APP_BASE_URL}${DB_PATHS.ADD}`, quote)
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    .then((res) => {});
};
