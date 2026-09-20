/* ============================================================
   All portfolio content lives here. Edit this file, not the HTML.
   ============================================================ */
window.PORTFOLIO = {

  /* --- vertical timeline, oldest first --- */
  timeline: [
    {
      id: 'sage',
      year: '2022',
      when: 'Aug 2022 → Jun 2026',
      title: 'B.Tech, Computer Science',
      org: 'Sage University, Indore',
      kind: 'Origin',
      thesis: 'CGPA 8.87. Everything below happened alongside it, not after it.',
      bullets: ['Class XII 94%, Class X 92%, St. Paul’s Convent, Ujjain.'],
      metrics: [{ n: '8.87', l: 'CGPA / 10' }],
      stack: ['Python', 'SQL', 'JavaScript', 'React'],
      links: []
    },
    {
      id: 'claylab',
      year: '2023',
      when: 'Apr 2023 → Jun 2026',
      title: 'Mentor, and my first product to own',
      org: 'Claylab Education Foundation',
      kind: 'Mentoring',
      thesis: 'Three years mentoring students on structured problem-solving, and a website revamp I owned end to end.',
      bullets: [
        'Defined personas, mapped key journeys, reworked UI and flows, improved SEO and content structure.',
        'Co-designed the mentorship curriculum from learner pain points, using engagement and cohort-completion data.'
      ],
      metrics: [{ n: '3 yrs', l: 'Mentoring students' }],
      stack: ['Personas', 'Journey mapping', 'UX', 'SEO', 'Curriculum design'],
      links: []
    },
    {
      id: 'competitions',
      year: '2023',
      when: '2023',
      title: 'Pan-India runner-up, twice',
      org: 'Zomato Product Strategy · Futurepreneur',
      kind: 'Proof',
      win: '1st Runner-Up, twice',
      thesis: 'Product judgment, tested against the rest of the country.',
      bullets: [
        'Zomato Product Strategy Case Study, pan-India: 1st Runner-Up out of a national field, judged on whether a product recommendation held up under real trade-offs, not just how ambitious it sounded.',
        'Futurepreneur, a pan-India business simulation testing market sizing, unit economics and go-to-market calls under time pressure: 1st Runner-Up.',
        'Two different formats, two different judging panels, hosted through Sunstone\'s CaseQuest series, the same result: consistent product judgment, not a one-off.'
      ],
      metrics: [{ n: '1st RU', l: 'Both, pan-India' }],
      stack: ['Product strategy', 'Market sizing'],
      photos: [
        { src: 'assets/img/casequest-winners.png', cap: 'Sunstone CaseQuest, official results' }
      ],
      links: []
    },
    {
      id: '1m1b',
      year: '2024',
      when: 'Aug 2024 → Nov 2024',
      title: 'Learned to grade a model, not trust it',
      org: '1M1B Foundation · GenAI & Analytics Intern',
      kind: 'Evaluation',
      thesis: 'Where evaluation became the interesting half of AI work.',
      bullets: [
        '100+ LLM outputs graded with LLM-as-a-Judge; built a failure-mode taxonomy for hallucination, reasoning and output quality.',
        'Python + SQL pipeline tracking quality and latency across 5,000+ daily calls in 3 production systems.',
        'Benchmarked Groq inference at 0.4s against 3.2s, with no rubric-score loss.'
      ],
      metrics: [{ n: '5,000+', l: 'Daily AI calls instrumented' }, { n: '0.4s', l: 'vs 3.2s baseline' }],
      stack: ['LLM-as-a-Judge', 'Failure taxonomy', 'Python', 'SQL', 'Groq'],
      photos: [
        { src: 'assets/img/docassist-architecture.png', cap: 'DocAssist, system architecture' }
      ],
      links: [
        { label: 'DocAssist README', url: 'https://github.com/godhulivyas-build/DocAssist/blob/main/README.md' },
        { label: 'Demo video', url: 'https://drive.google.com/file/d/1ZGi5UvTm7qNwh-bhKQcpu6Adle6jmVXx/view' }
      ]
    },
    {
      id: 'gdg',
      year: '2024',
      feature: true,
      when: 'Dec 2024 → Jun 2025',
      title: 'Founder & Lead, Google Developers Group',
      org: 'GDG On Campus · Sunstone SUI chapter',
      kind: 'Google',
      thesis: 'Founded the chapter and took it from zero to 1,000+ members in under twelve months, one of the fastest-growing GDG chapters in the region.',
      bullets: [
        '20+ workshops across AI/ML, Cloud and Web, with Google speakers and industry mentors.',
        'Built and led a core team across ops, marketing, partnerships and event logistics.',
        'Ran it like a product: audience, retention, programming calendar.'
      ],
      metrics: [{ n: '1,000+', l: 'Members, from zero' }, { n: '20+', l: 'Events run' }],
      stack: ['Community', 'Program design', 'Partnerships', 'Google Cloud'],
      photos: [
        { src: 'assets/img/gdg-chapter-lead.png', cap: 'Chapter Lead, GDG On Campus' },
        { src: 'assets/img/gdg-welcome-board.png', cap: 'Cloud Community Days 2025, Indore' },
        { src: 'assets/img/gdg-sage-group.png', cap: 'SAGE University chapter, full team' }
      ],
      links: [{ label: 'GDG chapter site', url: 'https://gdsc-sui.vercel.app/' }]
    },
    {
      id: 'aampannaa',
      year: '2024',
      when: 'Dec 2024 → May 2025',
      title: 'Ran delivery for five clients at once',
      org: 'Aam Pannaa Creations · Ops & Client Delivery',
      kind: 'Operating',
      thesis: 'No playbook existed, so I wrote one. Named Best Employee for it.',
      bullets: [
        '5+ concurrent client engagements end to end, with a structured delivery process introduced.',
        'Execution efficiency up 40%; owned invoicing, project tracking and retention.'
      ],
      metrics: [{ n: '+40%', l: 'Delivery efficiency' }],
      stack: ['Delivery ops', 'Client retention', 'Process design'],
      links: []
    },
    {
      id: 'chanakya',
      year: '2025',
      when: 'Jun 2025 → Aug 2025',
      title: 'Shipped into 50 schools',
      org: 'Chanakya AI · Product Intern',
      kind: 'Shipping',
      thesis: 'Beta rollout across 50 NCR sites, replacing a paper process end to end.',
      bullets: [
        '200+ feedback signals into a RICE-prioritised backlog; the top 3 changes shipped for a 9-point NPS lift.',
        'Interfaces designed in Figma and taken through implementation: release velocity up 26%.',
        '10+ institutional B2B clients onboarded through demos and UAT.',
        'Recorded end-to-end video tutorials explaining the platform and its AI workflows for a non-technical audience, onboarding school administrators, teachers and K-12 students directly.'
      ],
      metrics: [{ n: '+9 NPS', l: 'Across 2 releases' }, { n: '50 sites', l: 'Beta deployment' }],
      stack: ['RICE', 'Figma', 'UAT', 'B2B onboarding'],
      links: [{ label: 'Tutorial drive', url: 'https://drive.google.com/drive/folders/1OiKNqnKCCPey-JwO0_TizhRg0W4c4ue6?usp=sharing' }]
    },
    {
      id: 'truckhai',
      year: '2025',
      when: 'Nov 2025 → Jan 2026',
      title: 'Found the gap that was eating a month',
      org: 'Truck Hai · Product Intern',
      kind: 'Diagnosis',
      thesis: 'A process gap between operational and payment records was blocking settlement confirmation. Nobody had named it.',
      bullets: [
        'Driver, vendor and ops data reconciled into one source of truth: settlement cycle cut by ~15 days.',
        '50+ structured interviews turned into PRDs and sprint-ready requirements.'
      ],
      metrics: [{ n: '−15 days', l: 'Settlement cycle' }, { n: '50+', l: 'User interviews' }],
      stack: ['Process gap analysis', 'PRDs', 'Reconciliation'],
      links: []
    },
    {
      id: 'founding',
      year: '2026',
      when: 'Jan 2026 → Apr 2026',
      title: 'Founding team, US accelerator',
      org: 'Founding Teams · California',
      kind: 'Accelerator',
      thesis: 'Selected into a California startup accelerator, building 0 to 1 in a founding-team capacity with no PM safety net.',
      bullets: [
        'Owned MVP scope and a 10-week phased roadmap, UI through development to testing, using AI-assisted tooling.',
        'Ran a part-time cross-functional team on agile sprints, and drove launch readiness: acceptance criteria, QA handoffs, post-launch feedback loop.'
      ],
      metrics: [{ n: '0 → 1', l: 'Product, founding capacity' }, { n: '10 wk', l: 'Phased roadmap' }],
      stack: ['MVP scoping', 'Roadmapping', 'Cursor', 'Claude', 'Agile'],
      links: []
    },
    {
      id: 'cupshup',
      year: '2026',
      feature: true,
      when: 'Feb 2026 → now',
      title: 'Product Manager, AI Systems',
      org: 'CupShup · Bengaluru',
      kind: 'Now',
      thesis: 'Agentic systems that run unattended inside a live business, and I own the number they move.',
      bullets: [
        'Production 3-agent content system with an LLM judge that blocks its own output below a 75 threshold.',
        'Rebuilt cupshup.co.in around new personas: organic contribution 65% to 92%, Ahrefs health 60 to 99.',
        'Procure-to-pay rebuilt into a 3-step verification chain: 12 to 4 approval steps, 40% less client effort.',
        '20+ AI tools taken from zero to market with the founder: ran the email GTM, segmented the list into buckets by fit, and took each tool straight to that audience for them to judge and become the first users.'
      ],
      metrics: [{ n: '65→92%', l: 'Organic contribution' }, { n: '12→4', l: 'Approval steps' }],
      stack: ['Claude', 'Ahrefs API', 'n8n', 'Supabase', 'Power BI', 'Mixpanel'],
      links: [{ label: 'cupshup.co.in', url: 'https://www.cupshup.co.in/' }]
    },
    {
      id: 'selected',
      year: '2026',
      when: '2026',
      title: 'Saarthi, and who backed it',
      org: 'Polygnan · Sarvam AI · ICAR SHITIJ 2.0 · IIM Bangalore',
      kind: 'Selection',
      win: 'Winner, Polygnan Demo Day',
      thesis: 'A live agri-logistics product, and four programs that picked it up.',
      bullets: [
        'Polygnan Fellowship: 1 of 22 from 4,000+ applicants, and winner of Demo Day.',
        'Selected for YouStart Cohort #2, after months of rejections from other startup programs — and later featured by Polygnan on how fellows completed the EYFI Challenge.',
        'Sarvam AI Startup Program, ICAR SHITIJ 2.0, and the Women Startup Program at IIM Bangalore.',
        '80% Week-2 retention across 15+ users.'
      ],
      metrics: [{ n: 'Winner', l: 'Polygnan Demo Day' }, { n: '1 of 22', l: 'From 4,000+ applicants' }],
      stack: ['Sarvam AI', 'Polygnan', 'ICAR SHITIJ 2.0', 'IIMB WSP'],
      photos: [
        { src: 'assets/img/polygnan-pitch1.jpg', cap: 'Demo Day pitch · "86% farmers still lose"' },
        { src: 'assets/img/polygnan-pitch2.jpg', cap: 'Pitching to the judging panel' },
        { src: 'assets/img/polygnan-winner.jpg', cap: 'Winner, ₹10,000 cash prize' },
        { src: 'assets/img/polygnan-winner-group.jpg', cap: 'With the Polygnan team, post-win' },
        { src: 'assets/img/youstart-cohort2.png', cap: 'I\'m in, YouStart Cohort #2' },
        { src: 'assets/img/youstart-eyfi-reel.png', cap: 'Featured by Polygnan, EYFI Challenge' }
      ],
      links: [
        { label: 'Saarthi live', url: 'https://saarthimvp.vercel.app/' },
        { label: 'Pitch deck', url: 'https://canva.link/ekqtdk11n8zd097' },
        { label: 'YouStart Cohort #2 post', url: 'https://lnkd.in/p/gbTq9pvB' },
        { label: 'Featured on Instagram', url: 'https://www.instagram.com/reel/DYh_OkbSWik' }
      ]
    }
  ],


  /* --- asset library: teardowns, case studies, PRDs, analyses --- */
  assets: [
    {
      id: 'minisense',
      type: 'PRD',
      title: 'MiniSense',
      note: 'Answers backed by computed numbers and real quotes. Never a guess.',
      facts: ['Full PRD, FR1–FR11', 'Live product'],
      img: 'assets/img/thumb-minisense.webp',
      link: 'minisense.html'
    },
    {
      id: 'peakflo',
      type: 'Case study',
      title: 'Peakflo AP/AR Product Analysis',
      note: 'AP/AR flows mapped, friction found, fixes scored on RICE.',
      facts: ['14–21 day P2P cycle mapped', '3 fixes, RICE-scored', 'P0 target: 60% shorter approval cycle'],
      img: 'assets/img/thumb-peakflo.webp',
      link: 'peakflo.html'
    },
    {
      id: 'tulu',
      type: 'Case study',
      title: 'Tulu Health App Growth',
      note: 'Reframed a growth ask from acquisition to activation, caught a data-integrity trap first, then shipped a working fix.',
      facts: ['Live prototype, built in Lovable', '42%→26% activation, the real lever'],
      img: 'assets/img/thumb-tulu.webp',
      link: 'tulu.html'
    },
    {
      id: 'composio',
      type: 'Case study',
      title: 'SaaS Toolkit Research Pipeline',
      note: 'A 4-stage pipeline that researches, verifies and scores 100 SaaS apps, then reports its own 89% accuracy honestly.',
      facts: ['100 apps, ~65s end to end', '70 buildable today, no blockers'],
      img: 'assets/img/thumb-composio.webp',
      link: 'composio.html'
    },
    {
      id: 'paperboat',
      type: 'Case study',
      title: 'Paper Boat Zero Prebiotic Soda Launch',
      note: 'CupShup client case study for the Paper Boat Zero prebiotic soda launch.',
      facts: ['Client campaign', 'Published on cupshup.co.in'],
      img: 'assets/img/thumb-paperboat.jpg',
      link: 'https://www.cupshup.co.in/case-studies/paper-boat-zero-prebiotic-soda-launch'
    },
    {
      id: 'pintola',
      type: 'Case study',
      title: 'Pintola Canter Activation',
      note: 'How Pintola reached 3.5M via a canter-truck FMCG sampling activation across India.',
      facts: ['Client campaign', 'FMCG sampling'],
      img: 'assets/img/thumb-pintola.jpg',
      link: 'https://www.cupshup.co.in/case-studies/pintola-canter-activation-fmcg-sampling-india'
    },
    {
      id: 'quickcommerce-blog',
      type: 'Case study',
      title: 'Bridging the 10-Minute Delivery Loop',
      note: 'How D2C brands turn offline sampling into trackable quick-commerce conversions: QR checkouts, habit-zone targeting, and geotagged sales lift.',
      facts: ['Written for cupshup.co.in', 'Quick-commerce playbook'],
      img: '',
      link: 'https://www.cupshup.co.in/blog/ai-tools-that-will-change-marketing-all-over-again'
    },
    {
      id: 'cashkaro',
      type: 'Case study',
      title: 'CashKaro Recall Engine',
      note: 'Reframed a missed-cashback problem from awareness to timing, then corrected an earlier draft’s inflated math before speccing the fix.',
      facts: ['Deterministic, no AI in the loop', 'Bot-contamination check built in'],
      img: 'assets/img/thumb-cashkaro.webp',
      link: 'cashkaro.html'
    },
    {
      id: 'zomato',
      type: 'Case study',
      title: 'Zomato Product Strategy & Growth',
      note: 'A discovery fix for new restaurants, later built into a live app.',
      facts: ['1st runner-up, pan-India', 'Live prototype'],
      img: 'assets/img/thumb-zomato.webp',
      link: 'zomato.html'
    },
    {
      id: 'tensortonic',
      type: 'Case study',
      title: 'TensorTonic GTM',
      note: 'GTM strategy, execution, and expected impact.',
      facts: ['Strategy · execution · impact'],
      img: 'assets/img/thumb-tensortonic.webp',
      link: 'https://app.notion.com/p/TensorTonic-GTM-Case-study-3b7684d03c3e8077b791d0dcd10d325d'
    },
    {
      id: 'aangan-prd',
      type: 'Case study',
      title: 'Aangan · Family Circle',
      note: 'Privacy-first elderly care at home. No live tracking, no cameras.',
      facts: ['6 agents', 'Family dashboard + Scam Shield'],
      img: 'assets/img/thumb-aangan.webp',
      link: 'https://app.notion.com/p/Aangan_PRD_godhulivyas-3b9684d03c3e8070873bc65c59ac5a02'
    },
    {
      id: 'automon-teardown',
      type: 'Case study',
      title: 'Automon Dashboard',
      note: 'A no-code monitor that turns triggers into one clear data flow.',
      facts: ['25 triggers', '1,247 data points'],
      img: '',
      link: 'https://automon-dash.lovable.app'
    },
    {
      id: 'crm-teardown',
      type: 'Case study',
      title: 'Enquiry-to-CRM Agent',
      note: 'A WhatsApp agent that never loses a lead\u2019s context.',
      facts: ['n8n orchestration', '4 systems, 1 loop'],
      img: '',
      link: 'https://www.cupshup.co.in/'
    },
    {
      id: 'ethos-asset',
      type: 'Case study',
      title: 'ethOS PRD & Teardown',
      note: 'Zero agency spam. A 0–100 quality score on every listing.',
      facts: ['4-stage RAG', '0–100 scoring', 'Live product'],
      img: 'assets/img/thumb-ethos.png',
      link: 'ethos.html'
    },
    {
      id: 'salon',
      type: 'PRD',
      title: 'QuickServe',
      note: 'Rapido, for salon and beauty services. A two-sided marketplace, specified end to end.',
      facts: ['14-section PRD', 'Live product'],
      img: 'assets/img/thumb-quickserve.webp',
      link: 'quickserve.html'
    },
    {
      id: 'growth-acct',
      type: 'Analysis',
      title: 'Growth Accounting',
      note: 'Weekly growth decomposed into new, retained, resurrected and churned users, read through the Quick Ratio.',
      facts: ['Excel pivot tables + formulas', 'Quick Ratio health check'],
      img: 'assets/img/thumb-growth.webp',
      link: 'growth.html'
    },
    {
      id: 'attendance',
      type: 'Analysis',
      title: 'Attendance Analysis',
      note: 'Attendance trends, comprehensive final grading, and data-backed recommendations.',
      facts: ['Formula-driven workbook', 'Live sheet'],
      img: 'assets/img/thumb-attendance.webp',
      link: 'attendance.html'
    },
    {
      id: 'humanness',
      type: 'PRD',
      title: 'HumanNessAI',
      note: 'A nationwide image-collection platform for India-representative AI data.',
      facts: ['8-metric success framework', 'Live MVP'],
      img: 'assets/img/thumb-humanness.webp',
      link: 'humanness.html'
    },
    {
      id: 'kasparro',
      type: 'Audit',
      title: 'Kasparro Audit',
      note: 'Found 20 errors in an AI-visibility audit, then specced the tool to catch them automatically.',
      facts: ['20/20 errors confirmed', 'Consistency Gate PRD'],
      img: 'assets/img/thumb-kasparro.webp',
      link: 'kasparro.html'
    }
  ],

  /* --- shipped systems --- */
  systems: [
    {
      id: 'harness',
      tier: 'Production',
      title: 'Five-Agent Content Harness',
      org: 'CupShup · internal, production',
      preview: 'harness',
      thesis: 'A single model asked to just write a draft gives generic copy, factual errors and bad formatting. Splitting the job into five narrow agents behind one orchestrator fixed all three at once.',
      bullets: [
        'Scout queries the Ahrefs API for real keyword volume and search intent. Copywriter drafts against that brief plus the brand voice corpus. Optimizer inserts H-tags, meta descriptions and internal links. Illustrator generates visual prompts for DALL-E/Napkin AI. Critic grades the final copy against a factual positioning rubric.',
        'The quality loop: below a 75% threshold, the Orchestrator rejects the draft and routes it back to the Copywriter with the specific error, not a blind retry. At or above 75%, it moves to human review.',
        'A Single Source of Truth markdown index for brand parameters eliminated factual discrepancies, like conflicting city counts, before the Critic ever had to catch them.',
        'Production cycle time fell 90%, from 6 hours to 45 minutes of human review, while draft rejection rates dropped to 8%.'
      ],
      metrics: [{ n: '90%', l: 'Faster production cycle' }, { n: '8%', l: 'Draft rejection rate' }],
      stack: ['Claude', 'Ahrefs API', 'LLM-as-a-Judge', 'Weighted rubric', 'Orchestrator routing'],
      links: [{ label: 'Runs on cupshup.co.in', url: 'https://www.cupshup.co.in/' }]
    },
    {
      id: 'cupshupplatform',
      tier: 'Live',
      title: 'CupShup AI Platform, Positioning & Onboarding',
      org: 'CupShup · Client-facing enablement',
      preview: 'cupshup',
      thesis: 'A 20+ tool platform is useless if the first-time user cannot find their way in. I built the pages that explain it, then sat with clients until they could use it themselves.',
      bullets: [
        'Built and positioned the platform product pages for CupShup’s AI Marketing Platform across SEO, SMM, Email and WhatsApp automation modules.',
        'Sat directly with brand stakeholders to diagnose their marketing gaps, demo the tool mechanics, and record custom video walkthroughs for each client.',
        'This high-touch onboarding lowered user friction, accelerated client activation, and drove feature adoption among early adopters.',
        'Drafted the product pitch email sent to D2C founders explaining how the platform’s automated crawl diagnostics work, for the SEO Site Audit tool.'
      ],
      metrics: [{ n: '20+', l: 'Tools positioned' }, { n: '4', l: 'Automation modules' }],
      stack: ['Product positioning', 'Client enablement', 'Video walkthroughs', 'CupShup platform'],
      links: [
        { label: 'Platform', url: 'https://www.cupshup.co.in/platform' },
        { label: 'User guide video', url: 'https://app.trupeer.ai/view/hkKnoDnEJ/cupshup-ai-dashboard-user-guide' }
      ]
    },
    {
      id: 'p2p',
      tier: 'Production',
      title: 'Procure-to-Pay Chain',
      org: 'CupShup · internal, production',
      preview: 'p2p',
      thesis: 'Twelve approval steps became four: ask the right person once, not everyone.',
      bullets: [
        'Three verification steps, each with a named owner: role check, approval under segregated duties, then a separate approval-to-payment gate.',
        'Rejection routes straight back to the requester with the reason, instead of dying in a thread.',
        'Every state change writes to an immutable audit timeline, so a settlement can be reconstructed after the fact.',
        'Mapped AS-IS before defining TO-BE with engineering across three workflows.'
      ],
      metrics: [{ n: '12 → 4', l: 'Approval steps' }, { n: '40%', l: 'Less client operational effort' }],
      stack: ['AS-IS / TO-BE mapping', 'Segregation of duties', 'Rejection routing', 'Audit timeline'],
      links: [{ label: 'Built at CupShup', url: 'https://www.cupshup.co.in/' }]
    },
    {
      id: 'cupshupweb',
      tier: 'Live',
      title: 'cupshup.co.in',
      org: 'Website rebuild + technical SEO · CupShup',
      preview: 'cupshup',
      thumb: 'assets/img/thumb-cupshup-platform.webp',
      thesis: 'Rebuilt the site around new personas, then fixed the crawl beneath it.',
      bullets: [
        'Research translated into information architecture, layout and UI/UX choices, not just a reskin.',
        'Technical audit across 8,296 internal URLs and 457,581 links; issues classified by severity and tracked to closure until Ahrefs health read 99.',
        'Keyword variants deduplicated on intent and SERP overlap before any content ran.',
        'Measurement layer built underneath: UTM attribution and Supabase event data, segmented in SQL, surfaced in Power BI and Mixpanel across 40+ engagements.'
      ],
      metrics: [{ n: '65 → 92%', l: 'Organic traffic contribution' }, { n: '60 → 99', l: 'Ahrefs site health' }],
      stack: ['Ahrefs', 'Technical SEO', 'IA & UX', 'Supabase', 'SQL', 'Power BI', 'Mixpanel'],
      links: [{ label: 'Live site', url: 'https://www.cupshup.co.in/' }]
    },
    {
      id: 'aiaccelerators',
      tier: 'Live',
      title: '20+ AI Accelerators, GTM',
      org: 'Product launches · CupShup',
      preview: 'cupshup',
      thesis: 'Building an AI tool is the easy half. Getting the first real user to try it is the other half, and nobody hands that to you.',
      bullets: [
        'Ran the go-to-market for 20+ AI accelerators across SEO, Social, WhatsApp and Influencer suites, end to end via email.',
        'Segmented the list into buckets by fit before any send, so each tool reached the audience most likely to actually use it.',
        'Took each launch straight to that audience to judge, not a curated demo crowd, so the feedback was real from day one.',
        'That loop became the first-user pipeline for every accelerator since: launch, judge, iterate.'
      ],
      metrics: [{ n: '20+', l: 'AI accelerators launched' }, { n: '4', l: 'Suites, segmented GTM' }],
      stack: ['Email GTM', 'List segmentation', 'Product launches', 'CupShup platform'],
      links: [{ label: 'cupshup.co.in', url: 'https://www.cupshup.co.in/' }]
    },
    {
      id: 'saarthi',
      tier: 'Live',
      title: 'Saarthi',
      org: 'Voice-first agri logistics · Polygnan Fellowship',
      preview: 'saarthi',
      thumb: 'assets/img/thumb-saarthi-app.png',
      thesis: '300+ field conversations pointed at one root cause: 70% of observed supply-chain delay was manual phone coordination.',
      bullets: [
        'Scoped the MVP to dispatch and deliberately cut price discovery.',
        'Indic speech-to-text and TTS via Sarvam AI, so low-literacy users transact by voice instead of by form.',
        'Sarthi Didi, a voice assistant that guides a first-time user through the flow, plus Sarthi Bazaar and a live price tracker across 36+ crops.',
        'Won Polygnan Demo Day. 318+ registered farmers, 80% Week-2 retention, and entry into ICAR SHITIJ 2.0 and the Sarvam AI Startup Program.',
        'Built a community of 300+ farmers around real market-price data, using a short walkthrough video to explain the product and its AI-assisted workflow directly to them.'
      ],
      metrics: [{ n: '318+', l: 'Registered farmers' }, { n: '80%', l: 'Week-2 retention' }],
      stack: ['Sarvam AI (Indic STT/TTS)', 'React', 'Vercel', 'Dispatch workflow'],
      links: [
        { label: 'Live product', url: 'https://saarthimvp.vercel.app/' },
        { label: 'Pitch deck', url: 'https://canva.link/h81hmy0v3v79vx1' },
        { label: 'Farmer walkthrough video', url: 'https://youtu.be/AYJJxBXKOrc?si=2C1YyUZiIIjzw7cx' }
      ]
    },
    {
      id: 'ethos',
      tier: 'Live',
      title: 'ethOS',
      org: 'RAG intelligence product · v0 shipped solo',
      preview: 'ethos',
      thesis: 'Four-stage RAG grounded in the user’s own sources. Wrong answers traced to chunk boundaries, never to the model.',
      bullets: [
        'OAuth 2.0 ingestion → LangChain orchestration → GPT-4o reasoning → Pinecone vector search.',
        'FastAPI + PostgreSQL backend, Next.js front end on Vercel.',
        'Converts unstructured listings into a 0–100 quality score across funding, compensation, remote flexibility and recruiter activity.'
      ],
      metrics: [{ n: '4-stage', l: 'Ingest → retrieve → reason → serve' }, { n: '0–100', l: 'Quality score shipped' }],
      stack: ['LangChain', 'GPT-4o', 'Pinecone', 'FastAPI', 'PostgreSQL', 'Next.js'],
      links: [
        { label: 'Live product', url: 'https://ethosinternshipfinder.vercel.app/' },
        { label: 'GitHub', url: 'https://github.com/godhulivyas-build' }
      ]
    },
    {
      id: 'produscope',
      tier: 'Live',
      title: 'Produscope AI',
      org: 'Five-agent financial planning',
      preview: 'produscope',
      thesis: '"Can I afford this?" is four questions at once. One long prompt handles that badly; five narrow agents handle it well.',
      bullets: [
        'Five specialists, one coordinator: Projection owns the 12-month forward savings path, Cost of Living owns baseline burn, Affordability owns the specific purchase, Goal Coach owns ETAs against actual surplus, Life Events owns what a change in circumstance shifts.',
        'Each remit is narrow enough that its output is checkable independently. That is the whole reason the decomposition works, and the same principle later became the judge layer at CupShup.',
        'Three surfaces: a Dashboard with savings, surplus and runway; a Simulator where "can I afford an iPhone 16" resolves to savings-after, a yes or no, and the delay it causes to an existing goal; and a Goals tracker with honest ETAs rather than motivational ones.',
        'Deliberate constraint: manual entry only, no bank connection and no UPI linkage anywhere. It costs convenience and auto-categorisation, on the bet that an Indian user will try a finance tool that never asks for account access.',
        'Shipped and live at finance-buddyai.lovable.app. Presented at IIT Guwahati as part of the Product Management fellowship cohort.'
      ],
      metrics: [{ n: '5 agents', l: 'Specialists plus a reconciler' }, { n: 'IIT-G', l: 'Presented, PM Fellowship' }],
      stack: ['Multi-agent reasoning', 'Output reconciliation', 'Runway modelling', 'Privacy-first design', 'Lovable'],
      links: [
        { label: 'Live prototype', url: 'https://finance-buddyai.lovable.app/' },
        { label: 'Read the full PRD', url: 'produscope.html' }
      ]
    },
    {
      id: 'docassist',
      tier: 'Finalist',
      title: 'DocAssist',
      org: 'Clinical documentation assistant · 1M1B',
      preview: 'docassist',
      thesis: 'Summarisation and multi-turn Q&A over clinical notes: 15 minutes down to under 10 seconds at 90% relevance.',
      bullets: [
        'Mistral served via Groq: the latency tradeoff that made real-time use viable.',
        'Validated with 15+ hospital users before it was called done.',
        'The rubric and failure taxonomy built here became the judge agent in the CupShup harness.'
      ],
      metrics: [{ n: '15min→10s', l: 'Turnaround' }, { n: 'Top 25', l: 'Pan-India, Unleash LLM Challenge' }],
      stack: ['Mistral', 'Groq', 'Rubric eval', 'Failure-mode taxonomy'],
      links: [
        { label: 'Demo video', url: 'https://drive.google.com/file/d/1ZGi5UvTm7qNwh-bhKQcpu6Adle6jmVXx/view' },
        { label: 'README', url: 'https://github.com/godhulivyas-build/DocAssist/blob/main/README.md' },
        { label: 'GitHub', url: 'https://github.com/godhulivyas-build' }
      ]
    },
    {
      id: 'whatsapp',
      tier: 'Production',
      title: 'Enquiry-to-CRM Agent',
      org: 'CupShup · internal, production',
      preview: 'whatsapp',
      thesis: 'An inbound WhatsApp enquiry is parsed, qualified, routed and nurtured, untouched by anyone.',
      bullets: [
        'n8n orchestrates Meta WhatsApp Business API, Brevo and Supabase as one loop.',
        'UTM attribution carried through, so the source of every closed deal is recoverable.',
        'The hard part was state: a thread that pauses three days has to resume in context, not open a new lead.'
      ],
      metrics: [{ n: '4 APIs', l: 'In a single loop' }],
      stack: ['n8n', 'WhatsApp Business API', 'Brevo', 'Supabase', 'UTM attribution'],
      links: [{ label: 'cupshup.co.in', url: 'https://www.cupshup.co.in/' }]
    },
    {
      id: 'timespro',
      tier: 'Live',
      title: 'TimesPro Visionary Corner',
      org: 'Client build · matching product',
      preview: 'timespro',
      thesis: 'A two-minute AI career check-in that returns a personalised Future Career Card.',
      bullets: [
        'Profile-and-course matching shipped end to end across servicing, ops and finance.',
        'Six weighted factors, three different scoring functions (exact-match, ordinal distance, range fit), one weighted sum per course — deterministic and instant, built to run live at an event, not as a demo.'
      ],
      metrics: [{ n: '2 min', l: 'To a personalised result' }, { n: '6 factors', l: 'Independently scored, weighted' }],
      stack: ['React', 'Vercel', 'Client requirements', 'Weighted matching engine'],
      links: [
        { label: 'Live product', url: 'https://timespro-vision-cafe.vercel.app/' },
        { label: 'Read the technical breakdown', url: 'timespro.html' }
      ]
    }
  ],

  /* --- operating work, the unglamorous half --- */
  ledger: [
    ['Technology risk audit', 'Crawled 8,296 internal URLs and 458,201 links; classified 12,990 findings; prioritised by severity and tracked to closure.', '60% → 99%'],
    ['Procure-to-pay redesign', 'Verification chain with role-based approval, rejection routing, and an immutable audit timeline.', '12 → 4 steps'],
    ['Client-servicing control dashboard', 'Tier thresholds, hygiene flags, dormancy alerts: exception-based monitoring instead of status chasing.', '40+ accounts'],
    ['Growth accounting model', 'New / retained / resurrected / churned decomposition, so growth is attributed rather than asserted.', 'Live model'],
    ['Settlement reconciliation', 'Truck Hai: found the control gap between operational and payment records.', '−15 days'],
    ['Measurement layer', 'UTM attribution and Supabase event data, segmented in SQL, surfaced in Power BI and Mixpanel.', '40+ engagements']
  ]
};
