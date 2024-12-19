class TokenService {
  getLocalRefreshToken() {
    const credentials = JSON.parse(localStorage.getItem("credentials") ?? '{}')
    return credentials.refresh_token
  }


  getLocalAccessToken() {
    const credentials = JSON.parse(localStorage.getItem("credentials") ?? '{}');
    return credentials.access_token;
  }

  async setTokens(data) {
    if (data.access_token && data.refresh_token) {
      let credentials = this.getCredentials();
      if (!credentials) {
        localStorage.setItem("credentials", JSON.stringify(data));
      } else {
        credentials.access_token = data.access_token;
        credentials.refresh_token = data.refresh_token;
        localStorage.setItem("credentials", JSON.stringify(credentials));
      }
      return true
    } else {
      return false
    }
  }

  async getTokens() {
    const credentials = JSON.parse(localStorage.getItem("credentials") ?? '{}')
    if(credentials.access_token && credentials.refresh_token)
      return credentials
    return credentials
  }

  getCredentials() {
    const credentials = JSON.parse(localStorage.getItem("credentials") ?? '{}')
    if (credentials.access_token && credentials.refresh_token)
      return credentials
    else {
      return null
    }
  }

  async removeCredentials() {
    localStorage.removeItem("credentials");
  }


  async deleteAuth() {
    await this.removeCredentials()
    window.location.href = '/'
    window.location.reload()
    // location.reload()
  }

  isAuthenticated() {
    const credentials = this.getCredentials()
    if (credentials) return true
    else return false
  }
}

export default new TokenService();
