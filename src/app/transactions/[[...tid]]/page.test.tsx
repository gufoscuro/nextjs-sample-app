import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page from './page'

test('Verify transactions page to render as expected', async () => {
    const props = {
        params: {
            tid: "1"
        },
        searchParams: {
            
        }
    }
    render(await Page(props))
    expect(screen.getByTestId('main_content')).toBeDefined()
    expect(screen.getByTestId('table')).toBeDefined()
    expect(screen.getByRole('heading', { level: 1 })).toBeDefined()
})
