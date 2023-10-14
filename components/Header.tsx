type Props = {
  active: string;
};

export default function Header({ active }: Props) {
  const menus = [
    { name: "Home", href: "/" },
  ];

  return (
    <div class="bg-white w-full max-w-screen-lg py-6 flex flex-col md:flex-row gap-4">
      <div class="flex items-center flex-1">
        <img src="/devict-logo.svg" class="h-12" alt="devICT logo" />
      </div>
      <ul class="flex items-center gap-6">
        {menus.map((menu) => (
          <li>
            <a
              href={menu.href}
              class={"text-gray-500 hover:text-gray-700 py-1 border-gray-500" +
                (menu.href === active ? " font-bold border-b-2" : "")}
            >
              {menu.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
