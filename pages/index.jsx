import LeftAside from "@/components/LeftAside";
import NavBar from "@/components/NavBar";
import RightAside from "@/components/RightAside";
import Feed from "@/components/Feed";

export default function Home() {
  return (
    <main className="w-full min-h-screen p-1 grid grid-rows-[3.2rem_1fr] ">
      <NavBar />
      <div className="grid grid-cols-[17%_1fr_20%]">
        <LeftAside />
        <Feed />
        <RightAside />
      </div>
    </main>
  );
}
