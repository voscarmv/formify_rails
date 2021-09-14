import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from '@rjsf/core';
import { list } from '../actions';
import { useRouteMatch } from "react-router-dom";

const List = () => {
    const route = useRouteMatch('/list/:table');
    const form = require('./forms/empty.json');
    const dispatch = useDispatch();
    const response = useSelector(state => state.response)
    const handleSubmit = () => {
        dispatch(list({table: route.params.table}));
    };
    return (
        <div>
            <Form schema={form} onSubmit={handleSubmit} />
            {response}
        </div>
    );
};

export default List;
