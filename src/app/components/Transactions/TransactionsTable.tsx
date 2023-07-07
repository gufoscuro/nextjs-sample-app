'use client'

import React, { useMemo } from 'react'
import moment from 'moment'
import DataTable from '@/app/components/DataTable/DataTable'
import DataTableRow from '@/app/components/DataTable/DataTableRow'
import { toAmountString } from '@/app/lib/utils'
import { BASE_URLS } from '@/app/components/Navigation/navigation.config'
import type { Transaction } from './transactions.types'

type OrderBy = 'asc' | 'desc';
type SortBy = 'created_at' | 'amount';

interface TransactionsTableProps {
	transactions: Array<Transaction>;
	sort_by?: SortBy;
	order?: OrderBy;
	selected?: string;
}

/**
 * 
 * @param selectedId the currently selected transaction id (if exists)
 * @param sortByField the field the sorting should be related to
 * @param currentOrder the currently selected ordering method
 * @returns A URL string with all the parameters needed to sort the table 
 */
function getSortingURL (selectedId: string | undefined, sortByField: SortBy, currentOrder: OrderBy = 'asc'): string {
	const nextOrder = currentOrder === 'desc' ? 'asc' : 'desc';
	return `${BASE_URLS.history}/${selectedId ?? ''}?sort_by=${sortByField}&order=${nextOrder}`
}

const TransactionsTable: React.FC<TransactionsTableProps> = ({ selected, transactions, sort_by, order}) => {
	const tableHeaders = [
        {
            label: 'Counterparty'
        },
        {
            label: 'Method'
        },
        {
            label: 'Payment Date',
			link: getSortingURL(selected, 'created_at', order),
			sortingActive: sort_by === 'created_at',
			sortingOrder: order
        },
        {
            label: 'Amount',
            align: 'right',
			link: getSortingURL(selected, 'amount', order),
			sortingActive: sort_by === 'amount',
			sortingOrder: order
        }
    ]

	const tableRows = useMemo(() => {
		let sortingFunc;

		switch(sort_by) {
			case "amount":
				sortingFunc = function (a: Transaction, b: Transaction): number {
					return order === 'desc' ?
						a.numericAmount - b.numericAmount :
						b.numericAmount - a.numericAmount
				};
				break;
			case "created_at":
				sortingFunc = function (a: Transaction, b: Transaction): number {
					return order === 'desc' ? 
						b.createdAtUnix - a.createdAtUnix : 
						a.createdAtUnix - b.createdAtUnix
				};
				break;

			default:
				sortingFunc = (a: Transaction, b: Transaction): number => 0;
		}

		return transactions
			.sort(sortingFunc)
			.map(({
				id,
				counterparty_name,
				operation_type,
				createdAtUnix,
				numericAmount,
				currency
			}) => (
				<DataTableRow 
					key={id}
					id={id} 
					link={BASE_URLS.history +'/'+ id}
					cells={[
						{
							key: `${id}__counterparty_name`,
							value: counterparty_name
						},
						{
							key: `${id}__operation_type`,
							value: operation_type
						},
						{
							key: `${id}__created_at`,
							value: moment(createdAtUnix).format('MMM D, YYYY')
						},
						{
							key: `${id}__amount`,
							value: toAmountString(numericAmount, currency),
							align: 'right'
						}
					]}
				/>
			))
	}, [ transactions, sort_by, order ]);
	
	return (
		<DataTable headers={tableHeaders}>
			{tableRows}
		</DataTable>
	);
};

export default TransactionsTable;
