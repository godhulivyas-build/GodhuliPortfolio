/* ============================================================
   All portfolio content lives here. Edit this file, not the HTML.
   ============================================================ */
window.PORTFOLIO = {

  /* --- vertical timeline, oldest first --- */
  timeline: [
    {
      id: 'sage',
      hidden: true,
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
      hidden: true,
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
      hidden: true,
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
      links: [
        { label: 'Zomato live prototype', url: 'https://ujain-foodie-quest.lovable.app/home' },
        { label: 'Zomato case deck (Canva)', url: 'https://www.canva.com/design/DAG8mu7o9rY/DTWzUeCL7TMKbI49mBdh3A/view' },
        { label: 'Zomato teardown (PDF)', url: 'teardowns/zomato.pdf' }
      ]
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
      hidden: true,
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
        'Ran it like a product: audience, retention, programming calendar.',
        'Events documented in the chapter Drive: Orientation, Hack Tour, Robotics (IIT Bombay), Git and GitHub, JavaScript, Build with AI sessions, Central DAO, AI in Startups, debugshala x Webdev AI, and Applied School.'
      ],
      metrics: [{ n: '1,000+', l: 'Members, from zero' }, { n: '20+', l: 'Events run' }],
      stack: ['Community', 'Program design', 'Partnerships', 'Google Cloud'],
      photos: [
        { src: 'assets/img/gdg-chapter-lead.png', cap: 'Chapter Lead, GDG On Campus' },
        { src: 'assets/img/gdg-welcome-board.png', cap: 'Cloud Community Days 2025, Indore' },
        { src: 'assets/img/gdg-sage-group.png', cap: 'SAGE University chapter, full team' },
        { src: 'assets/img/gdg-team.webp', cap: 'GDG on Campus core team' }
      ],
      links: [
        { label: 'All event photos and videos (Drive)', url: 'https://drive.google.com/drive/folders/1rIubQ6POrn3Jbw1XGZtFcusWieZ78csN' },
        { label: 'GDG chapter site', url: 'https://gdsc-sui.vercel.app/' }
      ]
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
      hidden: true,
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
      id: 'zenskar-pdf',
      type: 'Case study',
      title: 'Zenskar PMM Assignment',
      note: 'A research agent I built, 7 hypotheses from customer calls, and a new positioning and homepage copy.',
      facts: ['13 slides', 'Walkthrough on Loom'],
      img: 'assets/img/td-zenskar.png',
      link: 'teardowns/zenskar.pdf'
    },
    {
      id: 'saarthi-pdf',
      type: 'Product teardown',
      title: 'Saarthi',
      note: 'Voice-first agri-logistics app: Five Whys, journey on real screens, v1 to v2, GTM, metrics.',
      facts: ['15 slides','Real app screens'],
      img: 'assets/img/td-saarthi.png',
      link: 'teardowns/saarthi.pdf'
    },
    {
      id: 'ethos-pdf',
      type: 'PRD',
      title: 'ethOS',
      note: 'Startup internship finder: scored feed, filters, mobile, how it works, proposed metrics.',
      facts: ['11 slides','Real app screens'],
      img: 'assets/img/td-ethos.png',
      link: 'teardowns/ethos.pdf'
    },
    {
      id: 'docassist-pdf',
      type: 'Product teardown',
      title: 'DocAssist',
      note: 'Clinical notes summariser: architecture, flow and results.',
      facts: ['12 slides','Top 25 pan-India'],
      img: 'assets/img/td-docassist.png',
      link: 'teardowns/docassist.pdf'
    },
    {
      id: 'produscope-pdf',
      type: 'PRD',
      title: 'Produscope AI',
      note: 'Five-agent money planner with no bank link: public screens and agent design.',
      facts: ['10 slides'],
      img: 'assets/img/td-produscope.png',
      link: 'teardowns/produscope.pdf'
    },
    {
      id: 'timespro-pdf',
      type: 'Product teardown',
      title: 'TimesPro Visionary Corner',
      note: 'Two-minute career check-in and the weighted matching engine.',
      facts: ['10 slides','Live product'],
      img: 'assets/img/td-timespro.png',
      link: 'teardowns/timespro.pdf'
    },
    {
      id: 'harness-pdf',
      type: 'Product teardown',
      title: 'Five-Agent Content Harness',
      note: 'The AI-SEO pipeline for the content team: agents, quality loop, impact.',
      facts: ['9 slides'],
      img: 'assets/img/td-harness.png',
      link: 'teardowns/harness.pdf'
    },
    {
      id: 'minisense',
      type: 'PRD',
      title: 'MiniSense',
      note: 'Answers backed by computed numbers and real quotes. Never a guess.',
      facts: ['Full PRD, FR1–FR11', 'Live product'],
      img: 'assets/img/td-minisense.png',
      link: 'teardowns/minisense.pdf'
    },
    {
      id: 'peakflo',
      type: 'Product teardown',
      title: 'Peakflo AP/AR Product Analysis',
      note: 'AP/AR flows mapped, friction found, fixes scored on RICE.',
      facts: ['14–21 day P2P cycle mapped', '3 fixes, RICE-scored', 'P0 target: 60% shorter approval cycle'],
      img: 'assets/img/td-peakflo.png',
      link: 'teardowns/peakflo.pdf'
    },
    {
      id: 'tulu',
      type: 'Case study',
      title: 'Tulu Health App Growth',
      note: 'Reframed a growth ask from acquisition to activation, caught a data-integrity trap first, then shipped a working fix.',
      facts: ['Live prototype, built in Lovable', '42%→26% activation, the real lever'],
      img: 'assets/img/td-tulu.png',
      link: 'teardowns/tulu.pdf'
    },
    {
      id: 'composio',
      type: 'Case study',
      title: 'SaaS Toolkit Research Pipeline',
      note: 'A 4-stage pipeline that researches, verifies and scores 100 SaaS apps, then reports its own 89% accuracy honestly.',
      facts: ['100 apps, ~65s end to end', '70 buildable today, no blockers'],
      img: 'assets/img/td-composio.png',
      link: 'teardowns/composio.pdf'
    },
    {
      id: 'cashkaro',
      type: 'Case study',
      title: 'CashKaro Recall Engine',
      note: 'Reframed a missed-cashback problem from awareness to timing, then corrected an earlier draft’s inflated math before speccing the fix.',
      facts: ['Deterministic, no AI in the loop', 'Bot-contamination check built in'],
      img: 'assets/img/td-cashkaro.png',
      link: 'teardowns/cashkaro.pdf'
    },
    {
      id: 'zomato',
      type: 'Case study',
      title: 'Zomato Product Strategy & Growth',
      note: 'A discovery fix for new restaurants, later built into a live app.',
      facts: ['1st runner-up, pan-India', 'Live prototype'],
      img: 'assets/img/td-zomato.png',
      link: 'teardowns/zomato.pdf'
    },
    {
      id: 'tensortonic',
      type: 'Case study',
      title: 'TensorTonic GTM',
      note: 'GTM strategy, execution, and expected impact.',
      facts: ['Strategy · execution · impact'],
      img: 'assets/img/td-tensortonic.png',
      link: 'teardowns/tensortonic.pdf'
    },
    {
      id: 'aangan-prd',
      type: 'PRD',
      title: 'Aangan · Family Circle',
      note: 'Privacy-first elderly care at home. No live tracking, no cameras.',
      facts: ['13-slide PRD deck', 'Live prototype + Loom'],
      img: 'assets/img/td-aangan.png',
      link: 'teardowns/aangan.pdf'
    },
    {
      id: 'automon-teardown',
      type: 'Product teardown',
      title: 'Automon Dashboard',
      note: 'A no-code monitor that turns triggers into one clear data flow.',
      facts: ['25 triggers', '1,247 data points'],
      img: 'assets/img/td-automon.png',
      link: 'teardowns/automon.pdf'
    },
    {
      id: 'crm-teardown',
      type: 'Product teardown',
      title: 'Enquiry-to-CRM Agent',
      note: 'A WhatsApp agent that never loses a lead\u2019s context.',
      facts: ['n8n orchestration', '4 systems, 1 loop'],
      img: 'assets/img/td-crm-agent.png',
      link: 'teardowns/crm-agent.pdf'
    },
    {
      id: 'salon',
      type: 'PRD',
      title: 'QuickServe',
      note: 'Rapido, for salon and beauty services. A two-sided marketplace, specified end to end.',
      facts: ['14-section PRD', 'Live product'],
      img: 'assets/img/td-quickserve.png',
      link: 'teardowns/quickserve.pdf'
    },
    {
      id: 'growth-acct',
      type: 'Analysis',
      title: 'Growth Accounting',
      note: 'Weekly growth decomposed into new, retained, resurrected and churned users, read through the Quick Ratio.',
      facts: ['Excel pivot tables + formulas', 'Quick Ratio health check'],
      img: 'assets/img/td-growth.png',
      link: 'teardowns/growth.pdf'
    },
    {
      id: 'attendance',
      type: 'Analysis',
      title: 'Attendance Analysis',
      note: 'Attendance trends, comprehensive final grading, and data-backed recommendations.',
      facts: ['Formula-driven workbook', 'Live sheet'],
      img: 'assets/img/td-attendance.png',
      link: 'teardowns/attendance.pdf'
    },
    {
      id: 'humanness',
      type: 'PRD',
      title: 'HumanNessAI',
      note: 'A nationwide image-collection platform for India-representative AI data.',
      facts: ['8-metric success framework', 'Live MVP'],
      img: 'assets/img/td-humanness.png',
      link: 'teardowns/humanness.pdf'
    },
    {
      id: 'kasparro',
      type: 'Audit',
      title: 'Kasparro Audit',
      note: 'Found 20 errors in an AI-visibility audit, then specced the tool to catch them automatically.',
      facts: ['20/20 errors confirmed', 'Consistency Gate PRD'],
      img: 'assets/img/td-kasparro.png',
      link: 'teardowns/kasparro.pdf'
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
      thesis: 'One AI writing everything gave generic, error-prone content. Splitting the job across five specialised AI agents fixed that.',
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
      title: 'CupShup AI Platform: Built, Positioned & Taken to Market',
      org: 'CupShup · Platform + GTM',
      preview: 'cupshup',
      thumb: 'assets/img/thumb-cupshupplatform.png',
      thesis: 'A 20+ tool platform is only useful if people can find it and actually use it. I built the pages that explain it, ran the GTM that got it in front of the right users, and sat with clients until they could use it themselves.',
      bullets: [
        'Built and positioned the platform product pages across SEO, SMM, Email and WhatsApp automation modules.',
        'Ran the email GTM for all 20+ tools: segmented the list into buckets by fit before every send, so each tool reached the audience most likely to use it.',
        'Took each launch straight to that audience to judge, not a curated demo crowd — real feedback from day one, which became the first-user pipeline for every accelerator since.',
        'Sat directly with brand stakeholders to diagnose their gaps, demo the tool mechanics, and record custom video walkthroughs for each client.',
        'Drafted the product pitch email sent to D2C founders explaining the SEO Site Audit tool’s automated crawl diagnostics.'
      ],
      metrics: [{ n: '20+', l: 'AI tools built & launched' }, { n: '4', l: 'Suites, platform + GTM' }],
      stack: ['Product positioning', 'Email GTM', 'List segmentation', 'Client enablement', 'Video walkthroughs', 'CupShup platform'],
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
      thesis: 'Rebuilt the website around who actually visits it, then fixed the technical issues underneath.',
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
      id: 'saarthi',
      tier: 'Live',
      title: 'Saarthi',
      org: 'Voice-first agri logistics · Polygnan Fellowship',
      preview: 'saarthi',
      thumb: 'assets/img/thumb-saarthi-app.png',
      thesis: 'Talked to 300+ farmers and traders. Found one root cause behind most delays: everyone coordinating by phone calls.',
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
      thumb: 'assets/img/thumb-ethos.png',
      thesis: 'An AI job-matching tool that only answers from real listings, never a guess. If it’s ever wrong, you can see exactly which listing caused it.',
      bullets: [
        'Zero agency spam: every listing is scored 0–100 before it ever reaches a user.',
        'OAuth 2.0 ingestion → LangChain orchestration → GPT-4o reasoning → Pinecone vector search.',
        'FastAPI + PostgreSQL backend, Next.js front end on Vercel.',
        'Converts unstructured listings into a 0–100 quality score across funding, compensation, remote flexibility and recruiter activity.'
      ],
      metrics: [{ n: '4-stage', l: 'Ingest → retrieve → reason → serve' }, { n: '0–100', l: 'Quality score shipped' }],
      stack: ['LangChain', 'GPT-4o', 'Pinecone', 'FastAPI', 'PostgreSQL', 'Next.js'],
      links: [
        { label: 'Live product', url: 'https://ethosinternshipfinder.vercel.app/' },
        { label: 'Read the full PRD', url: 'ethos.html' },
        { label: 'GitHub', url: 'https://github.com/godhulivyas-build' }
      ]
    },
    {
      id: 'produscope',
      tier: 'Live',
      title: 'Produscope AI',
      org: 'Five-agent financial planning',
      preview: 'produscope',
      thesis: '"Can I afford this?" is really four questions at once. Five focused AI agents answer it better than one long prompt.',
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
      thesis: 'Turns long clinical notes into quick summaries and answers doctors’ follow-up questions — 15 minutes of reading down to under 10 seconds.',
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
      thesis: 'A WhatsApp enquiry comes in, and AI reads it, qualifies it and routes it — no human touches it.',
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
      thumb: 'assets/img/thumb-timespro-app.webp',
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
