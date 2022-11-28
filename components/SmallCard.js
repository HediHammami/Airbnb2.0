function SmallCard({ name, imageUrl }) {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl hover:cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
      {/**left */}
      <div className="relative h-16 w-16 ">
        <img src={imageUrl} alt={name} layout="fill" className="rounded-lg" />
      </div>

      {/** right */}
      <div className="">
        <h2 className="text-gray-500 ">{name}</h2>
      </div>
    </div>
  );
}

export default SmallCard;
