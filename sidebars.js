module.exports = {
  docsSidebar: [
    'docs/home',
    'docs/Introduction.md',
    {
      type: 'category',
      label: 'Onboard new customers',
      items: ['docs/kyc/retail-customer', 'docs/kyc/identification', 'docs/kyc/business'],
    },
    {
      type: 'category',
      label: 'Accounts',
      items: ['docs/account/IBAN', 'docs/account/Account-Management','docs/account/Banking-Mobility','docs/account/Unpaid-Operations'],
    },
    {
      type: 'category',
      label: 'Cards',
      items: ['docs/cards/Issuing', 'docs/cards/Card-Management','docs/cards/X-Pay'],
    },
    {
      type: 'category',
      label: 'Pay IN',
      items: ['docs/PayIN/General', 'docs/cards/SDD','docs/cards/TopUp'],
    },
    {
      type: 'category',
      label: 'Pay OUT',
      items: ['docs/PayOUT/SCT', 'docs/cards/Beneficiaries','docs/cards/Card-Payment'],
    },
    {
      type: 'category',
      label: 'Customer Relationship',
      items: ['docs/CustomerRelationship/Account-Statement', 'docs/CustomerRelationship/Billing','docs/CustomerRelationship/Reporting','docs/CustomerRelationship/Business-Portal'],
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
