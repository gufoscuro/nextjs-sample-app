
import { API_BASE_URL } from '@/app/services/app.config'
import moment from 'moment'
import type { TransactionsResponse, Transaction } from '@/app/components/Transactions/transactions.types'

/**
 * In a real world scenario, this function would also accept some filtering parameters  
 * @returns a promise object containing an array of transactions
 */
export async function fetchTransactions(): Promise<Array<Transaction>> {
    const res = await fetch(`${API_BASE_URL}/transactions`);

    // Recommendation: handle errors
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    const response: TransactionsResponse = await res.json();
    return response.transactions.map((it: Transaction) => {
        return {
            ...it,
            numericAmount: parseFloat(it.amount as string),
            createdAtUnix: moment(it.created_at).valueOf()
        }
    })
}