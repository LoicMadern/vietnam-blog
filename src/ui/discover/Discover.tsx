import { Link } from "react-router-dom";
import HomeLogo from "../../components/icons/HomeLogo";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Discover.css";
import React from "react";
import filterByName from "../../lib/dataAccess";
import Post from "../../components/post/Post";
import { text } from "stream/consumers";
import PostText from "../../components/post/PostText";

export default function Discover() {
  let [description, setDescription] = React.useState("Tam Coc");

  function thumbHandler(currentIndex: number, currentItem: any) {
    let clickItem = currentItem.props.children.props.alt;
    console.log(currentItem);
    setDescription(clickItem);
  }

  return (
    <div style={{ padding: 20 }}>
      <Link to="/" style={{ padding: 10 }}>
        <HomeLogo></HomeLogo>
      </Link>

      <div className="carousel-container">
        <h1>Discover Vietnam</h1>
        <p id="description-text">Through a selection of landscapes</p>
        <div className="discover-container">
          <Carousel width={1000} onChange={thumbHandler} infiniteLoop={true}>
            <div>
              <img src={require("../../assets/mua.jpg")} alt={"Tam Coc"} />
            </div>
            <div>
              <img src={require("../../assets/lac.jpg")} alt={"Hanoi"} />
            </div>

            <div>
              <img src={require("../../assets/catba.jpg")} alt={"Cat Ba"} />
            </div>
            <div>
              <img
                src={require("../../assets/biendien.jpg")}
                alt={"Bien Dien Phu"}
              />
            </div>
            <div>
              <img src={require("../../assets/fansipan.jpg")} alt={"Sapa"} />
            </div>
            <div>
              <img src={require("../../assets/ride.jpg")} alt={"Ha Giang"} />
            </div>
            <div>
              <img src={require("../../assets/cuchi.jpg")} alt={"Cu Chi"} />
            </div>
            <div>
              <img
                src={require("../../assets/hochi.jpg")}
                alt={"Ho Chi Minh"}
              />
            </div>
          </Carousel>
          <div className="post">
            <PostText title={description}></PostText>
          </div>
        </div>
      </div>
    </div>
  );
}
