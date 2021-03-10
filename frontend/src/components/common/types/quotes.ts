export type Quote = {
  id: string;
  from: string;
  destination: string;
  departureDate: string | undefined;
  returnDate: string | undefined;
  people: string;
  transportation: string;
  name: string;
  email: string;
  price: string;
};

export type AddQuote = Omit<Quote, 'id'>;
