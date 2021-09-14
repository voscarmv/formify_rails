import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from '@rjsf/core';
import { deleter } from '../actions';

const Delete = () => {
    const route = useRouteMatch('/create/:table/:id');
    const testtypesForm = require('forms/empty.json');
    const dispatch = useDispatch();
    const response = useSelector(state => state.count)
    const handleSubmit = () => {
        dispatch(deleter({table: route.params.table, id: route.params.id}));
    };
    return (
        <div>
            <Form schema={testtypesForm} onSubmit={handleSubmit} />
            {response}
        </div>
    );
};

export default Delete;
