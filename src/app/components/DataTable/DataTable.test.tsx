import { expect, test } from 'vitest'
import { getElementError, render } from '@testing-library/react'
import DataTable, { TableHead } from './DataTable'
import DataTableRow from './DataTableRow'

test('Verify DataTable to render as expected', () => {
    const tableHeaders: Array<TableHead> = [
        {
            label: 'a'
        },
        {
            label: 'b'
        },
        {
            label: 'c',
            link: '/foo',
            align: 'right',
            sortingActive: true,
            sortingOrder: 'desc'
        }
    ]
	const { getByTestId } = render(<DataTable headers={tableHeaders} />)
	expect(getByTestId('table')).toBeDefined();
	expect(getByTestId('table_head')).toBeDefined();
	expect(getByTestId('table_body')).toBeDefined();
	expect(getByTestId('table_head').getElementsByTagName('tr')[0].childNodes.length).toBe(tableHeaders.length);
	expect(getByTestId('table_head').getElementsByTagName('tr')[0].getElementsByTagName('th')[2].getElementsByTagName('a')[0]).toBeDefined();
    expect(getByTestId('sort_image')).toHaveAttribute('data-sort-status', 'desc')
})

test('Verify DataTable, scenario with different sorting status', () => {
    const tableHeaders: Array<TableHead> = [
        {
            label: 'a'
        },
        {
            label: 'b'
        },
        {
            label: 'c',
            link: '/foo',
            align: 'right',
            sortingActive: true,
            sortingOrder: 'asc'
        }
    ]
	const { getByTestId } = render(<DataTable headers={tableHeaders} />)
	expect(getByTestId('table')).toBeDefined();
    expect(getByTestId('sort_image')).toHaveAttribute('data-sort-status', 'asc')
})

test('Verify DataTable, scenario with different sorting status', () => {
    const tableHeaders: Array<TableHead> = [
        {
            label: 'a'
        },
        {
            label: 'b'
        },
        {
            label: 'c',
            link: '/foo',
            align: 'right',
            sortingActive: false,
            sortingOrder: 'desc'
        }
    ]
	const { getByTestId } = render(<DataTable headers={tableHeaders} />)
	expect(getByTestId('table')).toBeDefined();
    expect(getByTestId('sort_image')).toHaveAttribute('data-sort-status', 'inactive')
})

test('Ensures DataTableRow to render as expected', () => {
    const props = {
        id: "1", 
        cells: [
            {
                key: `1_1`,
                value: 'a'
            },
            {
                key: `1_2`,
                value: 'b'
            },
            {
                key: `1_3`,
                value: 'c',
                align: 'right'
            }
        ]
    }
	const { getByTestId } = render(<DataTableRow {...props} />)
	expect(getByTestId('table_row')).toBeDefined();
})

test('Ensures DataTableRow with link prop to render as expected', () => {
    const props = {
        id: "1", 
        link: '/foo/1',
        cells: [
            {
                key: `1_1`,
                value: 'a'
            },
            {
                key: `1_2`,
                value: 'b'
            },
            {
                key: `1_3`,
                value: 'c',
                align: 'center'
            }
        ]
    }
	const { getByTestId, getAllByTestId } = render(<DataTableRow {...props} />)
	expect(getByTestId('table_row')).toBeDefined();
    expect(getAllByTestId('table_link')).toHaveLength(3);
})
