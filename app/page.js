import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
const poppins = localFont({
  src: "./fonts/Poppins-BoldItalic.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});
export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh] ">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className={`font-bold text-2xl ${poppins.className}`}>The Best URL shortener in the market</div>
        <div className="px-44">We are the most straight forward URL Shortener in the world.Most of the URL Shortener will track you or ask you to give your details for Login.We understand your needs and hence providing you this URL Shortener.</div>
        <div className="flex gap-3 ">
        <Link href="/shorten"><button className="text-white bg-purple-500 rounded-lg p-3 py-1  font-bold">Try Now</button></Link>
        <Link href="/github"><button className="text-white bg-purple-500 rounded-lg p-3 py-1  font-bold">Github</button></Link>
        </div>
      </div>
      <div className="relative">
        <Image src="/images.jpg" alt="vector" fill className="mix-blend-plus-darker"></Image>
      </div>
      </section>
    </main>
  );
}
