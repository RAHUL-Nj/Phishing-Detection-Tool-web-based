function analyzeText() {
  const text = document.getElementById('textInput').value.toLowerCase();
  const url = document.getElementById('urlInput').value.toLowerCase();
  const phishingType = document.getElementById('phishingType').value;

  let phishingKeywords = [];

  // Define phishing keywords based on selected phishing type
  switch (phishingType) {
      case 'generic':
          phishingKeywords = ['password', 'verify', 'urgent', 'prize', 'account update'];
          break;
      case 'taxRefund':
          phishingKeywords = ['tax refund', 'claim your refund', 'tax return'];
          break;
      case 'suspiciousActivity':
          phishingKeywords = ['suspicious activity detected', 'action required', 'account compromised'];
          break;
      case 'socialMedia':
          phishingKeywords = ['social media account', 'unauthorized login attempt', 'verify your account'];
          break;
      case 'bogusPayment':
          phishingKeywords = ['payment confirmation', 'transaction details', 'payment receipt'];
          break;
      case 'incorrectBilling':
          phishingKeywords = ['incorrect billing information', 'update billing details', 'billing account'];
          break;
      case 'iCloud':
          phishingKeywords = ['icloud account', 'update your icloud', 'icloud security alert'];
          break;
      case 'hrSurvey':
          phishingKeywords = ['human resources survey', 'employee feedback', 'survey participation'];
          break;
      case 'googleDocs':
          phishingKeywords = ['google docs', 'view shared document', 'google drive'];
          break;
      case 'usps':
          phishingKeywords = ['usps delivery', 'package tracking', 'shipping details'];
          break;
      case 'voicemail':
          phishingKeywords = ['voicemail notification', 'missed call', 'listen to voicemail'];
          break;
      case 'bogusInvoice':
          phishingKeywords = ['invoice details', 'view invoice', 'payment invoice'];
          break;
      case 'emailUpgrade':
          phishingKeywords = ['email account upgrade', 'email settings update', 'upgrade your email'];
          break;
      case 'dropbox':
          phishingKeywords = ['dropbox', 'view shared file', 'dropbox account'];
          break;
      case 'ceoPhishing':
          phishingKeywords = ['ceo email', 'urgent message from ceo', 'ceo authorization'];
          break;
      case 'costco':
          phishingKeywords = ['costco', 'costco membership', 'costco rewards'];
          break;
      case 'bank':
          phishingKeywords = ['bank account', 'unusual activity', 'account login'];
          break;
      case 'fakeApp':
          phishingKeywords = ['app purchase', 'app subscription', 'confirm your purchase'];
          break;
      case 'advancedFee':
          phishingKeywords = ['advance fee', 'processing fee', 'fee payment'];
          break;
      case 'accountSuspension':
          phishingKeywords = ['account suspension', 'suspend your account', 'account deactivation'];
          break;
      default:
          phishingKeywords = [];
          break;
  }

  // Check for suspicious URLs
  const urlPattern = /(http|https):\/\/[^\s/$.?#].[^\s]*/g;
  const containsSuspiciousUrl = url.match(urlPattern);

  // Check for phishing keywords
  const containsPhishingKeywords = phishingKeywords.some(keyword => text.includes(keyword));

  const resultElement = document.getElementById('result');
  if (containsPhishingKeywords || containsSuspiciousUrl) {
      resultElement.innerText = 'This input contains potential phishing elements.';
  } else {
      resultElement.innerText = 'No phishing-related elements detected.';
  }
}
