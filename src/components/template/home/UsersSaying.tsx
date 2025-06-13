import { CustomCarousel } from "@/components/layout/customCarousel";
import SubHeader from "@/components/layout/subHeader";
import BoxHeader from "@/components/ui/boxHeader";
import { UserSaying } from "@/lib/data";

const UsersSaying = () => {
  return (
    <div className="px-[120px] pt-[148px] pb-[46px] flex flex-col gap-[48px]">
      <div className="flex flex-col gap-[24px]">
        <BoxHeader text="20K + HAPPY USERS" />
        <SubHeader text="What our users are saying" />
      </div>
      <CustomCarousel items={UserSaying} />
    </div>
  );
};

export default UsersSaying;
