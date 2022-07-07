module.exports = {
  docsSidebar: [
    'docs/home',
	'docs/introduction',
    {
      type: 'category',
      label: 'Onboarding',
      items: ['docs/kyc/retail-customer', 'docs/kyc/identification', 'docs/kyc/encryption','docs/kyc/conformity'],
    },
    {
      type: 'category',
      label: 'Accounts',
      items: ['docs/accounts/account-management', 'docs/accounts/debts', 'docs/accounts/virtualiban'],
    },
    {
      type: 'category',
      label: 'Cards',
      items: ['docs/cards/your-card', 'docs/cards/issuing', 'docs/cards/card-management','docs/cards/x-pay'],
    },
    {
      type: 'category',
      label: 'Payments',
      items: ['docs/payments/beneficiaries', 'docs/payments/IP', 'docs/payments/card-payment', 'docs/payments/sdd', 'docs/payments/P2P'],
    },
    {
      type: 'category',
      label: 'Xpollens and you',
      items: [ 'docs/customer-relationship/business-portal', 'docs/customer-relationship/monitoring', 'docs/customer-relationship/releaseNotes'],
    },
  ],
  apisSidebar: [
    'api/Core',
	'api/Accounts',
    {
      type: 'category',
      label: 'Cards',
      items: ['api/CardFactory','api/CardSecure','api/Xpay'],
    },
    {
      type: 'category',
      label: 'Users',
      items: ['api/KYC','api/Users'],
    },
    {
      type: 'category',
      label: 'SEPA transfers and P2P',
      items: ['api/SCTINST','api/SDD'],
    },
	'api/Compliance',
    {
      type: 'category',
      label: 'Callback management',
      items: ['api/Callback','api/Callbacks','api/Webhooks'],
    },
  ],
}
