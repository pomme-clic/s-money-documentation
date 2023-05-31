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
      items: [ 'docs/customer-relationship/business-portal', 'docs/customer-relationship/monitoring', 'docs/customer-relationship/releaseNotes', 'docs/customer-relationship/configuration'],
    },
  ],
  apisSidebar: [
    'api/Core',
	'api/Accounts',
    {
      type: 'category',
      label: 'Cards',
      items: ['api/CardFactory','api/CardFactory-old','api/CardSecure','api/Xpay'],
    },
    {
      type: 'category',
      label: 'Users',
      items: ['api/KYC','api/KYC-old','api/Users','api/Users-old'],
    },
    {
      type: 'category',
      label: 'SEPA transfers',
      items: ['api/TransferBankAccount', 'api/TransferBeneficiary', 'api/SCTINST', 'api/TransferSCT', 'api/TransferSDD'],
    },
    {
      type: 'category',
      label: 'Internal transfers',
      items: ['api/TransferP2p', 'api/TransferInternal'],
    },
	'api/Compliance',
    {
      type: 'category',
      label: 'Callback management',
      items: ['api/Callback','api/Callbacks','api/Webhooks'],
    },
  ],
  useCasesSidebar: [
    {
      type: 'category',
      label: 'X-Pay',
      items: [
        'use-cases/xpay/X-Pay',
        'use-cases/xpay/iOS_SDK',
      ]
    }
  ]
}