import React from 'react';
import { useDispatch } from 'react-redux';
import Form from '@rjsf/core';
import { create } from './actions';
import { useRouteMatch } from "react-router-dom";

const TesttypesCrud = () => {
    const table = useRouteMatch('/create/:table/:id');
    console.log(table);
    const testtypesForm = {
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
    const dispatch = useDispatch();

    const handleSubmit = FormData => {
        console.log(FormData);
        console.log(FormData.formData);
        dispatch(create({table: 'testtypes', data: FormData.formData}));
        // dispatch corresponding Sagas
    };
    return (
        <Form schema={testtypesForm} onSubmit={handleSubmit} />
    );
};
export default TesttypesCrud;
