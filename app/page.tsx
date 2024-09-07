import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center p-24">
        <Image src="/rclab.png" alt="Next.js Logo" width={180} height={37} />
        <h1 className="text-3xl font-bold">Hello RC-Lab Experiment!</h1>
        <h1 className="text-3xl font-bold">NEXTJS + Electron</h1>
        <p>Aplikasi Nexjs yang dapat berjalan di multi platform</p>
      </div>
    </>
  );
}
