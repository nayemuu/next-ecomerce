function ModalRightToLeft({ children, showModal }) {
  return (
    <div>
      {/* <!-- Modal --> */}
      <div
        className={`fixed top-0 z-[999] h-[100vh] w-[100vw] overflow-y-auto overflow-x-hidden outline-none bg-black transition-all duration-300 ease-in-out ${
          showModal
            ? 'block bg-opacity-50 right-0'
            : 'invisible bg-opacity-0 right-[-105%]'
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export default ModalRightToLeft;
