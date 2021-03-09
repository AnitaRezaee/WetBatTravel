import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Quote } from '../common/types';

const useStyles = makeStyles((theme) => ({
  table: {
    minwidth: 650,
    display: 'flex',
  },
  tableRow: {
    '&&:hover': {
      backgroundColor: theme.palette.grey[100],
      cursor: 'pointer',
    },
  },
}));

type PendingTableProps = {
  quotes: Quote[];
  rowSelectHandler: (quote: Quote) => void;
};

export const PendingTable: React.FC<PendingTableProps> = ({
  quotes,
  rowSelectHandler,
}: PendingTableProps) => {
  const classes = useStyles();

  return (
    <TableContainer className={classes.table}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="left">ID#</TableCell>
            <TableCell align="left">NAME</TableCell>
            <TableCell align="left">DESTINATION</TableCell>
            <TableCell align="left">PRICE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {quotes.map((row) => (
            <TableRow
              key={row.id}
              onClick={() => rowSelectHandler(row)}
              hover
              className={classes.tableRow}>
              <TableCell align="left">{row.id}</TableCell>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.destination}</TableCell>
              <TableCell align="left">{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PendingTable;
