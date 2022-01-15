import axios from "axios";
import md5 from "js-md5";
const pubKey = "37b042b67441f668b16c16d48c5556dc";
const privateKey = "3db75d9d0688c6ad0dc84cdcd02dcd416a1ed300";
const timestamp = new Date().getTime();
const stringtoHash = timestamp + privateKey + pubKey;
const hash = md5(stringtoHash);

export default {
  searchCharacter: async function(character) {
    try {
      const response = await axios.get(
        "https://gateway.marvel.com:443/v1/public/characters?name=" +
          character +
          "&ts=" +
          timestamp +
          "&apikey=" +
          pubKey +
          "&hash=" +
          hash
      );
      return response;
    } catch (error) {
      console.log("error");
    }
  }
};
