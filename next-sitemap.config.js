/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://ellie-nextjs-map.vercel.app/',
  generateRobotsTxt: true,
};
