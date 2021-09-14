import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from '@rjsf/core';
import { list } from '../actions';

const List = () => {
    const route = useRouteMatch('/create/:table');
    const testtypesForm = require('forms/empty.json');
    const dispatch = useDispatch();
    const response = useSelector(state => state.count)
    const handleSubmit = () => {
        dispatch(list({table: route.params.table}));
    };
    return (
        <div>
            <Form schema={testtypesForm} onSubmit={handleSubmit} />
            {response}
        </div>
    );
};

export default List;
