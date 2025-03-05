import acmeLogo from "@/assets/logo-acme.png";
import quantumLogo from "@/assets/logo-quantum.png";
import echoLogo from "@/assets/logo-echo.png";
import celestialLogo from "@/assets/logo-celestial.png";
import pulseLogo from "@/assets/logo-pulse.png";
import apexLogo from "@/assets/logo-apex.png";
import Image from "next/image";
export const LogoTicker = () => {
  return (
    <div className="py-8 bg-white md:py-12">
      <div className="container">
        <div className="flex overflow-hidden e">
          <div className="flex items-center space-x-8 gap-14 flex-none ">
            <Image
              src={acmeLogo}
              className="logo-ticker-image"
              alt="acmeLogo"
            />
            <Image
              src={quantumLogo}
              className="logo-ticker-image"
              alt="quantumLogo"
            />
            <Image
              src={echoLogo}
              className="logo-ticker-image"
              alt="echoLogo"
            />
            <Image
              src={celestialLogo}
              className="logo-ticker-image"
              alt="celestialLogo"
            />
            <Image
              src={pulseLogo}
              className="logo-ticker-image"
              alt="pulseLogo"
            />
            <Image src={apexLogo} alt="apexLogo" />
          </div>
        </div>
      </div>
    </div>
  );
};
