function App() {
  return (
    <main>
      <section className="h-screen">
        <div className="flex flex-col h-full justify-center gap-16 md:gap-20 xl:gap-24">
          <div className="flex flex-col items-center">
            <div className="space-y-1 md:space-y-2 lg:space-y-3 xl:space-y-5">
              <h1 className="text-6xl md:text-[5rem] lg:text-[6rem] xl:text-[8rem] font-mins tracking-[0.2em] animate-fade-in">
                COLUXE
              </h1>
              <p className="text-xl text-center md:text-2xl xl:text-3xl text-[#173f1c] animate-fade-in">
                <strong>Con</strong>scious <strong>Lux</strong>ury
              </p>
            </div>
          </div>
          <div className="space-y-1 md:space-y-2 lg:space-y-3 xl:space-y-5 text-[#173f1c]">
            <p className="text-center text-2xl md:text-3xl xl:text-4xl animate-fade-in">
              LAUNCHING SOON
            </p>
            <p className="text-center text-base md:text-xl animate-fade-in">
              <a href="mailto:connect@coluxe.com" className="hover:underline">
                connect@coluxe.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
