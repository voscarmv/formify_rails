import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from '@rjsf/core';
import { list } from './actions';

const TesttypesList = () => {
    const testtypesForm = {
        "title": "testtypes",
        "description": "A simple form example.",
        "type": "object",
        "properties": {
        }
    };
    // useEffect(
    //   () => handleDismiss(),
    //   [],
    // );
    const dispatch = useDispatch();
    const response = useSelector(state => state.count)

    const handleSubmit = FormData => {
        console.log(FormData);
        console.log(FormData.formData);
        dispatch(list({table: 'testtypes'}));
        // dispatch corresponding Sagas
        console.log(response);
    };
    return (
        <div>
            <Form schema={testtypesForm} onSubmit={handleSubmit} />
            {response}
        </div>
    );
};
export default TesttypesList;
