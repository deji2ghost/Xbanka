import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface AccordionLayoutProps{
  header: string;
  content: string;
  defaultValue: string
}

export function AccordionLayout({header, content, defaultValue}: AccordionLayoutProps) {
  
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full shadow-[0px_6px_12px_rgba(0,0,0,0.06)]"
      defaultValue={defaultValue}
    >
      <AccordionItem value={header} className="flex flex-col gap-4 p-4">
        <AccordionTrigger className="font-[700] text-[20px]">{header}</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance font-[400] text-[20px]">
          <p>{content}</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
