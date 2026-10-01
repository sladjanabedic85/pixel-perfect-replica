import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Menu, X, Mail, Github, Linkedin, ArrowRight, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sladjana Bedic — Junior Frontend Developer" },
      { name: "description", content: "Portfolio of Sladjana Bedic, a junior frontend developer building responsive React web apps." },
      { property: "og:title", content: "Sladjana Bedic — Junior Frontend Developer" },
      { property: "og:description", content: "Responsive, user-friendly web apps with React, JavaScript, HTML and CSS." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const NAV = ["Home", "About", "Skills", "Projects", "Contact"];
const SKILLS = ["HTML", "CSS", "JavaScript", "React", "Git", "GitHub", "Responsive Design", "Basic API Integration"];
const PROJECTS = [
  { title: "eCommerce Product Page", desc: "A responsive product details page with product image, price, description and Add to Cart button.", tech: ["React", "CSS", "JavaScript"] },
  { title: "To Do App", desc: "A simple task management app where users can add, complete and delete tasks.", tech: ["React", "useState", "CSS"] },
  { title: "Weather Dashboard", desc: "A small dashboard that shows weather information using sample API data.", tech: ["JavaScript", "API", "Responsive Design"] },
];

const btnPrimary = "inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 font-semibold text-primary-foreground transition hover:scale-105 hover:shadow-[var(--shadow-glow)]";
const btnGhost = "inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-semibold transition hover:border-primary hover:text-primary";

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
      <h2 className="mb-10 text-3xl font-bold md:text-4xl">
        <span className="text-gradient">{title}</span>
      </h2>
      {children}
    </section>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="grid h-10 w-10 place-items-center rounded-xl bg-brand font-display font-bold text-primary-foreground">AP</a>
        <ul className="hidden gap-8 md:flex">
          {NAV.map((n) => (
            <li key={n}><a href={`#${n.toLowerCase()}`} className="text-muted-foreground transition hover:text-primary">{n}</a></li>
          ))}
        </ul>
        <button className="md:hidden" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <ul className="flex flex-col gap-1 border-t border-border px-6 py-4 md:hidden">
          {NAV.map((n) => (
            <li key={n}><a onClick={() => setOpen(false)} href={`#${n.toLowerCase()}`} className="block rounded-lg px-3 py-2 hover:bg-secondary">{n}</a></li>
          ))}
        </ul>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="bg-glow">
      <div className="mx-auto flex min-h-[85vh] max-w-6xl flex-col justify-center px-6 py-24">
        <p className="mb-4 font-medium text-primary">Hi, I'm</p>
        <h1 className="text-5xl font-extrabold leading-tight md:text-7xl">Sladjana Bedic</h1>
        <p className="mt-3 text-2xl font-semibold text-gradient md:text-3xl">Junior Frontend Developer</p>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          I am a junior frontend developer focused on building responsive, user-friendly web applications using React, JavaScript, HTML and CSS. I enjoy turning ideas into clean and functional interfaces.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a href="#projects" className={btnPrimary}>View Projects <ArrowRight size={18} /></a>
          <a href="#contact" className={btnGhost}>Contact Me</a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" title="About Me">
      <div className="card-soft max-w-3xl p-8 text-lg leading-relaxed text-muted-foreground">
        I'm at the beginning of my frontend journey and loving every step. Right now I'm deepening my knowledge of React, sharpening my JavaScript fundamentals and building practical projects that solve real everyday problems. I care about clean code, accessible layouts and interfaces that feel good on every screen size — and I'm always eager to learn from feedback and from the developer community.
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {SKILLS.map((s) => (
          <div key={s} className="card-soft flex items-center gap-3 p-5 font-semibold">
            <span className="h-2.5 w-2.5 rounded-full bg-brand" />{s}
          </div>
        ))}
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p) => (
          <article key={p.title} className="card-soft flex flex-col overflow-hidden">
            <div className="h-2 bg-brand" />
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-xl font-bold">{p.title}</h3>
              <p className="mt-3 flex-1 text-muted-foreground">{p.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-primary">{t}</span>
                ))}
              </div>
              <a href="#" className={`${btnGhost} mt-6 justify-center text-sm`}>View Project <ExternalLink size={16} /></a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
  };
  const input = "w-full rounded-xl border border-input bg-secondary px-4 py-3 outline-none transition focus:border-primary";
  const links = [
    { icon: Mail, label: "sladjana.bedic@gmail.com", href: "mailto:sladjana.bedic@gmail.com" },
    { icon: Github, label: "github.com/sladjanabedic85", href: "https://github.com/sladjanabedic85" },
    { icon: Linkedin, label: "linkedin.com/in/sladjanabedic85", href: "https://www.linkedin.com/in/sladjanabedic85" },
  ];
  return (
    <Section id="contact" title="Contact">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <p className="text-lg text-muted-foreground">Have a question or an opportunity? I'd love to hear from you.</p>
          {links.map(({ icon: Icon, label, href }) => (
            <a key={href} href={href} target="_blank" rel="noreferrer" className="card-soft flex items-center gap-4 p-4">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand text-primary-foreground"><Icon size={18} /></span>
              <span className="break-all">{label}</span>
            </a>
          ))}
        </div>
        <form onSubmit={onSubmit} className="card-soft space-y-4 p-6">
          <input required name="name" placeholder="Your name" className={input} />
          <input required type="email" name="email" placeholder="Your email" className={input} />
          <textarea required name="message" rows={5} placeholder="Your message" className={input} />
          <button type="submit" className={`${btnPrimary} w-full justify-center`}>Send Message</button>
          {sent && <p className="text-sm text-primary">Thanks! Your message has been noted (demo only).</p>}
        </form>
      </div>
    </Section>
  );
}

function Portfolio() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Sladjana Bedic. Built with React.
      </footer>
    </div>
  );
}
