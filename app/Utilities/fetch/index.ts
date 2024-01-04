import axios from "axios";

export async function uploadSetup(formData: HTMLFormElement) {
  const res = await axios.post("http://localhost:3000/api/setup", formData);
  console.log(res);

  return { message: "hi" };
}
