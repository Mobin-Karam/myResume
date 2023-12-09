# How create nextjs Project :

1. - Write this in Terminal :

```
npx create-next-app@latest [YOUR_FOLDER_LOCATION] or ./ [THAT_FOLDER]
```

2. - change direction in terminal to your file with :

```
cd [YOUR_FOLDER_NAME]
```

3. - for run the server should first install node packages with this command in terminal :

```
npm install / npm i
```

4. - and `npm run dev`

5. - ### CSS Styling in Next.JS:

- How to add a global CSS file to your application.

- Two different ways of styling: Tailwind and CSS modules.

- How to conditionally add class names with the clsx utility package.

For styling your application or website you use one of this , Tailwindcss or CSS Modules if use tailwindcss the first of installation in terminal command the terminal asked you are you want to install tailwindcss with the project or no , and second if you want use CSS Modules you add new file in /app/ui/[YOUR_FILE_NAME.module.css] and write your css code in there and import file in page.tsx for tailwindcss you should import file in layout.tsx
for Tailwindcss `import '@/app/ui/global.css'`
for CSS Module `import styles from '@/app/ui/[YOUR_FILE_NAME].module.css'`

for Tailwindcss `<div className="w-full h-0 text-white"></div>`
for CSS Module in tsx use in classes like this `<div className={styles.shape}></div>`

#### Questions About CSS Modules :

What is one benefit of using CSS modules?

- Provide a way to make CSS classes locally scoped to components by default, reducing the risk of styling conflicts.
- CSS Modules create unique class names for each component, so you don't have to worry about style collisions.

Other styling solutions
In addition to the approaches we've discussed, you can also style your Next.js application with:

Sass which allows you to import .css and .scss files.
CSS-in-JS libraries such as styled-jsx, styled-components, and emotion.

### Optimmizing Fonts and Images :

How does Nextjs optimize fonts?

- It hosts font files with other static assets so that there are no additional network requests.

for using the fonts in Nextjs Projects create file in @/app/ui named Fonts.ts

##### Hint : Images without dimensions and web fonts are common causes of layout shift due to the browser having to download additional resources.

6. - What did i learn ?

   - I learn this things 1. Css Styling 2. optimizing font and images 3. Creating Layouts and Pages

==================================================================================================== 7. - Navigating Between Pages

===============================

8. ## How Setup ESLint Prettier in VSCode.

- install Standard JavaScript for make code more readable and consistensly

```
 npm install eslint-config-standard
```

and run `npm run lint` before this commend should we write this in .eslintrc.json file :

```


```

- to organize tailwindcss classes should we writed and arranged with hand but eslint plugin it by him self and easy our way to code better so install package ::

```

npm install eslint-plugin-tailwindcss

```

and add this to .eslintrc.json file :

```
{
  "extends": ["next/core-web-vitals", "standard", "plugin:tailwindcss/recommended"]
}

```

- now add eslint-plugin-prettier :

```

npm install eslint-plugin-prettier

```

- after that install ESLint VSCode extensions
- and install prettier from terminal commend `npm install prettier` after intall it add this to your .eslintrc.json

```
{
  "extends": [
    "next/core-web-vitals",
    "standard",
    "plugin:tailwindcss/recommended",
    "prettier"
  ]
}


```

- [Error] i get some and should do this in terminal `npm install --save-dev eslint-config-prettier` for this error message :`Failed to load config "prettier" to extend from.`

- and setting things up to vscode in `setting.json` file search name of setting.json vscode and write this code in there `> open use settings (JSON)` write this in search bar of top of vscode :::

`i warn this is my setting file in vscode` you should add code belowe this code

```
{
 {
  // This is what i import in the setting.json file
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.addMissingImports": true
  },
  // end of it
  "[html]": {
    "editor.defaultFormatter": "vscode.html-language-features"
  },
  "files.autoSave": "afterDelay",
  "[css]": {
    "editor.defaultFormatter": "vscode.css-language-features"
  },
  "workbench.editor.splitInGroupLayout": "vertical",
  "editor.minimap.showSlider": "always",
  "editor.stickyScroll.enabled": true,
  "editor.cursorSmoothCaretAnimation": "on",
  "editor.fontFamily": "Fira Code , 'Courier New', monospace",
  "[javascript]": {
    "editor.defaultFormatter": "vscode.typescript-language-features"
  },
  "[git-commit]": {
    "breadcrumbs.showArrays": true,
    "breadcrumbs.showFiles": true,
    "editor.rulers": [72],
    "workbench.editor.restoreViewState": false
  },
  "liveServer.settings.donotShowInfoMsg": true,
  "[python]": {
    "editor.formatOnType": true
  },
  "gulp.autoDetect": "on",
  "editor.formatOnSave": true,
  "git.enableSmartCommit": true,
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "vscode.json-language-features"
  },
  "[scss]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "vscode-edge-devtools.webhint": false,
  "workbench.editorAssociations": {
    "*.pyc": "default",
    "*.apk": "default"
  },
  "git.autofetch": true,
  "git.allowForcePush": true,
  "git.fetchOnPull": true,
  "git.confirmSync": false,
  "editor.cursorBlinking": "expand",
  "githubPullRequests.createOnPublishBranch": "never",
  "explorer.confirmDragAndDrop": false,
  "workbench.colorTheme": "Theme",
  "workbench.iconTheme": "material-icon-theme",
  "vscodeGoogleTranslate.preferredLanguage": "Persian",
  "jupyter.interactiveWindow.creationMode": "perFile",
  "liveServer.settings.donotVerifyTags": true,
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "liveSassCompile.settings.formats": [
    {
      "format": "compressed",
      "extensionName": ".min.css",
      "savePath": "~/../css/"
    }
  ],
  "git.ignoreRebaseWarning": true,
  "diffEditor.ignoreTrimWhitespace": false,
  "javascript.updateImportsOnFileMove.enabled": "always",
  "explorer.compactFolders": false,
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.fontSize": 16,
  "terminal.integrated.fontFamily": "monospace",
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "github.copilot.enable": {
    "*": true,
    "plaintext": false,
    "markdown": false,
    "scminput": false,
    "typescriptreact": true
  },
  "vsicons.dontShowNewVersionMessage": true,
  "gitlens.advanced.messages": {
    "suppressLineUncommittedWarning": true
  },
  "window.zoomLevel": -2
}

}
```

- you should add this code to your setting.json file :::

```
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.addMissingImports": true
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
}

```

- ===============================

- dont forgot to install prettier and Eslint

- ? Tip of day `for reload window of vscode you can type`>reload window`and enter`
- ===========================================

9. - ## How Git GitHub Setup

- =================================

10. - ## TailwindCSS Setup :::

- going to tailwindcss.config.ts file

- the used packages should install
`npm install @tailwindcss/typography tailwindcss-animate`
