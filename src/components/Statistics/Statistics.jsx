import { PieChart } from 'react-minimal-pie-chart';
import { getStoredDonation } from '../../utility/localStorage';
import React, { PureComponent } from 'react';

const Statistics = () => {
    const donated = getStoredDonation();
    const length = donated.length;

    return (
        <div>
            <div className='w-full md:w-1/2 lg:w-1/3 mx-auto px-2'>
                <h1 className='text-center font-semibold'>Pie Chart</h1>
                <PieChart
                data={[   
                    { title: 'Your donation', value: length, color: '#00C49F' },
                    { title: 'Total donation', value: 12, color: '#FF444A' },
                    ]}
                    label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} %`}
                />;
            </div>

            <div className='flex gap-4 justify-center flex-col md:flex-row'>
                    <div className='flex gap-2 items-center'>
                        <p>Your Donation</p>
                        <div className='bg-[#00C49F]  h-3 w-20'></div>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <p>Total Donation</p>
                        <div className='bg-[#FF444A] h-3 w-20'></div>
                    </div>
                </div>
        </div>
    );
};

export default Statistics;
