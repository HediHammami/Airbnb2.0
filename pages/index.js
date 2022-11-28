import Head from "next/head";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import MeduimCard from "../components/MeduimCard";
import SmallCard from "../components/SmallCard";

export default function Home({ exploreData }) {
  return (
    <div>
      <Head>
        <title>Airbnb 2.0</title>
      </Head>

      <Header />

      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          {/**Data maping */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData.map(({ name, imageUrl, id }) => (
              <SmallCard key={id} imageUrl={imageUrl} name={name} />
            ))}
          </div>
          {/** */}
        </section>

        <section className="">
          <h2 className="text-4xl font-semibold pb-5">Live Anywhere</h2>
          {/** */}
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {exploreData.map(({ name, imageUrl, id }) => (
              <MeduimCard key={id} imageUrl={imageUrl} name={name} />
            ))}
          </div>
          {/** */}
        </section>

        <section>
          <LargeCard
            img="https://links.papareact.com/4cj"
            title="The Greatest Outdoors"
            desc="Wishlist curated by Airbnb"
            btnTxt="Get Inspired"
          />
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    "https://cdn.rawgit.com/abbassiddiqi/airbnb-api/bbd1300a/flats.json"
  );
  let exploreData = await res.json();

  return {
    props: {
      exploreData,
    },
  };
};
