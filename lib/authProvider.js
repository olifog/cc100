export default class AuthenticationProvider {
  constructor ({ accessToken }) {
    this.accessToken = accessToken
  }

  async getAccessToken () {
    return this.accessToken
  }
}
