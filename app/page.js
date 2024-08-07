import Link from "next/link"

export default function Home() {
  const linkStyles = "underline text-cyan-600 hover:text-cyan-300";
  return (
    <main className="h-screen">
      <h1 className="text-xl font-bold">CPRG 306: Web Development 2 - Assignments</h1>
      <ul>
        <li><Link className={linkStyles} href="./week-2">Week 2</Link></li>
        <li><Link className={linkStyles} href="./week-3">Week 3</Link></li>
        <li><Link className={linkStyles} href="./week-4/functions">Week 4 - Functions</Link></li>
        <li><Link className={linkStyles} href="./week-4/counter">Week 4 - Counter</Link></li>
        <li><Link className={linkStyles} href="./week-4/managed_form">Week 4 - Form</Link></li>
        <li><Link className={linkStyles} href="./week-4">Week 4</Link></li>
        <li><Link className={linkStyles} href="/week-5">Week 5</Link></li>
        <li><Link className={linkStyles} href="./week-6/Dog-page">Week 6 (Dog-Page)</Link></li>
        <li><Link className={linkStyles} href="./week-6">Week 6</Link></li>
        <li><Link className={linkStyles} href="./week-7/ArtGallery">Week 7 - Fetching Data</Link></li>
        <li><Link className={linkStyles} href="./week-7">Week 7</Link></li>
        <li><Link className={linkStyles} href="./week-8/">Week 8 - Firebase Auth</Link></li>
        <li><Link className={linkStyles} href="./week-9/">Week 9 - Firebase Auth</Link></li>
        <li><Link className={linkStyles} href="./week-10/">Week 10</Link></li>
      </ul>
    </main>
  );
}
