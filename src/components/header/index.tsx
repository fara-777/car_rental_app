import { Link } from "react-router-dom";
import CustomButton from "../custom-button";

export default function Header() {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link to={"/"}>
          <img width={50} src="/bmw.png" alt="BMW Logo" />
        </Link>

        <CustomButton
          title="Sign in"
          btnType="button"
          designs="bg-primary-blue rounded-full text-white min-w-[130px] hover:bg-blue-800 transition "
        />
      </nav>
    </header>
  );
}
