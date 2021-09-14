# Formify Rails

A boilerplate generator that uses `ejs` to produce a `redux-saga` CRUD based on the database structure of any `rails` API that uses `postgresql`.

# Introduction

Are you tired of manually coding every single form in your React components? Now you can generate them automatically. Formify detects the structure of your database and generates the necessary forms based on the tables and fields. You can then add or remove details from the generated boilerplate to fit your needs.

# Getting started

`git clone` the repo, `cd` to it and:

1. `$ npm install`
2. `$ cd src/scripts`
3. Make sure `postgresql.json` contains your database credentials.
3. `$ ./generate.sh`
4. `$ npm start`

This should generate all the necessary forms based on the  `postgresql.json` database. To use a different database name or credentials, modify the `postgresql.json` file.

For example, a database from a `rails` project with the following `schema.rb`:

```Ruby
ActiveRecord::Schema.define(version: 2021_09_07_212158) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "testtypes", force: :cascade do |t|
    t.binary "binary"
    t.boolean "boolean"
    t.date "date"
    t.datetime "datetime"
    t.decimal "decimal"
    t.float "float"
    t.integer "integer"
    t.string "string"
    t.text "text"
    t.time "time"
    t.datetime "timestamp"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
```

Will generate the following `/src/components/testtypes_form.json` file:

```
{
  "title": "testtypes",
  "description": "A simple form example.",
  "type": "object",
  "properties": {
    "id": {
      "title": "id",
      "type": "integer"
    },
    "binary": {
      "type": "boolean",
      "title": "binary",
      "description": ""
    },
    "boolean": {
      "type": "boolean",
      "title": "boolean",
      "description": ""
    },
    "date": {
      "type": "string",
      "format": "date",
      "title": "date"
    },
    "datetime": {
      "type": "string",
      "format": "date-time",
      "title": "datetime"
    },
    "decimal": {
      "title": "decimal",
      "type": "number"
    },
    "float": {
      "title": "float",
      "type": "number"
    },
    "integer": {
      "title": "integer",
      "type": "integer"
    },
    "string": {
      "type": "string",
      "title": "string"
    },
    "text": {
      "type": "string",
      "title": "text"
    },
    "time": {
      "type": "string",
      "format": "date-time",
      "title": "time"
    },
    "timestamp": {
      "type": "string",
      "format": "date-time",
      "title": "timestamp"
    },
    "created_at": {
      "type": "string",
      "format": "date-time",
      "title": "created_at"
    },
    "updated_at": {
      "type": "string",
      "format": "date-time",
      "title": "updated_at"
    }
  }
}
```

This form object is then loaded to the CRUD components in `/src/components/`. For a better understanding of how these form objects work, visit the [react-jsonschema-form playground](https://rjsf-team.github.io/react-jsonschema-form/), as well as [their docs](https://react-jsonschema-form.readthedocs.io/en/latest/).

For more details about how this method works, check out this experimental draft:

https://gist.github.com/voscarmv/cf4b126eed800a087d2f20a15f04265a

# ToDo

- [x] Complete Sagas CRUD.
- [x] Debug `formify.js` to produce working code.
- [x] Automate database structure extraction.
- [x] Automate component generation and file distribution.
- [ ] Add Ui styles to forms.
- [ ] Secure with JWT (devise-jwt)

# [License](./LICENSE.md)
