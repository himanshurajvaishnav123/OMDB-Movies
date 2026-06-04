import React from 'react';


function Navbar({totalResults}) {
  return (
    <div className="h-16 px-8 flex justify-between items-center rounded-lg bg-[#0f172a] ">
      <div>
        <h1 className="font-bold text-[#e11d48] text-xl">🍿HRV Movies</h1>
        
      </div>
     

      <div className="font-bold text-indigo-100 text-lg">
        Showing 10 out of {totalResults}
      </div>
    </div>
  );
}

export default Navbar;