import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import ReactDOM from "react-dom";
import { setIsOpen } from "../store/modalSlice";
import { useEffect } from "react";

function Modal() {
  const isModalOpen = useSelector((state: RootState) => state.modal.isOpen);
  const modalMessage = useSelector((state: RootState) => state.modal.message);

  useEffect(() => {
    if (isModalOpen) {
      document.body.setAttribute("style", "overflow:hidden");
    }
  }, [isModalOpen]);

  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(setIsOpen(false));
  };

  return ReactDOM.createPortal(
    <>
      {isModalOpen ? (
        <>
          <div className="fixed p-10 top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 flex flex-col gap-y-6 z-50 bg-primary rounded-lg">
            <div className="text-lg text-black">{modalMessage}</div>
            <button
              onClick={handleCloseModal}
              className=" mt-8 border-[1px] border-solid border-secondary  py-1 px-8 rounded-md bg-green hover:bg-green-hover duration-300"
            >
              Close
            </button>
          </div>
          <div className="fixed inset-0 bg-white opacity-80 z-10"></div>
        </>
      ) : null}
    </>,
    document.getElementById("portal")!
  );
}

export default Modal;
