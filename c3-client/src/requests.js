export const Github = {
  async getMembers() {
    try {
      const response = await fetch(`https://9ek0by3c34.execute-api.us-east-1.amazonaws.com/dev/hello`, {
        //credentials: 'include' // This is not necessary for serverless in a simple requests i.e. GET
      });
      const json = await response.json();
      return json;
    } catch (error) {
      console.log(error);
    };
  }
}