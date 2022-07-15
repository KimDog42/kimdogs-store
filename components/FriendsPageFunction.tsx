import React from 'react'

function FriendsPageFunction() {
  return (
    <div>
        <div>
  <div className="max-w-sm bg-white rounded-lg overflow-hidden shadow-lg">
    <div className="bg-cover h-40"></div>
    <div className="border-b px-4 pb-6">
        <div className="items-center sm:text-left sm:flex mb-4">
            <img className="h-32 w-32 rounded-full border-4 border-white -mt-16 mr-4" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/d13ba675122137.5c44239685eb3.gif" alt=""/>
            <div className="py-2">
                <h3 className="font-bold text-2xl mb-1">KimDog</h3>
                <div className="inline-flex text-grey-dark sm:flex items-center">
                    <svg className="h-5 w-5 text-grey mr-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path class="heroicon-ui" d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>
                    Derbyshire, UK
                </div>
            </div>
        </div>
        <div className="flex">
            <button className="flex-1 rounded-full bg-blue-500 text-white antialiased font-bold hover:bg-blue-dark px-4 py-2 mr-2">Follow</button>
            <button className="flex-1 rounded-full border-2 border-grey font-semibold text-black px-4 py-2">Message</button>
        </div>
        
        </div>
    </div>
</div>

    </div>
  )
}

export default FriendsPageFunction