import { expect, test } from 'vitest'
import { render } from '@testing-library/react'
import NavigationLink from './NavigationLink'

test('Verify NavigationLink to render as expected', () => {
    const content = 'something'
	const href = '/'
	const { getByText } = render(<NavigationLink url={href} label={content} />)
	const element = getByText(content);
	expect(element).toBeDefined()
	// expect(element).toHaveProperty('href', href)
})
