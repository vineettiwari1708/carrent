import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  const linkSections = [
    {
      title: "Quick Links",
      links: ["Home", "Best Sellers", "Offers & Deals", "Contact Us", "FAQs"],
    },
    {
      title: "Need Help?",
      links: [
        "Delivery Information",
        "Return & Refund Policy",
        "Payment Methods",
        "Track your Order",
        "Contact Us",
      ],
    },
    {
      title: "Follow Us",
      links: ["Instagram", "Twitter", "Facebook", "YouTube"],
    },
  ];
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-60 text-sm text-gray-500">
      <div className="flex flex-wrap justify-between items-start gap-8 pb-6 border-b border-borderColor">
        <div>
          <img className="h-8 md:h-9" src={assets.logo} alt="logo" />
          <p className="max-w-80 mt-3">
            Premium car rental service with a wide selection of luxury and
            everyday vehicles for all your driving needs.
          </p>
          <div class="flex items-center gap-3 mt-6">
            <a href="#">
              <img src={assets.instagram_logo} alt="" className="w-5 h-5" />
            </a>
            <a href="#">
              <img src={assets.facebook_logo} alt="" className="w-5 h-5" />
            </a>
            <a href="#">
              <img src={assets.twitter_logo} alt="" className="w-5 h-5" />
            </a>
            <a href="#">
              <img src={assets.gmail_logo} alt="" className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="flex flex-wrap justify-between w-full md:w-[50%] gap-5">
          {linkSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">
                {section.title}
              </h3>
              <ul className="text-sm space-y-1">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="hover:underline transition">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
      </div>
      <div className="flex flex-col md:flex-row gap-2 items-center justify-between py-5">
          <p className="flex items-center">© {new Date().getFullYear()} Brand. All Right Reserved.</p>
          <ul className="flex items-center gap-4">
            <li>
              <a href="#">Privacy </a>
              <span> | </span>
            </li>
            <li>
              <a href="#">Terms </a>
              <span> | </span>
            </li>
            <li>
              <a href="#">Cookies</a>
            </li>
          </ul>
        </div>
    </div>
  );
};

export default Footer;
