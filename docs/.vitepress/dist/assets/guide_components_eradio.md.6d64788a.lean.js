import{a as C}from"./chunks/useUpdateModelValue.c0cd99d5.js";import{d as i,o as y,c as d,C as t,b as o,r as m,h as A,I as l,E as p,V as u,a as D,t as h}from"./chunks/framework.4aa8203f.js";import{E as g}from"./chunks/ExampleLayout.aebeb686.js";const f=["for"],E=["disabled","name"],b={name:"ERadio"},F=i({...b,props:{value:null,name:null,disabled:{type:Boolean}},setup(r,{emit:s}){const n=r;let a=n.value;return(e,c)=>(y(),d("label",{for:n.name},[t("input",{type:"radio",onChange:c[0]||(c[0]=x=>o(C)(o(a),s)),disabled:n.disabled,name:n.name},null,40,E),m(e.$slots,"default")],8,f))}}),_=u(`<h1 id="eradio" tabindex="-1">ERadio <a class="header-anchor" href="#eradio" aria-label="Permalink to &quot;ERadio&quot;">​</a></h1><p>The <code>ERadio</code> component replaces the standard html input type radio and encapsulates well-defined logic that can be reused throughout the app.</p><h2 id="basic-usage" tabindex="-1">Basic Usage <a class="header-anchor" href="#basic-usage" aria-label="Permalink to &quot;Basic Usage&quot;">​</a></h2><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { ref } from &quot;vue&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { ERadio } from &quot;easy-kit-component&quot;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">const choice = ref();</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">ERadio</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">value</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;&#39;</span><span style="color:#C3E88D;">One</span><span style="color:#89DDFF;">&#39;&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">choice</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;&#39;</span><span style="color:#C3E88D;">Number</span><span style="color:#89DDFF;">&#39;&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">One</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">ERadio</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">ERadio</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">value</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;&#39;</span><span style="color:#C3E88D;">Two</span><span style="color:#89DDFF;">&#39;&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">choice</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;&#39;</span><span style="color:#C3E88D;">Number</span><span style="color:#89DDFF;">&#39;&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Two</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">ERadio</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div>`,4),v=t("br",null,null,-1),q=u(`<h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to &quot;API Reference&quot;">​</a></h2><ul><li><strong>Props</strong></li></ul><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Radio</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">value</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">any</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">disabled</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,3),N=JSON.parse('{"title":"ERadio","description":"","frontmatter":{"prev":{"text":"EText","link":"/guide/components/etext.md"},"next":{"text":"ESelect","link":"/guide/components/eselect.md"}},"headers":[],"relativePath":"guide/components/eradio.md"}'),B={name:"guide/components/eradio.md"},P=i({...B,setup(r){const s=A();return(n,a)=>(y(),d("div",null,[_,l(g,null,{default:p(()=>[l(o(F),{id:"radio",value:"One",modelValue:s.value,"onUpdate:modelValue":a[0]||(a[0]=e=>s.value=e),name:"Choose Number"},{default:p(()=>[D("One")]),_:1},8,["modelValue"]),l(o(F),{id:"radio",value:"Two",modelValue:s.value,"onUpdate:modelValue":a[1]||(a[1]=e=>s.value=e),name:"Choose Number"},{default:p(()=>[D("Two")]),_:1},8,["modelValue"]),v,t("h6",null,"Choice is : "+h(s.value),1)]),_:1}),q]))}});export{N as __pageData,P as default};
