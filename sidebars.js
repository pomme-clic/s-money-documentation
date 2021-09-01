module.exports = {
  docsSidebar: [
    'docs/home',
    'docs/introduction.md',
    {
      type: 'category',
      label: 'Onboard new customers',
      items: ['docs/kyc/retail-customer', 'docs/kyc/identification', 'docs/kyc/business'],
    },
    {
      type: 'category',
      label: 'Accounts',
      items: ['docs/account/iban', 'docs/account/accountManagement','docs/account/bankingMobility','docs/account/unpaidOperations'],
    },
    {
      type: 'category',
      label: 'Cards',
      items: ['docs/cards/issuing', 'docs/cards/cardManagement','docs/cards/xPay'],
    },
    {
      type: 'category',
      label: 'Pay IN',
      items: ['docs/payIN/general', 'docs/payIN/sdd','docs/payIN/topUp'],
    },
    {
      type: 'category',
      label: 'Pay OUT',
      items: ['docs/payOUT/sct', 'docs/payOUT/beneficiaries','docs/payOUT/cardPayment'],
    },
    {
      type: 'category',
      label: 'Customer Relationship',
      items: ['docs/customerRelationship/accountStatement', 'docs/customerRelationship/billing','docs/customerRelationship/reporting','docs/customerRelationship/businessPortal'],
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
