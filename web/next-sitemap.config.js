const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL || "https://amarcelo.dev";

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: siteUrl,
  generateRobotsTxt: true,
  changefreq: "monthly",
  sitemapSize: 7777,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        disallow: ["/api", "/api/*", "/*.json", "/_next", "/_next/*", "/*.js"],
      },
    ],
  },
  exclude: ["/api/*", "/api", "/*.json", "/_next", "/_next/*", "/*.js", "/perfil/*", "/perfil"],
};
