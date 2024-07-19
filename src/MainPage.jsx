import React from "react";
import { useSpring, animated } from "@react-spring/web";
import EmailForm from "./EmailForm";
import { TypeAnimation } from "react-type-animation";
import logo from "./assets/stolensocietylogo.png";

const MainPage = () => {
  // Animation for the logo
  const logoAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(-50px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 1000 },
  });

  // Animation for the email form
  const formAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 1000 },
    delay: 500,
  });

  // Animation for the typography
  const typographyAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
    delay: 1000,
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-black text-white">
      <animated.img style={logoAnimation} src={logo} alt="Logo" className="h-[250px] w-auto" loading="eager" />
      <animated.div style={typographyAnimation} className="mb-2">
        <TypeAnimation
          sequence={["JOIN THE WAITING LIST FOR 20% OFF!", 1000]}
          wrapper="span"
          speed={20}
          style={{
            fontSize: "1em",
            display: "inline-block",
            fontFamily: "'Roboto', sans-serif",
          }}
          repeat={Infinity}
        />
      </animated.div>
      <animated.div style={formAnimation}>
        <EmailForm />
      </animated.div>
    </div>
  );
};

export default MainPage;
