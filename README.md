<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby minimal TypeScript starter
</h1>

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the minimal TypeScript starter.

    ```shell
    # create a new Gatsby site using the minimal TypeScript starter
    npm init gatsby
    ```
    
2.  **Default Configuration.**

    In the following prompts, choose TypeScript as your preferred language and none styling solution. 
    If you’ve never heard of vanilla-extract before (as a CSS styling solution 😉), you can think of it as “CSS modules in TypeScript”
    which enables you to write type-safe CSS that gets build to static CSS. Here’s how your questionnaire should look like:

    ```shell
    What would you like to call your site?
    ✔ · Getting Started with TypeScript in Gatsby
    What would you like to name the folder where your site will be created?
    ✔ github/ getting-started-with-type-script-in-gatsby
    ✔ Will you be using JavaScript or TypeScript?
    · TypeScript
    ✔ Will you be using a CMS?
    · No (or I'll add it later)
    ✔ Would you like to install a styling system?
    · No (or I'll add it later)
    ✔ Would you like to install additional features with other plugins?No items were selected
    ```

3. **gatsby-config.ts**

    The set up process already created a gatsby-config.ts for you. You can use it like you’re used to with gatsby-config.js
    with the difference that the syntax changed from CommonJS to ES6. The config in your project should look like this:

    ```ts
   //gatsby-config.ts
    import type { GatsbyConfig } from "gatsby";

    const config: GatsbyConfig = {
      siteMetadata: {
        title: `Getting Started with TypeScript in Gatsby`,
        siteUrl: `https://www.yourdomain.tld`
      },
      plugins: ["gatsby-plugin-vanilla-extract"]
    };

    export default config;
    ```

4. **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    npm run develop
    ```

5. **Open the code and start customizing!**

    Your site is now running at http://localhost:8000!

    Edit `src/pages/index.tsx` to see your site update in real-time!

6. **Learn more**

    - [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)

    - [Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)

    - [Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)

    - [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)

    - [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)

    - [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)

## 🚀 Quick start (Gatsby Cloud)

Deploy this starter with one click on [Gatsby Cloud](https://www.gatsbyjs.com/cloud/):

[<img src="https://www.gatsbyjs.com/deploynow.svg" alt="Deploy to Gatsby Cloud">](https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/gatsbyjs/gatsby-starter-minimal-ts)

## Authors
* **Datha+ Dev Team**
* **Anthony Tacuri** - *Initial work* - [github](https://github.com/ant121)

## Acknowledgments

> "*When something is important enough, you do it even if the odds are not with you*". - Elon Musk.
>
> Cuando algo es lo suficientemente importante, lo haces incluso si las probabilidades de que salga bien no te acompañan

Copyright (c) 2022 Datha+
