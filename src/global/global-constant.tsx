//Action
export const FETCH_STATIC_LABELS = "@@ECO/FETCH_STATIC_LABELS";
export const FETCH_STATIC_LABELS_SUCCESS = "@@ECO/FETCH_STATIC_LABELS_SUCCESS";
export const FETCH_STATIC_LABELS_FAILURE = "@@ECO/FETCH_STATIC_LABELS_FAILURE";
export const LOADING = "@@LOADING";
//Action

// Routes
export const ROUTE_NO_MATCH = "/*";
export const ROUTE_DEFAULT = "/";
export const ROUTE_SIGNIN = "/sign-in";
export const ROUTE_SIGNUP = "/sign-up";
export const ROUTE_FORGOT_PASSWORD = "/forgot-password";
export const ROUTE_FILE_UPLOAD = "/file-upload";
export const ROUTE_APP = "/";
export const ROUTE_DASHBOARD = `${ROUTE_APP}dashboard`;
export const ROUTE_USERS = `${ROUTE_APP}users`;
export const ROUTE_TASKS = `${ROUTE_APP}tasks`;
// Routes

export const IS_LOGIN: string = "login";

export const DEFAULT_COKKIES_VALUE = {
  path: "/",
  maxAge: 3600,
};

export const BASE_URL = `${process.env.REACT_APP_BASE_URL}`;
export const LABEL_PATH = "../../public/static-label.json";
export const LABEL_TYPE = "JSON";
