import { Link, replace, useNavigate } from "react-router-dom";
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";
import { GetApiProducts } from "../types";
import { useEffect } from "react";

interface Pagination {
  data: GetApiProducts | undefined;
  page: number;
  directory: string;
  perPage: number;
}

function Pagination({ data, page, directory, perPage }: Pagination) {
  const navigate = useNavigate();
  const detectedKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      navigate(`/${directory}?_page=${data?.prevPage}&_per_page=${perPage}`);
    }
    if (e.key === "ArrowRight") {
      navigate(`/${directory}?_page=${data?.nextPage}&_per_page=${perPage}`);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", detectedKeyDown);

    return () => {
      window.removeEventListener("keydown", detectedKeyDown);
    };
  }, [detectedKeyDown]);

  return (
    <div className="flex gap-8 items-center mt-4">
      <Link
        to={`/${directory}?_page=${data?.prevPage}&_per_page=${perPage}`}
        className="duration-100 hover:text-green"
      >
        <GrFormPreviousLink size="1.5rem" />
      </Link>
      <span className="text-lg">{page}</span>
      <Link
        to={`/${directory}?_page=${data?.nextPage}&_per_page=${perPage}`}
        className="duration-100 hover:text-green"
      >
        <GrFormNextLink size="1.5rem" />
      </Link>
    </div>
  );
}

export default Pagination;
