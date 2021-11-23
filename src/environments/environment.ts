// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    name: 'default',
    firebase: {
        config: {
          apiKey: "AIzaSyDdHwep90wwPkaJiijRPv8cTSlDwP7uYPc",
          authDomain: "courseapp-8d747.firebaseapp.com",
          projectId: "courseapp-8d747",
          storageBucket: "courseapp-8d747.appspot.com",
          messagingSenderId: "326258671584",
          appId: "1:326258671584:web:4a89be339ac21074ad3585"
        }
    }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
