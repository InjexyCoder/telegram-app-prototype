import React from 'react';
import Profile_Temp from '../components/template/Home/Profile_temp';
import Leaderboard from '../components/template/Home/leaderboard';



const Home = () => {
    return (
        <div className='min-h-screen bg-[#000] p-5'>
            <Profile_Temp/>
            <Leaderboard/>
        </div>
    );
};

export default Home;