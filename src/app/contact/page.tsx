export default function Contact() {
  return (
    <main className="md:ml-[20rem]">
      <h1 className="text-sky-1000 w-full bg-sky-100 mt-2 p-2 flex justify-center font-semibold">
        問い合わせ
      </h1>
      <div className="m-5 p-5 bg-sky-100">
        <form>
          <div className="mb-3">
            <p className="mb-1">名前</p>
            <textarea
              className="w-full border border-gray-300 rounded"
              placeholder="お名前"
            />
          </div>
          <div className="mb-3">
            <p className="mb-1">メール</p>
            <textarea
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="メールアドレス"
            />
          </div>
          <div className="mb-3">
            <p className="mb-1">メッセージ</p>
            <textarea
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="メッセージを入力してください"
            ></textarea>
          </div>
          <button
            className="bg-sky-700 text-white py-2 px-4 rounded hover:bg-sky-900"
            type="button"
          >
            送信
          </button>
        </form>
      </div>
    </main>
  );
}
