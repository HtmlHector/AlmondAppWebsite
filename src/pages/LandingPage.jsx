import Button from "../components/Button.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAppStoreIos,
  faGooglePlay,
  faInstagram,
  faTiktok,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function LandingPage() {
  return (
    <>
      <section
        className={
          "hero px-[1em] py-[2em] overflow-hidden gap-[2em] flex flex-col h-[100dvh] justify-between"
        }
      >
        <div className={"flex flex-col gap-[1em] items-center justify-center"}>
          <h1 className={"text-[2rem] max-w-[20ch] font-semibold text-center"}>
            Find <span className={"text-secondary font-bold"}>Safe</span> Foods
            That You Can Actually Eat!
          </h1>
          <p className={"text-center"}>
            Sign up now to get notified the moment Almonds launches and discover
            foods you can actually eat.
          </p>
          <div>
            <Button isPrimary={true}>Join Now</Button>
          </div>
        </div>
        <div className={"flex items-center"}>
          <img
            src="image.png"
            alt=""
            className="w-full h-[210px] object-cover object-top"
          />
          <img
            src="Group 69.png"
            alt=""
            className="w-full h-[250px] object-cover object-top"
          />
          <img
            src="Group 69.png"
            alt=""
            className="w-full h-[210px] object-cover object-top"
          />
        </div>
        <div
          style={{ display: "flex", gap: "20px", fontSize: "32px" }}
          className={"flex justify-center"}
        >
          <FontAwesomeIcon icon={faTiktok} style={{ color: "#000" }} />
          <FontAwesomeIcon icon={faInstagram} style={{ color: "#000" }} />
          <FontAwesomeIcon icon={faAppStoreIos} style={{ color: "#000" }} />
        </div>
      </section>
    </>
  );
}
