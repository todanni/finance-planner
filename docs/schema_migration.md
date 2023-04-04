# Migrating the database after schema changes

1. Create a dev branch in the PlanetScale UI

2. Use the PlanetScale CLI to connect to the db

```sh
pscale connect finance-planner dev --port 3309
```

3. Make the changes in the `schema.prisma` file

4. Update the `.env` file temporarily

```sh
DATABASE_URL="mysql://root@127.0.0.1:3309/finance-planner"
```

5. Push the changes to the dev branch

```sh
npx prisma db push
```

6. Inspect the changes and promote the branch

```sh
pscale branch promote finance-planner dev
```
