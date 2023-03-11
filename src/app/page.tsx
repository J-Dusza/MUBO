import MainBannerCarousel from "@/components/Carousel/MainBannerCarousel";
import Image from "next/image";
import CenterLinkImageCard from "@/components/Cards/CenterLinkImageCard";

const Home = () => {
  return (
    <div>
      <MainBannerCarousel />
      <section>
        <div className=""></div>
        <h2 className="uppercase text-center text-4xl font-extrabold tracking-wider py-16 font-logo">
          shop by category
        </h2>
        <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-8  mx-auto px-8 max-w-7xl">
          <CenterLinkImageCard
            className="md:w-1/3 w-full"
            name="shoes"
            imgUrl="/shoes.jpg"
          />
          <CenterLinkImageCard
            className="md:w-1/3 w-full"
            name="clothes"
            imgUrl="/clothes.jpg"
          />
          <CenterLinkImageCard
            className="md:w-1/3 w-full"
            name="accessories"
            imgUrl="/accessories.jpg"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
