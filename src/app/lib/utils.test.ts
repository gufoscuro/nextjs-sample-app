import { expect, test } from 'vitest'
import { toAmountString, eurToUSD } from './utils'

test('Verify eurToUSD conversion', async () => {
    const result = eurToUSD(1);
    expect(result).toBe(1.13);
})

test('Verify toAmountString function', async () => {
    const CURRENCY = 'EUR';
    const result1 = toAmountString(1, CURRENCY);
    const result2 = toAmountString(1.472, CURRENCY);
    const result3 = toAmountString(-4.2, CURRENCY);
    
    expect(result1).toBe(`${CURRENCY} +1.00`);
    expect(result2).toBe(`${CURRENCY} +1.47`);
    expect(result3).toBe(`${CURRENCY} -4.20`);
})

