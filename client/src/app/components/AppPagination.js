import { Pagination, Typography } from "@material-ui/core";
import { Box } from "@material-ui/system";
import React, { useState } from "react";

export default function AppPagination({ metaData, onPageChange }) {
  const { currentPage, totalCount, totalPages, pageSize } = metaData;
  const [pageNumber, setPageNumber] = useState(currentPage);

  function handlePageChange(page) {
    setPageNumber(page);
    onPageChange(page);
  }
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      sx={{ pb: 5 }}
    >
      <Typography>
        Displaying {(currentPage - 1) * pageSize + 1} - {"  "}
        {currentPage * pageSize > totalCount
          ? totalCount
          : currentPage * pageSize}{" "}
        of {totalCount} items
      </Typography>
      <Pagination
        color="secondary"
        size="large"
        count={totalPages}
        page={pageNumber}
        onChange={(e, page) => handlePageChange(page)}
      />
    </Box>
  );
}
