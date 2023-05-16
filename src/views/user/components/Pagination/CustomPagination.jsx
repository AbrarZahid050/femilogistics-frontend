import { Pagination } from "@mui/material";

const CustomPagination = ({ count, currentPage, pageChangeHandler }) => {
  return (
    <Pagination
      size="large"
      siblingCount={0}
      color="primary"
      count={Math.ceil(count / 10)}
      page={currentPage}
      onChange={pageChangeHandler}
      variant="outlined"
      shape="rounded"
    />
  );
};

export default CustomPagination;
