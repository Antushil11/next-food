import React from 'react';

const getFoods = async () =>{
    const res = await fetch(" https://taxi-kitchen-api.vercel.app/api/v1/foods/random")
    
    const data = await res.json();
    return data.foods || []
}

const Foods = async () => {

    const food =await getFoods();
    return (
        <div>
            Food {food.length} Found
        </div>
    );
};

export default Foods;