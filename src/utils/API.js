import axios from "axios";

export default {
  search: function () {
    return axios.get("https://randomuser.me/api/?results=200&nat=US&inc=name,email,login,phone,picture&seed=5307b707d5292a35");
  },
};
