export default function Header() {
  return (
    <header className="w-full text-center py-8 md:py-12" style={{ backgroundColor: "#f5f1eb" }}>
      <div className="max-w-4xl mx-auto px-4">
        <p className="text-sm tracking-widest uppercase mb-4" style={{ color: "#d4a574" }}>
          Transition to Glory
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#2d1810" }}>
          In Loving Memory
        </h1>
        <div className="h-1 w-20 mx-auto mb-6 rounded-full" style={{ backgroundColor: "#d4a574" }} />
        <p className="text-base leading-relaxed max-w-2xl mx-auto" style={{ color: "#4a3728" }}>
          In total submission to the will of God Almighty, the entire family announces the transition into glory of our
          father, husband, brother, uncle and grandfather.
        </p>
      </div>
    </header>
  )
}
