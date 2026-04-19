<img src="./.github/asset/illustration/wave_header.svg" width="100%" align="center"/>

<h1 id="top" align="center">
  <img src="./.github/asset/icon/typescript.svg" alt="icon" width="32px" align="center" />
  Open graph types
</h1>

<img src="./.github/asset/illustration/divider.svg" alt="divider" width="100%" align="center" />

<pre align="center">
  <a href="#installation">📦 SETUP</a> • <a href="#configuration">⚡ USAGE</a>
</pre>

<img src="./.github/asset/illustration/divider.svg" alt="divider" width="100%" align="center" />

<img src="./.github/asset/illustration/open_graph_cover.svg" width="100%" align="center" />

<br />

<div align="center">
  <img src="./.github/asset/illustration/bun_badget.svg" height="34px" />&nbsp;&nbsp;&nbsp;
  <img src="./.github/asset/illustration/github_badget.svg" height="34px" />&nbsp;&nbsp;&nbsp;
  <img src="./.github/asset/illustration/typescript_badget.svg" height="34px" />&nbsp;&nbsp;&nbsp;
  <img src="./.github/asset/illustration/node_badget.svg" height="34px" />&nbsp;&nbsp;&nbsp;
  <img src="./.github/asset/illustration/npm_badget.svg" height="34px" />&nbsp;&nbsp;&nbsp;
  <img src="./.github/asset/illustration/git_badget.svg" height="34px" />
</div>

<img src="./.github/asset/illustration/divider.svg" alt="divider" width="100%" align="center" />

<h2 id="about">
  <img src="./.github/asset/icon/information.svg" width="24px" align="center"/>
  About
</h2>

<table border="0">
<tr>
<td>
📦️ Ultra-lightweight and strict Open Graph TypeScript definitions.
</td>
</tr>
</table>

<br />

<img src="./.github/asset/illustration/divider.svg" alt="divider" width="100%" align="center" />

<h2 id="table-of-content">
  <img src="./.github/asset/icon/book.svg" width="20px" align="center"/>
  Table of content
</h2>

- [<img src="./.github/asset/icon/information.svg" width="16px" align="center" /> About](#about)
- [<img src="./.github/asset/icon/thunder.svg" width="16px" align="center" /> Requirements](#requirements)
- [<img src="./.github/asset/icon/package.svg" width="16px" align="center" /> Installation](#installation)
- [<img src="./.github/asset/icon/rocket.svg" width="16px" align="center" /> Usage](#usage)

<img src="./.github/asset/illustration/divider.svg" alt="divider" width="100%" align="center" />

<h2 id="requirements">
  <img src="./.github/asset/icon/thunder.svg" width="20px" align="center"/>
  Requirements
</h2>

- <img src="./.github/asset/icon/node.svg" width="20px" align="center" /> node >= **22.17.0**
- <img src="./.github/asset/icon/bun.svg" width="20px" align="center" /> bun >= **1.1.0**

<br />

<img src="./.github/asset/illustration/divider.svg" alt="divider" width="100%" align="center" />

<h2 id="installation">
  <img src="./.github/asset/icon/package.svg" width="24px" align="center" />
  Installation
</h2>

<h3><img src="./.github/asset/icon/bun.svg" width="24px" align="center" /> Bun</h3>

```bash
bun i -D open-graph-types
```

<h3><img src="./.github/asset/icon/npm.svg" width="24px" align="center" /> Npm</h3>

```bash
npm i -D open-graph-types
```

<h3><img src="./.github/asset/icon/pnpm.svg" width="24px" align="center" /> Pnpm</h3>

```bash
pnpm i -D open-graph-types
```

<h3><img src="./.github/asset/icon/yarn.svg" width="24px" align="center" /> Yarn</h3>

```bash
yarn i -D open-graph-types
```

<br />

<img 
  src="./.github/asset/illustration/divider.svg" 
  alt="divider" 
  width="100%" 
  align="center"
/>

<h2 id="usage">
  <img src="./.github/asset/icon/rocket.svg" width="20px" align="center" />
  Usage
</h2>

```ts
import { OpenGraph } from "open-graph-types";

const opg: OpenGraph = {
  title: "Open Graph Types",
  description: "Ultra-lightweight and strict Open Graph TypeScript definitions.",
  url: "https://example.com",
  type: "website",
  image: {
    url: "https://example.com/image.png",
    width: 1200,
    height: 630,
    alt: "Open Graph Types",
  },
};
```

The `OpenGraph` type is a union of all the available Open Graph types, so you can use it to define any Open Graph metadata.

Other types are also available if you want to be more specific, such as `OpenGraphBookType`, `OpenGraphMediaType`, etc.

Here is the complete list of available types:

- `OpenGraph`: 
- `OpenGraphType`
- `OpenGraphBookType`
- `OpenGraphMediaType`
- `OpenGraphArticleType`
- `OpenGraphProfileType`
- `OpenGraphVideoType`
- `OpenGraphMusicType`
- `OpenGraphLocaleType`
- `OpenGraphTwitterType`
- `OpenGraphDeterminerType`

<br />

<img 
  src="./.github/asset/illustration/divider.svg" 
  alt="divider" 
  width="100%" 
  align="center"
/>

<pre align="center">
  <a href="#top">BACK TO TOP</a>
</pre>

<img 
  src="./.github/asset/illustration/divider.svg" 
  alt="divider" 
  width="100%" 
  align="center"
/>

<pre align="center">
  Copyright © All rights reserved,
  developed by LuisdaByte and
</pre>
<div align="center">
  <img src="./.github/asset/illustration/astralys_logo.svg" width="120px" align="center" />
</div>

<img src="./.github/asset/illustration/wave_footer.svg" width="100%" align="center" />