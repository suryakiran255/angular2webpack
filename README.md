# angular2-webpack

## Synosis
I have seen lot of code in Angular 2 has been demoed using system.js, but webpack is far more advanced when compared with system.js. One of the biggest advantage is bundles of related components are created at the compile or build time. Whereas in system.js everything is decided at the runtime. This gives webpack an edge over system.js.

## Motivation
I have some typical internet project with simple top naigation, left navigation and footer. I just want to explore this concepts and thus added this project. Also this project was intended of converting this to a SharePoint hosted app. So you might find some gliches

## Installation
Clone this repo into new project folder

    git clone  https://github.com/suryakiran255/angular2webpack  angular2-webpack
    cd angular2-webpack

We have no intention of updating the source. Discard everything "git-like" by deleting the .git folder

    rd .git /S/Q 

### Create a new got repo

Start writing your own code now and add it to your own git repository

Initialize this project as a local git repo and make the first commit:

    git init
    git add .
    git commit -m "First commit"

Create a remote repository for this project on the service of your choice.

Grab its address (e.g. https://github.com/<my-org>/my-proj.git) and push the local repo to the remote.

    git remote add origin <repo-address>
    git push -u origin master

### Install npm packages

    npm install

#### npm scripts

 I have captured many of the most useful commands in npm scripts defined in the package.json:

* `npm run build` - builds and bundles up the output files to dist folder
* `npm run serve` - runs the application using web dev server. (http://localhost:8080)

#### Note
Please include the query strings to make it work properly. Sample url would be
http://localhost:8080/?SPAppWebUrl=test&SPHostUrl=test&SPHostTitle=test&SPHostLogoUrl=test

