import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const categories = [
  {
    title: "Heutige Spezialität",
    items: [
      { name: "Heutige Spezialität De 11h30 à 16h", price: "12,00" },
    ],
  },
  {
    title: "Unsere Formel",
    items: [
      { name: "Kaffee", price: "15,90" },
    ],
  },
  {
    title: "Kind **",
    items: [
      { name: "Panierte Hähnchenkeulen", price: "None" },
      { name: "AU CORNFLAKES", price: "None" },
      { name: "AUF SARDER MUSCHELN", price: "None" },
      { name: "AD BECKRE", price: "None" },
      { name: "1KUGEL EISCREME Parfum de ton choix", price: "None" },
      { name: "STA LITTLE SIRUP A L'AD", price: "None" },
    ],
  },
  {
    title: "DIE NACHTISCHE",
    items: [
      { name: "CAFE GOURMAND", price: "9,50" },
      { name: "MOUSSE AD SCHOKOLADE", price: "6,50" },
      { name: "TARTE DES TAGES", price: "7,50" },
      { name: "PARACCOTTA a trte mup", price: "7,50" },
      { name: "RUM BABA", price: "3,50" },
      { name: "TIRAMISU BIANCA für 2 Personen", price: "16,00" },
      { name: "TARTE TROPEZIENNE", price: "9,50" },
      { name: "SUNDAE RONNIE", price: "12,00" },
      { name: "ST MARCELUN und Brot", price: "11,00" },
      { name: "1BALL", price: "3,20" },
      { name: "2 BÄLLE", price: "5,20" },
      { name: "3 BÄLLE", price: "7,20" },
      { name: "SUPP. TOURTTEE CREME", price: "1,50" },
    ],
  },
  {
    title: "DAME BLANCHE",
    items: [
      { name: "DAME BLANCHE", price: "9,50" },
      { name: "SCHOKOLADE oder CAFE LIEGEGIS", price: "9,50" },
      { name: "OBERST", price: "12,50" },
      { name: "LA DIANCA", price: "11,50" },
    ],
  },
  {
    title: "VORSPEISE",
    items: [
      { name: "KAVIAR VON AUBERGINE ZU KÜMMEL UND CROSTINE", price: "12,00" },
      { name: "WEISSE FIZZA & AVOCAT", price: "24,90" },
      { name: "AUSTERN PIE DE CLAIR", price: "17,90" },
      { name: "GEBRATENES CALAMAR SADCE TARTARE", price: "14,30" },
      { name: "TIMPURA DE CREVETTES ST WÜRZIGE MAYONAISE", price: "15,50" },
    ],
  },
  {
    title: "MONSIEUR BIANCA",
    items: [
      { name: "URLAUB IN ARRABBIATA ET OLIVEN NOTRE", price: "16,00" },
      { name: "CARPACCIO DE DOUT", price: "17,90" },
      { name: "GEWÜRZSTATISTIK KROQUAT THUNFISCH CEVICHE", price: "18,90" },
      { name: "GOURMET SNACK & TRUTTE", price: "20,30" },
      { name: "BOMATE SALATE MIT STRACCIATELLA", price: "17,00" },
      { name: "BALADE CRECOUR lade 16e crus, eta", price: "26,00" },
      { name: "CESAR SALAD Omanischer Salat, klare Soße", price: "18,00" },
      { name: "CARPACCIO DESPADON", price: "16,00" },
    ],
  },
  {
    title: "VORDERKNOCHEN MIT SAUNCH",
    items: [
      { name: "SARDINISCHE COQUILLETTEN AUS MEINER KINDHEIT", price: "21,00" },
      { name: "LES PATES DE MONSIEUR Gegrillte Hühner", price: "16,90" },
      { name: "CLASSIC BURGER BACON", price: "19,50" },
      { name: "BURGER KATGU BANDO Hähnchentest", price: "20,50" },
      { name: "GEGRILLTER PILET DE BAUF (250g) Espaprika", price: "34,00" },
      { name: "UNSERE BELLE ONTRECOTE (300g)", price: "25,00" },
      { name: "CLASSIC ODER UTALIAN EULEN TARTAR", price: "18,90" },
      { name: "GEFÜLLT MIT GOLDENER SAUCE", price: "21,00" },
      { name: "HALBGEKOCHTER LACHSBUILLON TRAIT GYOSA", price: "25,00" },
      { name: "MOULER BOUCHOT Selen Ankunft", price: "22,50" },
      { name: "CALAMARETTI PORLES MIT CHORIZO", price: "24,00" },
      { name: "BBQ Octopus Tentakel", price: "32,00" },
    ],
  },
  {
    title: "SAUCES EN SUPPLEMENT",
    items: [
      { name: "Verbrechen von", price: "5,00" },
      { name: "Trutte Poiven, Tactare, Mayain pic", price: "3,50" },
    ],
  },
  {
    title: "GARNITURE EN SUPPLEMENT",
    items: [
      { name: "Ris Säule, haricots Schinken von Dosen landen.", price: "5,00" },
    ],
  },
  {
    title: "HÖHLE",
    items: [
      { name: "DOMAINE DES BEAUCAS 30 H o", price: "22,00" },
      { name: "CHARME DES DEMOISELLES Alam", price: "28,00" },
      { name: "REAL antik esta ima, a, Hirschkuh", price: "29,00" },
      { name: "DOMAINE TROPES in (muge, moć, Weiß", price: "30,00" },
      { name: "DOMAINE DE LA ROUILLERE che de provence ACC", price: "38,00" },
      { name: "CHATEAU MINUTY Prestige", price: "39,00" },
      { name: "CROZE HERMITAGE La petite Ruchen Vallée ab", price: "45,00" },
      { name: "SANCERRE BLANCHAUX AAC) Weißer Loirewein ab", price: "45,00" },
      { name: "CHABLIS LAMBERT DE VALENTINOIS Parc", price: "45,00" },
      { name: "CHATEAU MINUTY Rose & OR UCP", price: "55,00" },
      { name: "(CHATEAUNEUF DU PAPE (ACC) La Bernardine", price: "68,00" },
      { name: "SANCERRE CONTE LAFOND GRANDE CUVEE (oc) ab Ter", price: "75,00" },
      { name: "DIE SCHÄTZE VON BIANCA AUF ANFRAGE", price: "None" },
    ],
  },
  {
    title: "MINERALWASSER 15",
    items: [
      { name: "SAN BENEDETTO flacho que", price: "6,00" },
      { name: "808f flacher Cu-Zinken voll", price: "7,50" },
    ],
  },
];

const MenuCategory = ({ cat, index }: { cat: typeof categories[0]; index: number }) => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <h3 className="font-heading text-xl text-center text-foreground mb-8 tracking-wide italic">
        {cat.title}
      </h3>
      <div className="space-y-6">
        {cat.items.map((item, i) => (
          <div
            key={i}
            className="flex justify-between items-baseline gap-4 group cursor-default"
          >
            <div className="flex-1">
              <p className="font-body font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                {item.name}
              </p>
            </div>
            {item.price && (
              <span className="font-heading text-primary text-lg shrink-0 group-hover:text-terracotta transition-colors duration-300">
                {item.price} €
              </span>
            )}
          </div>
        ))}
      </div>
      <div className="w-12 h-px bg-border mx-auto mt-8" />
    </div>
  );
};

const MenuHighlights = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-primary tracking-[0.3em] uppercase text-xs font-body mb-4">
            La Carte
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
            Notre Menu
          </h2>
          <p className="text-muted-foreground font-light text-sm">
            Cuisine française · Déjeuner & Dîner · Fait maison
          </p>
        </div>
        <div className="space-y-14">
          {categories.map((cat, i) => (
            <MenuCategory key={cat.title + i} cat={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuHighlights;
