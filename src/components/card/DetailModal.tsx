import { ICarProps } from "../types";
import { generateImage } from "../utils";
import { AnimatePresence, motion } from "framer-motion";

interface IDetailProps {
  isOpen: boolean;
  closeModal: () => void;
  car: ICarProps;
}

const DetailModal = ({ isOpen, closeModal, car }: IDetailProps) => {
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-25 z-20 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3 }}
              className="p-6 relative bg-white w-full max-w-lg max-h-[90vh] rounded-2xl flex flex-col gap-5 shadow-xl overflow-auto"
            >
              {/* close button */}
              <button
                onClick={closeModal}
                className=" cursor-pointer p-1 absolute end-1 top-1 z-10 bg-white rounded-full"
              >
                <img src="/close.svg" />
              </button>

              {/* detail & photos */}
              <div className="flex-1 flex flex-col gap-3">
                <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                  <img
                    src={generateImage(car, "angle")}
                    className="h-full mx-auto"
                  />
                </div>

                <div className="flex gap-3">
                  <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg-100">
                    <img
                      src={generateImage(car, "29")}
                      className="h-full mx-auto object-contain"
                    />
                  </div>

                  <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg-100">
                    <img
                      src={generateImage(car, "33")}
                      className="h-full mx-auto object-contain"
                    />
                  </div>

                  <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg-100">
                    <img
                      src={generateImage(car, "13")}
                      className="h-full mx-auto object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* car detail */}
              {Object.entries(car).map(([key, value], i) => (
                <div key={i} className="flex justify-between">
                  <h4 className=" capitalize">{key.split("_").join(" ")}</h4>
                  <p className=" text-black-100 font-semibold">{value}</p>
                </div>
              ))}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default DetailModal;
