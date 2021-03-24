import { proxy, useSnapshot } from 'valtio';
import { devtools } from 'valtio/utils';

const stateStatus = <T = unknown>(data: T): IState<T> => ({
  data,
  status: { type: 'idle' },
});

const uiState = stateStatus<IUI>({
  theme: 'light',
  modal: { open: '' },
});

const store = {
  ui: proxy(uiState),
};
devtools(proxy(store), 'store');

type S = typeof store;
type UI = (data: S['ui']['data']) => void;

const operator = {
  get: store as S,
  set: {
    status: (key: keyof S, type: IStatus['type'], msg?: IStatus['msg']) => {
      store[key].status = { type, msg };
    },
    ui: (update: UI) => update(store.ui.data),
  },

  use: useSnapshot,
};

export default operator;
