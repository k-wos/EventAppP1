import { User } from "../models/user";
import fetchData from "../utils/fetchData";

export async function getLoggedInUser(): Promise<User> {
  const response = await fetchData("/api/users", { method: "GET" });
  return response.json();
}

export interface SignUpCredentials {
  username: string;
  email: string;
  pasword: string;
}

export async function signUp(credentials: SignUpCredentials): Promise<User> {
  const response = await fetchData("/api/users/signUp", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
  return response.json();
}
