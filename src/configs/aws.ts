

export const CognitoAuthConfig = {
  identityPoolId: 'us-east-1:e2979e7b-bde8-4135-90d2-c5d0e35d851c',
  region: 'us-east-1',
  userPoolId: 'us-east-1_OxVxWuEUx',
  userPoolWebClientId: '23fudo3h3guh5ajm4scldp0r72',
  mandatorySignIn: true,
  oauth: {
    domain: 'pro-toolbox-auth.auth.us-east-1.amazoncognito.com',
    scope: ['openid', 'email', 'profile','aws.cognito.signin.user.admin'],
    redirectSignIn: 'http://localhost:4000/callback/cognito',
    redirectSignOut: 'http://localhost:4000/logout',
    responseType:"code",
  }
}

export const CognitoIdentityProvider = "WLOktaOpenId";