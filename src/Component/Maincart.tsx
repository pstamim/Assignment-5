import { FaStar } from "react-icons/fa";
import type { IExplorCompany } from "./Interface";
import { ToastContainer } from "react-toastify";




interface Imaindataprops {
    maindata: IExplorCompany
    handleaddstack: (maindata: IExplorCompany) => void
    addStack: IExplorCompany[]
}

const Maincart = ({ maindata, handleaddstack, addStack }: Imaindataprops) => {

    const addedbutton = addStack.includes(maindata)




    return (
        <div>
            <div className={`${addedbutton ? 'border border-pink-500 rounded-2xl shadow-xl  p-6 w-full max-w-sm space-y-3 my-4 items-center' : 'border border-slate-100 rounded-2xl shadow-sm p-6 w-full max-w-sm space-y-3 my-4 items-center'}`}>


                <div className="flex justify-between ">

                    <img className="h-12 w-12" src={maindata.icon} alt="" />
                    <button className={`${maindata.badgeTextColor} cursor-pointer ${maindata.badgeColor} px-5 border border-slate-100 rounded-4xl`}>{maindata.badge}</button>
                </div>

                <h1 className="text-2xl font-bold">{maindata.name}</h1>
                <p className="text-[#64748B] m-2">{maindata.description}</p>
                <div className="divider" />
                <div className="flex justify-between items-center ">

                    <button className="bg-[#F1F5F9] py-1 px-3 rounded-xl cursor-pointer">{maindata.category}</button>

                    <p className="text-[#64748B] whitespace-nowrap ml-5  ">{maindata.difficulty}</p>
                    <FaStar className="text-yellow-300 ml-15" /><span className="mr-4">{maindata.rating}</span>


                </div>

                <button
                    onClick={() => handleaddstack(maindata)}
                    disabled={addedbutton}
                    className={`${addedbutton ? " bg-pink-100 py-2 px-25 mt-4 pr-20 text-pink-500 font-bold rounded-xl whitespace-nowrap disabled:cursor-not-allowed " : " bg-black px-30 py-2 pr-25 whitespace-nowrap mt-4 rounded-xl cursor-pointer text-white"}`}
                >
                    {addedbutton ? "✓ Added to Stack " : "Add to Stack"}
                </button>
               

            </div>
        </div >
    );
};

export default Maincart;