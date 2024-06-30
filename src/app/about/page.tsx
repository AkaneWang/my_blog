import Image from "next/image";

const personalInfo = [
  {
    key: "名前",
    value: "王茜（オウセン）",
  },
  {
    key: "生年月日",
    value: "2000年07月24日",
  },
  {
    key: "年齢",
    value: "23歳",
  },
  {
    key: "性別",
    value: "女",
  },
  {
    key: "現住所",
    value: "東京都新宿区高田馬場３丁目45−11",
  },
  {
    key: "email",
    value: "wangxi_pochi@akane.waseda.jp",
  },
  {
    key: "電話番号",
    value: "080−6155−7980",
  },
];
const educationHistory = [
  {
    period: "2018年9月-2022年6月",
    institution: "Shanghai Maritime University",
  },
  {
    period: "2022年7月-2024年3月",
    institution: "東京ギャラクシー⽇本語学校",
  },
  {
    period: "2024年4月-2026年3月（見込み）",
    institution: "早稲⽥⼤学⼤学院",
  },
];
const qualificationsAndSkills = [
  "TOEIC 880点",
  "⽇本語能⼒試験JLPT N2",
  "普通⾃動⾞第⼀種運転免許（AT限定）",
  "JavaScript",
];

export default function About() {
  return (
    <main className="md:ml-[20rem] mb-[4rem]">
      <h1 className="text-sky-1000 w-full bg-sky-100 mt-2 md:mt-0 p-2 flex justify-center font-semibold">
        履歴書
      </h1>
      <div className="relative border-2 rounded-lg mt-1 mx-2 p-4">
        <Image
          src="/aboutme.jpg"
          width={500}
          height={500}
          alt="Profilo Photo"
          className="absolute top-2 right-2 w-24 h-24 border-2 border-gray-300 rounded-full object-cover"
        />
        <h2 className="border-2 border-sky-100 rounded-lg bg-sky-100 box-content mt-1 mx-2 p-2 w-24 flex justify-center font-semibold">
          基本状況
        </h2>

        <div className="flex flex-col gap-4 border-2 border-sky-10 rounded-lg p-4 mt-1 mx-2 text-md font-semibold">
          {personalInfo.map(({ key, value }) => (
            <div className="md:flex md:gap-2">
              <p>{key + ":"}</p>
              <p>{value}</p>
            </div>
          ))}
        </div>

        <h2 className="border-2 border-sky-100 rounded-lg bg-sky-100 box-content mt-1 mx-2 p-2 w-24 flex justify-center  font-semibold">
          学歴
        </h2>
        <div className="flex flex-col gap-4 border-2 border-sky-10 rounded-lg p-4 mt-1 mx-2 text-md font-semibold">
          {educationHistory.map(({ period, institution }) => (
            <>
              <p>{period}</p>
              <p>{institution}</p>
            </>
          ))}
        </div>

        <h2 className="border-2 border-sky-100 rounded-lg bg-sky-100 box-content mt-1 mx-2 p-2 w-24 flex justify-center font-semibold">
          資格＆スキル
        </h2>
        <div className="flex flex-col gap-4 border-2 border-sky-10 rounded-lg p-4 mt-1 mx-2 text-md font-semibold">
          {qualificationsAndSkills.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>

        <h2 className="border-2 border-sky-100 rounded-lg bg-sky-100 box-content mt-1 mx-2 p-2 w-24 flex justify-center font-semibold">
          自己PR
        </h2>
        <p className="flex flex-col gap-4 border-2 border-sky-10 rounded-lg p-4 mt-1 mx-2 text-md font-semibold tracking-widest">
          大学時代で制御工学を勉強し、主にPLCやDSPなどハードウェアの原理と操作を学んだ。今早稲田大学大学院創造理工研究科修士1年生。専門は経営システム工学で、研究室で主にソフトウェア工学に関する内容を取り組んでいる。
          <br />
          将来はソフトウェアエンジニアとして働きたく、現在はウェブアプリケーション開発を学ぼうとNext.js/Django/AWS
          で私の自己紹介サイトの制作(現時点では、クライアントサイドの実装のみ)に取り組んでいる。
        </p>
      </div>
    </main>
  );
}
