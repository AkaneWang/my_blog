"use client";
import Link from "next/link";

const UserProfile = () => {
  return (
    <div className="flex bg-sky-25 min-h-screen">
      <div className="flex-1 p-6 md:ml-[25%]">
        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-6 mb-6">
          <img
            src="/aboutme.jpg"
            alt="Profile"
            className="h-32 w-32 rounded-full object-cover mb-4 md:mb-0"
          />
          <div>
            <h2 className="text-3xl font-bold">王茜（オウセン）</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 border-b-2 pb-2 border-gray-200">
              基本情報
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block font-semibold">名前</label>
                <p>王茜（オウセン）</p>
              </div>
              <div>
                <label className="block font-semibold">学校</label>
                <p>早稻田大学大学院</p>
              </div>
              <div>
                <label className="block font-semibold">専攻</label>
                <p>创造理工学研究科　经营システム工学</p>
              </div>
              <div>
                <label className="block font-semibold">性别</label>
                <p>女</p>
              </div>
            </div>
          </div>

          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 border-b-2 pb-2 border-gray-200">
              連絡方法
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block font-semibold">電話番号</label>
                <p>080−6155−7980</p>
              </div>
              <div>
                <label className="block font-semibold">メールアドレス</label>
                <p>wangxi_pochi@akane.waseda.jp</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
