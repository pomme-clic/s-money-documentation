module.exports = {
  docsSidebar: [
    'docs/home',
	'docs/introduction',
    {
      type: 'category',
      label: 'Onboard new customers',
      items: ['docs/kyc/retail-customer', 'docs/kyc/identification', 'docs/kyc/business'],
    },
    {
      type: 'category',
      label: 'Accounts',
      items: ['docs/accounts/iban', 'docs/accounts/account-management', 'docs/accounts/unpaid-operations', 'docs/accounts/banking-mobility'],
    },
    {
      type: 'category',
      label: 'Cards',
      items: ['docs/cards/issuing', 'docs/cards/card-management','docs/cards/x-pay'],
    },
    {
      type: 'category',
      label: 'Pay IN',
      items: ['docs/payin/general', 'docs/payin/sdd', 'docs/payin/topup'],
    },
    {
      type: 'category',
      label: 'Pay OUT',
      items: ['docs/payout/sct', 'docs/payout/beneficiaries', 'docs/payout/card-payment'],
    },
    {
      type: 'category',
      label: 'Customer Management',
      items: ['docs/customer-relationship/account-statement', 'docs/customer-relationship/billing', 'docs/customer-relationship/reporting', 'docs/customer-relationship/business-portal'],
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
