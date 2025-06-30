function Banner() {
  return (
    <div
      className="w-full h-[700px] bg-[url('/banner.png')] 
    bg-center bg-no-repeat bg-cover relative"
    >
      <div
        className="w-full h-full absolute top-0 left-0 
      opacity-30 bg-black"
      />
      <div
        className="w-full h-full flex items-center
      justify-center space-x-[30px] p-4 relative z-20"
      >
        <div>
          <p
            className="text-white bg-gradient-to-r 
            from-red-600 to-white py-2 px-3 text-md"
          >
            TV Show
          </p>
          <div className="flex flex-col space-y-4">hhhh</div>
        </div>
        <div>image</div>
      </div>
    </div>
  );
}

export default Banner;
