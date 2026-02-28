import { useParams, useLocation } from "wouter";
import { useMenuData } from "@/data/useMenuData";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";

const categoryBackgrounds: Record<string, string> = {
  "caffetteria": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663379117557/HbBJDZqyfbljxOMA.jpg",
  "colazione-internazionale": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663379117557/ZhvBMLTjUjVePaxk.jpg",
  "aperitivi-bevande": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663379117557/jEpZHXIhNebeIaqr.jpg",
  "ristorante": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663379117557/JlRWptxUqprhgqFr.jpg",
};

const categoryHeroImages: Record<string, string> = {
  "caffetteria": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663379117557/RBCeFAVxaoOhZZwL.jpg",
  "colazione-internazionale": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663379117557/YdqbWITuaLpYVNEp.jpg",
  "aperitivi-bevande": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663379117557/fcSyAfMvNSXsodHa.jpg",
  "ristorante": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663379117557/GikAcQfoyreUXJmF.jpg",
};

export default function CategoryPage() {
  const { categoryId } = useParams();
  const [, navigate] = useLocation();
  
  const { menuData } = useMenuData();
const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const category = menuData.find((cat) => cat.id === categoryId);
  const backgroundImage = categoryBackgrounds[categoryId || ""];

  if (!category) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Categoria non trovata</h1>
          <button
            onClick={() => navigate("/")}
            className="text-accent hover:text-accent/80 transition-colors"
          >
            Torna alla home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      {/* Background Pattern con Parallax */}
      <div
        className="fixed inset-0 -z-10 opacity-20"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
          transform: `translateY(${scrollY * 0.5}px)`,
          transition: "transform 0.1s ease-out",
        }}
      />

      {/* Header Sticky */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
        <div className="container py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate("/")}
              className="p-2 hover:bg-secondary rounded-lg transition-colors"
            >
              <ArrowLeft className="w-6 h-6 text-foreground" />
            </button>
            <div className="flex flex-col items-start">
              <h1 className="text-3xl font-bold tracking-tight" style={{ fontFamily: "Montserrat" }}>
                {category.name}
              </h1>
              <p className="text-sm text-muted-foreground mt-1">{category.emoji}</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Image */}
      <div className="relative h-96 w-full overflow-hidden mb-8 z-10">
        <img
          src={categoryHeroImages[categoryId || ""]}
          alt={category.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      {/* Main Content */}
      <main className="container py-12 relative z-10">
        {/* Category Description */}
        <div className="mb-12 bg-white/90 backdrop-blur rounded-lg p-8 border border-border shadow-sm">
          <p className="text-lg text-black" style={{ fontFamily: "Lora" }}>
            {category.description}
          </p>
        </div>

        {/* Items Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {category.items.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white/95 backdrop-blur border border-border rounded-lg p-6 hover:border-accent/50 hover:shadow-md transition-all duration-300"
            >
              {/* Item Header */}
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <h3
                    className="text-lg font-semibold text-black group-hover:text-accent transition-colors duration-300"
                    style={{ fontFamily: "Montserrat" }}
                  >
                    {item.name}
                  </h3>
                </div>
                <span className="text-accent font-bold ml-4 whitespace-nowrap" style={{ fontFamily: "Montserrat" }}>
                  €{item.price.toFixed(2)}
                </span>
              </div>

              {/* Description */}
              {item.description && (
                <p className="text-sm text-gray-700 mb-3" style={{ fontFamily: "Lora" }}>
                  {item.description}
                </p>
              )}

              {/* Allergens */}
              {item.allergens && item.allergens.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-border">
                  {item.allergens.map((allergen) => (
                    <span
                      key={allergen}
                      className="text-xs bg-accent/10 text-accent px-2 py-1 rounded"
                    >
                      {allergen}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/90 backdrop-blur border-t border-border py-12 mt-20 relative z-10">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4 text-black" style={{ fontFamily: "Montserrat" }}>
                Papò
              </h3>
              <p className="text-sm text-gray-700" style={{ fontFamily: "Lora" }}>
                Contemporary Lounge Bar & Restaurant
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-black" style={{ fontFamily: "Montserrat" }}>
                Orari
              </h4>
              <p className="text-sm text-gray-700" style={{ fontFamily: "Lora" }}>
                Aperti ogni giorno, per tutto il giorno
                <br />
                dalla colazione al dopocena
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-black" style={{ fontFamily: "Montserrat" }}>
                Contatti
              </h4>
              <p className="text-sm text-gray-700" style={{ fontFamily: "Lora" }}>
                Tel: 0775 457801
                <br />
                WhatsApp: 351 628 1513
                <br />
                Email: papofrosinone@gmail.com
                <br />
                Via Adige 43, Frosinone
              </p>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-gray-700">
            <p>© 2026 Papò - Contemporary Lounge Bar & Restaurant. Tutti i diritti riservati.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
