import questions from '../data/questions.json';

export type IQuestionsKeys = keyof typeof questions;

export type ICurrencyProps = {
  name: string;
  code: string;
  bid: number;
  high: number;
  low: number;
};

export type IDataProps = {
  USD: ICurrencyProps;
  EUR: ICurrencyProps;
  BTC: ICurrencyProps;
};

export type ICovidData = {
  cases: number;
  deaths: number;
  refuses: number;
  state: string;
  datetime: Date;
  error: string;
};
