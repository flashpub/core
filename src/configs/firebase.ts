import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

type Config = Parameters<typeof firebase.initializeApp>[0];
type FirebaseInit = ReturnType<firebase.app.App['firestore']>;

const buildConfig = (env: 'DEV' | 'TEST' | 'PROD'): Config => ({
  appId: process.env[`NEXT_PUBLIC_${env}_APP_ID`],
  apiKey: process.env[`NEXT_PUBLIC_${env}_API_KEY`],
  projectId: process.env[`NEXT_PUBLIC_${env}_PROJECT_ID`],
  authDomain: process.env[`NEXT_PUBLIC_${env}_AUTH_DOMAIN`],
  databaseURL: process.env[`NEXT_PUBLIC_${env}_DATABASE_URL`],
  storageBucket: process.env[`NEXT_PUBLIC_${env}_STORAGE_BUCKET`],
  messagingSenderId: process.env[`NEXT_PUBLIC_${env}_MESSAGING_SENDER_ID`],
});

class FirebaseConfig {
  protected init: FirebaseInit;
  public api: typeof firebase;

  constructor() {
    this.api = firebase;
    this.init = !firebase.apps.length
      ? firebase.initializeApp(buildConfig('TEST')).firestore()
      : firebase.app().firestore();
  }
}

export class FirebaseStorage extends FirebaseConfig {
  public db: FirebaseConfig['init'];
  public storage: typeof firebase.storage;

  constructor() {
    super();
    this.storage = firebase.storage;
    this.db = super.init;
  }
}

export class FirebaseAuth extends FirebaseConfig {
  public auth: typeof firebase.auth;

  constructor() {
    super();
    this.auth = firebase.auth;
  }
}

export class FirebaseFuego extends FirebaseConfig {
  public db: FirebaseConfig['init'];
  public auth: typeof firebase.auth;
  public storage: typeof firebase.storage;
  public functions: typeof firebase.functions;

  constructor() {
    super();
    this.db = super.init;
    this.auth = firebase.auth;
    this.storage = firebase.storage;
    this.functions = firebase.functions;
  }
}
