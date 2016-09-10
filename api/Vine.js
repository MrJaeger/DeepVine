class VineApi {
  constructor() {
    this.baseUrl = 'https://api.vineapp.com'
  }

  searchUsers(query) {
    return fetch(`${this.baseUrl}/users/search/${query}`)
  }
}

module.exports = new VineApi()
