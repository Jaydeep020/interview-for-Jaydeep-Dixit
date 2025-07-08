import logo from "../Logo.png";

export default function Header() {
  return (
    <header className="border-b border-gray-200 dark:border-slate-700 py-4 my-3">
      <div className="max-w-7xl mx-auto px-4 flex justify-center">
        <img src={logo} alt="SpaceX Logo" className="h-6 md:h-8" />
      </div>
    </header>
  );
}
