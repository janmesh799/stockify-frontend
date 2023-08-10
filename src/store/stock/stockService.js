import axios from "axios";
import { Host } from "../../constantVariables";
const API_URL = `${Host}/api/profile`;

//get profile by username
const predict = async (data) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        principle: data.principle,
        ExpectedDate: data.ExpectedDate,
        factor: data.factor,
      },
    };
    console.log(config);
    const response = await axios.get(API_URL, config);
    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
};

const stockService = {
  predict,
};

export default stockService;
