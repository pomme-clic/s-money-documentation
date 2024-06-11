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
      items: [ 'docs/customer-relationship/business-portal', 'docs/customer-relationship/monitoring', 'docs/customer-relationship/releaseNotes', 'docs/customer-relationship/configuration', 'usecases/CustomPage'],
    },
  ],
  apisSidebar: [
    'api/Core',
    {
      type: 'category',
      label: 'Accounts',
      items: ['api/Accounts','api/AccountsOperations', 'api/AccountStatements'],
    },   
    {
      type: 'category',
      label: 'Cards',
      items: ['api/CardFactory','api/CardOperations','api/CardSecure','api/Xpay'],
    },
    {
      type: 'category',
      label: 'Users',
      items: ['api/KYC','api/Users'],
    },
    {
      type: 'category',
      label: 'SEPA transfers',
      items: ['api/TransferBeneficiary', 'api/SCTINST', 'api/TransferSCT', 'api/TransferSDD'],
    },
    {
      type: 'category',
      label: 'Internal transfers',
      items: ['api/TransferInternal'],
    },
  'api/Topup',
	'api/Compliance',
    {
      type: 'category',
      label: 'Callback management',
      items: ['api/Callback','api/Callbacks','api/Webhooks'],
    },
  ],
  usecasesSidebar: [
    'usecases/Introduction',
   {
      type: 'category',
      label: 'User Onboarding',
      items: [
        //'usecases/users/kyc/kyc',
        //'usecases/users/kyc/kyc_workflow',
        //'usecases/users/kyc/kyc_api',
        //'usecases/users/kyc/kyc_webview',
        //'usecases/users/kyc/kyc_additional',
        //'usecases/users/kyc/kyc_how_to_test'
        'usecases/users/onboarding/user_onboarding',        
        'usecases/users/onboarding/kyc/netheos',
        'usecases/users/onboarding/kyctest/netheos_test',
        'usecases/users/onboarding/fatca/fatca',
        'usecases/users/onboarding/filtering/filtering',
        'usecases/users/onboarding/sca/sca',
        'usecases/users/onboarding/cgu/cgu'
      ]
    },
    {
        type: 'category',
        label: 'Cards Management',
        items: [
            'usecases/cards/issuing/CardsIssuing', 
            'usecases/cards/selfcare/physical', 
            'usecases/cards/selfcare/virtual'
        ]
    },
    {
        type: 'category',
        label: 'SEPA Transfers',
        items: [
            'usecases/sepa_transfers/instant_payment'
        ]
    },    
    'usecases/webhooks/webhooks',
    'usecases/ratelimits/ratelimits',
    {
        type: 'category',
        label: 'Top Up',
        items: [
            'usecases/topups/topups']
    },
    {
      type: 'category',
      label: 'X-Pay',
      items: [
        'usecases/xpay/X-Pay',
        'usecases/xpay/iOS_SDK'
      ]
    }
  ]
}
