module.exports = {
  docsSidebar: [
    'docs/home',
    {
      type: 'category',
      label: 'Users',
      items: ['docs/account-holders/doc1', 'docs/account-holders/doc2', 'docs/account-holders/doc3'],
    },
    {
      type: 'category',
      label: 'Cards',
      items: ['docs/cards/doc1', 'docs/cards/doc2','docs/cards/doc3'],
    },
    {
      type: 'category',
      label: 'Make A Payment',
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
