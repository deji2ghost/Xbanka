import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SlashIcon } from "lucide-react";
import { Link } from "react-router";

export interface BreadCrumbsProps {
  home: string;
  breadCrumbPage: string;
}

export function BreadcrumbWithCustomSeparator({
  home,
  breadCrumbPage,
}: BreadCrumbsProps) {
  return (
    <Breadcrumb className="mb-4">
      <BreadcrumbList className="font-[400] text-[16px] leading-[22.4px]">
        <BreadcrumbItem className="font-[400] text-[16px] leading-[22.4px] text-[#0198AF]">
          <BreadcrumbLink asChild>
            <Link to="/blogs">{home}</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="">
          <SlashIcon className="h-[10px]" />
        </BreadcrumbSeparator>
        <BreadcrumbItem className="font-[400] text-[16px] leading-[22.4px]">
          <BreadcrumbPage className="font-[400] text-[14px] leading-[22.4px] text-[#757575]">{breadCrumbPage}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
