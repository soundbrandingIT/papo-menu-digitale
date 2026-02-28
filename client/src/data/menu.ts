export const menuData = [
  {
    id: "caffetteria",
    name: "CAFFETTERIA",
    emoji: "☕🥐",
    description: "Caffè, colazioni dolci e salate, bevande e proposte informali da vivere in diversi momenti della giornata, senza orari rigidi.",
    items: [
      { id: "c1", name: "Caffè Espresso ILLY", price: 1.50, description: "Servito con cialda e panna fresca", allergens: [] },
      { id: "c2", name: "Caffè Decaffeinato ILLY", price: 2.00, description: "Servito con cialda e panna fresca", allergens: [] },
      { id: "c3", name: "Orzo Foodness - Tazza piccola", price: 1.50, description: "Bio, Gluten Free, No OGM, Vegan", allergens: ["Glutine"] },
      { id: "c4", name: "Orzo Foodness - Tazza grande", price: 2.00, description: "Bio, Gluten Free, No OGM, Vegan", allergens: ["Glutine"] },
      { id: "c5", name: "Ginseng Foodness - Tazza piccola", price: 1.50, description: "Bio, Gluten Free, No OGM, Vegan", allergens: ["Glutine"] },
      { id: "c6", name: "Ginseng Foodness - Tazza grande", price: 2.00, description: "Bio, Gluten Free, No OGM, Vegan", allergens: [] },
      { id: "c7", name: "Cappuccino", price: 2.00, description: "", allergens: ["Latte"] },
      { id: "c8", name: "Caffelatte", price: 2.00, description: "", allergens: ["Latte"] },
      { id: "c9", name: "Latte macchiato", price: 2.00, description: "", allergens: ["Latte"] },
      { id: "c10", name: "Latte e Cacao", price: 2.00, description: "", allergens: ["Latte"] },
      { id: "c11", name: "Caffè ILLY Doppio - Tazza grande", price: 3.00, description: "Servito con cialda e panna fresca", allergens: [] },
      { id: "c12", name: "Cappuccino senza lattosio", price: 2.20, description: "", allergens: [] },
      { id: "c13", name: "Caffè Americano Illy", price: 4.00, description: "Servito con biscotteria da caffè", allergens: [] },
      { id: "c14", name: "Latte e Miele", price: 2.00, description: "", allergens: ["Latte"] },
      { id: "c15", name: "Marocchino", price: 2.00, description: "", allergens: ["Latte"] },
      { id: "c16", name: "Cappuccino Ginseng", price: 2.00, description: "", allergens: [] },
      { id: "c17", name: "Cappuccino Orzo", price: 2.00, description: "", allergens: ["Glutine", "Latte"] },
      { id: "c18", name: "Cappuccino con Latte di Soia", price: 2.30, description: "", allergens: [] },
      { id: "c19", name: "Cappuccino con Decaffeinato Illy", price: 2.20, description: "", allergens: [] },
      { id: "c20", name: "Cappuccino con Doppio Espresso ILLY", price: 3.00, description: "", allergens: [] },
      { id: "c21", name: "Cappuccino Freddo", price: 2.50, description: "", allergens: ["Latte"] },
      { id: "c22", name: "Latte e Menta", price: 3.00, description: "", allergens: [] },
      { id: "c23", name: "Caffè Shakerato ILLY", price: 4.00, description: "", allergens: [] },
      { id: "c24", name: "Latte Macchiato ZYMIL", price: 2.20, description: "", allergens: [] },
      { id: "c25", name: "Succhi di Frutta", price: 3.50, description: "", allergens: [] },
      { id: "c26", name: "Succo Mirtillo", price: 4.00, description: "", allergens: [] },
      { id: "c27", name: "Spremuta d'Arancia", price: 3.50, description: "", allergens: [] },
      { id: "c28", name: "Spremuta di Melograno", price: 7.00, description: "", allergens: [] },
      { id: "c29", name: "Estratti di Frutta", price: 6.00, description: "", allergens: [] },
      { id: "c30", name: "Frullati di Frutta", price: 6.00, description: "", allergens: [] }
    ]
  },
  {
    id: "colazione-internazionale",
    name: "COLAZIONE INTERNAZIONALE",
    emoji: "🥐🍞",
    description: "Una ricca selezione di piatti internazionali per iniziare la giornata con gusto e varietà.",
    items: [
      { id: "col1", name: "Tramezzino", price: 3.00, description: "Varie farciture", allergens: ["Glutine", "Uova", "Arachidi", "Latte", "Frutta a guscio"] },
      { id: "col2", name: "Toast", price: 5.00, description: "Varie farciture", allergens: ["Glutine", "Uova", "Arachidi", "Latte", "Frutta a guscio"] },
      { id: "col3", name: "Sandwich", price: 4.00, description: "Varie farciture", allergens: ["Glutine", "Uova", "Arachidi", "Soia", "Latte", "Frutta a guscio"] },
      { id: "col4", name: "Panbrioches", price: 1.50, description: "Trancio", allergens: ["Glutine", "Uova", "Arachidi", "Soia", "Latte", "Frutta a guscio"] },
      { id: "col5", name: "Cornettino salato", price: 1.00, description: "Varie farciture", allergens: ["Glutine", "Uova", "Arachidi", "Soia", "Latte", "Frutta a guscio"] },
      { id: "col6", name: "Paninetti all'olio piccoli", price: 1.00, description: "Varie farciture", allergens: ["Glutine", "Uova", "Arachidi", "Soia", "Latte", "Frutta a guscio"] },
      { id: "col7", name: "Paninetti all'olio grandi", price: 2.00, description: "Varie farciture", allergens: ["Glutine", "Uova", "Arachidi", "Soia", "Latte", "Frutta a guscio"] },
      { id: "col8", name: "Pizzette assortite", price: 0.50, description: "", allergens: ["Glutine", "Uova", "Arachidi", "Soia", "Latte", "Frutta a guscio"] },
      { id: "col9", name: "Uova strapazzate", price: 5.00, description: "", allergens: ["Glutine", "Uova", "Latte", "Anidride solforosa"] }
    ]
  },
  {
    id: "aperitivi-bevande",
    name: "APERITIVI & BEVANDE",
    emoji: "🍸✨",
    description: "Il momento dell'incontro e della convivialità. Cocktail, spritzeria, calici, pinseria contemporanea, taglieri e tante proposte food da condividere.",
    items: [
      { id: "a1", name: "Spritz", price: 5.00, description: "Prosecco, Aperol, soda", allergens: [] },
      { id: "a2", name: "Mojito", price: 7.00, description: "Rum bianco, menta, lime, soda", allergens: [] },
      { id: "a3", name: "Margarita", price: 8.00, description: "Tequila, triple sec, lime", allergens: [] },
      { id: "a4", name: "Negroni", price: 8.00, description: "Gin, Campari, vermouth rosso", allergens: [] },
      { id: "a5", name: "Daiquiri", price: 7.50, description: "Rum bianco, lime, zucchero", allergens: [] },
      { id: "a6", name: "Piña Colada", price: 8.00, description: "Rum bianco, latte di cocco, ananas", allergens: [] },
      { id: "a7", name: "Calice di Vino Rosso", price: 5.00, description: "Selezione vini locali", allergens: [] },
      { id: "a8", name: "Calice di Vino Bianco", price: 5.00, description: "Selezione vini locali", allergens: [] },
      { id: "a9", name: "Birra Nazionale", price: 4.50, description: "33 cl", allergens: ["Glutine"] },
      { id: "a10", name: "Birra Artigianale", price: 6.00, description: "Selezione birre artigianali", allergens: ["Glutine"] }
    ]
  },
  {
    id: "ristorante",
    name: "RISTORANTE",
    emoji: "🍽️",
    description: "Il piacere della tavola, a pranzo e a cena. Cucina curata e pinsa contemporanea pensate per essere vissute con calma.",
    items: [
      { id: "r1", name: "Antipasto della Casa", price: 12.00, description: "Selezione di salumi, formaggi e verdure", allergens: ["Latte"] },
      { id: "r2", name: "Camarones al Ajillo", price: 14.00, description: "Gamberi all'aglio e prezzemolo", allergens: ["Crostacei"] },
      { id: "r3", name: "Pasta alla Carbonara", price: 13.00, description: "Spaghetti, guanciale, uova, pecorino", allergens: ["Glutine", "Uova", "Latte"] },
      { id: "r4", name: "Risotto ai Funghi Porcini", price: 14.00, description: "Riso Carnaroli, funghi porcini, tartufo", allergens: ["Latte"] },
      { id: "r5", name: "Branzino al Forno", price: 16.00, description: "Branzino intero, limone, erbe aromatiche", allergens: ["Pesce"] },
      { id: "r6", name: "Bistecca alla Fiorentina", price: 22.00, description: "Tagliata di carne, rucola, parmigiano", allergens: [] },
      { id: "r7", name: "Pinsa Margherita", price: 10.00, description: "Pomodoro, mozzarella, basilico", allergens: ["Glutine", "Latte"] },
      { id: "r8", name: "Pinsa Quattro Formaggi", price: 12.00, description: "Mozzarella, gorgonzola, pecorino, parmigiano", allergens: ["Glutine", "Latte"] },
      { id: "r9", name: "Pinsa Prosciutto e Rucola", price: 11.00, description: "Prosciutto crudo, rucola, parmigiano", allergens: ["Glutine", "Latte"] },
      { id: "r10", name: "Pinsa Salmone Affumicato", price: 13.00, description: "Salmone affumicato, crema di formaggio, aneto", allergens: ["Glutine", "Pesce", "Latte"] },
      { id: "r11", name: "Contorno di Verdure Grigliate", price: 6.00, description: "Melanzane, zucchine, peperoni", allergens: [] },
      { id: "r12", name: "Insalata Mista", price: 8.00, description: "Rucola, pomodori, cetrioli, cipolla", allergens: [] },
      { id: "r13", name: "Insalata di Cesare", price: 10.00, description: "Lattuga romana, parmigiano, crostini, salsa cesare", allergens: ["Glutine", "Uova", "Latte", "Pesce"] },
      { id: "r14", name: "Burger Papò", price: 11.00, description: "Carne di manzo, bacon, formaggio, insalata, pomodoro", allergens: ["Glutine", "Latte"] },
      { id: "r15", name: "Hot Dog Gourmet", price: 9.00, description: "Salsiccia, crauti, senape, cipolla caramellata", allergens: ["Glutine", "Senape"] }
    ]
  }
];
