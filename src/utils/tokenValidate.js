export const decodeToken = (token) => {
  console.log(token)
  // let localData = JSON.parse(localStorage.getItem("resData"));

  // const { access_token } = localData;
  // console.log(access_token)
  try {
    const base64Url = token?.split(".")[1];
    const base64 = base64Url?.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
    const decoded = JSON.parse(jsonPayload);
    const currentTime = Math.floor(Date.now() / 1000);

    return decoded.exp > currentTime;
  } catch (error) {
    console.error("Invalid token format", error);
    return null;
  }
  // return JSON.parse(jsonPayload);
};
