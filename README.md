# Non-Sim Pricing API & UI

This repository contains a simple Node.js API along with a standalone React
frontend used for managing non-sim pricing flows.

## Backend

The Express API lives under `src/` and exposes a basic health check. Future
iterations will handle settlement, player suspension and data ingestion.

Run the API locally with:

```bash
npm start
```

## Frontend

The React admin UI is located in `non-sim-pricing-ui/` and is scaffolded using
Vite with Tailwind CSS. It currently works with dummy state only.

To develop the UI (after installing dependencies):

```bash
cd non-sim-pricing-ui
npm run dev
```

This will start the Vite dev server on port `5173`.


