import { LazyExoticComponent, ReactNode } from "react";
import { Pathname } from "history";

import {
  FETCH_STATIC_LABELS,
  FETCH_STATIC_LABELS_FAILURE,
  FETCH_STATIC_LABELS_SUCCESS,
} from "./global-constant";

export interface AxiosConfig {
  baseURL: string;
  timeout: number;
  headers: object;
}

export interface Routes {
  path: Pathname;
  element: ReactNode | LazyExoticComponent<any>;
  isProtectedRoute: boolean;
}

export interface PublicRoute extends Routes {
  children: Routes;
}

//Action
export interface FetchStaticLabels {
  type: typeof FETCH_STATIC_LABELS;
  payload: FetchLabelPayload;
}

export interface FetchStaticLabelsResponse {
  type: typeof FETCH_STATIC_LABELS_SUCCESS | typeof FETCH_STATIC_LABELS_FAILURE;
  data?: object;
  error?: object;
}

export type GlobalActionType = FetchStaticLabels | FetchStaticLabelsResponse;

//Action

export interface StateToProps {
  staticLabel: StaticLabels;
}

export interface DispatchToProps {
  fetchStaticLabels: (payload: FetchLabelPayload) => void;
}

export interface AppState extends StaticLabels {}

export interface LoginLabel {
  emailLabel: string;
  emailPlaceholder: string;
  passwordLabel: string;
  emailFormate: string;
  emailRequired: string;
  passwordPlaceholder: string;
  passwordRequired: string;
  loginTitle: string;
  rememberCheckbox: string;
  forgotpasswordText: string;
  buttonLabel: string;
  noAlreadyAccountText: string;
  signupSwitchLabel: string;
}

export interface RegistrationLabel {
  nameLabel: string;
  nameRequired: string;
  emailPlaceholder: string;
  emailRequired: string;
  emailFormate: string;
  createPasswordLabel: string;
  passwordRequired: string;
  confirmPasswordLabel: string;
  confirmPasswordRequired: string;
  confirmPasswordMismatch: string;
  buttonLabel: string;
  alreadyAccountText: string;
  loginSwitchLabel: string;
  registrationTitle: string;
}

export interface ForgotPasswordLabel {
  createPasswordLabel: string;
  passwordRequired: string;
  confirmPasswordLabel: string;
  confirmPasswordRequired: string;
  confirmPasswordMismatch: string;
  buttonLabel: string;
  alreadyAccountText: string;
  loginSwitchLabel: string;
  forgotPasswordTitle: string;
}

export interface PublicHeaderLabel {
  noAlreadyAccountText: string;
  alreadyAccountText: string;
  loginSwitchLabel: string;
  signupSwitchLabel: string;
}

export interface FetchLabelPayload {
  filePath: string;
  fileType: string;
}

export type StaticLabels = {
  isLoading?: boolean;
  labels: Labels;
};

export type GlobalState = {
  isLoading: boolean;
  labels?: Labels;
};

export type Props = AppState & DispatchToProps;

export interface Labels {
  loginLabel: LoginLabel;
  publicHeader: PublicHeaderLabel;
  userRegistration: RegistrationLabel;
  forgotPassword: ForgotPasswordLabel;
}
