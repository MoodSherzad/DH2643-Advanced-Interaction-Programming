import axios from "axios";

export const getAPI = () => {
  const port = process.env.PORT;
  const address = process.env.ADDRESS;
  console.log(`Frontend. ADDRESS: ${address}, PORT: ${port}`);
  console.log(`Mode: ${process.env.NODE_ENV}`);
  return axios
    .get(`${address}:${port}/getsomedata`, {
      withCredentials: true,
    })
    .then(({ data }: { data: { someData: string } }) => data.someData);
};
