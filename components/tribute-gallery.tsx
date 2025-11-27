interface Tribute {
  name: string
  message: string
  date: string
}

interface TributeGalleryProps {
  tributes: Tribute[]
}

export default function TributeGallery({ tributes }: TributeGalleryProps) {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-8" style={{ color: "#d4a574" }}>
        {tributes.length === 0 ? "Tributes Will Appear Here" : `Tributes (${tributes.length})`}
      </h2>

      {tributes.length === 0 ? (
        <div
          className="p-12 text-center rounded-lg"
          style={{ backgroundColor: "#fff9f3", borderLeft: "4px solid #d4a574" }}
        >
          <p className="text-lg" style={{ color: "#4a3728" }}>
            Be the first to share your tribute and cherished memories.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {tributes.map((tribute, index) => (
            <div
              key={index}
              className="p-6 rounded-lg"
              style={{
                backgroundColor: "white",
                borderLeft: "4px solid #d4a574",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg" style={{ color: "#2d1810" }}>
                  {tribute.name}
                </h3>
                <span className="text-sm" style={{ color: "#999" }}>
                  {tribute.date}
                </span>
              </div>
              <p className="text-base leading-relaxed" style={{ color: "#4a3728" }}>
                {tribute.message}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
