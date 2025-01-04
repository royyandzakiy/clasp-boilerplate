# clasp-boilerplate

Here are the other files related and utilized in this project
- [spreadsheet example](https://docs.google.com/spreadsheets/d/1GrbSH2AoUBIbndqOf6yB3LvCTnx49-3tWq242SZxwdI/edit)
- [app script example](https://script.google.com/home/projects/1FghjX0N_4darjheBl-3ZlOVi-MXS4yJWHVKit_3hMPnUD42zI2taKUG_/edit)

### Motivation
This project is made to ease the start of creating a clasp project

### How it Works
- Google App Script
    - [`app-script`](https://developers.google.com/apps-script/reference/) SDK used as main library for development
    - [`@types/google-apps-script`](https://www.npmjs.com/package/@types/google-apps-script) used for autocompletion
- Clasp
    - [`clasp`](https://github.com/google/clasp) used to interact with the Google Apps Script environment
    - [`vitest`](https://vitest.dev/guide/) used as the main testing framework. Implement test modules in `test/module_name.test.js`
    - [`gas-local`](https://www.npmjs.com/package/gas-local) used for Google Apps Script test mocking and, and for accessing global functions. Read the [`Testing` section below](#testing-) for how to use `gas-local`

---

## How to Use ⚙️
### General preparation
1. install `npm` & `git`
2. install `clasp`

    `npm install -g @google/clasp`

3. git clone, cd
    ```bash
    git clone https://github.com/royyandzakiy/clasp-boilerplate.git
    cd clasp-boilerplate
    npm install
    ```

### App Script Project preparation
Insert an already created Apps-Script project

4. clasp login & activate App-Script API in settings ([details](https://developers.google.com/apps-script/api/how-tos/enable))
    ```bash
    clasp login
    ```

5. change `.clasp.json.change_this` filename to `.clasp.json`, fill in `scriptId` with your app scripts script ID from the App Script Project URL `https://script.google.com/u/1/home/projects/<this_is_the_script_id>`
    ```json
    {
        "scriptId": "your_projects_script_id",                      // change this
        "rootDir": "D:\\your\\clasp\\project\\folder\\location",    // change this
    }
    ```

    (alt) create a new project in App-Script
    - if not yet, create a new project in App-Script
    - open `https://script.google.com/home` then create "New Project"
    - autogenerate the `.clash.json` in the root project dir
    ```bash
    clasp clone "<appscript_url>" # ex: clasp clone "https://script.google.com/home/projects/1FghjX0N_4darjheBl-3ZlOVi-MXS4yJWHVKit_3hMPnUD42zI2taKUG_/edit"
    ```

### App Script files preparation
6. pull files, move files (after this, your Apps-Script project foldering will have `./src` in the filenames, don't worry, it doesn't change the behaviour)
    ```bash
    clasp pull
    mv *.js ./src
    ```

7. do edits, then push to App-Script console
    ```bash
    npm test    # to activate vitest test framework
    clasp push  # rewrite the app script in console
    ```

8. press run ▶️ in the Apps-Script console (don't forget to refresh the page beforehand!)

---

## Testing 🩺
### Preparing for testing
- The reason the need of `gas-local` used, is we cannot implement `module.export` in the `app-script` SDK (as how `node.js` projects are more usually structured)
- all modules developed in app script expected to be tested, needs to add the lines below
    ```javascript
    // src/module_name.js
    // ...

    // Make function available for Apps Script and `gas-local`
    if (typeof global !== 'undefined') {
        global.module_name_fn_1 = module_name_fn_1;
        global.module_name_fn_2 = module_name_fn_2;
    }
    ```

- testing modules need these lines to be implemented
    ```javascript
    // test/module_name.test.js
    var gas = require('gas-local')
    var glib = gas.require('./src');

    // ...

    describe('module_name', () => {
        it.todo('should return a string in the correct format', () => {
            glib.module_name_fn_1();
            expect(true).toBe(true);
        });

        // ...
    })
    ```

- to activate testing tools run
    ```bash
    npm test # or npm t
    ```

---

## How to Recreate this Boilerplate :baby_chick:
### Init Project
- init empty npm project
    ```bash
    npm init
    ```

- alternative:
    - init vite project (decide `js` or `ts`)
        ```bash
        npm init vite
        ```

    - delete unnecessary vite default files
        ```
        public/
        src/
            counter.js
            javascript.svg
            style.css
            main.ts
        index.html
        tsconfig.json
        ```

### App Script Project
- add google app-script autocomplete
    ```bash
    npm i -S @types/google-apps-script
    ```

    - alternative: to write in [typescript, refer to this doc guide](https://github.com/google/clasp/blob/master/docs/typescript.md)

- (refer to "alternative: Create new Apps-Script project")

- create `.claspignore` (copy everything from this [.claspignore](./.claspignore))

- clasp login & activate App-Script API in settings ([details](https://developers.google.com/apps-script/api/how-tos/enable))
    ```bash
    clasp login
    ```
- App Script Project Setup (refer to above section [#app-script-files-preparation](#app-script-files-preparation))

### Setup Git
- setup git repo
    ```bash
    git init
    git remote add origin "github_repository_url.git"
    ```

- create .gitignore (copy everything from this [.gitignore](./.gitignore))

### Testing Suite
- install vitest & gas-local to mock apps script libraries
    ```bash
    npm i -D vitest
    npm i -D gas-local --save
    ```

- modify `package.json`, add `test`
    ```
    {
        ...
        "test": "vitest",
        ...
    }
    ```

- create test suites in `./test`
    - format the filenames as `/test/module_name.test.js` for `/src/module_name.js`

---

Powered by App Script