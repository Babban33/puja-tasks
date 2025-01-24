import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Link href="/taskone">
        <button className="px-4 py-2 bg-orange-500 text-white rounded">
          Task1
        </button>
      </Link>
    </div>
  );
}
