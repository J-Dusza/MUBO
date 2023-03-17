import MainBannerCarousel from "@/components/Carousel/MainBannerCarousel";
import CenterLinkImageCard from "@/components/Cards/CenterLinkImageCard";
import GenderCard from "@/components/Cards/GenderCard";
import TextZoomCard from "@/components/Cards/TextZoomCard";

const Home = () => {
  return (
    <div>
      <MainBannerCarousel />
      <section className="py-20">
        <div className="flex flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-8  mx-auto px-5 sm:px-8 max-w-7xl">
          <TextZoomCard
            imgUrl="/new.jpg"
            className="w-full sm:w-1/3"
            displayedText="new items"
          />
          <GenderCard
            imgUrl="/field1.jpg"
            className="w-full sm:w-2/3 aspect-video"
          />
        </div>
        <h2 className="uppercase text-center text-4xl font-extrabold tracking-wider py-16 font-logo">
          shop by category
        </h2>

        <div className="flex flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-8  mx-auto px-5 sm:px-8 max-w-7xl">
          <CenterLinkImageCard
            className="sm:w-1/3 w-full"
            name="shoes"
            href="/"
            imgUrl="/shoes.jpg"
          />
          <CenterLinkImageCard
            className="sm:w-1/3 w-full"
            name="clothes"
            href="/"
            imgUrl="/clothes.jpg"
          />
          <CenterLinkImageCard
            className="sm:w-1/3 w-full"
            name="accessories"
            href="/"
            imgUrl="/accessories.jpg"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
