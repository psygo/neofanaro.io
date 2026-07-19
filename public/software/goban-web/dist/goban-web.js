var rt = Object.defineProperty;
var it = (a, o, t) => o in a ? rt(a, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[o] = t;
var c = (a, o, t) => it(a, typeof o != "symbol" ? o + "" : o, t);
var b = /* @__PURE__ */ ((a) => (a[a.Empty = 0] = "Empty", a[a.Black = 1] = "Black", a[a.White = 2] = "White", a))(b || {});
function R(a) {
  return a === 0 ? 0 : a === 1 ? 2 : 1;
}
class C {
  constructor(o = 19) {
    c(this, "size");
    c(this, "grid");
    c(this, "_currentColor", b.Black);
    c(this, "_koPoint", null);
    c(this, "_passes", 0);
    c(this, "_over", !1);
    c(this, "_captures", {
      [b.Black]: 0,
      [b.White]: 0
    });
    this.size = o, this.grid = new Array(o * o).fill(b.Empty);
  }
  get currentColor() {
    return this._currentColor;
  }
  get isOver() {
    return this._over;
  }
  get captures() {
    return this._captures;
  }
  /** The vertex forbidden this turn by the simple ko rule, if any. */
  get koPoint() {
    return this._koPoint === null ? null : this.toVertex(this._koPoint);
  }
  get(o, t) {
    return this.inBounds(o, t) ? this.grid[this.toIndex(o, t)] : b.Empty;
  }
  /**
   * Directly sets a point's color, bypassing capture/suicide/ko rules and
   * turn order. For SGF setup properties (`AB`/`AW`/`AE`) or board-editing
   * tools — not gameplay, which should go through `play()` instead.
   */
  set(o, t, e) {
    this.inBounds(o, t) && (this.grid[this.toIndex(o, t)] = e);
  }
  clone() {
    const o = new C(this.size);
    return o.grid = this.grid.slice(), o._currentColor = this._currentColor, o._koPoint = this._koPoint, o._passes = this._passes, o._over = this._over, o._captures = { ...this._captures }, o;
  }
  isLegalMove(o, t, e = this._currentColor) {
    return this.tryPlay(o, t, e, !1).legal;
  }
  /** Places a stone for the current player, applying capture/suicide/ko rules. */
  play(o, t) {
    const e = this.tryPlay(o, t, this._currentColor, !0);
    return e.legal && (this._passes = 0, this._currentColor = R(this._currentColor)), e;
  }
  /** Passes the current player's turn. Two consecutive passes end the game. */
  pass() {
    this._passes += 1, this._koPoint = null, this._passes >= 2 && (this._over = !0), this._currentColor = R(this._currentColor);
  }
  toIndex(o, t) {
    return t * this.size + o;
  }
  toVertex(o) {
    return { x: o % this.size, y: Math.floor(o / this.size) };
  }
  inBounds(o, t) {
    return o >= 0 && o < this.size && t >= 0 && t < this.size;
  }
  neighborsOf(o) {
    const { x: t, y: e } = this.toVertex(o), s = [];
    return t > 0 && s.push(o - 1), t < this.size - 1 && s.push(o + 1), e > 0 && s.push(o - this.size), e < this.size - 1 && s.push(o + this.size), s;
  }
  /** Flood-fills the group containing `index` and computes its liberties. */
  groupAt(o, t) {
    const e = o[t], s = [], r = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set([t]), l = [t];
    for (; l.length > 0; ) {
      const d = l.pop();
      s.push(d);
      for (const n of this.neighborsOf(d)) {
        const h = o[n];
        h === b.Empty ? r.add(n) : h === e && !i.has(n) && (i.add(n), l.push(n));
      }
    }
    return { stones: s, liberties: r };
  }
  tryPlay(o, t, e, s) {
    if (this._over) return this.illegal("game-over");
    if (!this.inBounds(o, t)) return this.illegal("out-of-bounds");
    const r = this.toIndex(o, t);
    if (this.grid[r] !== b.Empty) return this.illegal("occupied");
    if (this._koPoint === r) return this.illegal("ko");
    const i = this.grid.slice();
    i[r] = e;
    const l = R(e), d = [];
    for (const h of this.neighborsOf(r)) {
      if (i[h] !== l) continue;
      const g = this.groupAt(i, h);
      if (g.liberties.size === 0)
        for (const p of g.stones)
          i[p] !== b.Empty && (i[p] = b.Empty, d.push(p));
    }
    const n = this.groupAt(i, r);
    return n.liberties.size === 0 ? this.illegal("suicide") : (s && (this.grid = i, this._captures[e] += d.length, this._koPoint = d.length === 1 && n.stones.length === 1 ? d[0] : null), {
      legal: !0,
      vertex: { x: o, y: t },
      color: e,
      captured: d.map((h) => this.toVertex(h))
    });
  }
  illegal(o) {
    return { legal: !1, reason: o };
  }
}
class $ extends Error {
  constructor(o, t) {
    super(`${o} (at position ${t})`), this.position = t, this.name = "SGFParseError";
  }
}
function nt(a) {
  return new at(a).parseCollection();
}
class at {
  constructor(o) {
    c(this, "pos", 0);
    this.text = o;
  }
  parseCollection() {
    const o = [];
    if (this.skipWhitespace(), this.pos >= this.text.length)
      throw new $("Empty SGF input", this.pos);
    for (; this.pos < this.text.length && (this.skipWhitespace(), !(this.pos >= this.text.length)); )
      o.push(this.parseGameTree()), this.skipWhitespace();
    return o;
  }
  parseGameTree() {
    this.expect("(");
    const o = this.parseSequence(), t = [];
    for (this.skipWhitespace(); this.peek() === "("; )
      t.push(this.parseGameTree()), this.skipWhitespace();
    return this.expect(")"), { nodes: o, children: t };
  }
  parseSequence() {
    const o = [];
    for (this.skipWhitespace(); this.peek() === ";"; )
      o.push(this.parseNode()), this.skipWhitespace();
    if (o.length === 0)
      throw new $("Expected at least one node in game tree", this.pos);
    return o;
  }
  parseNode() {
    this.expect(";");
    const o = {};
    for (this.skipWhitespace(); this.isUpperOrLowerLetter(this.peek()); ) {
      const { id: t, values: e } = this.parseProperty();
      o[t] = e, this.skipWhitespace();
    }
    return { properties: o };
  }
  parseProperty() {
    const o = this.pos;
    let t = "";
    for (; this.isUpperOrLowerLetter(this.peek()); )
      t += this.text[this.pos], this.pos++;
    if (t = t.toUpperCase(), this.skipWhitespace(), this.peek() !== "[")
      throw new $(`Property "${t}" has no value`, o);
    const e = [];
    for (; this.peek() === "["; )
      e.push(this.parsePropertyValue()), this.skipWhitespace();
    return { id: t, values: e };
  }
  parsePropertyValue() {
    this.expect("[");
    let o = "";
    for (; this.peek() !== "]"; ) {
      if (this.pos >= this.text.length)
        throw new $("Unterminated property value", this.pos);
      const t = this.text[this.pos];
      if (t === "\\") {
        this.pos++;
        const e = this.text[this.pos];
        if (e === void 0)
          throw new $("Unterminated escape sequence", this.pos);
        if (e === "\r" || e === `
`) {
          this.consumeLineBreak();
          continue;
        }
        o += e, this.pos++;
        continue;
      }
      o += t, this.pos++;
    }
    return this.expect("]"), o;
  }
  /** Consumes a line break, including CRLF/LFCR pairs, as a single unit. */
  consumeLineBreak() {
    const o = this.text[this.pos];
    this.pos++;
    const t = this.text[this.pos];
    (o === "\r" && t === `
` || o === `
` && t === "\r") && this.pos++;
  }
  skipWhitespace() {
    for (; this.pos < this.text.length && /\s/.test(this.text[this.pos]); )
      this.pos++;
  }
  peek() {
    return this.text[this.pos];
  }
  isUpperOrLowerLetter(o) {
    return o !== void 0 && /[A-Za-z]/.test(o);
  }
  expect(o) {
    if (this.text[this.pos] !== o)
      throw new $(`Expected "${o}"`, this.pos);
    this.pos++;
  }
}
function D(a) {
  if (a.length !== 2) return null;
  const o = H(a[0]), t = H(a[1]);
  return o === null || t === null ? null : { x: o, y: t };
}
function lt(a, o) {
  return a === "" || o <= 19 && a === "tt";
}
function F(a, o) {
  const t = a.properties[o];
  if (!t) return [];
  const e = [];
  for (const s of t) {
    const r = D(s);
    r && e.push(r);
  }
  return e;
}
function ht(a) {
  const o = a.indexOf(":");
  if (o === -1) return null;
  const t = D(a.slice(0, o));
  return t ? { vertex: t, text: a.slice(o + 1) } : null;
}
function H(a) {
  const o = a.charCodeAt(0);
  return o >= 97 && o <= 122 ? o - 97 : o >= 65 && o <= 90 ? o - 65 + 26 : null;
}
const x = "http://www.w3.org/2000/svg";
function T(a) {
  return /^\d+(\.\d+)?$/.test(a) ? `${a}px` : a;
}
function dt(a) {
  const o = a.trim(), t = o.startsWith("-"), e = t ? o.slice(1) : o, s = document.createElement("div");
  s.style.position = "absolute", s.style.visibility = "hidden", s.style.pointerEvents = "none", s.style.fontSize = T(e), document.body.appendChild(s);
  const r = parseFloat(getComputedStyle(s).fontSize);
  s.remove();
  const i = Number.isFinite(r) ? r : 0;
  return t ? -i : i;
}
const ct = "ABCDEFGHJKLMNOPQRSTUVWXYZ", G = ["top", "bottom", "left", "right"], gt = "system-ui, sans-serif", Y = "0.32", j = 0.5, ut = "system-ui, sans-serif", bt = "0.55", O = 0.2, z = 0.475, pt = 0.09, mt = 0.8, ft = 0.6, vt = 0.4, yt = {
  TR: "triangle",
  SQ: "square",
  CR: "circle",
  MA: "cross"
}, K = z * 0.55, kt = z * 0.8, xt = -K * 0.25, q = {
  // The original, only look, before `theme` existed — a wood grain board
  // with gradient-shaded stones, kept as the default so existing usage is
  // unaffected.
  wood: {
    boardFill: "url(#wood)",
    gridStroke: "#453017",
    starFill: "#453017",
    coordText: "#453017",
    blackStoneFill: "url(#black-stone)",
    blackStoneStroke: "#000000",
    whiteStoneFill: "url(#white-stone)",
    whiteStoneStroke: "#9c9483",
    stoneStrokeWidth: 0.02,
    markLight: "#f5f2e9",
    markDark: "#111111",
    stoneShadow: !1
  },
  // A flat black-ink-on-paper look modeled on printed Go book diagrams —
  // no gradients or wood grain, bolder stone outlines so a white stone
  // still reads clearly against the light board.
  bookish: {
    boardFill: "#ffffff",
    gridStroke: "#111111",
    starFill: "#111111",
    coordText: "#111111",
    blackStoneFill: "#111111",
    blackStoneStroke: "#111111",
    whiteStoneFill: "#ffffff",
    whiteStoneStroke: "#111111",
    stoneStrokeWidth: 0.045,
    markLight: "#ffffff",
    markDark: "#111111",
    stoneShadow: !1
  },
  // A brighter, more saturated gold board with raised, drop-shadowed
  // stones — modeled on Go Magic's Sabaki-inspired board theme.
  gomagic: {
    boardFill: "url(#gomagic-wood)",
    gridStroke: "#2a2118",
    starFill: "#2a2118",
    coordText: "#2a2118",
    blackStoneFill: "url(#black-stone)",
    blackStoneStroke: "#000000",
    whiteStoneFill: "url(#white-stone)",
    whiteStoneStroke: "#c9c3b3",
    stoneStrokeWidth: 0.02,
    markLight: "#f5f2e9",
    markDark: "#111111",
    stoneShadow: !0,
    stoneShadowOpacity: 0.65
  },
  // Sabaki's "Photorealistic" theme (SabakiHQ/theme-photorealistic) —
  // photographic-textured stones on the default wood board.
  photorealistic: {
    boardFill: "url(#wood)",
    gridStroke: "#222222",
    starFill: "#222222",
    coordText: "#222222",
    blackStoneFill: "#0e0e0e",
    blackStoneStroke: "#000000",
    whiteStoneFill: "#ebebeb",
    whiteStoneStroke: "#c9c3b3",
    stoneStrokeWidth: 0.02,
    markLight: "#eeeeee",
    markDark: "#222222",
    stoneShadow: !1,
    blackStoneImage: "/assets/themes/photorealistic/black.png",
    whiteStoneImage: "/assets/themes/photorealistic/white.png"
  },
  // Sabaki's "Happy Stones" theme (upsided/upsided-sabaki-themes) —
  // glossy glass stones on a pine board.
  "happy-stones": {
    boardFill: "#e8b563",
    boardImage: "/assets/themes/happy-stones/board.png",
    gridStroke: "#6b4201",
    starFill: "#6b4201",
    coordText: "#6b4201",
    blackStoneFill: "#111111",
    blackStoneStroke: "#000000",
    whiteStoneFill: "#f5f2e9",
    whiteStoneStroke: "#c9c3b3",
    stoneStrokeWidth: 0.02,
    markLight: "#d87700",
    markDark: "#fb8a00",
    stoneShadow: !1,
    blackStoneImage: "/assets/themes/happy-stones/glass_black.png",
    whiteStoneImage: "/assets/themes/happy-stones/glass_white.png"
  },
  // Sabaki's "Hikaru" theme (upsided/upsided-sabaki-themes) — a crisp
  // SVG board and stones with an anime feel.
  hikaru: {
    boardFill: "#ffffff",
    boardImage: "/assets/themes/hikaru/board.svg",
    gridStroke: "rgba(76, 47, 0, 0.8)",
    starFill: "rgba(76, 47, 0, 0.8)",
    coordText: "rgba(76, 47, 0, 0.8)",
    blackStoneFill: "#111111",
    blackStoneStroke: "#000000",
    whiteStoneFill: "#eeeeee",
    whiteStoneStroke: "#c9c3b3",
    stoneStrokeWidth: 0.02,
    markLight: "#eeeeee",
    markDark: "#111111",
    stoneShadow: !1,
    blackStoneImage: "/assets/themes/hikaru/black_stone.svg",
    whiteStoneImage: "/assets/themes/hikaru/white_stone.svg"
  },
  // Sabaki's "BadukTV" theme (upsided/upsided-sabaki-themes) — styled
  // for broadcast, glass stones on a smooth pale board.
  baduktv: {
    boardFill: "#d9bd7e",
    boardImage: "/assets/themes/baduktv/board.png",
    gridStroke: "#3c392f",
    starFill: "#3c392f",
    coordText: "#3c392f",
    blackStoneFill: "#111111",
    blackStoneStroke: "#000000",
    whiteStoneFill: "#f5f2e9",
    whiteStoneStroke: "#c9c3b3",
    stoneStrokeWidth: 0.02,
    markLight: "rgba(255, 255, 255, 0.75)",
    markDark: "rgba(0, 0, 0, 0.75)",
    stoneShadow: !1,
    blackStoneImage: "/assets/themes/baduktv/glass_black.png",
    whiteStoneImage: "/assets/themes/baduktv/glass_white.png"
  },
  // The "BattsGo" fan theme (JJscott/BattsGo) — Twitch emote stones on
  // a redwood board, gold ink.
  battsgo: {
    boardFill: "#8b3a1a",
    boardImage: "/assets/themes/battsgo/board.jpg",
    gridStroke: "#daa520",
    starFill: "#daa520",
    coordText: "#daa520",
    blackStoneFill: "#111111",
    blackStoneStroke: "#000000",
    whiteStoneFill: "#f5f2e9",
    whiteStoneStroke: "#c9c3b3",
    stoneStrokeWidth: 0.02,
    markLight: "#daa520",
    markDark: "#daa520",
    stoneShadow: !0,
    stoneShadowColor: "#280000",
    stoneShadowOpacity: 0.55,
    blackStoneImage: "/assets/themes/battsgo/black_stone.png",
    whiteStoneImage: "/assets/themes/battsgo/white_stone.png"
  },
  // WGo.js's default board look (waltheri/wgo.js) — photographed stones
  // on a saturated orange-brown board. The board itself is a hand-tuned
  // gradient rather than a copy of WGo.js's own board photo (its JPEG
  // carries a separate third-party photo credit in its comment field,
  // unlike the stone photos); see NOTICE.md.
  wgojs: {
    boardFill: "url(#wgojs-wood)",
    gridStroke: "#654525",
    starFill: "#553311",
    coordText: "#553311",
    blackStoneFill: "#0e0e0e",
    blackStoneStroke: "#000000",
    whiteStoneFill: "#ebebeb",
    whiteStoneStroke: "#c9c3b3",
    stoneStrokeWidth: 0.02,
    markLight: "#eeeeee",
    markDark: "#553311",
    stoneShadow: !0,
    stoneShadowColor: "#3e2020",
    stoneShadowOpacity: 0.5,
    blackStoneImage: "/assets/themes/wgojs/black.png",
    whiteStoneImage: "/assets/themes/wgojs/white.png"
  }
}, St = "wood", wt = {
  9: [
    [2, 2],
    [2, 6],
    [6, 2],
    [6, 6],
    [4, 4]
  ],
  13: [
    [3, 3],
    [3, 9],
    [9, 3],
    [9, 9],
    [6, 6]
  ],
  19: [
    [3, 3],
    [3, 9],
    [3, 15],
    [9, 3],
    [9, 9],
    [9, 15],
    [15, 3],
    [15, 9],
    [15, 15]
  ]
}, X = {
  next: ["ArrowRight"],
  previous: ["ArrowLeft"]
};
function V(a) {
  if (a !== void 0)
    return Array.isArray(a) ? a : [a];
}
class At extends HTMLElement {
  constructor() {
    super();
    c(this, "_board");
    c(this, "svg");
    c(this, "stonesGroup");
    c(this, "markupGroup");
    c(this, "gridMaskHoles");
    c(this, "ghostStone");
    c(this, "hovered", null);
    c(this, "_sgfTree", null);
    c(this, "_sgfMainLine", null);
    c(this, "_moveIndex", 0);
    c(this, "sgfLoadToken", 0);
    // Parallel to `_board`'s grid (same `y * size + x` indexing): the move
    // number of the stone currently sitting at each point, or `null` for an
    // empty point, a setup stone (AB/AW never gets a number), or a point
    // whose numbered stone was since captured. Rebuilt from scratch whenever
    // `_board` itself is replaced (see `resetMoveNumbers`), since a stale
    // entry from a previous board would otherwise outlive the stone it
    // described.
    c(this, "moveNumbers", []);
    c(this, "moveCounter", 0);
    c(this, "_keyBindings", {
      next: [...X.next],
      previous: [...X.previous]
    });
    c(this, "resizeObserver", null);
    c(this, "handleClick", (t) => {
      if (!this.interactive) return;
      const e = this.vertexFromEvent(t);
      e && this.play(e.x, e.y);
    });
    c(this, "handlePointerMove", (t) => {
      if (!this.interactive) return;
      const e = this.vertexFromEvent(t);
      e && (!this.hovered || e.x !== this.hovered.x || e.y !== this.hovered.y) ? (this.hovered = e, this.updateGhostStone()) : !e && this.hovered && (this.hovered = null, this.updateGhostStone());
    });
    c(this, "handlePointerLeave", () => {
      this.hovered && (this.hovered = null, this.updateGhostStone());
    });
    c(this, "handleKeyDown", (t) => {
      if (!this.keyboardShortcutsEnabled) return;
      const e = this.closest("go-board-container") ?? this;
      t.composedPath().includes(e) && (this._keyBindings.next.includes(t.key) ? (t.preventDefault(), this.nextMove()) : this._keyBindings.previous.includes(t.key) && (t.preventDefault(), this.previousMove()));
    });
    c(this, "handleResize", () => {
      this.applyCoordinateStyle(), this.applyLabelStyle(), this.applyHostSize(), (this.hasAttribute("coordinates-gap") || this.hasAttribute("padding") || this.hasAttribute("coordinates-font-size") || this.hasAttribute("label-offset-x") || this.hasAttribute("label-offset-y") || this.hasAttribute("label-font-size") || this.hasAttribute("corner-radius")) && (this.buildSvg(), this.render());
    });
    this._board = new C(this.sizeAttr), this.resetMoveNumbers(this.sizeAttr), this.attachShadow({ mode: "open" });
  }
  static get observedAttributes() {
    return [
      "size",
      "coordinates",
      "interactive",
      "sgf",
      "black-stone",
      "white-stone",
      "width",
      "height",
      "background-image",
      "coordinates-font",
      "coordinates-font-size",
      "coordinates-gap",
      "padding",
      "x-start",
      "x-end",
      "y-start",
      "y-end",
      "stone-size",
      "label-offset-x",
      "label-offset-y",
      "label-font",
      "label-font-size",
      "corner-radius",
      "theme",
      "move-numbers"
    ];
  }
  connectedCallback() {
    this.applyHostSize(), this.applyCoordinateStyle(), this.applyLabelStyle(), this.buildSvg(), this.render(), this.addEventListener("click", this.handleClick), this.addEventListener("mousemove", this.handlePointerMove), this.addEventListener("mouseleave", this.handlePointerLeave), document.addEventListener("keydown", this.handleKeyDown), this.resizeObserver = new ResizeObserver(this.handleResize), this.resizeObserver.observe(this);
  }
  disconnectedCallback() {
    var t;
    this.removeEventListener("click", this.handleClick), this.removeEventListener("mousemove", this.handlePointerMove), this.removeEventListener("mouseleave", this.handlePointerLeave), document.removeEventListener("keydown", this.handleKeyDown), (t = this.resizeObserver) == null || t.disconnect(), this.resizeObserver = null;
  }
  attributeChangedCallback(t, e, s) {
    if (this.isConnected) {
      if (t === "size")
        this._board = new C(this.sizeAttr), this.resetMoveNumbers(this.sizeAttr), this.hovered = null, this.buildSvg();
      else if (t === "sgf") {
        s ? this.loadSgf(s) : (this.sgfLoadToken++, this._sgfTree = null, this._sgfMainLine = null, this._moveIndex = 0);
        return;
      } else if (t === "width" || t === "height") {
        this.applyHostSize();
        return;
      } else if (t === "coordinates-font" || t === "coordinates-font-size") {
        this.applyCoordinateStyle();
        return;
      } else if (t === "label-font" || t === "label-font-size") {
        this.applyLabelStyle();
        return;
      } else (t === "background-image" || t === "coordinates" || t === "coordinates-gap" || t === "padding" || t === "x-start" || t === "x-end" || t === "y-start" || t === "y-end" || t === "corner-radius" || t === "theme") && (this.applyHostSize(), this.buildSvg());
      this.render();
    }
  }
  /** The underlying rules engine, for read-only inspection. */
  get board() {
    return this._board;
  }
  /** The parsed SGF game tree loaded via the `sgf` attribute, if any. */
  get sgfTree() {
    return this._sgfTree;
  }
  /** Current position within the loaded SGF's main line (0 = game start). */
  get moveIndex() {
    return this._moveIndex;
  }
  /** Total number of moves in the loaded SGF's main line. */
  get moveCount() {
    var t;
    return ((t = this._sgfMainLine) == null ? void 0 : t.length) ?? 0;
  }
  get interactive() {
    return !this.hasAttribute("interactive") || this.getAttribute("interactive") !== "false";
  }
  get keyboardShortcutsEnabled() {
    return !this.hasAttribute("keyboard-shortcuts") || this.getAttribute("keyboard-shortcuts") !== "false";
  }
  /**
   * Whether move numbers are drawn on top of stones, per the
   * `move-numbers` attribute. Unlike `interactive`/`coordinates`/etc.,
   * this defaults to *off* — presence (not absence) of `"false"`
   * — since numbering every stone isn't the look most boards want.
   */
  get moveNumbersEnabled() {
    return this.hasAttribute("move-numbers") && this.getAttribute("move-numbers") !== "false";
  }
  /** Current key-to-action bindings for arrow-key SGF navigation. */
  get keyBindings() {
    return this._keyBindings;
  }
  /**
   * Remaps which keys trigger `nextMove()`/`previousMove()`. Only the
   * actions present in `bindings` are changed; others keep their current
   * binding. Pass a single key or an array of alternatives per action.
   */
  set keyBindings(t) {
    const e = V(t.next), s = V(t.previous);
    this._keyBindings = {
      next: e ?? this._keyBindings.next,
      previous: s ?? this._keyBindings.previous
    };
  }
  get sizeAttr() {
    const t = Number(this.getAttribute("size"));
    return Number.isInteger(t) && t > 1 ? t : 19;
  }
  /** Discards move-number tracking and starts counting from 1 again — call whenever `_board` itself is replaced. */
  resetMoveNumbers(t) {
    this.moveNumbers = new Array(t * t).fill(null), this.moveCounter = 0;
  }
  moveNumberIndex(t, e) {
    return e * this._board.size + t;
  }
  /** Which sides currently get coordinate labels, per the `coordinates` attribute. */
  get coordinateSides() {
    if (!this.hasAttribute("coordinates")) return new Set(G);
    const t = (this.getAttribute("coordinates") ?? "").trim().toLowerCase();
    if (t === "false") return /* @__PURE__ */ new Set();
    if (t === "" || t === "true") return new Set(G);
    const e = t.split(/[\s,]+/).filter(Boolean);
    return new Set(e.filter((s) => G.includes(s)));
  }
  /** Label distance from the grid edge, in board units (see `coordinates-gap`). */
  get coordinatesGap() {
    const t = this.getAttribute("coordinates-gap");
    return t ? Math.max(0, this.cssLengthToBoardUnits(t) ?? j) : j;
  }
  /** Coordinate label font size, in board units (see `coordinates-font-size`). */
  get coordinatesFontSizeUnits() {
    const t = this.getAttribute("coordinates-font-size"), e = Number(Y);
    return t ? Math.max(0, this.cssLengthToBoardUnits(t) ?? e) : e;
  }
  /**
   * The blank margin between the host's outer edge and the grid/coordinates,
   * in board units (see `padding`). Never negative — a "negative margin"
   * would push content past the host's own edge, clipping it.
   *
   * Resolved against `DEFAULT_PADDING` rather than itself when converting
   * CSS units — using the not-yet-resolved custom padding to compute the
   * very extent that padding determines would be circular. This makes the
   * conversion ratio a reasonable approximation (based on the default
   * margin) rather than exact when a custom padding is set, which is fine
   * in practice since padding is a coarse, rarely-tuned setting.
   */
  get padding() {
    const t = this.getAttribute("padding");
    return t ? Math.max(0, this.cssLengthToBoardUnits(t, O) ?? O) : O;
  }
  /**
   * Stone radius scale relative to the default size (see `stone-size`) — a
   * bare multiplier (`"0.9"`) or percentage (`"90%"`) of the built-in
   * radius, not a CSS length, since it's a proportion of the board's own
   * scale rather than an absolute size.
   */
  get stoneSizeScale() {
    const t = this.getAttribute("stone-size");
    if (!t) return 1;
    const e = t.trim(), s = e.endsWith("%") ? Number(e.slice(0, -1)) / 100 : Number(e);
    return Number.isFinite(s) && s > 0 ? s : 1;
  }
  /** Horizontal nudge applied to `LB` label text, in board units (see `label-offset-x`). */
  get labelOffsetX() {
    const t = this.getAttribute("label-offset-x");
    return t ? this.cssLengthToBoardUnits(t) ?? 0 : 0;
  }
  /** Vertical nudge applied to `LB` label text, in board units (see `label-offset-y`). */
  get labelOffsetY() {
    const t = this.getAttribute("label-offset-y");
    return t ? this.cssLengthToBoardUnits(t) ?? 0 : 0;
  }
  /**
   * Explicit `corner-radius` override, in board units, or `null` to fall
   * back to the automatic proportional radius (see `buildSvg`). `"0"`
   * disables rounding entirely — a real, intentional value, distinct from
   * "unset".
   */
  get cornerRadiusOverride() {
    const t = this.getAttribute("corner-radius");
    return t === null || t === "" ? null : Math.max(0, this.cssLengthToBoardUnits(t) ?? 0);
  }
  /** The active color/appearance preset (see `theme`). Unrecognized values fall back to `"wood"`. */
  get theme() {
    const t = this.getAttribute("theme");
    return t && q[t] || q[St];
  }
  /** Inclusive vertex range shown along an axis, per `x-start`/`x-end`/`y-start`/`y-end`. */
  cropRange(t, e) {
    const s = this._board.size, r = (d, n) => {
      if (d === null || d === "") return n;
      const h = Number(d);
      return Number.isInteger(h) ? Math.max(0, Math.min(h, s - 1)) : n;
    }, i = r(this.getAttribute(t), 0), l = r(this.getAttribute(e), s - 1);
    return i <= l ? [i, l] : [l, i];
  }
  /**
   * Resolves board size, crop range, padding, and coordinate space into the
   * SVG geometry every rendering/hit-testing method needs. Coordinate labels
   * (when shown) get their own reserved space *outside* the grid but
   * *inside* `padding`'s margin — so `padding` is always, literally, the
   * distance from the host's outer edge to the outermost thing drawn
   * (labels if shown, the grid itself otherwise), never eaten into by them.
   */
  computeLayout() {
    const t = this._board.size, [e, s] = this.cropRange("x-start", "x-end"), [r, i] = this.cropRange("y-start", "y-end"), l = this.padding, d = this.coordinateSides.size > 0 ? this.coordinatesGap + this.coordinatesFontSizeUnits : 0, n = l + d;
    return {
      size: t,
      xStart: e,
      xEnd: s,
      yStart: r,
      yEnd: i,
      padding: l,
      extentX: s - e + n * 2,
      extentY: i - r + n * 2,
      gridOffsetX: n - e,
      gridOffsetY: n - r
    };
  }
  /**
   * Reflects `coordinates-font`/`coordinates-font-size` onto CSS custom
   * properties on the host, consumed by the shadow stylesheet. Using
   * custom-property substitution (rather than interpolating the raw
   * attribute string into the `<style>` text) means an attacker-controlled
   * value can't break out into new CSS rules — the browser only ever
   * resolves it as a single property value.
   */
  applyCoordinateStyle() {
    const t = this.getAttribute("coordinates-font") || gt;
    this.style.setProperty("--go-coords-font-family", t);
    const e = this.getAttribute("coordinates-font-size"), s = e ? this.cssLengthToBoardUnits(e) : Number(Y);
    s !== null && this.style.setProperty("--go-coords-font-size", `${s}px`);
  }
  /**
   * Reflects `label-font`/`label-font-size` onto CSS custom properties,
   * consumed by `.mark-label` — the same custom-property substitution
   * approach as `applyCoordinateStyle`, and for the same reason (an
   * attacker-controlled font-family string can't break out into new CSS
   * rules this way). Kept independent of `--go-coords-*` so coordinate
   * labels and SGF markup labels (`LB`) can be styled separately — they're
   * unrelated pieces of text that happen to both be text.
   */
  applyLabelStyle() {
    const t = this.getAttribute("label-font") || ut;
    this.style.setProperty("--go-label-font-family", t);
    const e = this.getAttribute("label-font-size"), s = e ? this.cssLengthToBoardUnits(e) : Number(bt);
    s !== null && this.style.setProperty("--go-label-font-size", `${s}px`);
  }
  /**
   * Converts a real CSS length (as given to `coordinates-font-size` /
   * `coordinates-gap`) into the board's own SVG user-unit space, using the
   * host's current rendered size as the conversion ratio. Returns null if
   * the host hasn't been laid out yet (rect is zero-sized) — callers should
   * keep their previous/default value and rely on the ResizeObserver to
   * call back once real layout is available.
   */
  cssLengthToBoardUnits(t, e = this.padding) {
    const s = this.getBoundingClientRect();
    if (s.width === 0) return null;
    const r = dt(t), [i, l] = this.cropRange("x-start", "x-end"), d = l - i + e * 2;
    return r * (d / s.width);
  }
  /**
   * Reflects the `width`/`height` attributes onto inline host styles. With
   * neither set, defaults to 100% width with the height derived from the
   * board's own aspect ratio (1:1 normally, but non-square once cropped via
   * `x-start`/`x-end`/`y-start`/`y-end`) — computed here rather than left to
   * the static `aspect-ratio: 1/1` stylesheet rule, both because it must
   * track cropping and because a slotted flex child stretches its
   * cross-axis ("auto" width) to fill the container regardless of
   * aspect-ratio. Setting just one of `width`/`height` derives the other to
   * match the board's own aspect ratio at that size.
   */
  applyHostSize() {
    const t = this.getAttribute("width"), e = this.getAttribute("height"), { extentX: s, extentY: r } = this.computeLayout();
    if (!t && !e) {
      this.style.width = "100%", this.style.height = "", this.style.aspectRatio = `${s} / ${r}`;
      return;
    }
    if (this.style.aspectRatio = "", t && e) {
      this.style.width = T(t), this.style.height = T(e);
      return;
    }
    const i = r / s;
    t ? (this.style.width = T(t), this.style.height = `calc(${T(t)} * ${i})`) : (this.style.height = T(e), this.style.width = `calc(${T(e)} * ${1 / i})`);
  }
  /** Plays a move for the current player at the given board coordinates. */
  play(t, e) {
    const s = this._board.play(t, e);
    if (s.legal) {
      this.moveCounter++, this.moveNumbers[this.moveNumberIndex(t, e)] = this.moveCounter;
      for (const r of s.captured)
        this.moveNumbers[this.moveNumberIndex(r.x, r.y)] = null;
      return this.render(), this.dispatchEvent(
        new CustomEvent("move", {
          detail: { x: t, y: e, color: s.color, captured: s.captured },
          bubbles: !0,
          composed: !0
        })
      ), !0;
    }
    return this.dispatchEvent(
      new CustomEvent("illegal-move", {
        detail: { x: t, y: e, reason: s.reason },
        bubbles: !0,
        composed: !0
      })
    ), !1;
  }
  /** Passes the current player's turn. */
  pass() {
    this._board.pass(), this.moveCounter++, this.render(), this.dispatchEvent(new CustomEvent("pass", { bubbles: !0, composed: !0 }));
  }
  /** Clears the board, optionally resizing it. Does not affect a loaded SGF. */
  reset(t = this._board.size) {
    this._board = new C(t), this.resetMoveNumbers(t), this.hovered = null, this.buildSvg(), this.render();
  }
  /** Steps forward one move in the loaded SGF's main line. */
  nextMove() {
    return !this._sgfMainLine || this._moveIndex >= this._sgfMainLine.length ? !1 : (this.goToMove(this._moveIndex + 1), !0);
  }
  /** Steps back one move in the loaded SGF's main line. */
  previousMove() {
    return !this._sgfMainLine || this._moveIndex <= 0 ? !1 : (this.goToMove(this._moveIndex - 1), !0);
  }
  /** Jumps to an arbitrary position in the loaded SGF's main line. */
  goToMove(t) {
    if (!this._sgfMainLine) return;
    const e = Math.max(0, Math.min(t, this._sgfMainLine.length));
    if (e === this._moveIndex) return;
    const s = this._board.size;
    this._board = new C(s), this.resetMoveNumbers(s), this.applySgfNode(this._sgfTree.nodes[0]);
    for (let r = 0; r < e; r++)
      this.applySgfNode(this._sgfMainLine[r], r + 1);
    this._moveIndex = e, this.hovered = null, this.render(), this.dispatchEvent(
      new CustomEvent("navigate", {
        detail: { moveIndex: this._moveIndex, moveCount: this._sgfMainLine.length },
        bubbles: !0,
        composed: !0
      })
    );
  }
  /**
   * Applies one SGF node's board-affecting properties: setup stones
   * (`AB`/`AW`/`AE`, placed directly via `Board.set` — no capture/suicide/
   * ko rules, per the SGF spec) followed by a move (`B`/`W`, played via
   * `Board.play`), if present. A node commonly has only one or the other,
   * but both are handled since the spec permits either independently.
   *
   * `moveNumber`, when given, is recorded for a played stone (never for
   * setup stones, which the SGF spec and move-numbering convention both
   * treat as pre-existing rather than "played") — omit it for the root
   * node, which isn't itself a numbered move in `_sgfMainLine`'s indexing.
   */
  applySgfNode(t, e) {
    var d;
    for (const { x: n, y: h } of F(t, "AB")) this._board.set(n, h, b.Black);
    for (const { x: n, y: h } of F(t, "AW")) this._board.set(n, h, b.White);
    for (const { x: n, y: h } of F(t, "AE")) this._board.set(n, h, b.Empty);
    const s = "B" in t.properties ? b.Black : "W" in t.properties ? b.White : null;
    if (s === null) return;
    const r = ((d = t.properties[s === b.Black ? "B" : "W"]) == null ? void 0 : d[0]) ?? "";
    if (lt(r, this._board.size)) {
      this._board.pass();
      return;
    }
    const i = D(r);
    if (!i) return;
    const l = this._board.play(i.x, i.y);
    if (l.legal) {
      e !== void 0 && (this.moveNumbers[this.moveNumberIndex(i.x, i.y)] = e);
      for (const n of l.captured)
        this.moveNumbers[this.moveNumberIndex(n.x, n.y)] = null;
    }
  }
  async loadSgf(t) {
    var s;
    const e = ++this.sgfLoadToken;
    try {
      const r = await fetch(t);
      if (!r.ok)
        throw new Error(`Failed to fetch SGF: ${r.status} ${r.statusText}`);
      const i = await r.text(), [l] = nt(i);
      if (!l) throw new Error("SGF contains no game tree");
      const d = l.nodes[0];
      if (!d) throw new Error("SGF game tree has no root node");
      if (e !== this.sgfLoadToken) return;
      const n = Number(((s = d.properties.SZ) == null ? void 0 : s[0]) ?? "19");
      this._sgfTree = l, this._sgfMainLine = l.nodes.slice(1), this._moveIndex = 0, this._board = new C(n), this.resetMoveNumbers(n), this.hovered = null, this.applySgfNode(d), this.buildSvg(), this.render(), this.dispatchEvent(
        new CustomEvent("sgf-loaded", {
          detail: { tree: l },
          bubbles: !0,
          composed: !0
        })
      );
    } catch (r) {
      if (e !== this.sgfLoadToken) return;
      this._sgfTree = null, this._sgfMainLine = null, this._moveIndex = 0, console.error("go-board: failed to load SGF from", t, r), this.dispatchEvent(
        new CustomEvent("sgf-error", {
          detail: { error: r },
          bubbles: !0,
          composed: !0
        })
      );
    }
  }
  vertexFromEvent(t) {
    const e = this.svg.createSVGPoint();
    e.x = t.clientX, e.y = t.clientY;
    const s = this.svg.getScreenCTM();
    if (!s) return null;
    const r = e.matrixTransform(s.inverse()), { xStart: i, xEnd: l, yStart: d, yEnd: n, gridOffsetX: h, gridOffsetY: g } = this.computeLayout(), p = Math.round(r.x - h), m = Math.round(r.y - g);
    return p < i || p > l || m < d || m > n || Math.hypot(r.x - h - p, r.y - g - m) > 0.5 ? null : { x: p, y: m };
  }
  buildSvg() {
    const t = this.computeLayout(), { size: e, xStart: s, xEnd: r, yStart: i, yEnd: l, padding: d, extentX: n, extentY: h, gridOffsetX: g, gridOffsetY: p } = t, m = (wt[e] ?? []).filter(
      ([u, S]) => u >= s && u <= r && S >= i && S <= l
    ), f = this.coordinateSides, M = this.coordinatesGap, v = (u) => Math.min(vt, u ? M * 0.75 : d), k = s > 0 ? v(f.has("left")) : 0, E = r < e - 1 ? v(f.has("right")) : 0, _ = i > 0 ? v(f.has("top")) : 0, Q = l < e - 1 ? v(f.has("bottom")) : 0, B = [];
    for (let u = i; u <= l; u++) {
      const S = p + u;
      B.push(
        `<line x1="${g + s - k}" y1="${S}" x2="${g + r + E}" y2="${S}" />`
      );
    }
    for (let u = s; u <= r; u++) {
      const S = g + u;
      B.push(
        `<line x1="${S}" y1="${p + i - _}" x2="${S}" y2="${p + l + Q}" />`
      );
    }
    const J = m.map(
      ([u, S]) => `<circle class="star" cx="${g + u}" cy="${p + S}" r="${pt}" />`
    ).join(""), tt = this.buildCoordinateMarkup(t), et = g + s, U = this.cornerRadiusOverride, I = U === null ? Math.min(et * mt, ft) : Math.min(U, Math.min(n, h) / 2), st = n > 0 ? I / n * 100 : 0, ot = h > 0 ? I / h * 100 : 0;
    this.style.setProperty("--go-corner-radius", `${st}% / ${ot}%`);
    const L = this.theme;
    this.shadowRoot.innerHTML = `
      <style>${Et(L)}</style>
      <svg viewBox="0 0 ${n} ${h}" role="group" aria-label="Go board">
        <defs>
          <radialGradient id="wood" cx="35%" cy="30%" r="75%">
            <stop offset="0%" stop-color="#f0c988" />
            <stop offset="100%" stop-color="#cf9a55" />
          </radialGradient>
          <radialGradient id="black-stone" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stop-color="#6a6a6a" />
            <stop offset="45%" stop-color="#2b2b2b" />
            <stop offset="100%" stop-color="#050505" />
          </radialGradient>
          <radialGradient id="white-stone" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stop-color="#ffffff" />
            <stop offset="75%" stop-color="#e7e2d6" />
            <stop offset="100%" stop-color="#c9c3b3" />
          </radialGradient>
          <radialGradient id="gomagic-wood" cx="35%" cy="30%" r="75%">
            <stop offset="0%" stop-color="#eec97a" />
            <stop offset="100%" stop-color="#c9963f" />
          </radialGradient>
          <radialGradient id="wgojs-wood" cx="35%" cy="30%" r="75%">
            <stop offset="0%" stop-color="#e3ab52" />
            <stop offset="100%" stop-color="#a8721f" />
          </radialGradient>
          <filter id="stone-shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow
              dx="0.05"
              dy="0.09"
              stdDeviation="0.05"
              flood-color="${L.stoneShadowColor ?? "#000000"}"
              flood-opacity="${L.stoneShadowOpacity ?? 0.5}"
            />
          </filter>
          <clipPath id="board-clip">
            <rect x="0" y="0" width="${n}" height="${h}" rx="${I}" ry="${I}" />
          </clipPath>
          <mask id="grid-mask">
            <rect x="0" y="0" width="${n}" height="${h}" fill="white" />
            <g class="grid-mask-holes"></g>
          </mask>
        </defs>
        <rect class="board-bg" x="0" y="0" width="${n}" height="${h}" rx="${I}" ry="${I}" fill="${L.boardFill}" />
        <g class="grid" stroke="${L.gridStroke}" stroke-width="0.035" mask="url(#grid-mask)">${B.join("")}</g>
        <g class="star-points" fill="${L.starFill}">${J}</g>
        ${tt}
        <g class="stones"></g>
        <g class="markup"></g>
        <circle class="ghost-stone" r="${z * this.stoneSizeScale}" visibility="hidden" />
      </svg>
    `, this.svg = this.shadowRoot.querySelector("svg"), this.stonesGroup = this.shadowRoot.querySelector(".stones"), this.markupGroup = this.shadowRoot.querySelector(".markup"), this.gridMaskHoles = this.shadowRoot.querySelector(".grid-mask-holes"), this.ghostStone = this.shadowRoot.querySelector(".ghost-stone");
    const W = this.getAttribute("background-image") || L.boardImage || null;
    if (W) {
      const u = document.createElementNS(x, "image");
      u.setAttribute("x", "0"), u.setAttribute("y", "0"), u.setAttribute("width", String(n)), u.setAttribute("height", String(h)), u.setAttribute("clip-path", "url(#board-clip)"), u.setAttribute("preserveAspectRatio", "none"), u.setAttribute("href", W), u.setAttribute("class", "board-bg-image"), this.shadowRoot.querySelector(".board-bg").insertAdjacentElement("afterend", u);
    }
  }
  buildCoordinateMarkup(t) {
    const e = this.coordinateSides;
    if (e.size === 0) return "";
    const { size: s, xStart: r, xEnd: i, yStart: l, yEnd: d, gridOffsetX: n, gridOffsetY: h } = t, g = this.coordinatesGap, p = h + l - g, m = h + d + g, f = n + r - g, M = n + i + g, v = [];
    if (e.has("top") || e.has("bottom"))
      for (let k = r; k <= i; k++) {
        const E = ct[k] ?? "?", _ = n + k;
        e.has("top") && v.push(`<text x="${_}" y="${p}">${E}</text>`), e.has("bottom") && v.push(`<text x="${_}" y="${m}">${E}</text>`);
      }
    if (e.has("left") || e.has("right"))
      for (let k = l; k <= d; k++) {
        const E = s - k, _ = h + k;
        e.has("left") && v.push(`<text x="${f}" y="${_}">${E}</text>`), e.has("right") && v.push(`<text x="${M}" y="${_}">${E}</text>`);
      }
    return `<g class="coordinates">${v.join("")}</g>`;
  }
  render() {
    if (!this.stonesGroup) return;
    this.stonesGroup.replaceChildren();
    const t = this.computeLayout(), { xStart: e, xEnd: s, yStart: r, yEnd: i, gridOffsetX: l, gridOffsetY: d } = t, n = this.moveNumbersEnabled;
    for (let h = r; h <= i; h++)
      for (let g = e; g <= s; g++) {
        const p = this._board.get(g, h);
        if (p === b.Empty) continue;
        this.stonesGroup.appendChild(this.createStone(g, h, p, l, d));
        const m = n ? this.moveNumbers[this.moveNumberIndex(g, h)] : null;
        m != null && this.stonesGroup.appendChild(this.createMoveNumber(m, g, h, l, d));
      }
    this.renderMarkup(t), this.updateGhostStone();
  }
  /**
   * Draws the *current* SGF node's markup — `TR`/`SQ`/`CR`/`MA` point
   * shapes and `LB` text labels — read fresh from `nodes[moveIndex]` each
   * call rather than accumulated across moves like setup stones, since
   * markup conventionally annotates one specific position, not the game
   * going forward.
   */
  renderMarkup(t) {
    var g, p;
    if (!this.markupGroup) return;
    this.markupGroup.replaceChildren(), (g = this.gridMaskHoles) == null || g.replaceChildren();
    const e = (p = this._sgfTree) == null ? void 0 : p.nodes[this._moveIndex];
    if (!e) return;
    const { xStart: s, xEnd: r, yStart: i, yEnd: l, gridOffsetX: d, gridOffsetY: n } = t, h = (m) => m.x >= s && m.x <= r && m.y >= i && m.y <= l;
    for (const [m, f] of Object.entries(yt)) {
      const M = f === "triangle" ? xt : 0;
      for (const v of F(e, m))
        h(v) && (this.clearGridAt(v.x, v.y, d + v.x, n + v.y + M), this.markupGroup.appendChild(this.createMark(f, v.x, v.y, d, n)));
    }
    for (const m of e.properties.LB ?? []) {
      const f = ht(m);
      !f || !h(f.vertex) || (this.clearGridAt(
        f.vertex.x,
        f.vertex.y,
        d + f.vertex.x + this.labelOffsetX,
        n + f.vertex.y + this.labelOffsetY
      ), this.markupGroup.appendChild(
        this.createLabel(f.text, f.vertex.x, f.vertex.y, d, n)
      ));
    }
  }
  /**
   * Punches a hole in the `.grid` layer's mask at an empty point that's
   * about to get a mark or label drawn on it — otherwise the grid line
   * crossing that intersection visually cuts through the markup. This
   * hides only the grid line itself; the wood/background-image layer
   * underneath (`.board-bg`, drawn below `.grid`) is untouched, so the
   * point still reads as part of the board rather than sitting on a
   * conspicuous patch. A no-op on a point that already has a stone, since
   * the opaque stone already covers the grid line there.
   *
   * `gridX`/`gridY` are the underlying board vertex (for the empty-point
   * check); `cx`/`cy` are where the hole is actually drawn, which for an
   * off-center label differ from the vertex's own grid position.
   */
  clearGridAt(t, e, s, r) {
    if (!this.gridMaskHoles || this._board.get(t, e) !== b.Empty) return;
    const i = document.createElementNS(x, "circle");
    i.setAttribute("cx", String(s)), i.setAttribute("cy", String(r)), i.setAttribute("r", String(kt)), i.setAttribute("fill", "black"), this.gridMaskHoles.appendChild(i);
  }
  /** A light mark reads on a black stone, a dark one on a white stone or empty point/wood. */
  markColorAt(t, e) {
    const s = this.theme;
    return this._board.get(t, e) === b.Black ? s.markLight : s.markDark;
  }
  createMark(t, e, s, r, i) {
    const l = r + e, d = i + s, n = K;
    let h;
    switch (t) {
      case "circle":
        h = document.createElementNS(x, "circle"), h.setAttribute("cx", String(l)), h.setAttribute("cy", String(d)), h.setAttribute("r", String(n));
        break;
      case "square":
        h = document.createElementNS(x, "rect"), h.setAttribute("x", String(l - n)), h.setAttribute("y", String(d - n)), h.setAttribute("width", String(n * 2)), h.setAttribute("height", String(n * 2));
        break;
      case "triangle":
        h = document.createElementNS(x, "polygon"), h.setAttribute(
          "points",
          [
            [l, d - n],
            [l - n * 0.87, d + n * 0.5],
            [l + n * 0.87, d + n * 0.5]
          ].map((g) => g.join(",")).join(" ")
        );
        break;
      case "cross":
        h = document.createElementNS(x, "g"), h.appendChild(this.createLine(l - n * 0.75, d - n * 0.75, l + n * 0.75, d + n * 0.75)), h.appendChild(this.createLine(l - n * 0.75, d + n * 0.75, l + n * 0.75, d - n * 0.75));
        break;
    }
    return h.setAttribute("class", "mark"), h.setAttribute("stroke", this.markColorAt(e, s)), h;
  }
  createLine(t, e, s, r) {
    const i = document.createElementNS(x, "line");
    return i.setAttribute("x1", String(t)), i.setAttribute("y1", String(e)), i.setAttribute("x2", String(s)), i.setAttribute("y2", String(r)), i;
  }
  createLabel(t, e, s, r, i) {
    const l = document.createElementNS(x, "text");
    return l.setAttribute("x", String(r + e + this.labelOffsetX)), l.setAttribute("y", String(i + s + this.labelOffsetY)), l.setAttribute("class", "mark-label"), l.setAttribute("fill", this.markColorAt(e, s)), l.textContent = t, l;
  }
  /** Draws a move number centered on the stone already at `x`/`y` — see `move-numbers` in the class doc. */
  createMoveNumber(t, e, s, r, i) {
    const l = document.createElementNS(x, "text");
    return l.setAttribute("x", String(r + e)), l.setAttribute("y", String(i + s)), l.setAttribute("class", "move-number"), l.setAttribute("fill", this.markColorAt(e, s)), l.textContent = String(t), l;
  }
  /** `black-stone`/`white-stone` attribute, falling back to the active theme's own stone image if it has one. */
  stoneImageUrl(t) {
    const e = t === b.Black ? "black-stone" : "white-stone", s = t === b.Black ? this.theme.blackStoneImage : this.theme.whiteStoneImage;
    return this.getAttribute(e) || s || null;
  }
  createStone(t, e, s, r, i) {
    const l = this.stoneImageUrl(s), d = z * this.stoneSizeScale;
    if (l) {
      const h = document.createElementNS(x, "image");
      return h.setAttribute("x", String(r + t - d)), h.setAttribute("y", String(i + e - d)), h.setAttribute("width", String(d * 2)), h.setAttribute("height", String(d * 2)), h.setAttribute("href", l), h.setAttribute("class", "stone"), h;
    }
    const n = document.createElementNS(x, "circle");
    return n.setAttribute("cx", String(r + t)), n.setAttribute("cy", String(i + e)), n.setAttribute("r", String(d)), n.setAttribute("class", s === b.Black ? "stone stone-black" : "stone stone-white"), n;
  }
  updateGhostStone() {
    if (!this.ghostStone) return;
    const t = this.hovered;
    if (!(this.interactive && !this._board.isOver && t !== null && this._board.isLegalMove(t.x, t.y)) || !t) {
      this.ghostStone.setAttribute("visibility", "hidden");
      return;
    }
    const { gridOffsetX: s, gridOffsetY: r } = this.computeLayout(), i = this.theme;
    this.ghostStone.setAttribute("cx", String(s + t.x)), this.ghostStone.setAttribute("cy", String(r + t.y)), this.ghostStone.setAttribute("r", String(z * this.stoneSizeScale)), this.ghostStone.setAttribute(
      "fill",
      this._board.currentColor === b.Black ? i.markDark : i.markLight
    ), this.ghostStone.setAttribute("visibility", "visible");
  }
}
function Et(a) {
  return `
  :host {
    display: block;
    aspect-ratio: 1 / 1;
    user-select: none;
    -webkit-user-select: none;
    background: transparent;
    /* Matches the internal SVG's own rounded corners (see buildSvg) so
     * the cutout stays genuinely transparent rather than depending on
     * nothing else happening to paint it, and so a host-level
     * box-shadow (set by a consumer, not this component) follows the
     * rounded shape instead of a sharp-cornered box. */
    border-radius: var(--go-corner-radius, 0px / 0px);
    overflow: hidden;
  }
  svg {
    display: block;
    width: 100%;
    height: 100%;
    touch-action: none;
    cursor: pointer;
  }
  .star-points circle {
    pointer-events: none;
  }
  .coordinates text {
    font-family: var(--go-coords-font-family, system-ui, sans-serif);
    font-size: var(--go-coords-font-size, 0.32px);
    fill: ${a.coordText};
    text-anchor: middle;
    dominant-baseline: middle;
    pointer-events: none;
  }
  .stone {
    filter: ${a.stoneShadow ? "url(#stone-shadow)" : "none"};
  }
  .stone-black {
    fill: ${a.blackStoneFill};
    stroke: ${a.blackStoneStroke};
    stroke-width: ${a.stoneStrokeWidth};
  }
  .stone-white {
    fill: ${a.whiteStoneFill};
    stroke: ${a.whiteStoneStroke};
    stroke-width: ${a.stoneStrokeWidth};
  }
  .ghost-stone {
    opacity: 0.4;
    pointer-events: none;
  }
  .markup {
    pointer-events: none;
  }
  .mark {
    fill: none;
    stroke-width: 0.08;
  }
  .mark-label {
    font-family: var(--go-label-font-family, system-ui, sans-serif);
    font-size: var(--go-label-font-size, 0.55px);
    font-weight: 600;
    text-anchor: middle;
    /* Not "middle": most browsers hang glyphs from a baseline above the
     * true visual center under "middle", which reads as text sitting too
     * high. "central" lines up with the glyph's actual vertical middle. */
    dominant-baseline: central;
  }
  .move-number {
    font-family: var(--go-label-font-family, system-ui, sans-serif);
    font-size: var(--go-label-font-size, 0.55px);
    font-weight: 600;
    text-anchor: middle;
    dominant-baseline: central;
    pointer-events: none;
  }
`;
}
customElements.define("go-board", At);
class _t extends HTMLElement {
  constructor() {
    super();
    const o = this.attachShadow({ mode: "open" });
    o.innerHTML = `
      <style>
        :host {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
      </style>
      <slot></slot>
    `;
  }
}
customElements.define("go-board-container", _t);
function Z(a) {
  const o = a.getAttribute("board");
  if (o) {
    const e = document.getElementById(o);
    if (e && e.tagName === "GO-BOARD") return e;
  }
  return (a.closest("go-board-container") ?? document).querySelector("go-board");
}
const w = "data-go-field", N = "data-go-action", Lt = "data-go-revealed", Tt = `
  :host {
    display: block;
    font-family: system-ui, sans-serif;
    /* Each color is "var(--goban-x, internal-default)" rather than a bare
       value: this lets an ancestor outside the shadow tree (e.g. the page
       setting --goban-text on :root) override it, since custom properties
       inherit through shadow boundaries — while still falling back to a
       sensible built-in default (auto-switched below by
       prefers-color-scheme) when nothing external is set. See "Theming"
       in Docs.md. */
    --go-meta-text: var(--goban-text, #eee);
    --go-meta-text-secondary: var(--goban-text-secondary, #999);
    --go-meta-text-muted: var(--goban-text-muted, #888);
    --go-meta-comment: var(--goban-comment, #ccc);
    --go-meta-panel-bg: var(--goban-panel-bg, linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.04)));
    --go-meta-panel-border: var(--goban-panel-border, rgba(255, 255, 255, 0.14));
    --go-meta-panel-shadow: var(--goban-panel-shadow, 0 1px 3px rgba(0, 0, 0, 0.25));
    --go-meta-card-bg: var(--goban-card-bg, linear-gradient(180deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02)));
    --go-meta-card-border: var(--goban-card-border, rgba(255, 255, 255, 0.09));
    --go-meta-card-shadow: var(--goban-card-shadow, 0 1px 3px rgba(0, 0, 0, 0.2));
    --go-meta-toggle-bg: var(--goban-toggle-bg, rgba(255, 255, 255, 0.08));
    --go-meta-toggle-bg-hover: var(--goban-toggle-bg-hover, rgba(255, 255, 255, 0.14));
    --go-meta-toggle-border: var(--goban-toggle-border, rgba(255, 255, 255, 0.12));
  }
  @media (prefers-color-scheme: light) {
    :host {
      --go-meta-text: var(--goban-text, #1a1a1a);
      --go-meta-text-secondary: var(--goban-text-secondary, #666);
      --go-meta-text-muted: var(--goban-text-muted, #767676);
      --go-meta-comment: var(--goban-comment, #444);
      --go-meta-panel-bg: var(--goban-panel-bg, linear-gradient(180deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.015)));
      --go-meta-panel-border: var(--goban-panel-border, rgba(0, 0, 0, 0.18));
      --go-meta-panel-shadow: var(--goban-panel-shadow, 0 1px 2px rgba(0, 0, 0, 0.08));
      --go-meta-card-bg: var(--goban-card-bg, linear-gradient(180deg, rgba(0, 0, 0, 0.035), rgba(0, 0, 0, 0.015)));
      --go-meta-card-border: var(--goban-card-border, rgba(0, 0, 0, 0.1));
      --go-meta-card-shadow: var(--goban-card-shadow, 0 1px 3px rgba(0, 0, 0, 0.08));
      --go-meta-toggle-bg: var(--goban-toggle-bg, rgba(0, 0, 0, 0.06));
      --go-meta-toggle-bg-hover: var(--goban-toggle-bg-hover, rgba(0, 0, 0, 0.1));
      --go-meta-toggle-border: var(--goban-toggle-border, rgba(0, 0, 0, 0.14));
    }
  }
  /* The plain [hidden] UA-stylesheet rule loses to any author rule that
     sets "display" on the same element (e.g. ".card { display: flex }"),
     regardless of specificity, since author styles always beat user-agent
     ones — so anything toggled via the "hidden" property/attribute needs
     this restated with author-level priority to actually take effect. */
  [hidden] {
    display: none !important;
  }
  .empty {
    margin: 0;
    color: var(--go-meta-text-muted);
    font-size: 0.9rem;
  }
  .card {
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
  }
  .players {
    display: flex;
    align-items: stretch;
    gap: 0.6rem;
  }
  .player-panel {
    flex: 1 1 0;
    min-width: 0;
    display: flex;
    align-items: center;
    gap: 0.55rem;
    padding: 0.6rem 0.75rem;
    background: var(--go-meta-panel-bg);
    border: 1px solid var(--go-meta-panel-border);
    border-radius: 10px;
    box-shadow: var(--go-meta-panel-shadow);
    box-sizing: border-box;
  }
  .stone-dot {
    width: 1.1rem;
    height: 1.1rem;
    border-radius: 50%;
    flex: none;
  }
  .stone-dot-black {
    background: radial-gradient(circle at 35% 30%, #6a6a6a, #050505 75%);
    box-shadow: 0 0 0 1px #000, 0 1px 2px rgba(0, 0, 0, 0.4);
  }
  .stone-dot-white {
    background: radial-gradient(circle at 35% 30%, #ffffff, #c9c3b3 75%);
    box-shadow: 0 0 0 1px #9c9483, 0 1px 2px rgba(0, 0, 0, 0.25);
  }
  .player-text {
    min-width: 0;
    display: flex;
    align-items: baseline;
    gap: 0.35rem;
  }
  .player-name {
    color: var(--go-meta-text);
    font-weight: 600;
    font-size: 0.9rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .player-rank {
    color: var(--go-meta-text-secondary);
    font-size: 0.9rem;
    flex: none;
  }
  .details {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    padding: 0.7rem 0.85rem;
    background: var(--go-meta-card-bg);
    border: 1px solid var(--go-meta-card-border);
    border-radius: 10px;
    box-shadow: var(--go-meta-card-shadow);
    box-sizing: border-box;
  }
  .meta-line {
    color: var(--go-meta-text-secondary);
    font-size: 0.85rem;
  }
  .result-line {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .result-toggle {
    font: inherit;
    font-size: 0.75rem;
    color: var(--go-meta-text-secondary);
    background: var(--go-meta-toggle-bg);
    border: 1px solid var(--go-meta-toggle-border);
    border-radius: 999px;
    padding: 0.2rem 0.65rem;
    cursor: pointer;
  }
  .result-toggle:hover {
    background: var(--go-meta-toggle-bg-hover);
  }
  .result-value {
    color: var(--go-meta-text);
    font-size: 0.85rem;
    font-weight: 600;
  }
  .comment {
    color: var(--go-meta-comment);
    font-size: 0.85rem;
    line-height: 1.4;
    white-space: pre-wrap;
  }
`;
class Ct extends HTMLElement {
  constructor() {
    super(...arguments);
    c(this, "board", null);
    c(this, "resultRevealed", !1);
    c(this, "slotEl");
    c(this, "emptyEl");
    c(this, "cardEl");
    c(this, "detailsEl");
    c(this, "metaEl");
    c(this, "resultLineEl");
    c(this, "resultValueEl");
    c(this, "commentEl");
    c(this, "handleGameLoaded", () => {
      this.resultRevealed = !1, this.render();
    });
    c(this, "handleNavigate", () => this.render());
    c(this, "handleClick", (t) => {
      const e = t.composedPath().find((s) => s instanceof HTMLElement && s.hasAttribute(N));
      (e == null ? void 0 : e.getAttribute(N)) === "toggle-result" && (this.resultRevealed = !this.resultRevealed, this.render());
    });
  }
  static get observedAttributes() {
    return ["details"];
  }
  /** Whether the info below the player panels (meta line/result/comment) is shown, per the `details` attribute. */
  get showDetails() {
    return !this.hasAttribute("details") || this.getAttribute("details") !== "false";
  }
  /**
   * The currently displayed game info, or `null` when no game is loaded.
   * Read this for a fully custom design instead of (or alongside)
   * `data-go-field` bindings; also fired as a `metadata-changed` event
   * whenever it changes.
   */
  get gameInfo() {
    var s, r, i;
    const t = (r = (s = this.board) == null ? void 0 : s.sgfTree) == null ? void 0 : r.nodes[0];
    if (!t || !this.board) return null;
    const e = (i = this.board.sgfTree) == null ? void 0 : i.nodes[this.board.moveIndex];
    return {
      black: { name: A(t, "PB") ?? "Black", rank: A(t, "BR") },
      white: { name: A(t, "PW") ?? "White", rank: A(t, "WR") },
      komi: A(t, "KM"),
      date: A(t, "DT"),
      event: A(t, "GN"),
      result: A(t, "RE"),
      comment: e ? A(e, "C") : void 0
    };
  }
  attributeChangedCallback() {
    this.shadowRoot && this.render();
  }
  connectedCallback() {
    var t, e, s;
    if (!this.shadowRoot) {
      const r = this.attachShadow({ mode: "open" });
      r.innerHTML = `
        <style>${Tt}</style>
        <slot>
          <p class="empty" id="empty">No game loaded.</p>
          <div class="card" id="card" hidden>
            <div class="players">
              <div class="player-panel player-panel-black">
                <span class="stone-dot stone-dot-black"></span>
                <div class="player-text">
                  <span class="player-name" ${w}="black-name"></span>
                  <span class="player-rank" ${w}="black-rank"></span>
                </div>
              </div>
              <div class="player-panel player-panel-white">
                <span class="stone-dot stone-dot-white"></span>
                <div class="player-text">
                  <span class="player-name" ${w}="white-name"></span>
                  <span class="player-rank" ${w}="white-rank"></span>
                </div>
              </div>
            </div>
            <div class="details" id="details">
              <div id="meta"></div>
              <div class="result-line" id="resultLine" hidden>
                <button class="result-toggle" type="button" ${N}="toggle-result" ${w}="result-toggle-label"></button>
                <span class="result-value" id="resultValue" ${w}="result" hidden></span>
              </div>
              <div class="comment" id="comment" ${w}="comment" hidden></div>
            </div>
          </div>
        </slot>
      `, this.slotEl = r.querySelector("slot"), this.emptyEl = r.getElementById("empty"), this.cardEl = r.getElementById("card"), this.detailsEl = r.getElementById("details"), this.metaEl = r.getElementById("meta"), this.resultLineEl = r.getElementById("resultLine"), this.resultValueEl = r.getElementById("resultValue"), this.commentEl = r.getElementById("comment"), this.addEventListener("click", this.handleClick), this.slotEl.addEventListener("slotchange", () => this.render());
    }
    this.board = Z(this), (t = this.board) == null || t.addEventListener("sgf-loaded", this.handleGameLoaded), (e = this.board) == null || e.addEventListener("sgf-error", this.handleGameLoaded), (s = this.board) == null || s.addEventListener("navigate", this.handleNavigate), this.render();
  }
  disconnectedCallback() {
    var t, e, s;
    (t = this.board) == null || t.removeEventListener("sgf-loaded", this.handleGameLoaded), (e = this.board) == null || e.removeEventListener("sgf-error", this.handleGameLoaded), (s = this.board) == null || s.removeEventListener("navigate", this.handleNavigate);
  }
  render() {
    const t = this.gameInfo;
    this.emptyEl.hidden = t !== null, this.cardEl.hidden = t === null, this.detailsEl.hidden = !this.showDetails, t && this.showDetails && (this.metaEl.replaceChildren(
      ...It(t).map((e) => {
        const s = document.createElement("div");
        return s.className = "meta-line", s.textContent = e, s;
      })
    ), this.resultLineEl.hidden = !t.result, this.resultValueEl.hidden = !this.resultRevealed, this.commentEl.hidden = !t.comment);
    for (const e of this.queryTagged(`[${w}]`))
      e.textContent = $t(e.getAttribute(w), t, this.resultRevealed);
    for (const e of this.queryTagged(`[${N}="toggle-result"]`))
      e.toggleAttribute(Lt, this.resultRevealed);
    this.dispatchEvent(new CustomEvent("metadata-changed", { detail: t, bubbles: !0, composed: !0 }));
  }
  /**
   * Finds elements matching `selector` among what the slot is actually
   * rendering right now: the developer's assigned light-DOM children if
   * any were provided, otherwise the slot's own default fallback content.
   */
  queryTagged(t) {
    const e = this.slotEl.assignedElements({ flatten: !0 }), s = e.length > 0 ? e : Array.from(this.slotEl.children), r = [];
    for (const i of s)
      i.matches(t) && r.push(i), r.push(...Array.from(i.querySelectorAll(t)));
    return r;
  }
}
function A(a, o) {
  var t;
  return (t = a.properties[o]) == null ? void 0 : t[0];
}
function It(a) {
  return [a.komi ? `Komi ${a.komi}` : null, a.date, a.event].filter(
    (o) => !!o
  );
}
function $t(a, o, t) {
  if (!o || !a) return "";
  switch (a) {
    case "black-name":
      return o.black.name;
    case "black-rank":
      return o.black.rank ?? "";
    case "white-name":
      return o.white.name;
    case "white-rank":
      return o.white.rank ?? "";
    case "komi":
      return o.komi ?? "";
    case "date":
      return o.date ?? "";
    case "event":
      return o.event ?? "";
    case "result":
      return t ? o.result ?? "" : "";
    case "result-toggle-label":
      return t ? "Hide result" : "Show result";
    case "comment":
      return o.comment ?? "";
  }
}
customElements.define("go-metadata-container", Ct);
const y = "data-go-action", P = "data-go-counter", Mt = "data-go-disabled", zt = "data-go-playing", Ft = `
  :host {
    display: block;
    font-family: system-ui, sans-serif;
    /* var(--goban-x, default): lets an ancestor outside the shadow tree
       (e.g. the page setting --goban-btn-bg on :root) override this, since
       custom properties inherit through shadow boundaries — see "Theming"
       in Docs.md. */
    --go-controls-btn-bg: var(--goban-btn-bg, #3a3a3a);
    --go-controls-btn-bg-hover: var(--goban-btn-bg-hover, #4a4a4a);
    --go-controls-btn-color: var(--goban-btn-color, #eee);
    --go-controls-btn-playing-bg: var(--goban-btn-playing-bg, #7a3a3a);
    --go-controls-counter: var(--goban-counter, #bbb);
  }
  @media (prefers-color-scheme: light) {
    :host {
      --go-controls-btn-bg: var(--goban-btn-bg, #e6e4e0);
      --go-controls-btn-bg-hover: var(--goban-btn-bg-hover, #d8d5cf);
      --go-controls-btn-color: var(--goban-btn-color, #2a2a2a);
      --go-controls-btn-playing-bg: var(--goban-btn-playing-bg, #f0c2c2);
      --go-controls-counter: var(--goban-counter, #666);
    }
  }
  .default-controls {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    gap: 0.375rem;
  }
  .buttons {
    grid-column: 2;
    display: flex;
    align-items: center;
    gap: 0.375rem;
  }
  .default-controls button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2.25rem;
    height: 2.25rem;
    padding: 0;
    border: none;
    border-radius: 999px;
    background: var(--go-controls-btn-bg);
    color: var(--go-controls-btn-color);
    cursor: pointer;
  }
  .default-controls button:hover:not([data-go-disabled]) {
    background: var(--go-controls-btn-bg-hover);
  }
  .default-controls button[data-go-disabled] {
    opacity: 0.3;
    cursor: default;
  }
  .default-controls button[data-go-action="play-all"][data-go-playing] {
    background: var(--go-controls-btn-playing-bg);
  }
  .default-counter {
    grid-column: 3;
    justify-self: end;
    font-variant-numeric: tabular-nums;
    color: var(--go-controls-counter);
    font-size: 0.85rem;
  }
`;
class Nt extends HTMLElement {
  constructor() {
    super(...arguments);
    c(this, "board", null);
    c(this, "playTimer", null);
    c(this, "slotEl");
    c(this, "handleUpdate", () => this.updateUI());
    c(this, "handleClick", (t) => {
      const e = t.composedPath().find((s) => s instanceof HTMLElement && s.hasAttribute(y));
      e && this.performAction(e.getAttribute(y));
    });
  }
  connectedCallback() {
    var t, e, s;
    if (!this.shadowRoot) {
      const r = this.attachShadow({ mode: "open" });
      r.innerHTML = `
        <style>${Ft}</style>
        <slot>
          <div class="default-controls">
            <div class="buttons">
            <button ${y}="first" title="First move" aria-label="First move">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="6" y1="5" x2="6" y2="19" />
                <polyline points="18 6 10 12 18 18" />
              </svg>
            </button>
            <button ${y}="back-10" title="Back 10 moves" aria-label="Back 10 moves">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="18 6 12 12 18 18" />
                <polyline points="11 6 5 12 11 18" />
              </svg>
            </button>
            <button ${y}="previous" title="Previous move" aria-label="Previous move">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="15 6 9 12 15 18" />
              </svg>
            </button>
            <button ${y}="play-all" title="Play all" aria-label="Play all">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" stroke="none">
                <polygon points="6 4 20 12 6 20" />
              </svg>
            </button>
            <button ${y}="next" title="Next move" aria-label="Next move">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="9 6 15 12 9 18" />
              </svg>
            </button>
            <button ${y}="forward-10" title="Forward 10 moves" aria-label="Forward 10 moves">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 6 12 12 6 18" />
                <polyline points="13 6 19 12 13 18" />
              </svg>
            </button>
            <button ${y}="last" title="Last move" aria-label="Last move">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="5" x2="18" y2="19" />
                <polyline points="6 6 14 12 6 18" />
              </svg>
            </button>
            </div>
            <span class="default-counter" ${P}="{index} / {count}"></span>
          </div>
        </slot>
      `, this.slotEl = r.querySelector("slot"), this.addEventListener("click", this.handleClick), this.getAttribute("counter") === "false" && ((t = r.querySelector(".default-counter")) == null || t.remove()), this.slotEl.addEventListener("slotchange", () => this.updateUI());
    }
    this.board = Z(this), (e = this.board) == null || e.addEventListener("navigate", this.handleUpdate), (s = this.board) == null || s.addEventListener("sgf-loaded", this.handleUpdate), this.updateUI();
  }
  disconnectedCallback() {
    var t, e;
    this.stopPlayAll(), (t = this.board) == null || t.removeEventListener("navigate", this.handleUpdate), (e = this.board) == null || e.removeEventListener("sgf-loaded", this.handleUpdate);
  }
  performAction(t) {
    var e, s, r;
    switch (t !== "play-all" && this.stopPlayAll(), t) {
      case "first":
      case "restart":
        (e = this.board) == null || e.goToMove(0);
        break;
      case "back-10":
        this.jumpBy(-10);
        break;
      case "previous":
        (s = this.board) == null || s.previousMove();
        break;
      case "next":
        (r = this.board) == null || r.nextMove();
        break;
      case "forward-10":
        this.jumpBy(10);
        break;
      case "last":
        this.board && this.board.goToMove(this.board.moveCount);
        break;
      case "play-all":
        this.togglePlayAll();
        break;
    }
  }
  jumpBy(t) {
    this.board && this.board.goToMove(this.board.moveIndex + t);
  }
  togglePlayAll() {
    if (this.playTimer !== null) {
      this.stopPlayAll();
      return;
    }
    this.board && (this.setPlaying(!0), this.playTimer = setInterval(() => {
      var t;
      (t = this.board) == null || t.nextMove(), (!this.board || this.board.moveIndex >= this.board.moveCount) && this.stopPlayAll();
    }, 120));
  }
  stopPlayAll() {
    this.playTimer !== null && (clearInterval(this.playTimer), this.playTimer = null, this.setPlaying(!1));
  }
  setPlaying(t) {
    for (const e of this.queryTagged(`[${y}="play-all"]`))
      e.toggleAttribute(zt, t);
  }
  updateUI() {
    var r, i;
    const t = ((r = this.board) == null ? void 0 : r.moveIndex) ?? 0, e = ((i = this.board) == null ? void 0 : i.moveCount) ?? 0, s = {
      first: t <= 0,
      "back-10": t <= 0,
      previous: t <= 0,
      next: t >= e,
      "forward-10": t >= e,
      last: t >= e,
      "play-all": e === 0 || t >= e,
      restart: e === 0
    };
    for (const l of this.queryTagged(`[${y}]`)) {
      const d = l.getAttribute(y), n = d ? s[d] : !1;
      l.toggleAttribute(Mt, n), l instanceof HTMLButtonElement && (l.disabled = n);
    }
    for (const l of this.queryTagged(`[${P}]`)) {
      const d = l.getAttribute(P) || "Move {index} / {count}";
      l.textContent = d.replace("{index}", String(t)).replace("{count}", String(e));
    }
  }
  /**
   * Finds elements matching `selector` among what the slot is actually
   * rendering right now: the developer's assigned light-DOM children if
   * any were provided, otherwise the slot's own default fallback content.
   */
  queryTagged(t) {
    const e = this.slotEl.assignedElements({ flatten: !0 }), s = e.length > 0 ? e : Array.from(this.slotEl.children), r = [];
    for (const i of s)
      i.matches(t) && r.push(i), r.push(...Array.from(i.querySelectorAll(t)));
    return r;
  }
}
customElements.define("go-board-controls", Nt);
class Bt extends HTMLElement {
  constructor() {
    super();
    const o = this.attachShadow({ mode: "open" });
    o.innerHTML = `
      <style>
        :host {
          display: contents;
        }
        :host([color-scheme="dark"]) {
          color-scheme: dark;
          --goban-text: #eee;
          --goban-text-secondary: #999;
          --goban-text-muted: #888;
          --goban-comment: #ccc;
          --goban-panel-bg: linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.04));
          --goban-panel-border: rgba(255, 255, 255, 0.14);
          --goban-panel-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
          --goban-card-bg: linear-gradient(180deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02));
          --goban-card-border: rgba(255, 255, 255, 0.09);
          --goban-card-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
          --goban-toggle-bg: rgba(255, 255, 255, 0.08);
          --goban-toggle-bg-hover: rgba(255, 255, 255, 0.14);
          --goban-toggle-border: rgba(255, 255, 255, 0.12);
          --goban-btn-bg: #3a3a3a;
          --goban-btn-bg-hover: #4a4a4a;
          --goban-btn-color: #eee;
          --goban-btn-playing-bg: #7a3a3a;
          --goban-counter: #bbb;
        }
        :host([color-scheme="light"]) {
          color-scheme: light;
          --goban-text: #1a1a1a;
          --goban-text-secondary: #666;
          --goban-text-muted: #767676;
          --goban-comment: #444;
          --goban-panel-bg: linear-gradient(180deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.015));
          --goban-panel-border: rgba(0, 0, 0, 0.18);
          --goban-panel-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
          --goban-card-bg: linear-gradient(180deg, rgba(0, 0, 0, 0.035), rgba(0, 0, 0, 0.015));
          --goban-card-border: rgba(0, 0, 0, 0.1);
          --goban-card-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
          --goban-toggle-bg: rgba(0, 0, 0, 0.06);
          --goban-toggle-bg-hover: rgba(0, 0, 0, 0.1);
          --goban-toggle-border: rgba(0, 0, 0, 0.14);
          --goban-btn-bg: #e6e4e0;
          --goban-btn-bg-hover: #d8d5cf;
          --goban-btn-color: #2a2a2a;
          --goban-btn-playing-bg: #f0c2c2;
          --goban-counter: #666;
        }
      </style>
      <slot></slot>
    `;
  }
}
customElements.define("goban-wrapper", Bt);
export {
  C as Board,
  b as Color,
  _t as GoBoardContainerElement,
  Nt as GoBoardControlsElement,
  At as GoBoardElement,
  Ct as GoMetadataContainerElement,
  Bt as GobanWrapperElement,
  $ as SGFParseError,
  lt as isSGFPass,
  R as oppositeColor,
  nt as parseSGF,
  ht as parseSGFLabel,
  D as sgfPointToVertex,
  F as sgfPointsForProperty
};
