import Link from "next/link";

export default function ProductBlocks() {
  return (
    <section className="container py-4 bg-white ">
      <div className="row">
        {/* left col */}
        <div className="col-12 col-md-6 col-xl-4 mb-6">
          <div
            className="bg-gradient-to-r from-cyan-500 to-blue-500 p-4 rounded-lg h-[400px]"
            id="box1"
          >
            <p>left side content</p>
            <p className="text-4xl">Larger text</p>
            <button className="bg-white font-bold py-2 px-4 rounded-full outline outline-1">
              Shop all
            </button>
          </div>
        </div>

        {/* middle col */}
        <div className="col-12 col-md-6 col-xl-4 space-y-6 mb-12 h-[376px]">
          {/* middle top */}
          <div id="box2" className="h-1/2">
            <div className="rounded-lg p-4 bg-gradient-to-r from-blue-500 to-purple-500 h-full">
              <p> center top</p>
              <p>
                <Link href="/" className="underline">
                  Shop now
                </Link>
              </p>
            </div>
          </div>

          {/* center bottom half */}
          <div className="flex space-x-6 h-1/2">
            <div id="box3" className="col">
              <div className="rounded-lg p-4 bg-gradient-to-r from-blue-500 to-indigo-500 h-full">
                <p> middle, bottom, left</p>
                <p>
                  <Link href="/" className="underline">
                    Shop now
                  </Link>
                </p>
              </div>
            </div>

            <div id="box4" className="col">
              <div className="rounded-lg p-4 bg-gradient-to-r from-indigo-500 to-purple-500 h-full">
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

        {/* right col */}
        <div className="col-12 col-xl-4 mb-6">
          <div
            className="rounded-lg p-4 bg-gradient-to-r from-purple-500 to-pink-500 h-[400px]"
            id="box5"
          >
            <p>right side content</p>
            <p>larger text</p>
            <p>
              <Link href="/" className="underline">
                Shop now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
