# 🧪 Data Alchemist

`Next.js 15` `React 19` `TypeScript` `Tailwind CSS` `OpenAI`

> Upload, validate, and prioritize tabular data — with AI assistance.

## What is Data Alchemist?

A Next.js tool for uploading, validating, and prioritizing tabular data
(clients, tasks, workers) — upload CSVs, validate them against rules, build
custom prioritization rules, and get AI-assisted help interpreting the data.

## ✨ Features

- 📤 CSV upload for clients, tasks, and workers
- ✅ Data validation with a dedicated validation panel
- ⚖️ Custom rule building and priority settings
- 🤖 AI-assisted data interpretation (OpenAI)

## 🛠️ Tech Stack

- Next.js 15 (App Router), React 19, TypeScript
- Tailwind CSS
- OpenAI API (chat completions)

## 📁 Structure (`my-app/src/app/`)

```
components/FileUploader.tsx        # CSV upload
components/DataGrid.tsx             # tabular data display/editing
components/ValidationPanel.tsx       # validation results
components/RuleBuilder.tsx           # rule configuration
components/PrioritySettings.tsx      # priority configuration
lib/parser.ts                        # CSV parsing
lib/validator.ts                      # data validation logic
lib/ai.ts                             # OpenAI integration
samples/                               # example CSVs
```

## 🚀 Running Locally

```bash
cd my-app
npm install
npm run dev
```

## 🔒 Security

Requires an `OPENAI_API_KEY` environment variable for the AI-assisted
features to work — never commit a real key.

Open [http://localhost:3000](http://localhost:3000).
