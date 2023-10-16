import { IButtonProp } from "../types";

export default function CustomButton({
  title,
  designs,
  handleClick,
  disabled,
  btnType,
  rIcon,
}: IButtonProp) {
  return (
    <button
      type={btnType || "button"}
      disabled={disabled}
      className={`custom-btn ${designs}`}
      onClick={handleClick}
    >
      <span className="flex-1">{title} </span>
      {rIcon && (
        <div className="relative w-6 h-6">
          <img src={rIcon} alt="Right Arrow Icon" />
        </div>
      )}
    </button>
  );
}
