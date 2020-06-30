const es2015 = require('babel-preset-es2015');
const presetReact = require('babel-preset-react');
require("babel-register")({
  presets: [es2015, presetReact]
});
require('babel-register');
const router = require('./Routes').default;
const Sitemap = require('react-router-sitemap').default;
(
	new Sitemap(router)
    .build("https://mi-awesome-website.com")
		.save('./sitemap.xml')
);
