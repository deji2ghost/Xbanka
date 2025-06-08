import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import GiftCards from "../ui/giftCards";

interface CarouselData {
  image: string,
  text: string
}

interface CarouselProps{
  data: CarouselData[]
}

export function CarouselDemo({data}: CarouselProps) {

    const carouselRef = React.useRef<CarouselApi | null>(null);

  React.useEffect(() => {
    if (!carouselRef.current) return;

    const interval = setInterval(() => {
      carouselRef.current?.scrollNext();
    }, 3000); 

    return () => clearInterval(interval);
  }, []);
  return (
    <Carousel
      className="w-full max-w-xs"
      opts={{
        loop: true, // 🔁 Infinite scrolling enabled
      }}
    >
      <CarouselContent>
        {data.map((item: CarouselData, index: number) => (
          <CarouselItem key={index}>
            <GiftCards
              key={index}
              Icon={<div className="w-[22.36px] overflow-hidden h-[27.49px] object-contain flex items-center"><img src={item?.image} loading="lazy" className="w-full" alt={item?.text} /></div>}
              text={item?.text}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";

// export function CarouselLayout({carouselContent}) {
//   return (
//     <Carousel
//       className="w-full max-w-xs"
//       opts={{
//         loop: true, // 🔁 Infinite scrolling enabled
//       }}
//     >
//       <CarouselContent>
//         {Array.from({ length: 5 }).map((_, index) => (
//           <CarouselItem key={index}>
//             { carouselContent }
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//       <CarouselPrevious />
//       <CarouselNext />
//     </Carousel>
//   );
// }
