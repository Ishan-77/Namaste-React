# _Chapter 02 - Igniting our App_

## Q: What is `NPM`?

A: `NPM` is as a node package manager,It is basically a repository for which contains software,required by developers.

## Q: What is `Parcel/Webpack`,why do we need it?

A: `Parcel/Webpacks` are bundlers,bundlers are required for a lot of things,They bundle our application,They compress files,whicch are essential for production level applications as hevy applications can cause problems,Parcel helps in diagnostics,It has caching which improves efficiency of our app,It performs hot module replacement.It provides 2 build types dev and production.

## Q: What is `.parcel-cache`?

A: `.parcel-cache` is a folder which gets created when parcel builds a project.It is one of the main reasons on why parcel is so quick because whenever parcel builds a project.It stores all info regarding it and thus it wont have to rebuild anything from scratch.

## Q: What is `npx`?

A: `npx` stands for node package execute,which is sinply a package runner.It allows developers to execute js packages even without installing them.

## Q: What is the difference b/w dev dependencies and dependencies ?

A: In package.json file there is a object called dependencies and it consists of all packages that are used in the project.Whereas dev dependencies is also a object present in the package.json file but the main difference is that it contains packages which are only used in the development phase and not in the production or testing phase

## Q: What is `Tree Shaking`?

A: Tree shaking or dead code elimination means that the unused code/module will not be included during the build process.This makes the project light and efficient.It works with import / export.

## Q: What is `Hot Module Replacement`?

A: By default parcel fully reloads the page,but in some cases it can also perform `Hot Module Replacement` which improves development experience by updating modules in the browser at runtime without needing full page refresh,enabling application state retaining for small changes made in the code.module.hot API can also be used. It is only availaible in development mode.

## Q: What is `.gitignore` What should be added and what not ?

A: A `.gitignore` file is a text file which tells git what all files/folders to ignore in a project hence the name .gitignore.As a thumb rule all folders/files which can be regenerated need not to be pushed to github
and should be ignored.

## Q: What is difference between `package.json and package-lock.json`?

A: `package.json` file is a configuration for npm while `package-lock.json` file keeps tracks (locks) the dependency with the version.Without package-lock.json differences might arise in installed versions in different environments,so to overcome that package-lock.json file is used.

## Q: What is `node_modules`.Is it a good idea to push it to github?

A: We can think of the node_modules folder like a cache for the external modules that your project depends upon. When we npm install them, they are downloaded from the web and copied into the node_modules folder
.We dont need to push it to github because node modules can be regenrated so it makes no sense to push it into github.We can just do npm install and all dependies will again be downlaoded and node_modueles folder will come up again.

## Q: What is `dist folder` ?

A: When we do npx parcel index.html,It will bundle all code and store it in dist folder,dist folder contains the minimised version/compressed version of our source code,it contains the prod build files.
