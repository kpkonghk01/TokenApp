import { Authentication } from '@hk01-digital/auth01-js'

const {
  REACT_APP_AUTH01_DOMAIN,
  REACT_APP_AUTH01_CALLBACK,
  REACT_APP_AUTH01_CLIENT_ID,
  REACT_APP_AUTH01_AUDIENCE,
} = process.env

const auth01 = new Authentication({
  domain: REACT_APP_AUTH01_DOMAIN,
  redirectUri: REACT_APP_AUTH01_CALLBACK,
  clientId: REACT_APP_AUTH01_CLIENT_ID,
  scope: ['openid', 'profile', 'app_metadata'].join(' '),
  audience: REACT_APP_AUTH01_AUDIENCE,
})

export default auth01
