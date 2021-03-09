import React from 'react';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from '@material-ui/core';

type QuoteListDetailsProps = {
  icon: React.ReactNode;
  text: string;
  data: string | undefined;
};

const useListItemStyles = makeStyles(() => ({
  detail: {
    width: '50%',
  },
  discription: {
    width: '50%',
  },
}));

export const QuoteListDetails: React.FC<QuoteListDetailsProps> = ({
  icon,
  text,
  data,
}: QuoteListDetailsProps) => {
  const classes = useListItemStyles();
  return (
    <ListItem alignItems="flex-start">
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText className={classes.discription} primary={text} />
      <ListItemText className={classes.detail} primary={data} />
    </ListItem>
  );
};

export default QuoteListDetails;
