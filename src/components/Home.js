import React from "react";

// import UserService from "../services/user.service";
import web from './images/ads6.png'
import web1 from './images/ajio.png'
import Common from './common';

const Home = () => {
  // const [content, setContent] = useState("");

  // useEffect(() => {
  //   UserService.getPublicContent().then(
  //     (response) => {
  //       setContent(response.data);
  //     },
  //     (error) => {
  //       const _content =
  //         (error.response && error.response.data) ||
  //         error.message ||
  //         error.toString();

  //       setContent(_content);
  //     }
  //   );
  // }, []);

  return (
    // <div className="container">
    //   <header className="jumbotron">
    //     <h3>{content}</h3>
    //   </header>
    // </div>

    <>
      <Common name="Get Deals and Coupons on your favourite products at lowest prices on " imgsrc={web} visit="/" btnname="Get Started" />
      <Common name="Customer-centric company, Endeavors to offer its customers the lowest possible prices " imgsrc={web1} visit="/" btnname="Get Started" />
    </>
  );
};

export default Home;


