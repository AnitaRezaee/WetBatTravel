import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "50%",
  },
  content: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  header: {
    padding: theme.spacing(0, 2, 0.5, 2),
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
    alignItems: "center",
    display: "flex",
  },
  title: {
    marginLeft: theme.spacing(0.5),
  },
}));

type CustomCardProps = {
  child?: React.ReactNode;
  title: string;
  icon: React.ReactNode;
};

export const CustomCard: React.FC<CustomCardProps> = ({
  child,
  title,
  icon,
}: CustomCardProps) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <div className={classes.header}>
          {icon}
          <Typography variant="h6" color="primary" className={classes.title}>
            {title}
          </Typography>
        </div>
        {child}
      </CardContent>
    </Card>
  );
};

export default CustomCard;
