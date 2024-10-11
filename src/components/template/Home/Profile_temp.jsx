
import React from 'react';
import profile_img from '../../../assets/images/profile_img.png'
const Profile_temp = () => {
    return (
        <div>
            <p className='font-roboto text-xs text-center p-2 '>profile</p>

            <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <div className='p-[2px] rounded-full'>
                    <img src={profile_img} 
                    alt="img" className='rounded-full size-[51px]'/>
                    </div>

                    <div className="">
                        <p>Name</p>
                        <p>@userName</p>
                    </div>



                </div>

                <div className="w-fit h-fit p-[2px] border">
                    <p className='px-5 py-[2px]'>Edit</p>
                </div>

                

            </div>

            <div className="flex flex-col gap-2 mt-5">
                    <div className="flex justify-between items-center gap-1 h-10">
                        <input type="text" className='flex[-14] h-full px-2 py-1 rounded-l-lg outline-none' placeholder='@Twitter' />
                        <div className="flex-[2] bg-red-500 h-full">
                            <div className='bg-black w-full h-full rounded-r-lg flex justify-center items-center'>
                                <p>{'✔'}</p>
                            </div>
                        </div>
                    </div>
            </div>

            <div className="flex flex-col gap-2 mt-5">
                    <div className="flex justify-between items-center gap-1 h-10">
                        <input type="text" className='flex[-14] h-full px-2 py-1 rounded-l-lg outline-none' placeholder='@Twitter' />
                        <div className="flex-[2] bg-red-500 h-full">
                            <div className='bg-black w-full h-full rounded-r-lg flex justify-center items-center'>
                                <p>{'✔'}</p>
                            </div>
                        </div>
                    </div>
            </div>

            <div className="flex flex-col gap-2 mt-5">
                    <div className="flex justify-between items-center gap-1 h-10">
                        <input type="text" className='flex[-14] h-full px-2 py-1 rounded-l-lg outline-none' placeholder='@Twitter' />
                        <div className="flex-[2] bg-red-500 h-full">
                            <div className='bg-black w-full h-full rounded-r-lg flex justify-center items-center'>
                                <p>{'✔'}</p>
                            </div>
                        </div>
                    </div>
            </div>

            <div className="flex flex-col gap-2 mt-5">
                    <div className="flex justify-between items-center gap-1 h-10">
                        <input type="text" className='flex[-14] h-full px-2 py-1 rounded-l-lg outline-none' placeholder='@Twitter' />
                        <div className="flex-[2] bg-red-500 h-full">
                            <div className='bg-black w-full h-full rounded-r-lg flex justify-center items-center'>
                                <p>{'✔'}</p>
                            </div>
                        </div>
                    </div>
            </div>

        </div>


    );
};

export default Profile_temp;