import { Fragment } from "preact";

const Paginator = (props: {
  page: number;
  lastPage: number;
  pageChanged: (page: number) => void;
}) => {
  const paginateNext = () => {
    if (props.page < props.lastPage) {
      props.pageChanged(props.page + 1);
    }
  };

  const paginatePrev = () => {
    if (props.page > 1) {
      props.pageChanged(props.page - 1);
    }
  };

  return (
    <Fragment>
      <nav class="level ml-6 mt-4">
        <ul class="pagination">
            <li class="page-item">
                <button class="btn" onClick={paginatePrev}>Previous</button>
            </li>
            <li class="page-item">
                <button class="btn" onClick={paginateNext}>Next</button>
            </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default Paginator;