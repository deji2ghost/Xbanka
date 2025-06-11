
interface BlogcardProps{
    image: string,
    title: string,
    body: string
    name: string, 
    date: string, 
    readTime: string 
}

const Blogcard: React.FC<BlogcardProps> = ({image, title, body, name, date, readTime}) => {
  return (
    <div className="w-[370px] rounded-[7.65px] p-[22.95px] flex flex-col gap-[15.3px]">
      <div><img src={image} loading="lazy" alt={title} /></div>
      <div className="flex items-center gap-[11.48px] text-subCyan text-[12px] font-[600] leading-[18.74px]">
        <p>{name}</p>
        <div className="w-[0.96px] h-full bg-subCyan"></div>
        <p>{date}</p>
        <div className="w-[0.96px] h-full bg-subCyan"></div>
        <p>{readTime}</p>
      </div>
      <div className="font-[600] text-[20px] leading-[28px]">{title}</div>
      <p className="font-[400] text-[14px] leading-[19.6px]">{body}</p>
    </div>
  )
}

export default Blogcard
