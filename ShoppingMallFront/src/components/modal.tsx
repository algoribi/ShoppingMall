import React from 'react';
import { ProductType } from 'types';

export default function PrintProductPage() {

    return(
        <div className='modal_box'>
            <div className='modal_message_box'>
                <p className='modal_text'>모달창 입니닷</p>
                {/* <button className='modal_button button' onClick={() => }>
                yes</button>     */}
                <button className='modal_button button'>no</button>
            </div>    
        </div>
    );
}