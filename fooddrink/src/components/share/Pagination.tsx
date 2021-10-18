import React from 'react';
import PropTypes from 'prop-types';

interface PaginationProps {
  total: number,
  handleClickPage: (page: number) => void
};

const Pagination: React.FC<PaginationProps> = props => {
  const total = props.total;
  let totalProducts = total / 8 == 0 ? total / 8 : total / 8 + 1;
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