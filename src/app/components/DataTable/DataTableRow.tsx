import React, { PropsWithChildren } from 'react';
import Link from 'next/link';
import styles from './datatable.module.css';

interface TableCell {
    key: string;
    value: string;
    align?: string;
}
interface DataTableRowProps {
    id: string;
    link?: string;
    cells?: Array<TableCell>;
}

const DataTableRow = ({ children, id, cells, link }: PropsWithChildren<DataTableRowProps>) => {
    return (
        <tr key={id} data-testid="table_row">
            {children ?? cells?.map((cell) => {
                let classes = [ styles.tCell ];

                if (cell.align)
                    classes.push(styles[cell.align]);

                if (link)
                    classes.push(styles.link);

                return (
                    <td key={cell.key} className={link ? '' : classes.join(' ')}>
                        {link ? (
                            <Link key={cell.key} href={link} className={classes.join(' ')} scroll={false} data-testid="table_link">{cell.value}</Link>
                        ) : cell.value}
                    </td>
                )
            })}
        </tr>
	);
};

export default DataTableRow;