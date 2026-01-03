import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import CarouselImage1 from "@/assets/carousel/carousel-1.jpg";
import CarouselImage2 from "@/assets/carousel/carousel-2.jpg";
import CarouselImage3 from "@/assets/carousel/carousel-3.jpg";
import BackIcon from "@/assets/guide-button/back.svg";
import Activity1 from "@/assets/internal-link/activity-1.jpg";
import PresentationImage from "@/assets/mvv/presentation.jpg";
import FounderMessage from "@/assets/sections/history/founder-message.png";
import { PageBackground } from "@/components/page-background";
import { AnnualScheduleCard } from "./_components/annual-schedule-card";
import { YearlyArchive } from "./_components/yearly-archive";

type AnnualSchedule = {
  months: string[];
  image: StaticImageData;
  alt: string;
  title: string;
};

const annualSchedules: AnnualSchedule[] = [
  {
    months: ["4月", "5月"],
    image: CarouselImage1,
    alt: "新入生歓迎イベント",
    title: "新入生歓迎・春季プロジェクト始動",
  },
  {
    months: ["6月", "7月"],
    image: PresentationImage,
    alt: "ビジネスコンテスト準備",
    title: "ビジコン準備・夏季フィールドワーク",
  },
  {
    months: ["8月", "9月"],
    image: CarouselImage2,
    alt: "夏季ボランティア活動",
    title: "夏季集中プロジェクト・ボランティア",
  },
  {
    months: ["10月", "11月"],
    image: FounderMessage,
    alt: "早稲田祭出店",
    title: "早稲田祭出店・秋季講演会",
  },
  {
    months: ["12月", "1月"],
    image: CarouselImage3,
    alt: "年末年始活動",
    title: "年次報告会・冬季プロジェクト",
  },
  {
    months: ["2月", "3月"],
    image: Activity1,
    alt: "春季準備活動",
    title: "次年度準備・春季合宿",
  },
];

const Page = async () => {
  const selectedYear = 2025;

  return (
    <div className="flex justify-between pt-[46px] pb-[136px] md:py-[150px] gap-[18px] relative">
      <div className="max-w-[1190px] w-[70vw] z-2">
        <div className="relative rounded-r-[18px] md:rounded-r-[70px] bg-white pt-[66px] pb-[112px]">
          <div className="mb-12 md:mb-[115px]">
            <div className="mb-2 flex items-center gap-4">
              <div className="h-1 w-[28px] md:w-[128px] bg-gradient-to-r from-primary to-secondary" />
              <h1 className="text-lg md:text-xl font-bold leading-normal text-primary">
                {selectedYear}年 年間スケジュール
              </h1>
            </div>
          </div>

          <div className="space-y-16 mr-9 md:mr-36">
            {annualSchedules.map((schedule) => (
              <AnnualScheduleCard
                key={schedule.title}
                months={schedule.months}
                image={schedule.image}
                alt={schedule.alt}
                title={schedule.title}
              />
            ))}
          </div>

          <div className="mt-12 flex justify-center md:mt-[216px]">
            <Link
              href="/"
              className="group inline-flex h-[42px] md:h-[55px] w-auto md:w-full max-w-[333px] items-center justify-between rounded-[27.5px] bg-gradient-to-r from-primary to-secondary px-[15px] md:px-6 md:text-[24px] font-bold text-white transition-opacity hover:opacity-90"
            >
              <Image
                src={BackIcon}
                alt=""
                width={21}
                height={21}
                className="h-[21px] w-[21px] md:h-[27px] md:w-[27px]"
              />
              <span>メインページに戻る</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="mr-[25px] md:mr-36">
        <YearlyArchive />
      </div>

      <PageBackground />
    </div>
  );
};

export default Page;
