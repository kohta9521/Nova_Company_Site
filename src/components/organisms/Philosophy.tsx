import React from "react";

// components
import TopLeftText from "../atoms/TopLeftText";
import ListBlockItem from "../atoms/ListBlockItem";

const Philosophy = () => {
  return (
    <div className="w-full h-auto border-b-[1px] border-b-gray-300">
      <div className="flex w-full">
        {/* sidebar box */}
        <div className="w-[40px] flex-shrink-0 border-r-[1px] border-r-gray-300 box-border">
          <TopLeftText id="philosophy" textType="gray" text="02" />
        </div>
        {/* title box */}
        <div className="block h-auto sm:w-[calc(100%-40px)] sm:h-[600px] sm:flex sm:justify-between">
          <div className="w-[100%] h-[350px] sm:h-auto border-b-[1px] border-b-gray-300 sm:border-b-0 sm:border-r-[1px] sm:border-r-gray-300">
            <TopLeftText
              id="hero-nav"
              textType="blue"
              text='<h1 class="philosophy-title">'
            />
            <h1 className="mt-12 sm:mt-26 ml-5 text-4xl sm:text-5xl font-semibold leading-relaxed">
              全ての人が
              <br />
              <span className="text-[var(--main-red)]">IT</span>を駆使して
              <br />
              <span className="text-[var(--main-red)]">想像を形</span>にできる
              <br />
              その一助になる
            </h1>
          </div>
          {/* main box */}
          <div className="h-auto pt-0 pb-10 sm:w-[800px] pr-10">
            <TopLeftText
              id="hero-nav"
              textType="blue"
              text='<p class="philosophy-text">'
            />
            <p className="mt-10 mb-5 sm:mt-30 ml-5 text-medium font-semibold leading-7">
              <span className="text-[var(--main-red)]">
                ITで人の役に立つのに年齢制限はない
              </span>
              <br />
              ITという知識・武器を身につけることで、これまで空想でしかなかったものを形にすることがきる。
              <br />
              パソコン一台で、ただの文字の羅列が意味を持ち形になる。
              <br />
              こんな楽しいことはない。
              <br />
              メンバー全員大学生という肩書を持ちながら、エンジニアとして自分のスキルを社会で発揮しています。
              <br />
              <span className="text-[var(--main-red)]">
                年齢・肩書で判断される時代ではない。
              </span>
              <br />
              私たちはそれを証明し続けます。
            </p>
            <div className="ml-5">
              <ListBlockItem
                id="philosophy-btn"
                link="/"
                text="NOVAについて知る"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Philosophy;
