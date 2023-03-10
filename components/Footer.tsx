import { ComponentChildren } from "preact";
import MushroomIcon from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/mushroom.tsx";

import BrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/brand-github.tsx";
type Props = {
  children: ComponentChildren;
};

export default function Footer({ children }: Props) {
  const menus = [
    {
      title: "Documentation",
      children: [
        { name: "Coming soon...", href: "#" },
        // { name: "Guide", href: "#" },
        // { name: "API", href: "#" },
        // { name: "Showcase", href: "#" },
        // { name: "Pricing", href: "#" },
      ],
    },
    {
      title: "Social",
      children: [
        { name: "Twitter", href: "https://twitter.com/atalocke" },
        { name: "YouTube", href: "https://youtube.com/c/atalocke" },
        { name: "Twitch", href: "https://twitch.tv/atalocke" },
      ],
    },
  ];

  return (
    <div class="flex flex-col md:flex-row w-full max-w-screen-lg gap-8 md:gap-16 px-8 py-8 text-sm">
      <div class="flex-1">
        <div class="flex items-center gap-1">
          <MushroomIcon class="inline-block" />
          <div class="font-bold text-2xl">
            Teriyaki
          </div>
        </div>
        <div class="text-gray-500">
          FOSS Dev House
        </div>
      </div>

      {menus.map((item) => (
        <div class="mb-4" key={item.title}>
          <div class="font-bold">{item.title}</div>
          <ul class="mt-2">
            {item.children.map((child) => (
              <li class="mt-2" key={child.name}>
                <a
                  class="text-gray-500 hover:text-gray-700"
                  href={child.href}
                >
                  {child.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div class="text-gray-500 space-y-2">
        <div class="text-xs">
          Copyright © 2023 Tristan Isham<br />
          All right reserved.
        </div>

        <a
          href="https://github.com/teriyaki-bytes"
          class="inline-block hover:text-black"
        >
          <BrandGithub />
        </a>
      </div>
    </div>
  );
}
