// import axios, { AxiosError } from "axios";
import {members} from 'mockdata'

type ApiMethod = "GET" | "POST" | "PUT" | "DELETE";

export async function getData(
  url: string,
  method: ApiMethod = "GET",
): Promise<any> {

  try {
    const response = members;
    return response;
  } catch (error) {
    // if (error instanceof AxiosError) {
    //   const reasonCode: string = error.response?.data.reason;
    //   if (reasonCode === "UNAUTHORIZED") {
    //     localStorage.removeItem("token");
    //   }
    // }

    throw error;
  }
}
