import React from "react";

import { HeaderDesktop } from "./HeaderDesktop";
import { HeaderMobile } from "./HeaderMobile";

export const Header = () => {
  return (
<section className=" text-textLight">
    <HeaderMobile />
    <HeaderDesktop />
</section>
  );
};
