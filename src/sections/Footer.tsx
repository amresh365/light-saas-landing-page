import Logo from "@/assets/logosaas.png";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLink from "@/assets/social-linkedin.svg";
import SocialTwitter from "@/assets/social-x.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYou from "@/assets/social-youtube.svg";
import Image from "next/image";

export const Footer = () => {
  return (
    <section className="md:h-72 w-full  bg-black">
      <div className="md:flex text-white/60 justify-between ">
        <div className="w-72 m-6">
          <div className="w-72 m-6">
            <div>
              <Image
                src={Logo}
                height={40}
                width={40}
                alt="logo"
                className="border rounded-xl"
              />

              <p className="text-white/60 mt-6">
                Effortlessly turn your ideas into a fully functional,
                responsive, no-code SaaS website.
              </p>
            </div>
            <div className="flex mt-3">
              <SocialTwitter className="mr-4" />
              <SocialInsta className="mr-4" />
              <SocialPin className="mr-4" />
              <SocialLink className="mr-4" />
              <SocialYou className="mr-4" />
            </div>
          </div>
        </div>
        <div className="w-[400px] md:flex items-center justify-center m-8">
          <div className="product">
            <ul className="mt-10 mr-8">
              <li>
                <h4 className="text-white font-bold m-1">Product</h4>
              </li>
              <li className="m-1">Features</li>
              <li>Intregrations</li>
              <li>Updates</li>
              <li>FAQ</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div className="company ">
            <ul className="mt-10 mr-8">
              <li>
                <h4 className="text-white font-bold">Company</h4>
              </li>
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Manifesto</li>
              <li>Press</li>
              <li>Contect</li>
            </ul>
          </div>
          <div className="resourse">
            <ul className="mt-10 mr-8">
              <li>
                <h4 className="text-white font-bold">Resources</h4>
              </li>
              <li>Examples</li>
              <li>Community</li>
              <li>Guides</li>
              <li>Docs</li>
            </ul>
          </div>
          <div className="legal">
            <ul className="mt-10 mr-8">
              <li>
                <h4 className="text-white font-bold">Legal</h4>
              </li>
              <li>privacy</li>
              <li>Terms</li>
              <li>Security</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
