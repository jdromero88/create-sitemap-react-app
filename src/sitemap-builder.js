require("babel-register")({
  presets: ["es2015", "react"]
});
require('babel-register');
const router = require('./Routes').default;
const Sitemap = require('react-router-sitemap').default;
(
	new Sitemap(router)
    .build("https://mi-awesome-website.com")
		.save('./sitemap.xml')
);
