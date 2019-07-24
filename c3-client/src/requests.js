export const Github = {
  async getMembers() {
    try {
      const response = await fetch(`https://jwb4zsu9m2.execute-api.us-east-1.amazonaws.com/dev/members`, {
        //credentials: 'include' // This is not necessary for serverless in a simple requests i.e. GET
      });
      const json = await response.json();
      return json;
    } catch (error) {
      console.log(error);
    };
  }
}