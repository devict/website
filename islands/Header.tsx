import MenuIcon from "tabler_icons/menu.tsx";
import { useState } from "preact/hooks";

type Props = {
  active: string;
  nav: { name: string; href: string; target?: string }[];
};

export default function Header({ active, nav }: Props) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  return (
    <div class="bg-white w-full p-6 flex flex-col md:flex-row gap-4 mb-8 rounded-lg border-slate-200 border-1">
      <div class="flex items-center justify-between flex-1">
        <a href="/" title="Home">
          <img src="/devict-logo.svg" class="h-12" alt="devICT logo" />
        </a>
        <button
          class="md:hidden"
          onClick={() => setDropdownOpen(!isDropdownOpen)}
        >
          <MenuIcon />
        </button>
      </div>
      <div
        class={
          "md:flex md:hidden md:items-center " +
          (isDropdownOpen ? "flex flex-col items-end" : "hidden")
        }
      >
        <ul class="gap-5 sm:gap-10 flex mt-2 flex-row flex-wrap justify-center w-full">
          {nav.map((item) => (
            <li class="text-right pb-1 border-b-1 border-slate-100 hover:border-slate-200 rounded flex-none">
              <a
                href={item.href}
                target={item.target ?? ""}
                class={
                  "text-gray-500 hover:text-gray-700 py-1 border-gray-500" +
                  (item.href === active ? " font-bold border-b-2" : "")
                }
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <ul class="hidden md:flex md:items-center gap-6">
        {nav.map((item) => (
          <li>
            <a
              href={item.href}
              target={item.target ?? ""}
              class={
                "text-gray-500 hover:text-gray-700 hover:border-gray-600 hover:border-b-1 py-1 border-gray-500" +
                (item.href === active ? " border-b-1" : "")
              }
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
