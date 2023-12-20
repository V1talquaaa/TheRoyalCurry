import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";

export const Footer = () => {
  return (
    <section
      id="contacts"
      className="text-left pt-[32px] pb-[70px] bg-orange-400 text-[white] lg:text-center"
    >
      <div className="container lg:flex justify-between items-center">
        <h2 className="mb-[24px] text-2xl lg:mb-0 lg:text-5xl">
          The Royal Curry
        </h2>
        <ul className="hidden lg:block">
          <li className="mb-[12px] hover:scale-125 transition-all">
            <a href="">About Us</a>
          </li>
          <li className="mb-[12px] hover:scale-125 transition-all">
            <a href="">Preferences</a>
          </li>
          <li className="mb-[12px] hover:scale-125 transition-all">
            <a href="">Reviews</a>
          </li>
          <li className="mb-[12px] hover:scale-125 transition-all">
            <a href="">Gallery</a>
          </li>
          <li className="hover:scale-125 transition-all">
            <a href="">Main</a>
          </li>
        </ul>
        <div>
          <h3 className="mb-[12px]">Follow us on:</h3>
          <ul className="flex mb-[24px] lg:mb-0 lg:justify-between">
            <li className="mr-[12px]">
              <a
                href="https://web.telegram.org/"
                target="_black"
                rel="noopener noreferrer nofollow"
              >
                <TelegramIcon
                  fontSize="large"
                  className="hover:scale-125 transition-all"
                />
              </a>
            </li>
            <li className="mr-[12px]">
              <a
                href="https://instagram.com"
                target="_black"
                rel="noopener noreferrer nofollow"
              >
                <InstagramIcon
                  fontSize="large"
                  className="hover:scale-125 transition-all"
                />
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com"
                target="_black"
                rel="noopener noreferrer nofollow"
              >
                <FacebookIcon
                  fontSize="large"
                  className="hover:scale-125 transition-all"
                />
              </a>
            </li>
          </ul>
        </div>
        <div className="grid gap-[16px] grid-cols-2 text-left lg:block">
          <div>
            <h3>Adress:</h3>
            <p className="mb-[24px]">815 Wayne Ave, Chambersburg, PA 17201</p>
          </div>
          <div>
            <h3>Phone:</h3>
            <p>717-263-2660</p>
          </div>
        </div>
        <p className="text-sm text-center lg:hidden">2023 &copy; The Royal Curry, All rights reserved.</p>
      </div>
    </section>
  );
};
