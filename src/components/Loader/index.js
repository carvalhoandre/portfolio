import { ClockLoader } from "react-spinners";

function Loader() {
  return (
    <div className="loader" aria-labelledby="label-loading">
      <ClockLoader size={100} color="#5022c3" />
    </div>
  );
}

export default Loader;
