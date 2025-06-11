
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
    <div className="w-[396px] rounded-[7.65px] p-[22.95px] flex flex-col gap-[15.3px]">
      <div><img src={image} loading="lazy" alt={title} /></div>
      <div className="flex items-center">
        <p>{name}</p>
        <p>{date}</p>
        <p>{readTime}</p>
      </div>
      <div>{title}</div>
      <p>{body}</p>
    </div>
  )
}

export default Blogcard
