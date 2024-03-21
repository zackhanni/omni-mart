import Link from "next/link";

export default function ProductBlocks() {
  return (
    <section className="flex flex-col sm:flex-row space-x-4 py-4">
      <div className="sm:w-1/3 rounded-lg p-4 bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="space-y-4">
          <p>left side content</p>
          <p className="text-4xl">Larger text</p>
          <button className="bg-white font-bold py-2 px-4 rounded-full outline outline-1">
            Shop all
          </button>
        </div>
      </div>
      <div className="sm:w-1/3 space-y-4">
        <div className="rounded-lg p-4 bg-gradient-to-r from-blue-500 to-purple-500">
          <div className="space-y-4">
            <p> center top</p>
            <p>
              <Link href="/" className="underline">
                Shop now
              </Link>
            </p>
          </div>
        </div>
        <div className="flex sm:space-x-4 space-y-4 sm:space-y-0">
          <div className="rounded-lg p-4 bg-gradient-to-r from-blue-500 to-indigo-500 w-1/2">
            <div className="space-y-4">
              <p> middle, bottom, left</p>
              <p>
                <Link href="/" className="underline">
                  Shop now
                </Link>
              </p>
            </div>
          </div>
          <div className="rounded-lg p-4 bg-gradient-to-r from-indigo-500 to-purple-500 w-1/2">
            <div className="space-y-4">
              <p> middle, bottom, right</p>
              <p>
                <Link href="/" className="underline">
                  Shop now
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/3 rounded-lg p-4 bg-gradient-to-r from-purple-500 to-pink-500">
        <div className="space-y-4">
          <p>right side content</p>
          <p>larger text</p>
          <p>
            <Link href="/" className="underline">
              Shop now
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
