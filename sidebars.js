module.exports = {
  docsSidebar: [
    'docs/home',
	'docs/introduction',
    {
      type: 'category',
      label: 'Onboarding',
      items: ['docs/kyc/retail-customer', 'docs/kyc/identification', 'docs/kyc/encryption'],
    },
    {
      type: 'category',
      label: 'Accounts',
      items: ['docs/accounts/account-management', 'docs/accounts/unpaid-operations'],
    },
    {
      type: 'category',
      label: 'Cards',
      items: ['docs/cards/your-card', 'docs/cards/issuing', 'docs/cards/card-management','docs/cards/x-pay'],
    },
    {
      type: 'category',
      label: 'Payment',
      items: ['docs/payout/beneficiaries', 'docs/payout/IP', 'docs/payin/topup', 'docs/payout/card-payment' , 'docs/payin/sdd'],
    },
    {
      type: 'category',
      label: 'Xpollens and you',
      items: [ 'docs/customer-relationship/business-portal', 'docs/customer-relationship/monitoring', 'docs/customer-relationship/releaseNotes'],
    },
  ],
  apisSidebar: [
    'api/Core',
    {
      type: 'category',
      label: 'Cards',
      items: ['api/CardFactory','api/CardSecure','api/Xpay'],
    },
    {
      type: 'category',
      label: 'Users',
      items: ['api/KYC','api/Users','api/SCA'],
    },
	'api/SCTINST',
	'api/Compliance',
	'api/Webhooks',	
  ],
}
