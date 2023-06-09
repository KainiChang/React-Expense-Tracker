import React from 'react'
import { colRef } from '../../firebase-config'
import { addDoc } from 'firebase/firestore'

import Mask from '../../components/Mask/Mask.js';
import Forms from '../../components/Form/ExpenseForm.js';

export default function ExForm(props) {

    const onAdd = async (costItem) => {
        await addDoc(colRef, costItem);
        props.onCloseMask();
        alert('Added successfully');
        //刷新列表
    };

    return (
        <>
            {
                props.maskStatus && 
                <Mask onClose={props.onCloseMask}>
                    <Forms formType={props.formType} onAdd={onAdd}/>
                </Mask>
            }
        </>
    )
}
