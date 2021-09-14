import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from '@rjsf/core';
import { read } from '../actions';
import { useRouteMatch } from "react-router-dom";

const Read = () => {
    const route = useRouteMatch('/read/:table/:id');
    const form = require('./forms/empty.json');
    const dispatch = useDispatch();
    const response = useSelector(state => state.response)
    const handleSubmit = () => {
        dispatch(read({table: route.params.table, id: route.params.id}));
    };
    return (
        <div>
            <Form schema={form} onSubmit={handleSubmit} />
            {response}
        </div>
    );
};

export default Read;
