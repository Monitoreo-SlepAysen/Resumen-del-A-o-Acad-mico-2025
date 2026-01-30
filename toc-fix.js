document.addEventListener("DOMContentLoaded", () => {
  // Quarto TOC suele vivir en nav#TOC o nav.toc
  const toc = document.querySelector("nav#TOC, nav.toc, .toc nav");
  if (!toc) return;

  toc.addEventListener("click", (e) => {
    const a = e.target.closest("a");
    if (!a) return;

    const href = a.getAttribute("href") || "";
    const hashPos = href.indexOf("#");
    if (hashPos === -1) return; // no hay ancla

    e.preventDefault(); // evita navegación/recarga

    const id = decodeURIComponent(href.slice(hashPos + 1));
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth", block: "start" });

    // Mantiene el hash sin ensuciar el historial
    history.replaceState(null, "", "#" + encodeURIComponent(id));
  }, true);
});
