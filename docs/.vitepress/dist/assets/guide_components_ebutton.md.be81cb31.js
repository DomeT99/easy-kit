import{d as i,o as F,c as D,r as u,I as a,E as n,V as t,b as l,a as p}from"./chunks/framework.4aa8203f.js";import{E as c}from"./chunks/ExampleLayout.aebeb686.js";const d=["type","disabled","autofocus","form"],C={name:"EButton"},r=i({...C,props:{type:null,disabled:{type:Boolean},formId:null,autoFocus:{type:Boolean}},setup(e){const s=e;return(o,y)=>(F(),D("button",{type:s.type??"button",disabled:s.disabled,autofocus:s.autoFocus,form:s.formId},[u(o.$slots,"default")],8,d))}}),A=t(`<h1 id="ebutton" tabindex="-1">EButton <a class="header-anchor" href="#ebutton" aria-label="Permalink to &quot;EButton&quot;">​</a></h1><p>The <code>EButton</code> component replaces the standard html button and encapsulates well-defined logic that can be reused throughout the app.</p><h2 id="basic-usage" tabindex="-1">Basic Usage <a class="header-anchor" href="#basic-usage" aria-label="Permalink to &quot;Basic Usage&quot;">​</a></h2><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { EButton } from &quot;easy-kit-component&quot;;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">EButton</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Click Here</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">EButton</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div>`,4),h=t('<h3 id="trigger-event" tabindex="-1">Trigger Event <a class="header-anchor" href="#trigger-event" aria-label="Permalink to &quot;Trigger Event&quot;">​</a></h3><p>To trigger an event, the classic procedure provided by Vue is used.</p><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">EButton</span><span style="color:#89DDFF;"> @</span><span style="color:#C792EA;">click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">exampleFunction</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Show Alert</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">EButton</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div>',3),m=t(`<h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to &quot;API Reference&quot;">​</a></h2><ul><li><strong>Props</strong></li></ul><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ButtonType</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">button</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">submit</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">reset</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Button</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ButtonType</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">disabled</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">formId</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">autoFocus</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,3),f=JSON.parse('{"title":"EButton","description":"","frontmatter":{"prev":{"text":"Quick Start","link":"/guide/getting-started/quick-start.md"},"next":{"text":"ECheckbox","link":"/guide/components/echeckbox.md"}},"headers":[],"relativePath":"guide/components/ebutton.md"}'),g={name:"guide/components/ebutton.md"},_=i({...g,setup(e){function s(){alert("Hello, I'm a button!")}return(o,y)=>(F(),D("div",null,[A,a(c,null,{default:n(()=>[a(l(r),{id:"button"},{default:n(()=>[p("Click Here")]),_:1})]),_:1}),h,a(c,null,{default:n(()=>[a(l(r),{onClick:s,id:"button"},{default:n(()=>[p("Show Alert")]),_:1})]),_:1}),m]))}});export{f as __pageData,_ as default};
