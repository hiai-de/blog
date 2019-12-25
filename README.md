# Welcome

Welcome to our new HIAI Blog, based on the Gatsby static site generator.

# Installation

## Using Visual Studio Code + Remote Containers (suggested)

Remote Containers let you develop in a separated environment on your machine. All necessary dependencies are installed automatically.

### Setup

1. Install Docker on your machine (Docker for Windows is supported, too)
2. Install Visual Studio Code (https://code.visualstudio.com/download)
3. Install Remote Containers Extension for Visual Studio Code (https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

### Start development server

Open the root directory of this repository. Then Visual Studio code should suggest to open the folder in a container. The first initialization could take a few minutes. After that your environment is completley set up.

Run `yarn develop` in the integrated terminal of Visual Studio code. After Gatsy is initialized navigate to http://localhost:8000 to see the blog or http://localhost:8000/___graphql to access the blog data.

## Using any IDE

### Setup

1. Install the latest version of NodeJs (https://nodejs.org/)
2. Install Gatsby CLI (`npm install -g gatsby-cli`)
3. Install YARN package manager (https://yarnpkg.com/lang/en/)
4. Switch to the project directory and run `yarn install` to install all dependencies

### Start development server

Run `yarn develop` to run the Gatsby development server. After Gatsy is initialized navigate to http://localhost:8000 to see the blog or http://localhost:8000/___graphql to access the blog data.

## Contributing

Everyone is welcome to contribute to this repository by creating a pull request.

### Blog entries

Adding a new blog post is quite easy. Just clone a folder in the [content directory](src/content), rename it and modify the header and content of `index.md`. Images can be placed in a subfolder called `images`. Just browse through the content directory to find several samples.

Sample structure:
```
- content
  - my-first-blog-entry
    - index.md
    - images
      - picture1.png
      - picture2.png
```

If you are a first time author then make sure you are in the [author list](src/mappings/authors.yaml).

### Page structure, design, etc.

In case of you would like to contribute to the blog by changing the page structure, design or just by making refactorings here or some useful links to get started.

We have made a list of tools and libraries you could get familiar with, if you don't already are:

- Gatsby as static site generator (https://www.gatsbyjs.org/)
- Several Gatsby plugins (see all plugins in [package.json](package.json))
- ReactJS as UI Framework (https://reactjs.org)
    - React Bootstrap for making the site responsive (https://react-bootstrap.github.io/)
- SASS as a better CSS replacement (https://sass-lang.com)
- YARN as a better replacement for NPM package manager (https://yarnpkg.com)
- Markdown for the blog entries (see [Official docs](https://daringfireball.net/projects/markdown/) or a [cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet))