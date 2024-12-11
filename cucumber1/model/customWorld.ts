import { World } from '@cucumber/cucumber';
import Petstore from "./petstore.js";

class CustomWorld extends World {

  id = 0;
  petstore = null;
  payload = null;
  response = null;

  constructor(options) {
    super(options)
    this.id = 543;
    this.petstore = new Petstore();
    this.payload = null;
    this.response = null;
  }

}

export default CustomWorld;