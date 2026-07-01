// Branding and the policy document. Replace every [placeholder] before publishing.
export const APP_NAME = 'SPL Customers';
export const YEAR = 2026;
export const LAST_UPDATED = 'June 17, 2026';
export const HAS_LOGO = true;
export const MONOGRAM = 'SC';
export const HOME_HREF: string | null = '../landing_page/';

export type Block =
  | { kind: 'p'; text: string }
  | { kind: 'h'; text: string }
  | { kind: 'ul'; items: string[] };

export type Section = { id: string; title: string; blocks: Block[] };

export const sections: Section[] = [
  {
    id: 'introduction',
    title: 'Introduction',
    blocks: [
      { kind: 'p', text: 'Welcome to SPL Customers ("App").' },
      { kind: 'p', text: 'This Privacy Policy explains how we collect, use, disclose, and protect your information when you use our mobile application available on the Google Play Store and the Apple App Store.' },
      { kind: 'p', text: 'By using the App, you agree to the collection and use of information in accordance with this Privacy Policy.' },
    ],
  },
  {
    id: 'information-we-collect',
    title: 'Information We Collect',
    blocks: [
      { kind: 'p', text: 'We may collect the following categories of information:' },
      { kind: 'h', text: 'Personal Information' },
      { kind: 'p', text: 'Depending on the features you use, we may collect:' },
      {
        kind: 'ul', items: ['Full name', 'Phone number'
        ]
      },
      // 'Profile photo', 'Account credentials', 'Billing information'
      // { kind: 'h', text: 'Device Information' },
      // { kind: 'p', text: 'We may automatically collect:' },
      { kind: 'ul', items: ['Device type', 'Device model', 'Operating system', 'App version', 'Unique device identifiers', 'Mobile network information'] },
      { kind: 'h', text: 'Usage Information' },
      { kind: 'p', text: 'We may collect:' },
      // { kind: 'ul', items: ['App interactions', 'Features used', 'Session duration', 'Crash logs', 'Performance diagnostics'] },
      // { kind: 'h', text: 'Location Information' },
      // { kind: 'p', text: 'If you grant permission, we may collect:' },
      // { kind: 'ul', items: ['Precise location', 'Approximate location'] },
      // { kind: 'p', text: 'Location data is used only for:' },
      // { kind: 'ul', items: ['Location-based services', 'Delivery tracking', 'Nearby content recommendations'] },
    ],
  },
  {
    id: 'how-we-use',
    title: 'How We Use Your Information',
    blocks: [
      { kind: 'p', text: 'We use collected information to:' },
      { kind: 'ul', items: ['Provide and maintain the App', 'Create and manage accounts', 'Process transactions', 'Improve user experience'] },
    ],
  },
  // {
  //   id: 'permissions',
  //   title: 'Permissions Used by the App',
  //   blocks: [
  //     { kind: 'p', text: 'The App may request access to:' },
  //     { kind: 'h', text: 'Camera' },
  //     { kind: 'p', text: 'Used for:' },
  //     { kind: 'ul', items: ['Taking photos', 'Scanning QR codes', 'Uploading profile images'] },
  //     { kind: 'h', text: 'Photos and Media' },
  //     { kind: 'p', text: 'Used for:' },
  //     { kind: 'ul', items: ['Selecting and uploading files'] },
  //     { kind: 'h', text: 'Location' },
  //     { kind: 'p', text: 'Used for:' },
  //     { kind: 'ul', items: ['Showing nearby services', 'Delivery tracking', 'Location-based features'] },
  //     { kind: 'h', text: 'Microphone' },
  //     { kind: 'p', text: 'Used for:' },
  //     { kind: 'ul', items: ['Voice messages', 'Audio recording features'] },
  //     { kind: 'h', text: 'Notifications' },
  //     { kind: 'p', text: 'Used for:' },
  //     { kind: 'ul', items: ['Alerts', 'Updates', 'Marketing communications (where permitted)'] },
  //   ],
  // },
  // {
  //   id: 'third-party',
  //   title: 'Third-Party Services',
  //   blocks: [
  //     { kind: 'p', text: 'The App may use third-party services that collect information according to their own privacy policies.' },
  //     { kind: 'p', text: 'Examples include:' },
  //     { kind: 'ul', items: ['Google Firebase', 'Google Analytics for Firebase', 'Google Maps Platform', 'Apple App Store Services', 'Google Play Services', '[Other Services]'] },
  //   ],
  // },
  // {
  //   id: 'data-sharing',
  //   title: 'Data Sharing',
  //   blocks: [
  //     { kind: 'p', text: 'We do not sell personal information.' },
  //     { kind: 'p', text: 'We may share information with:' },
  //     { kind: 'ul', items: ['Service providers', 'Payment processors', 'Cloud hosting providers', 'Analytics providers', 'Legal authorities when required by law'] },
  //   ],
  // },
  {
    id: 'data-retention',
    title: 'Data Retention',
    blocks: [
      { kind: 'p', text: 'We retain personal information only as long as necessary to:' },
      { kind: 'ul', items: ['Provide services', 'Fulfill legal obligations', 'Resolve disputes', 'Enforce agreements'] },
      { kind: 'p', text: 'When no longer needed, information is securely deleted or anonymized.' },
    ],
  },
  {
    id: 'data-security',
    title: 'Data Security',
    blocks: [
      { kind: 'p', text: 'We implement appropriate technical and organizational measures to protect your information, including:' },
      { kind: 'ul', items: ['Encryption', 'Secure servers', 'Access controls', 'Monitoring and auditing'] },
      { kind: 'p', text: 'However, no method of transmission or storage is completely secure.' },
    ],
  },
  {
    id: 'childrens-privacy',
    title: "Children's Privacy",
    blocks: [
      { kind: 'p', text: 'The App is not intended for children under the age of 13 (or the applicable age in your jurisdiction).' },
      { kind: 'p', text: 'We do not knowingly collect personal information from children.' },
      { kind: 'p', text: 'If you believe a child has provided personal information, please contact us immediately.' },
    ],
  },
  {
    id: 'your-rights',
    title: 'Your Rights',
    blocks: [
      { kind: 'p', text: 'Depending on your location, you may have rights to:' },
      { kind: 'ul', items: ['Access your data', 'Correct inaccurate information', 'Delete your data', 'Restrict processing', 'Object to processing', 'Request data portability', 'Withdraw consent'] },
      { kind: 'p', text: 'To exercise these rights, contact us using the information below.' },
    ],
  },
  {
    id: 'account-deletion',
    title: 'Account Deletion',
    blocks: [
      { kind: 'p', text: 'Users may request deletion of their account and personal data by:' },
      {
        kind: 'ul', items: ['Using the in-app account deletion feature, or', 'Contacting us by email at [abdullah.sa.albadi@gmail.com]']
      },
      { kind: 'p', text: 'Deletion requests will be processed within [30] days unless legal retention obligations apply.' },
      { kind: 'p', text: 'Google Play and the Apple App Store may require a clear account deletion mechanism if users can create accounts.' },
    ],
  },
  {
    id: 'international-transfers',
    title: 'International Data Transfers',
    blocks: [
      { kind: 'p', text: 'Your information may be transferred to and processed in countries other than your country of residence.' },
      { kind: 'p', text: 'We take appropriate safeguards to protect transferred information.' },
    ],
  },
  {
    id: 'changes',
    title: 'Changes to This Privacy Policy',
    blocks: [
      { kind: 'p', text: 'We may update this Privacy Policy from time to time.' },
      { kind: 'p', text: 'Changes become effective when posted within the App or on our website.' },
      { kind: 'p', text: 'Users are encouraged to review this Privacy Policy periodically.' },
    ],
  },
  {
    id: 'contact',
    title: 'Contact Us',
    blocks: [
      { kind: 'p', text: 'If you have questions about this Privacy Policy, please contact:' },
      { kind: 'ul', items: ['Company Name: Save Point Co', 'Address: Saudi Arabia, Unizah', 'Email: abdullah.sa.albadi@gmail.com', 'Website: https://savepoints.sa/'] },
    ],
  },
  {
    id: 'google-play-checklist',
    title: 'Google Play Data Safety Disclosure Checklist',
    blocks: [
      { kind: 'p', text: 'When publishing to Google Play, document whether your app collects:' },
      { kind: 'ul', items: ['Name', 'Phone Number'] },
      { kind: 'p', text: 'Ensure that the answers in your Google Play Data Safety Form match this Privacy Policy exactly.' },
    ],
  },
  {
    id: 'apple-checklist',
    title: 'Apple App Privacy Nutrition Labels Checklist',
    blocks: [
      { kind: 'p', text: 'When publishing to the Apple App Store, document whether you collect:' },
      { kind: 'ul', items: ['Name', 'Phone Number'] },
      { kind: 'p', text: 'Ensure that your App Store Connect privacy labels match this Privacy Policy exactly.' },
    ],
  },
];
