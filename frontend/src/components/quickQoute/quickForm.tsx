import React, { useCallback, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import { Button, InputAdornment } from '@material-ui/core';
import { DatePicker } from '@material-ui/pickers';
import { DateTime } from 'luxon';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import { AddQuote } from '../common/types';
import { useSetQuote } from '../hooks/useSetQuote';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  textField: {
    width: '48%',
  },
  row: {
    display: 'flex',
    padding: theme.spacing(1, 2, 0, 2),
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    borderRadius: 35,
    color: 'white',
    width: '48%',
    fontWeight: 'bold',
    height: '3.5em',
  },
}));

export const QuickForm: React.FC = () => {
  const classes = useStyles();
  const { setQuote } = useSetQuote();

  const numberofPeople = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const transport = ['Rental Car', 'Plane', 'Bus'];

  const [
    departureDate,
    setDepartureDate,
  ] = useState<MaterialUiPickersDate | null>(null);
  const [returnDate, setReturnDate] = useState<MaterialUiPickersDate | null>(
    null
  );

  const [depLocation, setDepLocation] = useState('');
  const [destLocation, setDestLocation] = useState('');

  const [people, setPeople] = useState('0');
  const [transportation, setTransportation] = useState('');

  const [name, setName] = useState('');

  const [email, setEmail] = useState('');

  const [price, setPrice] = useState('');

  const handleDepratureDateChange = useCallback(
    (input: MaterialUiPickersDate) => {
      setDepartureDate(input);
    },
    []
  );

  const handleReturnDateChange = useCallback((input: MaterialUiPickersDate) => {
    setReturnDate(input);
  }, []);

  const handleDepLocationChange = useCallback(
    (input: React.ChangeEvent<HTMLInputElement>) => {
      setDepLocation(input.target.value);
    },
    []
  );

  const handleDestLocationChange = useCallback(
    (input: React.ChangeEvent<HTMLInputElement>) => {
      setDestLocation(input.target.value);
    },
    []
  );

  const handlePeopleChange = useCallback(
    (input: React.ChangeEvent<HTMLInputElement>) => {
      setPeople(input.target.value);
    },
    []
  );

  const handleTransportationChange = useCallback(
    (input: React.ChangeEvent<HTMLInputElement>) => {
      setTransportation(input.target.value);
    },
    []
  );

  const handleNameChange = useCallback(
    (input: React.ChangeEvent<HTMLInputElement>) => {
      setName(input.target.value);
    },
    []
  );

  const handleEmailChange = useCallback(
    (input: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(input.target.value);
    },
    []
  );

  const handlePriceChange = useCallback(
    (input: React.ChangeEvent<HTMLInputElement>) => {
      setPrice(input.target.value);
    },
    []
  );

  const ButtonSelectHandler = useCallback(() => {
    const quote: AddQuote = {
      name: name,
      email: email,
      from: depLocation,
      destination: destLocation,
      departureDate: departureDate?.toString(),
      returnDate: returnDate?.toString(),
      people: people,
      transportation: transportation,
      price: price,
    };
    setQuote(quote);
    resetTextField();
  }, [
    depLocation,
    departureDate,
    destLocation,
    email,
    name,
    people,
    price,
    returnDate,
    setQuote,
    transportation,
  ]);

  const resetTextField = () => {
    setName('');
    setEmail('');
    setDepLocation('');
    setDestLocation('');
    setDepartureDate(null);
    setReturnDate(null);
    setPeople('0');
    setTransportation('');
    setPrice('');
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className={classes.row}>
        <TextField
          label="FROM"
          id="FROM"
          className={classes.textField}
          value={depLocation}
          onChange={handleDepLocationChange}
          margin="dense"
          variant="filled"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          label="DESTINATION"
          id="DESTINATION"
          className={classes.textField}
          value={destLocation}
          onChange={handleDestLocationChange}
          margin="dense"
          variant="filled"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <div className={classes.row}>
        <DatePicker
          className={classes.textField}
          margin="dense"
          label="DEPARTURE DATE"
          id="DEPARTURE-DATE"
          autoOk
          value={departureDate}
          format="MMM dd, yyyy"
          defaultValue=""
          inputVariant="filled"
          onChange={handleDepratureDateChange}
          disablePast
          InputLabelProps={{
            shrink: true,
          }}
          variant="inline"
        />
        <DatePicker
          className={classes.textField}
          margin="dense"
          label="RETURN DATE"
          id="RETURN DATE"
          value={returnDate}
          minDate={departureDate ?? DateTime.local()}
          defaultValue=""
          autoOk
          format="MMM dd, yyyy"
          inputVariant="filled"
          onChange={handleReturnDateChange}
          disablePast
          InputLabelProps={{
            shrink: true,
          }}
          variant="inline"
        />
      </div>
      <div className={classes.row}>
        <TextField
          label="PEOPLE"
          id="PEOPLE"
          className={classes.textField}
          select
          onChange={handlePeopleChange}
          value={people}
          margin="dense"
          variant="filled"
          InputLabelProps={{
            shrink: true,
          }}>
          {numberofPeople.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          label="TRANSPORTATION"
          id="TRANSPORTATION"
          className={classes.textField}
          select
          onChange={handleTransportationChange}
          value={transportation}
          margin="dense"
          variant="filled"
          InputLabelProps={{
            shrink: true,
          }}>
          {transport.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <div className={classes.row}>
        <TextField
          label="NAME"
          id="NAME"
          onChange={handleNameChange}
          value={name}
          className={classes.textField}
          margin="dense"
          variant="filled"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          label="EMAIL"
          id="EMAIL"
          onChange={handleEmailChange}
          value={email}
          className={classes.textField}
          margin="dense"
          variant="filled"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <div className={classes.row}>
        <TextField
          label="PRICE"
          id="PRICE"
          onChange={handlePriceChange}
          value={price}
          className={classes.textField}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          margin="dense"
          variant="filled"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button
          className={classes.button}
          onClick={ButtonSelectHandler}
          variant="contained"
          color="secondary">
          Create a quote
        </Button>
      </div>
    </form>
  );
};

export default QuickForm;
