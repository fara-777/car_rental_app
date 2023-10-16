import { useEffect, useState } from "react";
import { IOptions } from "../types";
import Select from "react-select";
import { useSearchParams } from "react-router-dom";

interface IFilterProps {
  title: string;
  options: IOptions[];
}

const CustomFilters = ({ title, options }: IFilterProps) => {
  const [selected, setSelected] = useState<IOptions | null>();

  const [params, setParams] = useSearchParams();

  useEffect(() => {
    // Set the key based on the title
    const key = title === "Fuel Type" ? "fuel" : "year";

    // Add the value to the parameter if selected, otherwise remove it
    if (selected?.value) {
      // Add to the URL
      params.set(key, selected.value.toLowerCase());
    } else {
      // Remove from the URL
      params.delete(key);
    }
    // Update the URL
    setParams(params);
  }, [selected]);

  return (
    <div className="w-fit">
      <Select
        onChange={(e: IOptions | null) => setSelected(e)}
        options={options}
        placeholder={title}
        className="text-black min-w-[100px]"
      />
    </div>
  );
};

export default CustomFilters;
