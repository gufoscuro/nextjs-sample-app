import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import FlexColumn from './FlexColumn'

describe('Renders FlexColumn correctly', () => {
    it('Renders as expected', () => {
        const content = 'foo1'
        const { getByText } = render(<FlexColumn>{content}</FlexColumn>)
        const element = getByText(content);
        expect(element).toBeDefined();
        expect(element.innerHTML).toBe(content)
    })
    
    it('Prop "grow" to be working', () => {
        const content = 'foo2'
        const { getByText } = render(<FlexColumn grow>{content}</FlexColumn>)
        const element = getByText(content);
        expect(element).toBeDefined();
    })

    it('Prop "shrink" to be working', () => {
        const content = 'foo3'
        const { getByText } = render(<FlexColumn shrink>{content}</FlexColumn>)
        const element = getByText(content);
        expect(element).toBeDefined();
    })

    it('Prop "scrollable" to be working', () => {
        const content = 'foo4'
        const { getByText } = render(<FlexColumn scrollable>{content}</FlexColumn>)
        const element = getByText(content);
        expect(element).toBeDefined();
    })
})

