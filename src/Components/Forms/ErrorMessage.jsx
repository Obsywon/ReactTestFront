import React from 'react';
import '../../styles/Components/Error.css';

const ErrorMessage = ({message}) => {
    return (
        <div className='errorContainer errorColor'>
            <p className='error'>{message}</p>
        </div>
    );
};

export default ErrorMessage;