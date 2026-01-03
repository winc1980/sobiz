"use client";

import Link from "next/link";

export const YearlyArchive = () => {
  const years = [2025, 2024, 2023, 2022, 2021];

  return (
    <aside className="sticky top-[100px]">
      <h2 className="mb-4 text-lg md:text-xl font-semibold leading-[25px] text-primary">
        年別アーカイブ
      </h2>
      <nav>
        <ul className="space-y-[15px] md:space-y-[30px]">
          {years.map((year) => (
            <li key={year}>
              <Link
                href={`/annual-schedule?year=${year}`}
                className="bg-white rounded-[9px] md:rounded-[18px] border-[1px] px-[25px] md:px-[50px] py-[10px] border-primary block text-base font-semibold leading-[25px] text-primary transition-opacity hover:opacity-80 text-center"
              >
                {year}年
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
