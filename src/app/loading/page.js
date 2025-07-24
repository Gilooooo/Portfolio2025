import Link from "next/link";

export default function Loading() {
  return (
    <div className="w-full h-[100dvh] flex items-center justify-center gap-2 fadein">
      <Link href="/" className="flex gap-2">
        <p>Angelo</p>
        <p>Sabornido</p>
      </Link>
    </div>
  );
}
