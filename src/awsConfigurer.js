import Amplify from 'aws-amplify';

const oauth = {
  domain : 'villela.auth.us-east-2.amazoncognito.com',
  scope : ['email', 'profile', 'openid','aws.cognito.signin.user.admin'],
  redirectSignIn : 'https://zen-cray-e951a5.netlify.com/home',
  redirectSignOut : 'https://zen-cray-e951a5.netlify.com/logout',
  responseType: 'code',
  options: {
    AdvancedSecurityDataCollectionFlag : true
  },
};

Amplify.configure({ Auth: { oauth } });
