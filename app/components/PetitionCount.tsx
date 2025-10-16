import React from "react";
import { getPetitionListCount } from "~/lib/firebase";

const PetitionCount = () => {
  const [count, setCount] = React.useState<number | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const fetchCount = async () => {
      try {
        const response = await getPetitionListCount();
        setCount(response);
      } catch (error) {
        console.error("Error fetching petition count:", error);
      }
    };

    fetchCount().then(() => setLoading(false));
  }, []);

  return (
    <div className={"mx-auto mt-4 text-center"}>
      <p
        className={
          "inline-flex items-baseline gap-3 bg-beige-50 border border-beige-100 rounded-full px-4 py-2 text-sm md:text-base"
        }
      >
        <span className={"text-gray-600 italic"}>Supporters</span>
        <span
          className={
            "font-semibold text-gray-900 tracking-tight text-lg md:text-xl"
          }
          aria-live={"polite"}
          aria-atomic={"true"}
        >
          {loading ? "—" : (count ?? 0).toLocaleString()}
        </span>
        <span className="sr-only">people have signed the petition</span>
      </p>
    </div>
  );
};

export default PetitionCount;