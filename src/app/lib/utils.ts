function roundToCurrency(value: number): number {
    return Math.round(value * 100) / 100
}

/**
 * 
 * @param eurValue a number expressing the amount of EUR
 * @returns a string expressing the conversion in USD amount, given the EUR amount
 */
export function eurToUSD(eurValue: number): number {
    return roundToCurrency(eurValue * 1.13)
}

/**
 * 
 * @param amountValue a number expressing the amount of a transaction (either positive or negative)
 * @param currency a string expressing the currency of a transaction
 * @returns a formatted string expressing currency, sign (positive or negative) and amount of a transaction
 */
export function toAmountString(amountValue: number, currency: string): string {
    return `${currency} ${amountValue > 0 ? '+' : ''}${amountValue.toFixed(2)}`
}