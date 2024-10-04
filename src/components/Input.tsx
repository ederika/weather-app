import { FaLocationCrosshairs } from 'react-icons/fa6';
import { CiSearch } from 'react-icons/ci';
import getCity from '../logic/getCity';
import Address from '../logic/Address';
import { useState } from 'react';
import getAddressByInput from '../logic/getAddressByInput';

interface InputProps {
    address?: Address;
    onUpdateAddress: (newAddress: Address) => void;
}

const Input: React.FC<InputProps> = ({ address, onUpdateAddress }) => {
    const [inputValue, setInputValue] = useState<string>('');

    const handleClick = () => {
        getCity().then((data) => {
            if (data) {
                onUpdateAddress(data);
            }
        });
    };

    const handleLocationChange = () => {
        getAddressByInput(inputValue).then((data) => {
            if (data) {
                onUpdateAddress(data);
            }
        });
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    return (
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-2 xl:px-0">
            <div className="flex items-center gap-2">
                <div className="relative flex items-center">
                    <input
                        className="rounded-md border border-black pl-10 xl:text-3xl text-xl font-light text-black opacity-80"
                        type="text"
                        value={inputValue}
                        placeholder={address?.city}
                        onChange={handleInputChange}
                    />
                    <button
                        className="rounded-md bg-black bg-opacity-60 xl:p-2 p-1 text-sm font-normal text-white hover:bg-opacity-80"
                        onClick={handleLocationChange}
                    >
                        Search
                    </button>
                    <CiSearch className="absolute size-8 text-black" />
                </div>
                <FaLocationCrosshairs
                    className="size-8 text-black text-opacity-60 hover:text-opacity-100"
                    onClick={handleClick}
                />
            </div>
        </div>
    );
};

export default Input;
