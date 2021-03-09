export type Quote = {
  id: string;
  from: string;
  destination: string;
  departureDate: string;
  returnDate: string;
  people: string;
  transportation: string;
  name: string;
  email: string;
  price: string;
};

export type AddQuote = Omit<Quote, "id">;
