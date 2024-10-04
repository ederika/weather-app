import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import moment from 'moment-timezone';
import Address from '../logic/Address';

const NavBar: React.FC<Address> = ({ city, continent }) => {
    const [currentDate, setCurrentDate] = useState<string>();

    useEffect(() => {
        setCurrentDate(moment().tz(`${continent}/${city}`).format('ddd, D MMMM, HH:mm'));
    }, [continent, city]);

    return (
        <div className="mx-auto flex max-w-[1280px] px-2 xl:px-0 items-center justify-between py-4 pb-8">
            <h1 className="border-b-2 border-b-black text-xl font-light text-black md:text-4xl">Weather forecast</h1>
            <p className=" md:text-2xl px-2 rounded-md border border-black bg-white bg-opacity-70 text-xl font-light text-black">
                {currentDate}
            </p>
        </div>
    );
};

export default NavBar;
