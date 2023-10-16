type SearchButtonProps = {
  styling: string;
};

const SearchButton = ({ styling }: SearchButtonProps) => {
  return (
    <button className={`ml-3 z-10 ${styling}`}>
      <img
        src="/magnifying-glass.svg"
        width={40}
        height={40}
        alt="Search Icon"
      />
    </button>
  );
};

export default SearchButton;
