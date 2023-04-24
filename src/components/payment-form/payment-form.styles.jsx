import styled from 'styled-components';
import Button from '../button/button.component';

export const PaymentFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 300px;
    align-items: center;
    justify-content: center;
`

export const FormContainer = styled.form`
height: 100px;
min-width: 500px;
`

export const PaymentButton = styled(Button)`
    margin-top: 30px;
    margin-left: auto;
    `;

