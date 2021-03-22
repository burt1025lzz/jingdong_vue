import axios from "axios";

const instance = axios.create({
  baseURL: "https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd",
  timeout: 5000
});

instance.interceptors.request.use(
  config => {
    if (config.method === "post") {
      config.headers = {
        "Content-Type": "application/json"
      };
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  response => {
    return Promise.resolve(response.data);
  },
  error => {
    return Promise.reject(error);
  }
);

// export const get = (url, params = {}) => {
//   return new Promise((resolve, reject) => {
//     instance.get(url, { params }).then(
//       response => {
//         resolve(response.data);
//       },
//       err => {
//         reject(err);
//       }
//     );
//   });
// };
//
// export const post = (url, data = {}) => {
//   return new Promise((resolve, reject) => {
//     instance
//       .post(url, data, {
//         headers: {
//           "Content-Type": "application/json"
//         }
//       })
//       .then(
//         response => {
//           resolve(response.data);
//         },
//         err => {
//           reject(err);
//         }
//       );
//   });
// };

export default instance;
