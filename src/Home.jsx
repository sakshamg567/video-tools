function Home(){
   return (
      <>
         <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 mt-8 max-w-lg">
            <h1 className="text-7xl tracking-normal font-semibold">FrameLabs</h1>
            <p className="flex leading-20 text-lg dark:text-gray-600">
               Amazing Collection Of Video Tools right in your Browser. 
               No Download required! and the best part, all processing takes place in your browser so no video gets uploaded to a server 
            </p>
            <button className=" bg-black text-white pr-5 pl-5 pb-4 pt-4 rounded-md font-semibold ">Explore Available tools</button>
         </div>
         
      </>
   )
}

export default Home;