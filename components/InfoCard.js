import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React from "react";

function InfoCard({ name, imageUrl, price }) {
  return (
    <div className="flex py-7 px-2 border-b hover:cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t">
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <img src={imageUrl} alt={name} className="rounded-lg object-cover" />
      </div>

      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <h4 className="text-xl">{name}</h4>
          <HeartIcon className="h-7 hover:cursor-pointer" />
        </div>

        <div className="border-b w-10 pt-2 "/>

        <div className="flex justify-between items-end pt-5">
            <p className="flex items-center "><StarIcon className="h-5 text-red-500"/></p>

            <div >
                <p className="text-lg font-semibold pb-2 lg:text-2xl">${price}</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
