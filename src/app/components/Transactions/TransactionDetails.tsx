'use memo'

import React from 'react'
import moment from 'moment'
import { FlexLayout, FlexColumn } from '@/app/components/LayoutUtils'
import { eurToUSD, toAmountString } from '@/app/lib/utils'
import styles from './transactiondetails.module.css'
import type { Transaction } from './transactions.types'

interface TransactionDetailsProps {
	transaction?: Transaction;
}

const TransactionDetails: React.FC<TransactionDetailsProps> = ({ transaction }) => {
    const createdMoment = transaction ? moment(transaction.created_at) : null;

    return transaction && createdMoment ? (
        <div className={styles.transactionDetails}>
            <div className={styles.detailTypeAndDate}>
                <div className={styles.detailType} data-testid="transaction_type">
                    {transaction.operation_type}
                </div>
                <time dateTime={createdMoment.format('YYYY-MM-DD')} className="text-secondary color-secondary" data-testid="transaction_date">
                    {createdMoment?.format('ddd, MMM D, YYYY, HH:mm')}
                </time>
            </div>

            <div className={styles.detailAmount}>
                <div className={styles.detailAmountEur} data-testid="transaction_amount">
                    {toAmountString(transaction.numericAmount, transaction.currency)}
                </div>
                <div data-testid="transaction_counterparty_name">{transaction.counterparty_name}</div>
                <div className="color-secondary" data-testid="transaction_amount_usd">{toAmountString(eurToUSD(transaction.numericAmount), 'USD')}</div>
            </div>
        </div>
    ) : (
        <FlexLayout centerItems justifyCenter fullHeight>
            <FlexColumn>
                <div data-testid="no_transaction_selected">No transaction selected</div>
            </FlexColumn>
        </FlexLayout>
    )
};

export default TransactionDetails;