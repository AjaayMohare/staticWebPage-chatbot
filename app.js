require("dotenv").config();

const readline=require("readline-sync");
const loadWebPages=require("./loader");
const askLLM=require("./llm");

async function main(){
    console.log("=================================");
    console.log("      WEBPAGE CHAT CLI");
    console.log("=================================\n");

    let urls=[];


    const url=readline.question("Enter URL");
    urls.push(url)

    console.log("\nLoading webpages...\n");

    const context=await loadWebPages(urls);

    console.log("Webpages Loaded!\n");

    while(true){
        const question=readline.question("Ask Question (exit to quit): ");
        if(question.toLowerCase()=="exit") break;

        console.log("\nThinking...\n");

        const answer=await askLLM(context,question);

        console.log(answer);
        console.log("\n------------------------------\n");
    }
}

main();
