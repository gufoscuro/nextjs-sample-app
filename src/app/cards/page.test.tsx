import { expect, test } from 'vitest'
import { render } from '@testing-library/react'
import Page from './page'

test('Verify cards page to render as expected', () => {
    const { getByRole, getByTestId } = render(<Page />)
	const handle = getByTestId('main_content');
	expect(handle).toBeDefined()
    expect(getByRole('heading', { level: 1 })).toBeDefined();
    expect(getByTestId('cards_title')).toBeInTheDocument();
    expect(getByTestId('cards_text')).toBeInTheDocument();
    expect(getByTestId('cards_image')).toBeInTheDocument();
})
