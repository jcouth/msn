const BASE = "https://compassomsn-default-rtdb.firebaseio.com";

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

  const getMoreInfo = (info) => {
    const getUserInfo = (id) => {
      const { name, status, message } = users.filter(
        (data) => data.id === id
      )[0];
      return { id, name, status, message };
    };

    const _favourites = [];
    favourites.filter((data) => {
      if (data.id_user === info.id) {
        data.favourites.forEach((data2) => {
          _favourites.push(getUserInfo(data2.id_user));
        });
      }
    });
    const _families = [];
    families.filter((data) => {
      if (data.id_user === info.id) {
        data.families.forEach((data2) => {
          _families.push(getUserInfo(data2.id_user));
        });
      }
    });
    const _friends = [];
    friends.filter((data) => {
      if (data.id_user === info.id) {
        data.friends.forEach((data2) => {
          _friends.push(getUserInfo(data2.id_user));
        });
      }
    });
    return {
      ...info,
      favourites: _favourites,
      families: _families,
      friends: _friends,
    };
  };

  let signed = false;
  let token = undefined;
  let info = verify(username, password)[0];
  if (info) {
    signed = true;
    info = getMoreInfo(info);
    token = await generateToken();
  }
  return { signed, info, token };
};

export default {
  checkToken: async () => {},
  signIn: async ({ email, password }) => {
    const sign = await verify(email, password); // chamada de api

    const _favourites = [];
    favourites.filter((data) => {
      if (data.id_user === sign.id) {
        data.favourites.forEach((data2) => {
          _favourites.push(getUserInfo(data2.id_user));
        });
      }
    });
    const _families = [];
    families.filter((data) => {
      if (data.id_user === sign.id) {
        data.families.forEach((data2) => {
          _families.push(getUserInfo(data2.id_user));
        });
      }
    });
    const _friends = [];
    friends.filter((data) => {
      if (data.id_user === sign.id) {
        data.friends.forEach((data2) => {
          _friends.push(getUserInfo(data2.id_user));
        });
      }
    });

    return {
      ...sign,
      favourites: _favourites,
      families: _families,
      friends: _friends,
    };
  },
  signUp: async () => {},
};
