const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-heading text-2xl text-foreground mb-4">Maison Bianca</p>
        <p className="text-muted-foreground text-sm font-light mb-2">
          2 Pl. Victor Hugo, 83120 Sainte-Maxime
        </p>
        <a href="tel:+33494961574" className="text-muted-foreground text-sm font-light hover:text-foreground transition-colors">
          +33 4 94 96 15 74
        </a>
        <div className="w-8 h-px bg-border mx-auto my-6" />
        <p className="text-muted-foreground text-xs font-light">
          © {new Date().getFullYear()} Maison Bianca. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
