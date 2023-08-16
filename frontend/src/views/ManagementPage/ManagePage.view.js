import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import  styled  from 'styled-components';

const Container = styled.div`
    width: 100%;
    max-width: 800px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px
`;

const Title = styled.h2``;


function ManagePage() {

    return (
        <div className='managePage'>
            <Title>Gerenciamento de Cardápio</Title>
            
            <Container>

            </Container>
            <ToastContainer 
                autoClose={3000} 
                position={toast.POSITION.BOTTOM_LEFT} 
            />
        </div>
    );
}

export default ManagePage;