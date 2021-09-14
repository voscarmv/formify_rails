#!/bin/bash
# This generates all the components for the app.
node formify.js

#npx ejs formify.ejs -f db.json > jsonforms.js