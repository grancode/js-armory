/**
 * @reference https://www.iban.com/currency-codes
 * @param {string|number} price - 要转换格式的数字
 * @param {boolean} sign - 是否显示货币符号
 */
export const priceFormat = (price, sign = true) => {
  if (!price) return price

  try {
    const formatter = new Intl.NumberFormat('zh-Hans', {
      style: sign ? 'currency' : 'decimal',
      currency: 'CNY',
      minimumFractionDigits: 2
    })

    return formatter.format(price)
  } catch (e) {
    return price
  }
}
