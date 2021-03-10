import React from 'react';
import EmailIcon from '@material-ui/icons/Email';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import FlightLandIcon from '@material-ui/icons/FlightLand';
import TodayIcon from '@material-ui/icons/Today';
import EventIcon from '@material-ui/icons/Event';
import PeopleIcon from '@material-ui/icons/People';
import CommuteIcon from '@material-ui/icons/Commute';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  makeStyles,
} from '@material-ui/core';
import List from '@material-ui/core/List';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { DateTime } from 'luxon';
import { Quote } from '../common/types';
import { QuoteListDetails } from './quoteListDetails';

type QuoteDetailsDialogProps = {
  quote?: Quote;
  open: boolean;
  onCloseHandler: () => void;
};

const useStyles = makeStyles((theme) => ({
  dialogTitle: {
    color: theme.palette.primary.main,
  },
  list: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  text: {
    fontWeight: 'bold',
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
      <DialogTitle className={classes.dialogTitle}>
        Quote ({quote?.id})
      </DialogTitle>
      <DialogContent>
        <List className={classes.list}>
          <QuoteListDetails
            icon={<AccountCircleIcon />}
            text="Name"
            data={quote?.name}
          />
          <QuoteListDetails
            icon={<EmailIcon />}
            text="Email"
            data={quote?.email}
          />
          <QuoteListDetails
            icon={<FlightTakeoffIcon />}
            text="From"
            data={quote?.from}
          />
          <QuoteListDetails
            icon={<FlightLandIcon />}
            text="Destination"
            data={quote?.destination}
          />
          <QuoteListDetails
            icon={<TodayIcon />}
            text="Departure Date"
            data={DateTime.fromISO(quote?.departureDate ?? '').toFormat(
              'MMM dd, yyyy'
            )}
          />
          <QuoteListDetails
            icon={<EventIcon />}
            text="Return Date"
            data={DateTime.fromISO(quote?.returnDate ?? '').toFormat(
              'MMM dd, yyyy'
            )}
          />
          <QuoteListDetails
            icon={<PeopleIcon />}
            text="People"
            data={quote?.people}
          />
          <QuoteListDetails
            icon={<CommuteIcon />}
            text="Transportation"
            data={quote?.transportation}
          />
          <QuoteListDetails
            icon={<AttachMoneyIcon />}
            text="Price"
            data={quote?.price}
          />
        </List>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteDetailsDialog;
