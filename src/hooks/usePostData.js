import customAxios from "config/axios";

export const usePostData = async ({ URL, body }) => {
  console.log(`URL , body`, URL, body);
  const resp = await customAxios({
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
