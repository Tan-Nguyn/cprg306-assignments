import Link from "next/link"

export default function Home() {
  const linkStyles = "underline text-cyan-600 hover:text-cyan-300";
  return (
    <main className="h-screen">
    <h1 className="text-xl font-bold">CPRG 306: Web Development 2 - Assignments</h1>
    <Link className = {linkStyles} href="./week-2">Page 2</Link>
  </main>
  );
}
