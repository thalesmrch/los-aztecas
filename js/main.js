/* ════════════════════════════════════════════════════════
   LOS AZTECAS — renderização do conteúdo + motion
   (você não precisa mexer aqui; edite js/content.js)
   ════════════════════════════════════════════════════════ */

/* ─────────── HELPERS ─────────── */

function el(tag, className, html) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (html != null) node.innerHTML = html;
  return node;
}

function esc(str) {
  const d = document.createElement("div");
  d.textContent = str;
  return d.innerHTML;
}

// tokens tipo REGIÃO_DO_MAPA_AQUI ganham destaque laranja na página,
// para nenhum placeholder ir ao ar despercebido
const TODO_RE = /((?:[A-ZÀ-ÜÇ0-9]+_)+AQUI|NOME DO PERSONAGEM|ID 000)/g;
function flag(str) {
  return esc(str).replace(TODO_RE, '<mark class="todo">$1</mark>');
}

// aceita link completo do YouTube ou só o ID de 11 caracteres
function youtubeId(input) {
  if (!input) return null;
  const m = String(input).match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/|\/live\/)([\w-]{11})/);
  if (m) return m[1];
  const raw = String(input).trim();
  return /^[\w-]{11}$/.test(raw) ? raw : null;
}

/* ─────────── RENDER ─────────── */

function placeholderBox(cap, filename) {
  const ph = el("div", "media media--placeholder");
  const nome = filename ? "<br><b>" + esc(filename) + "</b>" : "";
  ph.appendChild(el("span", "media__label", "AGUARDANDO IMAGEM<br>" + esc(cap) + nome));
  return ph;
}

function mediaFigure(item) {
  const cap = item.legenda || "";
  if (item.src) {
    const fig = el("figure", "media");
    const img = el("img");
    img.src = item.src;
    img.alt = "";
    img.loading = "lazy";
    // se o arquivo ainda não existe, degrada para o placeholder mostrando o nome esperado
    img.addEventListener("error", () => fig.replaceWith(placeholderBox(cap, item.src)));
    fig.appendChild(img);
    fig.appendChild(el("figcaption", "media__caption", esc(cap)));
    return fig;
  }
  return placeholderBox(cap, null);
}

function cardNode(item, i) {
  const card = el("article", "card");
  card.innerHTML = `<span class="card__num">${String(i + 1).padStart(2, "0")}</span>
    <h3 class="card__title">${flag(item.titulo)}</h3>
    <p class="card__text">${flag(item.texto)}</p>`;
  return card;
}

function render() {
  const C = CONTENT;

  // topo e rodapé
  document.getElementById("topbar-cidade").textContent = C.meta.cidade;
  document.getElementById("topbar-data").textContent = C.meta.data;
  document.getElementById("footer-cidade").textContent = C.meta.cidade;
  document.getElementById("footer-data").textContent = C.meta.data;

  // 01 · história
  const lore = document.getElementById("lore-container");
  C.lore.forEach((p) => lore.appendChild(el("p", null, flag(p))));

  // 02 · identidade
  const paleta = document.getElementById("paleta-container");
  (C.paleta || []).forEach((c) => {
    const sw = el("div", "swatch");
    const escura = c.papel === "SECUNDÁRIA" && /^#0/.test(c.hex);
    sw.innerHTML = `<span class="swatch__chip" style="background:${esc(c.hex)}"></span>
      <span class="swatch__nome">${esc(c.nome)}</span>
      <span class="swatch__papel">${esc(c.papel)}</span>
      <span class="swatch__hex">${esc(c.hex)}</span>`;
    if (escura) sw.querySelector(".swatch__chip").classList.add("swatch__chip--dark");
    paleta.appendChild(sw);
  });
  const ident = document.getElementById("identidade-container");
  C.identidade.forEach((item, i) => ident.appendChild(cardNode(item, i)));

  // 03 · território
  document.getElementById("territorio-desc").appendChild(el("p", null, flag(C.territorio.descricao)));
  const imgs = document.getElementById("territorio-imgs");
  C.territorio.imagens.forEach((item) => imgs.appendChild(mediaFigure(item)));
  const vert = document.getElementById("vertentes-container");
  C.territorio.vertentes.forEach((v) => {
    const node = el("div", "vertente");
    node.innerHTML = `<h3 class="vertente__title">${flag(v.titulo)}</h3>
      <p class="vertente__text">${flag(v.texto)}</p>`;
    vert.appendChild(node);
  });

  // postura — aliados e rivais
  const pst = C.territorio.postura;
  if (pst) {
    const box = document.getElementById("postura-container");
    const lista = (arr) => arr.map((x) => `<li>${flag(x)}</li>`).join("");
    box.innerHTML = `<p class="postura__intro">${flag(pst.intro)}</p>
      <div class="postura__grid">
        <div class="postura__col postura__col--aliados">
          <h3 class="conduta__sub">ALIADOS NATURAIS</h3>
          <ul class="postura__list" role="list">${lista(pst.aliados)}</ul>
        </div>
        <div class="postura__col postura__col--rivais">
          <h3 class="conduta__sub">RIVAIS HISTÓRICOS</h3>
          <ul class="postura__list" role="list">${lista(pst.rivais)}</ul>
        </div>
      </div>`;
  }

  // 04 · QG
  document.getElementById("qg-desc").appendChild(el("p", null, flag(C.qg.descricao)));
  const videoBox = document.getElementById("qg-video");

  // mapa preferido — player embutido em destaque
  const pref = C.qg.mapaPreferido || {};
  const prefId = youtubeId(pref.youtube);
  if (prefId) {
    // facade: só thumbnail + play; o iframe pesado só entra no primeiro toque
    const wrap = el("div", "video video--pref");
    const cred = pref.criador ? ` · ${esc(pref.criador)}` : "";
    const nome = pref.nome || "QG";
    wrap.innerHTML = `<span class="video__badge">MAPA PREFERIDO — ${esc(pref.nome || "")}${cred}</span>
      <button type="button" class="video__facade" aria-label="Assistir tour do mapa ${esc(nome)}">
        <img src="https://img.youtube.com/vi/${prefId}/hqdefault.jpg" alt="" loading="lazy" />
        <span class="video__play" aria-hidden="true">▶</span>
      </button>`;
    wrap.querySelector(".video__facade").addEventListener("click", function () {
      const f = document.createElement("iframe");
      f.src = `https://www.youtube-nocookie.com/embed/${prefId}?autoplay=1`;
      f.title = `Tour do mapa ${nome}`;
      f.allow = "autoplay; accelerometer; encrypted-media; gyroscope; picture-in-picture";
      f.allowFullscreen = true;
      this.replaceWith(f);
    });
    videoBox.appendChild(wrap);
    if (pref.local) {
      videoBox.appendChild(el("p", "map-local",
        `<span>ONDE FICA NO GTA</span>${esc(pref.local)}`));
    }
  } else {
    const ph = el("div", "video video--placeholder");
    ph.appendChild(el("span", "media__label",
      "AGUARDANDO VÍDEO DO MAPA<br>preencha <b>qg.mapaPreferido.youtube</b> em js/content.js"));
    videoBox.appendChild(ph);
  }

  // alternativas para a staff escolher — cards clicáveis (thumbnail)
  const alts = (C.qg.alternativas || []).filter((a) => youtubeId(a.youtube));
  if (alts.length) {
    videoBox.appendChild(el("p", "map-alts__lead", "OU, SE A STAFF PREFERIR — OUTRAS OPÇÕES DE MAPA:"));
    const grid = el("div", "map-alts");
    alts.forEach((a) => {
      const id = youtubeId(a.youtube);
      const cred = a.criador ? ` · ${esc(a.criador)}` : "";
      const card = el("a", "map-alt");
      card.href = `https://www.youtube.com/watch?v=${id}`;
      card.target = "_blank";
      card.rel = "noopener";
      const localHtml = a.local
        ? `<span class="map-alt__local">${esc(a.local)}</span>`
        : "";
      card.innerHTML = `<span class="map-alt__thumb">
          <img src="https://img.youtube.com/vi/${id}/hqdefault.jpg" alt="" loading="lazy" />
          <span class="map-alt__play" aria-hidden="true">▶</span>
        </span>
        <span class="map-alt__name">${esc(a.nome || "")}${cred}</span>
        ${localHtml}`;
      grid.appendChild(card);
    });
    videoBox.appendChild(grid);
  }

  const qgDet = document.getElementById("qg-detalhes");
  C.qg.detalhes.forEach((item, i) => qgDet.appendChild(cardNode(item, i)));

  // galeria do barrio
  const galeria = C.qg.galeria || [];
  if (galeria.length) {
    document.getElementById("qg-galeria-sub").hidden = false;
    const gal = document.getElementById("qg-galeria");
    galeria.forEach((item) => gal.appendChild(mediaFigure(item)));
  }

  // 05 · hierarquia
  const roster = document.getElementById("roster-container");
  C.hierarquia.forEach((m) => {
    const card = el("article", "member");
    const placeholder = `<div class="member__photo member__photo--placeholder"><span>AGUARDANDO FOTO 3:4<br>${esc(m.cargo)}</span></div>`;
    const photo = m.foto
      ? `<div class="member__photo"><img src="${esc(m.foto)}" alt="${esc(m.nome)}" loading="lazy" /></div>`
      : placeholder;
    card.innerHTML = `${photo}
      <h3 class="member__cargo">${esc(m.cargo)}</h3>
      <p class="member__nome">${flag(m.nome)}</p>
      <p class="member__id">${flag(m.id)}</p>
      <p class="member__funcao">${flag(m.funcao)}</p>`;
    roster.appendChild(card);
    // se a foto não existir, cai pro placeholder (mesmo padrão das outras imagens)
    if (m.foto) {
      const img = card.querySelector(".member__photo img");
      if (img) img.addEventListener("error", () => {
        const box = img.closest(".member__photo");
        box.classList.add("member__photo--placeholder");
        box.innerHTML = `<span>AGUARDANDO FOTO 3:4<br>${esc(m.cargo)}</span>`;
      });
    }
  });

  // a tropa (soldados)
  const soldados = C.soldados || [];
  if (soldados.length) {
    document.getElementById("tropa-sub").innerHTML =
      `A TROPA <span class="tropa__count">${soldados.length} soldados</span>`;
    if (C.tropaIntro) {
      document.getElementById("tropa-intro").appendChild(el("p", null, esc(C.tropaIntro)));
    }
    const tropa = document.getElementById("tropa-container");
    soldados.forEach((s) => {
      const chip = el("div", "soldado");
      const idHtml = s.id
        ? `<span class="soldado__id">${esc(s.id)}</span>`
        : `<span class="soldado__id soldado__id--pend">#—</span>`;
      chip.innerHTML = `${idHtml}<span class="soldado__nome">${esc(s.nome)}</span>`;
      tropa.appendChild(chip);
    });
  }

  // 06 · conduta
  const internas = document.getElementById("conduta-internas");
  C.conduta.internas.forEach((r) => internas.appendChild(el("li", null, flag(r))));
  const servidor = document.getElementById("conduta-servidor");
  C.conduta.servidor.forEach((r) => servidor.appendChild(el("li", null, flag(r))));

  // 07 · plano 90 dias
  const plano = document.getElementById("plano-container");
  C.plano.forEach((f) => {
    const node = el("article", "fase");
    node.innerHTML = `<span class="fase__tag">${flag(f.fase)} · ${flag(f.periodo)}</span>
      <h3 class="fase__title">${flag(f.titulo)}</h3>
      <p class="fase__text">${flag(f.texto)}</p>`;
    plano.appendChild(node);
  });

  // 08 · contribuições
  if (C.contribuicoesLead) {
    document.getElementById("contribuicao-lead").innerHTML = flag(C.contribuicoesLead);
  }
  const contrib = document.getElementById("contribuicao-container");
  C.contribuicoes.forEach((item, i) => contrib.appendChild(cardNode(item, i)));

  // 09 · firmas
  const firmas = document.getElementById("firmas-container");
  C.firmas.forEach((f) => {
    const node = el("div", "firma");
    node.innerHTML = `<span class="firma__nome">${flag(f.nome)}</span>
      <span class="firma__linha"></span>
      <span class="firma__cargo">${esc(f.cargo)}</span>`;
    firmas.appendChild(node);
  });
}

/* ─────────── MOTION ─────────── */

function initMotion() {
  const reduced =
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
    location.search.includes("nomotion");

  // se qualquer uma das libs falhar no CDN, degrada para versão estática
  if (reduced || !window.gsap || !window.ScrollTrigger || !window.Lenis || !window.SplitType) {
    document.documentElement.classList.add("no-motion");
    return null;
  }

  gsap.registerPlugin(ScrollTrigger);

  // smooth scroll (Lenis) — snappy o suficiente pra não sentir "arrasto",
  // e nativo no toque (celular não usa smooth-scroll sintético)
  const lenis = new Lenis({ lerp: 0.11, wheelMultiplier: 1, smoothWheel: true, syncTouch: false });
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  // âncoras do índice rolam suave em vez de pular
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const target = document.querySelector(a.getAttribute("href"));
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target, { offset: -56 });
    });
  });

  // hero: reveal letra a letra (pausado; toca quando o loader fecha,
  // já com a fonte final carregada)
  const split = new SplitType("#hero-word", { types: "chars" });
  const intro = gsap.timeline({ paused: true });
  intro
    .from(".hero__los", { y: 40, opacity: 0, rotate: -10, duration: 0.7, ease: "power3.out" })
    .from(split.chars, {
      yPercent: 110,
      opacity: 0,
      duration: 0.9,
      stagger: 0.055,
      ease: "power4.out",
    }, "-=0.35")
    .to(".hero .anim-fade", { opacity: 1, duration: 0.8, stagger: 0.15 }, "-=0.4");

  // sol com leve parallax (no wrapper, para não brigar com o rotate do SVG)
  gsap.to(".hero__sunwrap", {
    yPercent: 25,
    ease: "none",
    scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true },
  });

  // cabeçalhos de seção
  document.querySelectorAll(".section__head").forEach((head) => {
    gsap.from(head.children, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: { trigger: head, start: "top 82%", once: true },
    });
  });

  // blocos de conteúdo
  const groups = [
    ".prose p",
    ".card",
    ".vertente",
    ".postura__col",
    ".member",
    ".conduta__list li",
    ".fase",
    ".lead-callout",
    ".video",
    ".firma",
  ];
  groups.forEach((sel) => {
    document.querySelectorAll(sel).forEach((node) => {
      gsap.from(node, {
        y: 40,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: node, start: "top 88%", once: true },
      });
    });
  });

  // reveal das imagens: wipe cinematográfico (clip-path) só no desktop, onde é
  // barato; no celular usa transform+opacity (composite, sem repaint por frame)
  const mm = gsap.matchMedia();
  mm.add("(min-width: 768px)", () => {
    document.querySelectorAll(".media").forEach((box) => {
      gsap.from(box, {
        clipPath: "inset(100% 0 0 0)",
        duration: 1.0,
        ease: "power4.out",
        scrollTrigger: { trigger: box, start: "top 86%", once: true },
      });
    });
  });
  mm.add("(max-width: 767px)", () => {
    document.querySelectorAll(".media").forEach((box) => {
      gsap.from(box, {
        y: 40,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: box, start: "top 88%", once: true },
      });
    });
  });

  // parallax interno das imagens (só nas fotos reais, não nos placeholders)
  document.querySelectorAll(".media img").forEach((img) => {
    gsap.to(img, {
      yPercent: -12,
      ease: "none",
      scrollTrigger: { trigger: img.closest(".media"), start: "top bottom", end: "bottom top", scrub: true },
    });
  });

  // carimbo final
  gsap.from("#stamp", {
    scale: 2.2,
    opacity: 0,
    rotate: 20,
    duration: 0.7,
    ease: "power4.out",
    scrollTrigger: { trigger: "#stamp", start: "top 80%", once: true },
  });

  return intro;
}

/* ─────────── BOOT ─────────── */

document.addEventListener("DOMContentLoaded", () => {
  try {
    render();
  } catch (e) {
    console.error("Erro ao renderizar conteúdo (confira js/content.js):", e);
  }

  // pausa animações infinitas (marquees, sol) quando saem da tela
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) =>
      entries.forEach((en) => en.target.classList.toggle("anim-paused", !en.isIntersecting))
    );
    document.querySelectorAll(".marquee, .hero__sunwrap").forEach((n) => io.observe(n));
  }

  // debug: ?scroll=1200 posiciona a página (útil para screenshot headless)
  const scrollParam = new URLSearchParams(location.search).get("scroll");
  if (scrollParam) setTimeout(() => window.scrollTo(0, parseInt(scrollParam, 10)), 100);

  // abre a página: fecha o loader e dispara a intro. Nada aqui pode
  // depender do sucesso de render() ou das libs de animação.
  const loader = document.getElementById("loader");
  let revealed = false;
  const reveal = () => {
    if (revealed) return;
    revealed = true;
    let intro = null;
    try {
      intro = initMotion();
    } catch (e) {
      console.error("Animações desativadas:", e);
      document.documentElement.classList.add("no-motion");
    }
    loader.classList.add("is-done");
    loader.addEventListener("transitionend", () => loader.remove(), { once: true });
    setTimeout(() => loader.isConnected && loader.remove(), 1500);
    if (intro) setTimeout(() => intro.play(), 250);
  };

  if (document.fonts && document.fonts.ready) {
    // fontes lentas não seguram a página por mais de 2.5s
    Promise.race([document.fonts.ready, new Promise((r) => setTimeout(r, 2500))])
      .then(() => setTimeout(reveal, 100));
  } else {
    setTimeout(reveal, 400);
  }
  setTimeout(reveal, 4000); // cinto de segurança absoluto
});
