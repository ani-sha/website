export default function Home() {
  return (
    <main>
      <div className="flex flex-col p-16 gap-8">
        <div className="flex flex-col gap-8 items-center">
          <div className="flex flex-col items-center">
            <h2>Anisha Mohanty</h2>
            <span className="text-sm">Software Engineer</span>
          </div>
          <p>
            As a passionate software engineer deeply engaged in the open-source
            community, I specialize in crafting scalable systems while curating
            and sharing my insights through technical blogs. Beyond the lines of
            code, I find joy in lush world of plants, artistry of home decor and
            reading books.
          </p>
        </div>
        <p className="text-left">Currently at Redhat.</p>
      </div>
    </main>
  );
}
