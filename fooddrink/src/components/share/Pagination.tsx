import React from 'react';

interface PaginationProps {
  total: number,
  handleClickPage: (page: number) => void,
  limit: number
};

const Pagination: React.FC<PaginationProps> = props => {
  const total = props.total;
  let totalProducts = 0;
  if (total > props.limit)
    totalProducts = total % props.limit === 0 ? total / props.limit : total / props.limit + 1;
  let paginationList = [] as any[];
  for (let i = 1; i <= totalProducts; i++) {
    paginationList.push(i);
  }
  return (
    <div>
      <div className="pagination-container">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/*=======  pagination-content  =======*/}
              <div className="pagination-content text-center">
                <ul>
                  {
                    paginationList.map(page => (
                      <li key={page}><button onClick={() => props.handleClickPage(page)}>{page}</button></li>
                    ))
                  }
                </ul>
              </div>
              {/*=======  End of pagination-content  =======*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pagination;