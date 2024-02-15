const Header = () => {
  return (
    <>
      <div className="px-11 pt-3 p-1 flex items-center justify-between bg-gray-100 text-gray-800 font-bold font-mono max-md:text-[14px]">
        <div className="flex items-center gap-3">
          <div>
            <img style={{width:"25px", borderRadius : "25%"}} src="logoo.jpg" alt="logo of website" />
          </div>
          <h1>SUPREME-SHOP</h1>
        </div>

        <ul className="flex gap-12 text-lg ">
          <li>PRODUCTS</li>
          <li>ABOUT</li>
          <li>CAMPAIGNS!</li>
          <li>CHART</li>
        </ul>
      </div>

      <div className="flex">
        <div className=" h-2 w-[35vw] bg-[#F01D7C]"></div>
        <div className="h-2 w-[25vw] bg-green-500"></div>
        <div className="h-2 w-[20vw] bg-blue-400"></div>
        <div className="h-2 w-[15vw] bg-purple-500"></div>
        <div className="h-2 w-[15vw] bg-[#3b2388]"></div>
      </div>
    </>
  );
};

export default Header;
