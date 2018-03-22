# apps-boilerplate
A foundation to get you started developing React DeskPro Apps with the best developer experience

## Contents
- [Packaging](#packaging)
- [Running tests](#running-tests)
- [Online guides and documentation](https://deskpro.gitbooks.io/deskpro-apps/)

 
To start making changes, open the following file in  your favourite editor.
 
    src/main/javascript/App.jsx
    
While the development server is on,  any change will cause the application to be reloaded in the Deskpro window, giving 
you a nice live preview.

## Packaging

Once you are satisfied with your application, you will probably want to install it on your production or test installation of [DeskPRO](https://www.deskpro.com).
To do that, you must package your application files in a distribution package that can be understood by [DeskPRO](https://www.deskpro.com) when it will install your application,

To package the application, in your project folder run:    
    
    npm run package

This will create a `dist` folder inside your project folder which contains all the unpacked and compiled assets
and a zip file named `app.zip`. This `app.zip` file is the one required to install your application via the DeskPro admin interface.

## Running tests

This boilerplate uses `jest` via `@deskpro/apps-dpat`. No configuration is necessary, just run `npm run test`

