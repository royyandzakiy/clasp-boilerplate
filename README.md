# clasp-boilerplate

[clasp-spreadsheet-example - spreadsheet](https://docs.google.com/spreadsheets/d/1GrbSH2AoUBIbndqOf6yB3LvCTnx49-3tWq242SZxwdI/edit)
[clasp-spreadsheet-example - app script](https://script.google.com/home/projects/1FghjX0N_4darjheBl-3ZlOVi-MXS4yJWHVKit_3hMPnUD42zI2taKUG_/edit)

### Motivation
\<TBD\>

### How it Works
\<TBD\>

---

## How to Use
- install npm & git
- install clasp

    `npm install -g @google/clasp`

- git clone, cd
    ```bash
    git clone https://github.com/royyandzakiy/clasp-spreadsheet-boilerplate.git
    cd clasp-spreadsheet-boilerplate
    ```

- clasp login & activate app-sciprt API in settings
    ```bash
    clasp login
    ```

- clasp project clone, move files
    ```bash
    clasp clone <script_id>
    clasp pull
    mv *.js ./src
    ```

- do edits, then push
    ```bash
    npm push
    ```

- run the code in the Apps-Script console

---

## How to Recreate
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

- clone project
    ```bash
    clasp clone <script_id>
    clasp pull
    mv *.js ./src
    ```

- move all clasp project files into `./src`
- create `.claspignore` (copy everything from this [.claspignore](./.claspignore))

### Setup GIT
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

- modify `package.json`, add test
    ```bash
    // package.json
    ...
    "test": "vitest"
    ...
    ```

- install gas-local
    ```bash
    npm install gas-local --save
    ```

- create test suites in `./test`
    - format the filenames as `Class.test.js`

---

Powered by App Script