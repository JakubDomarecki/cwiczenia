import { useState } from "react";

export const Pagination = ({ namesPerPage, names }) => {

    const [currentPage, setCurrentPage] = useState(1)

    const totalPages = Math.ceil(names.length / namesPerPage);

    const pages = Array.from({length: totalPages }).map((_, index) => index + 1);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    }

    const startIndex = (currentPage - 1) * namesPerPage;
    const endIndex = startIndex + namesPerPage;

    const namesToShow = names.slice(startIndex, endIndex)

    return (
        <section>
            <ul className="names">
                {namesToShow.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>

            <ul className="pages">
                {pages.map((value, index) => (
                    <li key={index} className={value === currentPage ? 'active' : undefined} onClick={() => handlePageChange(value)}>{value}</li>
                ))}
            </ul>

        </section>
    )

}




