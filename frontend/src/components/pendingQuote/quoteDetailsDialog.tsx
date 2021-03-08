import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  makeStyles,
} from '@material-ui/core';
import { Quote } from '../common/types';

type QuoteDetailsDialogProps = {
  quote?: Quote;
  open: boolean;
  onCloseHandler: () => void;
};

const useStyles = makeStyles((theme) => ({
  dialogTitle: {
    color: theme.palette.primary.main,
  },
}));

export const QuoteDetailsDialog: React.FC<QuoteDetailsDialogProps> = ({
  quote,
  open,
  onCloseHandler,
}: QuoteDetailsDialogProps) => {
  const classes = useStyles();
  return (
    <Dialog open={open} onClose={onCloseHandler} fullWidth>
      <DialogTitle className={classes.dialogTitle}>Quote</DialogTitle>
      <DialogContent>
        <p>{quote?.name}</p>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteDetailsDialog;
