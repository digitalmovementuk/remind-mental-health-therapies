export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 transition-all duration-300 ease-in-out backdrop-blur-md bg-[rgba(10,10,20,0.6)]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-white">
        <a href="#main" className="font-bold text-2xl tracking-tight">Re<span className="text-coral">;</span>mind</a>
        <div className="hidden gap-8 md:flex"><a href="#services">Services</a><a href="#approach">Our Approach</a><a href="#about">About Us</a><a href="#team">Team</a></div>
        <div className="flex items-center gap-4"><a href="#stories" className="hidden md:inline">Stories</a><a className="rounded-full border border-white px-6 py-2 transition hover:bg-white hover:text-navy" href="#book">Book a Session</a></div>
      </nav>
    </header>
  );
}