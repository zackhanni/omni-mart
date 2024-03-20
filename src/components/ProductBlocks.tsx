import Link from "next/link";

export default function ProductBlocks() {
  return (
    <section className="flex px-4 space-x-4 py-4">
      <div className="w-1/3 bg-red-200 rounded-lg p-4">
        <div className="space-y-4">
          <p>left side content</p>
          <p className="text-4xl">Larger text</p>
          <button className="bg-white font-bold py-2 px-4 rounded-full outline outline-1">
            Shop all
          </button>
        </div>
      </div>
      <div className="w-1/3 space-y-4">
        <div className="bg-yellow-200 rounded-lg p-4">
          <div className="space-y-4">
            <p> center top</p>
            <p>
              <Link href="/" className="underline">
                Shop now
              </Link>
            </p>
          </div>
        </div>
        <div className="flex space-x-4">
          <div className="bg-green-200 rounded-lg p-4">
            <div className="space-y-4">
              <p> middle, bottom, left</p>
              <p>
                <Link href="/" className="underline">
                  Shop now
                </Link>
              </p>
            </div>
          </div>
          <div className="bg-orange-200 rounded-lg p-4">
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
      <div className="w-1/3 bg-blue-200 rounded-lg p-4">
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
