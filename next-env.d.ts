/// <reference types="next" />
/// <reference types="next/types/global" />

type IStatus = {
  type: 'idle' | 'loading' | 'success' | 'error';
  msg?: Error | string;
};
type IState<T = unknown> = { data: T; status: IStatus };
type IUI = {
  theme: 'light' | 'dark';
  modal: {
    open: '' | 'access' | 'orcid';
  };
};
