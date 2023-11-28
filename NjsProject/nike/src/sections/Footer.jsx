import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="" width={150} height={46} />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Soter. Get Rewards.
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div
                className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
                key={icon}
              >
                <img
                  src={icon.src}
                  alt={icon.alt}
                  width={24}
                  height={24}
                  className=""
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 lg:gap-10 gap-20 flex-wrap ">
          {footerLinks.map((section) => (
            <div className="" key={section}>
              <h4 className="text-white font-montserrat leading-normal font-medium mb-6 text-2xl">{section.title}</h4>

              <ul className="">
                {section.links.map((link) => (
                  <li className="mt-3 text-white-400 text-base leading-normal hover:text-slate-gray cursor-pointer" key={link.name}>
                    <a href="" className="">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center ">

      </div>
    </footer>
  );
};
export default Footer;
