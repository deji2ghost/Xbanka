import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

interface ItemsProps{
    step: string;
    image: string;
    header: string;
    body: string;
}

interface CarouselCustomProps {
    items: ItemsProps[]
}

export function CarouselCustom({items}: CarouselCustomProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  // Update current index on carousel selection
  React.useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Autoplay logic
  React.useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000); // 4 seconds

    return () => clearInterval(interval);
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: "center",
        loop: true,
      }}
      className="w-full max-w-4xl"
    >
      <CarouselContent>
        {items.map((item, index) => {
          const isActive = index === current;
          return (
            <CarouselItem
              key={index}
              className="basis-1/3 w-[219.77px] transition-transform duration-300"
            >
              <div className="p-2 w-full h-full">
                <div
                  className={cn(
                    "transition-all duration-300",
                    isActive ? "scale-110 shadow-xl" : "scale-95 opacity-70"
                  )}
                >
                  <div className="flex aspect-square items-start justify-center text-3xl font-bold">
                    <img className="w-full" src={item.image} alt={item.step}/>
                  </div>
                </div>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
