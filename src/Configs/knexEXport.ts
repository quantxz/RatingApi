const knex = require('knex')({
    client: 'pg',
    connection: 'postgres://quantxz:DAPiu6z4tfor@ep-lingering-block-583272.us-east-2.aws.neon.tech/neondb?sslmode=require',
    ssl: { rejectUnauthorized: false },
});

export { knex }