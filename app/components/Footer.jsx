import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#00000098]  shadow-md fixed bottom-0 z-50 py-5 text-center text-white w-full flex justify-center ">
      <div className="max-w-5xl flex items-center  justify-between w-full">
        <div>
          <p>© 2025 W567 game</p>
        </div>
        <div className=" hidden md:block">
          <ul className="flex gap-3">
            <li className="underline">
              <Link href={"/about-us"}>About</Link>
            </li>{" "}
            <li className="underline">
              <Link href={"/privacy-policy"}>Privacy</Link>
            </li>
            <li className="underline">
              <Link href={"/terms-and-conditions"}>terms and conditions</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
