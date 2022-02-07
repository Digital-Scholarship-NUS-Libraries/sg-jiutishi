<p align="center">
  <a href="https://nus.edu.sg/nuslibraries">
    <img alt="NUS Libraries" src="src/images/NUSL_logo.png" width="200" />
  </a>
</p>
<h1 align="center">
  新加坡舊體詩庫
</h1>

# Documentation
Documentation on the structure of the project and data is available [here](doc/documentation.md)

# Requirements

You will need node and gatsby-cli installed globally.

```npm i -g gatsby-cli```

A more detailed tutorial is available on the [Gatsby website](https://www.gatsbyjs.com/docs/tutorial/part-0/)

# Updates
In order to update and deploy the website, first clone the repository:

```git clone git@github.com:Digital-Scholarship-NUS-Libraries/sg-jiutishi.git```

Move into the directory where the repository was cloned and install all dependencies:

```
cd sg-jiutishi
npm i
```

Perform all required changes.

The configuration for the target directory where the site will be hosted is [here in gatsby-config.js](https://github.com/Digital-Scholarship-NUS-Libraries/sg-jiutishi/blob/dff69a9b7e94caba3e671189a955979c56317752/gatsby-config.js#L2)

Build the site:

```gatsby build --prefix-paths```

You can test the site locally using the following command, you will need to manually add the path configured above in the url:

```gatsby serve --prefix-paths```

The site is in the public directory and can now be deployed.
