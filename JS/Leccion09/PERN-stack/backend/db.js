import pg from 'pg';
import { PG_PORT, PG_USER, PG_PASSWORD, PG_HOST, PG_DATABASE} from './config';


export const pool = new pg.Pool({
    port: PG_PORT,
    host: PG_HOST,
    user: PG_USER,
    password: PG_PASSWORD,
    database: PG_DATABASE,
});

pool.on("connect", () => {
    console.log("Conectado a la base de datos");
});