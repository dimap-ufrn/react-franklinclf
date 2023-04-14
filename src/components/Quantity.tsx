import './Quantity.css'

export type quantities = {
    quant: number;
}

export default function Quantity(props: quantities){
    if(props.quant === 0){
        return(
            <div className='empty'>
                <h1>O carrinho está vazio.</h1>
            </div>
        )
    }
    else if(props.quant === 1){
        return(
            <div>
                <p>Você tem {props.quant} item no carrinho.</p>
            </div>
        )
    }
    return(
        <div>
            <p>Você tem {props.quant} itens no carrinho.</p>
        </div>
    )
}