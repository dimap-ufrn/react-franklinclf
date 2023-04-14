import {useState} from 'react'
import './Count.css'
import { TbSquareRoundedMinus } from "react-icons/tb";
import { TbSquareRoundedPlus } from "react-icons/tb";

export default function Count(){
    const [quant, setQuant] = useState(0)

    return (
        <div>
            <div className='quant-container'>
                <TbSquareRoundedMinus className='minus' onClick={() => {setQuant(quant-1)}}/>
                <p className='quant'>{quant}</p>
                <TbSquareRoundedPlus className='plus' onClick={() => {setQuant(quant+1)}}/>
            </div>
        </div>
    )
}