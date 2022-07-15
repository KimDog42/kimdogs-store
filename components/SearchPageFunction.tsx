import React from 'react';
import { Grid, Input, Loading } from '@nextui-org/react';

function SearchPageFunction() {
  return (
    <div>
        <div>
            <h2 className="font-bold text-2xl flex justify-center">Search Page</h2>
            <h2 className="flex justify-center font-semibold text-2xl">Use the Search Bar below to begin your Search!</h2>
        </div>

        <div className="flex justify-center pt-40 font-bold">
          <Input
            clearable
            size="xl"
            bordered
            color="invert"
            labelPlaceholder="Search KimDog.Store"
            contentRight={<Loading size="md" color="success" />}/>
        </div>

        <div className="flex justify-center pt-10 text-2xl font-semibold">
            <h2>Related Search Results Will Go Below This Message!</h2>
        </div>
    </div>
  )
}

export default SearchPageFunction