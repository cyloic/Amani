(function(f) {
    typeof define == "function" && define.amd ? define(f) : f()
})(function() {
    "use strict";
    const f = "sf",
        M = `${f}-debug`,
        ft = `${f}-global-step-delay`,
        ht = `${f}-save-progress`,
        Et = `${f}-prefill-url`,
        q = `${f}_fill`,
        K = `${f}-step`,
        At = `${f}-set-step-progress`,
        pt = `${f}-set-step-index`,
        k = `${f}-next-step-delay`,
        T = `${f}-goto`,
        bt = `${f}-force-goto`,
        St = `${f}-reset`,
        L = `${f}-bind-enter`,
        F = `${f}-bind-backspace`,
        X = `${f}-logic`,
        W = `${f}-logic-goto`,
        Y = 5,
        x = `${f}-logic-fallback`,
        mt = `${f}-step-animation`,
        yt = `${f}-step-animation-duration`,
        _t = `${f}-step-animation-ease`,
        j = `${f}-el`,
        $ = `${f}-error`,
        w = `${f}-error-class`,
        z = `${f}-validation`,
        O = `${f}-checkbox-group`,
        Tt = `${f}-checkbox-bind-key`,
        It = `${f}-radio-bind-key`,
        Z = `${f}-react`,
        vt = 5,
        Q = `${f}-score`,
        J = `${f}-score-calc`,
        Nt = 5,
        tt = `${f}-noflash`,
        kt = `${f}-override-webflow`,
        et = ["fade", "slide-top", "slide-left", "slide-bottom", "slide-right", "none"],
        $t = {
            fade: "fade",
            "slide-top": "slide-bottom",
            "slide-left": "slide-right",
            "slide-bottom": "slide-top",
            "slide-right": "slide-left",
            none: "none"
        },
        P = et[0],
        Ot = 300,
        Ct = "ease-in",
        b = {
            BEFORE_STEP_CHANGE: "BEFORE_STEP_CHANGE",
            ON_STEP_CHANGE: "ON_STEP_CHANGE",
            BEFORE_FORM_SUBMIT: "BEFORE_FORM_SUBMIT",
            ON_FORM_SUBMIT: "ON_FORM_SUBMIT",
            ON_INPUT_CHANGE: "ON_INPUT_CHANGE",
            ON_INPUT_KEYUP: "ON_INPUT_KEYUP"
        },
        D = "sf-react-hide",
        U = "sf-data",
        nt = "v2.1.13",
        Rt = "v2",
        rt = -9999,
        wt = () => {
            Element.prototype.checkVisibility || (console.log("Superfrom Pollyfill added for checkVisibility"), Element.prototype.checkVisibility = function(t = {
                checkOpacity: !0,
                checkVisibilityCSS: !0
            }) {
                const {
                    checkOpacity: n = !0,
                    checkVisibilityCSS: r = !0,
                    rootMargin: e = "0px",
                    threshold: i = 0
                } = t, o = window.getComputedStyle(this);
                if (r && (o.display === "none" || o.visibility === "hidden") || n && parseFloat(o.opacity) === 0) return !1;
                const s = this.getBoundingClientRect(),
                    a = e.split(" ").map(E => parseInt(E, 10) || 0),
                    [g, c, u, l] = a.length === 1 ? [a[0], a[0], a[0], a[0]] : a.length === 2 ? [a[0], a[1], a[0], a[1]] : a.length === 3 ? [a[0], a[1], a[2], a[1]] : a,
                    h = window.innerWidth || document.documentElement.clientWidth,
                    p = window.innerHeight || document.documentElement.clientHeight,
                    d = {
                        top: 0 - g,
                        right: h + c,
                        bottom: p + u,
                        left: 0 - l
                    };
                if (!(s.top < d.bottom && s.bottom > d.top && s.left < d.right && s.right > d.left)) return !1;
                if (i > 0) {
                    const E = Math.max(0, Math.min(s.right, d.right) - Math.max(s.left, d.left)),
                        m = Math.max(0, Math.min(s.bottom, d.bottom) - Math.max(s.top, d.top)),
                        A = E * m,
                        S = s.width * s.height;
                    if (S === 0 || A / S < i) return !1
                }
                return !0
            })
        },
        Lt = () => {
            let t = "";
            const n = "0123456789abcdef";
            for (let r = 0; r < 36; r++) r === 8 || r === 13 || r === 18 || r === 23 ? t += "-" : r === 14 ? t += "4" : r === 19 ? t += n.charAt(Math.floor(Math.random() * 4) + 8) : t += n.charAt(Math.floor(Math.random() * 16));
            return t
        },
        N = new Map,
        xt = (t, n) => (N.has(t) || N.set(t, new Set), N.get(t).add(n), () => {
            N.get(t).delete(n)
        }),
        Mt = (t, n = void 0) => {
            const r = [];
            return N.has(t) && Array.from(N.get(t).values()).forEach(i => {
                if (i && typeof i == "function") {
                    const o = i(n);
                    r.push(o)
                } else r.push(void 0)
            }), r
        },
        Ft = () => {
            const t = Lt();
            return {
                id: t,
                on: (i, o) => xt(`${t}_${i}`, o),
                emit: (i, o = void 0) => Mt(`${t}_${i}`, o),
                unRegisterAll: () => {
                    Array.from(N.keys()).forEach(i => {
                        i.startsWith(`${t}_`) && N.delete(i)
                    })
                }
            }
        },
        Pt = () => {
            if (!document.querySelector(`style[id="${f}-style"]`)) {
                var t = document.createElement("style");
                t.setAttribute("type", "text/css"), t.setAttribute("id", `${f}-style`), t.innerHTML = `.${D} { display: none !important; }`, document.getElementsByTagName("head")[0].appendChild(t)
            }
        },
        Dt = t => {
            const n = {};
            return new FormData(t).forEach((r, e) => {
                if (!Reflect.has(n, e)) {
                    n[e] = r;
                    return
                }
                Array.isArray(n[e]) || (n[e] = [n[e]]), n[e].push(r)
            }), n
        },
        Ut = ["background-color:#15181E;", "color:#fff;", "padding:4px 8px;", "border-radius:4px;"].join(" "),
        C = ["padding:4px 8px;", "border-radius:4px;"].join(" ");
    let V = 0;
    const Vt = (t, n) => {
            let r = [];
            n.formContainer.querySelectorAll(`[${$}]`).forEach(o => {
                n.formContainer.querySelector(`[name="${o.getAttribute($)}"],[${O}="${o.getAttribute($)}"]`) || r.push(o)
            });
            const i = `#${V} Debug Data (${n.formName||"Unnamed Form"})${n.formContainer.checkVisibility()?"":" \u26A0\uFE0F Hidden"}`;
            console.groupCollapsed(`%c${i}`, Ut), console.group("%cForm Data", C), console.log(t.data), console.groupEnd("Form Data"), console.log(`%cStep Count: ${t.stepCount}`, C), console.log(`%cProgress: ${t.progress}%`, C), console.group("%cScores", C), console.log(t.scores), console.groupEnd("Scores"), console.group("%cNavigation Stack", C), console.log(n.navigationStack.map(o => ({
                "Step Name": o.name
            }))), console.groupEnd("Navigation Stack"), r.length && (console.group("%cOrphan Error Elements", C), console.log("Total Orphan Errors", r.length), r.forEach((o, s) => {
                console.log(`#${s+1} Unable to locate input element associated with the error element having ${o.getAttribute($)}`), console.log(o)
            }), console.groupEnd("Orphan Error Elements")), console.groupEnd(i), V = V + 1
        },
        H = t => {
            switch (t.nodeName) {
                case "INPUT":
                    switch (t.type) {
                        case "hidden":
                            return "HIDDEN";
                        case "text":
                            return "TEXT";
                        case "number":
                            return "NUMBER";
                        case "email":
                            return "EMAIL";
                        case "password":
                            return "PASSWORD";
                        case "tel":
                            return "PHONE";
                        case "checkbox":
                            return "CHECKBOX";
                        case "radio":
                            return "RADIO";
                        case "range":
                            return "RANGE";
                        case "color":
                            return "COLOR";
                        case "search":
                            return "SEARCH";
                        case "date":
                            return "DATE";
                        case "month":
                            return "MONTH";
                        case "week":
                            return "WEEK";
                        case "time":
                            return "TIME";
                        case "datetime-local":
                            return "DATE_AND_TIME";
                        case "url":
                            return "URL";
                        case "file":
                            return "FILE";
                        case "reset":
                            return "RESET";
                        case "submit":
                            return "SUBMIT";
                        default:
                            return "GENERIC_INPUT"
                    }
                case "SELECT":
                    return "SELECT";
                case "TEXTAREA":
                    return "TEXTAREA";
                default:
                    if (t.hasAttribute(O)) return "CHECKBOX_GROUP"
            }
            return "UNKNOWN"
        },
        I = (t, n = !0) => {
            const r = t.replace(/^[a-zA-Z0-9]*\((.*)\)$/g, "$1");
            return n ? r.split(",").map(e => e.trim()) : r.trim()
        },
        ot = (t, n) => {
            try {
                if (t.nextElementSibling && (t.nextElementSibling.className.includes("error") || t.nextElementSibling.className.includes("invalid") || t.nextElementSibling.className.includes("fail")) && !n.includes(t.nextElementSibling)) return t.nextElementSibling
            } catch {
                console.log("Sibling error element is not valid element. Please, wrap your SVG or canvas element to a div.", t);
                return
            }
        },
        Ht = (t, n) => {
            try {
                if (t.previousElementSibling && (t.previousElementSibling.className.includes("error") || t.previousElementSibling.className.includes("invalid") || t.previousElementSibling.className.includes("fail")) && !n.includes(t.previousElementSibling)) return t.previousElementSibling
            } catch {
                console.error("Previous Sibling error element is not valid element. Please, wrap your SVG or canvas element to a div.", t);
                return
            }
        },
        Gt = (t, n) => {
            try {
                if (t.nextElementSibling && t.nextElementSibling.nextElementSibling && (t.nextElementSibling.nextElementSibling.className.includes("error") || t.nextElementSibling.nextElementSibling.className.includes("invalid") || t.nextElementSibling.nextElementSibling.className.includes("fail")) && !n.includes(t.nextElementSibling.nextElementSibling)) return t.nextElementSibling.nextElementSibling
            } catch {
                console.error("Sibling error element is not valid element. Please, wrap your SVG or canvas element to a div.", t);
                return
            }
        },
        Bt = (t, n) => {
            try {
                if (t.parentElement && (t.parentElement.hasAttribute(w) || t.className.includes(" sf-")) && !n.includes(t.parentElement)) return t.parentElement
            } catch {
                console.error("Parent error element is not valid element. Please, wrap your SVG or canvas element to a div.", t);
                return
            }
        },
        qt = t => /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t),
        Kt = t => {
            try {
                const n = new URL(t);
                return n.protocol === "http:" || n.protocol === "https:"
            } catch {
                return !1
            }
        },
        Xt = (t = "") => t.split(/\s+|\p{P}/u).filter(Boolean).length,
        Wt = (t, n, r, e, i) => {
            let o = "^";
            return n !== null && n > 0 ? o += `(?=.*\\d{${n},})` : n === 0 && (o += "(?!.*\\d)"), r !== null && r > 0 ? o += `(?=.*[a-z]{${r},})` : r === 0 && (o += "(?!.*[a-z])"), e !== null && e > 0 ? o += `(?=.*[A-Z]{${e},})` : e === 0 && (o += "(?!.*[A-Z])"), i !== null && i > 0 ? o += `(?=.*[!@#$%^&*()_+\\-=\\[\\]{};':"\\\\|,.<>\\/?]{${i},})` : i === 0 && (o += `(?!.*[!@#$%^&*()_+\\-=\\[\\]{};':"\\\\|,.<>\\/?])`), o += ".+$", new RegExp(o).test(t)
        },
        Yt = t => /^words\(([0-9]+(,[0-9]+)*)\)$/.test(t) ? "WORD" : /^length\(([0-9]+(,[0-9]+)*)\)$/.test(t) ? "LENGTH" : /^minmax\(([.0-9]+(,[.0-9]+)*)\)$/.test(t) ? "MINMAX" : /^checkbox\(([0-9]+(,[0-9]+)*)\)$/.test(t) ? "CHECKBOX" : /^hook\((.*)+\)$/.test(t) ? "CUSTOM_HOOK" : /^must\((([0-9]+|any)+,([0-9]+|any)+,([0-9]+|any)+,([0-9]+|any)+)\)$/.test(t) ? "MUST_HAVE" : "UNKNOWN",
        it = async (t, n, r, e, i) => {
            switch (t) {
                case "LENGTH":
                    return !0;
                case "MINMAX":
                    return !0;
                case "MUST_HAVE":
                    {
                        const o = I(n);
                        if (o.length === 4) {
                            const s = o.map(a => a === "any" ? null : isFinite(parseInt(a)) ? parseInt(a) : 0);
                            return Wt(r, ...s)
                        } else console.error(`Invalid must have instruction: ${n}`, i)
                    }
                    return !1;
                case "WORD":
                    {
                        const o = I(n),
                            s = Xt(r);
                        if (o.length) {
                            const a = o[0],
                                g = o[1];
                            if (o.length > 1) {
                                if (isFinite(parseInt(a)) && isFinite(parseInt(g))) return s >= parseInt(a) && s <= parseInt(g)
                            } else if (a && isFinite(parseInt(a))) return s >= parseInt(a)
                        }
                    }
                    return console.error(`Invalid word count instruction ${n}`, i), !1;
                case "CHECKBOX":
                    {
                        const o = I(n),
                            s = r;
                        if (o.length) {
                            const a = o[0],
                                g = o[1];
                            if (o.length > 1) {
                                if (isFinite(parseInt(a)) && isFinite(parseInt(g))) return s >= parseInt(a) && s <= parseInt(g)
                            } else if (a && isFinite(parseInt(a))) return s >= parseInt(a)
                        }
                        return console.error(`Invalid checkbox validation instruction ${n}`, i),
                        !1
                    }
                case "CUSTOM_HOOK":
                    {
                        const o = n.replace("hook(", "").replace(")", ""),
                            s = e.inputValidationHook.getHook(o);
                        return s ? await s({
                            data: e.getFormData(),
                            stepCount: e.navigationStack && e.navigationStack.length ? e.navigationStack[e.navigationStack.length - 1].index : 0,
                            progress: e.navigationStack && e.navigationStack.length ? e.navigationStack[e.navigationStack.length - 1].stepProgressValue : 0
                        }) === !0 : (console.error("No custom hook found", i), !1)
                    }
                case "UNKNOWN":
                default:
                    return console.error(`Invalid "${n}" validation instruction`, i), !1
            }
        },
        jt = t => {
            const n = [];
            return t.steps.forEach(e => {
                const i = Array.from(e.el.querySelectorAll("input, textarea, select"));
                Array.from(e.el.querySelectorAll(`[${O}]`)).forEach(o => {
                    i.push(o)
                }), i.forEach(o => {
                    const {
                        isValid: s,
                        onChange: a,
                        removeEventListener: g,
                        isRequired: c,
                        name: u,
                        type: l,
                        checkVisibility: h
                    } = Zt(o, e, t);
                    n.push({
                        name: u,
                        inputElement: o,
                        isValid: s,
                        removeEventListener: g,
                        onChange: a,
                        stepRef: e,
                        type: l,
                        isRequired: c,
                        checkVisibility: h
                    })
                })
            }), {
                inputs: n,
                validateAllInputsOnStep: e => new Promise((i, o) => {
                    const s = n.filter(a => a.stepRef.el === e.el);
                    Promise.all(s.map(a => a.isValid())).then(a => {
                        a.includes(!1) ? i(!1) : i(!0)
                    }).catch(o)
                })
            }
        },
        zt = (t, n) => {
            if (t.hasAttribute("name") && t.getAttribute("name").length > 0 || t.hasAttribute(O)) {
                const r = t.hasAttribute(O) ? t.getAttribute(O) : t.name,
                    e = Array.from(n.querySelectorAll(`[${$}="${r}"], [${$}="${r.replace("-"," ")}"]`));
                if (t.hasAttribute(w)) e.push(t);
                else if (t.classList && t.classList.length >= 3) {
                    let l = t.classList[t.classList.length - 2];
                    l && (l.includes("error") || l.includes("invalid") || l.includes("fail")) && (e.push(t), t.setAttribute(w, l))
                }
                const i = ot(t, e);
                i && e.push(i);
                const o = Ht(t, e);
                o && e.push(o);
                const s = Gt(t, e);
                s && e.push(s);
                const a = Bt(t, e);
                if (a && e.push(a), t.parentElement) {
                    const l = ot(t.parentElement, e);
                    l && e.push(l)
                }
                const g = e.map(l => {
                    if (l.hasAttribute(w)) {
                        let p = l.getAttribute(w);
                        return l.classList.remove(p), {
                            el: l,
                            type: "class",
                            className: p,
                            defaultDisplay: ""
                        }
                    } else if (l.className.includes(" sf-")) {
                        let p = "";
                        if (l.classList.forEach((d, y) => {
                                y !== 0 && d.includes("sf-") && (d.includes("error") || d.includes("invalid") || d.includes("fail")) && (p = d)
                            }), p) return {
                            el: l,
                            type: "class",
                            className: p,
                            defaultDisplay: ""
                        }
                    }
                    const h = l.hasAttribute("sf-error-set") ? l.getAttribute("sf-error-set") || "block" : getComputedStyle(l).display || "block";
                    return l.setAttribute("sf-error-set", h), l.style.display = "none", {
                        className: "",
                        type: "visibility",
                        el: l,
                        defaultDisplay: h === "none" ? "block" : h
                    }
                });
                return {
                    showError: () => {
                        g.forEach(l => {
                            l.type === "class" ? l.el.classList.add(l.className) : (l.el.style.display = l.defaultDisplay, l.el.style.opacity = "0", requestAnimationFrame(() => {
                                l.el.style.opacity = "1"
                            }))
                        })
                    },
                    hideError: () => {
                        g.forEach(l => {
                            if (l.type === "class") l.el.classList.remove(l.className);
                            else {
                                let h = 0;
                                try {
                                    h = parseInt(getComputedStyle(l.el).transitionDuration.replace("ms", "").replace("s", "")) * 1e3
                                } catch {}
                                l.el.style.opacity = "0", setTimeout(() => {
                                    l.el.style.display = "none"
                                }, h)
                            }
                        })
                    }
                }
            }
            return {
                showError() {},
                hideError() {}
            }
        },
        Zt = (t, n, r) => {
            const e = r.form,
                i = H(t),
                o = t.hasAttribute("required");
            o && (t.removeAttribute("required"), i === "RADIO" && t.setAttribute(`${f}-radio-required`, "required"));
            const s = zt(t, e),
                a = t.hasAttribute(z),
                g = (t.getAttribute(z) || "").replace(/ /g, ""),
                c = a ? Yt(g) : "";
            if (c === "LENGTH") {
                const A = I(g);
                if (A.length) {
                    const S = A[0],
                        v = A[1];
                    S && t.setAttribute("minlength", S), v && t.setAttribute("maxlength", v)
                }
            }
            if (c === "MINMAX") {
                const A = I(g);
                if (A.length) {
                    const S = A[0],
                        v = A[1];
                    S && t.setAttribute("min", S), v && t.setAttribute("max", v)
                }
            }
            const u = () => t.checkVisibility(),
                l = async () => {
                    if (!u()) return !0;
                    switch (i) {
                        case "RESET":
                        case "HIDDEN":
                        case "SUBMIT":
                        case "UNKNOWN":
                            return !0;
                        case "CHECKBOX_GROUP":
                            {
                                let A = !0;
                                if (a && (c === "CHECKBOX" || c === "CUSTOM_HOOK")) {
                                    const S = Array.from(t.querySelectorAll('input[type="checkbox"]')).filter(_ => _.checked).length;
                                    A = await it(c, g, S, r, t)
                                }
                                return A ? (s.hideError(), !0) : (s.showError(), !1)
                            }
                        case "RADIO":
                            {
                                let A = !0;
                                return n.el.querySelectorAll(`input[type="radio"][name=${t.name}][${f}-radio-required]`).length === 0 ? !0 : (A = Array.from(n.el.querySelectorAll(`input[type="radio"][name=${t.name}]`)).filter(_ => _.checked).length > 0, A ? (s.hideError(), !0) : (s.showError(), !1))
                            }
                        default:
                            {
                                const A = r.getFormData()[t.getAttribute("name")],
                                    S = t.checkValidity();
                                let _ = o ? !!(A !== null && A) : !0;
                                return o && _ && i === "EMAIL" && (_ = qt(A)),
                                o && _ && i === "URL" && (_ = Kt(A)),
                                o && _ && !S && (_ = !1),
                                _ && a && (_ = await it(c, g, A, r, t)),
                                _ ? (s.hideError(), !0) : (s.showError(), !1)
                            }
                    }
                },
                h = () => {
                    t.removeEventListener("blur", l), t.addEventListener("blur", l)
                },
                p = () => {
                    requestAnimationFrame(() => {
                        r.callbackStore.emit(b.ON_INPUT_CHANGE, {
                            data: r.getFormData(),
                            stepCount: r.getCurrentStep() ? r.getCurrentStep().index : 0,
                            progress: r.getCurrentStep() ? r.getCurrentStep().stepProgressValue : 0,
                            scores: r.scoreManager.getAllScores()
                        })
                    })
                };
            let d = -1,
                y = !0;
            const E = () => {
                clearTimeout(d), y && (p(), y = !1), setTimeout(() => {
                    y = !0
                }, 50)
            };
            switch (i) {
                case "CHECKBOX_GROUP":
                case "RESET":
                case "HIDDEN":
                case "SUBMIT":
                case "UNKNOWN":
                    break;
                case "RANGE":
                    t.addEventListener("input", E), t.addEventListener("change", p);
                    break;
                default:
                    t.addEventListener("focus", h), t.addEventListener("change", p)
            }
            return {
                onChange: p,
                isValid: l,
                removeEventListener: () => {
                    t.removeEventListener("blur", l), t.removeEventListener("focus", h), t.removeEventListener("change", p), t.removeEventListener("input", E)
                },
                name: t.getAttribute("name") || "",
                type: i,
                isRequired: o,
                checkVisibility: u
            }
        },
        Qt = () => {
            const t = new Map;
            return {
                registerHook: (e, i) => (t.set(e, i), () => {
                    t.delete(e)
                }),
                getHook: e => {
                    if (t.has(e)) return t.get(e)
                }
            }
        },
        st = t => t.map(n => n.name),
        at = (t, n) => {
            if (!/^[0-9a-zA-Z]{1}$/.test(t)) return -1;
            const e = t.toLowerCase().charCodeAt(0);
            if (e >= 97 && e <= 122 && n === "letter") return e - 97;
            if (t >= "0" && t <= "9" && n === "number") {
                const i = parseInt(t, 10);
                return i === 0 ? 9 : i - 1
            } else return -1
        },
        G = (t, n) => t.index === n.getCurrentStep().index,
        Jt = t => t.key === "Backspace" && t.target && t.target.nodeName && t.target.nodeName !== "TEXTAREA" && t.target.nodeName !== "INPUT",
        te = t => t.key === "Enter" && t.target && t.target.nodeName && t.target.nodeName !== "TEXTAREA",
        ct = (t, n) => {
            if (typeof t == "number") return "INDEX";
            if (typeof t == "string") {
                if (/^[0-9]+$/.test(t)) return "STR_INDEX";
                if (t.startsWith("hook(")) return "CUSTOM_CODE_LOGIC";
                if (t === "logic()") return "ATTR_LOGIC";
                if (t === "next") return "GO_NEXT";
                if (t === "prev" || t === "previous" || t === "back") return "GO_PREV";
                if ((t.startsWith("+") || t.startsWith("-")) && isFinite(parseInt(t))) return "JUMP_VIA_INDEX";
                if (n.includes(t)) return "JUMP_VIA_STEP_NAME";
                if (t === "submit") return "SUBMIT"
            }
            return "UNKNOWN"
        },
        ee = t => t.querySelectorAll('[type="radio"]').length > 0,
        ne = (t, n) => {
            const r = Array.from(t.querySelectorAll('[type="radio"]'));
            if (t.hasAttribute(T)) {
                const e = t.getAttribute(T),
                    i = ct(e, n);
                r.forEach(o => {
                    if (o.setAttribute(T, e), i === "ATTR_LOGIC") {
                        for (let s = 0; s < Y; s++) {
                            const a = `${X}${s===0?"":`-${s}`}`,
                                g = `${W}${s===0?"":`-${s}`}`;
                            o.removeAttribute(a), o.removeAttribute(g), t.hasAttribute(a) && t.hasAttribute(g) && (o.setAttribute(a, t.getAttribute(a)), o.setAttribute(g, t.getAttribute(g)))
                        }
                        o.setAttribute(x, t.getAttribute(x))
                    }
                }), t.removeAttribute(T)
            }
            if (t.hasAttribute(k)) {
                const e = t.getAttribute(k);
                r.forEach(i => {
                    i.setAttribute(k, e)
                }), t.removeAttribute(k)
            }
            return r.forEach(e => {
                e.setAttribute(L, "false")
            }), r
        },
        re = t => {
            const n = st(t.steps),
                r = [];
            t.steps.forEach(s => {
                const a = Array.from(s.el.querySelectorAll(`:scope [${T}],:scope input[type="submit"]`)).map(u => ee(u) ? ne(u, n) : u).flat(),
                    g = ie(s, t),
                    c = se(s, t);
                a.forEach(u => {
                    const l = lt(u, s, t);
                    r.push({
                        gotoEl: u,
                        stepRef: s,
                        partOfStep: !0,
                        removeEventListener: () => {
                            g(), c(), l()
                        }
                    })
                })
            });
            const e = r.map(s => s.gotoEl);
            return Array.from(t.formContainer.querySelectorAll(`:scope [${T}]`)).filter(s => !e.includes(s)).forEach(s => {
                const a = lt(s, null, t);
                r.push({
                    gotoEl: s,
                    stepRef: null,
                    partOfStep: !1,
                    removeEventListener: () => {
                        a()
                    }
                })
            }), Array.from(t.formContainer.querySelectorAll(`[${St}]`)).forEach(s => {
                s.addEventListener("click", () => {
                    if (t.isSubmitted) {
                        t.isSubmitted = !1;
                        const a = t.callbackStore.on(b.ON_STEP_CHANGE, () => {
                            a(), t.navigationStack = [t.navigationStack.reverse()[0]]
                        });
                        t.viewManager.goto(rt), t.form.reset();
                        const g = t.formContainer.querySelector(".w-form-done");
                        g && (g.style.display = "none"), t.form.style.display = t.defaultFormDisplay.toString()
                    }
                })
            }), r
        },
        lt = (t, n, r) => {
            t.hasAttribute("type") && t.getAttribute("type") === "submit" && t.setAttribute(T, "submit");
            const e = () => {
                    if (!n) {
                        const s = t.getAttribute(T),
                            a = t.hasAttribute(bt);
                        r.viewManager.goto(s, t, a ? !1 : n === null);
                        return
                    }
                    if (G(n, r)) {
                        const s = t.getAttribute(T);
                        s && r.viewManager.goto(s, t)
                    }
                },
                i = s => {
                    te(s) && G(n, r) && (s.preventDefault(), s.stopImmediatePropagation(), s.stopPropagation(), requestAnimationFrame(() => {
                        e()
                    }))
                },
                o = s => {
                    Jt(s) && G(n, r) && (s.preventDefault(), s.stopImmediatePropagation(), s.stopPropagation(), requestAnimationFrame(() => {
                        e()
                    }))
                };
            return n && ((t.getAttribute(L) === "" || t.getAttribute(L) === "true" || t.getAttribute(T) === "next" && t.getAttribute(L) !== "false") && document.addEventListener("keyup", i), (t.getAttribute(F) === "" || t.getAttribute(F) === "true" || ["prev", "previous", "back"].includes(t.getAttribute(T)) && t.getAttribute(F) !== "false") && document.addEventListener("keyup", o)), t.addEventListener("click", e), () => {
                t.removeEventListener("click", e), t.removeEventListener("keyup", i), t.removeEventListener("keyup", o)
            }
        },
        oe = () => {
            const t = new Map;
            return {
                registerHook: (e, i) => (t.set(e, i), () => {
                    t.delete(e)
                }),
                getHook: e => {
                    if (t.has(e)) return t.get(e)
                }
            }
        },
        ie = (t, n) => {
            const r = t.el.getAttribute(It) || "number",
                e = t.el.querySelector("input[type=radio]") !== null;
            if (r === "none" || e === !1) return;
            const i = o => {
                if (t.index !== n.getCurrentStep().index || o.target && o.target.tagName === "INPUT") return;
                const s = at(o.key, r),
                    a = Array.from(t.el.querySelectorAll('input[type="radio"]')).filter(g => g.checkVisibility())[s];
                a && a.click && requestAnimationFrame(() => {
                    a.click()
                })
            };
            return document.addEventListener("keyup", i), () => {
                document.removeEventListener("keyup", i)
            }
        },
        se = (t, n) => {
            const r = t.el.getAttribute(Tt) || "number",
                e = t.el.querySelector("input[type=checkbox]") !== null;
            if (r === "none" || e === !1) return;
            const i = o => {
                if (t.index !== n.getCurrentStep().index || o.target && o.target.tagName === "INPUT") return;
                const s = at(o.key, r),
                    a = Array.from(t.el.querySelectorAll('input[type="checkbox"]')).filter(g => g.checkVisibility())[s];
                a && a.click && requestAnimationFrame(() => {
                    a.click()
                })
            };
            return document.addEventListener("keyup", i), () => {
                document.removeEventListener("keyup", i)
            }
        },
        ae = t => {
            const n = t.formContainer.querySelectorAll(`[${j}="progress-bar"]`),
                r = t.formContainer.querySelectorAll(`[${j}="progress-text"]`),
                e = s => {
                    n.length && n.forEach(a => {
                        a.style.width = `${Math.round(s)}%`
                    }), r.length && r.forEach(a => {
                        a.textContent = `${Math.round(s)}%`
                    })
                },
                i = t.callbackStore.on(b.ON_STEP_CHANGE, ({
                    progress: s
                }) => {
                    e(s)
                }),
                o = () => {
                    i()
                };
            return e(0), {
                unregister: o
            }
        },
        ce = t => {
            const n = [];
            for (let r = 0; r < vt; r++) {
                const e = `${Z}${r===0?"":`-${r}`}`;
                t.hasAttribute(e) && n.push(t.getAttribute(e) || "")
            }
            return n.filter(r => (r.length === 0 && console.warn(`Invalid react instruction ${r}`, t), r.length))
        },
        le = t => /^text\((.*)+\)$/.test(t) ? "SET_TEXT" : /^visibility\((.*)+\)$/.test(t) ? "VISIBILITY" : /^class\((.*)+\)$/.test(t) ? "ADD_OR_REMOVE_CLASS" : /^value\((.*)+\)$/.test(t) ? "SET_VALUE" : /^attr\((.*)+\)$/.test(t) ? "SET_ATTR" : /^disable\((.*)+\)$/.test(t) ? "TOGGLE_DISABLE" : "UNKNOWN",
        ue = t => {
            const n = Array.from(t.formContainer.querySelectorAll(`[${Z}]`)).map(e => ce(e).map(s => {
                const a = le(s);
                return a === "UNKNOWN" && console.error(`Inactivate reactivity attribute ${s}`), {
                    el: e,
                    type: a,
                    instruction: s
                }
            })).flat().filter(e => e.type !== "UNKNOWN").map(e => {
                let i = () => {};
                switch (e.type) {
                    case "SET_TEXT":
                        {
                            const c = I(e.instruction, !1);i = new Function("$f,$s,$p,$v", `return ${c}`)
                        }
                        break;
                    case "SET_VALUE":
                        {
                            const c = I(e.instruction, !1);i = new Function("$f,$s,$p,$v", `return ${c}`)
                        }
                        break;
                    case "TOGGLE_DISABLE":
                        {
                            const c = I(e.instruction, !1);i = new Function("$f,$s,$p,$v", `return !!${c}`)
                        }
                        break;
                    case "VISIBILITY":
                        {
                            const c = I(e.instruction, !1);i = new Function("$f,$s,$p,$v", `return !!(${c});`)
                        }
                        break;
                    case "ADD_OR_REMOVE_CLASS":
                        try {
                            const c = I(e.instruction),
                                u = c.pop().trim(),
                                l = c.join(",");
                            i = new Function("$f,$s,$p,$v", `return {isValid:!!(${l}),className:"${u}"};`)
                        } catch (c) {
                            console.error(`Failed to execute reactive instruction ${e.instruction}`), console.error(c)
                        }
                        break;
                    case "SET_ATTR":
                        try {
                            const c = I(e.instruction),
                                u = c.pop().trim(),
                                l = c.join(",");
                            i = new Function("$f,$s,$p,$v", `return {value:(${l}),attr:"${u}"};`)
                        } catch (c) {
                            console.error(`Failed to execute reactive instruction ${e.instruction}`), console.error(c)
                        }
                        break
                }
                const o = c => {
                        const {
                            data: u,
                            progress: l,
                            stepCount: h,
                            scores: p
                        } = c;
                        switch (e.type) {
                            case "SET_TEXT":
                                try {
                                    const d = i(u, h, l, p);
                                    e.el.textContent = d
                                } catch (d) {
                                    console.error(`Failed to execute reactive instruction ${e.instruction}`), console.error(d)
                                }
                                break;
                            case "SET_VALUE":
                                try {
                                    const d = i(u, h, l, p);
                                    e.el.setAttribute("value", d), e.el.value = d
                                } catch (d) {
                                    console.error(`Failed to execute reactive instruction ${e.instruction}`), console.error(d)
                                }
                                break;
                            case "TOGGLE_DISABLE":
                                try {
                                    i(u, h, l, p) ? e.el.setAttribute("disabled", "disabled") : e.el.removeAttribute("disabled")
                                } catch (d) {
                                    console.error(`Failed to execute reactive instruction ${e.instruction}`), console.error(d)
                                }
                                break;
                            case "VISIBILITY":
                                try {
                                    i(u, h, l, p) ? e.el.classList.remove(D) : e.el.classList.add(D)
                                } catch (d) {
                                    console.error(`Failed to execute reactive instruction ${e.instruction}`), console.error(d)
                                }
                                break;
                            case "ADD_OR_REMOVE_CLASS":
                                try {
                                    const d = i(u, h, l, p);
                                    if (d) {
                                        const {
                                            isValid: y,
                                            className: E
                                        } = d;
                                        y ? e.el.classList.add(E) : e.el.classList.remove(E)
                                    }
                                } catch (d) {
                                    console.error(`Failed to execute reactive instruction ${e.instruction}`), console.error(d)
                                }
                                break;
                            case "SET_ATTR":
                                try {
                                    const d = i(u, h, l, p);
                                    if (d) {
                                        const {
                                            value: y,
                                            attr: E
                                        } = d;
                                        e.el.setAttribute(E, y)
                                    }
                                } catch (d) {
                                    console.error(`Failed to execute reactive instruction ${e.instruction}`), console.error(d)
                                }
                                break
                        }
                    },
                    s = t.callbackStore.on(b.ON_STEP_CHANGE, o),
                    a = t.callbackStore.on(b.ON_INPUT_CHANGE, o),
                    g = () => {
                        o({
                            data: t.getFormData(),
                            stepCount: t.getCurrentStep() ? t.getCurrentStep().index : 0,
                            progress: t.getCurrentStep() ? t.getCurrentStep().stepProgressValue : 0,
                            scores: t.scoreManager.getAllScores()
                        })
                    };
                return t.form.addEventListener("keyup", g), () => {
                    s(), a(), t.form.removeEventListener("keyup", g)
                }
            });
            return {
                unSubAllEvents: () => {
                    n.forEach(e => {
                        e()
                    })
                }
            }
        },
        de = t => {
            const n = [];
            for (let r = 0; r < Nt; r++) {
                const e = `${J}${r===0?"":`-${r}`}`;
                t.hasAttribute(e) && n.push(t.getAttribute(e) || "")
            }
            return n.filter(r => (r.length === 0 && console.warn(`Invalid score calc instruction ${r}`, t), r.length))
        },
        ge = t => /^(add|minus|multiply|divide)\((.*),([a-zA-Z ]+[0-9]*),([0-9 ]+)\)$/.test(t),
        fe = t => {
            const n = t.match(/^(add|minus|multiply|divide)\((.*),([a-zA-Z ]+[0-9]*),([0-9 ]+)\)$/);
            return n ? {
                operation: n[1],
                answer: n[2],
                variable: n[3].trim(),
                number: parseInt(n[4].trim())
            } : null
        },
        he = t => {
            const n = Object.entries(t);
            return n.length === 0 ? [] : (n.sort((e, i) => i[1] - e[1]), n.map(e => e[0]))
        },
        Ee = (t, n) => {
            const r = H(t);
            try {
                switch (r) {
                    case "TEXT":
                    case "TEXTAREA":
                    case "EMAIL":
                    case "DATE":
                    case "DATE_AND_TIME":
                    case "COLOR":
                    case "MONTH":
                    case "PASSWORD":
                    case "PHONE":
                    case "SEARCH":
                    case "SELECT":
                    case "TIME":
                    case "URL":
                    case "WEEK":
                        return t.value === "" && n.length ? !1 : n.startsWith("!") ? t.value !== n.substring(1) : t.value === n;
                    case "CHECKBOX":
                        return t.checked ? n === "checked" : n !== "checked";
                    case "RADIO":
                        return t.checked ? n === "checked" : n !== "checked";
                    case "NUMBER":
                        return parseFloat(t.value) === parseFloat(n);
                    case "RANGE":
                        return parseFloat(t.value) === parseFloat(n);
                    default:
                        return !1
                }
            } catch (e) {
                return console.error(`Invalid answer format for score : ${n}`), console.error(e), !1
            }
        },
        Ae = t => {
            const n = t.formContainer.hasAttribute(Q);
            let r = {};
            n && t.formContainer.getAttribute(Q).split(",").forEach(s => {
                /^([a-zA-Z]+([0-9]*))$/.test(s) ? r[s] = 0 : console.error(`Invalid score variable format : ${s}`)
            });
            const e = () => {
                const o = { ...r
                    },
                    s = [];
                t.navigationStack.forEach(c => {
                    s.includes(c) || s.push(c)
                }), t.inputManager.inputs.filter(c => s.includes(c.stepRef)).filter(c => c.inputElement.hasAttribute(J)).map(c => ({
                    input: c,
                    index: s.indexOf(c.stepRef)
                })).sort((c, u) => c.index - u.index).forEach(({
                    input: c
                }) => {
                    de(c.inputElement).forEach(l => {
                        if (ge(l)) {
                            const h = fe(l);
                            if (Ee(c.inputElement, h.answer) && h.variable in o) switch (h.operation) {
                                case "add":
                                    o[h.variable] = o[h.variable] + h.number;
                                    break;
                                case "minus":
                                    o[h.variable] = o[h.variable] - h.number;
                                    break;
                                case "multiply":
                                    o[h.variable] = o[h.variable] * h.number;
                                    break;
                                case "divide":
                                    o[h.variable] = o[h.variable] / h.number;
                                    break;
                                default:
                                    console.error(`Invalid score instruction ${l}`);
                                    break
                            }
                        } else console.error(`Invalid score instruction ${l}`)
                    })
                });
                const g = he(o);
                return o._rank = g, o
            };
            return {
                getAllScores: () => e()
            }
        },
        pe = (t, n) => {
            const r = Array.from(t.querySelectorAll(`:scope [${K}]`)).filter(i => getComputedStyle(i).display !== "none");
            return r.map((i, o) => {
                const s = getComputedStyle(i).display;
                return n || (i.style.display = "none"), {
                    name: i.getAttribute(K),
                    defaultDisplay: s || "block",
                    stepProgressValue: Math.round(parseFloat(i.getAttribute(At) || `${(o+1)/r.length*100}`)),
                    stepCountValue: parseInt(i.getAttribute(pt) || `${o+1}`),
                    nextStepDelay: i.hasAttribute(k) ? parseInt(i.getAttribute(k) || i.getAttribute(ft) || "0") : 0,
                    index: o,
                    el: i
                }
            })
        },
        ut = () => {
            let t = {};
            if (localStorage.getItem(U)) try {
                t = JSON.parse(localStorage.getItem(U))
            } catch (n) {
                console.log("Unable to parse saved form data"), console.error(n)
            }
            return t
        },
        be = () => {
            let t = {};
            var n = location.search.substring(1);
            if (n) try {
                t = JSON.parse('{"' + n.replace(/&/g, '","').replace(/=/g, '":"') + '"}', function(r, e) {
                    return r === "" ? e : decodeURIComponent(decodeURIComponent(e))
                })
            } catch (r) {
                console.log("Unable to parse saved form url"), console.error(r)
            }
            return t
        },
        dt = (t, n) => {
            const r = ut();
            localStorage.setItem(U, JSON.stringify({ ...r,
                [t]: n
            }))
        },
        Se = t => {
            const n = t.formContainer.hasAttribute(ht),
                r = t.formContainer.hasAttribute(Et),
                e = () => {
                    const c = t.getFormData();
                    dt(t.formName, c)
                },
                i = () => {
                    const c = new URLSearchParams,
                        u = t.getFormData();
                    if (c.append(`${f}_form`, t.formName), c.append(q, "true"), Object.keys(u).forEach(l => {
                            c.append(encodeURIComponent(l), encodeURIComponent(u[l]))
                        }), history.pushState) {
                        let l = `${window.location.protocol}//${window.location.host}${window.location.pathname}?${c.toString()}`;
                        window.history.replaceState({
                            path: l
                        }, "", l)
                    }
                },
                o = () => {
                    if (dt(t.formName, {}), history.pushState) {
                        let c = `${window.location.protocol}//${window.location.host}${window.location.pathname}`;
                        window.history.replaceState({
                            path: c
                        }, "", c)
                    }
                },
                s = (c, u) => {
                    Object.keys(u).forEach(l => {
                        const h = c.querySelector(`[name="${l}"]`);
                        if (h) {
                            const p = H(h);
                            try {
                                switch (p) {
                                    case "TEXT":
                                    case "TEXTAREA":
                                    case "COLOR":
                                    case "DATE":
                                    case "DATE_AND_TIME":
                                    case "EMAIL":
                                    case "MONTH":
                                    case "NUMBER":
                                    case "PASSWORD":
                                    case "PHONE":
                                    case "RANGE":
                                    case "SEARCH":
                                    case "SELECT":
                                    case "TIME":
                                    case "URL":
                                    case "WEEK":
                                        h.value = u[l];
                                        break;
                                    case "CHECKBOX":
                                        h.click();
                                        break;
                                    case "RADIO":
                                        {
                                            const d = c.querySelector(`[name="${l}"][value="${u[l]}"]`);d && d.previousElementSibling && d.previousElementSibling.className.includes("w-radio-input") && d.previousElementSibling.classList.add("w--redirected-checked"),
                                            d && d.click()
                                        }
                                        break
                                }
                            } catch (d) {
                                console.error(`Unable to set data for element ${l}`), console.error(d)
                            }
                        }
                    })
                };
            let a = [];
            const g = be();
            if (r || q in g) try {
                if (`${f}_form` in g && g[`${f}_form`] === encodeURIComponent(t.formName)) {
                    const c = t.form,
                        {
                            [`${f}_form`]: u,
                            ...l
                        } = g;
                    s(c, l)
                }
                r && (a.push(t.callbackStore.on(b.ON_INPUT_CHANGE, i)), a.push(t.callbackStore.on(b.ON_INPUT_KEYUP, i)), a.push(t.callbackStore.on(b.ON_STEP_CHANGE, i)))
            } catch (c) {
                console.log("Unable to load data from query parameter"), console.error(c)
            }
            if (n) {
                const c = ut();
                if (t.formName in c) {
                    const u = c[t.formName],
                        l = t.form;
                    s(l, u)
                }
                a.push(t.callbackStore.on(b.ON_INPUT_CHANGE, e)), a.push(t.callbackStore.on(b.ON_INPUT_KEYUP, e)), a.push(t.callbackStore.on(b.ON_STEP_CHANGE, e))
            }
            return a.push(t.callbackStore.on(b.ON_FORM_SUBMIT, o)), {
                unSubscribe() {
                    a.forEach(c => c())
                }
            }
        },
        me = (t, n, r, e) => {
            const i = `all ${n}ms ${r}`;
            return new Promise(o => {
                if (!e) {
                    o();
                    return
                }
                let s = 0;
                const a = () => {
                    s = s + 1, s >= 2 && (e.el.style.display = "none", e.el.removeEventListener("transitionend", a), o())
                };
                switch (n === 0 && requestAnimationFrame(() => {
                    a()
                }), t) {
                    case "fade":
                        s = 1, e.el.style.transition = i, e.el.addEventListener("transitionend", a), requestAnimationFrame(() => {
                            e.el.style.opacity = "0"
                        });
                        break;
                    case "slide-top":
                        e.el.style.transition = i, e.el.addEventListener("transitionend", a), requestAnimationFrame(() => {
                            e.el.style.transform = "translateY(100px)", e.el.style.opacity = "0"
                        });
                        break;
                    case "slide-left":
                        e.el.style.transition = i, e.el.addEventListener("transitionend", a), requestAnimationFrame(() => {
                            e.el.style.transform = "translateX(100px)", e.el.style.opacity = "0"
                        });
                        break;
                    case "slide-bottom":
                        e.el.style.transition = i, e.el.addEventListener("transitionend", a), requestAnimationFrame(() => {
                            e.el.style.transform = "translateY(-100px)", e.el.style.opacity = "0"
                        });
                        break;
                    case "slide-right":
                        e.el.style.transition = i, requestAnimationFrame(() => {
                            e.el.addEventListener("transitionend", a), e.el.style.transform = "translateX(-100px)", e.el.style.opacity = "0"
                        });
                        break;
                    case "none":
                    default:
                        e.el.style.display = "none", o();
                        break
                }
            })
        },
        ye = (t, n, r, e) => {
            const i = `all ${n}ms ${r}`;
            return new Promise(o => {
                if (!e) {
                    o();
                    return
                }
                switch (e.el.style.transition = "", t) {
                    case "fade":
                        e.el.style.opacity = "0", e.el.style.display = e.defaultDisplay, e.el.style.transition = i, requestAnimationFrame(() => {
                            e.el.style.opacity = "1"
                        }), o();
                        break;
                    case "slide-top":
                        e.el.style.opacity = "0", e.el.style.transform = "translateY(-100px)", e.el.style.display = e.defaultDisplay, e.el.style.transition = i, requestAnimationFrame(() => {
                            e.el.style.transform = "translateY(0px)", e.el.style.opacity = "1"
                        }), o();
                        break;
                    case "slide-left":
                        e.el.style.opacity = "0", e.el.style.transform = "translateX(-100px)", e.el.style.display = e.defaultDisplay, e.el.style.transition = i, requestAnimationFrame(() => {
                            e.el.style.transform = "translateX(0px)", e.el.style.opacity = "1"
                        }), o();
                        break;
                    case "slide-bottom":
                        e.el.style.opacity = "0", e.el.style.transform = "translateY(100px)", e.el.style.display = e.defaultDisplay, e.el.style.transition = i, requestAnimationFrame(() => {
                            e.el.style.transform = "translateX(0px)", e.el.style.opacity = "1"
                        }), o();
                        break;
                    case "slide-right":
                        e.el.style.opacity = "0", e.el.style.transform = "translateX(100px)", e.el.style.display = e.defaultDisplay, e.el.style.transition = i, requestAnimationFrame(() => {
                            e.el.style.transform = "translateX(0px)", e.el.style.opacity = "1"
                        }), o();
                        break;
                    case "none":
                    default:
                        e.el.style.display = e.defaultDisplay, o();
                        break
                }
            })
        },
        _e = (t, n, r, e, i) => new Promise((o, s) => {
            me(t, n, r, e).then(() => {
                requestAnimationFrame(() => {
                    ye(t, n, r, i).then(() => {
                        o()
                    }).catch(s)
                })
            }).catch(s)
        }),
        Te = t => {
            const n = [];
            for (let r = 0; r < Y; r++) {
                const e = `${X}${r===0?"":`-${r}`}`,
                    i = `${W}${r===0?"":`-${r}`}`;
                t.hasAttribute(e) && t.hasAttribute(i) && n.push({
                    logic: t.getAttribute(e) || "",
                    step: t.getAttribute(i) || ""
                })
            }
            return n.filter(r => ((r.logic.length === 0 || r.step.length === 0) && console.warn(`Invalid goto logic instruction ${r.logic}=${r.step}`, t), r.logic.length && r.step.length))
        };

    function Ie(t, n, r, e) {
        let i = "";
        return t.forEach(o => {
            i.length === 0 && new Function("$f,$s,$p,$v", `return !!(${o.logic});`)(r.getFormData(), e ? e.index : 0, e ? e.stepProgressValue : 0, r.scoreManager.getAllScores()) && (i = o.step)
        }), i.length ? i : n
    }
    const ve = t => {
            const n = st(t.steps),
                r = (e, i, o = !1) => {
                    let s = e;
                    const a = s === rt;
                    if (a && (s = 0), t.isSubmitted) {
                        console.error("Form already submitted please try resetting the form");
                        return
                    }
                    const g = ct(s, n);
                    let c = t.getCurrentStep(),
                        u = -1,
                        l = !0,
                        h = (c ? c.nextStepDelay : 0) || 0;
                    switch (g) {
                        case "GO_NEXT":
                            c && t.steps[c.index + 1] && (u = t.steps[c.index + 1].index);
                            break;
                        case "GO_PREV":
                            t.navigationStack.length > 1 && (u = t.navigationStack[t.navigationStack.length - 2].index, h = 0, l = !1);
                            break;
                        case "INDEX":
                            s < t.steps.length && s >= 0 && (u = s);
                            break;
                        case "STR_INDEX":
                            parseInt(s) < t.steps.length && parseInt(s) >= 0 && (u = parseInt(s));
                            break;
                        case "JUMP_VIA_INDEX":
                            {
                                const E = c ? c.index + parseInt(s) : parseInt(s);E >= 0 && E < t.steps.length && (u = t.steps[E].index)
                            }
                            break;
                        case "JUMP_VIA_STEP_NAME":
                            {
                                const E = n.indexOf(s);E >= 0 && (u = E)
                            }
                            break;
                        case "ATTR_LOGIC":
                            try {
                                const E = i.hasAttribute(x),
                                    m = i.getAttribute(x) || "";
                                if (E && m.length) {
                                    const A = n.indexOf(m);
                                    if (!(A >= 0)) {
                                        console.error(`Default step for logic is not valid, could not locate ${m} step`);
                                        return
                                    }
                                    const S = Te(i),
                                        v = Ie(S, A, t, c);
                                    r(v, i, o)
                                } else console.error("Please add default goto step name", i)
                            } catch (E) {
                                console.error("Invalid goto logic instruction", i), console.error(E)
                            }
                            break;
                        case "CUSTOM_CODE_LOGIC":
                            {
                                const E = s.replace("hook(", "").replace(")", ""),
                                    m = t.navigationHook.getHook(E);
                                if (m) Promise.all([m({
                                    data: t.getFormData(),
                                    stepCount: c ? c.index : 0,
                                    progress: c ? c.stepProgressValue : 0,
                                    scores: t.scoreManager.getAllScores()
                                })]).then(([A]) => {
                                    r(A, i, o)
                                }).catch(console.error);
                                else {
                                    console.error("No custom hook found", i);
                                    return
                                }
                            }
                            break;
                        case "SUBMIT":
                            u = c.index || 0;
                            break;
                        case "UNKNOWN":
                        default:
                            throw new Error(`Goto Error: ${s} instruction is invalid or not found`)
                    }
                    if (g === "CUSTOM_CODE_LOGIC" || g === "ATTR_LOGIC") return;
                    if (u < 0 || u >= t.steps.length) throw new Error(`Invalid ${s} goto instruction or not found`);
                    if (o && !(t.navigationStack.filter(m => m.index === t.steps[u].index).length > 0) || c && c.index === u && g !== "SUBMIT") return;
                    const p = t.navigationStack.filter(E => E === t.steps[u]).length > 0,
                        d = c;
                    if (p && d && o) {
                        let E = !1;
                        for (; !E;)
                            if (t.navigationStack.length) {
                                const m = t.navigationStack.pop();
                                m && m.index === u && (E = !0)
                            } else E = !0;
                        c = d
                    }
                    const y = () => {
                        let E = t.animation.type,
                            m = a ? 0 : t.animation.duration,
                            A = t.animation.ease;
                        t.callbackStore.emit(b.BEFORE_STEP_CHANGE, {
                            data: t.getFormData(),
                            stepCount: c ? c.index : 0,
                            progress: c ? c.stepProgressValue : 0,
                            scores: t.scoreManager.getAllScores()
                        }), l ? t.navigationStack.push(t.steps[u]) : (E = $t[E] || P, t.navigationStack.pop());
                        const S = () => {
                            requestAnimationFrame(() => {
                                t.callbackStore.emit(b.ON_STEP_CHANGE, {
                                    data: t.getFormData(),
                                    stepCount: t.steps[u] ? t.steps[u].index : 0,
                                    progress: t.steps[u] ? t.steps[u].stepProgressValue : 0,
                                    scores: t.scoreManager.getAllScores()
                                }), _e(E, m, A, c, t.steps[u])
                            })
                        };
                        h ? setTimeout(() => {
                            S()
                        }, h) : S()
                    };
                    c && l && !o ? t.inputManager.validateAllInputsOnStep(c).then(E => {
                        E && (g === "SUBMIT" ? (t.callbackStore.emit(b.ON_FORM_SUBMIT, {
                            data: t.getFormData(),
                            stepCount: t.steps[u] ? t.steps[u].index : 0,
                            progress: t.steps[u] ? t.steps[u].stepProgressValue : 0,
                            scores: t.scoreManager.getAllScores()
                        }), window.jQuery && window.jQuery(t.form) && window.jQuery(t.form).data && window.jQuery(t.form).data()[".wForm"] && t.preventWebflowFormSubmit === !1 && (t.isSubmitted = !0, window.jQuery(t.form).data()[".wForm"].handler && window.jQuery(t.form).data()[".wForm"].handler(window.jQuery(t.form).data()[".wForm"])), t.preventWebflowFormSubmit === !0 && (t.form.onsubmit = () => !0)) : y())
                    }).catch(console.error) : y()
                };
            return r(0, null), {
                goto: r
            }
        },
        R = [],
        B = t => R.filter(n => n.formName === t)[0];
    class gt {
        constructor(n, r) {
            if (this.version = nt, typeof n == "string") this.formContainer = document.querySelector(n), this.form = this.formContainer.querySelector("form");
            else if (typeof n == "object" && n instanceof HTMLElement) this.formContainer = n, this.form = this.formContainer.querySelector("form");
            else throw new Error("Please pass a valid selector or form element");
            if (!this.form) throw new Error(`Superform initialization failed. The "sf" attribute must be placed on the form container. For support, please refer to the documentation here.

here: https://deltaclan.gitbook.io/superform-v2-docs/essentials/form-container`);
            if (this.form.nodeName !== "FORM") throw new Error(`Superform initialization failed. The "sf" attribute must be placed on the form container. For support, please refer to the documentation here.

here: https://deltaclan.gitbook.io/superform-v2-docs/essentials/form-container`);
            setTimeout(() => {
                this.defaultFormDisplay = getComputedStyle(this.formContainer.querySelector("form")).display
            }), this.isSubmitted = !1, Pt(), this.navigationStack = [], this.callbackStore = Ft(), this.formName = this.formContainer.getAttribute(f) || this.form.getAttribute("name") || `${f}_${R.length}`, this.animation = {
                type: this.formContainer.getAttribute(mt) || P,
                duration: this.formContainer.getAttribute(yt) || Ot,
                ease: this.formContainer.getAttribute(_t) || Ct
            }, this.offlineStorage = Se(this), et.includes(this.animation.type) || (this.animation.type = P), this.steps = pe(this.form, r.debugModeSteps === !0), this.inputValidationHook = Qt(), this.inputManager = jt(this), this.scoreManager = Ae(this), this.navigationElements = re(this), this.navigationHook = oe(), this.preventWebflowFormSubmit = this.formContainer.hasAttribute(kt), this.viewManager = ve(this), this.progress = ae(this), this.reactivity = ue(this), this.form.onsubmit = e => {
                e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation()
            }, r && typeof r == "object" && r.debugMode && this.onStepChange(e => Vt(e, this)), R.push(this)
        }
        getFormData() {
            return Dt(this.form)
        }
        getCurrentStep() {
            return this.navigationStack[this.navigationStack.length - 1]
        }
        registerNavigationHook(n, r) {
            this.navigationHook.registerHook(n, r)
        }
        registerInputValidationHook(n, r) {
            this.inputValidationHook.registerHook(n, r)
        }
        beforeStepChange(n) {
            this.callbackStore.on(b.BEFORE_STEP_CHANGE, n)
        }
        onStepChange(n) {
            this.callbackStore.on(b.ON_STEP_CHANGE, n)
        }
        onFormSubmit(n) {
            this.callbackStore.on(b.ON_FORM_SUBMIT, n)
        }
    }
    window.Superform = gt, console.log("Powered by Superform", Rt);
    const Ne = performance.now();
    window.SuperformAPI = window.SuperformAPI || [],
        function() {
            if ("SuperformAPI" in window && "allForms" in window.SuperformAPI && "getForm" in window.SuperformAPI) {
                console.error("It seems like there are multiple Superform scripts added to your page. This might be causing some conflicts. Please remove any duplicate scripts.");
                return
            }
            wt();
            let t = !1,
                n = !1;
            document.querySelector(`script[${M}]`) && (t = !0, document.querySelector(`script[${M}]`).getAttribute(M).includes("steps") && (n = !0)), Array.from(document.querySelectorAll(`[${f}]`)).forEach(o => {
                new gt(o, {
                    debugMode: t,
                    debugModeSteps: n
                })
            });
            const e = () => {
                window.SuperformAPI = Object.freeze({
                    allForms: R,
                    version: nt,
                    debugConfig: {
                        debugMode: t,
                        debugModeSteps: n
                    },
                    getForm: B,
                    push(o) {
                        typeof o == "function" && o({
                            allForms: R,
                            getForm: B
                        })
                    }
                }), Array.from(document.querySelectorAll(`[${tt}]`)).forEach(o => o.removeAttribute(tt))
            };
            window.SuperformAPI && Array.isArray(window.SuperformAPI) && window.SuperformAPI.length && window.SuperformAPI.forEach(o => {
                typeof o == "function" && o({
                    allForms: R,
                    getForm: B
                })
            }), e();
            const i = performance.now();
            console.log(`Loaded in ${(i-Ne).toFixed(2)}ms`)
        }()
});