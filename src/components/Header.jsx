export default function Header() {
    return (
      <header className="sticky top-0 bg-white shadow z-50">
        <nav className="container mx-auto flex items-center justify-between py-4 px-6">
          <h1 className="text-xl font-bold">Azaz Dev</h1>
          <ul className="flex space-x-6">
            {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
              <li key={item} className="hover:text-blue-500 cursor-pointer">{item}</li>
            ))}
          </ul>
          <button className="p-2 rounded-md bg-gray-200">Light/Dark</button>
        </nav>
      </header>
    );
  }
  