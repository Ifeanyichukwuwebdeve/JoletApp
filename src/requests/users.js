import axios from "axios"

export default {
  async getUser() {
    let res = await axios.get("http://localhost:3000/users");
    console.log(res.data);
  },
  async getUserSingle(userId) {
    let res = await axios.get("http://localhost:3000/users" + userId);
     console.log(res.data);
  }
}