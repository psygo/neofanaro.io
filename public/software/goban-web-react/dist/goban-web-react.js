import { jsx as d } from "react/jsx-runtime";
import { useEffect as y, useRef as g, forwardRef as b, useMemo as v } from "react";
import { Color as nt, oppositeColor as rt } from "goban-web";
function m(...i) {
  return (n) => {
    for (const t of i)
      t && (typeof t == "function" ? t(n) : t.current = n);
  };
}
function p(i, n) {
  y(() => {
    const t = i.current;
    if (t)
      for (const [e, o] of Object.entries(n))
        if (o === void 0 || o === !1)
          t.hasAttribute(e) && t.removeAttribute(e);
        else {
          const r = o === !0 ? "" : String(o);
          t.getAttribute(e) !== r && t.setAttribute(e, r);
        }
  });
}
function u(i, n, t) {
  const e = g(t);
  e.current = t, y(() => {
    const o = i.current;
    if (!o) return;
    const r = (a) => {
      var s;
      return (s = e.current) == null ? void 0 : s.call(e, a.detail);
    };
    return o.addEventListener(n, r), () => o.removeEventListener(n, r);
  }, [i, n]);
}
const V = b(function(n, t) {
  const {
    size: e,
    coordinates: o,
    interactive: r,
    keyboardShortcuts: a,
    sgf: s,
    blackStone: c,
    whiteStone: l,
    width: G,
    height: h,
    backgroundImage: x,
    coordinatesFont: C,
    coordinatesFontSize: z,
    coordinatesGap: A,
    padding: E,
    xStart: k,
    xEnd: B,
    yStart: M,
    yEnd: F,
    stoneSize: j,
    labelOffsetX: L,
    labelOffsetY: O,
    labelFont: R,
    labelFontSize: I,
    cornerRadius: W,
    theme: w,
    moveNumbers: N,
    onMove: P,
    onIllegalMove: X,
    onPass: S,
    onSgfLoaded: Y,
    onSgfError: q,
    onNavigate: D,
    id: H,
    className: J,
    style: K
  } = n, f = g(null);
  p(f, {
    size: e,
    coordinates: Array.isArray(o) ? o.join(" ") : o,
    interactive: r === void 0 ? void 0 : String(r),
    "keyboard-shortcuts": a === void 0 ? void 0 : String(a),
    sgf: s,
    "black-stone": c,
    "white-stone": l,
    width: G,
    height: h,
    "background-image": x,
    "coordinates-font": C,
    "coordinates-font-size": z,
    "coordinates-gap": A,
    padding: E,
    "x-start": k,
    "x-end": B,
    "y-start": M,
    "y-end": F,
    "stone-size": j,
    "label-offset-x": L,
    "label-offset-y": O,
    "label-font": R,
    "label-font-size": I,
    "corner-radius": W,
    theme: w,
    "move-numbers": N
  }), u(f, "move", P), u(f, "illegal-move", X), u(f, "pass", S ? () => S() : void 0), u(f, "sgf-loaded", Y), u(f, "sgf-error", q), u(f, "navigate", D);
  const Q = v(() => m(f, t), [t]);
  return /* @__PURE__ */ d("go-board", { ref: Q, id: H, className: J, style: K });
}), Z = b(
  function({ id: n, className: t, style: e, children: o }, r) {
    return /* @__PURE__ */ d("go-board-container", { ref: r, id: n, className: t, style: e, children: o });
  }
), _ = b(
  function({ board: n, details: t, onMetadataChanged: e, id: o, className: r, style: a }, s) {
    const c = g(null);
    p(c, {
      board: n,
      details: t === void 0 ? void 0 : String(t)
    }), u(c, "metadata-changed", e);
    const l = v(() => m(c, s), [s]);
    return /* @__PURE__ */ d("go-metadata-container", { ref: l, id: o, className: r, style: a });
  }
), $ = b(
  function({ board: n, counter: t, children: e, id: o, className: r, style: a }, s) {
    const c = g(null);
    p(c, {
      board: n,
      counter: t === void 0 ? void 0 : String(t)
    });
    const l = v(() => m(c, s), [s]);
    return /* @__PURE__ */ d("go-board-controls", { ref: l, id: o, className: r, style: a, children: e });
  }
), tt = b(
  function({ colorScheme: n, children: t, id: e, className: o, style: r }, a) {
    const s = g(null);
    p(s, { "color-scheme": n });
    const c = v(() => m(s, a), [a]);
    return /* @__PURE__ */ d("goban-wrapper", { ref: c, id: e, className: o, style: r, children: t });
  }
);
export {
  nt as Color,
  V as GoBoard,
  Z as GoBoardContainer,
  $ as GoBoardControls,
  _ as GoMetadataContainer,
  tt as GobanWrapper,
  rt as oppositeColor
};
