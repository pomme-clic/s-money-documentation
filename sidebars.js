module.exports = {
  docsSidebar: [
    'docs/home',
    {
      type: 'category',
      label: 'Onboard new customers',
      items: ['docs/kyc/retail-customer', 'docs/kyc/identification', 'docs/kyc/business'],
    },
    {
      type: 'category',
      label: 'Cards',
      items: ['docs/cards/createcard', 'docs/cards/doc2','docs/cards/doc3'],
    },
    {
      type: 'category',
      label: 'Payment',
      items: ['docs/make-a-payment/doc1', 'docs/make-a-payment/doc2', 'docs/make-a-payment/doc3', 'docs/make-a-payment/doc4'],
    },
  ],
  apisSidebar: [
    'api/api1',
    'api/api3',
    {
      type: 'category',
      label: 'Card factory',
      items: ['api/api2'],
    },
  ],
}
