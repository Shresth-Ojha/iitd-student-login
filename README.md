# IITD Student Login - Shresth Ojha

Browser Extension for IITD student services auto-login.

## Usage

1. Clone this repo OR download & extract the zip file.
2. Go to the directory `iitd-student-login`.
```JavaScript
cd iitd-student-login
```
3. In the `src/content.js` file, enter your Kerberos ID and password (Don't worry, it's safe provided you don't share it yourself.).
4. Install dependencies.
```JavaScript
npm install
```
5. Build the project. A `dist` folder will be created in the directory.
```JavaScript
npm run build
```
6. Open chrome/brave and go to chrome://extensions/ and the enable developer mode.
7. Click on `load unpacked` and select the dist folder that we just created.

Now whenever you access an IITD Student service, it will automatically log you in or fill the login form (Captcha Solver coming up..)
