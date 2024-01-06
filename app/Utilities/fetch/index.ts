import axios from "axios";

export async function uploadSetup(formData: FormData) {
  const res = await axios.post("http://localhost:3000/api/setup", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress: (event) => {
      return Math.round(100 * event.loaded) / event.total!;
    },
  });
  console.log(res);

  return;
}

export async function fetchSetups() {
  const res = await axios.get("http://localhost:3000/api/setup");

  return res.data.setups;
}
