
import type { IExplorCompany } from './Interface';
import Maincart from './Maincart';
interface Icompanymap{
    compnydata:IExplorCompany[]
}

const Cart = ({ compnydata }:Icompanymap) => {
    return (
        <div className='grid grid-cols-3 container mx-auto mt-20'>
            {
                compnydata.map((maindata: IExplorCompany) => {
                    return <Maincart maindata={maindata}/>
                })
            }
        </div>
    );
};

export default Cart;