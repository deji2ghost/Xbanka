import SubHeader from "@/components/layout/subHeader"
import BoxHeader from "@/components/ui/boxHeader"
import Card from "@/components/ui/card"
import { UserSaying } from "@/lib/data"

const UsersSaying = () => {
  return (
    <div className="px-[120px] pt-[148px] pb-[46px] flex flex-col gap-[48px]">
      <div className="flex flex-col gap-[24px]">
        <BoxHeader text="20K + HAPPY USERS" />
        <SubHeader text="What our users are saying"/>
      </div>
      <div className="w-full flex items-start gap-[40px]">
        {
          UserSaying.map((item, index) => {
            return(
              <Card
              className="w-[218px] p-4 gap-4 rounded-[8px]"
              key={index}
              paragraph={item.tweet}
              image={item.image}
              userHandle={item.userHandle}
              userName={item.userName}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default UsersSaying
