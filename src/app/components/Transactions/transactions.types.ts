export interface Transaction {
    id: string;
    created_at: string;
    counterparty_name: string;
    debit: string;
    credit: string;
    amount: string;
    currency: string;
    operation_type: string;
    attachements: Array<{
        url: string;
    }>;
    numericAmount: number;
    createdAtUnix: number;
}

export interface TransactionsResponse {
    transactions: Array<Transaction>;
}