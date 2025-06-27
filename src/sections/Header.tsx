'use client';

interface HeaderProps {
  activeSection?: string;
}

export const Header = ({ activeSection }: HeaderProps) => {
  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        {['home', 'projects', 'about', 'contact'].map((section) => (
          <a
  key={section}
  href={`#${section}`}
  onClick={(e) => {
    e.preventDefault();
    const target = document.getElementById(section);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }}
  className={`nav-item ${
    activeSection === section ? 'bg-white text-gray-900' : ''
  }`}
>
  {section.charAt(0).toUpperCase() + section.slice(1)}
</a>
        ))}
      </nav>
    </div>
  );
};