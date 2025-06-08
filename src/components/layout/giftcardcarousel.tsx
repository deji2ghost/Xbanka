import blurBG from "@/assets/purpleSpread.svg";
import GiftCards from "../ui/giftCards";
import { giftCardsOne, giftCardsTwo } from "@/lib/data";

export default function RotatingCardOrbit() {
  return (
    <div className="relative w-[608px] overflow-hidden">
      <div className="absolute w-full mx-auto top-1/2 -translate-y-1/2">
        <img src={blurBG} className="w-full" alt="blur spread" />
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 flex flex-col gap-12 justify-center">
        <div className="flex items-center">
          {giftCardsOne.map((items, index) => (
            <div className={`${index === 1 ? "relative -mt-16" : ""} "flex items-center"`} key={index}>
              <GiftCards
                key={index}
                Icon={
                  <div className="w-[22.36px] overflow-hidden h-[27.49px] object-contain flex items-center">
                    <img
                      src={items.image}
                      loading="lazy"
                      className="w-full"
                      alt={items.text}
                    />
                  </div>
                }
                text={items.text}
              />
            </div>
          ))}
        </div>
        <div className="flex items-center">
          {giftCardsTwo.map((items, index) => (
            <div className={`${index === 1 ? "relative -mt-16" : ""} "flex items-center"`} key={index}>
              <GiftCards
                key={index}
                Icon={
                  <div className="w-[22.36px] overflow-hidden h-[27.49px] object-contain flex items-center">
                    <img
                      src={items.image}
                      loading="lazy"
                      className="w-full"
                      alt={items.text}
                    />
                  </div>
                }
                text={items.text}
              />
            </div>
          ))}
        </div>
      </div>
      {/* <div className="absolute top-1/2 -translate-y-1/2 flex items-center flex-wrap gap-3 justify-center">
        {giftCardsTwo.map((items, index) => {
        
          return (
            <GiftCards
              key={index}
              Icon={<div className="w-[22.36px] overflow-hidden h-[27.49px] object-contain flex items-center"><img src={items.image} loading="lazy" className="w-full" alt={items.text} /></div>}
              text={items.text}
            />
          );
        })}
      </div> */}
    </div>
  );
}
