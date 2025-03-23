import React from "react";

// components
import TopLeftText from "../atoms/TopLeftText";

// icon
import { MdArrowForwardIos } from "react-icons/md";
import WorkBottomCard from "../molecules/WorkBottomCard";
// sample
import { FaLaptopCode } from "react-icons/fa";

const WorkBottom = () => {
  return (
    <div className="w-full border-b-[1px] border-b-gray-300">
      <div className="flex w-full">
        {/* sidebar box */}
        <div className="w-[40px] flex-shrink-0 border-r-[1px] border-gray-300 box-border">
          <TopLeftText id="works-tag" textType="gray" text="05" />
        </div>
        {/* main box */}
        <div className="w-[100%]">
          {/* section title box */}
          <div className="w-auto h-[80px] sm:h-[80px] border-b-[1px] border-b-gray-300">
            <div className="sm:block sm:w-[1050px] sm:h-[100%]">
              <TopLeftText
                id="hero-nav"
                textType="blue"
                text='<h3 class="work-allview">'
              />
              <h3
                data-aos="fade-up"
                className="mt-3 sm:mt-3 ml-3 text-xl sm:text-3xl font-semibold"
              >
                NOVAが提供するWORKSの一覧です
              </h3>
            </div>
          </div>
          {/* works一覧を表示するセクション */}
          <div className="flex-1 sm:h-[calc(100vh - 280px)] flex">
            {/* PC版 メニュー */}
            <div className="hidden sm:block sm:w-[400px] sm:border-r-[1px] sm:border-r-gray-300">
              <TopLeftText
                id="hero-nav"
                textType="blue"
                text='<button class="works-select" />'
              />
              <p className="block ml-4 mt-10 mb-2 text-base font-semibold">
                ニーズ別：
              </p>
              <div data-aos="fade-up" className="">
                <button className="group flex items-center w-full px-4 py-5 cursor-pointer border-b-[1px] border-b-gray-300  border-t-[1px] border-t-gray-300 hover:bg-[var(--main-red)]  transition-all duration-150">
                  <p className="text-black text-base font-semibold mr-4 group-hover:text-white  group-hover:mr-10 transition-all duration-300">
                    とりあえずWebサイトが欲しい
                  </p>
                  <MdArrowForwardIos className="text-[var(--main-red)] group-hover:text-white" />
                </button>
                <button className="group flex items-center w-full px-4 py-5 cursor-pointer border-b-[1px] border-b-gray-300  border-t-[1px] border-t-gray-300 hover:bg-[var(--main-red)]  transition-all duration-150">
                  <p className="text-black text-base font-semibold mr-4 group-hover:text-white  group-hover:mr-10 transition-all duration-300">
                    現状のWebサイトに納得がいっていない
                  </p>
                  <MdArrowForwardIos className="text-[var(--main-red)] group-hover:text-white" />
                </button>
                <button className="group flex items-center w-full px-4 py-5 cursor-pointer border-b-[1px] border-b-gray-300  border-t-[1px] border-t-gray-300 hover:bg-[var(--main-red)]  transition-all duration-150">
                  <p className="text-black text-base font-semibold mr-4 group-hover:text-white  group-hover:mr-10 transition-all duration-300">
                    パワポではなくサイトで営業をしたい
                  </p>
                  <MdArrowForwardIos className="text-[var(--main-red)] group-hover:text-white" />
                </button>
                <button className="group flex items-center w-full px-4 py-5 cursor-pointer border-b-[1px] border-b-gray-300  border-t-[1px] border-t-gray-300 hover:bg-[var(--main-red)]  transition-all duration-150">
                  <p className="text-black text-base font-semibold mr-4 group-hover:text-white  group-hover:mr-10 transition-all duration-300">
                    ブログを作りたいけど高そう
                  </p>
                  <MdArrowForwardIos className="text-[var(--main-red)] group-hover:text-white" />
                </button>
                <button className="group flex items-center w-full px-4 py-5 cursor-pointer border-b-[1px] border-b-gray-300  border-t-[1px] border-t-gray-300 hover:bg-[var(--main-red)]  transition-all duration-150">
                  <p className="text-black text-base font-semibold mr-4 group-hover:text-white  group-hover:mr-10 transition-all duration-300">
                    社内の雰囲気をいい写真で伝えたい
                  </p>
                  <MdArrowForwardIos className="text-[var(--main-red)] group-hover:text-white" />
                </button>
              </div>
              {/* koko */}
              {/* モバイル版メニュー */}
              <div className="block sm:hidden">
                <p>モバイル版のニーズ別メニューの配置</p>
              </div>
            </div>
            {/* 動的に変化させる */}
            <div className="flex-1 sm:h-[calc(100vh - 280px)] flex flex-col">
              <TopLeftText
                id="hero-nav"
                textType="blue"
                text='<div class="works-contents" />'
              />
              {/* メインコンテンツbox */}
              <div className="mt-7 ml-3">
                <h3 className="text-3xl font-semibol mb-2">
                  とりあえずWebサイトが欲しい
                </h3>
                <p className="font-semibold text-sm text-[var(--main-red)]">
                  ・融資を受けるためにとりあえずサイトを作る必要がある。
                  <br />
                  ・会社を作ったのでまずは簡単なサイトでいいから作りたい
                </p>
                {/* 繰り返しのCard要素 */}
                <div className="w-full mt-5 ml-3">
                  <WorkBottomCard
                    id="hello"
                    size="default"
                    icon={<FaLaptopCode size={40} />}
                    link="/"
                    title="Web制作"
                    childLink={[
                      {
                        id: 12,
                        link: "/",
                        text: "erett1",
                      },
                      {
                        id: 12,
                        link: "/",
                        text: "erett2",
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkBottom;
