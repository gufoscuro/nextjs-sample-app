import React from 'react'
import MainHeading from '@/app/components/MainHeading/MainHeading'
import TransactionsTable from '@/app/components/Transactions/TransactionsTable'
import TransactionDetails from '@/app/components/Transactions/TransactionDetails'
import { FlexLayout, FlexColumn } from '@/app/components/LayoutUtils'
import { fetchTransactions } from '@/app/services/transactions'
import style from './page.module.css'
import type { Transaction } from '@/app/components/Transactions/transactions.types'

interface TransactionPageFilters {
    tid?: string;
}

export default async function History({ params, searchParams }: { params: TransactionPageFilters, searchParams: any }) {
    const transactions = await fetchTransactions();
    const selectedTransaction: Transaction | undefined = transactions ? transactions.find(it => params.tid && it.id === params.tid[0]) : undefined

    return (
        <main className="MainContent" data-testid="main_content">
            <FlexLayout fullHeight>
                <FlexColumn grow scrollable>
                    <section>
                        <MainHeading>History</MainHeading>
                        <TransactionsTable
                            transactions={transactions}
                            selected={params.tid}
                            sort_by={searchParams.sort_by}
                            order={searchParams.order}
                        />
                    </section>
                </FlexColumn>
                <FlexColumn className={style.singleTransactionPanel}>
                    <section>
                        <TransactionDetails transaction={selectedTransaction} />
                    </section>
                </FlexColumn>
            </FlexLayout>
        </main>
    )
}
