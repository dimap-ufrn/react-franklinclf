import './App.css'
import Title from './components/Title'
import Quantity from './components/Quantity'
import Item from './components/Item'
import Item1Image from './assets/item1.jpg'

export default function App() {
  return (
    <>
    <div className='container'>
      <Title title="Carrinho de Compras" desc="Essa é a lista dos itens adicionados ao carrinho:"/>
      <div className='container-carrinho'>
        <div className='container-items'>
          <Quantity quant={3}/>
          <div className='item-list'>
            <Item name='iPhone 14 Plus' desc='Um celular bem interessante e tal.' quant={0} image={Item1Image}/>
            <Item name='iPhone 14 Plus' desc='Um celular bem interessante e tal.' quant={0} image={Item1Image}/>
            <Item name='iPhone 14 Plus' desc='Um celular bem interessante e tal.' quant={0} image={Item1Image}/>
            <Item name='iPhone 14 Plus' desc='Um celular bem interessante e tal.' quant={0} image={Item1Image}/>
            <Item name='iPhone 14 Plus' desc='Um celular bem interessante e tal.' quant={0} image={Item1Image}/>
          </div>
        </div>
        <div className='container-info'>
          
        </div>
      </div>
    </div>
  </>
  )
}
