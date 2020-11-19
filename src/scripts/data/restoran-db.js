import API_ENDPOINT from '../globals/api-endpoint';

class RestoranDb {
  static async listRestoran() {
   try {
    const response = await fetch(API_ENDPOINT.HOME);
    const responseJson = await response.json();
    return responseJson;
   } catch (error) {
     return error.response;
   }
  }

  static async detailRestoran(id) {
   try {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
   } catch (error) {
     return error.response;
   }
  }
  
}

export default RestoranDb;
