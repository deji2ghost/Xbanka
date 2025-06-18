import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Card from "../ui/card";

interface UserSayingProps {
  image: string;
  userName: string;
  userHandle: string;
  tweet: string;
}

interface CustomCarouselProps {
  items: UserSayingProps[];
}

function CustomCarousel({ items }: CustomCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  // Autoplay
  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      if (emblaApi.canScrollNext()) emblaApi.scrollNext();
      else emblaApi.scrollTo(0); // loop back to start manually if needed
    }, 3000);

    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <div ref={emblaRef} className="overflow-hidden max-w-4xl mx-auto">
      <div className="flex w-[1050px] py-4 gap-[20px]">
        {items.map((item, index) => (
            <Card
            key={index}
              className="w-[218px] p-2 gap-3 rounded-[8px] border shrink-0 grow-0"
              paragraph={item.tweet}
              image={item.image}
              userHandle={item.userHandle}
              userName={item.userName}
            />
        ))}
      </div>
    </div>
  );
}

export default React.memo(CustomCarousel);