![tailwind-nextjs-banner](/public/static/images/twitter-card.png)

# Tailwind+GraphQL Nextjs Starter Blog

This is a blogging starter template built with [Next.js](https://nextjs.org/), GraphQL, and [Tailwind CSS](https://tailwindcss.com/). As opposed to [the parent project](https://github.com/timlrx/tailwind-nextjs-starter-blog) this one uses GraphQL for data fetching instead of MDX and plain JavaScript mock data.

Check out the documentation below to get started.

Facing issues? Feel free to open a new issue if none has been posted previously.

Feature request? Check the past discussions to see if it has been brought up previously. Otherwise, feel free to start a new discussion thread. All ideas are welcomed!

## Motivation

I wanted to port my WordPress blog to Nextjs and Tailwind CSS and there was a perfect template for this purpose [Tailwind Nextjs Starter Blog](https://github.com/timlrx/tailwind-nextjs-starter-blog).

Unfortunately, Tailwind Nextjs Starter Blog works with MDX and fetches content from markdown files and I wanted to communicate with my old blog with GraphQL.

So I stripped out the original template from all markdown features and added support for GraphQL.

The design is adapted from Tailwindlabs blog by [Timothy](https://github.com/timlrx) and I believe it's a perfect design for a personal blog.

## Features

- Support for WordPress integration with GraphQL
- Easy styling customization with [Tailwind 3.0](https://tailwindcss.com/blog/tailwindcss-v3) and primary color attribute
- Mobile-friendly view
- Light and dark theme
- Automatic image optimization via [next/image](https://nextjs.org/docs/basic-features/image-optimization)

## Roadmap for future development

- [ ] Support for the native WordPress comment system

Also, all pull requests for code optimization, cleaning up, refactoring the codebase, and fixing even minor issues are highly appreciated. Just try to keep it small and simple.

## Quick Start Guide

1. JS (official support)

```bash
npx degit https://github.com/artabr/tailwind-nextjs-graphql-blog.git
```

2. Duplicate `.env.example` as `.env` and populate it with correct values. Explanation of what each variable does is in the file as comments
3. Bootstrap the WordPress headless CMS. You can use [this repository](https://github.com/artabr/wp-graphql-basic-docker) to run a WordPress Docker image prepopulated with some dummy data
4. Add blog posts with WordPress
5. Deploy on any platform of choice

## Development

First, run the development server:

```bash
yarn run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Support

Using the template? Support this effort by giving a star on Github, sharing your own blog, giving a shoutout on Twitter, or being a project [sponsor](https://github.com/sponsors/timlrx) of the original author.

## License

[MIT](https://github.com/artabr/tailwind-nextjs-graphql-blog/blob/main/LICENSE) © [Art Abramov](https://artabr.com)

[MIT](https://github.com/timlrx/tailwind-nextjs-starter-blog/blob/master/LICENSE) © [Timothy Lin](https://www.timrlx.com)
