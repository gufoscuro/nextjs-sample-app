import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import FlexLayout from './FlexLayout'

describe('Renders FlexLayout correctly', () => {
    it('Renders as expected', () => {
        const content = 'foo1'
        const { getByTestId } = render(<FlexLayout>{content}</FlexLayout>)
        const element = getByTestId('flex_layout');
        expect(element).toBeDefined();
        expect(element.innerHTML).toBe(content)
    })
    
    it('Prop fullHeight to be working', () => {
        const content = 'foo2'
        const { getByText } = render(<FlexLayout fullHeight>{content}</FlexLayout>)
        const element = getByText(content);
        expect(element).toBeDefined();
    })

    it('Prop centerItems to be working', () => {
        const content = 'foo3'
        const { getByText } = render(<FlexLayout centerItems>{content}</FlexLayout>)
        const element = getByText(content);
        expect(element).toBeDefined();
    })

    it('Prop justifyCenter to be working', () => {
        const content = 'foo4'
        const { getByText } = render(<FlexLayout justifyCenter>{content}</FlexLayout>)
        const element = getByText(content);
        expect(element).toBeDefined();
    })
})

