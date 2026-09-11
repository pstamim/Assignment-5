import { FaStar } from "react-icons/fa";
import type { IExplorCompany } from "./Interface";

interface Imaindataprops {
    maindata: IExplorCompany[]
}

const Maincart = ({ maindata }: Imaindataprops[]) => {
    return (
        <div>
            <div className="border border-slate-100 rounded-2xl shadow-sm p-6 w-full max-w-sm space-y-3 my-4 items-center">


                <div className="flex justify-between ">

                    <img className="h-12 w-12" src={maindata.icon} alt="" />
                    <button className={`${maindata.badgeTextColor} ${maindata.badgeColor} px-5 border border-slate-100 rounded-4xl`}>{maindata.badge}</button>
                </div>

                <h1 className="text-2xl font-bold">{maindata.name}</h1>
                <p className="text-[#64748B] m-2">{maindata.description}</p>
                <div className="divider" />
                <div className="flex justify-between items-center">

                    <button className="bg-[#F1F5F9] py-1 px-3 rounded-xl ">{maindata.category}</button>

                    <p className="text-[#64748B]">{maindata.difficulty}</p>
                    <p><FaStar className="text-yellow-300" />{maindata.rating}</p>


                </div>


                <button className="btn btn-neutral px-30">Add to Stack</button>
            </div>
        </div >
    );
};

export default Maincart;