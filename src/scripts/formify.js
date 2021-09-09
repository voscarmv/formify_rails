const data = require('./db.json');
let ejs = require('ejs');
let fs = require('fs');

(async () => {
    let html = await ejs.renderFile('./formify.ejs', data);
    console.log(typeof html);
    console.log(html);
    fs.writeFile('component.js', html, function (err) {
        // Checks if there is an error
        if (err) return console.log(err);
    });
    
})();
// let people = ['geddy', 'neil', 'alex'];
