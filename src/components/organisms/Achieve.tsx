import React from "react";

// components
import TopLeftText from "../atoms/TopLeftText";
import AchieveCard from "../molecules/AchieveCard";

const Achieve = () => {
  return (
    <div className="w-full h-auto border-b-[1px] border-b-gray-300">
      <div className="flex w-full">
        {/* sidebar */}
        <div className="w-[40px] flex-shrink-0 border-r-[1px] border-gray-300 box-border">
          <TopLeftText id="works-tag" textType="gray" text="05" />
        </div>
        {/* main */}
        <div className="w-[100%]">
          {/* section title box */}
          <div className="block h-auto sm:flex sm:h-[130px] border-b-[1px] border-b-gray-300">
            <div className="block py-2 border-b-gray-300 w-full sm:w-[672px] sm:h-[100%] sm:border-r-[1px] border-r-gray-300">
              <TopLeftText
                id="hero-nav"
                textType="blue"
                text='<h1 class="service-title">'
              />
              <h1
                data-aos="fade-up"
                className=" mt-3 sm:mt-5 ml-3 text-5xl sm:text-6xl font-semibold"
              >
                ACHIEVE
              </h1>
            </div>
            {/* sub title box */}
            <div className="w-full border-b-[1px] border-b-gray-300 sm:border-none">
              <TopLeftText
                id="hero-nav"
                textType="blue"
                text='<p class="service-subtitle">'
              />
              <p className="py-5  sm:pt-7 ml-3 text-base font-semibold">
                これまでにご依頼をいただいてきたお仕事です。
                <br />
                Web制作から企業のDX化まで幅広くご覧いただけます。
              </p>
            </div>
          </div>
          {/*  main contents */}
          <div className="w-[100%] h-auto sm:flex">
            <AchieveCard
              id="sample"
              number="01"
              title={
                <h1 className="text-3xl font-semibold">
                  大規模イベントの
                  <br />
                  予約QRシステム
                </h1>
              }
              hash={["# ITコンサル", "# 自動化", "# LP制作"]}
              maintext="1500人規模の大規模イベントにおいてフォームから自動でメールの一斉送信・当日のQRコード入場管理システムの構築を実現。面倒な紙媒体でのイベント管理からのDX化を行った。メールもイベントのイメージに合わせたデザインを施し、イベント前の告知メールなどでユーザーのメール開封率やイベントへの期待感の増加に貢献。"
              tech={["React", "Next.js"]}
              img="/images/achieve-1.webp"
              link="/"
            />
            <AchieveCard
              id="sample"
              number="02"
              title={
                <h1 className="text-3xl font-semibold">
                  学生起業塾の
                  <br />
                  サービスHP制作
                </h1>
              }
              hash={["# ITコンサル", "# HP制作", "# CMS機能"]}
              maintext="学生起業の塾サービスのHP制作を行いました。HPにはニュースやブログといった動的な機能も追加し、エンジニアでなくても簡単にコンテンツ管理・お問い合わせフォームのメールへの自動送信などを実装。HP制作だけではなく、会社内のサービスへのコンサルも行っています。"
              tech={["Next.js", "MicroCMS", "Vercel"]}
              img="/images/achieve-2.webp"
              link="/"
            />
            <AchieveCard
              id="sample"
              number="03"
              title={
                <h1 className="text-3xl font-semibold">
                  学祭での
                  <br />
                  会計システム
                </h1>
              }
              hash={["# LINE連携", "# CMS機能", "# ITコンサル"]}
              maintext="学祭での模擬店出展者側へのモバイルオーダー・呼び出しサービスを開発いたしました。煩雑・待ち時間の大変かかる学祭での模擬店運営を円滑にするべくLINEと連携した呼び出し機能を組み込むことでユーザーへのサービス利用のハードルを軽減。5000人を超えるユーザー数を獲得"
              tech={["Next.js", "LINE for Business"]}
              img="/images/achieve-3.webp"
              link="/"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achieve;
