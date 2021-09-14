let {Connection} = require('postgresql-client');
let ejs = require('ejs');
let fs = require('fs');

(async () => {
    const connection = new Connection({
        host: 'localhost',
        user: 'postgres',
        password: 'postgres',
        port: 5432,
        database: 'db/table_development',
    });;
    await connection.connect();
    const result = await connection.query(
        `WITH rows AS (
            SELECT c.relname, a.attname, a.attnotnull, a.attnum, t.typname
            FROM pg_class c
            JOIN pg_attribute a 
              ON c.oid = a.attrelid and a.attnum >= 0
            JOIN pg_type t
              ON t.oid = a.atttypid
            JOIN pg_namespace n
              ON c.relnamespace = n.oid
            WHERE n.nspname = 'public'
              AND c.relkind = 'r'
          ),                                  
          agg AS (     
            SELECT rows.relname, json_agg(rows ORDER BY attnum) AS attrs
            FROM rows
            GROUP BY rows.relname
          )                           
          SELECT json_object_agg(agg.relname, agg.attrs)
          FROM agg;`,
        {params: ['%york%']});
    const rows = result.rows[0];
    const jsonSchema = rows.join('\n');
    console.log(rows[0]);
    await connection.close(); // Disconnect

    // fs.writeFile('db3.json', jsonSchema, function (err) {
    //     // Checks if there is an error
    //     if (err) return console.log(err);
    // });

    // const data = require('./db3.json');

    const data = JSON.parse(jsonSchema);
    console.log(data);
    // return;
    for (const table in data){
      let json = await ejs.renderFile('./create.ejs', {data: {[table]: data[table]}});
      fs.writeFile(`${table}_form.json`, json, function (err) {
        if (err) return console.log(err);
      });
    }
    
})();
// let people = ['geddy', 'neil', 'alex'];
