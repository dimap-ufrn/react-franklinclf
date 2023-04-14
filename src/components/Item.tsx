import './Item.css'
import Count from './Count'
import Trash from './Trash'
import React,{useState} from 'react'

export type itemInfo = {
    image: string;
    name: string;
    desc: string;
    quant: number;
}

export default function Item(props: itemInfo){
    return(
        <div>
            <div className='item-container'>
                <div className='image-container'>
                    <img src={props.image}></img>
                </div>
                <div className='info-container'>
                    <div className='item-text'>
                        <p>DESC DO ITEM</p>
                        <p>NOME DO ITEM</p>
                        <p>PREÇO DO ITEM</p>
                    </div>
                    <div className='item-quantity'> 
                        <Count/>
                    </div>
                    <div className='item-trash'>
                        <Trash/>
                    </div>
                </div>
            </div>
        </div>
    )
}