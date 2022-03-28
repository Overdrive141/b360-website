import axios from "axios";
import customAxios from "config/axios";

export const usePostData = async ({ URL, body }) => {
  console.log(`URL , body`, URL, body);

  let axiosRequester = axios;
  if (body.type && body.type === "regBiz") {
    axiosRequester = customAxios;
  }

  const resp = await axiosRequester({
    method: "POST",
    data: body,
    // body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    url: URL,
  });
  // console.log(resp);
  return resp;
};
