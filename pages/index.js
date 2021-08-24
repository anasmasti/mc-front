import Link from "next/link";
import homeStyle from "../styles/pages/Home.module.scss";
import Landing from "../components/shared/landing/Landing";

export default function Home() {
  return (
    <div className={[homeStyle.home_section].join(" ")}>
      <div>
        <Landing />
      </div>
    </div>
  );
}
