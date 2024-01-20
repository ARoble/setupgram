import axios from "axios";

export async function uploadSetup(formData: FormData) {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_BASE_URL}api/setup`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress: (event) => {
        return Math.round(100 * event.loaded) / event.total!;
      },
    }
  );

  return res.data.setup;
}

export async function fetchSetups() {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}api/setup`);

  return res.data.setups;
}

export async function deleteSetup(id: string) {
  await axios.delete(`${process.env.NEXT_PUBLIC_BASE_URL}api/setup/${id}`);

  return;
}

export async function likeSetup(id: string) {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_BASE_URL}api/setup/like/${id}`
  );

  return res.data.like ? res.data.like : undefined;
}
