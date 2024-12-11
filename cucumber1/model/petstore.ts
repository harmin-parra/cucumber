import assert from 'chai';
import axios from 'axios';


const headers = {
    'Content-Type': 'application/json',
    'accept': 'application/json'
};

class Petstore {

  async get(id, world) {
    await world.attach("GET https://petstore.swagger.io/v2/pet/" + id, "text/plain");
    return axios.get("https://petstore.swagger.io/v2/pet/" + id);
  }

  post(payload, world) {
    world.attach("POST https://petstore.swagger.io/v2/pet/", "text/plain");
    world.attach(JSON.stringify(payload), "application/json");
    return axios.post("https://petstore.swagger.io/v2/pet/", payload);
  }

  async delete(id, world) {
    await world.attach("DELETE https://petstore.swagger.io/v2/pet/" + id, "text/plain");
    return axios.delete("https://petstore.swagger.io/v2/pet/" + id);
  }

}

export default Petstore;
