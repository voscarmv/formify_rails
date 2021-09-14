import React from 'react';
import { useDispatch } from 'react-redux';
import Form from '@rjsf/core';
import { create } from '../actions';
import { useRouteMatch } from "react-router-dom";

const Create = () => {
    const route = useRouteMatch('/create/:table/:id');
    console.log(route);
    const form = require(`./forms/${route.params.table}_form.json`);
    // useEffect(
    //   () => handleDismiss(),
    //   [],
    // );
    const dispatch = useDispatch();

    const handleSubmit = FormData => {
        console.log(FormData);
        console.log(FormData.formData);
        dispatch(create({table: route.params.table, data: FormData.formData}));
        // dispatch corresponding Sagas
    };
    return (
        <Form schema={form} onSubmit={handleSubmit} />
    );
};
export default Create;
