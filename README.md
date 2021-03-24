# FLASHPUB-CORE DOCS

---

## Menu:

| [1. configs](#1.-configs)<br>
|-- [1.1 firebase](#1.1-firebase)<br>
| [2. services](#2.-services)<br>
|-- [2.1 storage](#2.1.1-store)<br>
|---- [2.1.1 store](#2.1.1-store)<br>
|------ [store example](#store-example)<br>
|---- [2.1.2 remote](#2.1.3-remote)<br>

## 1. configs

`Configs API` is a module that holds various configurations used in this project.

### `1.1 import { FirebaseStorage, FirebaseAuth, FirebaseFuego, Project } from "@configs"`

...

## 2. services

`Services API` consists of application's internal services.

### `2.1 import { store, remote } from "@storage"`

`@storage` is a bundle of various modules that persist data

#### `2.1.1 store`

`store` is based on [valtio](https://github.com/pmndrs/valtio) state management plugin. Valtio is a proxy that listens to data changes and allows for both react and vanillaJS data operations.

##### `store.get` - returns `store` object with state properties

##### `store.set()` - allows for setting state using selectors

##### `store.use()` - hijacks valtio's `useSnapshot` hook - !!!use inside react components!!!

##### store example:

```typescript
import { proxy, useSnapshot } from 'valtio';

const stateOne = { one: null };
const stateTwo = { two: false };

const store = {
  one: proxy(stateOne),
  two: proxy(stateTwo),
};

const operator = {
  get: store,
  set: {
    status: (key, type, msg = undefined) => {
      store[key].status = { type, msg };
    },
    one: (update) => update(store.one.data),
    two: (update) => update(store.two.data),
  },
  use: useSnapshot,
};

export default operator;
```

#### `2.1.2 remote`

`remote` provides connection to external storages

##### `remote.firebase` - creates new instance of FirebaseStorage class

`FirebaseStorage` sets up firebase connection extending `FirebaseConfig` class and plugs into `firebase`'s internal APIs: `db` and `storage`.
