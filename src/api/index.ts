import axios from "axios";
import { Plan } from "../types";

export const getPlans = (): Promise<Plan[]> =>
  axios.get(
    "https://wnk07eo5oc.execute-api.eu-central-1.amazonaws.com/dev/v1/plans"
  );
