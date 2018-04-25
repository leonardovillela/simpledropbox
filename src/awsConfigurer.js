import Amplify from 'aws-amplify';

const oauth = {
  domain : 'villela.auth.us-east-2.amazoncognito.com',
  scope : ['email', 'profile', 'openid','aws.cognito.signin.user.admin'],
  redirectSignIn : 'https://zen-cray-e951a5.netlify.com/home',
  redirectSignOut : 'https://zen-cray-e951a5.netlify.com/logout',
  clientId: process.env.WEBCLIENT_IDENTITY_POOL_ID_AMZ,
  responseType: 'code',
  options: {
    AdvancedSecurityDataCollectionFlag : true
  },
};

Amplify.configure({
  Auth: {
    oauth,
    identityPoolId: process.env.IDENTITY_POOL_ID_AMZ,
    region: process.env.REGION_AMZ,
    userPoolWebClientId: process.env.WEBCLIENT_IDENTITY_POOL_ID_AMZ,
    mandatorySignIn: true,
    cookieStorage: {
      domain: process.env.DOMAIN,
      path: '/',
      expires: 365,
      secure: true
    },
  },
});
