import React, { useContext,  } from 'react';
import { Link } from 'react-router-dom';
import { ResultContext } from '../App';

const Home = () => {
    const { setName, setSector, sector, name, setCondition, condition } = useContext(ResultContext)


    return (
        <div>
            <div class="container mx-auto lg:px-28 sm:px-12 px-6"><div class="lg:w-3/4 w-[90%] h-auto shadow-lg mx-auto block rounded-2xl lg:p-20 sm:p-12 p-6 mt-24"><h1 class="text-slate-600 text-2xl font-semibold text-center">Form</h1>
                <div class="mx-auto mt-4"><label for="name" class="text-slate-600 text-base font-semibold   ">Name:</label>
                    <input value={name} onChange={e => setName(e.target.value)} class="border-slate-800 border rounded-md mx-auto block h-11 px-5 mt-2  w-full" type="text" placeholder="Name" id="name" />
                    <p class={`${name && 'hidden'} text-red-600 text-semibold text-base mt-2`} >*Please fill up name</p>
                </div>
                <div class="flex mt-4 items-center "><p class="text-slate-600 text-base font-semibold">Sectors:</p>
                    <select onChange={e => setSector(e.target.value)} class="sm:ml-5 ml-2 border border-slate-800 lg:w-60 w-full h-11"> <option>Manufacturing</option>
                        <option>Contruction materials</option>
                        <option>Electronics and Optics</option>
                        <option>Food and Beverage</option>
                        <option>Bakery &amp; confectionery products</option>
                        <option>Beverage</option>
                        <option>Fish &amp; fish products</option>
                        <option>Meat &amp; meat products</option>
                        <option>Milk &amp; dairy products</option>
                        <option>Other</option>
                        <option>Sweet &amp; sback food</option>
                        <option>Furniture</option>
                        <option>Bathroom/sauna</option>
                        <option>Bedroom</option>
                        <option>Children's room</option>
                        <option>Kitchen</option>
                        <option>Living room</option>
                        <option>Office</option>
                        <option>Other (furniture)</option>
                        <option>Outdoor</option>
                        <option>Project furniture</option>
                        <option>Machinery</option>
                        <option>Machinery components</option>
                        <option>Machinery equipments/tools</option>
                        <option>Manufracture of Machinery</option>
                        <option>Maritime</option>
                        <option>Aluminium and steel workboats</option>
                        <option>Boat/Yacht building</option>
                        <option>Ship repair and conversion</option>
                        <option>Metal structures</option>
                        <option>Other</option>
                        <option>Reoair and maintanence service</option>
                        <option>Metalworking</option>
                        <option>Construction of metal structures</option>
                        <option>Houses and buildings</option>
                        <option>Metal products</option>
                        <option>Metal works</option>
                        <option>CNC-machining</option>
                        <option>Forgings, Fasteners</option>
                        <option>Gas, Plasma, laser cutting</option>
                        <option>MIG, TIG, Aluminium welding</option>
                        <option>Plastic and Rubber</option>
                        <option>Packeging</option>
                        <option>Plastic goods</option>
                        <option>Plastic welding and processing </option>
                        <option>Plastic profiles</option>
                        <option>Printing</option>
                        <option>Advertising</option>
                        <option>Books/periodicals printing</option>
                        <option>Labeling and packaging printing</option>
                        <option>Textile and Clothing</option>
                        <option>Clothing</option>
                        <option>Textile</option>
                        <option>Wood</option>
                        <option>Other(Wood)</option>
                        <option>Wooden building materials</option>
                        <option>Wooden houses</option>
                        <option>Other</option>
                        <option>Creative industries</option>
                        <option>Energy technology</option>
                        <option>Environment</option>
                        <option>Service</option>
                        <option>Business Services</option>
                        <option>Engineering</option>
                        <option>Information Technology and Telecommunications</option>
                        <option>Data processing, web portals, E-marketing</option>
                        <option>Programming, consultancy</option>
                        <option>Software, Hardware</option>
                        <option>Telecommunications</option>
                        <option>Tourism</option>
                        <option>Translation services</option>
                        <option>Transport and Logistics</option>
                        <option>Air</option>
                        <option>Rail</option>
                        <option>Road</option>
                        <option>Water</option>
                    </select>
                </div>
                <p class={`${sector && 'hidden'} text-red-600 text-semibold text-base mt-2`}>*Please select a sector</p>

                <div class="mt-4 flex items-center gap-2">
                    <input onClick={() => setCondition(!condition)} class="hidden" role="button" type="checkbox" id="agree" />
                    <div class={`${condition ? 'w-5 h-5 rounded-[3px] border border-blue-600 flex justify-center items-center bg-blue-500' : 'w-5 h-5 rounded-[3px] border border-blue-600 flex justify-center items-center bg-transparent'}`}>
                        <span class={`text-black ${condition ? 'text-white' : 'hidden'}  `}>✓</span>
                    </div>
                    <label role="button" class="text-base text-slate-800 font-semibold" for="agree">Agree to terms</label>
                </div>
                <p class={`${condition && 'hidden'}  text-red-600 text-semibold text-base mt-2`}>*You need to agree the terms and conditions</p>
                <div class="flex sm:flex-row flex-col justify-between items-center mt-4">
                    <button class="px-6 py-2  border border-slate-800 font-bold rounded hover:bg-slate-800 hover:text-white">Save</button>
                    <p class="mt-4 sm:mt-0">Result saved <Link to="/result">
                        <span class="underline hover:text-blue-500 font-semibold">click here to see the result</span></Link>
                    </p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Home;