import { expect, test } from 'vitest'
import { render } from '@testing-library/react'
import MainHeading from './MainHeading'

test('Verify MainHeading to render as expected', () => {
	const content = 'something'
	const { getByRole } = render(<MainHeading>{content}</MainHeading>)
	const element = getByRole('heading', { level: 1 });
	expect(element).toBeDefined()
	expect(element.innerHTML).toBe(content)
})
