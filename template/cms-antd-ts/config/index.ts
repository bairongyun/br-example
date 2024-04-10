import * as ACCESS from "./access";
import apis from "./apis";

const config = {
  user: {
    path: "/login",
    apis: {},
    appId: -1,
  },
  error: {
    appId: -1,
    path: "/error",
  },
  index: {
    appId: -1,
    path: "/page/index",
  },
};

export default config;
