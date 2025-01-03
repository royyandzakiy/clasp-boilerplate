# clasp-boilerplate

- [clasp-spreadsheet-example - spreadsheet](https://docs.google.com/spreadsheets/d/1GrbSH2AoUBIbndqOf6yB3LvCTnx49-3tWq242SZxwdI/edit)
- [clasp-spreadsheet-example - app script](https://script.google.com/home/projects/1FghjX0N_4darjheBl-3ZlOVi-MXS4yJWHVKit_3hMPnUD42zI2taKUG_/edit)

### Motivation
\<TBD\>

### How it Works
\<TBD\>

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
5. change `.clasp.json.change_this` filename to `.clasp.json`, fill in `scriptId` from your app scripts script ID `https://script.google.com/u/1/home/projects/<this_is_the_script_id>`
    ```
    {
        ...
        "scriptId": "your_projects_script_id",
        "rootDir": "D:\\your\\clasp\\project\\folder\\location",
        ...
    }
    ```

#### alternative: Create new Apps-Script project
5. (alt) create a project in app-script
    - open `https://script.google.com/home` then create "New Project"
    - open the apps-script project URL
    - clasp project clone (will autogenerate `.clash.json`)
    ```bash
    clasp clone "appscript_url" # or clasp clone "https://script.google.com/home/projects/1FghjX0N_4darjheBl-3ZlOVi-MXS4yJWHVKit_3hMPnUD42zI2taKUG_/edit"
    ```

### Code on!
6. pull files, move files
    ```bash
    clasp pull
    mv *.js ./src
    ```

7. do edits, then push
    ```bash
    npm push # git push && clasp push
    ```

8. after this, your Apps-Script project foldering will adopt using the `./src`
9. run the code in the Apps-Script console (refresh page!)

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
    ```bash
    // package.json
    ...
    "test": "vitest",
    "push": "git push && clasp push",
    ...
    ```

- install gas-local to mock apps script libraries
    ```bash
    npm install gas-local --save
    ```

- create test suites in `./test`
    - format the filenames as `Class.test.js`

---

Powered by App Script