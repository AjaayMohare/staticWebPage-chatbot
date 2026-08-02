const axios=require("axios");
const cheerio=require("cheerio");

async function loadWebPages(urls){
    let context="";

    for(const url of urls){
        try{
            console.log("Loading:",url);

            const response=await axios.get(url);

            const $=cheerio.load(response.data);

            $("script").remove();
            $("style").remove();
            $("noscript").remove();

            const text=$("body")
                .text()
                .replace(/\s+/g," ")
                .trim()
                .slice(0,12000);

            context+=`\n\n=================================\n`;
            context+=`URL: ${url}\n\n`;
            context+=text.slice(0,15000);
        }
        catch(err){
            console.log("Failed to load:",url);
        }
    }

    return context;
}

module.exports=loadWebPages;
