import { expect, test } from 'vitest'
import { render } from '@testing-library/react'
import moment from 'moment'
import { eurToUSD, toAmountString } from '@/app/lib/utils'
import TransactionDetails from './TransactionDetails'
import type { Transaction } from './transactions.types'

test('Verify TransactionDetail to render as expected in the default scenario (no transaction selected)', () => {
    const { getByTestId } = render(<TransactionDetails  />)
    expect(getByTestId('no_transaction_selected')).toBeDefined();
    expect(getByTestId('no_transaction_selected')).toHaveTextContent('No transaction selected')
})

test('Verify TransactionDetail to render as expected with a selected transaction', () => {
    const selectedTransaction: Transaction = {
        "id": "1",
        "created_at": "2016-01-01T08:30:39-0300",
        "counterparty_name": "Uber",
        "debit": "false",
        "credit": "true",
        "amount": "44.20",
        "currency": "EUR",
        "operation_type": "refund",
        "attachements": [
           {
              "url": "https://fakeimg.pl/350x200/?text=Hello"
           }
        ],
        "numericAmount": 44.2,
        "createdAtUnix": 1451647839000
    };
    const { getByTestId } = render(<TransactionDetails transaction={selectedTransaction} />)
    expect(getByTestId('transaction_type')).toHaveTextContent(selectedTransaction.operation_type)
    expect(getByTestId('transaction_date')).toHaveTextContent(moment(selectedTransaction.createdAtUnix).format('ddd, MMM D, YYYY, HH:mm'))
    expect(getByTestId('transaction_amount')).toHaveTextContent(toAmountString(selectedTransaction.numericAmount, selectedTransaction.currency))
    expect(getByTestId('transaction_counterparty_name')).toHaveTextContent(selectedTransaction.counterparty_name)
    expect(getByTestId('transaction_amount_usd')).toHaveTextContent(toAmountString(eurToUSD(selectedTransaction.numericAmount), 'USD'))
})