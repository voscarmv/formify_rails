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
