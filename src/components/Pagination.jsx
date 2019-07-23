import React from "react";
import {
  MDBPagination,
  MDBPageItem,
  MDBPageNav,
  MDBCol,
  MDBRow
} from "mdbreact";

const Pagination = ({
  productsPerPage,
  totalProducts,
  paginate,
  currentPage
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  const next = currentPage === pageNumbers.length ? null : true;
  const prev = currentPage === 1 ? null : true;

  return (
    <MDBRow>
      <MDBCol>
        <MDBPagination circle color="blue" className="mb-5">
          <MDBPageItem>
            {prev && (
              <MDBPageNav
                aria-label="Previous"
                onClick={() => paginate(currentPage - 1)}
              >
                <span aria-hidden="true">Previous</span>
              </MDBPageNav>
            )}
          </MDBPageItem>
          {pageNumbers.map(number => (
            <MDBPageItem
              onClick={() => paginate(number)}
              key={number}
              className={number === currentPage ? "active" : null}
            >
              <MDBPageNav className="page-link">{number}</MDBPageNav>
            </MDBPageItem>
          ))}
          <MDBPageItem>
            {next && (
              <MDBPageNav
                aria-label="Previous"
                onClick={() => paginate(currentPage + 1)}
              >
                <span aria-hidden="true">Next</span>
              </MDBPageNav>
            )}
          </MDBPageItem>
        </MDBPagination>
      </MDBCol>
    </MDBRow>
  );
};

export default Pagination;
