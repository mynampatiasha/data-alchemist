# Data Alchemist

A Next.js tool for uploading, validating, and prioritizing tabular data
(clients, tasks, workers) — upload CSVs, validate them against rules, build
custom prioritization rules, and get AI-assisted help interpreting the data.

## Tech stack

- Next.js 15 (App Router), React 19, TypeScript
- Tailwind CSS
- OpenAI API (chat completions) for AI-assisted features

## Structure (`my-app/src/app/`)

- `components/FileUploader.tsx` — CSV upload
- `components/DataGrid.tsx` — tabular data display/editing
- `components/ValidationPanel.tsx` — validation results
- `components/RuleBuilder.tsx` / `components/PrioritySettings.tsx` — rule and priority configuration
- `lib/parser.ts` — CSV parsing
- `lib/validator.ts` — data validation logic
- `lib/ai.ts` — OpenAI integration
- `samples/` — example `clients.csv`, `tasks.csv`, `workers.csv`

## Running locally

```bash
cd my-app
npm install
npm run dev
```

Requires an `OPENAI_API_KEY` environment variable for the AI-assisted
features (`lib/ai.ts`) to work.

Open [http://localhost:3000](http://localhost:3000).
