import { useLocation } from "wouter";
import { useMenuData } from "@/data/useMenuData";
import { ChevronRight } from "lucide-react";

/**
 * Design Philosophy: Clean White Background con Pattern Parallax
 * Home page con card delle categorie come entry point
 * Background pattern sottile che si muove durante lo scroll
 */

const LOGO_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663379117557/eTtcGvqjOzbydLrD.png";

const categoryBackgroundImages: Record<string, string> = {
  "caffetteria": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663379117557/HbBJDZqyfbljxOMA.jpg",
  "colazione-internazionale": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663379117557/ZhvBMLTjUjVePaxk.jpg",
  "aperitivi-bevande": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663379117557/jEpZHXIhNebeIaqr.jpg",
  "ristorante": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663379117557/JlRWptxUqprhgqFr.jpg",
};

export default function Home() {
  const [, navigate] = useLocation();

  
  const { menuData } = useMenuData();
return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
        <div className="container py-6">
          <div className="flex flex-col items-center justify-center">
            {LOGO_URL ? (
              <img src={LOGO_URL} alt="Papò Logo" className="h-16 mb-2" />
            ) : (
              <h1 className="text-5xl font-bold tracking-tight" style={{ fontFamily: "Montserrat" }}>
                Papò
              </h1>
            )}
            <p className="text-sm text-muted-foreground mt-2">Food Experience</p>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-32 px-4 text-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://files.manuscdn.com/user_upload_by_module/session_file/310519663379117557/FKafABXSxnBxhdwi.jpg')",
          }}
        />
        
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Content */}
        <div className="container max-w-2xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg" style={{ fontFamily: "Montserrat" }}>
            Scopri il Menù
          </h2>
          <p className="text-lg text-white/90 mb-8 drop-shadow-md" style={{ fontFamily: "Lora" }}>
            Scopri tutta la Food Experience di Papò - Scegli una categoria e lasciati sorprendere
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <main className="container py-16">
        <div className="grid gap-8 md:grid-cols-2">
          {menuData.map((category) => (
            <button
              key={category.id}
              onClick={() => navigate(`/menu/${category.id}`)}
              className="group relative h-64 rounded-lg overflow-hidden border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 opacity-50 group-hover:opacity-60 transition-opacity duration-300 bg-cover bg-center"
                style={{
                  backgroundImage: `url('${categoryBackgroundImages[category.id] || ""}')`,
                }}
              />

              {/* Gradient Overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/20 to-black/40" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 z-10">
                <span className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {category.emoji}
                </span>
                <h3
                  className="text-2xl md:text-3xl font-bold text-white mb-2 text-center drop-shadow-lg"
                  style={{ fontFamily: "Montserrat" }}
                >
                  {category.name}
                </h3>
                <p
                  className="text-white/90 text-center text-sm mb-4 line-clamp-2 drop-shadow-md"
                  style={{ fontFamily: "Lora" }}
                >
                  {category.description}
                </p>
                <div className="flex items-center gap-2 text-white group-hover:gap-4 transition-all duration-300 font-semibold drop-shadow-md">
                  <span>Scopri</span>
                  <ChevronRight className="w-5 h-5" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-secondary border-t border-border py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4" style={{ fontFamily: "Montserrat" }}>
                Papò Food Experience
              </h3>
              <p className="text-sm text-muted-foreground" style={{ fontFamily: "Lora" }}>
                Cucina italiana autentica con ingredienti freschi del territorio locale. Scopri le nostre proposte culinarie.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4" style={{ fontFamily: "Montserrat" }}>
                Orari
              </h4>
              <p className="text-sm text-muted-foreground" style={{ fontFamily: "Lora" }}>
                Lunedì - Domenica
                <br />
                12:00 - 23:00
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4" style={{ fontFamily: "Montserrat" }}>
                Contatti
              </h4>
              <p className="text-sm text-muted-foreground" style={{ fontFamily: "Lora" }}>
                Tel: +39 0775487801
                <br />
                Email: papofrosinone@gmail.com
              </p>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© 2026 Papò Food Experience. Tutti i diritti riservati.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
