# Formify Rails

A boilerplate generator that uses `ejs` to produce a `redux-saga` CRUD based on the database structure of any `rails` API that uses `postgresql`.

# Introduction

Are you tired of manually coding every single form in your React components? Now you can generate them automatically. Formify detects the structure of your database and generates the necessary forms based on the field data types. You can then add or remove details from the generated boilerplate to fit your needs.

# Getting started

`git clone` the repo, `cd` to it and:

1. `$ npm install`
2. `$ cd src/scripts`
3. `$ ./generate.sh`

This should generate all the necessary components based on the `db/development' postgresql database.

A database from a `rails` project with the following `schema.rb`:

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

Produces the following source file:

```Javascript


// ar_internal_metadata_component.js
import React from 'react';
import Form from 'react-jsonschema-form';

const ar_internal_metadata = () => {

ar_internal_metadataForm = {
    "title": "ar_internal_metadata",
    "description": "A simple form example.",
    "type": "object",
    "properties": {
    
        "key": {
    "type": "string",
    "title": "key"
  },

    
        "value": {
    "type": "string",
    "title": "value"
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
  },

    
    }
};
// useEffect(
    //   () => handleDismiss(),
    //   [],
    // );
  
    const handleSubmit = e => {
        // dispatch corresponding Sagas
    };
  
    return (
      <Form schema={ar_internal_metadataForm} onSubmit={handleSubmit} />
    );
  };
  
  export default ar_internal_metadata;

// schema_migrations_component.js
import React from 'react';
import Form from 'react-jsonschema-form';

const schema_migrations = () => {

schema_migrationsForm = {
    "title": "schema_migrations",
    "description": "A simple form example.",
    "type": "object",
    "properties": {
    
        "version": {
    "type": "string",
    "title": "version"
  },

    
    }
};
// useEffect(
    //   () => handleDismiss(),
    //   [],
    // );
  
    const handleSubmit = e => {
        // dispatch corresponding Sagas
    };
  
    return (
      <Form schema={schema_migrationsForm} onSubmit={handleSubmit} />
    );
  };
  
  export default schema_migrations;

// testtypes_component.js
import React from 'react';
import Form from 'react-jsonschema-form';

const testtypes = () => {

testtypesForm = {
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
  },

    
    }
};
// useEffect(
    //   () => handleDismiss(),
    //   [],
    // );
  
    const handleSubmit = e => {
        // dispatch corresponding Sagas
    };
  
    return (
      <Form schema={testtypesForm} onSubmit={handleSubmit} />
    );
  };
  
  export default testtypes;
```

You can generate your own `db.json` based on your own `postgresql` database by following the instructions in this experimental draft:

https://gist.github.com/voscarmv/cf4b126eed800a087d2f20a15f04265a

# ToDo

- [ ] Complete Sagas CRUD.
- [ ] Debug `formify.js` to produce working code.
- [x] Automate database structure extraction.
- [ ] Automate component generation and file distribution.
- [ ] Add Ui styles to forms.
- [ ] Secure with JWT (devise-jwt)

# [License](./LICENSE.md)
