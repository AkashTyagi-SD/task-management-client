import { useCookies } from "react-cookie";

import { IS_LOGIN, DEFAULT_COKKIES_VALUE } from "global/global-constant";

const useAuth = () => {
  const [cookies, setCookie, removeCookie] = useCookies([IS_LOGIN]);

  const saveCookie = (value: string | boolean | object): void => {
    setCookie(IS_LOGIN, value, DEFAULT_COKKIES_VALUE);
  };

  return [cookies, saveCookie, removeCookie];
};

export default useAuth;
