# Formify Rails

A boilerplate generator that uses `ejs` to produce a `redux-saga` CRUD based on the database structure of any `rails` API using `postgresql`.

# Introduction

Are you tired of manually coding every single form in your React components? Now you can generate them automatically. Formify detects the structure of your database and generates the necessary forms based on the field data types. You can then add or remove details from the generated boilerplate to fit your needs.

# Getting started

`git clone` the repo, `cd` to it and:

1. `$ npm install`
2. `$ cd src/scripts`
3. `$ ./generate.sh`

This should generate all the necessary components based on the database structure in `db.json`.

The current `db.json` file was extracted from a `rails` project with the following `schema.rb`:

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

The idea was to generate CRUDs for every possible data type available from `rails` is `ActiveRecord`.

You can generate your own `db.json` based on your own `postgresql` database by following the instructions in this experimental draft:

https://gist.github.com/voscarmv/cf4b126eed800a087d2f20a15f04265a

# ToDo

- [ ] Automate database structure extraction.
- [ ] Automate component generation and saving.
- [ ] Add Ui styles to forms.
- [ ] Secure with JWT (devise-jwt)

# [License](./LICENSE.md)
