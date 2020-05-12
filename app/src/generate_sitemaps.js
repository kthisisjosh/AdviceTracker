const algoliaSitemap = require("algolia-sitemap")
const fetch = require("node-fetch")

try {
    const algoliaConfig = {
        appId: process.env.REACT_APP_ALGOLIA_APP_ID,
        apiKey: process.env.REACT_APP_ALGOLIA_API_KEY,
        indexName: "Posts",
    }

    const hitToParams = ({ permalink }) => ({ loc: permalink })

    algoliaSitemap({
        algoliaConfig,
        sitemapLoc: "https://advicetracker.life/sitemaps",
        outputFolder: "public/sitemaps",
        hitToParams,
    })
} catch (error) {
    console.log(error)
}

Promise.all([
    fetch("http://www.google.com/webmasters/sitemaps/ping?sitemap=http://example.com/sitemap.xml"),
    fetch("http://www.bing.com/webmaster/ping.aspx?siteMap=http://example.com/sitemap.xml"),
]).then(() => {
    console.log("Done")
})
