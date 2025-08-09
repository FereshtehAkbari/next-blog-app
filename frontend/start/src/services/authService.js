import http from "./httpServices";

export async function signupApi(data) {
  return http.post("/user/signup", data);
}
export async function signinApi(data) {
  return http.post("/user/signin", data);
}
