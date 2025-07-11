export type Transaction = {
  name: string;
  company: string;
  type: string;
  amount: number;
  date: string;
  img: string;
  invoiceId: string;
  time: string;
};

export type ScheduledTransfers = {
  img: string;
  recipient: string;
  date: string;
  time: string;
  amount: number;
};

export type GlobalContextType = {
  transactions: Transaction[];
  scheduledTransfers: ScheduledTransfers[];
};
