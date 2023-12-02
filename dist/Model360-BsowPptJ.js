import { T as Se, a as se, b as fe, R as Ke, L as Fe, c as S, F as Y, C as K, S as ye, P as Ue, D as Pe, M as Q, d as b, V as Ge, e as j, f as P, I as xe, O as Ee, g as Ne, h as Qe, B as w, i as we, j as pe, k as me, l as ne, m as _e, n as W, o as ve, p as Me, q as ke, r as Xe, s as Ie, t as Ye, u as je, v as Ze, w as We, x as Ve, y as qe, G as V, z as ze, A as $e, E as et, H as tt, J as De, K as st, N as nt, Q as Re, U as rt, W as ot, X as it, Y as At, Z as at, _ as Bt, $ as ct, a0 as Ct, a1 as lt, a2 as Be, a3 as ut, a4 as ce, a5 as ht, a6 as dt, a7 as ft, a8 as Ft, a9 as ie, aa as Gt } from "./main-5283kw0b.js";
import "react";
import "react-dom";
function Ce(l, e) {
  if (e === Se)
    return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), l;
  if (e === se || e === fe) {
    let t = l.getIndex();
    if (t === null) {
      const r = [], A = l.getAttribute("position");
      if (A !== void 0) {
        for (let i = 0; i < A.count; i++)
          r.push(i);
        l.setIndex(r), t = l.getIndex();
      } else
        return console.error(
          "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."
        ), l;
    }
    const o = t.count - 2, s = [];
    if (t)
      if (e === se)
        for (let r = 1; r <= o; r++)
          s.push(t.getX(0)), s.push(t.getX(r)), s.push(t.getX(r + 1));
      else
        for (let r = 0; r < o; r++)
          r % 2 === 0 ? (s.push(t.getX(r)), s.push(t.getX(r + 1)), s.push(t.getX(r + 2))) : (s.push(t.getX(r + 2)), s.push(t.getX(r + 1)), s.push(t.getX(r)));
    s.length / 3 !== o && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
    const n = l.clone();
    return n.setIndex(s), n.clearGroups(), n;
  } else
    return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", e), l;
}
const Et = parseInt(Ke.replace(/\D+/g, ""));
class Ae extends Fe {
  constructor(e) {
    super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(t) {
      return new Dt(t);
    }), this.register(function(t) {
      return new Ot(t);
    }), this.register(function(t) {
      return new St(t);
    }), this.register(function(t) {
      return new Kt(t);
    }), this.register(function(t) {
      return new Tt(t);
    }), this.register(function(t) {
      return new Ht(t);
    }), this.register(function(t) {
      return new gt(t);
    }), this.register(function(t) {
      return new Jt(t);
    }), this.register(function(t) {
      return new It(t);
    }), this.register(function(t) {
      return new Lt(t);
    }), this.register(function(t) {
      return new Rt(t);
    }), this.register(function(t) {
      return new bt(t);
    }), this.register(function(t) {
      return new mt(t);
    }), this.register(function(t) {
      return new yt(t);
    }), this.register(function(t) {
      return new Ut(t);
    });
  }
  load(e, t, o, s) {
    const n = this;
    let r;
    this.resourcePath !== "" ? r = this.resourcePath : this.path !== "" ? r = this.path : r = S.extractUrlBase(e), this.manager.itemStart(e);
    const A = function(a) {
      s ? s(a) : console.error(a), n.manager.itemError(e), n.manager.itemEnd(e);
    }, i = new Y(this.manager);
    i.setPath(this.path), i.setResponseType("arraybuffer"), i.setRequestHeader(this.requestHeader), i.setWithCredentials(this.withCredentials), i.load(
      e,
      function(a) {
        try {
          n.parse(
            a,
            r,
            function(B) {
              t(B), n.manager.itemEnd(e);
            },
            A
          );
        } catch (B) {
          A(B);
        }
      },
      o,
      A
    );
  }
  setDRACOLoader(e) {
    return this.dracoLoader = e, this;
  }
  setDDSLoader() {
    throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".');
  }
  setKTX2Loader(e) {
    return this.ktx2Loader = e, this;
  }
  setMeshoptDecoder(e) {
    return this.meshoptDecoder = e, this;
  }
  register(e) {
    return this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e), this;
  }
  unregister(e) {
    return this.pluginCallbacks.indexOf(e) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1), this;
  }
  parse(e, t, o, s) {
    let n;
    const r = {}, A = {};
    if (typeof e == "string")
      n = JSON.parse(e);
    else if (e instanceof ArrayBuffer)
      if (S.decodeText(new Uint8Array(e.slice(0, 4))) === Te) {
        try {
          r[G.KHR_BINARY_GLTF] = new Pt(e);
        } catch (B) {
          s && s(B);
          return;
        }
        n = JSON.parse(r[G.KHR_BINARY_GLTF].content);
      } else
        n = JSON.parse(S.decodeText(new Uint8Array(e)));
    else
      n = e;
    if (n.asset === void 0 || n.asset.version[0] < 2) {
      s && s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
      return;
    }
    const i = new Vt(n, {
      path: t || this.resourcePath || "",
      crossOrigin: this.crossOrigin,
      requestHeader: this.requestHeader,
      manager: this.manager,
      ktx2Loader: this.ktx2Loader,
      meshoptDecoder: this.meshoptDecoder
    });
    i.fileLoader.setRequestHeader(this.requestHeader);
    for (let a = 0; a < this.pluginCallbacks.length; a++) {
      const B = this.pluginCallbacks[a](i);
      A[B.name] = B, r[B.name] = !0;
    }
    if (n.extensionsUsed)
      for (let a = 0; a < n.extensionsUsed.length; ++a) {
        const B = n.extensionsUsed[a], c = n.extensionsRequired || [];
        switch (B) {
          case G.KHR_MATERIALS_UNLIT:
            r[B] = new Mt();
            break;
          case G.KHR_DRACO_MESH_COMPRESSION:
            r[B] = new xt(n, this.dracoLoader);
            break;
          case G.KHR_TEXTURE_TRANSFORM:
            r[B] = new Nt();
            break;
          case G.KHR_MESH_QUANTIZATION:
            r[B] = new Qt();
            break;
          default:
            c.indexOf(B) >= 0 && A[B] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + B + '".');
        }
      }
    i.setExtensions(r), i.setPlugins(A), i.parse(o, s);
  }
  parseAsync(e, t) {
    const o = this;
    return new Promise(function(s, n) {
      o.parse(e, t, s, n);
    });
  }
}
function pt() {
  let l = {};
  return {
    get: function(e) {
      return l[e];
    },
    add: function(e, t) {
      l[e] = t;
    },
    remove: function(e) {
      delete l[e];
    },
    removeAll: function() {
      l = {};
    }
  };
}
const G = {
  KHR_BINARY_GLTF: "KHR_binary_glTF",
  KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
  KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
  KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
  KHR_MATERIALS_IOR: "KHR_materials_ior",
  KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
  KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
  KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
  KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
  KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy",
  KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
  KHR_MATERIALS_VOLUME: "KHR_materials_volume",
  KHR_TEXTURE_BASISU: "KHR_texture_basisu",
  KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
  KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
  KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
  EXT_TEXTURE_WEBP: "EXT_texture_webp",
  EXT_TEXTURE_AVIF: "EXT_texture_avif",
  EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
  EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing"
};
class mt {
  constructor(e) {
    this.parser = e, this.name = G.KHR_LIGHTS_PUNCTUAL, this.cache = { refs: {}, uses: {} };
  }
  _markDefs() {
    const e = this.parser, t = this.parser.json.nodes || [];
    for (let o = 0, s = t.length; o < s; o++) {
      const n = t[o];
      n.extensions && n.extensions[this.name] && n.extensions[this.name].light !== void 0 && e._addNodeRef(this.cache, n.extensions[this.name].light);
    }
  }
  _loadLight(e) {
    const t = this.parser, o = "light:" + e;
    let s = t.cache.get(o);
    if (s)
      return s;
    const n = t.json, i = ((n.extensions && n.extensions[this.name] || {}).lights || [])[e];
    let a;
    const B = new K(16777215);
    i.color !== void 0 && B.fromArray(i.color);
    const c = i.range !== void 0 ? i.range : 0;
    switch (i.type) {
      case "directional":
        a = new Pe(B), a.target.position.set(0, 0, -1), a.add(a.target);
        break;
      case "point":
        a = new Ue(B), a.distance = c;
        break;
      case "spot":
        a = new ye(B), a.distance = c, i.spot = i.spot || {}, i.spot.innerConeAngle = i.spot.innerConeAngle !== void 0 ? i.spot.innerConeAngle : 0, i.spot.outerConeAngle = i.spot.outerConeAngle !== void 0 ? i.spot.outerConeAngle : Math.PI / 4, a.angle = i.spot.outerConeAngle, a.penumbra = 1 - i.spot.innerConeAngle / i.spot.outerConeAngle, a.target.position.set(0, 0, -1), a.add(a.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + i.type);
    }
    return a.position.set(0, 0, 0), a.decay = 2, L(a, i), i.intensity !== void 0 && (a.intensity = i.intensity), a.name = t.createUniqueName(i.name || "light_" + e), s = Promise.resolve(a), t.cache.add(o, s), s;
  }
  getDependency(e, t) {
    if (e === "light")
      return this._loadLight(t);
  }
  createNodeAttachment(e) {
    const t = this, o = this.parser, n = o.json.nodes[e], A = (n.extensions && n.extensions[this.name] || {}).light;
    return A === void 0 ? null : this._loadLight(A).then(function(i) {
      return o._getNodeRef(t.cache, A, i);
    });
  }
}
class Mt {
  constructor() {
    this.name = G.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return Q;
  }
  extendParams(e, t, o) {
    const s = [];
    e.color = new K(1, 1, 1), e.opacity = 1;
    const n = t.pbrMetallicRoughness;
    if (n) {
      if (Array.isArray(n.baseColorFactor)) {
        const r = n.baseColorFactor;
        e.color.fromArray(r), e.opacity = r[3];
      }
      n.baseColorTexture !== void 0 && s.push(o.assignTexture(e, "map", n.baseColorTexture, 3001));
    }
    return Promise.all(s);
  }
}
class It {
  constructor(e) {
    this.parser = e, this.name = G.KHR_MATERIALS_EMISSIVE_STRENGTH;
  }
  extendMaterialParams(e, t) {
    const s = this.parser.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const n = s.extensions[this.name].emissiveStrength;
    return n !== void 0 && (t.emissiveIntensity = n), Promise.resolve();
  }
}
class Dt {
  constructor(e) {
    this.parser = e, this.name = G.KHR_MATERIALS_CLEARCOAT;
  }
  getMaterialType(e) {
    const o = this.parser.json.materials[e];
    return !o.extensions || !o.extensions[this.name] ? null : b;
  }
  extendMaterialParams(e, t) {
    const o = this.parser, s = o.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const n = [], r = s.extensions[this.name];
    if (r.clearcoatFactor !== void 0 && (t.clearcoat = r.clearcoatFactor), r.clearcoatTexture !== void 0 && n.push(o.assignTexture(t, "clearcoatMap", r.clearcoatTexture)), r.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = r.clearcoatRoughnessFactor), r.clearcoatRoughnessTexture !== void 0 && n.push(o.assignTexture(t, "clearcoatRoughnessMap", r.clearcoatRoughnessTexture)), r.clearcoatNormalTexture !== void 0 && (n.push(o.assignTexture(t, "clearcoatNormalMap", r.clearcoatNormalTexture)), r.clearcoatNormalTexture.scale !== void 0)) {
      const A = r.clearcoatNormalTexture.scale;
      t.clearcoatNormalScale = new Ge(A, A);
    }
    return Promise.all(n);
  }
}
class Rt {
  constructor(e) {
    this.parser = e, this.name = G.KHR_MATERIALS_IRIDESCENCE;
  }
  getMaterialType(e) {
    const o = this.parser.json.materials[e];
    return !o.extensions || !o.extensions[this.name] ? null : b;
  }
  extendMaterialParams(e, t) {
    const o = this.parser, s = o.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const n = [], r = s.extensions[this.name];
    return r.iridescenceFactor !== void 0 && (t.iridescence = r.iridescenceFactor), r.iridescenceTexture !== void 0 && n.push(o.assignTexture(t, "iridescenceMap", r.iridescenceTexture)), r.iridescenceIor !== void 0 && (t.iridescenceIOR = r.iridescenceIor), t.iridescenceThicknessRange === void 0 && (t.iridescenceThicknessRange = [100, 400]), r.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessRange[0] = r.iridescenceThicknessMinimum), r.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessRange[1] = r.iridescenceThicknessMaximum), r.iridescenceThicknessTexture !== void 0 && n.push(
      o.assignTexture(t, "iridescenceThicknessMap", r.iridescenceThicknessTexture)
    ), Promise.all(n);
  }
}
class Tt {
  constructor(e) {
    this.parser = e, this.name = G.KHR_MATERIALS_SHEEN;
  }
  getMaterialType(e) {
    const o = this.parser.json.materials[e];
    return !o.extensions || !o.extensions[this.name] ? null : b;
  }
  extendMaterialParams(e, t) {
    const o = this.parser, s = o.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const n = [];
    t.sheenColor = new K(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1;
    const r = s.extensions[this.name];
    return r.sheenColorFactor !== void 0 && t.sheenColor.fromArray(r.sheenColorFactor), r.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = r.sheenRoughnessFactor), r.sheenColorTexture !== void 0 && n.push(o.assignTexture(t, "sheenColorMap", r.sheenColorTexture, 3001)), r.sheenRoughnessTexture !== void 0 && n.push(o.assignTexture(t, "sheenRoughnessMap", r.sheenRoughnessTexture)), Promise.all(n);
  }
}
class Ht {
  constructor(e) {
    this.parser = e, this.name = G.KHR_MATERIALS_TRANSMISSION;
  }
  getMaterialType(e) {
    const o = this.parser.json.materials[e];
    return !o.extensions || !o.extensions[this.name] ? null : b;
  }
  extendMaterialParams(e, t) {
    const o = this.parser, s = o.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const n = [], r = s.extensions[this.name];
    return r.transmissionFactor !== void 0 && (t.transmission = r.transmissionFactor), r.transmissionTexture !== void 0 && n.push(o.assignTexture(t, "transmissionMap", r.transmissionTexture)), Promise.all(n);
  }
}
class gt {
  constructor(e) {
    this.parser = e, this.name = G.KHR_MATERIALS_VOLUME;
  }
  getMaterialType(e) {
    const o = this.parser.json.materials[e];
    return !o.extensions || !o.extensions[this.name] ? null : b;
  }
  extendMaterialParams(e, t) {
    const o = this.parser, s = o.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const n = [], r = s.extensions[this.name];
    t.thickness = r.thicknessFactor !== void 0 ? r.thicknessFactor : 0, r.thicknessTexture !== void 0 && n.push(o.assignTexture(t, "thicknessMap", r.thicknessTexture)), t.attenuationDistance = r.attenuationDistance || 1 / 0;
    const A = r.attenuationColor || [1, 1, 1];
    return t.attenuationColor = new K(A[0], A[1], A[2]), Promise.all(n);
  }
}
class Jt {
  constructor(e) {
    this.parser = e, this.name = G.KHR_MATERIALS_IOR;
  }
  getMaterialType(e) {
    const o = this.parser.json.materials[e];
    return !o.extensions || !o.extensions[this.name] ? null : b;
  }
  extendMaterialParams(e, t) {
    const s = this.parser.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const n = s.extensions[this.name];
    return t.ior = n.ior !== void 0 ? n.ior : 1.5, Promise.resolve();
  }
}
class Lt {
  constructor(e) {
    this.parser = e, this.name = G.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(e) {
    const o = this.parser.json.materials[e];
    return !o.extensions || !o.extensions[this.name] ? null : b;
  }
  extendMaterialParams(e, t) {
    const o = this.parser, s = o.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const n = [], r = s.extensions[this.name];
    t.specularIntensity = r.specularFactor !== void 0 ? r.specularFactor : 1, r.specularTexture !== void 0 && n.push(o.assignTexture(t, "specularIntensityMap", r.specularTexture));
    const A = r.specularColorFactor || [1, 1, 1];
    return t.specularColor = new K(A[0], A[1], A[2]), r.specularColorTexture !== void 0 && n.push(
      o.assignTexture(t, "specularColorMap", r.specularColorTexture, 3001)
      // sRGBEncoding
    ), Promise.all(n);
  }
}
class bt {
  constructor(e) {
    this.parser = e, this.name = G.KHR_MATERIALS_ANISOTROPY;
  }
  getMaterialType(e) {
    const o = this.parser.json.materials[e];
    return !o.extensions || !o.extensions[this.name] ? null : b;
  }
  extendMaterialParams(e, t) {
    const o = this.parser, s = o.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const n = [], r = s.extensions[this.name];
    return r.anisotropyStrength !== void 0 && (t.anisotropy = r.anisotropyStrength), r.anisotropyRotation !== void 0 && (t.anisotropyRotation = r.anisotropyRotation), r.anisotropyTexture !== void 0 && n.push(o.assignTexture(t, "anisotropyMap", r.anisotropyTexture)), Promise.all(n);
  }
}
class Ot {
  constructor(e) {
    this.parser = e, this.name = G.KHR_TEXTURE_BASISU;
  }
  loadTexture(e) {
    const t = this.parser, o = t.json, s = o.textures[e];
    if (!s.extensions || !s.extensions[this.name])
      return null;
    const n = s.extensions[this.name], r = t.options.ktx2Loader;
    if (!r) {
      if (o.extensionsRequired && o.extensionsRequired.indexOf(this.name) >= 0)
        throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
      return null;
    }
    return t.loadTextureImage(e, n.source, r);
  }
}
class St {
  constructor(e) {
    this.parser = e, this.name = G.EXT_TEXTURE_WEBP, this.isSupported = null;
  }
  loadTexture(e) {
    const t = this.name, o = this.parser, s = o.json, n = s.textures[e];
    if (!n.extensions || !n.extensions[t])
      return null;
    const r = n.extensions[t], A = s.images[r.source];
    let i = o.textureLoader;
    if (A.uri) {
      const a = o.options.manager.getHandler(A.uri);
      a !== null && (i = a);
    }
    return this.detectSupport().then(function(a) {
      if (a)
        return o.loadTextureImage(e, r.source, i);
      if (s.extensionsRequired && s.extensionsRequired.indexOf(t) >= 0)
        throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
      return o.loadTexture(e);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(e) {
      const t = new Image();
      t.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", t.onload = t.onerror = function() {
        e(t.height === 1);
      };
    })), this.isSupported;
  }
}
class Kt {
  constructor(e) {
    this.parser = e, this.name = G.EXT_TEXTURE_AVIF, this.isSupported = null;
  }
  loadTexture(e) {
    const t = this.name, o = this.parser, s = o.json, n = s.textures[e];
    if (!n.extensions || !n.extensions[t])
      return null;
    const r = n.extensions[t], A = s.images[r.source];
    let i = o.textureLoader;
    if (A.uri) {
      const a = o.options.manager.getHandler(A.uri);
      a !== null && (i = a);
    }
    return this.detectSupport().then(function(a) {
      if (a)
        return o.loadTextureImage(e, r.source, i);
      if (s.extensionsRequired && s.extensionsRequired.indexOf(t) >= 0)
        throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");
      return o.loadTexture(e);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(e) {
      const t = new Image();
      t.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=", t.onload = t.onerror = function() {
        e(t.height === 1);
      };
    })), this.isSupported;
  }
}
class yt {
  constructor(e) {
    this.name = G.EXT_MESHOPT_COMPRESSION, this.parser = e;
  }
  loadBufferView(e) {
    const t = this.parser.json, o = t.bufferViews[e];
    if (o.extensions && o.extensions[this.name]) {
      const s = o.extensions[this.name], n = this.parser.getDependency("buffer", s.buffer), r = this.parser.options.meshoptDecoder;
      if (!r || !r.supported) {
        if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0)
          throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
        return null;
      }
      return n.then(function(A) {
        const i = s.byteOffset || 0, a = s.byteLength || 0, B = s.count, c = s.byteStride, C = new Uint8Array(A, i, a);
        return r.decodeGltfBufferAsync ? r.decodeGltfBufferAsync(B, c, C, s.mode, s.filter).then(function(u) {
          return u.buffer;
        }) : r.ready.then(function() {
          const u = new ArrayBuffer(B * c);
          return r.decodeGltfBuffer(
            new Uint8Array(u),
            B,
            c,
            C,
            s.mode,
            s.filter
          ), u;
        });
      });
    } else
      return null;
  }
}
class Ut {
  constructor(e) {
    this.name = G.EXT_MESH_GPU_INSTANCING, this.parser = e;
  }
  createNodeMesh(e) {
    const t = this.parser.json, o = t.nodes[e];
    if (!o.extensions || !o.extensions[this.name] || o.mesh === void 0)
      return null;
    const s = t.meshes[o.mesh];
    for (const a of s.primitives)
      if (a.mode !== D.TRIANGLES && a.mode !== D.TRIANGLE_STRIP && a.mode !== D.TRIANGLE_FAN && a.mode !== void 0)
        return null;
    const r = o.extensions[this.name].attributes, A = [], i = {};
    for (const a in r)
      A.push(
        this.parser.getDependency("accessor", r[a]).then((B) => (i[a] = B, i[a]))
      );
    return A.length < 1 ? null : (A.push(this.parser.createNodeMesh(e)), Promise.all(A).then((a) => {
      const B = a.pop(), c = B.isGroup ? B.children : [B], C = a[0].count, u = [];
      for (const h of c) {
        const d = new j(), f = new P(), F = new Re(), p = new P(1, 1, 1), E = new xe(h.geometry, h.material, C);
        for (let m = 0; m < C; m++)
          i.TRANSLATION && f.fromBufferAttribute(i.TRANSLATION, m), i.ROTATION && F.fromBufferAttribute(i.ROTATION, m), i.SCALE && p.fromBufferAttribute(i.SCALE, m), E.setMatrixAt(m, d.compose(f, F, p));
        for (const m in i)
          m !== "TRANSLATION" && m !== "ROTATION" && m !== "SCALE" && h.geometry.setAttribute(m, i[m]);
        Ee.prototype.copy.call(E, h), this.parser.assignFinalMaterial(E), u.push(E);
      }
      return B.isGroup ? (B.clear(), B.add(...u), B) : u[0];
    }));
  }
}
const Te = "glTF", N = 12, le = { JSON: 1313821514, BIN: 5130562 };
class Pt {
  constructor(e) {
    this.name = G.KHR_BINARY_GLTF, this.content = null, this.body = null;
    const t = new DataView(e, 0, N);
    if (this.header = {
      magic: S.decodeText(new Uint8Array(e.slice(0, 4))),
      version: t.getUint32(4, !0),
      length: t.getUint32(8, !0)
    }, this.header.magic !== Te)
      throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2)
      throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const o = this.header.length - N, s = new DataView(e, N);
    let n = 0;
    for (; n < o; ) {
      const r = s.getUint32(n, !0);
      n += 4;
      const A = s.getUint32(n, !0);
      if (n += 4, A === le.JSON) {
        const i = new Uint8Array(e, N + n, r);
        this.content = S.decodeText(i);
      } else if (A === le.BIN) {
        const i = N + n;
        this.body = e.slice(i, i + r);
      }
      n += r;
    }
    if (this.content === null)
      throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class xt {
  constructor(e, t) {
    if (!t)
      throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    this.name = G.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload();
  }
  decodePrimitive(e, t) {
    const o = this.json, s = this.dracoLoader, n = e.extensions[this.name].bufferView, r = e.extensions[this.name].attributes, A = {}, i = {}, a = {};
    for (const B in r) {
      const c = re[B] || B.toLowerCase();
      A[c] = r[B];
    }
    for (const B in e.attributes) {
      const c = re[B] || B.toLowerCase();
      if (r[B] !== void 0) {
        const C = o.accessors[e.attributes[B]], u = x[C.componentType];
        a[c] = u.name, i[c] = C.normalized === !0;
      }
    }
    return t.getDependency("bufferView", n).then(function(B) {
      return new Promise(function(c) {
        s.decodeDracoFile(
          B,
          function(C) {
            for (const u in C.attributes) {
              const h = C.attributes[u], d = i[u];
              d !== void 0 && (h.normalized = d);
            }
            c(C);
          },
          A,
          a
        );
      });
    });
  }
}
class Nt {
  constructor() {
    this.name = G.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(e, t) {
    return (t.texCoord === void 0 || t.texCoord === e.channel) && t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (e = e.clone(), t.texCoord !== void 0 && (e.channel = t.texCoord), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), e.needsUpdate = !0), e;
  }
}
class Qt {
  constructor() {
    this.name = G.KHR_MESH_QUANTIZATION;
  }
}
class He extends Ft {
  constructor(e, t, o, s) {
    super(e, t, o, s);
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, o = this.sampleValues, s = this.valueSize, n = e * s * 3 + s;
    for (let r = 0; r !== s; r++)
      t[r] = o[n + r];
    return t;
  }
  interpolate_(e, t, o, s) {
    const n = this.resultBuffer, r = this.sampleValues, A = this.valueSize, i = A * 2, a = A * 3, B = s - t, c = (o - t) / B, C = c * c, u = C * c, h = e * a, d = h - a, f = -2 * u + 3 * C, F = u - C, p = 1 - f, E = F - C + c;
    for (let m = 0; m !== A; m++) {
      const R = r[d + m + A], M = r[d + m + i] * B, I = r[h + m + A], H = r[h + m] * B;
      n[m] = p * R + E * M + f * I + F * H;
    }
    return n;
  }
}
const wt = new Re();
class _t extends He {
  interpolate_(e, t, o, s) {
    const n = super.interpolate_(e, t, o, s);
    return wt.fromArray(n).normalize().toArray(n), n;
  }
}
const D = {
  FLOAT: 5126,
  //FLOAT_MAT2: 35674,
  FLOAT_MAT3: 35675,
  FLOAT_MAT4: 35676,
  FLOAT_VEC2: 35664,
  FLOAT_VEC3: 35665,
  FLOAT_VEC4: 35666,
  LINEAR: 9729,
  REPEAT: 10497,
  SAMPLER_2D: 35678,
  POINTS: 0,
  LINES: 1,
  LINE_LOOP: 2,
  LINE_STRIP: 3,
  TRIANGLES: 4,
  TRIANGLE_STRIP: 5,
  TRIANGLE_FAN: 6,
  UNSIGNED_BYTE: 5121,
  UNSIGNED_SHORT: 5123
}, x = {
  5120: Int8Array,
  5121: Uint8Array,
  5122: Int16Array,
  5123: Uint16Array,
  5125: Uint32Array,
  5126: Float32Array
}, ue = {
  9728: rt,
  9729: pe,
  9984: ot,
  9985: it,
  9986: At,
  9987: me
}, he = {
  33071: at,
  33648: Bt,
  10497: ne
}, q = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
}, re = {
  POSITION: "position",
  NORMAL: "normal",
  TANGENT: "tangent",
  // uv => uv1, 4 uv channels
  // https://github.com/mrdoob/three.js/pull/25943
  // https://github.com/mrdoob/three.js/pull/25788
  ...Et >= 152 ? {
    TEXCOORD_0: "uv",
    TEXCOORD_1: "uv1",
    TEXCOORD_2: "uv2",
    TEXCOORD_3: "uv3"
  } : {
    TEXCOORD_0: "uv",
    TEXCOORD_1: "uv2"
  },
  COLOR_0: "color",
  WEIGHTS_0: "skinWeight",
  JOINTS_0: "skinIndex"
}, J = {
  scale: "scale",
  translation: "position",
  rotation: "quaternion",
  weights: "morphTargetInfluences"
}, vt = {
  CUBICSPLINE: void 0,
  // We use a custom interpolant (GLTFCubicSplineInterpolation) for CUBICSPLINE tracks. Each
  // keyframe track will be initialized with a default interpolation type, then modified.
  LINEAR: De,
  STEP: ct
}, z = {
  OPAQUE: "OPAQUE",
  MASK: "MASK",
  BLEND: "BLEND"
};
function kt(l) {
  return l.DefaultMaterial === void 0 && (l.DefaultMaterial = new Me({
    color: 16777215,
    emissive: 0,
    metalness: 1,
    roughness: 1,
    transparent: !1,
    depthTest: !0,
    side: Ct
  })), l.DefaultMaterial;
}
function O(l, e, t) {
  for (const o in t.extensions)
    l[o] === void 0 && (e.userData.gltfExtensions = e.userData.gltfExtensions || {}, e.userData.gltfExtensions[o] = t.extensions[o]);
}
function L(l, e) {
  e.extras !== void 0 && (typeof e.extras == "object" ? Object.assign(l.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras));
}
function Xt(l, e, t) {
  let o = !1, s = !1, n = !1;
  for (let a = 0, B = e.length; a < B; a++) {
    const c = e[a];
    if (c.POSITION !== void 0 && (o = !0), c.NORMAL !== void 0 && (s = !0), c.COLOR_0 !== void 0 && (n = !0), o && s && n)
      break;
  }
  if (!o && !s && !n)
    return Promise.resolve(l);
  const r = [], A = [], i = [];
  for (let a = 0, B = e.length; a < B; a++) {
    const c = e[a];
    if (o) {
      const C = c.POSITION !== void 0 ? t.getDependency("accessor", c.POSITION) : l.attributes.position;
      r.push(C);
    }
    if (s) {
      const C = c.NORMAL !== void 0 ? t.getDependency("accessor", c.NORMAL) : l.attributes.normal;
      A.push(C);
    }
    if (n) {
      const C = c.COLOR_0 !== void 0 ? t.getDependency("accessor", c.COLOR_0) : l.attributes.color;
      i.push(C);
    }
  }
  return Promise.all([
    Promise.all(r),
    Promise.all(A),
    Promise.all(i)
  ]).then(function(a) {
    const B = a[0], c = a[1], C = a[2];
    return o && (l.morphAttributes.position = B), s && (l.morphAttributes.normal = c), n && (l.morphAttributes.color = C), l.morphTargetsRelative = !0, l;
  });
}
function Yt(l, e) {
  if (l.updateMorphTargets(), e.weights !== void 0)
    for (let t = 0, o = e.weights.length; t < o; t++)
      l.morphTargetInfluences[t] = e.weights[t];
  if (e.extras && Array.isArray(e.extras.targetNames)) {
    const t = e.extras.targetNames;
    if (l.morphTargetInfluences.length === t.length) {
      l.morphTargetDictionary = {};
      for (let o = 0, s = t.length; o < s; o++)
        l.morphTargetDictionary[t[o]] = o;
    } else
      console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
  }
}
function jt(l) {
  let e;
  const t = l.extensions && l.extensions[G.KHR_DRACO_MESH_COMPRESSION];
  if (t ? e = "draco:" + t.bufferView + ":" + t.indices + ":" + $(t.attributes) : e = l.indices + ":" + $(l.attributes) + ":" + l.mode, l.targets !== void 0)
    for (let o = 0, s = l.targets.length; o < s; o++)
      e += ":" + $(l.targets[o]);
  return e;
}
function $(l) {
  let e = "";
  const t = Object.keys(l).sort();
  for (let o = 0, s = t.length; o < s; o++)
    e += t[o] + ":" + l[t[o]] + ";";
  return e;
}
function oe(l) {
  switch (l) {
    case Int8Array:
      return 1 / 127;
    case Uint8Array:
      return 1 / 255;
    case Int16Array:
      return 1 / 32767;
    case Uint16Array:
      return 1 / 65535;
    default:
      throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.");
  }
}
function Zt(l) {
  return l.search(/\.jpe?g($|\?)/i) > 0 || l.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : l.search(/\.webp($|\?)/i) > 0 || l.search(/^data\:image\/webp/) === 0 ? "image/webp" : "image/png";
}
const Wt = new j();
class Vt {
  constructor(e = {}, t = {}) {
    this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new pt(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
    let o = !1, s = !1, n = -1;
    typeof navigator < "u" && typeof navigator.userAgent < "u" && (o = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) === !0, s = navigator.userAgent.indexOf("Firefox") > -1, n = s ? navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1] : -1), typeof createImageBitmap > "u" || o || s && n < 98 ? this.textureLoader = new Ne(this.options.manager) : this.textureLoader = new Qe(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new Y(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0);
  }
  setExtensions(e) {
    this.extensions = e;
  }
  setPlugins(e) {
    this.plugins = e;
  }
  parse(e, t) {
    const o = this, s = this.json, n = this.extensions;
    this.cache.removeAll(), this.nodeCache = {}, this._invokeAll(function(r) {
      return r._markDefs && r._markDefs();
    }), Promise.all(
      this._invokeAll(function(r) {
        return r.beforeRoot && r.beforeRoot();
      })
    ).then(function() {
      return Promise.all([
        o.getDependencies("scene"),
        o.getDependencies("animation"),
        o.getDependencies("camera")
      ]);
    }).then(function(r) {
      const A = {
        scene: r[0][s.scene || 0],
        scenes: r[0],
        animations: r[1],
        cameras: r[2],
        asset: s.asset,
        parser: o,
        userData: {}
      };
      O(n, A, s), L(A, s), Promise.all(
        o._invokeAll(function(i) {
          return i.afterRoot && i.afterRoot(A);
        })
      ).then(function() {
        e(A);
      });
    }).catch(t);
  }
  /**
   * Marks the special nodes/meshes in json for efficient parse.
   */
  _markDefs() {
    const e = this.json.nodes || [], t = this.json.skins || [], o = this.json.meshes || [];
    for (let s = 0, n = t.length; s < n; s++) {
      const r = t[s].joints;
      for (let A = 0, i = r.length; A < i; A++)
        e[r[A]].isBone = !0;
    }
    for (let s = 0, n = e.length; s < n; s++) {
      const r = e[s];
      r.mesh !== void 0 && (this._addNodeRef(this.meshCache, r.mesh), r.skin !== void 0 && (o[r.mesh].isSkinnedMesh = !0)), r.camera !== void 0 && this._addNodeRef(this.cameraCache, r.camera);
    }
  }
  /**
   * Counts references to shared node / Object3D resources. These resources
   * can be reused, or "instantiated", at multiple nodes in the scene
   * hierarchy. Mesh, Camera, and Light instances are instantiated and must
   * be marked. Non-scenegraph resources (like Materials, Geometries, and
   * Textures) can be reused directly and are not marked here.
   *
   * Example: CesiumMilkTruck sample model reuses "Wheel" meshes.
   */
  _addNodeRef(e, t) {
    t !== void 0 && (e.refs[t] === void 0 && (e.refs[t] = e.uses[t] = 0), e.refs[t]++);
  }
  /** Returns a reference to a shared resource, cloning it if necessary. */
  _getNodeRef(e, t, o) {
    if (e.refs[t] <= 1)
      return o;
    const s = o.clone(), n = (r, A) => {
      const i = this.associations.get(r);
      i != null && this.associations.set(A, i);
      for (const [a, B] of r.children.entries())
        n(B, A.children[a]);
    };
    return n(o, s), s.name += "_instance_" + e.uses[t]++, s;
  }
  _invokeOne(e) {
    const t = Object.values(this.plugins);
    t.push(this);
    for (let o = 0; o < t.length; o++) {
      const s = e(t[o]);
      if (s)
        return s;
    }
    return null;
  }
  _invokeAll(e) {
    const t = Object.values(this.plugins);
    t.unshift(this);
    const o = [];
    for (let s = 0; s < t.length; s++) {
      const n = e(t[s]);
      n && o.push(n);
    }
    return o;
  }
  /**
   * Requests the specified dependency asynchronously, with caching.
   * @param {string} type
   * @param {number} index
   * @return {Promise<Object3D|Material|THREE.Texture|AnimationClip|ArrayBuffer|Object>}
   */
  getDependency(e, t) {
    const o = e + ":" + t;
    let s = this.cache.get(o);
    if (!s) {
      switch (e) {
        case "scene":
          s = this.loadScene(t);
          break;
        case "node":
          s = this._invokeOne(function(n) {
            return n.loadNode && n.loadNode(t);
          });
          break;
        case "mesh":
          s = this._invokeOne(function(n) {
            return n.loadMesh && n.loadMesh(t);
          });
          break;
        case "accessor":
          s = this.loadAccessor(t);
          break;
        case "bufferView":
          s = this._invokeOne(function(n) {
            return n.loadBufferView && n.loadBufferView(t);
          });
          break;
        case "buffer":
          s = this.loadBuffer(t);
          break;
        case "material":
          s = this._invokeOne(function(n) {
            return n.loadMaterial && n.loadMaterial(t);
          });
          break;
        case "texture":
          s = this._invokeOne(function(n) {
            return n.loadTexture && n.loadTexture(t);
          });
          break;
        case "skin":
          s = this.loadSkin(t);
          break;
        case "animation":
          s = this._invokeOne(function(n) {
            return n.loadAnimation && n.loadAnimation(t);
          });
          break;
        case "camera":
          s = this.loadCamera(t);
          break;
        default:
          if (s = this._invokeOne(function(n) {
            return n != this && n.getDependency && n.getDependency(e, t);
          }), !s)
            throw new Error("Unknown type: " + e);
          break;
      }
      this.cache.add(o, s);
    }
    return s;
  }
  /**
   * Requests all dependencies of the specified type asynchronously, with caching.
   * @param {string} type
   * @return {Promise<Array<Object>>}
   */
  getDependencies(e) {
    let t = this.cache.get(e);
    if (!t) {
      const o = this, s = this.json[e + (e === "mesh" ? "es" : "s")] || [];
      t = Promise.all(
        s.map(function(n, r) {
          return o.getDependency(e, r);
        })
      ), this.cache.add(e, t);
    }
    return t;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   * @param {number} bufferIndex
   * @return {Promise<ArrayBuffer>}
   */
  loadBuffer(e) {
    const t = this.json.buffers[e], o = this.fileLoader;
    if (t.type && t.type !== "arraybuffer")
      throw new Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
    if (t.uri === void 0 && e === 0)
      return Promise.resolve(this.extensions[G.KHR_BINARY_GLTF].body);
    const s = this.options;
    return new Promise(function(n, r) {
      o.load(S.resolveURL(t.uri, s.path), n, void 0, function() {
        r(new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'));
      });
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   * @param {number} bufferViewIndex
   * @return {Promise<ArrayBuffer>}
   */
  loadBufferView(e) {
    const t = this.json.bufferViews[e];
    return this.getDependency("buffer", t.buffer).then(function(o) {
      const s = t.byteLength || 0, n = t.byteOffset || 0;
      return o.slice(n, n + s);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#accessors
   * @param {number} accessorIndex
   * @return {Promise<BufferAttribute|InterleavedBufferAttribute>}
   */
  loadAccessor(e) {
    const t = this, o = this.json, s = this.json.accessors[e];
    if (s.bufferView === void 0 && s.sparse === void 0) {
      const r = q[s.type], A = x[s.componentType], i = s.normalized === !0, a = new A(s.count * r);
      return Promise.resolve(new w(a, r, i));
    }
    const n = [];
    return s.bufferView !== void 0 ? n.push(this.getDependency("bufferView", s.bufferView)) : n.push(null), s.sparse !== void 0 && (n.push(this.getDependency("bufferView", s.sparse.indices.bufferView)), n.push(this.getDependency("bufferView", s.sparse.values.bufferView))), Promise.all(n).then(function(r) {
      const A = r[0], i = q[s.type], a = x[s.componentType], B = a.BYTES_PER_ELEMENT, c = B * i, C = s.byteOffset || 0, u = s.bufferView !== void 0 ? o.bufferViews[s.bufferView].byteStride : void 0, h = s.normalized === !0;
      let d, f;
      if (u && u !== c) {
        const F = Math.floor(C / u), p = "InterleavedBuffer:" + s.bufferView + ":" + s.componentType + ":" + F + ":" + s.count;
        let E = t.cache.get(p);
        E || (d = new a(A, F * u, s.count * u / B), E = new we(d, u / B), t.cache.add(p, E)), f = new lt(
          E,
          i,
          C % u / B,
          h
        );
      } else
        A === null ? d = new a(s.count * i) : d = new a(A, C, s.count * i), f = new w(d, i, h);
      if (s.sparse !== void 0) {
        const F = q.SCALAR, p = x[s.sparse.indices.componentType], E = s.sparse.indices.byteOffset || 0, m = s.sparse.values.byteOffset || 0, R = new p(
          r[1],
          E,
          s.sparse.count * F
        ), M = new a(r[2], m, s.sparse.count * i);
        A !== null && (f = new w(
          f.array.slice(),
          f.itemSize,
          f.normalized
        ));
        for (let I = 0, H = R.length; I < H; I++) {
          const y = R[I];
          if (f.setX(y, M[I * i]), i >= 2 && f.setY(y, M[I * i + 1]), i >= 3 && f.setZ(y, M[I * i + 2]), i >= 4 && f.setW(y, M[I * i + 3]), i >= 5)
            throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
        }
      }
      return f;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#textures
   * @param {number} textureIndex
   * @return {Promise<THREE.Texture|null>}
   */
  loadTexture(e) {
    const t = this.json, o = this.options, n = t.textures[e].source, r = t.images[n];
    let A = this.textureLoader;
    if (r.uri) {
      const i = o.manager.getHandler(r.uri);
      i !== null && (A = i);
    }
    return this.loadTextureImage(e, n, A);
  }
  loadTextureImage(e, t, o) {
    const s = this, n = this.json, r = n.textures[e], A = n.images[t], i = (A.uri || A.bufferView) + ":" + r.sampler;
    if (this.textureCache[i])
      return this.textureCache[i];
    const a = this.loadImageSource(t, o).then(function(B) {
      B.flipY = !1, B.name = r.name || A.name || "", B.name === "" && typeof A.uri == "string" && A.uri.startsWith("data:image/") === !1 && (B.name = A.uri);
      const C = (n.samplers || {})[r.sampler] || {};
      return B.magFilter = ue[C.magFilter] || pe, B.minFilter = ue[C.minFilter] || me, B.wrapS = he[C.wrapS] || ne, B.wrapT = he[C.wrapT] || ne, s.associations.set(B, { textures: e }), B;
    }).catch(function() {
      return null;
    });
    return this.textureCache[i] = a, a;
  }
  loadImageSource(e, t) {
    const o = this, s = this.json, n = this.options;
    if (this.sourceCache[e] !== void 0)
      return this.sourceCache[e].then((c) => c.clone());
    const r = s.images[e], A = self.URL || self.webkitURL;
    let i = r.uri || "", a = !1;
    if (r.bufferView !== void 0)
      i = o.getDependency("bufferView", r.bufferView).then(function(c) {
        a = !0;
        const C = new Blob([c], { type: r.mimeType });
        return i = A.createObjectURL(C), i;
      });
    else if (r.uri === void 0)
      throw new Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
    const B = Promise.resolve(i).then(function(c) {
      return new Promise(function(C, u) {
        let h = C;
        t.isImageBitmapLoader === !0 && (h = function(d) {
          const f = new Be(d);
          f.needsUpdate = !0, C(f);
        }), t.load(S.resolveURL(c, n.path), h, void 0, u);
      });
    }).then(function(c) {
      return a === !0 && A.revokeObjectURL(i), c.userData.mimeType = r.mimeType || Zt(r.uri), c;
    }).catch(function(c) {
      throw console.error("THREE.GLTFLoader: Couldn't load texture", i), c;
    });
    return this.sourceCache[e] = B, B;
  }
  /**
   * Asynchronously assigns a texture to the given material parameters.
   * @param {Object} materialParams
   * @param {string} mapName
   * @param {Object} mapDef
   * @return {Promise<Texture>}
   */
  assignTexture(e, t, o, s) {
    const n = this;
    return this.getDependency("texture", o.index).then(function(r) {
      if (!r)
        return null;
      if (o.texCoord !== void 0 && o.texCoord > 0 && (r = r.clone(), r.channel = o.texCoord), n.extensions[G.KHR_TEXTURE_TRANSFORM]) {
        const A = o.extensions !== void 0 ? o.extensions[G.KHR_TEXTURE_TRANSFORM] : void 0;
        if (A) {
          const i = n.associations.get(r);
          r = n.extensions[G.KHR_TEXTURE_TRANSFORM].extendTexture(r, A), n.associations.set(r, i);
        }
      }
      return s !== void 0 && ("colorSpace" in r ? r.colorSpace = s === 3001 ? "srgb" : "srgb-linear" : r.encoding = s), e[t] = r, r;
    });
  }
  /**
   * Assigns final material to a Mesh, Line, or Points instance. The instance
   * already has a material (generated from the glTF material options alone)
   * but reuse of the same glTF material may require multiple threejs materials
   * to accommodate different primitive types, defines, etc. New materials will
   * be created if necessary, and reused from a cache.
   * @param  {Object3D} mesh Mesh, Line, or Points instance.
   */
  assignFinalMaterial(e) {
    const t = e.geometry;
    let o = e.material;
    const s = t.attributes.tangent === void 0, n = t.attributes.color !== void 0, r = t.attributes.normal === void 0;
    if (e.isPoints) {
      const A = "PointsMaterial:" + o.uuid;
      let i = this.cache.get(A);
      i || (i = new _e(), W.prototype.copy.call(i, o), i.color.copy(o.color), i.map = o.map, i.sizeAttenuation = !1, this.cache.add(A, i)), o = i;
    } else if (e.isLine) {
      const A = "LineBasicMaterial:" + o.uuid;
      let i = this.cache.get(A);
      i || (i = new ve(), W.prototype.copy.call(i, o), i.color.copy(o.color), i.map = o.map, this.cache.add(A, i)), o = i;
    }
    if (s || n || r) {
      let A = "ClonedMaterial:" + o.uuid + ":";
      s && (A += "derivative-tangents:"), n && (A += "vertex-colors:"), r && (A += "flat-shading:");
      let i = this.cache.get(A);
      i || (i = o.clone(), n && (i.vertexColors = !0), r && (i.flatShading = !0), s && (i.normalScale && (i.normalScale.y *= -1), i.clearcoatNormalScale && (i.clearcoatNormalScale.y *= -1)), this.cache.add(A, i), this.associations.set(i, this.associations.get(o))), o = i;
    }
    e.material = o;
  }
  getMaterialType() {
    return Me;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#materials
   * @param {number} materialIndex
   * @return {Promise<Material>}
   */
  loadMaterial(e) {
    const t = this, o = this.json, s = this.extensions, n = o.materials[e];
    let r;
    const A = {}, i = n.extensions || {}, a = [];
    if (i[G.KHR_MATERIALS_UNLIT]) {
      const c = s[G.KHR_MATERIALS_UNLIT];
      r = c.getMaterialType(), a.push(c.extendParams(A, n, t));
    } else {
      const c = n.pbrMetallicRoughness || {};
      if (A.color = new K(1, 1, 1), A.opacity = 1, Array.isArray(c.baseColorFactor)) {
        const C = c.baseColorFactor;
        A.color.fromArray(C), A.opacity = C[3];
      }
      c.baseColorTexture !== void 0 && a.push(t.assignTexture(A, "map", c.baseColorTexture, 3001)), A.metalness = c.metallicFactor !== void 0 ? c.metallicFactor : 1, A.roughness = c.roughnessFactor !== void 0 ? c.roughnessFactor : 1, c.metallicRoughnessTexture !== void 0 && (a.push(t.assignTexture(A, "metalnessMap", c.metallicRoughnessTexture)), a.push(t.assignTexture(A, "roughnessMap", c.metallicRoughnessTexture))), r = this._invokeOne(function(C) {
        return C.getMaterialType && C.getMaterialType(e);
      }), a.push(
        Promise.all(
          this._invokeAll(function(C) {
            return C.extendMaterialParams && C.extendMaterialParams(e, A);
          })
        )
      );
    }
    n.doubleSided === !0 && (A.side = ke);
    const B = n.alphaMode || z.OPAQUE;
    if (B === z.BLEND ? (A.transparent = !0, A.depthWrite = !1) : (A.transparent = !1, B === z.MASK && (A.alphaTest = n.alphaCutoff !== void 0 ? n.alphaCutoff : 0.5)), n.normalTexture !== void 0 && r !== Q && (a.push(t.assignTexture(A, "normalMap", n.normalTexture)), A.normalScale = new Ge(1, 1), n.normalTexture.scale !== void 0)) {
      const c = n.normalTexture.scale;
      A.normalScale.set(c, c);
    }
    return n.occlusionTexture !== void 0 && r !== Q && (a.push(t.assignTexture(A, "aoMap", n.occlusionTexture)), n.occlusionTexture.strength !== void 0 && (A.aoMapIntensity = n.occlusionTexture.strength)), n.emissiveFactor !== void 0 && r !== Q && (A.emissive = new K().fromArray(n.emissiveFactor)), n.emissiveTexture !== void 0 && r !== Q && a.push(t.assignTexture(A, "emissiveMap", n.emissiveTexture, 3001)), Promise.all(a).then(function() {
      const c = new r(A);
      return n.name && (c.name = n.name), L(c, n), t.associations.set(c, { materials: e }), n.extensions && O(s, c, n), c;
    });
  }
  /** When Object3D instances are targeted by animation, they need unique names. */
  createUniqueName(e) {
    const t = Xe.sanitizeNodeName(e || "");
    return t in this.nodeNamesUsed ? t + "_" + ++this.nodeNamesUsed[t] : (this.nodeNamesUsed[t] = 0, t);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#geometry
   *
   * Creates BufferGeometries from primitives.
   *
   * @param {Array<GLTF.Primitive>} primitives
   * @return {Promise<Array<BufferGeometry>>}
   */
  loadGeometries(e) {
    const t = this, o = this.extensions, s = this.primitiveCache;
    function n(A) {
      return o[G.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(A, t).then(function(i) {
        return de(i, A, t);
      });
    }
    const r = [];
    for (let A = 0, i = e.length; A < i; A++) {
      const a = e[A], B = jt(a), c = s[B];
      if (c)
        r.push(c.promise);
      else {
        let C;
        a.extensions && a.extensions[G.KHR_DRACO_MESH_COMPRESSION] ? C = n(a) : C = de(new Ie(), a, t), s[B] = { primitive: a, promise: C }, r.push(C);
      }
    }
    return Promise.all(r);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#meshes
   * @param {number} meshIndex
   * @return {Promise<Group|Mesh|SkinnedMesh>}
   */
  loadMesh(e) {
    const t = this, o = this.json, s = this.extensions, n = o.meshes[e], r = n.primitives, A = [];
    for (let i = 0, a = r.length; i < a; i++) {
      const B = r[i].material === void 0 ? kt(this.cache) : this.getDependency("material", r[i].material);
      A.push(B);
    }
    return A.push(t.loadGeometries(r)), Promise.all(A).then(function(i) {
      const a = i.slice(0, i.length - 1), B = i[i.length - 1], c = [];
      for (let u = 0, h = B.length; u < h; u++) {
        const d = B[u], f = r[u];
        let F;
        const p = a[u];
        if (f.mode === D.TRIANGLES || f.mode === D.TRIANGLE_STRIP || f.mode === D.TRIANGLE_FAN || f.mode === void 0)
          F = n.isSkinnedMesh === !0 ? new Ye(d, p) : new je(d, p), F.isSkinnedMesh === !0 && F.normalizeSkinWeights(), f.mode === D.TRIANGLE_STRIP ? F.geometry = Ce(F.geometry, fe) : f.mode === D.TRIANGLE_FAN && (F.geometry = Ce(F.geometry, se));
        else if (f.mode === D.LINES)
          F = new Ze(d, p);
        else if (f.mode === D.LINE_STRIP)
          F = new We(d, p);
        else if (f.mode === D.LINE_LOOP)
          F = new Ve(d, p);
        else if (f.mode === D.POINTS)
          F = new qe(d, p);
        else
          throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + f.mode);
        Object.keys(F.geometry.morphAttributes).length > 0 && Yt(F, n), F.name = t.createUniqueName(n.name || "mesh_" + e), L(F, n), f.extensions && O(s, F, f), t.assignFinalMaterial(F), c.push(F);
      }
      for (let u = 0, h = c.length; u < h; u++)
        t.associations.set(c[u], {
          meshes: e,
          primitives: u
        });
      if (c.length === 1)
        return n.extensions && O(s, c[0], n), c[0];
      const C = new V();
      n.extensions && O(s, C, n), t.associations.set(C, { meshes: e });
      for (let u = 0, h = c.length; u < h; u++)
        C.add(c[u]);
      return C;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#cameras
   * @param {number} cameraIndex
   * @return {Promise<THREE.Camera>}
   */
  loadCamera(e) {
    let t;
    const o = this.json.cameras[e], s = o[o.type];
    if (!s) {
      console.warn("THREE.GLTFLoader: Missing camera parameters.");
      return;
    }
    return o.type === "perspective" ? t = new ze(
      $e.radToDeg(s.yfov),
      s.aspectRatio || 1,
      s.znear || 1,
      s.zfar || 2e6
    ) : o.type === "orthographic" && (t = new et(-s.xmag, s.xmag, s.ymag, -s.ymag, s.znear, s.zfar)), o.name && (t.name = this.createUniqueName(o.name)), L(t, o), Promise.resolve(t);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#skins
   * @param {number} skinIndex
   * @return {Promise<Skeleton>}
   */
  loadSkin(e) {
    const t = this.json.skins[e], o = [];
    for (let s = 0, n = t.joints.length; s < n; s++)
      o.push(this._loadNodeShallow(t.joints[s]));
    return t.inverseBindMatrices !== void 0 ? o.push(this.getDependency("accessor", t.inverseBindMatrices)) : o.push(null), Promise.all(o).then(function(s) {
      const n = s.pop(), r = s, A = [], i = [];
      for (let a = 0, B = r.length; a < B; a++) {
        const c = r[a];
        if (c) {
          A.push(c);
          const C = new j();
          n !== null && C.fromArray(n.array, a * 16), i.push(C);
        } else
          console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[a]);
      }
      return new tt(A, i);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#animations
   * @param {number} animationIndex
   * @return {Promise<AnimationClip>}
   */
  loadAnimation(e) {
    const o = this.json.animations[e], s = o.name ? o.name : "animation_" + e, n = [], r = [], A = [], i = [], a = [];
    for (let B = 0, c = o.channels.length; B < c; B++) {
      const C = o.channels[B], u = o.samplers[C.sampler], h = C.target, d = h.node, f = o.parameters !== void 0 ? o.parameters[u.input] : u.input, F = o.parameters !== void 0 ? o.parameters[u.output] : u.output;
      h.node !== void 0 && (n.push(this.getDependency("node", d)), r.push(this.getDependency("accessor", f)), A.push(this.getDependency("accessor", F)), i.push(u), a.push(h));
    }
    return Promise.all([
      Promise.all(n),
      Promise.all(r),
      Promise.all(A),
      Promise.all(i),
      Promise.all(a)
    ]).then(function(B) {
      const c = B[0], C = B[1], u = B[2], h = B[3], d = B[4], f = [];
      for (let F = 0, p = c.length; F < p; F++) {
        const E = c[F], m = C[F], R = u[F], M = h[F], I = d[F];
        if (E === void 0)
          continue;
        E.updateMatrix();
        let H;
        switch (J[I.path]) {
          case J.weights:
            H = ht;
            break;
          case J.rotation:
            H = ce;
            break;
          case J.position:
          case J.scale:
          default:
            H = ut;
            break;
        }
        const y = E.name ? E.name : E.uuid, Le = M.interpolation !== void 0 ? vt[M.interpolation] : De, _ = [];
        J[I.path] === J.weights ? E.traverse(function(T) {
          T.morphTargetInfluences && _.push(T.name ? T.name : T.uuid);
        }) : _.push(y);
        let U = R.array;
        if (R.normalized) {
          const T = oe(U.constructor), v = new Float32Array(U.length);
          for (let g = 0, ae = U.length; g < ae; g++)
            v[g] = U[g] * T;
          U = v;
        }
        for (let T = 0, v = _.length; T < v; T++) {
          const g = new H(
            _[T] + "." + J[I.path],
            m.array,
            U,
            Le
          );
          M.interpolation === "CUBICSPLINE" && (g.createInterpolant = function(be) {
            const Oe = this instanceof ce ? _t : He;
            return new Oe(this.times, this.values, this.getValueSize() / 3, be);
          }, g.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0), f.push(g);
        }
      }
      return new st(s, void 0, f);
    });
  }
  createNodeMesh(e) {
    const t = this.json, o = this, s = t.nodes[e];
    return s.mesh === void 0 ? null : o.getDependency("mesh", s.mesh).then(function(n) {
      const r = o._getNodeRef(o.meshCache, s.mesh, n);
      return s.weights !== void 0 && r.traverse(function(A) {
        if (A.isMesh)
          for (let i = 0, a = s.weights.length; i < a; i++)
            A.morphTargetInfluences[i] = s.weights[i];
      }), r;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#nodes-and-hierarchy
   * @param {number} nodeIndex
   * @return {Promise<Object3D>}
   */
  loadNode(e) {
    const t = this.json, o = this, s = t.nodes[e], n = o._loadNodeShallow(e), r = [], A = s.children || [];
    for (let a = 0, B = A.length; a < B; a++)
      r.push(o.getDependency("node", A[a]));
    const i = s.skin === void 0 ? Promise.resolve(null) : o.getDependency("skin", s.skin);
    return Promise.all([n, Promise.all(r), i]).then(function(a) {
      const B = a[0], c = a[1], C = a[2];
      C !== null && B.traverse(function(u) {
        u.isSkinnedMesh && u.bind(C, Wt);
      });
      for (let u = 0, h = c.length; u < h; u++)
        B.add(c[u]);
      return B;
    });
  }
  // ._loadNodeShallow() parses a single node.
  // skin and child nodes are created and added in .loadNode() (no '_' prefix).
  _loadNodeShallow(e) {
    const t = this.json, o = this.extensions, s = this;
    if (this.nodeCache[e] !== void 0)
      return this.nodeCache[e];
    const n = t.nodes[e], r = n.name ? s.createUniqueName(n.name) : "", A = [], i = s._invokeOne(function(a) {
      return a.createNodeMesh && a.createNodeMesh(e);
    });
    return i && A.push(i), n.camera !== void 0 && A.push(
      s.getDependency("camera", n.camera).then(function(a) {
        return s._getNodeRef(s.cameraCache, n.camera, a);
      })
    ), s._invokeAll(function(a) {
      return a.createNodeAttachment && a.createNodeAttachment(e);
    }).forEach(function(a) {
      A.push(a);
    }), this.nodeCache[e] = Promise.all(A).then(function(a) {
      let B;
      if (n.isBone === !0 ? B = new nt() : a.length > 1 ? B = new V() : a.length === 1 ? B = a[0] : B = new Ee(), B !== a[0])
        for (let c = 0, C = a.length; c < C; c++)
          B.add(a[c]);
      if (n.name && (B.userData.name = n.name, B.name = r), L(B, n), n.extensions && O(o, B, n), n.matrix !== void 0) {
        const c = new j();
        c.fromArray(n.matrix), B.applyMatrix4(c);
      } else
        n.translation !== void 0 && B.position.fromArray(n.translation), n.rotation !== void 0 && B.quaternion.fromArray(n.rotation), n.scale !== void 0 && B.scale.fromArray(n.scale);
      return s.associations.has(B) || s.associations.set(B, {}), s.associations.get(B).nodes = e, B;
    }), this.nodeCache[e];
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#scenes
   * @param {number} sceneIndex
   * @return {Promise<Group>}
   */
  loadScene(e) {
    const t = this.extensions, o = this.json.scenes[e], s = this, n = new V();
    o.name && (n.name = s.createUniqueName(o.name)), L(n, o), o.extensions && O(t, n, o);
    const r = o.nodes || [], A = [];
    for (let i = 0, a = r.length; i < a; i++)
      A.push(s.getDependency("node", r[i]));
    return Promise.all(A).then(function(i) {
      for (let B = 0, c = i.length; B < c; B++)
        n.add(i[B]);
      const a = (B) => {
        const c = /* @__PURE__ */ new Map();
        for (const [C, u] of s.associations)
          (C instanceof W || C instanceof Be) && c.set(C, u);
        return B.traverse((C) => {
          const u = s.associations.get(C);
          u != null && c.set(C, u);
        }), c;
      };
      return s.associations = a(n), n;
    });
  }
}
function qt(l, e, t) {
  const o = e.attributes, s = new dt();
  if (o.POSITION !== void 0) {
    const A = t.json.accessors[o.POSITION], i = A.min, a = A.max;
    if (i !== void 0 && a !== void 0) {
      if (s.set(new P(i[0], i[1], i[2]), new P(a[0], a[1], a[2])), A.normalized) {
        const B = oe(x[A.componentType]);
        s.min.multiplyScalar(B), s.max.multiplyScalar(B);
      }
    } else {
      console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      return;
    }
  } else
    return;
  const n = e.targets;
  if (n !== void 0) {
    const A = new P(), i = new P();
    for (let a = 0, B = n.length; a < B; a++) {
      const c = n[a];
      if (c.POSITION !== void 0) {
        const C = t.json.accessors[c.POSITION], u = C.min, h = C.max;
        if (u !== void 0 && h !== void 0) {
          if (i.setX(Math.max(Math.abs(u[0]), Math.abs(h[0]))), i.setY(Math.max(Math.abs(u[1]), Math.abs(h[1]))), i.setZ(Math.max(Math.abs(u[2]), Math.abs(h[2]))), C.normalized) {
            const d = oe(x[C.componentType]);
            i.multiplyScalar(d);
          }
          A.max(i);
        } else
          console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      }
    }
    s.expandByVector(A);
  }
  l.boundingBox = s;
  const r = new ft();
  s.getCenter(r.center), r.radius = s.min.distanceTo(s.max) / 2, l.boundingSphere = r;
}
function de(l, e, t) {
  const o = e.attributes, s = [];
  function n(r, A) {
    return t.getDependency("accessor", r).then(function(i) {
      l.setAttribute(A, i);
    });
  }
  for (const r in o) {
    const A = re[r] || r.toLowerCase();
    A in l.attributes || s.push(n(o[r], A));
  }
  if (e.indices !== void 0 && !l.index) {
    const r = t.getDependency("accessor", e.indices).then(function(A) {
      l.setIndex(A);
    });
    s.push(r);
  }
  return L(l, e), qt(l, e, t), Promise.all(s).then(function() {
    return e.targets !== void 0 ? Xt(l, e.targets, t) : l;
  });
}
const ee = /* @__PURE__ */ new WeakMap();
class zt extends Fe {
  constructor(e) {
    super(e), this.decoderPath = "", this.decoderConfig = {}, this.decoderBinary = null, this.decoderPending = null, this.workerLimit = 4, this.workerPool = [], this.workerNextTaskID = 1, this.workerSourceURL = "", this.defaultAttributeIDs = {
      position: "POSITION",
      normal: "NORMAL",
      color: "COLOR",
      uv: "TEX_COORD"
    }, this.defaultAttributeTypes = {
      position: "Float32Array",
      normal: "Float32Array",
      color: "Float32Array",
      uv: "Float32Array"
    };
  }
  setDecoderPath(e) {
    return this.decoderPath = e, this;
  }
  setDecoderConfig(e) {
    return this.decoderConfig = e, this;
  }
  setWorkerLimit(e) {
    return this.workerLimit = e, this;
  }
  load(e, t, o, s) {
    const n = new Y(this.manager);
    n.setPath(this.path), n.setResponseType("arraybuffer"), n.setRequestHeader(this.requestHeader), n.setWithCredentials(this.withCredentials), n.load(
      e,
      (r) => {
        const A = {
          attributeIDs: this.defaultAttributeIDs,
          attributeTypes: this.defaultAttributeTypes,
          useUniqueIDs: !1
        };
        this.decodeGeometry(r, A).then(t).catch(s);
      },
      o,
      s
    );
  }
  /** @deprecated Kept for backward-compatibility with previous DRACOLoader versions. */
  decodeDracoFile(e, t, o, s) {
    const n = {
      attributeIDs: o || this.defaultAttributeIDs,
      attributeTypes: s || this.defaultAttributeTypes,
      useUniqueIDs: !!o
    };
    this.decodeGeometry(e, n).then(t);
  }
  decodeGeometry(e, t) {
    for (const i in t.attributeTypes) {
      const a = t.attributeTypes[i];
      a.BYTES_PER_ELEMENT !== void 0 && (t.attributeTypes[i] = a.name);
    }
    const o = JSON.stringify(t);
    if (ee.has(e)) {
      const i = ee.get(e);
      if (i.key === o)
        return i.promise;
      if (e.byteLength === 0)
        throw new Error(
          "THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred."
        );
    }
    let s;
    const n = this.workerNextTaskID++, r = e.byteLength, A = this._getWorker(n, r).then((i) => (s = i, new Promise((a, B) => {
      s._callbacks[n] = { resolve: a, reject: B }, s.postMessage({ type: "decode", id: n, taskConfig: t, buffer: e }, [e]);
    }))).then((i) => this._createGeometry(i.geometry));
    return A.catch(() => !0).then(() => {
      s && n && this._releaseTask(s, n);
    }), ee.set(e, {
      key: o,
      promise: A
    }), A;
  }
  _createGeometry(e) {
    const t = new Ie();
    e.index && t.setIndex(new w(e.index.array, 1));
    for (let o = 0; o < e.attributes.length; o++) {
      const s = e.attributes[o], n = s.name, r = s.array, A = s.itemSize;
      t.setAttribute(n, new w(r, A));
    }
    return t;
  }
  _loadLibrary(e, t) {
    const o = new Y(this.manager);
    return o.setPath(this.decoderPath), o.setResponseType(t), o.setWithCredentials(this.withCredentials), new Promise((s, n) => {
      o.load(e, s, void 0, n);
    });
  }
  preload() {
    return this._initDecoder(), this;
  }
  _initDecoder() {
    if (this.decoderPending)
      return this.decoderPending;
    const e = typeof WebAssembly != "object" || this.decoderConfig.type === "js", t = [];
    return e ? t.push(this._loadLibrary("draco_decoder.js", "text")) : (t.push(this._loadLibrary("draco_wasm_wrapper.js", "text")), t.push(this._loadLibrary("draco_decoder.wasm", "arraybuffer"))), this.decoderPending = Promise.all(t).then((o) => {
      const s = o[0];
      e || (this.decoderConfig.wasmBinary = o[1]);
      const n = $t.toString(), r = [
        "/* draco decoder */",
        s,
        "",
        "/* worker */",
        n.substring(n.indexOf("{") + 1, n.lastIndexOf("}"))
      ].join(`
`);
      this.workerSourceURL = URL.createObjectURL(new Blob([r]));
    }), this.decoderPending;
  }
  _getWorker(e, t) {
    return this._initDecoder().then(() => {
      if (this.workerPool.length < this.workerLimit) {
        const s = new Worker(this.workerSourceURL);
        s._callbacks = {}, s._taskCosts = {}, s._taskLoad = 0, s.postMessage({ type: "init", decoderConfig: this.decoderConfig }), s.onmessage = function(n) {
          const r = n.data;
          switch (r.type) {
            case "decode":
              s._callbacks[r.id].resolve(r);
              break;
            case "error":
              s._callbacks[r.id].reject(r);
              break;
            default:
              console.error('THREE.DRACOLoader: Unexpected message, "' + r.type + '"');
          }
        }, this.workerPool.push(s);
      } else
        this.workerPool.sort(function(s, n) {
          return s._taskLoad > n._taskLoad ? -1 : 1;
        });
      const o = this.workerPool[this.workerPool.length - 1];
      return o._taskCosts[e] = t, o._taskLoad += t, o;
    });
  }
  _releaseTask(e, t) {
    e._taskLoad -= e._taskCosts[t], delete e._callbacks[t], delete e._taskCosts[t];
  }
  debug() {
    console.log(
      "Task load: ",
      this.workerPool.map((e) => e._taskLoad)
    );
  }
  dispose() {
    for (let e = 0; e < this.workerPool.length; ++e)
      this.workerPool[e].terminate();
    return this.workerPool.length = 0, this;
  }
}
function $t() {
  let l, e;
  onmessage = function(r) {
    const A = r.data;
    switch (A.type) {
      case "init":
        l = A.decoderConfig, e = new Promise(function(B) {
          l.onModuleLoaded = function(c) {
            B({ draco: c });
          }, DracoDecoderModule(l);
        });
        break;
      case "decode":
        const i = A.buffer, a = A.taskConfig;
        e.then((B) => {
          const c = B.draco, C = new c.Decoder(), u = new c.DecoderBuffer();
          u.Init(new Int8Array(i), i.byteLength);
          try {
            const h = t(c, C, u, a), d = h.attributes.map((f) => f.array.buffer);
            h.index && d.push(h.index.array.buffer), self.postMessage({ type: "decode", id: A.id, geometry: h }, d);
          } catch (h) {
            console.error(h), self.postMessage({ type: "error", id: A.id, error: h.message });
          } finally {
            c.destroy(u), c.destroy(C);
          }
        });
        break;
    }
  };
  function t(r, A, i, a) {
    const B = a.attributeIDs, c = a.attributeTypes;
    let C, u;
    const h = A.GetEncodedGeometryType(i);
    if (h === r.TRIANGULAR_MESH)
      C = new r.Mesh(), u = A.DecodeBufferToMesh(i, C);
    else if (h === r.POINT_CLOUD)
      C = new r.PointCloud(), u = A.DecodeBufferToPointCloud(i, C);
    else
      throw new Error("THREE.DRACOLoader: Unexpected geometry type.");
    if (!u.ok() || C.ptr === 0)
      throw new Error("THREE.DRACOLoader: Decoding failed: " + u.error_msg());
    const d = { index: null, attributes: [] };
    for (const f in B) {
      const F = self[c[f]];
      let p, E;
      if (a.useUniqueIDs)
        E = B[f], p = A.GetAttributeByUniqueId(C, E);
      else {
        if (E = A.GetAttributeId(C, r[B[f]]), E === -1)
          continue;
        p = A.GetAttribute(C, E);
      }
      d.attributes.push(s(r, A, C, f, F, p));
    }
    return h === r.TRIANGULAR_MESH && (d.index = o(r, A, C)), r.destroy(C), d;
  }
  function o(r, A, i) {
    const B = i.num_faces() * 3, c = B * 4, C = r._malloc(c);
    A.GetTrianglesUInt32Array(i, c, C);
    const u = new Uint32Array(r.HEAPF32.buffer, C, B).slice();
    return r._free(C), { array: u, itemSize: 1 };
  }
  function s(r, A, i, a, B, c) {
    const C = c.num_components(), h = i.num_points() * C, d = h * B.BYTES_PER_ELEMENT, f = n(r, B), F = r._malloc(d);
    A.GetAttributeDataArrayForAllPoints(i, c, f, d, F);
    const p = new B(r.HEAPF32.buffer, F, h).slice();
    return r._free(F), {
      name: a,
      array: p,
      itemSize: C
    };
  }
  function n(r, A) {
    switch (A) {
      case Float32Array:
        return r.DT_FLOAT32;
      case Int8Array:
        return r.DT_INT8;
      case Int16Array:
        return r.DT_INT16;
      case Int32Array:
        return r.DT_INT32;
      case Uint8Array:
        return r.DT_UINT8;
      case Uint16Array:
        return r.DT_UINT16;
      case Uint32Array:
        return r.DT_UINT32;
    }
  }
}
let k;
const te = () => {
  if (k)
    return k;
  const l = "B9h9z9tFBBBF8fL9gBB9gLaaaaaFa9gEaaaB9gFaFa9gEaaaFaEMcBFFFGGGEIIILF9wFFFLEFBFKNFaFCx/IFMO/LFVK9tv9t9vq95GBt9f9f939h9z9t9f9j9h9s9s9f9jW9vq9zBBp9tv9z9o9v9wW9f9kv9j9v9kv9WvqWv94h919m9mvqBF8Z9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv94h919m9mvqBGy9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv949TvZ91v9u9jvBEn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9P9jWBIi9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9R919hWBLn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9F949wBKI9z9iqlBOc+x8ycGBM/qQFTa8jUUUUBCU/EBlHL8kUUUUBC9+RKGXAGCFJAI9LQBCaRKAE2BBC+gF9HQBALAEAIJHOAGlAGTkUUUBRNCUoBAG9uC/wgBZHKCUGAKCUG9JyRVAECFJRICBRcGXEXAcAF9PQFAVAFAclAcAVJAF9JyRMGXGXAG9FQBAMCbJHKC9wZRSAKCIrCEJCGrRQANCUGJRfCBRbAIRTEXGXAOATlAQ9PQBCBRISEMATAQJRIGXAS9FQBCBRtCBREEXGXAOAIlCi9PQBCBRISLMANCU/CBJAEJRKGXGXGXGXGXATAECKrJ2BBAtCKZrCEZfIBFGEBMAKhB83EBAKCNJhB83EBSEMAKAI2BIAI2BBHmCKrHYAYCE6HYy86BBAKCFJAICIJAYJHY2BBAmCIrCEZHPAPCE6HPy86BBAKCGJAYAPJHY2BBAmCGrCEZHPAPCE6HPy86BBAKCEJAYAPJHY2BBAmCEZHmAmCE6Hmy86BBAKCIJAYAmJHY2BBAI2BFHmCKrHPAPCE6HPy86BBAKCLJAYAPJHY2BBAmCIrCEZHPAPCE6HPy86BBAKCKJAYAPJHY2BBAmCGrCEZHPAPCE6HPy86BBAKCOJAYAPJHY2BBAmCEZHmAmCE6Hmy86BBAKCNJAYAmJHY2BBAI2BGHmCKrHPAPCE6HPy86BBAKCVJAYAPJHY2BBAmCIrCEZHPAPCE6HPy86BBAKCcJAYAPJHY2BBAmCGrCEZHPAPCE6HPy86BBAKCMJAYAPJHY2BBAmCEZHmAmCE6Hmy86BBAKCSJAYAmJHm2BBAI2BEHICKrHYAYCE6HYy86BBAKCQJAmAYJHm2BBAICIrCEZHYAYCE6HYy86BBAKCfJAmAYJHm2BBAICGrCEZHYAYCE6HYy86BBAKCbJAmAYJHK2BBAICEZHIAICE6HIy86BBAKAIJRISGMAKAI2BNAI2BBHmCIrHYAYCb6HYy86BBAKCFJAICNJAYJHY2BBAmCbZHmAmCb6Hmy86BBAKCGJAYAmJHm2BBAI2BFHYCIrHPAPCb6HPy86BBAKCEJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCIJAmAYJHm2BBAI2BGHYCIrHPAPCb6HPy86BBAKCLJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCKJAmAYJHm2BBAI2BEHYCIrHPAPCb6HPy86BBAKCOJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCNJAmAYJHm2BBAI2BIHYCIrHPAPCb6HPy86BBAKCVJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCcJAmAYJHm2BBAI2BLHYCIrHPAPCb6HPy86BBAKCMJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCSJAmAYJHm2BBAI2BKHYCIrHPAPCb6HPy86BBAKCQJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCfJAmAYJHm2BBAI2BOHICIrHYAYCb6HYy86BBAKCbJAmAYJHK2BBAICbZHIAICb6HIy86BBAKAIJRISFMAKAI8pBB83BBAKCNJAICNJ8pBB83BBAICTJRIMAtCGJRtAECTJHEAS9JQBMMGXAIQBCBRISEMGXAM9FQBANAbJ2BBRtCBRKAfREEXAEANCU/CBJAKJ2BBHTCFrCBATCFZl9zAtJHt86BBAEAGJREAKCFJHKAM9HQBMMAfCFJRfAIRTAbCFJHbAG9HQBMMABAcAG9sJANCUGJAMAG9sTkUUUBpANANCUGJAMCaJAG9sJAGTkUUUBpMAMCBAIyAcJRcAIQBMC9+RKSFMCBC99AOAIlAGCAAGCA9Ly6yRKMALCU/EBJ8kUUUUBAKM+OmFTa8jUUUUBCoFlHL8kUUUUBC9+RKGXAFCE9uHOCtJAI9LQBCaRKAE2BBHNC/wFZC/gF9HQBANCbZHVCF9LQBALCoBJCgFCUFT+JUUUBpALC84Jha83EBALC8wJha83EBALC8oJha83EBALCAJha83EBALCiJha83EBALCTJha83EBALha83ENALha83EBAEAIJC9wJRcAECFJHNAOJRMGXAF9FQBCQCbAVCF6yRSABRECBRVCBRQCBRfCBRICBRKEXGXAMAcuQBC9+RKSEMGXGXAN2BBHOC/vF9LQBALCoBJAOCIrCa9zAKJCbZCEWJHb8oGIRTAb8oGBRtGXAOCbZHbAS9PQBALAOCa9zAIJCbZCGWJ8oGBAVAbyROAb9FRbGXGXAGCG9HQBABAt87FBABCIJAO87FBABCGJAT87FBSFMAEAtjGBAECNJAOjGBAECIJATjGBMAVAbJRVALCoBJAKCEWJHmAOjGBAmATjGIALAICGWJAOjGBALCoBJAKCFJCbZHKCEWJHTAtjGBATAOjGIAIAbJRIAKCFJRKSGMGXGXAbCb6QBAQAbJAbC989zJCFJRQSFMAM1BBHbCgFZROGXGXAbCa9MQBAMCFJRMSFMAM1BFHbCgBZCOWAOCgBZqROGXAbCa9MQBAMCGJRMSFMAM1BGHbCgBZCfWAOqROGXAbCa9MQBAMCEJRMSFMAM1BEHbCgBZCdWAOqROGXAbCa9MQBAMCIJRMSFMAM2BIC8cWAOqROAMCLJRMMAOCFrCBAOCFZl9zAQJRQMGXGXAGCG9HQBABAt87FBABCIJAQ87FBABCGJAT87FBSFMAEAtjGBAECNJAQjGBAECIJATjGBMALCoBJAKCEWJHOAQjGBAOATjGIALAICGWJAQjGBALCoBJAKCFJCbZHKCEWJHOAtjGBAOAQjGIAICFJRIAKCFJRKSFMGXAOCDF9LQBALAIAcAOCbZJ2BBHbCIrHTlCbZCGWJ8oGBAVCFJHtATyROALAIAblCbZCGWJ8oGBAtAT9FHmJHtAbCbZHTyRbAT9FRTGXGXAGCG9HQBABAV87FBABCIJAb87FBABCGJAO87FBSFMAEAVjGBAECNJAbjGBAECIJAOjGBMALAICGWJAVjGBALCoBJAKCEWJHYAOjGBAYAVjGIALAICFJHICbZCGWJAOjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAIAmJCbZHICGWJAbjGBALCoBJAKCGJCbZHKCEWJHOAVjGBAOAbjGIAKCFJRKAIATJRIAtATJRVSFMAVCBAM2BBHYyHTAOC/+F6HPJROAYCbZRtGXGXAYCIrHmQBAOCFJRbSFMAORbALAIAmlCbZCGWJ8oGBROMGXGXAtQBAbCFJRVSFMAbRVALAIAYlCbZCGWJ8oGBRbMGXGXAP9FQBAMCFJRYSFMAM1BFHYCgFZRTGXGXAYCa9MQBAMCGJRYSFMAM1BGHYCgBZCOWATCgBZqRTGXAYCa9MQBAMCEJRYSFMAM1BEHYCgBZCfWATqRTGXAYCa9MQBAMCIJRYSFMAM1BIHYCgBZCdWATqRTGXAYCa9MQBAMCLJRYSFMAMCKJRYAM2BLC8cWATqRTMATCFrCBATCFZl9zAQJHQRTMGXGXAmCb6QBAYRPSFMAY1BBHMCgFZROGXGXAMCa9MQBAYCFJRPSFMAY1BFHMCgBZCOWAOCgBZqROGXAMCa9MQBAYCGJRPSFMAY1BGHMCgBZCfWAOqROGXAMCa9MQBAYCEJRPSFMAY1BEHMCgBZCdWAOqROGXAMCa9MQBAYCIJRPSFMAYCLJRPAY2BIC8cWAOqROMAOCFrCBAOCFZl9zAQJHQROMGXGXAtCb6QBAPRMSFMAP1BBHMCgFZRbGXGXAMCa9MQBAPCFJRMSFMAP1BFHMCgBZCOWAbCgBZqRbGXAMCa9MQBAPCGJRMSFMAP1BGHMCgBZCfWAbqRbGXAMCa9MQBAPCEJRMSFMAP1BEHMCgBZCdWAbqRbGXAMCa9MQBAPCIJRMSFMAPCLJRMAP2BIC8cWAbqRbMAbCFrCBAbCFZl9zAQJHQRbMGXGXAGCG9HQBABAT87FBABCIJAb87FBABCGJAO87FBSFMAEATjGBAECNJAbjGBAECIJAOjGBMALCoBJAKCEWJHYAOjGBAYATjGIALAICGWJATjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAICFJHICbZCGWJAOjGBALCoBJAKCGJCbZCEWJHOATjGBAOAbjGIALAIAm9FAmCb6qJHICbZCGWJAbjGBAIAt9FAtCb6qJRIAKCEJRKMANCFJRNABCKJRBAECSJREAKCbZRKAICbZRIAfCEJHfAF9JQBMMCBC99AMAc6yRKMALCoFJ8kUUUUBAKM/tIFGa8jUUUUBCTlRLC9+RKGXAFCLJAI9LQBCaRKAE2BBC/+FZC/QF9HQBALhB83ENAECFJRKAEAIJC98JREGXAF9FQBGXAGCG6QBEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMALCNJAICFZCGWqHGAICGrCBAICFrCFZl9zAG8oGBJHIjGBABAIjGBABCIJRBAFCaJHFQBSGMMEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMABAICGrCBAICFrCFZl9zALCNJAICFZCGWqHI8oGBJHG87FBAIAGjGBABCGJRBAFCaJHFQBMMCBC99AKAE6yRKMAKM+lLKFaF99GaG99FaG99GXGXAGCI9HQBAF9FQFEXGXGX9DBBB8/9DBBB+/ABCGJHG1BB+yAB1BBHE+yHI+L+TABCFJHL1BBHK+yHO+L+THN9DBBBB9gHVyAN9DBB/+hANAN+U9DBBBBANAVyHcAc+MHMAECa3yAI+SHIAI+UAcAMAKCa3yAO+SHcAc+U+S+S+R+VHO+U+SHN+L9DBBB9P9d9FQBAN+oRESFMCUUUU94REMAGAE86BBGXGX9DBBB8/9DBBB+/Ac9DBBBB9gyAcAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMALAG86BBGXGX9DBBB8/9DBBB+/AI9DBBBB9gyAIAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMABAG86BBABCIJRBAFCaJHFQBSGMMAF9FQBEXGXGX9DBBB8/9DBBB+/ABCIJHG8uFB+yAB8uFBHE+yHI+L+TABCGJHL8uFBHK+yHO+L+THN9DBBBB9gHVyAN9DB/+g6ANAN+U9DBBBBANAVyHcAc+MHMAECa3yAI+SHIAI+UAcAMAKCa3yAO+SHcAc+U+S+S+R+VHO+U+SHN+L9DBBB9P9d9FQBAN+oRESFMCUUUU94REMAGAE87FBGXGX9DBBB8/9DBBB+/Ac9DBBBB9gyAcAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMALAG87FBGXGX9DBBB8/9DBBB+/AI9DBBBB9gyAIAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMABAG87FBABCNJRBAFCaJHFQBMMM/SEIEaE99EaF99GXAF9FQBCBREABRIEXGXGX9D/zI818/AICKJ8uFBHLCEq+y+VHKAI8uFB+y+UHO9DB/+g6+U9DBBB8/9DBBB+/AO9DBBBB9gy+SHN+L9DBBB9P9d9FQBAN+oRVSFMCUUUU94RVMAICIJ8uFBRcAICGJ8uFBRMABALCFJCEZAEqCFWJAV87FBGXGXAKAM+y+UHN9DB/+g6+U9DBBB8/9DBBB+/AN9DBBBB9gy+SHS+L9DBBB9P9d9FQBAS+oRMSFMCUUUU94RMMABALCGJCEZAEqCFWJAM87FBGXGXAKAc+y+UHK9DB/+g6+U9DBBB8/9DBBB+/AK9DBBBB9gy+SHS+L9DBBB9P9d9FQBAS+oRcSFMCUUUU94RcMABALCaJCEZAEqCFWJAc87FBGXGX9DBBU8/AOAO+U+TANAN+U+TAKAK+U+THO9DBBBBAO9DBBBB9gy+R9DB/+g6+U9DBBB8/+SHO+L9DBBB9P9d9FQBAO+oRcSFMCUUUU94RcMABALCEZAEqCFWJAc87FBAICNJRIAECIJREAFCaJHFQBMMM9JBGXAGCGrAF9sHF9FQBEXABAB8oGBHGCNWCN91+yAGCi91CnWCUUU/8EJ+++U84GBABCIJRBAFCaJHFQBMMM9TFEaCBCB8oGUkUUBHFABCEJC98ZJHBjGUkUUBGXGXAB8/BCTWHGuQBCaREABAGlCggEJCTrXBCa6QFMAFREMAEM/lFFFaGXGXAFABqCEZ9FQBABRESFMGXGXAGCT9PQBABRESFMABREEXAEAF8oGBjGBAECIJAFCIJ8oGBjGBAECNJAFCNJ8oGBjGBAECSJAFCSJ8oGBjGBAECTJREAFCTJRFAGC9wJHGCb9LQBMMAGCI9JQBEXAEAF8oGBjGBAFCIJRFAECIJREAGC98JHGCE9LQBMMGXAG9FQBEXAEAF2BB86BBAECFJREAFCFJRFAGCaJHGQBMMABMoFFGaGXGXABCEZ9FQBABRESFMAFCgFZC+BwsN9sRIGXGXAGCT9PQBABRESFMABREEXAEAIjGBAECSJAIjGBAECNJAIjGBAECIJAIjGBAECTJREAGC9wJHGCb9LQBMMAGCI9JQBEXAEAIjGBAECIJREAGC98JHGCE9LQBMMGXAG9FQBEXAEAF86BBAECFJREAGCaJHGQBMMABMMMFBCUNMIT9kBB", e = "B9h9z9tFBBBFiI9gBB9gLaaaaaFa9gEaaaB9gFaFaEMcBBFBFFGGGEILF9wFFFLEFBFKNFaFCx/aFMO/LFVK9tv9t9vq95GBt9f9f939h9z9t9f9j9h9s9s9f9jW9vq9zBBp9tv9z9o9v9wW9f9kv9j9v9kv9WvqWv94h919m9mvqBG8Z9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv94h919m9mvqBIy9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv949TvZ91v9u9jvBLn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9P9jWBKi9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9R919hWBOn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9F949wBNI9z9iqlBVc+N9IcIBTEM9+FLa8jUUUUBCTlRBCBRFEXCBRGCBREEXABCNJAGJAECUaAFAGrCFZHIy86BBAEAIJREAGCFJHGCN9HQBMAFCx+YUUBJAE86BBAFCEWCxkUUBJAB8pEN83EBAFCFJHFCUG9HQBMMk8lLbaE97F9+FaL978jUUUUBCU/KBlHL8kUUUUBC9+RKGXAGCFJAI9LQBCaRKAE2BBC+gF9HQBALAEAIJHOAGlAG/8cBBCUoBAG9uC/wgBZHKCUGAKCUG9JyRNAECFJRKCBRVGXEXAVAF9PQFANAFAVlAVANJAF9JyRcGXGXAG9FQBAcCbJHIC9wZHMCE9sRSAMCFWRQAICIrCEJCGrRfCBRbEXAKRTCBRtGXEXGXAOATlAf9PQBCBRKSLMALCU/CBJAtAM9sJRmATAfJRKCBREGXAMCoB9JQBAOAKlC/gB9JQBCBRIEXAmAIJREGXGXGXGXGXATAICKrJ2BBHYCEZfIBFGEBMAECBDtDMIBSEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCIJAeDeBJAiCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCNJAeDeBJAiCx+YUUBJ2BBJRKSFMAEAKDBBBDMIBAKCTJRKMGXGXGXGXGXAYCGrCEZfIBFGEBMAECBDtDMITSEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMITAKCIJAeDeBJAiCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMITAKCNJAeDeBJAiCx+YUUBJ2BBJRKSFMAEAKDBBBDMITAKCTJRKMGXGXGXGXGXAYCIrCEZfIBFGEBMAECBDtDMIASEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIAAKCIJAeDeBJAiCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIAAKCNJAeDeBJAiCx+YUUBJ2BBJRKSFMAEAKDBBBDMIAAKCTJRKMGXGXGXGXGXAYCKrfIBFGEBMAECBDtDMI8wSEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHYCEWCxkUUBJDBEBAYCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHYCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMI8wAKCIJAeDeBJAYCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHYCEWCxkUUBJDBEBAYCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHYCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMI8wAKCNJAeDeBJAYCx+YUUBJ2BBJRKSFMAEAKDBBBDMI8wAKCTJRKMAICoBJREAICUFJAM9LQFAERIAOAKlC/fB9LQBMMGXAEAM9PQBAECErRIEXGXAOAKlCi9PQBCBRKSOMAmAEJRYGXGXGXGXGXATAECKrJ2BBAICKZrCEZfIBFGEBMAYCBDtDMIBSEMAYAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCIJAeDeBJAiCx+YUUBJ2BBJRKSGMAYAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCNJAeDeBJAiCx+YUUBJ2BBJRKSFMAYAKDBBBDMIBAKCTJRKMAICGJRIAECTJHEAM9JQBMMGXAK9FQBAKRTAtCFJHtCI6QGSFMMCBRKSEMGXAM9FQBALCUGJAbJREALAbJDBGBReCBRYEXAEALCU/CBJAYJHIDBIBHdCFD9tAdCFDbHPD9OD9hD9RHdAIAMJDBIBH8ZCFD9tA8ZAPD9OD9hD9RH8ZDQBTFtGmEYIPLdKeOnHpAIAQJDBIBHyCFD9tAyAPD9OD9hD9RHyAIASJDBIBH8cCFD9tA8cAPD9OD9hD9RH8cDQBTFtGmEYIPLdKeOnH8dDQBFTtGEmYILPdKOenHPAPDQBFGEBFGEBFGEBFGEAeD9uHeDyBjGBAEAGJHIAeAPAPDQILKOILKOILKOILKOD9uHeDyBjGBAIAGJHIAeAPAPDQNVcMNVcMNVcMNVcMD9uHeDyBjGBAIAGJHIAeAPAPDQSQfbSQfbSQfbSQfbD9uHeDyBjGBAIAGJHIAeApA8dDQNVi8ZcMpySQ8c8dfb8e8fHPAPDQBFGEBFGEBFGEBFGED9uHeDyBjGBAIAGJHIAeAPAPDQILKOILKOILKOILKOD9uHeDyBjGBAIAGJHIAeAPAPDQNVcMNVcMNVcMNVcMD9uHeDyBjGBAIAGJHIAeAPAPDQSQfbSQfbSQfbSQfbD9uHeDyBjGBAIAGJHIAeAdA8ZDQNiV8ZcpMyS8cQ8df8eb8fHdAyA8cDQNiV8ZcpMyS8cQ8df8eb8fH8ZDQBFTtGEmYILPdKOenHPAPDQBFGEBFGEBFGEBFGED9uHeDyBjGBAIAGJHIAeAPAPDQILKOILKOILKOILKOD9uHeDyBjGBAIAGJHIAeAPAPDQNVcMNVcMNVcMNVcMD9uHeDyBjGBAIAGJHIAeAPAPDQSQfbSQfbSQfbSQfbD9uHeDyBjGBAIAGJHIAeAdA8ZDQNVi8ZcMpySQ8c8dfb8e8fHPAPDQBFGEBFGEBFGEBFGED9uHeDyBjGBAIAGJHIAeAPAPDQILKOILKOILKOILKOD9uHeDyBjGBAIAGJHIAeAPAPDQNVcMNVcMNVcMNVcMD9uHeDyBjGBAIAGJHIAeAPAPDQSQfbSQfbSQfbSQfbD9uHeDyBjGBAIAGJREAYCTJHYAM9JQBMMAbCIJHbAG9JQBMMABAVAG9sJALCUGJAcAG9s/8cBBALALCUGJAcCaJAG9sJAG/8cBBMAcCBAKyAVJRVAKQBMC9+RKSFMCBC99AOAKlAGCAAGCA9Ly6yRKMALCU/KBJ8kUUUUBAKMNBT+BUUUBM+KmFTa8jUUUUBCoFlHL8kUUUUBC9+RKGXAFCE9uHOCtJAI9LQBCaRKAE2BBHNC/wFZC/gF9HQBANCbZHVCF9LQBALCoBJCgFCUF/8MBALC84Jha83EBALC8wJha83EBALC8oJha83EBALCAJha83EBALCiJha83EBALCTJha83EBALha83ENALha83EBAEAIJC9wJRcAECFJHNAOJRMGXAF9FQBCQCbAVCF6yRSABRECBRVCBRQCBRfCBRICBRKEXGXAMAcuQBC9+RKSEMGXGXAN2BBHOC/vF9LQBALCoBJAOCIrCa9zAKJCbZCEWJHb8oGIRTAb8oGBRtGXAOCbZHbAS9PQBALAOCa9zAIJCbZCGWJ8oGBAVAbyROAb9FRbGXGXAGCG9HQBABAt87FBABCIJAO87FBABCGJAT87FBSFMAEAtjGBAECNJAOjGBAECIJATjGBMAVAbJRVALCoBJAKCEWJHmAOjGBAmATjGIALAICGWJAOjGBALCoBJAKCFJCbZHKCEWJHTAtjGBATAOjGIAIAbJRIAKCFJRKSGMGXGXAbCb6QBAQAbJAbC989zJCFJRQSFMAM1BBHbCgFZROGXGXAbCa9MQBAMCFJRMSFMAM1BFHbCgBZCOWAOCgBZqROGXAbCa9MQBAMCGJRMSFMAM1BGHbCgBZCfWAOqROGXAbCa9MQBAMCEJRMSFMAM1BEHbCgBZCdWAOqROGXAbCa9MQBAMCIJRMSFMAM2BIC8cWAOqROAMCLJRMMAOCFrCBAOCFZl9zAQJRQMGXGXAGCG9HQBABAt87FBABCIJAQ87FBABCGJAT87FBSFMAEAtjGBAECNJAQjGBAECIJATjGBMALCoBJAKCEWJHOAQjGBAOATjGIALAICGWJAQjGBALCoBJAKCFJCbZHKCEWJHOAtjGBAOAQjGIAICFJRIAKCFJRKSFMGXAOCDF9LQBALAIAcAOCbZJ2BBHbCIrHTlCbZCGWJ8oGBAVCFJHtATyROALAIAblCbZCGWJ8oGBAtAT9FHmJHtAbCbZHTyRbAT9FRTGXGXAGCG9HQBABAV87FBABCIJAb87FBABCGJAO87FBSFMAEAVjGBAECNJAbjGBAECIJAOjGBMALAICGWJAVjGBALCoBJAKCEWJHYAOjGBAYAVjGIALAICFJHICbZCGWJAOjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAIAmJCbZHICGWJAbjGBALCoBJAKCGJCbZHKCEWJHOAVjGBAOAbjGIAKCFJRKAIATJRIAtATJRVSFMAVCBAM2BBHYyHTAOC/+F6HPJROAYCbZRtGXGXAYCIrHmQBAOCFJRbSFMAORbALAIAmlCbZCGWJ8oGBROMGXGXAtQBAbCFJRVSFMAbRVALAIAYlCbZCGWJ8oGBRbMGXGXAP9FQBAMCFJRYSFMAM1BFHYCgFZRTGXGXAYCa9MQBAMCGJRYSFMAM1BGHYCgBZCOWATCgBZqRTGXAYCa9MQBAMCEJRYSFMAM1BEHYCgBZCfWATqRTGXAYCa9MQBAMCIJRYSFMAM1BIHYCgBZCdWATqRTGXAYCa9MQBAMCLJRYSFMAMCKJRYAM2BLC8cWATqRTMATCFrCBATCFZl9zAQJHQRTMGXGXAmCb6QBAYRPSFMAY1BBHMCgFZROGXGXAMCa9MQBAYCFJRPSFMAY1BFHMCgBZCOWAOCgBZqROGXAMCa9MQBAYCGJRPSFMAY1BGHMCgBZCfWAOqROGXAMCa9MQBAYCEJRPSFMAY1BEHMCgBZCdWAOqROGXAMCa9MQBAYCIJRPSFMAYCLJRPAY2BIC8cWAOqROMAOCFrCBAOCFZl9zAQJHQROMGXGXAtCb6QBAPRMSFMAP1BBHMCgFZRbGXGXAMCa9MQBAPCFJRMSFMAP1BFHMCgBZCOWAbCgBZqRbGXAMCa9MQBAPCGJRMSFMAP1BGHMCgBZCfWAbqRbGXAMCa9MQBAPCEJRMSFMAP1BEHMCgBZCdWAbqRbGXAMCa9MQBAPCIJRMSFMAPCLJRMAP2BIC8cWAbqRbMAbCFrCBAbCFZl9zAQJHQRbMGXGXAGCG9HQBABAT87FBABCIJAb87FBABCGJAO87FBSFMAEATjGBAECNJAbjGBAECIJAOjGBMALCoBJAKCEWJHYAOjGBAYATjGIALAICGWJATjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAICFJHICbZCGWJAOjGBALCoBJAKCGJCbZCEWJHOATjGBAOAbjGIALAIAm9FAmCb6qJHICbZCGWJAbjGBAIAt9FAtCb6qJRIAKCEJRKMANCFJRNABCKJRBAECSJREAKCbZRKAICbZRIAfCEJHfAF9JQBMMCBC99AMAc6yRKMALCoFJ8kUUUUBAKM/tIFGa8jUUUUBCTlRLC9+RKGXAFCLJAI9LQBCaRKAE2BBC/+FZC/QF9HQBALhB83ENAECFJRKAEAIJC98JREGXAF9FQBGXAGCG6QBEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMALCNJAICFZCGWqHGAICGrCBAICFrCFZl9zAG8oGBJHIjGBABAIjGBABCIJRBAFCaJHFQBSGMMEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMABAICGrCBAICFrCFZl9zALCNJAICFZCGWqHI8oGBJHG87FBAIAGjGBABCGJRBAFCaJHFQBMMCBC99AKAE6yRKMAKM/dLEK97FaF97GXGXAGCI9HQBAF9FQFCBRGEXABABDBBBHECiD+rFCiD+sFD/6FHIAECND+rFCiD+sFD/6FAID/gFAECTD+rFCiD+sFD/6FHLD/gFD/kFD/lFHKCBDtD+2FHOAICUUUU94DtHND9OD9RD/kFHI9DBB/+hDYAIAID/mFAKAKD/mFALAOALAND9OD9RD/kFHIAID/mFD/kFD/kFD/jFD/nFHLD/mF9DBBX9LDYHOD/kFCgFDtD9OAECUUU94DtD9OD9QAIALD/mFAOD/kFCND+rFCU/+EDtD9OD9QAKALD/mFAOD/kFCTD+rFCUU/8ODtD9OD9QDMBBABCTJRBAGCIJHGAF9JQBSGMMAF9FQBCBRGEXABCTJHVAVDBBBHECBDtHOCUU98D8cFCUU98D8cEHND9OABDBBBHKAEDQILKOSQfbPden8c8d8e8fCggFDtD9OD/6FAKAEDQBFGENVcMTtmYi8ZpyHECTD+sFD/6FHID/gFAECTD+rFCTD+sFD/6FHLD/gFD/kFD/lFHE9DB/+g6DYALAEAOD+2FHOALCUUUU94DtHcD9OD9RD/kFHLALD/mFAEAED/mFAIAOAIAcD9OD9RD/kFHEAED/mFD/kFD/kFD/jFD/nFHID/mF9DBBX9LDYHOD/kFCTD+rFALAID/mFAOD/kFCggEDtD9OD9QHLAEAID/mFAOD/kFCaDbCBDnGCBDnECBDnKCBDnOCBDncCBDnMCBDnfCBDnbD9OHEDQNVi8ZcMpySQ8c8dfb8e8fD9QDMBBABAKAND9OALAEDQBFTtGEmYILPdKOenD9QDMBBABCAJRBAGCIJHGAF9JQBMMM/hEIGaF97FaL978jUUUUBCTlREGXAF9FQBCBRIEXAEABDBBBHLABCTJHKDBBBHODQILKOSQfbPden8c8d8e8fHNCTD+sFHVCID+rFDMIBAB9DBBU8/DY9D/zI818/DYAVCEDtD9QD/6FD/nFHVALAODQBFGENVcMTtmYi8ZpyHLCTD+rFCTD+sFD/6FD/mFHOAOD/mFAVALCTD+sFD/6FD/mFHcAcD/mFAVANCTD+rFCTD+sFD/6FD/mFHNAND/mFD/kFD/kFD/lFCBDtD+4FD/jF9DB/+g6DYHVD/mF9DBBX9LDYHLD/kFCggEDtHMD9OAcAVD/mFALD/kFCTD+rFD9QHcANAVD/mFALD/kFCTD+rFAOAVD/mFALD/kFAMD9OD9QHVDQBFTtGEmYILPdKOenHLD8dBAEDBIBDyB+t+J83EBABCNJALD8dFAEDBIBDyF+t+J83EBAKAcAVDQNVi8ZcMpySQ8c8dfb8e8fHVD8dBAEDBIBDyG+t+J83EBABCiJAVD8dFAEDBIBDyE+t+J83EBABCAJRBAICIJHIAF9JQBMMM9jFF97GXAGCGrAF9sHG9FQBCBRFEXABABDBBBHECND+rFCND+sFD/6FAECiD+sFCnD+rFCUUU/8EDtD+uFD/mFDMBBABCTJRBAFCIJHFAG9JQBMMM9TFEaCBCB8oGUkUUBHFABCEJC98ZJHBjGUkUUBGXGXAB8/BCTWHGuQBCaREABAGlCggEJCTrXBCa6QFMAFREMAEMMMFBCUNMIT9tBB", t = new Uint8Array([
    0,
    97,
    115,
    109,
    1,
    0,
    0,
    0,
    1,
    4,
    1,
    96,
    0,
    0,
    3,
    3,
    2,
    0,
    0,
    5,
    3,
    1,
    0,
    1,
    12,
    1,
    0,
    10,
    22,
    2,
    12,
    0,
    65,
    0,
    65,
    0,
    65,
    0,
    252,
    10,
    0,
    0,
    11,
    7,
    0,
    65,
    0,
    253,
    15,
    26,
    11
  ]), o = new Uint8Array([
    32,
    0,
    65,
    253,
    3,
    1,
    2,
    34,
    4,
    106,
    6,
    5,
    11,
    8,
    7,
    20,
    13,
    33,
    12,
    16,
    128,
    9,
    116,
    64,
    19,
    113,
    127,
    15,
    10,
    21,
    22,
    14,
    255,
    66,
    24,
    54,
    136,
    107,
    18,
    23,
    192,
    26,
    114,
    118,
    132,
    17,
    77,
    101,
    130,
    144,
    27,
    87,
    131,
    44,
    45,
    74,
    156,
    154,
    70,
    167
  ]);
  if (typeof WebAssembly != "object")
    return {
      supported: !1
    };
  let s = l;
  WebAssembly.validate(t) && (s = e);
  let n;
  const r = WebAssembly.instantiate(A(s), {}).then((c) => {
    n = c.instance, n.exports.__wasm_call_ctors();
  });
  function A(c) {
    const C = new Uint8Array(c.length);
    for (let h = 0; h < c.length; ++h) {
      const d = c.charCodeAt(h);
      C[h] = d > 96 ? d - 71 : d > 64 ? d - 65 : d > 47 ? d + 4 : d > 46 ? 63 : 62;
    }
    let u = 0;
    for (let h = 0; h < c.length; ++h)
      C[u++] = C[h] < 60 ? o[C[h]] : (C[h] - 60) * 64 + C[++h];
    return C.buffer.slice(0, u);
  }
  function i(c, C, u, h, d, f) {
    const F = n.exports.sbrk, p = u + 3 & -4, E = F(p * h), m = F(d.length), R = new Uint8Array(n.exports.memory.buffer);
    R.set(d, m);
    const M = c(E, u, h, m, d.length);
    if (M === 0 && f && f(E, p, h), C.set(R.subarray(E, E + u * h)), F(E - F(0)), M !== 0)
      throw new Error(`Malformed buffer data: ${M}`);
  }
  const a = {
    // legacy index-based enums for glTF
    0: "",
    1: "meshopt_decodeFilterOct",
    2: "meshopt_decodeFilterQuat",
    3: "meshopt_decodeFilterExp",
    // string-based enums for glTF
    NONE: "",
    OCTAHEDRAL: "meshopt_decodeFilterOct",
    QUATERNION: "meshopt_decodeFilterQuat",
    EXPONENTIAL: "meshopt_decodeFilterExp"
  }, B = {
    // legacy index-based enums for glTF
    0: "meshopt_decodeVertexBuffer",
    1: "meshopt_decodeIndexBuffer",
    2: "meshopt_decodeIndexSequence",
    // string-based enums for glTF
    ATTRIBUTES: "meshopt_decodeVertexBuffer",
    TRIANGLES: "meshopt_decodeIndexBuffer",
    INDICES: "meshopt_decodeIndexSequence"
  };
  return k = {
    ready: r,
    supported: !0,
    decodeVertexBuffer(c, C, u, h, d) {
      i(
        n.exports.meshopt_decodeVertexBuffer,
        c,
        C,
        u,
        h,
        n.exports[a[d]]
      );
    },
    decodeIndexBuffer(c, C, u, h) {
      i(n.exports.meshopt_decodeIndexBuffer, c, C, u, h);
    },
    decodeIndexSequence(c, C, u, h) {
      i(n.exports.meshopt_decodeIndexSequence, c, C, u, h);
    },
    decodeGltfBuffer(c, C, u, h, d, f) {
      i(
        n.exports[B[d]],
        c,
        C,
        u,
        h,
        n.exports[a[f]]
      );
    }
  }, k;
};
let X = null, ge = "https://www.gstatic.com/draco/versioned/decoders/1.5.5/";
function Je(l, e, t) {
  return (o) => {
    t && t(o), l && (X || (X = new zt()), X.setDecoderPath(typeof l == "string" ? l : ge), o.setDRACOLoader(X)), e && o.setMeshoptDecoder(typeof te == "function" ? te() : te);
  };
}
function Z(l, e = !0, t = !0, o) {
  return ie(Ae, l, Je(e, t, o));
}
Z.preload = (l, e = !0, t = !0, o) => ie.preload(Ae, l, Je(e, t, o));
Z.clear = (l) => ie.clear(Ae, l);
Z.setDecoderPath = (l) => {
  ge = l;
};
function ns({ assetUrl: l }) {
  const { scene: e } = Z(l);
  return /* @__PURE__ */ Gt.jsx("primitive", { object: e, scale: 0.01 });
}
export {
  ns as default
};
