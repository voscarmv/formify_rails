

// ar_internal_metadata_component.js
import React from 'react';
import { fetchSignUp } from '../actions/index';
import Form from 'react-jsonschema-form';

const ar_internal_metadata = () => {

ar_internal_metadata_form = {
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
      <Form schema={ar_internal_metadata_form} onSubmit={handleSubmit} />
    );
  };
  
  export default ar_internal_metadata;

// schema_migrations_component.js
import React from 'react';
import { fetchSignUp } from '../actions/index';
import Form from 'react-jsonschema-form';

const schema_migrations = () => {

schema_migrations_form = {
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
      <Form schema={schema_migrations_form} onSubmit={handleSubmit} />
    );
  };
  
  export default schema_migrations;

// testtypes_component.js
import React from 'react';
import { fetchSignUp } from '../actions/index';
import Form from 'react-jsonschema-form';

const testtypes = () => {

testtypes_form = {
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
      <Form schema={testtypes_form} onSubmit={handleSubmit} />
    );
  };
  
  export default testtypes;
