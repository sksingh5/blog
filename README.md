# Getting started

- [Getting started](#getting-started)
    - [Adding a new blog post](#adding-a-new-blog-post)
    - [Adding a new page](#adding-a-new-page)
    - [Changing the "Hero" text](#changing-the-hero-text)
    - [Changing the "Projects" part](#changing-the-projects-part)
    - [Changing the Navigation items](#changing-the-navigation-items)
    - [Changing the Footer](#changing-the-footer)
    - [Update your static folder](#update-your-static-folder)
    - [Theme options](#theme-options)
      - [Example usage](#example-usage)
    - [Additional configuration](#additional-configuration)

### Adding a new blog post

New blog posts will be shown on the index page (the **five most recent** ones) of this theme and on the blog overview page. They can be added by creating MDX files inside `content/posts`. General setup:

1. Create a new folder inside `content/posts`
1. Create a new `index.mdx` file, and add the frontmatter
1. Add images to the created folder (from step 1) you want to reference in your blog post
1. Write your content below the frontmatter
1. Add a `slug` to the frontmatter to use a custom slug, e.g. `slug: "/my-slug"` (Optional)
1. Use `defer` to opt-in into [Deferred Static Generation (DSG)](https://www.gatsbyjs.com/docs/how-to/rendering-options/using-deferred-static-generation/#:~:text=Deferred%20Static%20Generation%20(DSG)%20is,the%20page%20at%20run%20time.) (optional)

**Frontmatter reference:**

```
---
title: Introduction to "Defence against the Dark Arts"
date: 2019-11-07
description: Defence Against the Dark Arts (abbreviated as DADA) is a subject taught at Hogwarts School of Witchcraft and Wizardry and Ilvermorny School of Witchcraft and Wizardry.
defer: false
tags:
  - Tutorial
  - Dark Arts
canonicalUrl: https://random-blog-about-curses.com/curses-counter-curses-and-more
---
```

**The fields `description`, `defer` and `canonicalUrl` are optional!** If no description is provided, an excerpt of the blog post will be used. If no `canonicalUrl` is provided, it will not be included in the header.

The `date` field has to be written in the format `YYYY-MM-DD`!

### Adding a new page

Additional pages can be created by placing MDX files inside `contents/pages`, e.g. an "About" or "Contact" page. You'll manually need to link to those pages, for example by adding them to the navigation (in `siteMetadata`). General instructions:

1. Create a new folder inside `content/pages`
1. Create a new `index.mdx` file, and add the frontmatter
1. Write your content below the frontmatter
1. Optionally add files/images to the folder you want to reference from the page
1. Use `defer` to opt-in into Deferred Static Generation (DSG) (optional)

**Frontmatter reference:**

```md
---
title: About
slug: "/about"
defer: false
---
```

### Changing the "Hero" text

To edit the hero text ("Hi. I help entrepreneurs...), create/edit the file at `src/@lekoarts/gatsby-theme-minimal-blog/texts/hero.mdx` to edit the text.

To remove this section, delete this file.

### Changing the "Projects" part

To edit the projects part below "Latest posts", create/edit the file at `src/@lekoarts/gatsby-theme-minimal-blog/texts/bottom.mdx` to edit the contents.

To remove this section, delete this file.



### Changing the Navigation items

1. Add links to your internal sites to the left part of the header   
```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        showLineNumbers: false,
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
      },
    },
  ],
};
```

1. Add links to your external sites to the right part of the header
```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        showLineNumbers: false,
        externalLinks: [
          {
            name: `Twitter`,
            url: `https://twitter.com/lekoarts_de`,
          },
          {
            name: `Instagram`,
            url: `https://www.instagram.com/lekoarts.de/`,
          },
        ],
      },
    },
  ],
};
```

### Changing the Footer 
To edit the Footer section, edit the file at `src/@lekoarts/gatsby-theme-minimal-blog/components/footer.tsx`.

### Update your static folder
The static folder contains the icons, social media images and robots.txt. Don't forget to change these files, too! You can use [Real Favicon Generator](https://realfavicongenerator.net/) to generate the image files inside static.

### Theme options

| Key               | Default Value   | Description                                                                                                 |
| ----------------- | --------------- | ----------------------------------------------------------------------------------------------------------- |
| `basePath`        | `/`             | Root url for the theme                                                                                      |
| `blogPath`        | `/blog`         | url for the blog post overview page                                                                         |
| `tagsPath`        | `/tags`         | url for the tags overview page and prefix for tags (e.g. `/tags/my-tag`)                                    |
| `postsPath`       | `content/posts` | Location of posts                                                                                           |
| `postsPrefix`     | `/`             | Prefix for all individual blog posts                                                                        |
| `pagesPath`       | `content/pages` | Location of additional pages (optional)                                                                     |
| `mdx`             | `true`          | Configure `gatsby-plugin-mdx` (if your website already is using the plugin pass `false` to turn this off)   |
| `sharp`           | `true`          | Configure `gatsby-plugin-sharp` (if your website already is using the plugin pass `false` to turn this off) |
| `formatString`    | `DD.MM.YYYY`    | Configure the date format for Date fields                                                                   |
| `showLineNumbers` | `true`          | Show line numbers in code blocks                                                                            |
| `showCopyButton`  | `true`          | Show copy button in code blocks                                                                             |
| `navigation`      | `[]`            | Add links to your internal sites to the left part of the header                                             |
| `externalLinks`   | `[]`            | Add links to your external sites to the right part of the header                                            |

#### Example usage

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        showLineNumbers: false,
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `Twitter`,
            url: `https://twitter.com/lekoarts_de`,
          },
          {
            name: `Instagram`,
            url: `https://www.instagram.com/lekoarts.de/`,
          },
        ],
      },
    },
  ],
};
```

### Additional configuration

In addition to the theme options, there are a handful of items you can customize via the `siteMetadata` object in your site's `gatsby-config.js`

```js
// gatsby-config.js
module.exports = {
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `Lupin`,
    // Default title of the page
    siteTitleAlt: `Minimal Blog - @lekoarts/gatsby-theme-minimal-blog`,
    // Can be used for e.g. JSONLD
    siteHeadline: `Minimal Blog - Gatsby Theme from @lekoarts`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://minimal-blog.lekoarts.de`,
    // Used for SEO
    siteDescription: `Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and line highlighting.`,
    // Will be set on the <html /> tag
    siteLanguage: `en`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.jpg`,
    // Twitter Handle
    author: `@lekoarts_de`,
  },
};
```

If you want to add additional items to the navigation or external links (left and right side of header), add objects in the shape shown above to the arrays.

1. [Gatsby Starter: Minimal Blog](https://github.com/LekoArts/gatsby-starter-minimal-blog/blob/master/README.m)
1. [@lekoarts/gatsby-theme-minimal-blog](https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-minimal-blog/README.md#--lekoartsgatsby-theme-minimal-blog)