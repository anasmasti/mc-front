import homeStyle from "../styles/pages/Home.module.scss";
import Landing from "../components/shared/landing/Landing";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementCount } from "../store/actions";

export default function Home() {
  // const dispatch = useDispatch();
  // const count = useSelector((state) => state.counter.count);
  
  // const getCount = () => {
  //   dispatch(incrementCount());
  //   console.log(count);
  // }


  return (
    <div className={[homeStyle.home_section].join(" ")}>
      <div>
        {/* <h1>{ count }</h1>
        <button onClick={getCount}>Get Count</button> */}
        <Landing />
      </div>
    </div>
  );
}
