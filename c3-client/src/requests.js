const BASE_URL = 'http://localhost:5000/api';

export const Github = {
  async getMembers() {
    try {
      const response = await fetch(`${BASE_URL}/github/members`, {
        credentials: 'include'
      });
      const json = await response.json();
      return json;
    } catch (error) {
      console.log(error);
    };
  }
}