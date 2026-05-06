import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

// Home route - CryptoInsider Pro Blog
app.get('/', (req, res) => {
  res.type('html').send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CryptoInsider Pro — Daily Crypto News & Market Analysis</title>
  <meta name="description" content="Your daily source for cryptocurrency news, market analysis, trending topics, and AI-powered crypto insights. Updated daily in English and Indonesian.">
  <script src="https://unpkg.com/vue@3/dist/vue.global.prod.js"><\/script>
  <script src="https://cdn.tailwindcss.com"><\/script>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <style>
    body{font-family:'Inter',sans-serif}.fade-enter-active,.fade-leave-active{transition:opacity .3s ease,transform .3s ease}.fade-enter-from,.fade-leave-to{opacity:0;transform:translateY(10px)}.line-clamp-2{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.line-clamp-3{display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}@keyframes pulse-slow{0%,100%{opacity:1}50%{opacity:.7}}.animate-pulse-slow{animation:pulse-slow 3s ease-in-out infinite}@keyframes ticker{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}.ticker-scroll{animation:ticker 30s linear infinite}
  </style>
</head>
<body class="bg-gray-50 min-h-screen">
  <div id="app">
    <div class="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 text-white overflow-hidden">
      <div class="ticker-scroll whitespace-nowrap py-2 text-sm font-medium flex gap-12 items-center">
        <span class="flex items-center gap-2"><span class="bg-white/20 px-1.5 py-0.5 rounded text-xs font-bold">BREAKING</span> Bitcoin surges to $81,286 as ETF inflows hit $2.44B in April</span>
        <span class="flex items-center gap-2"><span class="bg-white/20 px-1.5 py-0.5 rounded text-xs font-bold">MARKET</span> Total crypto market cap reaches $2.72T (+1.53%)</span>
        <span class="flex items-center gap-2"><span class="bg-white/20 px-1.5 py-0.5 rounded text-xs font-bold">AI</span> AI altcoins outperform Bitcoin as trade spreads to crypto</span>
        <span class="flex items-center gap-2"><span class="bg-white/20 px-1.5 py-0.5 rounded text-xs font-bold">INSTITUTIONAL</span> Morgan Stanley: Bitcoin on bank balance sheets is coming</span>
        <span class="flex items-center gap-2"><span class="bg-white/20 px-1.5 py-0.5 rounded text-xs font-bold">EVENT</span> Consensus Miami 2026 happening May 5-7</span>
        <span class="flex items-center gap-2"><span class="bg-white/20 px-1.5 py-0.5 rounded text-xs font-bold">BREAKING</span> Bitcoin surges to $81,286 as ETF inflows hit $2.44B in April</span>
        <span class="flex items-center gap-2"><span class="bg-white/20 px-1.5 py-0.5 rounded text-xs font-bold">MARKET</span> Total crypto market cap reaches $2.72T (+1.53%)</span>
      </div>
    </div>
    <header class="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <button @click="view='home'" class="flex items-center gap-3 group">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-white font-black text-sm shadow-lg shadow-violet-500/25">CI</div>
          <div><span class="text-lg font-bold text-gray-900 tracking-tight">CryptoInsider</span><span class="block text-[10px] text-violet-600 font-semibold -mt-1">PRO</span></div>
        </button>
        <div class="flex items-center gap-2">
          <button @click="view='home'" :class="view==='home'?'bg-gray-100 text-gray-900':'text-gray-500 hover:text-gray-700'" class="px-3 py-1.5 rounded-lg text-sm font-medium transition">Home</button>
          <button @click="view='contact'" :class="view==='contact'?'bg-violet-50 text-violet-600':'text-gray-500 hover:text-gray-700'" class="px-3 py-1.5 rounded-lg text-sm font-medium transition">Advertise</button>
        </div>
      </div>
    </header>
    <main class="max-w-5xl mx-auto px-4 sm:px-6 py-8">
      <transition name="fade" mode="out-in">
        <div v-if="view==='home'" key="home">
          <div class="text-center mb-12">
            <div class="inline-flex items-center gap-2 px-4 py-1.5 bg-violet-50 text-violet-600 rounded-full text-sm font-medium mb-4"><span class="w-2 h-2 bg-emerald-500 rounded-full animate-pulse-slow"></span>Updated May 6, 2026</div>
            <h1 class="text-4xl sm:text-5xl font-black text-gray-900 mb-3 tracking-tight">Daily Crypto Intelligence</h1>
            <p class="text-lg text-gray-500 max-w-xl mx-auto">Breaking news, market analysis, and AI insights. Bilingual English & Indonesian.</p>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
            <div v-for="coin in marketStats" :key="coin.name" class="bg-white rounded-xl p-4 border border-gray-100 hover:border-violet-200 transition">
              <p class="text-xs text-gray-400 font-medium">{{coin.name}}</p>
              <p class="text-xl font-bold text-gray-900 font-mono">{{coin.price}}</p>
              <p :class="coin.change>=0?'text-emerald-500':'text-red-500'" class="text-sm font-medium">{{coin.change>=0?'▲':'▼'}} {{Math.abs(coin.change)}}%</p>
            </div>
          </div>
          <article v-if="featuredPost" @click="openPost(featuredPost)" class="group cursor-pointer bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:shadow-violet-500/5 transition-all mb-10">
            <div class="relative h-64 sm:h-80 overflow-hidden">
              <img :src="featuredPost.image" :alt="featuredPost.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              <div class="absolute top-4 left-4"><span class="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full shadow-lg">🔥 TRENDING</span></div>
              <div class="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <span class="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full mb-3">{{featuredPost.category}}</span>
                <h2 class="text-2xl sm:text-3xl font-bold text-white leading-tight">{{featuredPost.title}}</h2>
              </div>
            </div>
            <div class="p-6 sm:p-8">
              <p class="text-gray-600 leading-relaxed text-lg line-clamp-3">{{featuredPost.excerpt}}</p>
              <div class="mt-4 flex items-center gap-4 text-sm text-gray-400"><span>{{featuredPost.date}}</span><span>·</span><span>{{featuredPost.readTime}} min read</span></div>
            </div>
          </article>
          <div class="flex items-center justify-between mb-6"><h3 class="text-xl font-bold text-gray-900">Latest Articles</h3><span class="text-sm text-gray-400">{{filteredPosts.length}} articles</span></div>
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <article v-for="post in filteredPosts" :key="post.id" @click="openPost(post)" class="group cursor-pointer bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:shadow-violet-500/5 transition-all hover:-translate-y-1">
              <div class="relative h-40 overflow-hidden">
                <img :src="post.image" :alt="post.title" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div class="absolute bottom-3 left-3"><span class="px-2.5 py-0.5 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full">{{post.category}}</span></div>
                <span v-if="post.isNew" class="absolute top-3 right-3 px-2 py-0.5 bg-emerald-500 text-white text-xs font-bold rounded-full">NEW</span>
              </div>
              <div class="p-5">
                <h4 class="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-violet-600 transition">{{post.title}}</h4>
                <p class="text-sm text-gray-500 line-clamp-2 mb-3">{{post.excerpt}}</p>
                <div class="flex items-center justify-between text-xs text-gray-400"><span>{{post.date}}</span><span>{{post.readTime}} min read</span></div>
              </div>
            </article>
          </div>
          <div class="mt-12 bg-gradient-to-r from-violet-50 to-indigo-50 border border-violet-200 rounded-2xl p-8">
            <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div class="w-14 h-14 bg-violet-100 rounded-2xl flex items-center justify-center text-3xl">📢</div>
              <div class="flex-1"><h4 class="font-bold text-violet-900 text-lg mb-1">Advertise With Us</h4><p class="text-sm text-violet-700">Promote your crypto project or exchange. Reach thousands of daily crypto readers.</p></div>
              <button @click="view='contact'" class="shrink-0 px-6 py-3 bg-violet-600 text-white font-semibold rounded-xl hover:bg-violet-700 transition shadow-lg shadow-violet-500/25">Contact Us →</button>
            </div>
          </div>
        </div>
        <div v-else-if="view==='contact'" key="contact" class="max-w-xl mx-auto">
          <button @click="view='home'" class="flex items-center gap-2 text-gray-500 hover:text-gray-700 mb-8 transition"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>Back</button>
          <div class="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8">
            <h2 class="text-2xl font-black text-gray-900 mb-2">Advertise With Us</h2>
            <p class="text-gray-500 mb-6">Pasang iklan atau endorsement. Reach thousands of crypto readers.</p>
            <form action="https://formsubmit.co/alpurkan9@gmail.com" method="POST" class="space-y-5">
              <input type="hidden" name="_subject" value="New Ad Inquiry — CryptoInsider Pro">
              <input type="hidden" name="_captcha" value="false">
              <input type="hidden" name="_template" value="table">
              <div><label class="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label><input type="text" name="name" required placeholder="John Doe" class="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 transition"></div>
              <div><label class="block text-sm font-medium text-gray-700 mb-1.5">Email</label><input type="email" name="email" required placeholder="you@company.com" class="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 transition"></div>
              <div><label class="block text-sm font-medium text-gray-700 mb-1.5">Ad Type</label><select name="ad_type" class="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 transition bg-white"><option value="">Select...</option><option value="banner">Banner Ad</option><option value="sponsored_post">Sponsored Article</option><option value="endorsement">Endorsement</option><option value="custom">Custom</option></select></div>
              <div><label class="block text-sm font-medium text-gray-700 mb-1.5">Budget</label><select name="budget" class="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 transition bg-white"><option value="">Select range...</option><option value="50-100">$50 - $100</option><option value="100-250">$100 - $250</option><option value="250-500">$250 - $500</option><option value="500-1000">$500 - $1,000</option><option value="negotiable">Negotiable</option></select></div>
              <div><label class="block text-sm font-medium text-gray-700 mb-1.5">Message</label><textarea name="message" rows="4" required placeholder="Tell us about your project..." class="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 transition resize-none"></textarea></div>
              <button type="submit" class="w-full py-3 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-violet-700 hover:to-indigo-700 transition shadow-lg shadow-violet-500/25">📧 Send Inquiry</button>
            </form>
          </div>
        </div>
        <div v-else-if="view==='post'&&currentPost" key="post" class="max-w-2xl mx-auto">
          <button @click="view='home'" class="flex items-center gap-2 text-gray-500 hover:text-gray-700 mb-8 transition"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>Back</button>
          <article>
            <div class="mb-6"><span class="inline-block px-3 py-1 bg-violet-50 text-violet-600 text-xs font-semibold rounded-full mb-3">{{currentPost.category}}</span><h1 class="text-3xl font-black text-gray-900 mb-4 leading-tight">{{currentPost.title}}</h1><div class="flex items-center gap-4 text-sm text-gray-400"><span>{{currentPost.date}}</span><span>·</span><span>{{currentPost.readTime}} min read</span></div></div>
            <div class="rounded-2xl overflow-hidden mb-8"><img :src="currentPost.image" :alt="currentPost.title" class="w-full h-64 object-cover"></div>
            <div class="prose prose-lg max-w-none"><p class="text-gray-700 leading-relaxed text-lg" v-html="currentPost.content"></p></div>
          </article>
        </div>
      </transition>
    </main>
    <footer class="border-t border-gray-200 mt-16"><div class="max-w-5xl mx-auto px-4 sm:px-6 py-10 text-center text-sm text-gray-400"><p>&copy; 2026 CryptoInsider Pro. Powered by UpRock AI • MCP • Insight Stacks | <button @click="view='contact'" class="underline hover:no-underline text-violet-500">Advertise with us</button></p></div></footer>
  </div>
  <script>
    const { createApp, ref, computed } = Vue;
    createApp({ setup() {
      const view = ref('home'); const currentPost = ref(null);
      const marketStats = [{name:'BTC/USD',price:'$81,286',change:2.3},{name:'ETH/USD',price:'$2,400',change:1.5},{name:'SOL/USD',price:'$90.20',change:-0.8},{name:'Total MCap',price:'$2.72T',change:1.53}];
      const posts = [
        {id:1,title:'🔥 Bitcoin Hits $81,286 as ETF Inflows Surge to $2.44B in April',excerpt:'Bitcoin reclaimed the $81K mark as April closed with the strongest ETF inflows of 2026.',content:'<p><strong>BTC/USD — May 5, 2026:</strong> Bitcoin surged to $81,286. April ETF inflows hit $2.44B (strongest since October 2025). BTC dominance: 60.46%. Market cap: $2.72T.</p><p>Morgan Stanley: Bitcoin on bank balance sheets is "coming soon." Fed rate cuts expected in May 2026.</p><p>Analyst targets: Citi $78K lower. Bernstein $200K average. RHODL 4.5 bottom signal flashed.</p><p><em>Indonesian:</em> Bitcoin mencapai $81,286, didorong ETF inflows besar. Investor institusi semakin percaya BTC sebagai aset jangka panjang.</p>',category:'Bitcoin',date:'May 6, 2026',readTime:6,image:'https://picsum.photos/seed/btc81k26/800/400',isNew:true},
        {id:7,title:'🧠 How AI is Transforming Blockchain Consensus Mechanisms',excerpt:'Machine learning models are now optimizing Proof of Stake and reducing energy consumption by 40%.',content:'<p><strong>May 2026:</strong> AI-driven consensus optimization is revolutionizing blockchain networks. Projects like SingularityNET and Fetch.ai are integrating ML models to predict validator behavior and optimize block production.</p><p>Key breakthroughs: AI-powered validator selection, dynamic difficulty adjustment, energy consumption reduced by 40%. Ethereum\'s latest upgrade incorporates ML-based gas fee prediction.</p><p><strong>Indonesian:</strong> AI mengubah mekanisme konsensus blockchain. Validasi cerdas mengurangi konsumsi energi 40%. Teknologi ini akan menjadi standar untuk PoS networks di masa depan.</p>',category:'AI & Blockchain',date:'May 6, 2026',readTime:8,image:'https://picsum.photos/seed/aiconsensus26/800/400',isNew:true},
        {id:8,title:'🔗 Top 5 Blockchain AI Projects to Watch in 2026',excerpt:'These AI-blockchain hybrids are solving real-world problems with decentralized intelligence.',content:'<p>1. <strong>Bittensor (TAO)</strong> — Decentralized AI training network. Market cap: $2.1B.</p><p>2. <strong>Render (RNDR)</strong> — GPU rendering marketplace for AI workloads. Up 340% YTD.</p><p>3. <strong>Fetch.ai (FET)</strong> — Autonomous AI agents on blockchain. Partnership with Bosch announced.</p><p>4. <strong>Ocean Protocol (OCEAN)</strong> — Decentralized data marketplace for AI training. 2M+ datasets listed.</p><p>5. <strong>GraphLinq</strong> — No-code AI smart contract builder. 50K+ users onboarded.</p><p><em>Indonesian:</em> Lima proyek AI-blockchain terbaik 2026. Semua memiliki use case nyata dan adopsi aktif.</p>',category:'AI & Crypto',date:'May 6, 2026',readTime:7,image:'https://picsum.photos/seed/top5ai26/800/400',isNew:true},
        {id:9,title:'💎 Ethereum 2.0 Staking Hits All-Time High as AI Validators Deploy',excerpt:'32.5M ETH now staked, with AI-powered validators accounting for 15% of total network stake.',content:'<p><strong>Ethereum staking stats:</strong> Total ETH staked: 32.5M (27% of supply). AI validators: 15% of network. Average APR: 4.2%. Liquid staking protocols: Lido 32%, Rocket Pool 12%.</p><p>AI validators use predictive models to optimize uptime and reduce slashing risk. Major players: Chainstack, Figment, Allnodes deploying ML-based validator optimization.</p><p><em>Indonesian:</em> Staking Ethereum mencapai rekor tertinggi. Validator berbasis AI kini 15% dari total jaringan. Peluang passive income masih menarik.</p>',category:'Ethereum',date:'May 5, 2026',readTime:6,image:'https://picsum.photos/seed/ethstake26/800/400',isNew:true},
        {id:10,title:'🤖 Autonomous AI Agents Now Trade $2.4B Daily in Crypto Markets',excerpt:'AI-powered trading bots account for 58% of all crypto volume as autonomous agents go mainstream.',content:'<p><strong>AI trading dominance:</strong> Daily AI volume: $2.4B (58% of total). Top platforms: 3Commas, Cryptohopper, Hummingbot. Most traded pairs: BTC/USDT, ETH/USDT, SOL/USDT.</p><p>New development: Autonomous AI agents that execute trades without human intervention. These agents analyze sentiment, on-chain data, and technical indicators simultaneously. Average ROI: 12-18% monthly (top quartile).</p><p><strong>Risk warning:</strong> AI agents can amplify losses during flash crashes. Always use stop-losses.</p><p><em>Indonesian:</em> AI trading bot mendominasi 58% volume crypto harian. Tapi hati-hati risiko flash crash.</em></p>',category:'AI Trading',date:'May 5, 2026',readTime:6,image:'https://picsum.photos/seed/aitrading26/800/400',isNew:true},
        {id:11,title:'🏗️ Layer 2 Solutions See 400% Growth as Blockchain Scales for AI Workloads',excerpt:'Arbitrum, Optimism, and zkSync process 12M+ transactions daily as AI dApps demand cheap compute.',content:'<p><strong>L2 ecosystem update:</strong> Total L2 TVL: $18.5B (+400% YoY). Daily transactions: 12M+. Top L2s: Arbitrum ($8.2B TVL), Optimism ($4.1B), zkSync ($2.8B), Base ($3.4B).</p><p>AI dApps driving demand: ChatGPT-style apps on-chain, decentralized inference markets, AI agent coordination. L2s offer sub-cent transaction fees, making AI microtransactions viable.</p><p><em>Indonesian:</em> Layer 2 tumbuh 400% karena kebutuhan AI dApps. Biaya transaksi hampir nol, ideal untuk AI microtransactions.</p>',category:'Layer 2',date:'May 5, 2026',readTime:7,image:'https://picsum.photos/seed/l2scale26/800/400',isNew:true},
        {id:12,title:'🔐 Zero-Knowledge Proths Meet AI: The Future of Private Machine Learning',excerpt:'ZK-ML protocols enable verifiable AI inference without exposing model weights or training data.',content:'<p><strong>ZK-ML breakthrough:</strong> New protocols prove AI model correctness without revealing internals. Projects: ezkl, Modulus Labs, Giza. Applications: private credit scoring, confidential medical AI, on-chain ML verification.</p><p>How it works: Generate ZK proofs for neural network computations. Verifiers confirm output validity without seeing input data or model architecture. Proof generation time: under 30 seconds for medium models.</p><p><em>Indonesian:</em> Zero-Knowledge Machine Learning memungkinkan verifikasi AI tanpa buka data sensitif. Teknologi ini akan mengubah industri fintech dan healthcare.</p>',category:'ZK & Privacy',date:'May 4, 2026',readTime:8,image:'https://picsum.photos/seed/zkml26/800/400',isNew:true},
        {id:13,title:'🌐 Decentralized Physical Infrastructure (DePIN) Tokens Surge 200%',excerpt:'Helium, Filecoin, and Render lead the DePIN boom as real-world infrastructure goes on-chain.',content:'<p><strong>DePIN market overview:</strong> Total market cap: $12.4B (+200% in 2026). Top tokens: Helium (HNT) +180%, Filecoin (FIL) +145%, Render (RNDR) +340%, Arweave (AR) +95%.</p><p>What is DePIN? Physical infrastructure (WiFi hotspots, GPU clusters, storage nodes) operated by decentralized networks. Users earn tokens by contributing hardware. AI demand driving massive GPU rental market growth on DePIN networks.</p><p><em>Indonesian:</em> DePIN tokens melonjak 200%. Infrastruktur fisik sekarang bisa di-tokenize dan menghasilkan passive income.</p>',category:'DePIN',date:'May 4, 2026',readTime:6,image:'https://picsum.photos/seed/depin26/800/400',isNew:true},
        {id:14,title:'📈 Crypto Market Outlook: AI Tokens to Lead Bull Run Through Q3 2026',excerpt:'Analysts predict AI + crypto narrative will drive $4T market cap by end of Q3 2026.',content:'<p><strong>Market predictions:</strong> BTC target: $95K-$110K by Q3. AI tokens (TAO, RNDR, FET): potential 2-5x. ETH target: $3,200-$3,800. SOL target: $120-$150.</p><p>Key catalysts: Fed rate cuts (May 2026), Bitcoin halving supply effect kicking in, AI adoption surge, institutional inflows via ETFs. Risk factors: regulatory uncertainty, macro downturn, exchange security issues.</p><p><em>Indonesian:</em> Analis prediksi AI tokens akan memimpin bull run Q3 2026. BTC bisa tembus $100K. SelaluDYOR sebelum investasi.</p>',category:'Market Analysis',date:'May 4, 2026',readTime:7,image:'https://picsum.photos/seed/marketq326/800/400',isNew:true},
        {id:2,title:'5 Altcoins That Could Hit All-Time Highs in May 2026',excerpt:'WBT, TRX, LINK, SUI, and NEAR are within striking distance of record highs.',content:'<p><strong>WBT</strong> — Exchange token with strong fundamentals. <strong>TRX</strong> — Most USDT transactions. <strong>LINK</strong> — RWA tokenization growing. <strong>SUI</strong> — TVL up 400%+. <strong>NEAR</strong> — AI dApps go-to chain.</p><p><em>Indonesian:</em> Lima altcoin berpotensi ATH di Mei 2026. Selalu DYOR sebelum investasi.</p>',category:'Altcoins',date:'May 5, 2026',readTime:7,image:'https://picsum.photos/seed/alt5may26/800/400',isNew:true},
        {id:3,title:'🤖 AI Altcoins Outperform Bitcoin as AI Trade Spreads to Crypto',excerpt:'Three AI altcoins quietly outperforming BTC as AI narrative spreads from Wall Street.',content:'<p>AI agents handle 58% of all crypto trading volume. x402 protocol enables AI agent payments.</p><p><strong>Top AI coins:</strong> Bittensor (TAO), Render (RNDR), Fetch.ai (FET).</p><p><em>Indonesian:</em> Narasi AI + crypto semakin kuat. Altcoin AI outperform Bitcoin.</p>',category:'AI & Crypto',date:'May 5, 2026',readTime:5,image:'https://picsum.photos/seed/aicrypto26/800/400',isNew:true},
        {id:4,title:'Morgan Stanley: Bitcoin on Bank Balance Sheets Is Coming',excerpt:'Wall Street giant signals paradigm shift — traditional banks will soon hold BTC.',content:'<p>Morgan Stanley manages $5T+ in assets. The path: ETF approval → $130B AUM → Basel rules → Banks holding BTC.</p><p><em>Indonesian:</em> Jika bank besar mulai pegang Bitcoin, legitimasi sangat besar untuk adopsi crypto.</p>',category:'Institutional',date:'May 4, 2026',readTime:5,image:'https://picsum.photos/seed/msbitcoin26/800/400',isNew:true},
        {id:5,title:'Claude AI Prediksi Harga BTC, XRP & SOL Akhir Mei 2026',excerpt:'AI model Claude membuat prediksi harga Bitcoin, XRP, dan Solana.',content:'<p><strong>Prediksi Claude:</strong> BTC: $85K-$92K. XRP: $0.65-$0.75. SOL: $95-$110.</p><p><em>Disclaimer:</em> Ini prediksi AI, bukan saran investasi. Crypto berisiko tinggi.</p>',category:'AI Analysis',date:'May 5, 2026',readTime:4,image:'https://picsum.photos/seed/claudeai26/800/400',isNew:true},
        {id:6,title:'📊 Crypto Market Report: $2.72T Cap, DeFi Volume Up 13%',excerpt:'Daily snapshot: BTC $81,286, ETH $2,400, SOL $90. Sentiment shifts to neutral.',content:'<p>Total MCap: $2.72T (+1.53%). 24h Volume: $163.55B. BTC dominance: 60.46%. Fear & Greed: Neutral/Greed.</p><p><em>Indonesian:</em> Pasar crypto pulih. Sentimen berubah dari extreme fear ke netral.</p>',category:'Market Data',date:'May 6, 2026',readTime:5,image:'https://picsum.photos/seed/mcap26/800/400',isNew:true}
      ];
      const featuredPost = computed(() => posts[0]);
      const filteredPosts = computed(() => posts.slice(1));
      function openPost(post) { currentPost.value = post; view.value = 'post'; window.scrollTo({top:0,behavior:'smooth'}); }
      return { view, currentPost, marketStats, posts, featuredPost, filteredPosts, openPost };
    }}).mount('#app');
  <\/script>
</body>
</html>`)
})

app.get('/about', function (req, res) {
  res.sendFile(path.join(__dirname, '..', 'components', 'about.htm'))
})

app.get('/api-data', (req, res) => {
  res.json({ message: 'CryptoInsider Pro API', status: 'active', timestamp: new Date().toISOString() })
})

app.get('/healthz', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() })
})

// llms.txt proxy for UpRock AI Sitemap verification
app.get('/llms.txt', async (req, res) => {
  try {
    const response = await fetch('https://cdn.aisitemap.ai/cryptoinsider-pro-vercel-app/llms.txt')
    if (!response.ok) return res.status(502).send('Failed to fetch llms.txt')
    const content = await response.text()
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.setHeader('Cache-Control', 'public, s-maxage=900, stale-while-revalidate=3600')
    res.status(200).send(content)
  } catch {
    res.status(503).send('Service temporarily unavailable')
  }
})

export default app
