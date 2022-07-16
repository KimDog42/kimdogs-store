import React from 'react';
import { Collapse, Text, Switch, Checkbox, Input, Spacer } from "@nextui-org/react";

function MarketplaceSidebar() {
  return (
    <div className="bg-black w-50">
      <h1 className="flex justify-center text-white font-bold text-3xl">Marketplace</h1>
        <div className="absolute top-20 left-0 pl-5 pt-3 overflow-scroll h-full scrollbar-hide">

            <h2 className="text-white bg-balck text-2xl font-bold">Category</h2>
            <h2 className="text-white">(Scroll to see more Filters!)</h2>
          
            <div className="pt-7">
            <Input
              clearable
              underlined
              labelPlaceholder="Search Marketplace Filters"
              status="primary"
            />
            </div>


            <h2 className="text-white bg-balck text-2xl font-bold pt-4">Colour</h2>
            <div className="flex flex-col">
            <Checkbox defaultSelected={false} color="gradient" labelColor="primary">Black</Checkbox>
            <Checkbox defaultSelected={false} color="gradient" labelColor="primary">Blue</Checkbox>
            <Checkbox defaultSelected={false} color="gradient" labelColor="primary">Green</Checkbox>
            <Checkbox defaultSelected={false} color="gradient" labelColor="primary">Grey</Checkbox>
            <Checkbox defaultSelected={false} color="gradient" labelColor="primary">Red</Checkbox>
            <Checkbox defaultSelected={false} color="gradient" labelColor="primary">Silver</Checkbox>
            <Checkbox defaultSelected={false} color="gradient" labelColor="primary">White</Checkbox>
            <Checkbox defaultSelected={false} color="gradient" labelColor="primary">Yellow</Checkbox>
            <Checkbox defaultSelected={false} color="gradient" labelColor="primary">Gold</Checkbox>
            <Checkbox defaultSelected={false} color="gradient" labelColor="primary">Clear</Checkbox>
            <Checkbox defaultSelected={false} color="gradient" labelColor="primary">Multicoloured</Checkbox>
            <Checkbox defaultSelected={false} color="gradient" labelColor="primary">Pink</Checkbox>
            <Checkbox defaultSelected={false} color="gradient" labelColor="primary">Purple</Checkbox>
            <Checkbox defaultSelected={false} color="gradient" labelColor="primary">Brown</Checkbox>
            <Checkbox defaultSelected={true} color="gradient" labelColor="primary">Not Specified</Checkbox>
            </div>

            <h2 className="text-white bg-balck text-2xl font-bold pt-4">Condition</h2>
            <div className="flex flex-col">
            <Checkbox defaultSelected={false} color="gradient" labelColor="primary">New</Checkbox>
            <Checkbox defaultSelected={false} color="gradient" labelColor="primary">used</Checkbox>
            <Checkbox defaultSelected={true} color="gradient" labelColor="primary">Not Specified</Checkbox>
            </div>

            <h2 className="text-white bg-balck text-2xl font-bold pt-4">Delivery Options</h2>
            <div className="flex flex-col">
            <Checkbox defaultSelected={false} color="gradient" labelColor="primary">Free P&P</Checkbox>
            <Checkbox defaultSelected={true} color="gradient" labelColor="primary">Not Specified</Checkbox>
            </div>

            <h2 className="text-white bg-balck text-2xl font-bold pt-4">Show Only</h2>
            <div className="flex flex-col">
            <Checkbox defaultSelected={false} color="gradient" labelColor="primary">Free Returns</Checkbox>
            <Checkbox defaultSelected={false} color="gradient" labelColor="primary">Returns Accepted</Checkbox>
            <Checkbox defaultSelected={false} color="gradient" labelColor="primary">Authorised Seller</Checkbox>
            <Checkbox defaultSelected={false} color="gradient" labelColor="primary">Completed Items</Checkbox>
            <Checkbox defaultSelected={false} color="gradient" labelColor="primary">Sold Items</Checkbox>
            <Checkbox defaultSelected={false} color="gradient" labelColor="primary">Deals & Savings</Checkbox>
            <Checkbox defaultSelected={false} color="gradient" labelColor="primary">Sale Itmes</Checkbox>
            <Checkbox defaultSelected={false} color="gradient" labelColor="primary">Listed As Lots</Checkbox>
            <Checkbox defaultSelected={false} color="gradient" labelColor="primary">Search In Description</Checkbox>
            <Checkbox defaultSelected={false} color="gradient" labelColor="primary">Benefits Charity</Checkbox>
            <Checkbox defaultSelected={false} color="gradient" labelColor="primary">Authenticity Guarantee</Checkbox>
            <Checkbox defaultSelected={false} color="gradient" labelColor="primary">Brand Outlet</Checkbox>
            </div>

            <h2 className="text-white bg-balck text-2xl font-bold pt-4">Finish</h2>
            <div className="flex flex-col">
            <Checkbox defaultSelected={false} color="gradient" labelColor="primary">Carbon Fibre Texture</Checkbox>
            <Checkbox defaultSelected={false} color="gradient" labelColor="primary">Glossy</Checkbox>
            <Checkbox defaultSelected={false} color="gradient" labelColor="primary">Matte</Checkbox>
            <Checkbox defaultSelected={false} color="gradient" labelColor="primary">Metallic</Checkbox>
            <Checkbox defaultSelected={true} color="gradient" labelColor="primary">Not Specified</Checkbox>
            </div>

            <h2 className="text-white bg-balck text-2xl font-bold pt-4">Personalise</h2>
            <div className="flex flex-col">
            <Checkbox defaultSelected={false} color="gradient" labelColor="primary">Yes</Checkbox>
            <Checkbox defaultSelected={false} color="gradient" labelColor="primary">No</Checkbox>
            <Checkbox defaultSelected={true} color="gradient" labelColor="primary">Not Specified</Checkbox>
            </div>

            <h2 className="text-white bg-balck text-2xl font-bold pt-4">Type</h2>
            <div className="flex flex-col">
            <Checkbox defaultSelected={false} color="gradient" labelColor="primary">Adhesive</Checkbox>
            <Checkbox defaultSelected={false} color="gradient" labelColor="primary">Bonnet Mascot</Checkbox>
            <Checkbox defaultSelected={false} color="gradient" labelColor="primary">Bumper Sticker</Checkbox>
            <Checkbox defaultSelected={false} color="gradient" labelColor="primary">Decal</Checkbox>
            <Checkbox defaultSelected={false} color="gradient" labelColor="primary">Graphic</Checkbox>
            <Checkbox defaultSelected={false} color="gradient" labelColor="primary">JDM Sticker</Checkbox>
            <Checkbox defaultSelected={false} color="gradient" labelColor="primary">Reflective Tape</Checkbox>
            <Checkbox defaultSelected={false} color="gradient" labelColor="primary">Stickerbomb</Checkbox>
            <Checkbox defaultSelected={false} color="gradient" labelColor="primary">Tattoo</Checkbox>
            <Checkbox defaultSelected={false} color="gradient" labelColor="primary">Transformers</Checkbox>
            <Checkbox defaultSelected={true} color="gradient" labelColor="primary">Not Specified</Checkbox>
            </div>

            <h2 className="text-white bg-balck text-2xl font-bold pt-4">Theme</h2>
            <div className="flex flex-col">
            <Checkbox defaultSelected={false} color="gradient" labelColor="primary">Animal</Checkbox>
            <Checkbox defaultSelected={false} color="gradient" labelColor="primary">Australia</Checkbox>
            <Checkbox defaultSelected={false} color="gradient" labelColor="primary">Baby</Checkbox>
            <Checkbox defaultSelected={false} color="gradient" labelColor="primary">Butterfly</Checkbox>
            <Checkbox defaultSelected={false} color="gradient" labelColor="primary">Disabled Badge</Checkbox>
            <Checkbox defaultSelected={false} color="gradient" labelColor="primary">Family</Checkbox>
            <Checkbox defaultSelected={false} color="gradient" labelColor="primary">Flag</Checkbox>
            <Checkbox defaultSelected={false} color="gradient" labelColor="primary">Flames</Checkbox>
            <Checkbox defaultSelected={false} color="gradient" labelColor="primary">Flower</Checkbox>
            <Checkbox defaultSelected={false} color="gradient" labelColor="primary">France</Checkbox>
            <Checkbox defaultSelected={false} color="gradient" labelColor="primary">Germany</Checkbox>
            <Checkbox defaultSelected={false} color="gradient" labelColor="primary">Iron Cross</Checkbox>
            <Checkbox defaultSelected={false} color="gradient" labelColor="primary">Italy</Checkbox>
            <Checkbox defaultSelected={false} color="gradient" labelColor="primary">Logo</Checkbox>
            <Checkbox defaultSelected={false} color="gradient" labelColor="primary">Minions</Checkbox>
            <Checkbox defaultSelected={false} color="gradient" labelColor="primary">Motocross</Checkbox>
            <Checkbox defaultSelected={false} color="gradient" labelColor="primary">Motorsport</Checkbox>
            <Checkbox defaultSelected={false} color="gradient" labelColor="primary">Name</Checkbox>
            <Checkbox defaultSelected={false} color="gradient" labelColor="primary">Nurburgring</Checkbox>
            <Checkbox defaultSelected={false} color="gradient" labelColor="primary">oldschool</Checkbox>
            <Checkbox defaultSelected={false} color="gradient" labelColor="primary">Racing Stripes</Checkbox>
            <Checkbox defaultSelected={false} color="gradient" labelColor="primary">Rings</Checkbox>
            <Checkbox defaultSelected={false} color="gradient" labelColor="primary">R-Line Emblem</Checkbox>
            <Checkbox defaultSelected={false} color="gradient" labelColor="primary">Shocker</Checkbox>
            <Checkbox defaultSelected={false} color="gradient" labelColor="primary">Skull And Crossbones</Checkbox>
            <Checkbox defaultSelected={false} color="gradient" labelColor="primary">Slogan</Checkbox>
            <Checkbox defaultSelected={false} color="gradient" labelColor="primary">Spain</Checkbox>
            <Checkbox defaultSelected={false} color="gradient" labelColor="primary">Sponsor</Checkbox>
            <Checkbox defaultSelected={false} color="gradient" labelColor="primary">Sticker Bomb</Checkbox>
            <Checkbox defaultSelected={false} color="gradient" labelColor="primary">Surf</Checkbox>
            <Checkbox defaultSelected={false} color="gradient" labelColor="primary">UK</Checkbox>
            <Checkbox defaultSelected={false} color="gradient" labelColor="primary">USA</Checkbox>
            <Checkbox defaultSelected={false} color="gradient" labelColor="primary">Viper Stripes</Checkbox>
            <Checkbox defaultSelected={true} color="gradient" labelColor="primary">Not Specified</Checkbox>
            </div>
        </div>
    </div>
  )
}

export default MarketplaceSidebar