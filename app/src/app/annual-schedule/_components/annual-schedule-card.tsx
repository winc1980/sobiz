import Image, { type StaticImageData } from "next/image";

type AnnualScheduleCardProps = {
  months: string[];
  image: StaticImageData;
  alt: string;
  title: string;
};

export const AnnualScheduleCard = ({
  months,
  image,
  alt,
  title,
}: AnnualScheduleCardProps) => {
  return (
    <div>
      <div className="mb-2 flex items-center gap-4">
        <div className="h-1 w-[28px] md:w-[274px] bg-gradient-to-r from-primary to-secondary" />
        <h2 className="text-lg md:text-xl font-bold leading-normal text-primary">
          {months.join("・")}：{title}
        </h2>
      </div>
      <Image
        src={image}
        alt={alt}
        className="ml-[28px] md:ml-[274px] max-w-[50vw] md:max-w-[32vw]"
      />
    </div>
  );
};
