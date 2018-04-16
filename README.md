# Strawberry Scaffold

🍓

Built with:

* Middleman 4
* Webpack 3

Includes (but can be easily swapped out for anything else):

* TypeScript 2.6
* React 16
* SASS

# Prerequesites

* Ruby Version 2.4.1
* Node Version 7.9.0 or later

## Yarn

# Setup dependencies

## Run bundler

    bundle

## Run yarn

    yarn

# Creating the site

- The entry point to the site is in source/index.html.erb
- layout.erb is the main site layout
- You can add js/css/scss/ts/etc. files to wpsrc/css or wpsrc/js as long as you are referencing them in the index css/js files.

# Development server

To run the dev server, ensure the correct versions of Ruby and Node are selected, then run the command:

    bundle exec middleman server

The app will be available on http://localhost:4567 and any changes to the index.scss, index.ts files or their dependencies in the wpsrc will be watched by Webpack. Other files in the source folder will be watched by middleman as usual. Currently there is no live reload, but if you refresh the page in the browser manually the changes should be reflected.

# Building and deploying to netlify

Simplying committing your changes and pushing them to `origin` should trigger a deploy to Netlify.

## Netlify account and site setup

TBD
