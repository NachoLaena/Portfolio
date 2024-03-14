export default function Hero() {
  return (
    <>
      <div className="h-dvh flex flex-col items-center justify-center p-10 gap-4 font-mono">
        <img
          src="/avatar.png"
          alt="programmer avatar"
          className="w-60 lg:w-64"
        />
        <h1 className="text-primary-foreground font-bold text-3xl text-center text-balance">
          Hi, I'm <span className="text-[#aef3f2] text-4xl">Ignacio Laena</span>
        </h1>
      </div>
    </>
  );
}
