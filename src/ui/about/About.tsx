import { Link } from "react-router-dom";
import HomeLogo from "../../components/icons/HomeLogo";
import "./About.css";
export default function About() {
  return (
    <div>
      <Link to="/" style={{ padding: 10 }}>
        <HomeLogo></HomeLogo>
      </Link>
      <div className="about-top-container">
        <h1>Why this blog ? </h1>

        <div className="about-container">
          <div className="about-text">
            <p>
              This blog is a souvenir of my travel in Vietnam on
              <span className="font-style"> October 2023.</span> The idea trip
              was to walk in the footsteps of my
              <span className="font-style"> grandfather</span> which did the
              <span className="font-style"> Indochina war</span>. This iniative
              connects me with the history of my family and my country.
            </p>
          </div>
          <div>
            <img
              className="myself-picture"
              src={require("../../assets/me.jpg")}
              alt={"Me"}
            />
          </div>
        </div>
        <div className="about-container">
          <div className="about-text">
            <p>
              When he was just an adult (18 years old for the French majority)
              He enrolled in the army to defend its country and discover new
              places. Originally he would like to go to Africa but went to
              Vietnam when the Indochina war begun. He embarked in Marseille and
              crossed the world in one month with the boat name Paster. During
              the war in was a truck driver delivering weapons and soldiers to
              the battlefield.
            </p>
            <p>
              He is now <span className="font-style"> 91 years old</span>.
            </p>
          </div>
          <div>
            <img
              className="grandpa-picture"
              src={require("../../assets/papi.jpg")}
              alt={"My GrandFather"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
