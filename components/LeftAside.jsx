import AsideMenu from "./LAsideMenu";

export default function LeftAside() {
  return (

    <div>
    <section className="grid grid-rows-[33%_33%_1fr_1fr]">
      <p className="p-3 text-left font-bold">Dev Community is a community of 1,710,931 amazing developers</p>
      <p className="p-3 text-left text-sm">
        {"We're a place where coders share, stay up-to-date and grow their careers"}
      </p>
      <button className="m-1 text-sky-600 border-2 border-sky-600 rounded-xl cursor-pointer hover:underline hover:bg-sky-600 hover:text-white">Create account</button>
      <button className="p-2 text-sky-600 cursor-pointer text-m hover:bg-pink-50 hover:underline hover:underline-offset-1">Log in</button>
    </section>
    <section>
        <AsideMenu />
    </section>

    </div>
  );
}
