import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface billingProps {
  header: string;
  body: string;
}

interface billingItemsProps {
  billingItems: billingProps[];
}

const InfoRotator = ({ billingItems }: billingItemsProps) => {
  const [current, setCurrent] = useState(0);
  const [showBody, setShowBody] = useState<boolean[]>(() =>
    billingItems.map((_, i) => i === 0) // only the first item shows initially
  );

  useEffect(() => {
  const interval = setInterval(() => {
    const next = (current + 1) % billingItems.length;

    setShowBody((prev) => {
      const updated = [...prev];
      updated[next] = true; // show next item

      // Hide previous items *only when* the next one times out (i.e., current === last item)
      if (next === 0) {
        // we're back to the start, reset all but the first
        return billingItems.map((_, i) => i === 0);
      }

      return updated;
    });

    setCurrent(next);
  }, 4000);

  return () => clearInterval(interval);
}, [current, billingItems.length]);


  return (
    <div className="flex flex-col gap-4 h-[400px] md:border-l-[1.48px]">
      {billingItems.map((item, index) => (
        <div key={index} className={`${showBody[index] ? 'border-l-[1.48px] border-abstractCyan' : ''} pl-4 flex flex-col gap-2`}>
          <motion.h3
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="font-[600] text-[20px] leading-[24px] md:text-[24px] md:leading-[33.06px]"
          >
            {item.header}
          </motion.h3>

          <AnimatePresence mode="wait">
            {showBody[index] && item.body && (
              <motion.p
                key={item.body + index}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
                className="font-[400] text-[16px] md:text-[20px] md:leading-[28px]"
              >
                {item.body}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default InfoRotator;