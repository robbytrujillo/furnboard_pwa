function Modal({handleShowModal}) {
  return (
    <div className="fixed inset-0 z-40 items-center justify-center min-h-screen w-100" onClick={handleShowModal}>
      <div className="fixed inset-0 bg-black opacity-35"></div>
      <div className="z-10 p-0 bg-white md:p-6">
        <div className="relative z-50 w-screen pb-56 md:w-88 md:pb-56">
          <div className="absolute w-full h-full">
            <iframe
              title="Video"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/3h0_v1cdUIA"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
