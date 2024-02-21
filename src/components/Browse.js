function Browse() {
  return (
    <section className="flex px-4 py-16 bg-gray-100" id="browse-the-room">
      <div className="container mx-auto">
        <div className="flex mb-4 flex-start">
          <h3 className="text-2xl font-semibold capitalize">
            browse the room <br className="" />
            that we designed for you
          </h3>
        </div>
        <div className="grid grid-cols-9 grid-rows-2 gap-4">
          <div className="relative col-span-9 row-span-1 md:col-span-4 card" style={{ height: "180px" }}>
            <div className="card-shadow rounded-xl">
              <img src="./images/content/image-catalog-1.png" alt="" className="object-cover object-center w-full h-full overflow-hidden overlay rounded-xl" />
            </div>
            <div className="top-0 bottom-0 left-0 flex flex-col justify-center pl-48 overlay md:pl-72">
              <h5 className="text-lg font-semibold">Living Room</h5>
              <span className="">18.309 items</span>
            </div>
            {/* eslint-disable-next-line */}
            <a href="details.html" className="stretched-link"></a>
          </div>
          <div className="relative col-span-9 row-span-1 md:col-span-2 md:row-span-2 card">
            <div className="card-shadow rounded-xl">
              <img src="./images/content/image-catalog-3.png" alt="" className="object-cover object-center w-full h-full overflow-hidden overlay rounded-xl" />
            </div>
            <div className="top-0 bottom-0 left-0 right-0 flex flex-col justify-center pt-0 pl-48 overlay md:bottom-auto md:items-center md:pl-0 md:pt-12">
              <h5 className="text-lg font-semibold">Decoration</h5>
              <span className="">77.392 items</span>
            </div>
            {/* eslint-disable-next-line */}
            <a href="details.html" className="stretched-link"></a>
          </div>
          <div className="relative col-span-9 row-span-1 md:col-span-3 md:row-span-2 card">
            <div className="card-shadow rounded-xl">
              <img src="./images/content/image-catalog-4.png" alt="" className="object-cover object-center w-full h-full overflow-hidden overlay rounded-xl" />
            </div>
            <div className="top-0 bottom-0 left-0 right-0 flex flex-col justify-center pt-0 pl-48 overlay md:bottom-auto md:items-center md:pl-0 md:pt-12">
              <h5 className="text-lg font-semibold">Living Room</h5>
              <span className="">22.094 items</span>
            </div>
            {/* eslint-disable-next-line */}
            <a href="details.html" className="stretched-link"></a>
          </div>
          <div className="relative col-span-9 row-span-1 md:col-span-4 card">
            <div className="card-shadow rounded-xl">
              <img src="./images/content/image-catalog-2.png" alt="" className="object-cover object-center w-full h-full overflow-hidden overlay rounded-xl" />
            </div>
            <div className="top-0 bottom-0 left-0 flex flex-col justify-center pl-48 overlay md:pl-72">
              <h5 className="text-lg font-semibold">Children Room</h5>
              <span className="">837 items</span>
            </div>
            {/* eslint-disable-next-line */}
            <a href="details.html" className="stretched-link"></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Browse;
