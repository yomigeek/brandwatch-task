const BASE_URL =
  process.env.REACT_APP_BASE_URL ||
  "https://res.cloudinary.com/kugoo/raw/upload/v1645477395/upload/topics.json";

export const getAllTopicsApi = () => {
  return new Promise((resolve, reject) => {
    fetch(BASE_URL)
      .then((data) => {
        if (data?.status !== 200) {
          reject("Error");
        } else {
          const response = data.json();
          resolve(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};
