import { FaStar } from "react-icons/fa";
import type { IExplorCompany } from "./Interface";
import { ToastContainer } from "react-toastify";



interface Imaindataprops {
    maindata: IExplorCompany
    handleaddstack: (maindata: IExplorCompany) => void
}

const Maincart = ({ maindata, handleaddstack, }: Imaindataprops) => {






    return (
        <div>
            <div className="border border-slate-100 rounded-2xl shadow-sm p-6 w-full max-w-sm space-y-3 my-4 items-center">


                <div className="flex justify-between ">

                    <img className="h-12 w-12" src={maindata.icon} alt="" />
                    <button className={`${maindata.badgeTextColor} cursor-pointer ${maindata.badgeColor} px-5 border border-slate-100 rounded-4xl`}>{maindata.badge}</button>
                </div>

                <h1 className="text-2xl font-bold">{maindata.name}</h1>
                <p className="text-[#64748B] m-2">{maindata.description}</p>
                <div className="divider" />
                <div className="flex justify-between items-center ">

                    <button className="bg-[#F1F5F9] py-1 px-3 rounded-xl cursor-pointer">{maindata.category}</button>

                    <p className="text-[#64748B] ">{maindata.difficulty}</p>
                    <FaStar className="text-yellow-300 ml-15" /><span className="mr-4">{maindata.rating}</span>


                </div>
                <div className="flex">

                    <button onClick={() => handleaddstack(maindata)}
                        className="btn btn-neutral px-30 mt-4">Add to Stack</button>
                </div>

                <ToastContainer />
            </div>
        </div >
    );
};

export default Maincart;