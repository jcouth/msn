const BASE = "";
import { data as users } from "./data/user";
import { data as tokens } from "./data/token";
import { data as families } from "./data/family";
import { data as favourites } from "./data/favourite";
import { data as friends } from "./data/friend";

const delay = async (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const validateToken = async ({ token }) => {
  await delay(1000);
  const isValid = false;
  console.log(`token: ${token}\napiToken: ${apiToken}`);
  return isValid;
};

export const signIn = async ({ username, password }) => {
  await delay(1000);

  const generateToken = async () => {
    await delay(2000);
    const token = "123";
    // salvar token
    return token;
  };

  const verify = (username, password) => {
    return users.filter(
      (data) => data.username === username && data.password === password
    );
  };

  const getData = (from, id) => {
    return from.filter((data) => data.id_user === id);
  };

  const getMoreInfo = (info) => {
    // const favs = getData(favourites, info.id)[0].favourites;
    // // friends.filter((data) => {
    // //   if (data.id_user1 === info.id) {
    // //     const { name, status, message } = users.filter(
    // //       (data2) => data2.id === data.id_user2
    // //     );
    // //     return { name, status, message }
    // //   }
    // // });
    // console.log(
    //   "info:\n",
    //   {
    //     ...info,
    //     favourites: getData(favourites, info.id)[0].favourites,
    //     families: getData(families, info.id)[0].families,
    //     friends: friends.filter((data) => {
    //       if (data.id_user1 === info.id) {
    //         const { name, status, message } = users.filter(
    //           (data2) => data2.id === data.id_user2
    //         );
    //         return { name, status, message };
    //       }
    //     }),
    //   },
    //   "\nfim"
    // );
    // // const favs =
    // // return { ...info, favourites: []};
  };

  let signed = false;
  let token = undefined;
  const info = verify(username, password)[0];
  if (info) {
    // getMoreInfo(info);
    // info = [...info, ...getMoreInfo()];
    signed = true;
    token = await generateToken();
  }
  return { signed, info, token };
};
