import { useState } from "react";
import CustomButton from "../custom-button";
import { ICarProps } from "../types";
import DetailModal from "./DetailModal";
import CarInfo from "./CarInfo";
import { generateImage } from "../utils";

interface ICarCardProps {
  car: ICarProps;
}

const Card = ({ car }: ICarCardProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="car-card group">
      {/* Car name */}
      <h2 className="car-card__content-title">
        {car.make} {car.model}
      </h2>
      {/* Price area */}
      <p className="flex mt-6 text-[32px]">
        <span className="self-start text-[14px] font-semibold">$</span>
        {Math.round(30 + Math.random() * (100 - 30))}
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>
      {/* Image area */}
      <div className="relative w-full h-40 my-3 object-contain">
        <img
          src={generateImage(car)}
          className="w-full h-full object-contain"
          alt=""
        />
      </div>
      {/* Lower section */}
      <div className="relative flex w-full mt-2">
        <div className="mt-2 group-hover:invisible w-full flex justify-between">
          <CarInfo
            title={car.transmission === "a" ? "Automatic" : "Manual"}
            icon="steering-wheel.svg"
          />

          <CarInfo
            title={car.drive?.toUpperCase()}
            icon="/steering-wheel.svg"
          />
          <CarInfo title={car.city_mpg + "MPG"} icon="/steering-wheel.svg" />
        </div>
        <div className="car-card__btn-container">
          <CustomButton
            title="Learn More"
            designs="w-full py-[16px] rounded-full bg-primary-blue text-white hover:bg-blue-800"
            rIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      {/* Detail modal */}
      <DetailModal
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
};

export default Card;
