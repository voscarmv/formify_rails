#!/bin/bash
# This generates all the components for the app.
npx ejs formify.ejs -f db.json > jsonforms.js