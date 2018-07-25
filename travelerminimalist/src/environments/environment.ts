// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase:{
              apiKey: "AIzaSyB3MvqcJQoT2oGrHPC7B9g5o0AzKdRasq0",
              authDomain: "cms-database-8a5e4.firebaseapp.com",
              databaseURL: "https://cms-database-8a5e4.firebaseio.com",
              projectId: "cms-database-8a5e4",
              storageBucket: "cms-database-8a5e4.appspot.com",
              messagingSenderId: "569268536136"
            }

};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
