module.exports = {
  docsSidebar: [
    'docs/home',
	'docs/introduction',
    {
      type: 'category',
      label: 'Onboarding',
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
      items: ['docs/cards/your-card', 'docs/cards/issuing', 'docs/cards/card-management','docs/cards/x-pay'],
    },
    {
      type: 'category',
      label: 'Pay IN',
      items: ['docs/payin/general', 'docs/payin/sdd', 'docs/payin/topup'],
    },
    {
      type: 'category',
      label: 'Pay OUT',
      items: ['docs/payout/beneficiaries', 'docs/payout/sct', 'docs/payout/IP', 'docs/payout/card-payment'],
    },
    {
      type: 'category',
      label: 'Xpollens and you',
      items: ['docs/customer-relationship/billing', 'docs/customer-relationship/reporting', 'docs/customer-relationship/business-portal'],
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
