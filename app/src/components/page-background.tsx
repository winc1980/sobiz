import Image from "next/image";
import BackgroundPattern from "@/assets/logo/background-pattern.svg";
import BackgroundPatternWhite from "@/assets/logo/background-pattern-white.svg";
import Bridges from "@/assets/logo/bridges.svg";

export const PageBackground = () => {
  return (
    <>
      <Image
        src={Bridges}
        alt=""
        width={1185}
        height={187}
        className="w-full absolute bottom-0 overflow-hidden"
      />
      <Image
        src={BackgroundPattern}
        alt=""
        height={250}
        className="h-[250px] md:h-[1080px] w-auto absolute bottom-0 right-0"
      />
      <Image
        src={BackgroundPatternWhite}
        alt=""
        height={200}
        className="h-[200px] md:h-[720px] w-auto absolute top-[250px] md:top-[140px] right-0"
      />
    </>
  );
};
