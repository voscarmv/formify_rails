let {Connection} = require('postgresql-client');
let ejs = require('ejs');
let fs = require('fs');

(async () => {
    const postgresql = require('./postgresql.json');
    const connection = new Connection(postgresql);;
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
          FROM agg;`);
    const rows = result.rows[0];
    const jsonSchema = rows.join('\n');
    await connection.close(); // Disconnect

    // Uncomment the following lines to generate a database schema JSON file db.json:
    //
    // fs.writeFile('db.json', jsonSchema, function (err) {
    //     // Checks if there is an error
    //     if (err) return console.log(err);
    // });

    // Uncomment the following line to load data from a database json file:
    //
    // const data = require('./db.json');

    const data = JSON.parse(jsonSchema);
    let tablesArr = [];
    for (const table in data){
      tablesArr.push(table);
      let json = await ejs.renderFile('./elements.ejs', {data: {[table]: data[table]}});
      fs.writeFile(`../components/forms/${table}_form.json`, json, function (err) {
        if (err) return console.log(err);
      });
    }

    for (const table in data){
      tablesArr.push(table);
      let json = await ejs.renderFile('./ui.ejs', {data: {[table]: data[table]}});
      fs.writeFile(`../components/forms/${table}_ui.json`, json, function (err) {
        if (err) return console.log(err);
      });
    }

    fs.writeFile('../tables.json', JSON.stringify({tables:tablesArr}), function (err) {
        // Checks if there is an error
        if (err) return console.log(err);
    });

    
})();
