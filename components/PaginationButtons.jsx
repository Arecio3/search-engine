import { useRouter } from "next/router";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
// Next js a tag
import Link from "next/link";
function PaginationButtons() {
  const router = useRouter();

  const startIndex = Number(router.query.start) || 0;
  return (
    <div className="flex max-w-lg justify-between text-primary mb-10">
      {startIndex >= 10 && (
        <Link href={`/search?term=${router.query.term}&start=${startIndex - 10}`}>
          <div className="flex flex-grow flex-col items-center cursor-pointer hover:underline">
            <ChevronLeftIcon className="h-5"/>
            <p>Previous</p>
          </div>
        </Link>
      )}
      {/* Go to searched term and ad 10 to previous start index */}
      <Link href={`/search?term=${router.query.term}&start=${startIndex + 10}`}>
        <div className="flex flex-grow flex-col items-center cursor-pointer hover:underline">
          <ChevronRightIcon className="h-5"/>
          <p>Next</p>
        </div>
      </Link>
    </div>
  );
}

export default PaginationButtons;
