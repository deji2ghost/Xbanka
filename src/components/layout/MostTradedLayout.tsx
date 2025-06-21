import GiftCards from "../ui/giftCards";

interface GiftCardItemProps {
  index: number;
  image: string;
  text: string;
  color: string;
}

const MostTradedLayout: React.FC<GiftCardItemProps> = ({ index, image, text, color }) => {
  return (
    <div style={{
    marginLeft: window.innerWidth >= 768 ? `${index * 56}px` : undefined,
  }} className="flex items-center gap-4">
      <div className="w-[56px] h-[56px] p-2 bg-deepBlue text-black text-sm font-bold flex items-center justify-center rounded-[8px]">
        <p className={`${color} w-full h-full flex items-center justify-center rounded-full text-center`}>
        {index + 1}
        </p>
      </div>
      <GiftCards key={index} Icon={ <img src={image} loading="lazy" alt={text} className="w-5 h-5" /> } text={text} />
    </div>
  )
}

export default MostTradedLayout
