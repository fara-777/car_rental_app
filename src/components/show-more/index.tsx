import { useSearchParams } from "react-router-dom";
import CustomButton from "../custom-button";

type ShowMoreProps = {
  limit: number;
  isNext: boolean;
};

const ShowMore = ({ limit, isNext }: ShowMoreProps) => {
  const [params, setParams] = useSearchParams();

  const handleNavigate = () => {
    const newLimit = Number(limit) + 5;
    // Add the new limit without removing other parameters
    params.set("limit", String(newLimit));
    // Update the URL
    setParams(params);
  };

  return (
    <div className="w-full flex-center gap-5 my-10">
      {isNext && (
        <CustomButton
          title="Show More"
          designs="bg-primary-blue w-full rounded-full"
          handleClick={handleNavigate}
        />
      )}
    </div>
  );
};

export default ShowMore;
