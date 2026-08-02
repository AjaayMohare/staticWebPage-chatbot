## Requirements

- Node.js
- npm
- Hugging Face Account
- Hugging Face API Token

## Dependencies

```bash
npm install axios
npm install cheerio
npm install dotenv
npm install readline-sync
npm install @huggingface/inference
```

Or,

```bash
npm install axios cheerio dotenv readline-sync @huggingface/inference
```
## Workflow

```text
User
 │
 ▼
Enter Webpage URL(s)
 │
 ▼
app.js
 │
 ▼
loader.js
 │
 ▼
Download & Extract Webpage Text
 │
 ▼
Context
 │
 ▼
Ask Question
 │
 ▼
llm.js
 │
 ▼
Build Prompt
 │
 ▼
Hugging Face API
 │
 ▼
Answer
 │
 ▼
Display Answer
 │
 └────────► Ask Another Question
```
