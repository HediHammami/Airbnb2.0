import { useRouter } from "next/router";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import moment from 'moment';
import InfoCard from "../components/InfoCard";

function search({searchResult}) {
    const router = useRouter()
      const {location , startDate , endDate , guestNumber} = router.query
        const formatedStartDate = moment(startDate).format("MMM Do YY")
        const formatedEndDate = moment(endDate).format("MMM Do YY")
      const range = `${formatedStartDate} - ${formatedEndDate}`
  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${guestNumber} guests` }/>

      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">300+ stays - {range} - for {guestNumber} of guests</p>

          <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">
              Cancellation Flexibility
            </p>
            <p className="button">
              Type of Place
            </p>
            <p className="button">
              Price
            </p>
            <p className="button">
              Room and Beds
            </p>
            <p className="button">
              More Filters
            </p>
          </div>
            
            <div className="flex flex-col">
                    {/**Data pulling */}
              {searchResult?.map(({ name, imageUrl, id , price}) => (
                <InfoCard key={id} imageUrl={imageUrl} name={name} price={price}/>
              ))}
              {/** */}
            </div>

        </section>
      </main>

      <Footer />
    </div>
  );
}

export default search;


export async function getServerSideProps() {
    const searchResult = await fetch('https://cdn.rawgit.com/abbassiddiqi/airbnb-api/bbd1300a/flats.json').then(res => res.json())
    return {
        props : {
            searchResult
        }
    }
}