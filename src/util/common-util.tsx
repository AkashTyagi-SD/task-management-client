import { isMobile } from 'react-device-detect';

export const checkIsMobile = (): boolean => {
  return isMobile;
};

export const checkUserSessionValidity = (req: any): boolean => {
  console.log('cooki', req.cookies);
  return false;
};
