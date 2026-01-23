document.addEventListener("DOMContentLoaded", () => {
  // Quarto TOC suele vivir en nav#TOC o nav.toc
  const toc = document.querySelector("nav#TOC, nav.toc, .toc nav");
  if (!toc) return;

  toc.addEventListener("click", (e) => {
    const a = e.target.closest("a");
    if (!a) return;

    const href = a.getAttribute("href") || "";
    if (!href.startsWith("#")) return; // solo anchors internos

    e.preventDefault(); // evita navegación/recarga
    const id = decodeURIComponent(href.slice(1));
    const el = document.getElementById(id);
    if (!el) return;

    // Scroll suave y estable
    el.scrollIntoView({ behavior: "smooth", block: "start" });

    // Mantén URL con hash sin recargar
    history.pushState(null, "", "#" + encodeURIComponent(id));
  }, { passive: false });
});