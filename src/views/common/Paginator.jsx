import ReactPaginate from "react-paginate";
import arrow_left from "../../assets/Paginator/arrow_left.svg";
import arrow_right from "../../assets/Paginator/arrow_right.svg";
import classes from "./common.module.css";

const Paginator = ({
  itemOffset,
  endOffset,
  itemsLength,
  handlePageClick,
  pageCount,
}) => {
  return (
    <>
      <div className={classes.result_container}>
        <p>
          Showing {itemOffset} to {endOffset} of {itemsLength} results
        </p>
        <ReactPaginate
          pageCount={pageCount}
          onPageChange={handlePageClick}
          className={classes.react_pagination}
          activeLinkClassName={classes.active_link}
          breakLabel="..."
          previousLinkClassName={classes.previous_link}
          nextLinkClassName={classes.next_link}
          previousClassName={classes.previous_button}
          nextClassName={classes.next_button}
          previousLabel={<img src={arrow_left} alt="Previous" />}
          nextLabel={<img src={arrow_right} alt="Next" />}
        />
      </div>
    </>
  );
};

export default Paginator;
