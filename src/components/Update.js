import React from 'react';
import { useDispatch } from 'react-redux';
import Form from '@rjsf/core';
import { update } from '../actions';
import { useRouteMatch } from "react-router-dom";

const Update = () => {
    const route = useRouteMatch('/update/:table/:id');
    const form = require(`./forms/${route.params.table}_form.json`);
    const ui = require(`./forms/${route.params.table}_ui.json`);
    const dispatch = useDispatch();
    const handleSubmit = FormData => {
        dispatch(update({table: route.params.table, id: route.params.id, data: FormData.formData}));
    };
    return (
        <Form schema={form} uiSchema={ui} onSubmit={handleSubmit} />
    );
};

export default Update;
