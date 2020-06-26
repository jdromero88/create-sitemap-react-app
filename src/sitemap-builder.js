require("babel-register")({
  presets: ["es2015", "react"]
});

const router = require('./Routes').default;
const Sitemap = require('react-router-sitemap').default;

(
    new Sitemap(router)
        .build('https://my-awesome-site.com')
        .save('./sitemap.xml')
);
