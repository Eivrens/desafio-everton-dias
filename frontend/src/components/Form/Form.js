import React, {useRef } from 'react';
import styled from 'styled-components';

const FormContainer = styled.form``;

const Form = ({ onEdit }) => {
    const ref = useRef();

    return (
        <FormContainer ref={ref}>

        </FormContainer>
    );
}

export default Form;