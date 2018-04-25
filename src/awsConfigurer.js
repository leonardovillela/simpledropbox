import Amplify from 'aws-amplify';

console.log(process.env.REACT_APP_WEBCLIENT_IDENTITY_POOL_ID_AMZ);

const oauth = {
  domain : 'villela.auth.us-east-2.amazoncognito.com',
  scope : ['email', 'profile', 'openid','aws.cognito.signin.user.admin'],
  redirectSignIn : 'https://zen-cray-e951a5.netlify.com/home',
  redirectSignOut : 'https://zen-cray-e951a5.netlify.com/logout',
  clientId: process.env.REACT_APP_WEBCLIENT_IDENTITY_POOL_ID_AMZ,
  responseType: 'code',
  options: {
    AdvancedSecurityDataCollectionFlag : true
  },
};

Amplify.configure({
  Auth: {
    oauth,
    identityPoolId: process.env.REACT_APP_IDENTITY_POOL_ID_AMZ,
    region: process.env.REACT_APP_REGION_AMZ,
    userPoolWebClientId: process.env.REACT_APP_WEBCLIENT_IDENTITY_POOL_ID_AMZ,
    mandatorySignIn: true,
    cookieStorage: {
      domain: process.env.REACT_APP_DOMAIN,
      path: '/',
      expires: 365,
      secure: true
    },
  },
});
