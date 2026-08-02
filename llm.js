require("dotenv").config();

const { HfInference }=require("@huggingface/inference");

const client=new HfInference(process.env.HF_TOKEN);

async function askLLM(context,question){
    const response=await client.chatCompletion({
        model:process.env.MODEL,
        messages:[
            {
                role:"system",
                content:"You answer only from the provided webpage content. If the answer is not present, reply: I couldn't find that information in the provided webpages."
            },
            {
                role:"user",
                content:`Webpage Content:

${context}

Question:
${question}`
            }
        ],
        max_tokens:500,
        temperature:0.2
    });

    return response.choices[0].message.content;
}

module.exports=askLLM;
