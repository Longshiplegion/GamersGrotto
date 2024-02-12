import { createPool, Pool } from 'mysql'
let pool: Pool | null = null

const intializeMySqlConnector = () => {
    try {
        pool = createPool({
            connectionLimit:
                parseInt(process.env.My_SQL_DB_CONNECTION_LIMIT != undefined ? process.env.My_SQL_DB_CONNECTION_LIMIT : ''),
            port:
                parseInt(process.env.My_SQL_DB_PORT != undefined ? process.env.My_SQL_DB_PORT : ''),
            host: process.env.My_SQL_DB_HOST,
            user: process.env.My_SQL_DB_USER,
            password: process.env.My_SQL_DB_PASSWORD,
            database: process.env.My_SQL_DB_DATABASE,


        });
        console.debug('MySql Connection Pool Created');
        console.log('process.env.DB_DATABASE', process.env.My_SQL_DB_DATABASE);

        pool.getConnection((err, connection) => {
            if (err) {
                console.log('MySql Connection Failed');
                throw new Error("not able to connect to mysql")
            }
            else {
                console.log('MySql Connection Successfull');
                connection.release();
            }

        })
    }
    catch (error) 
    {
        console.error('[mysql.connector][initializeMySqlConnector][Error]', error);
        throw new Error('failed to initialize pool')
    }



}
export const execute = <T>(query: string, params: string[] | Object): Promise<T> => {

    try {
        if (!pool) {
            intializeMySqlConnector();
        }
        return new Promise<T>((resolve, reject) => {
            pool!.query(query, params, (error, results) => {
                if (error) reject(error);
                else resolve(results);

            });


        });



    } catch (error) {
        console.error('[mysql.connector][execute][Error]', error);
        throw new Error('failed to execute query');
    }





}