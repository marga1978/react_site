import banner from "../assets/banner.png";
import {Banner} from '../shared/Banner'

export default function Home() {
  return (
    <div className="md: px-12 p-4 max-w-screen-2xl mx-auto mt-28">
      <Banner banner={banner} heading={"Develop your skills without diligence"} 
      subheading={"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"} 
      btn1={"Get started"}
      btn2={"Discount"}
      />
    </div>
  );
}
