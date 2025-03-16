"use client";
import React from "react";

// hooks
import useAOS from "@/hooks/useAOS";

// compoentns
import TopLeftText from "../atoms/TopLeftText";
import ServiceCard from "../molecules/ServiceCard";

const Service = () => {
  useAOS();
  return (
    <div className="w-full h-auto border-b-[1px] border-b-gray-300">
      <div className="flex w-full">
        {/* side box 40px */}
        <div className="w-[40px] flex-shrink-0 border-r-[1px] border-r-gray-300 box-border">
          <TopLeftText id="service" textType="gray" text="03" />
        </div>
        {/* main box */}
        <div className="w-[100%]">
          <div className="w-full h-[100px] sm:h-[130px] border-b-[1px] border-b-gray-300">
            <div className="sm:block sm:w-[400px] sm:h-[100%] sm:border-r-[1px] border-r-gray-300">
              <TopLeftText
                id="hero-nav"
                textType="blue"
                text='<h1 class="service-title">'
              />
              <h1
                data-aos="fade-up"
                className="mt-3 sm:mt-5 ml-3 text-5xl sm:text-6xl font-semibold"
              >
                SERVICES
              </h1>
            </div>
          </div>
          {/* Service Card */}
          <div className="w-[100%] h-auto sm:flex">
            <div className="hidden sm:block sm:w-[400px] sm:h-[100%] sm:border-r-[1px] sm:border-r-gray-300  flex-shrink-0">
              <TopLeftText
                id="hero-nav"
                textType="blue"
                text='<ul class="service-card">'
              />
            </div>
            <div className="w-full">
              <ServiceCard
                id="service-1"
                img="/images/bg.png"
                subtitle="Saas事業"
                title="WEB TRUST"
                desc="受託のWeb開発事業です。簡単な1ページのLPから会社様のコーポレートサイト。ECサイトやブログ構築など幅広く対応をしております。ヒアリングからデザイン、コーディングテストまで一貫して当社で行うことで他社には真似できないスピード感と若者の感性、クオリティを実現しています。"
                link="/"
              />
              <ServiceCard
                id="service-2"
                img="/images/bg.png"
                subtitle="Saas事業"
                title="Checkey"
                desc="レンタルスペースの貸主と借主をマッチさせ完全無人で利用できるサービスです。地方の空き家・空きスペース問題に取り組むべく開発を行いました。商店街内の空きスペースを活用した個人販売店の出店。空きテナントを活用したダンスの練習。地方の特性を活かした大音量での楽器練習。活用方法は様々です。"
                link="/"
              />
              <ServiceCard
                id="service-3"
                img="/images/bg.png"
                subtitle="新規事業"
                title="NEO TOKYO PROJECT"
                desc="全く新しい世界を創る。仮想空間に東京都港区を実寸大で完全再現。現実世界での土地はすでに限りがあり物理的・法律的制約も多く存在する。現実世界での制約を全て取り払った全く新しいサービス。土地を買うのも売るのも、活用方法は無限大。全ての人の当たり前を変革するようなサービスを製作中です。"
                link="/"
              />
              <ServiceCard
                id="service-4"
                img="/images/bg.png"
                subtitle="教育事業"
                title="Student MAFIA"
                desc="学生のためのプログラミングの教育サービスです。特に大学生を対象に展開をしています。大学生という時間が比較的自由に使える世代に向けたエンジニアとして1人で稼げるようになるまでのサポートを行っています。"
                link="/"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
