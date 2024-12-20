import Un from "gsap";
function bi(o, e) {
  for (var n = 0; n < e.length; n++) {
    var t = e[n];
    t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(o, t.key, t);
  }
}
function xi(o, e, n) {
  return e && bi(o.prototype, e), o;
}
/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var me, Gr, Ve, Pt, Et, rr, qn, zt, vr, Kn, vt, it, Zn, Jn = function() {
  return me || typeof window < "u" && (me = window.gsap) && me.registerPlugin && me;
}, Qn = 1, tr = [], P = [], ft = [], br = Date.now, fn = function(e, n) {
  return n;
}, yi = function() {
  var e = vr.core, n = e.bridge || {}, t = e._scrollers, r = e._proxies;
  t.push.apply(t, P), r.push.apply(r, ft), P = t, ft = r, fn = function(l, a) {
    return n[l](a);
  };
}, Dt = function(e, n) {
  return ~ft.indexOf(e) && ft[ft.indexOf(e) + 1][n];
}, xr = function(e) {
  return !!~Kn.indexOf(e);
}, Oe = function(e, n, t, r, i) {
  return e.addEventListener(n, t, {
    passive: r !== !1,
    capture: !!i
  });
}, De = function(e, n, t, r) {
  return e.removeEventListener(n, t, !!r);
}, Rr = "scrollLeft", Ar = "scrollTop", pn = function() {
  return vt && vt.isPressed || P.cache++;
}, Zr = function(e, n) {
  var t = function r(i) {
    if (i || i === 0) {
      Qn && (Ve.history.scrollRestoration = "manual");
      var l = vt && vt.isPressed;
      i = r.v = Math.round(i) || (vt && vt.iOS ? 1 : 0), e(i), r.cacheID = P.cache, l && fn("ss", i);
    } else (n || P.cache !== r.cacheID || fn("ref")) && (r.cacheID = P.cache, r.v = e());
    return r.v + r.offset;
  };
  return t.offset = 0, e && t;
}, Le = {
  s: Rr,
  p: "left",
  p2: "Left",
  os: "right",
  os2: "Right",
  d: "width",
  d2: "Width",
  a: "x",
  sc: Zr(function(o) {
    return arguments.length ? Ve.scrollTo(o, le.sc()) : Ve.pageXOffset || Pt[Rr] || Et[Rr] || rr[Rr] || 0;
  })
}, le = {
  s: Ar,
  p: "top",
  p2: "Top",
  os: "bottom",
  os2: "Bottom",
  d: "height",
  d2: "Height",
  a: "y",
  op: Le,
  sc: Zr(function(o) {
    return arguments.length ? Ve.scrollTo(Le.sc(), o) : Ve.pageYOffset || Pt[Ar] || Et[Ar] || rr[Ar] || 0;
  })
}, Ie = function(e, n) {
  return (n && n._ctx && n._ctx.selector || me.utils.toArray)(e)[0] || (typeof e == "string" && me.config().nullTargetWarn !== !1 ? console.warn("Element not found:", e) : null);
}, Ot = function(e, n) {
  var t = n.s, r = n.sc;
  xr(e) && (e = Pt.scrollingElement || Et);
  var i = P.indexOf(e), l = r === le.sc ? 1 : 2;
  !~i && (i = P.push(e) - 1), P[i + l] || Oe(e, "scroll", pn);
  var a = P[i + l], f = a || (P[i + l] = Zr(Dt(e, t), !0) || (xr(e) ? r : Zr(function(b) {
    return arguments.length ? e[t] = b : e[t];
  })));
  return f.target = e, a || (f.smooth = me.getProperty(e, "scrollBehavior") === "smooth"), f;
}, dn = function(e, n, t) {
  var r = e, i = e, l = br(), a = l, f = n || 50, b = Math.max(500, f * 3), F = function(_, V) {
    var z = br();
    V || z - l > f ? (i = r, r = _, a = l, l = z) : t ? r += _ : r = i + (_ - i) / (z - a) * (l - a);
  }, D = function() {
    i = r = t ? 0 : r, a = l = 0;
  }, g = function(_) {
    var V = a, z = i, ne = br();
    return (_ || _ === 0) && _ !== r && F(_), l === a || ne - a > b ? 0 : (r + (t ? z : -z)) / ((t ? ne : l) - V) * 1e3;
  };
  return {
    update: F,
    reset: D,
    getVelocity: g
  };
}, fr = function(e, n) {
  return n && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e;
}, En = function(e) {
  var n = Math.max.apply(Math, e), t = Math.min.apply(Math, e);
  return Math.abs(n) >= Math.abs(t) ? n : t;
}, jn = function() {
  vr = me.core.globals().ScrollTrigger, vr && vr.core && yi();
}, ei = function(e) {
  return me = e || Jn(), !Gr && me && typeof document < "u" && document.body && (Ve = window, Pt = document, Et = Pt.documentElement, rr = Pt.body, Kn = [Ve, Pt, Et, rr], me.utils.clamp, Zn = me.core.context || function() {
  }, zt = "onpointerenter" in rr ? "pointer" : "mouse", qn = Z.isTouch = Ve.matchMedia && Ve.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in Ve || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, it = Z.eventTypes = ("ontouchstart" in Et ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in Et ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
    return Qn = 0;
  }, 500), jn(), Gr = 1), Gr;
};
Le.op = le;
P.cache = 0;
var Z = /* @__PURE__ */ function() {
  function o(n) {
    this.init(n);
  }
  var e = o.prototype;
  return e.init = function(t) {
    Gr || ei(me) || console.warn("Please gsap.registerPlugin(Observer)"), vr || jn();
    var r = t.tolerance, i = t.dragMinimum, l = t.type, a = t.target, f = t.lineHeight, b = t.debounce, F = t.preventDefault, D = t.onStop, g = t.onStopDelay, c = t.ignore, _ = t.wheelSpeed, V = t.event, z = t.onDragStart, ne = t.onDragEnd, H = t.onDrag, de = t.onPress, S = t.onRelease, $e = t.onRight, X = t.onLeft, y = t.onUp, Te = t.onDown, Ye = t.onChangeX, h = t.onChangeY, he = t.onChange, x = t.onToggleX, pt = t.onToggleY, ie = t.onHover, Se = t.onHoverEnd, ke = t.onMove, N = t.ignoreCheck, J = t.isNormalizer, Q = t.onGestureStart, s = t.onGestureEnd, oe = t.onWheel, Rt = t.onEnable, xt = t.onDisable, Ue = t.onClick, dt = t.scrollSpeed, Me = t.capture, j = t.allowClicks, Pe = t.lockAxis, ve = t.onLockAxis;
    this.target = a = Ie(a) || Et, this.vars = t, c && (c = me.utils.toArray(c)), r = r || 1e-9, i = i || 0, _ = _ || 1, dt = dt || 1, l = l || "wheel,touch,pointer", b = b !== !1, f || (f = parseFloat(Ve.getComputedStyle(rr).lineHeight) || 22);
    var yt, Ee, Qe, A, U, ze, Xe, u = this, Be = 0, ht = 0, wt = t.passive || !F, ee = Ot(a, Le), Ct = Ot(a, le), At = ee(), Ut = Ct(), ue = ~l.indexOf("touch") && !~l.indexOf("pointer") && it[0] === "pointerdown", Tt = xr(a), q = a.ownerDocument || Pt, je = [0, 0, 0], qe = [0, 0, 0], gt = 0, sr = function() {
      return gt = br();
    }, te = function(v, L) {
      return (u.event = v) && c && ~c.indexOf(v.target) || L && ue && v.pointerType !== "touch" || N && N(v, L);
    }, Er = function() {
      u._vx.reset(), u._vy.reset(), Ee.pause(), D && D(u);
    }, St = function() {
      var v = u.deltaX = En(je), L = u.deltaY = En(qe), p = Math.abs(v) >= r, T = Math.abs(L) >= r;
      he && (p || T) && he(u, v, L, je, qe), p && ($e && u.deltaX > 0 && $e(u), X && u.deltaX < 0 && X(u), Ye && Ye(u), x && u.deltaX < 0 != Be < 0 && x(u), Be = u.deltaX, je[0] = je[1] = je[2] = 0), T && (Te && u.deltaY > 0 && Te(u), y && u.deltaY < 0 && y(u), h && h(u), pt && u.deltaY < 0 != ht < 0 && pt(u), ht = u.deltaY, qe[0] = qe[1] = qe[2] = 0), (A || Qe) && (ke && ke(u), Qe && (H(u), Qe = !1), A = !1), ze && !(ze = !1) && ve && ve(u), U && (oe(u), U = !1), yt = 0;
    }, qt = function(v, L, p) {
      je[p] += v, qe[p] += L, u._vx.update(v), u._vy.update(L), b ? yt || (yt = requestAnimationFrame(St)) : St();
    }, Kt = function(v, L) {
      Pe && !Xe && (u.axis = Xe = Math.abs(v) > Math.abs(L) ? "x" : "y", ze = !0), Xe !== "y" && (je[2] += v, u._vx.update(v, !0)), Xe !== "x" && (qe[2] += L, u._vy.update(L, !0)), b ? yt || (yt = requestAnimationFrame(St)) : St();
    }, kt = function(v) {
      if (!te(v, 1)) {
        v = fr(v, F);
        var L = v.clientX, p = v.clientY, T = L - u.x, m = p - u.y, w = u.isDragging;
        u.x = L, u.y = p, (w || Math.abs(u.startX - L) >= i || Math.abs(u.startY - p) >= i) && (H && (Qe = !0), w || (u.isDragging = !0), Kt(T, m), w || z && z(u));
      }
    }, Ft = u.onPress = function(C) {
      te(C, 1) || C && C.button || (u.axis = Xe = null, Ee.pause(), u.isPressed = !0, C = fr(C), Be = ht = 0, u.startX = u.x = C.clientX, u.startY = u.y = C.clientY, u._vx.reset(), u._vy.reset(), Oe(J ? a : q, it[1], kt, wt, !0), u.deltaX = u.deltaY = 0, de && de(u));
    }, M = u.onRelease = function(C) {
      if (!te(C, 1)) {
        De(J ? a : q, it[1], kt, !0);
        var v = !isNaN(u.y - u.startY), L = u.isDragging, p = L && (Math.abs(u.x - u.startX) > 3 || Math.abs(u.y - u.startY) > 3), T = fr(C);
        !p && v && (u._vx.reset(), u._vy.reset(), F && j && me.delayedCall(0.08, function() {
          if (br() - gt > 300 && !C.defaultPrevented) {
            if (C.target.click)
              C.target.click();
            else if (q.createEvent) {
              var m = q.createEvent("MouseEvents");
              m.initMouseEvent("click", !0, !0, Ve, 1, T.screenX, T.screenY, T.clientX, T.clientY, !1, !1, !1, !1, 0, null), C.target.dispatchEvent(m);
            }
          }
        })), u.isDragging = u.isGesturing = u.isPressed = !1, D && L && !J && Ee.restart(!0), ne && L && ne(u), S && S(u, p);
      }
    }, Lt = function(v) {
      return v.touches && v.touches.length > 1 && (u.isGesturing = !0) && Q(v, u.isDragging);
    }, et = function() {
      return (u.isGesturing = !1) || s(u);
    }, tt = function(v) {
      if (!te(v)) {
        var L = ee(), p = Ct();
        qt((L - At) * dt, (p - Ut) * dt, 1), At = L, Ut = p, D && Ee.restart(!0);
      }
    }, rt = function(v) {
      if (!te(v)) {
        v = fr(v, F), oe && (U = !0);
        var L = (v.deltaMode === 1 ? f : v.deltaMode === 2 ? Ve.innerHeight : 1) * _;
        qt(v.deltaX * L, v.deltaY * L, 0), D && !J && Ee.restart(!0);
      }
    }, Nt = function(v) {
      if (!te(v)) {
        var L = v.clientX, p = v.clientY, T = L - u.x, m = p - u.y;
        u.x = L, u.y = p, A = !0, D && Ee.restart(!0), (T || m) && Kt(T, m);
      }
    }, Zt = function(v) {
      u.event = v, ie(u);
    }, _t = function(v) {
      u.event = v, Se(u);
    }, ar = function(v) {
      return te(v) || fr(v, F) && Ue(u);
    };
    Ee = u._dc = me.delayedCall(g || 0.25, Er).pause(), u.deltaX = u.deltaY = 0, u._vx = dn(0, 50, !0), u._vy = dn(0, 50, !0), u.scrollX = ee, u.scrollY = Ct, u.isDragging = u.isGesturing = u.isPressed = !1, Zn(this), u.enable = function(C) {
      return u.isEnabled || (Oe(Tt ? q : a, "scroll", pn), l.indexOf("scroll") >= 0 && Oe(Tt ? q : a, "scroll", tt, wt, Me), l.indexOf("wheel") >= 0 && Oe(a, "wheel", rt, wt, Me), (l.indexOf("touch") >= 0 && qn || l.indexOf("pointer") >= 0) && (Oe(a, it[0], Ft, wt, Me), Oe(q, it[2], M), Oe(q, it[3], M), j && Oe(a, "click", sr, !0, !0), Ue && Oe(a, "click", ar), Q && Oe(q, "gesturestart", Lt), s && Oe(q, "gestureend", et), ie && Oe(a, zt + "enter", Zt), Se && Oe(a, zt + "leave", _t), ke && Oe(a, zt + "move", Nt)), u.isEnabled = !0, C && C.type && Ft(C), Rt && Rt(u)), u;
    }, u.disable = function() {
      u.isEnabled && (tr.filter(function(C) {
        return C !== u && xr(C.target);
      }).length || De(Tt ? q : a, "scroll", pn), u.isPressed && (u._vx.reset(), u._vy.reset(), De(J ? a : q, it[1], kt, !0)), De(Tt ? q : a, "scroll", tt, Me), De(a, "wheel", rt, Me), De(a, it[0], Ft, Me), De(q, it[2], M), De(q, it[3], M), De(a, "click", sr, !0), De(a, "click", ar), De(q, "gesturestart", Lt), De(q, "gestureend", et), De(a, zt + "enter", Zt), De(a, zt + "leave", _t), De(a, zt + "move", Nt), u.isEnabled = u.isPressed = u.isDragging = !1, xt && xt(u));
    }, u.kill = u.revert = function() {
      u.disable();
      var C = tr.indexOf(u);
      C >= 0 && tr.splice(C, 1), vt === u && (vt = 0);
    }, tr.push(u), J && xr(a) && (vt = u), u.enable(V);
  }, xi(o, [{
    key: "velocityX",
    get: function() {
      return this._vx.getVelocity();
    }
  }, {
    key: "velocityY",
    get: function() {
      return this._vy.getVelocity();
    }
  }]), o;
}();
Z.version = "3.12.5";
Z.create = function(o) {
  return new Z(o);
};
Z.register = ei;
Z.getAll = function() {
  return tr.slice();
};
Z.getById = function(o) {
  return tr.filter(function(e) {
    return e.vars.id === o;
  })[0];
};
Jn() && me.registerPlugin(Z);
/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var d, jt, R, G, ot, I, ti, Jr, Mr, yr, dr, Fr, we, tn, hn, Ae, Dn, On, er, ri, nn, ni, Re, gn, ii, oi, Mt, _n, yn, nr, wn, Qr, mn, on, Lr = 1, Ce = Date.now, sn = Ce(), Je = 0, hr = 0, Rn = function(e, n, t) {
  var r = Ge(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
  return t["_" + n + "Clamp"] = r, r ? e.substr(6, e.length - 7) : e;
}, An = function(e, n) {
  return n && (!Ge(e) || e.substr(0, 6) !== "clamp(") ? "clamp(" + e + ")" : e;
}, wi = function o() {
  return hr && requestAnimationFrame(o);
}, Fn = function() {
  return tn = 1;
}, Ln = function() {
  return tn = 0;
}, ut = function(e) {
  return e;
}, gr = function(e) {
  return Math.round(e * 1e5) / 1e5 || 0;
}, si = function() {
  return typeof window < "u";
}, ai = function() {
  return d || si() && (d = window.gsap) && d.registerPlugin && d;
}, Gt = function(e) {
  return !!~ti.indexOf(e);
}, li = function(e) {
  return (e === "Height" ? wn : R["inner" + e]) || ot["client" + e] || I["client" + e];
}, ui = function(e) {
  return Dt(e, "getBoundingClientRect") || (Gt(e) ? function() {
    return Kr.width = R.innerWidth, Kr.height = wn, Kr;
  } : function() {
    return mt(e);
  });
}, Ci = function(e, n, t) {
  var r = t.d, i = t.d2, l = t.a;
  return (l = Dt(e, "getBoundingClientRect")) ? function() {
    return l()[r];
  } : function() {
    return (n ? li(i) : e["client" + i]) || 0;
  };
}, Ti = function(e, n) {
  return !n || ~ft.indexOf(e) ? ui(e) : function() {
    return Kr;
  };
}, ct = function(e, n) {
  var t = n.s, r = n.d2, i = n.d, l = n.a;
  return Math.max(0, (t = "scroll" + r) && (l = Dt(e, t)) ? l() - ui(e)()[i] : Gt(e) ? (ot[t] || I[t]) - li(r) : e[t] - e["offset" + r]);
}, Nr = function(e, n) {
  for (var t = 0; t < er.length; t += 3)
    (!n || ~n.indexOf(er[t + 1])) && e(er[t], er[t + 1], er[t + 2]);
}, Ge = function(e) {
  return typeof e == "string";
}, Ne = function(e) {
  return typeof e == "function";
}, _r = function(e) {
  return typeof e == "number";
}, It = function(e) {
  return typeof e == "object";
}, pr = function(e, n, t) {
  return e && e.progress(n ? 0 : 1) && t && e.pause();
}, an = function(e, n) {
  if (e.enabled) {
    var t = e._ctx ? e._ctx.add(function() {
      return n(e);
    }) : n(e);
    t && t.totalTime && (e.callbackAnimation = t);
  }
}, Jt = Math.abs, ci = "left", fi = "top", Cn = "right", Tn = "bottom", Bt = "width", Ht = "height", wr = "Right", Cr = "Left", Tr = "Top", Sr = "Bottom", re = "padding", Ke = "margin", or = "Width", Sn = "Height", ae = "px", Ze = function(e) {
  return R.getComputedStyle(e);
}, Si = function(e) {
  var n = Ze(e).position;
  e.style.position = n === "absolute" || n === "fixed" ? n : "relative";
}, Nn = function(e, n) {
  for (var t in n)
    t in e || (e[t] = n[t]);
  return e;
}, mt = function(e, n) {
  var t = n && Ze(e)[hn] !== "matrix(1, 0, 0, 1, 0, 0)" && d.to(e, {
    x: 0,
    y: 0,
    xPercent: 0,
    yPercent: 0,
    rotation: 0,
    rotationX: 0,
    rotationY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0
  }).progress(1), r = e.getBoundingClientRect();
  return t && t.progress(0).kill(), r;
}, jr = function(e, n) {
  var t = n.d2;
  return e["offset" + t] || e["client" + t] || 0;
}, pi = function(e) {
  var n = [], t = e.labels, r = e.duration(), i;
  for (i in t)
    n.push(t[i] / r);
  return n;
}, ki = function(e) {
  return function(n) {
    return d.utils.snap(pi(e), n);
  };
}, kn = function(e) {
  var n = d.utils.snap(e), t = Array.isArray(e) && e.slice(0).sort(function(r, i) {
    return r - i;
  });
  return t ? function(r, i, l) {
    l === void 0 && (l = 1e-3);
    var a;
    if (!i)
      return n(r);
    if (i > 0) {
      for (r -= l, a = 0; a < t.length; a++)
        if (t[a] >= r)
          return t[a];
      return t[a - 1];
    } else
      for (a = t.length, r += l; a--; )
        if (t[a] <= r)
          return t[a];
    return t[0];
  } : function(r, i, l) {
    l === void 0 && (l = 1e-3);
    var a = n(r);
    return !i || Math.abs(a - r) < l || a - r < 0 == i < 0 ? a : n(i < 0 ? r - e : r + e);
  };
}, Mi = function(e) {
  return function(n, t) {
    return kn(pi(e))(n, t.direction);
  };
}, Yr = function(e, n, t, r) {
  return t.split(",").forEach(function(i) {
    return e(n, i, r);
  });
}, pe = function(e, n, t, r, i) {
  return e.addEventListener(n, t, {
    passive: !r,
    capture: !!i
  });
}, fe = function(e, n, t, r) {
  return e.removeEventListener(n, t, !!r);
}, zr = function(e, n, t) {
  t = t && t.wheelHandler, t && (e(n, "wheel", t), e(n, "touchmove", t));
}, Yn = {
  startColor: "green",
  endColor: "red",
  indent: 0,
  fontSize: "16px",
  fontWeight: "normal"
}, Ir = {
  toggleActions: "play",
  anticipatePin: 0
}, en = {
  top: 0,
  left: 0,
  center: 0.5,
  bottom: 1,
  right: 1
}, Vr = function(e, n) {
  if (Ge(e)) {
    var t = e.indexOf("="), r = ~t ? +(e.charAt(t - 1) + 1) * parseFloat(e.substr(t + 1)) : 0;
    ~t && (e.indexOf("%") > t && (r *= n / 100), e = e.substr(0, t - 1)), e = r + (e in en ? en[e] * n : ~e.indexOf("%") ? parseFloat(e) * n / 100 : parseFloat(e) || 0);
  }
  return e;
}, Xr = function(e, n, t, r, i, l, a, f) {
  var b = i.startColor, F = i.endColor, D = i.fontSize, g = i.indent, c = i.fontWeight, _ = G.createElement("div"), V = Gt(t) || Dt(t, "pinType") === "fixed", z = e.indexOf("scroller") !== -1, ne = V ? I : t, H = e.indexOf("start") !== -1, de = H ? b : F, S = "border-color:" + de + ";font-size:" + D + ";color:" + de + ";font-weight:" + c + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
  return S += "position:" + ((z || f) && V ? "fixed;" : "absolute;"), (z || f || !V) && (S += (r === le ? Cn : Tn) + ":" + (l + parseFloat(g)) + "px;"), a && (S += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), _._isStart = H, _.setAttribute("class", "gsap-marker-" + e + (n ? " marker-" + n : "")), _.style.cssText = S, _.innerText = n || n === 0 ? e + "-" + n : e, ne.children[0] ? ne.insertBefore(_, ne.children[0]) : ne.appendChild(_), _._offset = _["offset" + r.op.d2], $r(_, 0, r, H), _;
}, $r = function(e, n, t, r) {
  var i = {
    display: "block"
  }, l = t[r ? "os2" : "p2"], a = t[r ? "p2" : "os2"];
  e._isFlipped = r, i[t.a + "Percent"] = r ? -100 : 0, i[t.a] = r ? "1px" : 0, i["border" + l + or] = 1, i["border" + a + or] = 0, i[t.p] = n + "px", d.set(e, i);
}, k = [], vn = {}, Pr, zn = function() {
  return Ce() - Je > 34 && (Pr || (Pr = requestAnimationFrame(bt)));
}, Qt = function() {
  (!Re || !Re.isPressed || Re.startX > I.clientWidth) && (P.cache++, Re ? Pr || (Pr = requestAnimationFrame(bt)) : bt(), Je || $t("scrollStart"), Je = Ce());
}, ln = function() {
  oi = R.innerWidth, ii = R.innerHeight;
}, mr = function() {
  P.cache++, !we && !ni && !G.fullscreenElement && !G.webkitFullscreenElement && (!gn || oi !== R.innerWidth || Math.abs(R.innerHeight - ii) > R.innerHeight * 0.25) && Jr.restart(!0);
}, Vt = {}, Pi = [], di = function o() {
  return fe(E, "scrollEnd", o) || Xt(!0);
}, $t = function(e) {
  return Vt[e] && Vt[e].map(function(n) {
    return n();
  }) || Pi;
}, We = [], hi = function(e) {
  for (var n = 0; n < We.length; n += 5)
    (!e || We[n + 4] && We[n + 4].query === e) && (We[n].style.cssText = We[n + 1], We[n].getBBox && We[n].setAttribute("transform", We[n + 2] || ""), We[n + 3].uncache = 1);
}, Mn = function(e, n) {
  var t;
  for (Ae = 0; Ae < k.length; Ae++)
    t = k[Ae], t && (!n || t._ctx === n) && (e ? t.kill(1) : t.revert(!0, !0));
  Qr = !0, n && hi(n), n || $t("revert");
}, gi = function(e, n) {
  P.cache++, (n || !Fe) && P.forEach(function(t) {
    return Ne(t) && t.cacheID++ && (t.rec = 0);
  }), Ge(e) && (R.history.scrollRestoration = yn = e);
}, Fe, Wt = 0, In, Ei = function() {
  if (In !== Wt) {
    var e = In = Wt;
    requestAnimationFrame(function() {
      return e === Wt && Xt(!0);
    });
  }
}, _i = function() {
  I.appendChild(nr), wn = !Re && nr.offsetHeight || R.innerHeight, I.removeChild(nr);
}, Xn = function(e) {
  return Mr(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(n) {
    return n.style.display = e ? "none" : "block";
  });
}, Xt = function(e, n) {
  if (Je && !e && !Qr) {
    pe(E, "scrollEnd", di);
    return;
  }
  _i(), Fe = E.isRefreshing = !0, P.forEach(function(r) {
    return Ne(r) && ++r.cacheID && (r.rec = r());
  });
  var t = $t("refreshInit");
  ri && E.sort(), n || Mn(), P.forEach(function(r) {
    Ne(r) && (r.smooth && (r.target.style.scrollBehavior = "auto"), r(0));
  }), k.slice(0).forEach(function(r) {
    return r.refresh();
  }), Qr = !1, k.forEach(function(r) {
    if (r._subPinOffset && r.pin) {
      var i = r.vars.horizontal ? "offsetWidth" : "offsetHeight", l = r.pin[i];
      r.revert(!0, 1), r.adjustPinSpacing(r.pin[i] - l), r.refresh();
    }
  }), mn = 1, Xn(!0), k.forEach(function(r) {
    var i = ct(r.scroller, r._dir), l = r.vars.end === "max" || r._endClamp && r.end > i, a = r._startClamp && r.start >= i;
    (l || a) && r.setPositions(a ? i - 1 : r.start, l ? Math.max(a ? i : r.start + 1, i) : r.end, !0);
  }), Xn(!1), mn = 0, t.forEach(function(r) {
    return r && r.render && r.render(-1);
  }), P.forEach(function(r) {
    Ne(r) && (r.smooth && requestAnimationFrame(function() {
      return r.target.style.scrollBehavior = "smooth";
    }), r.rec && r(r.rec));
  }), gi(yn, 1), Jr.pause(), Wt++, Fe = 2, bt(2), k.forEach(function(r) {
    return Ne(r.vars.onRefresh) && r.vars.onRefresh(r);
  }), Fe = E.isRefreshing = !1, $t("refresh");
}, bn = 0, Ur = 1, kr, bt = function(e) {
  if (e === 2 || !Fe && !Qr) {
    E.isUpdating = !0, kr && kr.update(0);
    var n = k.length, t = Ce(), r = t - sn >= 50, i = n && k[0].scroll();
    if (Ur = bn > i ? -1 : 1, Fe || (bn = i), r && (Je && !tn && t - Je > 200 && (Je = 0, $t("scrollEnd")), dr = sn, sn = t), Ur < 0) {
      for (Ae = n; Ae-- > 0; )
        k[Ae] && k[Ae].update(0, r);
      Ur = 1;
    } else
      for (Ae = 0; Ae < n; Ae++)
        k[Ae] && k[Ae].update(0, r);
    E.isUpdating = !1;
  }
  Pr = 0;
}, xn = [ci, fi, Tn, Cn, Ke + Sr, Ke + wr, Ke + Tr, Ke + Cr, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"], qr = xn.concat([Bt, Ht, "boxSizing", "max" + or, "max" + Sn, "position", Ke, re, re + Tr, re + wr, re + Sr, re + Cr]), Di = function(e, n, t) {
  ir(t);
  var r = e._gsap;
  if (r.spacerIsNative)
    ir(r.spacerState);
  else if (e._gsap.swappedIn) {
    var i = n.parentNode;
    i && (i.insertBefore(e, n), i.removeChild(n));
  }
  e._gsap.swappedIn = !1;
}, un = function(e, n, t, r) {
  if (!e._gsap.swappedIn) {
    for (var i = xn.length, l = n.style, a = e.style, f; i--; )
      f = xn[i], l[f] = t[f];
    l.position = t.position === "absolute" ? "absolute" : "relative", t.display === "inline" && (l.display = "inline-block"), a[Tn] = a[Cn] = "auto", l.flexBasis = t.flexBasis || "auto", l.overflow = "visible", l.boxSizing = "border-box", l[Bt] = jr(e, Le) + ae, l[Ht] = jr(e, le) + ae, l[re] = a[Ke] = a[fi] = a[ci] = "0", ir(r), a[Bt] = a["max" + or] = t[Bt], a[Ht] = a["max" + Sn] = t[Ht], a[re] = t[re], e.parentNode !== n && (e.parentNode.insertBefore(n, e), n.appendChild(e)), e._gsap.swappedIn = !0;
  }
}, Oi = /([A-Z])/g, ir = function(e) {
  if (e) {
    var n = e.t.style, t = e.length, r = 0, i, l;
    for ((e.t._gsap || d.core.getCache(e.t)).uncache = 1; r < t; r += 2)
      l = e[r + 1], i = e[r], l ? n[i] = l : n[i] && n.removeProperty(i.replace(Oi, "-$1").toLowerCase());
  }
}, Br = function(e) {
  for (var n = qr.length, t = e.style, r = [], i = 0; i < n; i++)
    r.push(qr[i], t[qr[i]]);
  return r.t = e, r;
}, Ri = function(e, n, t) {
  for (var r = [], i = e.length, l = t ? 8 : 0, a; l < i; l += 2)
    a = e[l], r.push(a, a in n ? n[a] : e[l + 1]);
  return r.t = e.t, r;
}, Kr = {
  left: 0,
  top: 0
}, Bn = function(e, n, t, r, i, l, a, f, b, F, D, g, c, _) {
  Ne(e) && (e = e(f)), Ge(e) && e.substr(0, 3) === "max" && (e = g + (e.charAt(4) === "=" ? Vr("0" + e.substr(3), t) : 0));
  var V = c ? c.time() : 0, z, ne, H;
  if (c && c.seek(0), isNaN(e) || (e = +e), _r(e))
    c && (e = d.utils.mapRange(c.scrollTrigger.start, c.scrollTrigger.end, 0, g, e)), a && $r(a, t, r, !0);
  else {
    Ne(n) && (n = n(f));
    var de = (e || "0").split(" "), S, $e, X, y;
    H = Ie(n, f) || I, S = mt(H) || {}, (!S || !S.left && !S.top) && Ze(H).display === "none" && (y = H.style.display, H.style.display = "block", S = mt(H), y ? H.style.display = y : H.style.removeProperty("display")), $e = Vr(de[0], S[r.d]), X = Vr(de[1] || "0", t), e = S[r.p] - b[r.p] - F + $e + i - X, a && $r(a, X, r, t - X < 20 || a._isStart && X > 20), t -= t - X;
  }
  if (_ && (f[_] = e || -1e-3, e < 0 && (e = 0)), l) {
    var Te = e + t, Ye = l._isStart;
    z = "scroll" + r.d2, $r(l, Te, r, Ye && Te > 20 || !Ye && (D ? Math.max(I[z], ot[z]) : l.parentNode[z]) <= Te + 1), D && (b = mt(a), D && (l.style[r.op.p] = b[r.op.p] - r.op.m - l._offset + ae));
  }
  return c && H && (z = mt(H), c.seek(g), ne = mt(H), c._caScrollDist = z[r.p] - ne[r.p], e = e / c._caScrollDist * g), c && c.seek(V), c ? e : Math.round(e);
}, Ai = /(webkit|moz|length|cssText|inset)/i, Hn = function(e, n, t, r) {
  if (e.parentNode !== n) {
    var i = e.style, l, a;
    if (n === I) {
      e._stOrig = i.cssText, a = Ze(e);
      for (l in a)
        !+l && !Ai.test(l) && a[l] && typeof i[l] == "string" && l !== "0" && (i[l] = a[l]);
      i.top = t, i.left = r;
    } else
      i.cssText = e._stOrig;
    d.core.getCache(e).uncache = 1, n.appendChild(e);
  }
}, mi = function(e, n, t) {
  var r = n, i = r;
  return function(l) {
    var a = Math.round(e());
    return a !== r && a !== i && Math.abs(a - r) > 3 && Math.abs(a - i) > 3 && (l = a, t && t()), i = r, r = l, l;
  };
}, Hr = function(e, n, t) {
  var r = {};
  r[n.p] = "+=" + t, d.set(e, r);
}, Wn = function(e, n) {
  var t = Ot(e, n), r = "_scroll" + n.p2, i = function l(a, f, b, F, D) {
    var g = l.tween, c = f.onComplete, _ = {};
    b = b || t();
    var V = mi(t, b, function() {
      g.kill(), l.tween = 0;
    });
    return D = F && D || 0, F = F || a - b, g && g.kill(), f[r] = a, f.inherit = !1, f.modifiers = _, _[r] = function() {
      return V(b + F * g.ratio + D * g.ratio * g.ratio);
    }, f.onUpdate = function() {
      P.cache++, l.tween && bt();
    }, f.onComplete = function() {
      l.tween = 0, c && c.call(g);
    }, g = l.tween = d.to(e, f), g;
  };
  return e[r] = t, t.wheelHandler = function() {
    return i.tween && i.tween.kill() && (i.tween = 0);
  }, pe(e, "wheel", t.wheelHandler), E.isTouch && pe(e, "touchmove", t.wheelHandler), i;
}, E = /* @__PURE__ */ function() {
  function o(n, t) {
    jt || o.register(d) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), _n(this), this.init(n, t);
  }
  var e = o.prototype;
  return e.init = function(t, r) {
    if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !hr) {
      this.update = this.refresh = this.kill = ut;
      return;
    }
    t = Nn(Ge(t) || _r(t) || t.nodeType ? {
      trigger: t
    } : t, Ir);
    var i = t, l = i.onUpdate, a = i.toggleClass, f = i.id, b = i.onToggle, F = i.onRefresh, D = i.scrub, g = i.trigger, c = i.pin, _ = i.pinSpacing, V = i.invalidateOnRefresh, z = i.anticipatePin, ne = i.onScrubComplete, H = i.onSnapComplete, de = i.once, S = i.snap, $e = i.pinReparent, X = i.pinSpacer, y = i.containerAnimation, Te = i.fastScrollEnd, Ye = i.preventOverlaps, h = t.horizontal || t.containerAnimation && t.horizontal !== !1 ? Le : le, he = !D && D !== 0, x = Ie(t.scroller || R), pt = d.core.getCache(x), ie = Gt(x), Se = ("pinType" in t ? t.pinType : Dt(x, "pinType") || ie && "fixed") === "fixed", ke = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack], N = he && t.toggleActions.split(" "), J = "markers" in t ? t.markers : Ir.markers, Q = ie ? 0 : parseFloat(Ze(x)["border" + h.p2 + or]) || 0, s = this, oe = t.onRefreshInit && function() {
      return t.onRefreshInit(s);
    }, Rt = Ci(x, ie, h), xt = Ti(x, ie), Ue = 0, dt = 0, Me = 0, j = Ot(x, h), Pe, ve, yt, Ee, Qe, A, U, ze, Xe, u, Be, ht, wt, ee, Ct, At, Ut, ue, Tt, q, je, qe, gt, sr, te, Er, St, qt, Kt, kt, Ft, M, Lt, et, tt, rt, Nt, Zt, _t;
    if (s._startClamp = s._endClamp = !1, s._dir = h, z *= 45, s.scroller = x, s.scroll = y ? y.time.bind(y) : j, Ee = j(), s.vars = t, r = r || t.animation, "refreshPriority" in t && (ri = 1, t.refreshPriority === -9999 && (kr = s)), pt.tweenScroll = pt.tweenScroll || {
      top: Wn(x, le),
      left: Wn(x, Le)
    }, s.tweenTo = Pe = pt.tweenScroll[h.p], s.scrubDuration = function(p) {
      Lt = _r(p) && p, Lt ? M ? M.duration(p) : M = d.to(r, {
        ease: "expo",
        totalProgress: "+=0",
        inherit: !1,
        duration: Lt,
        paused: !0,
        onComplete: function() {
          return ne && ne(s);
        }
      }) : (M && M.progress(1).kill(), M = 0);
    }, r && (r.vars.lazy = !1, r._initted && !s.isReverted || r.vars.immediateRender !== !1 && t.immediateRender !== !1 && r.duration() && r.render(0, !0, !0), s.animation = r.pause(), r.scrollTrigger = s, s.scrubDuration(D), kt = 0, f || (f = r.vars.id)), S && ((!It(S) || S.push) && (S = {
      snapTo: S
    }), "scrollBehavior" in I.style && d.set(ie ? [I, ot] : x, {
      scrollBehavior: "auto"
    }), P.forEach(function(p) {
      return Ne(p) && p.target === (ie ? G.scrollingElement || ot : x) && (p.smooth = !1);
    }), yt = Ne(S.snapTo) ? S.snapTo : S.snapTo === "labels" ? ki(r) : S.snapTo === "labelsDirectional" ? Mi(r) : S.directional !== !1 ? function(p, T) {
      return kn(S.snapTo)(p, Ce() - dt < 500 ? 0 : T.direction);
    } : d.utils.snap(S.snapTo), et = S.duration || {
      min: 0.1,
      max: 2
    }, et = It(et) ? yr(et.min, et.max) : yr(et, et), tt = d.delayedCall(S.delay || Lt / 2 || 0.1, function() {
      var p = j(), T = Ce() - dt < 500, m = Pe.tween;
      if ((T || Math.abs(s.getVelocity()) < 10) && !m && !tn && Ue !== p) {
        var w = (p - A) / ee, ce = r && !he ? r.totalProgress() : w, O = T ? 0 : (ce - Ft) / (Ce() - dr) * 1e3 || 0, K = d.utils.clamp(-w, 1 - w, Jt(O / 2) * O / 0.185), be = w + (S.inertia === !1 ? 0 : K), $, B, Y = S, nt = Y.onStart, W = Y.onInterrupt, He = Y.onComplete;
        if ($ = yt(be, s), _r($) || ($ = be), B = Math.round(A + $ * ee), p <= U && p >= A && B !== p) {
          if (m && !m._initted && m.data <= Jt(B - p))
            return;
          S.inertia === !1 && (K = $ - w), Pe(B, {
            duration: et(Jt(Math.max(Jt(be - ce), Jt($ - ce)) * 0.185 / O / 0.05 || 0)),
            ease: S.ease || "power3",
            data: Jt(B - p),
            // record the distance so that if another snap tween occurs (conflict) we can prioritize the closest snap.
            onInterrupt: function() {
              return tt.restart(!0) && W && W(s);
            },
            onComplete: function() {
              s.update(), Ue = j(), r && (M ? M.resetTo("totalProgress", $, r._tTime / r._tDur) : r.progress($)), kt = Ft = r && !he ? r.totalProgress() : s.progress, H && H(s), He && He(s);
            }
          }, p, K * ee, B - p - K * ee), nt && nt(s, Pe.tween);
        }
      } else s.isActive && Ue !== p && tt.restart(!0);
    }).pause()), f && (vn[f] = s), g = s.trigger = Ie(g || c !== !0 && c), _t = g && g._gsap && g._gsap.stRevert, _t && (_t = _t(s)), c = c === !0 ? g : Ie(c), Ge(a) && (a = {
      targets: g,
      className: a
    }), c && (_ === !1 || _ === Ke || (_ = !_ && c.parentNode && c.parentNode.style && Ze(c.parentNode).display === "flex" ? !1 : re), s.pin = c, ve = d.core.getCache(c), ve.spacer ? Ct = ve.pinState : (X && (X = Ie(X), X && !X.nodeType && (X = X.current || X.nativeElement), ve.spacerIsNative = !!X, X && (ve.spacerState = Br(X))), ve.spacer = ue = X || G.createElement("div"), ue.classList.add("pin-spacer"), f && ue.classList.add("pin-spacer-" + f), ve.pinState = Ct = Br(c)), t.force3D !== !1 && d.set(c, {
      force3D: !0
    }), s.spacer = ue = ve.spacer, Kt = Ze(c), sr = Kt[_ + h.os2], q = d.getProperty(c), je = d.quickSetter(c, h.a, ae), un(c, ue, Kt), Ut = Br(c)), J) {
      ht = It(J) ? Nn(J, Yn) : Yn, u = Xr("scroller-start", f, x, h, ht, 0), Be = Xr("scroller-end", f, x, h, ht, 0, u), Tt = u["offset" + h.op.d2];
      var ar = Ie(Dt(x, "content") || x);
      ze = this.markerStart = Xr("start", f, ar, h, ht, Tt, 0, y), Xe = this.markerEnd = Xr("end", f, ar, h, ht, Tt, 0, y), y && (Zt = d.quickSetter([ze, Xe], h.a, ae)), !Se && !(ft.length && Dt(x, "fixedMarkers") === !0) && (Si(ie ? I : x), d.set([u, Be], {
        force3D: !0
      }), Er = d.quickSetter(u, h.a, ae), qt = d.quickSetter(Be, h.a, ae));
    }
    if (y) {
      var C = y.vars.onUpdate, v = y.vars.onUpdateParams;
      y.eventCallback("onUpdate", function() {
        s.update(0, 0, 1), C && C.apply(y, v || []);
      });
    }
    if (s.previous = function() {
      return k[k.indexOf(s) - 1];
    }, s.next = function() {
      return k[k.indexOf(s) + 1];
    }, s.revert = function(p, T) {
      if (!T)
        return s.kill(!0);
      var m = p !== !1 || !s.enabled, w = we;
      m !== s.isReverted && (m && (rt = Math.max(j(), s.scroll.rec || 0), Me = s.progress, Nt = r && r.progress()), ze && [ze, Xe, u, Be].forEach(function(ce) {
        return ce.style.display = m ? "none" : "block";
      }), m && (we = s, s.update(m)), c && (!$e || !s.isActive) && (m ? Di(c, ue, Ct) : un(c, ue, Ze(c), te)), m || s.update(m), we = w, s.isReverted = m);
    }, s.refresh = function(p, T, m, w) {
      if (!((we || !s.enabled) && !T)) {
        if (c && p && Je) {
          pe(o, "scrollEnd", di);
          return;
        }
        !Fe && oe && oe(s), we = s, Pe.tween && !m && (Pe.tween.kill(), Pe.tween = 0), M && M.pause(), V && r && r.revert({
          kill: !1
        }).invalidate(), s.isReverted || s.revert(!0, !0), s._subPinOffset = !1;
        var ce = Rt(), O = xt(), K = y ? y.duration() : ct(x, h), be = ee <= 0.01, $ = 0, B = w || 0, Y = It(m) ? m.end : t.end, nt = t.endTrigger || g, W = It(m) ? m.start : t.start || (t.start === 0 || !g ? 0 : c ? "0 0" : "0 100%"), He = s.pinnedContainer = t.pinnedContainer && Ie(t.pinnedContainer, s), st = g && Math.max(0, k.indexOf(s)) || 0, ge = st, _e, xe, Yt, Dr, ye, se, at, rn, Pn, lr, lt, ur, Or;
        for (J && It(m) && (ur = d.getProperty(u, h.p), Or = d.getProperty(Be, h.p)); ge--; )
          se = k[ge], se.end || se.refresh(0, 1) || (we = s), at = se.pin, at && (at === g || at === c || at === He) && !se.isReverted && (lr || (lr = []), lr.unshift(se), se.revert(!0, !0)), se !== k[ge] && (st--, ge--);
        for (Ne(W) && (W = W(s)), W = Rn(W, "start", s), A = Bn(W, g, ce, h, j(), ze, u, s, O, Q, Se, K, y, s._startClamp && "_startClamp") || (c ? -1e-3 : 0), Ne(Y) && (Y = Y(s)), Ge(Y) && !Y.indexOf("+=") && (~Y.indexOf(" ") ? Y = (Ge(W) ? W.split(" ")[0] : "") + Y : ($ = Vr(Y.substr(2), ce), Y = Ge(W) ? W : (y ? d.utils.mapRange(0, y.duration(), y.scrollTrigger.start, y.scrollTrigger.end, A) : A) + $, nt = g)), Y = Rn(Y, "end", s), U = Math.max(A, Bn(Y || (nt ? "100% 0" : K), nt, ce, h, j() + $, Xe, Be, s, O, Q, Se, K, y, s._endClamp && "_endClamp")) || -1e-3, $ = 0, ge = st; ge--; )
          se = k[ge], at = se.pin, at && se.start - se._pinPush <= A && !y && se.end > 0 && (_e = se.end - (s._startClamp ? Math.max(0, se.start) : se.start), (at === g && se.start - se._pinPush < A || at === He) && isNaN(W) && ($ += _e * (1 - se.progress)), at === c && (B += _e));
        if (A += $, U += $, s._startClamp && (s._startClamp += $), s._endClamp && !Fe && (s._endClamp = U || -1e-3, U = Math.min(U, ct(x, h))), ee = U - A || (A -= 0.01) && 1e-3, be && (Me = d.utils.clamp(0, 1, d.utils.normalize(A, U, rt))), s._pinPush = B, ze && $ && (_e = {}, _e[h.a] = "+=" + $, He && (_e[h.p] = "-=" + j()), d.set([ze, Xe], _e)), c && !(mn && s.end >= ct(x, h)))
          _e = Ze(c), Dr = h === le, Yt = j(), qe = parseFloat(q(h.a)) + B, !K && U > 1 && (lt = (ie ? G.scrollingElement || ot : x).style, lt = {
            style: lt,
            value: lt["overflow" + h.a.toUpperCase()]
          }, ie && Ze(I)["overflow" + h.a.toUpperCase()] !== "scroll" && (lt.style["overflow" + h.a.toUpperCase()] = "scroll")), un(c, ue, _e), Ut = Br(c), xe = mt(c, !0), rn = Se && Ot(x, Dr ? Le : le)(), _ ? (te = [_ + h.os2, ee + B + ae], te.t = ue, ge = _ === re ? jr(c, h) + ee + B : 0, ge && (te.push(h.d, ge + ae), ue.style.flexBasis !== "auto" && (ue.style.flexBasis = ge + ae)), ir(te), He && k.forEach(function(cr) {
            cr.pin === He && cr.vars.pinSpacing !== !1 && (cr._subPinOffset = !0);
          }), Se && j(rt)) : (ge = jr(c, h), ge && ue.style.flexBasis !== "auto" && (ue.style.flexBasis = ge + ae)), Se && (ye = {
            top: xe.top + (Dr ? Yt - A : rn) + ae,
            left: xe.left + (Dr ? rn : Yt - A) + ae,
            boxSizing: "border-box",
            position: "fixed"
          }, ye[Bt] = ye["max" + or] = Math.ceil(xe.width) + ae, ye[Ht] = ye["max" + Sn] = Math.ceil(xe.height) + ae, ye[Ke] = ye[Ke + Tr] = ye[Ke + wr] = ye[Ke + Sr] = ye[Ke + Cr] = "0", ye[re] = _e[re], ye[re + Tr] = _e[re + Tr], ye[re + wr] = _e[re + wr], ye[re + Sr] = _e[re + Sr], ye[re + Cr] = _e[re + Cr], At = Ri(Ct, ye, $e), Fe && j(0)), r ? (Pn = r._initted, nn(1), r.render(r.duration(), !0, !0), gt = q(h.a) - qe + ee + B, St = Math.abs(ee - gt) > 1, Se && St && At.splice(At.length - 2, 2), r.render(0, !0, !0), Pn || r.invalidate(!0), r.parent || r.totalTime(r.totalTime()), nn(0)) : gt = ee, lt && (lt.value ? lt.style["overflow" + h.a.toUpperCase()] = lt.value : lt.style.removeProperty("overflow-" + h.a));
        else if (g && j() && !y)
          for (xe = g.parentNode; xe && xe !== I; )
            xe._pinOffset && (A -= xe._pinOffset, U -= xe._pinOffset), xe = xe.parentNode;
        lr && lr.forEach(function(cr) {
          return cr.revert(!1, !0);
        }), s.start = A, s.end = U, Ee = Qe = Fe ? rt : j(), !y && !Fe && (Ee < rt && j(rt), s.scroll.rec = 0), s.revert(!1, !0), dt = Ce(), tt && (Ue = -1, tt.restart(!0)), we = 0, r && he && (r._initted || Nt) && r.progress() !== Nt && r.progress(Nt || 0, !0).render(r.time(), !0, !0), (be || Me !== s.progress || y || V) && (r && !he && r.totalProgress(y && A < -1e-3 && !Me ? d.utils.normalize(A, U, 0) : Me, !0), s.progress = be || (Ee - A) / ee === Me ? 0 : Me), c && _ && (ue._pinOffset = Math.round(s.progress * gt)), M && M.invalidate(), isNaN(ur) || (ur -= d.getProperty(u, h.p), Or -= d.getProperty(Be, h.p), Hr(u, h, ur), Hr(ze, h, ur - (w || 0)), Hr(Be, h, Or), Hr(Xe, h, Or - (w || 0))), be && !Fe && s.update(), F && !Fe && !wt && (wt = !0, F(s), wt = !1);
      }
    }, s.getVelocity = function() {
      return (j() - Qe) / (Ce() - dr) * 1e3 || 0;
    }, s.endAnimation = function() {
      pr(s.callbackAnimation), r && (M ? M.progress(1) : r.paused() ? he || pr(r, s.direction < 0, 1) : pr(r, r.reversed()));
    }, s.labelToScroll = function(p) {
      return r && r.labels && (A || s.refresh() || A) + r.labels[p] / r.duration() * ee || 0;
    }, s.getTrailing = function(p) {
      var T = k.indexOf(s), m = s.direction > 0 ? k.slice(0, T).reverse() : k.slice(T + 1);
      return (Ge(p) ? m.filter(function(w) {
        return w.vars.preventOverlaps === p;
      }) : m).filter(function(w) {
        return s.direction > 0 ? w.end <= A : w.start >= U;
      });
    }, s.update = function(p, T, m) {
      if (!(y && !m && !p)) {
        var w = Fe === !0 ? rt : s.scroll(), ce = p ? 0 : (w - A) / ee, O = ce < 0 ? 0 : ce > 1 ? 1 : ce || 0, K = s.progress, be, $, B, Y, nt, W, He, st;
        if (T && (Qe = Ee, Ee = y ? j() : w, S && (Ft = kt, kt = r && !he ? r.totalProgress() : O)), z && c && !we && !Lr && Je && (!O && A < w + (w - Qe) / (Ce() - dr) * z ? O = 1e-4 : O === 1 && U > w + (w - Qe) / (Ce() - dr) * z && (O = 0.9999)), O !== K && s.enabled) {
          if (be = s.isActive = !!O && O < 1, $ = !!K && K < 1, W = be !== $, nt = W || !!O != !!K, s.direction = O > K ? 1 : -1, s.progress = O, nt && !we && (B = O && !K ? 0 : O === 1 ? 1 : K === 1 ? 2 : 3, he && (Y = !W && N[B + 1] !== "none" && N[B + 1] || N[B], st = r && (Y === "complete" || Y === "reset" || Y in r))), Ye && (W || st) && (st || D || !r) && (Ne(Ye) ? Ye(s) : s.getTrailing(Ye).forEach(function(Yt) {
            return Yt.endAnimation();
          })), he || (M && !we && !Lr ? (M._dp._time - M._start !== M._time && M.render(M._dp._time - M._start), M.resetTo ? M.resetTo("totalProgress", O, r._tTime / r._tDur) : (M.vars.totalProgress = O, M.invalidate().restart())) : r && r.totalProgress(O, !!(we && (dt || p)))), c) {
            if (p && _ && (ue.style[_ + h.os2] = sr), !Se)
              je(gr(qe + gt * O));
            else if (nt) {
              if (He = !p && O > K && U + 1 > w && w + 1 >= ct(x, h), $e)
                if (!p && (be || He)) {
                  var ge = mt(c, !0), _e = w - A;
                  Hn(c, I, ge.top + (h === le ? _e : 0) + ae, ge.left + (h === le ? 0 : _e) + ae);
                } else
                  Hn(c, ue);
              ir(be || He ? At : Ut), St && O < 1 && be || je(qe + (O === 1 && !He ? gt : 0));
            }
          }
          S && !Pe.tween && !we && !Lr && tt.restart(!0), a && (W || de && O && (O < 1 || !on)) && Mr(a.targets).forEach(function(Yt) {
            return Yt.classList[be || de ? "add" : "remove"](a.className);
          }), l && !he && !p && l(s), nt && !we ? (he && (st && (Y === "complete" ? r.pause().totalProgress(1) : Y === "reset" ? r.restart(!0).pause() : Y === "restart" ? r.restart(!0) : r[Y]()), l && l(s)), (W || !on) && (b && W && an(s, b), ke[B] && an(s, ke[B]), de && (O === 1 ? s.kill(!1, 1) : ke[B] = 0), W || (B = O === 1 ? 1 : 3, ke[B] && an(s, ke[B]))), Te && !be && Math.abs(s.getVelocity()) > (_r(Te) ? Te : 2500) && (pr(s.callbackAnimation), M ? M.progress(1) : pr(r, Y === "reverse" ? 1 : !O, 1))) : he && l && !we && l(s);
        }
        if (qt) {
          var xe = y ? w / y.duration() * (y._caScrollDist || 0) : w;
          Er(xe + (u._isFlipped ? 1 : 0)), qt(xe);
        }
        Zt && Zt(-w / y.duration() * (y._caScrollDist || 0));
      }
    }, s.enable = function(p, T) {
      s.enabled || (s.enabled = !0, pe(x, "resize", mr), ie || pe(x, "scroll", Qt), oe && pe(o, "refreshInit", oe), p !== !1 && (s.progress = Me = 0, Ee = Qe = Ue = j()), T !== !1 && s.refresh());
    }, s.getTween = function(p) {
      return p && Pe ? Pe.tween : M;
    }, s.setPositions = function(p, T, m, w) {
      if (y) {
        var ce = y.scrollTrigger, O = y.duration(), K = ce.end - ce.start;
        p = ce.start + K * p / O, T = ce.start + K * T / O;
      }
      s.refresh(!1, !1, {
        start: An(p, m && !!s._startClamp),
        end: An(T, m && !!s._endClamp)
      }, w), s.update();
    }, s.adjustPinSpacing = function(p) {
      if (te && p) {
        var T = te.indexOf(h.d) + 1;
        te[T] = parseFloat(te[T]) + p + ae, te[1] = parseFloat(te[1]) + p + ae, ir(te);
      }
    }, s.disable = function(p, T) {
      if (s.enabled && (p !== !1 && s.revert(!0, !0), s.enabled = s.isActive = !1, T || M && M.pause(), rt = 0, ve && (ve.uncache = 1), oe && fe(o, "refreshInit", oe), tt && (tt.pause(), Pe.tween && Pe.tween.kill() && (Pe.tween = 0)), !ie)) {
        for (var m = k.length; m--; )
          if (k[m].scroller === x && k[m] !== s)
            return;
        fe(x, "resize", mr), ie || fe(x, "scroll", Qt);
      }
    }, s.kill = function(p, T) {
      s.disable(p, T), M && !T && M.kill(), f && delete vn[f];
      var m = k.indexOf(s);
      m >= 0 && k.splice(m, 1), m === Ae && Ur > 0 && Ae--, m = 0, k.forEach(function(w) {
        return w.scroller === s.scroller && (m = 1);
      }), m || Fe || (s.scroll.rec = 0), r && (r.scrollTrigger = null, p && r.revert({
        kill: !1
      }), T || r.kill()), ze && [ze, Xe, u, Be].forEach(function(w) {
        return w.parentNode && w.parentNode.removeChild(w);
      }), kr === s && (kr = 0), c && (ve && (ve.uncache = 1), m = 0, k.forEach(function(w) {
        return w.pin === c && m++;
      }), m || (ve.spacer = 0)), t.onKill && t.onKill(s);
    }, k.push(s), s.enable(!1, !1), _t && _t(s), r && r.add && !ee) {
      var L = s.update;
      s.update = function() {
        s.update = L, A || U || s.refresh();
      }, d.delayedCall(0.01, s.update), ee = 0.01, A = U = 0;
    } else
      s.refresh();
    c && Ei();
  }, o.register = function(t) {
    return jt || (d = t || ai(), si() && window.document && o.enable(), jt = hr), jt;
  }, o.defaults = function(t) {
    if (t)
      for (var r in t)
        Ir[r] = t[r];
    return Ir;
  }, o.disable = function(t, r) {
    hr = 0, k.forEach(function(l) {
      return l[r ? "kill" : "disable"](t);
    }), fe(R, "wheel", Qt), fe(G, "scroll", Qt), clearInterval(Fr), fe(G, "touchcancel", ut), fe(I, "touchstart", ut), Yr(fe, G, "pointerdown,touchstart,mousedown", Fn), Yr(fe, G, "pointerup,touchend,mouseup", Ln), Jr.kill(), Nr(fe);
    for (var i = 0; i < P.length; i += 3)
      zr(fe, P[i], P[i + 1]), zr(fe, P[i], P[i + 2]);
  }, o.enable = function() {
    if (R = window, G = document, ot = G.documentElement, I = G.body, d && (Mr = d.utils.toArray, yr = d.utils.clamp, _n = d.core.context || ut, nn = d.core.suppressOverwrites || ut, yn = R.history.scrollRestoration || "auto", bn = R.pageYOffset, d.core.globals("ScrollTrigger", o), I)) {
      hr = 1, nr = document.createElement("div"), nr.style.height = "100vh", nr.style.position = "absolute", _i(), wi(), Z.register(d), o.isTouch = Z.isTouch, Mt = Z.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), gn = Z.isTouch === 1, pe(R, "wheel", Qt), ti = [R, G, ot, I], d.matchMedia ? (o.matchMedia = function(f) {
        var b = d.matchMedia(), F;
        for (F in f)
          b.add(F, f[F]);
        return b;
      }, d.addEventListener("matchMediaInit", function() {
        return Mn();
      }), d.addEventListener("matchMediaRevert", function() {
        return hi();
      }), d.addEventListener("matchMedia", function() {
        Xt(0, 1), $t("matchMedia");
      }), d.matchMedia("(orientation: portrait)", function() {
        return ln(), ln;
      })) : console.warn("Requires GSAP 3.11.0 or later"), ln(), pe(G, "scroll", Qt);
      var t = I.style, r = t.borderTopStyle, i = d.core.Animation.prototype, l, a;
      for (i.revert || Object.defineProperty(i, "revert", {
        value: function() {
          return this.time(-0.01, !0);
        }
      }), t.borderTopStyle = "solid", l = mt(I), le.m = Math.round(l.top + le.sc()) || 0, Le.m = Math.round(l.left + Le.sc()) || 0, r ? t.borderTopStyle = r : t.removeProperty("border-top-style"), Fr = setInterval(zn, 250), d.delayedCall(0.5, function() {
        return Lr = 0;
      }), pe(G, "touchcancel", ut), pe(I, "touchstart", ut), Yr(pe, G, "pointerdown,touchstart,mousedown", Fn), Yr(pe, G, "pointerup,touchend,mouseup", Ln), hn = d.utils.checkPrefix("transform"), qr.push(hn), jt = Ce(), Jr = d.delayedCall(0.2, Xt).pause(), er = [G, "visibilitychange", function() {
        var f = R.innerWidth, b = R.innerHeight;
        G.hidden ? (Dn = f, On = b) : (Dn !== f || On !== b) && mr();
      }, G, "DOMContentLoaded", Xt, R, "load", Xt, R, "resize", mr], Nr(pe), k.forEach(function(f) {
        return f.enable(0, 1);
      }), a = 0; a < P.length; a += 3)
        zr(fe, P[a], P[a + 1]), zr(fe, P[a], P[a + 2]);
    }
  }, o.config = function(t) {
    "limitCallbacks" in t && (on = !!t.limitCallbacks);
    var r = t.syncInterval;
    r && clearInterval(Fr) || (Fr = r) && setInterval(zn, r), "ignoreMobileResize" in t && (gn = o.isTouch === 1 && t.ignoreMobileResize), "autoRefreshEvents" in t && (Nr(fe) || Nr(pe, t.autoRefreshEvents || "none"), ni = (t.autoRefreshEvents + "").indexOf("resize") === -1);
  }, o.scrollerProxy = function(t, r) {
    var i = Ie(t), l = P.indexOf(i), a = Gt(i);
    ~l && P.splice(l, a ? 6 : 2), r && (a ? ft.unshift(R, r, I, r, ot, r) : ft.unshift(i, r));
  }, o.clearMatchMedia = function(t) {
    k.forEach(function(r) {
      return r._ctx && r._ctx.query === t && r._ctx.kill(!0, !0);
    });
  }, o.isInViewport = function(t, r, i) {
    var l = (Ge(t) ? Ie(t) : t).getBoundingClientRect(), a = l[i ? Bt : Ht] * r || 0;
    return i ? l.right - a > 0 && l.left + a < R.innerWidth : l.bottom - a > 0 && l.top + a < R.innerHeight;
  }, o.positionInViewport = function(t, r, i) {
    Ge(t) && (t = Ie(t));
    var l = t.getBoundingClientRect(), a = l[i ? Bt : Ht], f = r == null ? a / 2 : r in en ? en[r] * a : ~r.indexOf("%") ? parseFloat(r) * a / 100 : parseFloat(r) || 0;
    return i ? (l.left + f) / R.innerWidth : (l.top + f) / R.innerHeight;
  }, o.killAll = function(t) {
    if (k.slice(0).forEach(function(i) {
      return i.vars.id !== "ScrollSmoother" && i.kill();
    }), t !== !0) {
      var r = Vt.killAll || [];
      Vt = {}, r.forEach(function(i) {
        return i();
      });
    }
  }, o;
}();
E.version = "3.12.5";
E.saveStyles = function(o) {
  return o ? Mr(o).forEach(function(e) {
    if (e && e.style) {
      var n = We.indexOf(e);
      n >= 0 && We.splice(n, 5), We.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), d.core.getCache(e), _n());
    }
  }) : We;
};
E.revert = function(o, e) {
  return Mn(!o, e);
};
E.create = function(o, e) {
  return new E(o, e);
};
E.refresh = function(o) {
  return o ? mr() : (jt || E.register()) && Xt(!0);
};
E.update = function(o) {
  return ++P.cache && bt(o === !0 ? 2 : 0);
};
E.clearScrollMemory = gi;
E.maxScroll = function(o, e) {
  return ct(o, e ? Le : le);
};
E.getScrollFunc = function(o, e) {
  return Ot(Ie(o), e ? Le : le);
};
E.getById = function(o) {
  return vn[o];
};
E.getAll = function() {
  return k.filter(function(o) {
    return o.vars.id !== "ScrollSmoother";
  });
};
E.isScrolling = function() {
  return !!Je;
};
E.snapDirectional = kn;
E.addEventListener = function(o, e) {
  var n = Vt[o] || (Vt[o] = []);
  ~n.indexOf(e) || n.push(e);
};
E.removeEventListener = function(o, e) {
  var n = Vt[o], t = n && n.indexOf(e);
  t >= 0 && n.splice(t, 1);
};
E.batch = function(o, e) {
  var n = [], t = {}, r = e.interval || 0.016, i = e.batchMax || 1e9, l = function(b, F) {
    var D = [], g = [], c = d.delayedCall(r, function() {
      F(D, g), D = [], g = [];
    }).pause();
    return function(_) {
      D.length || c.restart(!0), D.push(_.trigger), g.push(_), i <= D.length && c.progress(1);
    };
  }, a;
  for (a in e)
    t[a] = a.substr(0, 2) === "on" && Ne(e[a]) && a !== "onRefreshInit" ? l(a, e[a]) : e[a];
  return Ne(i) && (i = i(), pe(E, "refresh", function() {
    return i = e.batchMax();
  })), Mr(o).forEach(function(f) {
    var b = {};
    for (a in t)
      b[a] = t[a];
    b.trigger = f, n.push(E.create(b));
  }), n;
};
var Gn = function(e, n, t, r) {
  return n > r ? e(r) : n < 0 && e(0), t > r ? (r - n) / (t - n) : t < 0 ? n / (n - t) : 1;
}, cn = function o(e, n) {
  n === !0 ? e.style.removeProperty("touch-action") : e.style.touchAction = n === !0 ? "auto" : n ? "pan-" + n + (Z.isTouch ? " pinch-zoom" : "") : "none", e === ot && o(I, n);
}, Wr = {
  auto: 1,
  scroll: 1
}, Fi = function(e) {
  var n = e.event, t = e.target, r = e.axis, i = (n.changedTouches ? n.changedTouches[0] : n).target, l = i._gsap || d.core.getCache(i), a = Ce(), f;
  if (!l._isScrollT || a - l._isScrollT > 2e3) {
    for (; i && i !== I && (i.scrollHeight <= i.clientHeight && i.scrollWidth <= i.clientWidth || !(Wr[(f = Ze(i)).overflowY] || Wr[f.overflowX])); )
      i = i.parentNode;
    l._isScroll = i && i !== t && !Gt(i) && (Wr[(f = Ze(i)).overflowY] || Wr[f.overflowX]), l._isScrollT = a;
  }
  (l._isScroll || r === "x") && (n.stopPropagation(), n._gsapAllow = !0);
}, vi = function(e, n, t, r) {
  return Z.create({
    target: e,
    capture: !0,
    debounce: !1,
    lockAxis: !0,
    type: n,
    onWheel: r = r && Fi,
    onPress: r,
    onDrag: r,
    onScroll: r,
    onEnable: function() {
      return t && pe(G, Z.eventTypes[0], $n, !1, !0);
    },
    onDisable: function() {
      return fe(G, Z.eventTypes[0], $n, !0);
    }
  });
}, Li = /(input|label|select|textarea)/i, Vn, $n = function(e) {
  var n = Li.test(e.target.tagName);
  (n || Vn) && (e._gsapAllow = !0, Vn = n);
}, Ni = function(e) {
  It(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
  var n = e, t = n.normalizeScrollX, r = n.momentum, i = n.allowNestedScroll, l = n.onRelease, a, f, b = Ie(e.target) || ot, F = d.core.globals().ScrollSmoother, D = F && F.get(), g = Mt && (e.content && Ie(e.content) || D && e.content !== !1 && !D.smooth() && D.content()), c = Ot(b, le), _ = Ot(b, Le), V = 1, z = (Z.isTouch && R.visualViewport ? R.visualViewport.scale * R.visualViewport.width : R.outerWidth) / R.innerWidth, ne = 0, H = Ne(r) ? function() {
    return r(a);
  } : function() {
    return r || 2.8;
  }, de, S, $e = vi(b, e.type, !0, i), X = function() {
    return S = !1;
  }, y = ut, Te = ut, Ye = function() {
    f = ct(b, le), Te = yr(Mt ? 1 : 0, f), t && (y = yr(0, ct(b, Le))), de = Wt;
  }, h = function() {
    g._gsap.y = gr(parseFloat(g._gsap.y) + c.offset) + "px", g.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(g._gsap.y) + ", 0, 1)", c.offset = c.cacheID = 0;
  }, he = function() {
    if (S) {
      requestAnimationFrame(X);
      var J = gr(a.deltaY / 2), Q = Te(c.v - J);
      if (g && Q !== c.v + c.offset) {
        c.offset = Q - c.v;
        var s = gr((parseFloat(g && g._gsap.y) || 0) - c.offset);
        g.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + s + ", 0, 1)", g._gsap.y = s + "px", c.cacheID = P.cache, bt();
      }
      return !0;
    }
    c.offset && h(), S = !0;
  }, x, pt, ie, Se, ke = function() {
    Ye(), x.isActive() && x.vars.scrollY > f && (c() > f ? x.progress(1) && c(f) : x.resetTo("scrollY", f));
  };
  return g && d.set(g, {
    y: "+=0"
  }), e.ignoreCheck = function(N) {
    return Mt && N.type === "touchmove" && he() || V > 1.05 && N.type !== "touchstart" || a.isGesturing || N.touches && N.touches.length > 1;
  }, e.onPress = function() {
    S = !1;
    var N = V;
    V = gr((R.visualViewport && R.visualViewport.scale || 1) / z), x.pause(), N !== V && cn(b, V > 1.01 ? !0 : t ? !1 : "x"), pt = _(), ie = c(), Ye(), de = Wt;
  }, e.onRelease = e.onGestureStart = function(N, J) {
    if (c.offset && h(), !J)
      Se.restart(!0);
    else {
      P.cache++;
      var Q = H(), s, oe;
      t && (s = _(), oe = s + Q * 0.05 * -N.velocityX / 0.227, Q *= Gn(_, s, oe, ct(b, Le)), x.vars.scrollX = y(oe)), s = c(), oe = s + Q * 0.05 * -N.velocityY / 0.227, Q *= Gn(c, s, oe, ct(b, le)), x.vars.scrollY = Te(oe), x.invalidate().duration(Q).play(0.01), (Mt && x.vars.scrollY >= f || s >= f - 1) && d.to({}, {
        onUpdate: ke,
        duration: Q
      });
    }
    l && l(N);
  }, e.onWheel = function() {
    x._ts && x.pause(), Ce() - ne > 1e3 && (de = 0, ne = Ce());
  }, e.onChange = function(N, J, Q, s, oe) {
    if (Wt !== de && Ye(), J && t && _(y(s[2] === J ? pt + (N.startX - N.x) : _() + J - s[1])), Q) {
      c.offset && h();
      var Rt = oe[2] === Q, xt = Rt ? ie + N.startY - N.y : c() + Q - oe[1], Ue = Te(xt);
      Rt && xt !== Ue && (ie += Ue - xt), c(Ue);
    }
    (Q || J) && bt();
  }, e.onEnable = function() {
    cn(b, t ? !1 : "x"), E.addEventListener("refresh", ke), pe(R, "resize", ke), c.smooth && (c.target.style.scrollBehavior = "auto", c.smooth = _.smooth = !1), $e.enable();
  }, e.onDisable = function() {
    cn(b, !0), fe(R, "resize", ke), E.removeEventListener("refresh", ke), $e.kill();
  }, e.lockAxis = e.lockAxis !== !1, a = new Z(e), a.iOS = Mt, Mt && !c() && c(1), Mt && d.ticker.add(ut), Se = a._dc, x = d.to(a, {
    ease: "power4",
    paused: !0,
    inherit: !1,
    scrollX: t ? "+=0.1" : "+=0",
    scrollY: "+=0.1",
    modifiers: {
      scrollY: mi(c, c(), function() {
        return x.pause();
      })
    },
    onUpdate: bt,
    onComplete: Se.vars.onComplete
  }), a;
};
E.sort = function(o) {
  return k.sort(o || function(e, n) {
    return (e.vars.refreshPriority || 0) * -1e6 + e.start - (n.start + (n.vars.refreshPriority || 0) * -1e6);
  });
};
E.observe = function(o) {
  return new Z(o);
};
E.normalizeScroll = function(o) {
  if (typeof o > "u")
    return Re;
  if (o === !0 && Re)
    return Re.enable();
  if (o === !1) {
    Re && Re.kill(), Re = o;
    return;
  }
  var e = o instanceof Z ? o : Ni(o);
  return Re && Re.target === e.target && Re.kill(), Gt(e.target) && (Re = e), e;
};
E.core = {
  // smaller file size way to leverage in ScrollSmoother and Observer
  _getVelocityProp: dn,
  _inputObserver: vi,
  _scrollers: P,
  _proxies: ft,
  bridge: {
    // when normalizeScroll sets the scroll position (ss = setScroll)
    ss: function() {
      Je || $t("scrollStart"), Je = Ce();
    },
    // a way to get the _refreshing value in Observer
    ref: function() {
      return we;
    }
  }
};
ai() && d.registerPlugin(E);
Un.registerPlugin(E);
class zi {
  constructor(e) {
    const { element: n, duration: t = 2, separator: r = ",", start: i = "top top", debug: l = !1, easing: a = "power1.out", autoPlay: f = !1, playOnce: b = !1, onComplete: F = null, decimalPlaces: D = 0 } = e;
    if (!n || n instanceof NodeList || Array.isArray(n))
      throw new Error("The 'element' must be a single HTMLElement.");
    this.DOM = { element: n }, this.duration = t, this.separator = r, this.start = i, this.debug = l, this.easing = a, this.autoPlay = f, this.playOnce = b, this.onComplete = F, this.decimalPlaces = D, this.counterStarted = !1, this.scrollTrigger = null, this.animation = null, this.prepareElement(), this.init();
  }
  // Method to prepare the element's content
  prepareElement() {
    const e = this.DOM.element.textContent, n = this.extractNumber(e);
    if (n) {
      const t = e.replace(n, `<span class="animated-number">${n}</span>`);
      this.DOM.element.innerHTML = t, this.DOM.numberSpan = this.DOM.element.querySelector(".animated-number"), this.endValue = parseFloat(n.replace(/,/g, "")) || 0, this.hasDecimals = n.includes(".") && this.separator == "," || n.includes(",") && this.separator == ".";
    } else
      console.warn("No valid number found in the element's text content.");
  }
  // Method to extract a sanitized number from a string, keeping ',' and '.' as valid characters
  extractNumber(e) {
    const n = e.match(/[\d.,]+/);
    return n ? n[0] : null;
  }
  init() {
    this.autoPlay && this.DOM.numberSpan && (this.scrollTrigger = E.create({
      trigger: this.DOM.element,
      start: this.start,
      onEnter: () => this.handlePlay(),
      markers: this.debug
    }));
  }
  handlePlay() {
    (!this.counterStarted || !this.playOnce) && this.startCounter();
  }
  play() {
    this.handlePlay();
  }
  startCounter() {
    if (this.counterStarted = !0, !this.DOM.numberSpan) {
      console.warn("No number span found for animation.");
      return;
    }
    const e = this;
    this.animation = Un.to(
      { value: 0 },
      {
        value: this.endValue,
        duration: this.duration,
        ease: this.easing,
        onUpdate: function() {
          const n = e.formatNumber(this.targets()[0].value);
          e.DOM.numberSpan.textContent = n;
        },
        onComplete: () => {
          this.playOnce && this.scrollTrigger && (this.scrollTrigger.kill(), this.scrollTrigger = null), this.counterStarted = !1, typeof this.onComplete == "function" && this.onComplete();
        }
      }
    );
  }
  formatNumber(e) {
    const t = (this.hasDecimals && this.decimalPlaces > 0 ? e.toFixed(this.decimalPlaces) : Math.round(e).toString()).split(".");
    return t[0] = t[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.separator), t.length > 1 ? t.join(".") : t[0];
  }
  // Method to destroy the counter and clear resources
  destroy() {
    this.scrollTrigger && (this.scrollTrigger.kill(), this.scrollTrigger = null), this.animation && (this.animation.kill(), this.animation = null), this.counterStarted = !1;
  }
  // Method to update ScrollTrigger's position
  update() {
    this.scrollTrigger && this.scrollTrigger.refresh();
  }
}
export {
  zi as default
};
