# clasp-spreadsheet-boilerplate

- [clasp-spreadsheet-example - spreadsheet](https://docs.google.com/spreadsheets/d/1GrbSH2AoUBIbndqOf6yB3LvCTnx49-3tWq242SZxwdI/edit)
- [clasp-spreadsheet-example - app script](https://script.google.com/home/projects/1FghjX0N_4darjheBl-3ZlOVi-MXS4yJWHVKit_3hMPnUD42zI2taKUG_/edit)

### Motivation
This project is made to ease the start of creating a clasp project

### How it Works
<TBD\>

### Pending Bug Fixes 🪲
<TBD\>

### Future Developments 🌱
<TBD\>

---

## How to Use
1. install npm & git
2. install clasp

    `npm install -g @google/clasp`

3. git clone, cd
    ```bash
    git clone https://github.com/royyandzakiy/clasp-spreadsheet-boilerplate.git
    cd clasp-spreadsheet-boilerplate
    npm install
    ```

4. clasp login & activate app-script API in settings
    ```bash
    clasp login
    ```


### Inject already created Apps-Script project
5. change `.clasp.json.change_this` filename to `.clasp.json`, fill in `scriptId` with your app scripts script ID from the App Script Project URL `https://script.google.com/u/1/home/projects/<this_is_the_script_id>`
    ```json
    {
        "scriptId": "your_projects_script_id",                      // change this
        "rootDir": "D:\\your\\clasp\\project\\folder\\location",    // change this
    }
    ```

5. (alt) create a project in app-script
    - if not yet, create a project in app-script
    - open `https://script.google.com/home` then create "New Project"
    - clasp project clone (will autogenerate `.clash.json`)
    ```bash
    clasp clone "appscript_url" # ex: clasp clone "https://script.google.com/home/projects/1FghjX0N_4darjheBl-3ZlOVi-MXS4yJWHVKit_3hMPnUD42zI2taKUG_/edit"
    ```

### Code on!
6. pull files, move files
    ```bash
    clasp pull
    mv *.js ./src # after this, your Apps-Script project foldering will have `./src` in the filenames, don't worry, it doesn't change the behaviour
    ```

7. do edits, then push to App Script Console
    ```bash
    npm test    # to activate vitest test framework
    clasp push  # rewrite the app script in console
    ```

8. press run ▶️ in the Apps-Script console (don't forget to refresh the page beforehand!)

---

9. (bonus) for all modules developed in app script expected to be tested, you must add the line below
    ```javascript
    // src/module_name.js
    // ...

    // Make function available for Apps Script and `gas-local`
    if (typeof global !== 'undefined') {
        global.module_name_fn_1 = module_name_fn_1;
        global.module_name_fn_2 = module_name_fn_2;
    }
    ```

    for it to then be accessed using

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

---

## How to Recreate this Boilerplate
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
- create a project in app-script
    - open `https://script.google.com/home` then create "New Project"
    - open the project > Project Settings > copy script ID

- add google app-script autocomplete
    ```bash
    npm i -S @types/google-apps-script
    ```

    - alternative: to write in [typescript, refer to this doc guide](https://github.com/google/clasp/blob/master/docs/typescript.md)

- (refer to "alternative: Create new Apps-Script project")

- create `.claspignore` (copy everything from this [.claspignore](./.claspignore))

### Setup Git
- setup git repo
    ```bash
    git init
    git remote add origin "github_repository_url"
    ```

- create .gitignore (copy everything from this [.gitignore](./.gitignore))

### Testing Suite
- install vitest
    ```bash
    npm i -D vitest
    ```

- modify `package.json`, add `test`
    ```
    {
        ...
        "test": "vitest",
        ...
    }
    ```

- install gas-local to mock apps script libraries
    ```bash
    npm install gas-local --save
    ```

- create test suites in `./test`
    - format the filenames as `Class.test.js`

---

Powered by App Script