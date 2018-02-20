# Made In Ghana (Static Site Generator)

This is a static site generator, built with [Next.js](https://github.com/zeit/next.js), for the [Made In Ghana](https://github.com/devcongress/made-in-ghana) repository showcasing made in Ghana repositories.

## Architecture
This site is setup with the [JAMStack](https://jamstack.org) philosophy.

- The static site generator, hosted on [Netlify](https://www.netlify.com/), receives a webhook event whenever a new project is added via merge.
- This kicks off the build process which pulls in the readme from the [Made In Ghana](https://github.com/devcongress/made-in-ghana) repository, parses it into JSON and renders static HTML page(s) using [Next.js](https://github.com/zeit/next.js)
- Static HTML files, in the `out` diretory,are in turn uploaded to the Netlify CDN ready to be viewed by the world.

![alt text](http://oi64.tinypic.com/t6dnw8.jpg)

## File structure
├── **components**  *Compnents used in the various pages* <br>
├── **lib**  *Utility libraries* <br>
├── **pages** *Main pages, index, about etc* <br>
└── **static** *Static assets. images, css, fonts etc*


## Setup
- Clone/Fork repo
- Run `npm install`
- Run `npm run dev` to start development server on port 3000
- Run `npm run build` to run as a server side rendered app in production
- Run `npm run build:static` to build site as static files into the `out` directory. This file can be uploaded to any CDN or web server of your choice.

## Resources
- [The New Frontend Stack. Javascript, APIs and Markup](https://vimeo.com/163522126)
- [Learn Next.js](https://learnnextjs.com/)
- [The Beginner's Guide to ReactJS](https://egghead.io/courses/the-beginner-s-guide-to-reactjs)
