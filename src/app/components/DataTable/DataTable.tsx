import React, { PropsWithChildren } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './datatable.module.css';

export interface TableHead {
    label: string;
    link?: string;
    align?: string;
    sortingActive?: boolean;
    sortingOrder?: 'asc' | 'desc'
}
interface DataTableProps {
    headers: Array<TableHead>;
}

const SORT_IMAGE: string = '/images/chevron-up-down.svg';
const SORT_IMAGE_ASC: string = '/images/arrow-down.svg';
const SORT_IMAGE_DESC: string = '/images/arrow-up.svg';

const DataTable = ({ children, headers }: PropsWithChildren<DataTableProps>) => {
	return (
        <table className={styles.dataTable} data-testid="table">
            <thead data-testid="table_head">
                <tr>
                    {headers.map(({ label, link, align, sortingActive, sortingOrder }) => (
                        <th key={label} className={[ styles.thead, ...[ align ? styles[align] : '' ]].join(' ')}>
                            {link ? (
                                <>
                                    <Link href={link} data-testid="sorting_link">{label}</Link>
                                    <Image
                                        priority
                                        className={styles.sortingImage} 
                                        data-testid="sort_image"
                                        data-sort-status={sortingActive ? sortingOrder : 'inactive'}
                                        src={sortingActive ? (sortingOrder === 'asc' ? SORT_IMAGE_ASC : SORT_IMAGE_DESC) : SORT_IMAGE}
                                        alt="Qonto logo"
                                        height={8}
                                        width={8}
                                    />
                                </>
                            ): label}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody data-testid="table_body">
                {children}
            </tbody>
        </table>
	);
};

export default DataTable;