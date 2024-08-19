# flicktropolis

## Setting up .env

```bash
cp env-template.env .env
```

## Running the project

Run the `dev` script:

```bash
npm run dev
```

## Using msw mocks

Install `msw`:

```bash
npm i msw --no-save
```

Set the `.env` file with:

```
VITE_MOCK_ENABLED=true
```

That's it.
