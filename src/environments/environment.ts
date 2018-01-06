// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyAJKdeyj_W1RyXXIz_NF_kG27WybTzK3NY',
    authDomain: 'zeroapp-bb183.firebaseapp.com',
    databaseURL: 'https://zeroapp-bb183.firebaseio.com',
    projectId: 'zeroapp-bb183',
    storageBucket: 'zeroapp-bb183.appspot.com',
    messagingSenderId: '972899976121'
  },
  REST_API_URL: 'http://localhost:8080/'
};
