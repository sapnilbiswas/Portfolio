export const organizations = [
  {
    id: 'sugarlabs',
    name: 'Sugar Labs',
    logo: 'https://www.sugarlabs.org/assets/Icons/logo.svg',
    role: 'Open Source Contributor',
    period: '2026 — Present',
    shortDesc: 'Contributing to Music Blocks — a musical microworld and education platform.',
    fullDesc: 'At Sugar Labs, I took ownership of critical infrastructure for Music Blocks. I authored a landmark documentation overhaul PR that unified the entire Sugarlabs documentation ecosystem, creating a centralized, accessible knowledge base that serves thousands of students and educators globally. My technical contributions are equally extensive: I spearheaded the testing initiative, achieving over 80% coverage for complex widget and system tests. I also led the security-focused refactoring of the Planet subsystem, eliminating deep-seated XSS vulnerabilities and modularizing the architecture for better scalability.',
    tags: ['JavaScript', 'Security', 'Testing', 'Documentation', 'Open Source'],
    link: 'https://github.com/sugarlabs/musicblocks',
    contributions: [
      { label: 'Documentation PR', value: 100, color: '#00f0ff' },
      { label: 'Test Coverage', value: 85, color: '#8a2be2' },
      { label: 'Core Refactor', value: 60, color: '#00f0ff' },
      { label: 'Security Patches', value: 40, color: '#8a2be2' }
    ]
  },
  { 
    id: 'extensionshield',
    name: 'Extension Shield',
    logo: '/src/assets/extension_shield.png',
    role: 'Lead Frontend Developer & Maintainer',
    period: '2026',
    shortDesc: 'Chrome extension risk scanner — architecting security and governance flows.',
    fullDesc: 'As the Lead Frontend Developer for Extension Shield, I am the primary architect behind the next generation of our security interface. I am currently leading a complete UI/UX overhaul, transitioning to a high-performance, reactive frontend that visualizes complex risk data with clarity. My role extends into core system design: I architected the end-to-end API structures and system governance flows. I also co-developed the risk scoring engine—a sophisticated static analysis tool that evaluates Chrome extension permissions and behavior to generate actionable security intelligence for enterprise and individual users.',
    tags: ['React', 'Security', 'API Design', 'UI/UX Redesign', 'Maintainer'],
    link: 'https://github.com/sapnilbiswas/ExtensionShield',
    contributions: [
      { label: 'Frontend Arch', value: 95, color: '#00f0ff' },
      { label: 'UI Redesign', value: 100, color: '#8a2be2' },
      { label: 'API Structure', value: 75, color: '#00f0ff' },
      { label: 'Risk Engine', value: 50, color: '#8a2be2' }
    ]
  },
  {
    id: 'drupal',
    name: 'Drupal',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZfKpR_EdbmfSusnA5VJpdUwzIPM6vUW3XKJ0wzK55u18bWBGXXjcZ4oKsL8QP_Of6QJdYAR6fYn8C2fhCg6-JlxO7fNs7jSpJbROo6Cgd&s=10',
    role: 'Core Contributor',
    period: '2025 — 2026',
    shortDesc: 'Active core contributor fixing issues in Core, Commerce, and AI modules.',
    fullDesc: 'As a Drupal Core contributor, I focus on the intersection of UI stability and modern functionality. I successfully resolved long-standing SVG rendering bugs within the core engine, improving visual consistency for millions of Drupal-powered sites. My work spans the Commerce and AI ecosystems, where I maintain key modules and contribute to the PhotoSwipe integration. By navigating the complex Drupal issue queue, I’ve addressed critical stability tickets and helped shape the platform’s transition toward modern AI-driven content management.',
    tags: ['PHP', 'Drupal', 'CMS', 'Bug Fixing'],
    link: 'https://www.drupal.org/u/sapnil_biswas',
    contributions: [
      { label: 'Core Fixes', value: 70, color: '#00f0ff' },
      { label: 'AI Modules', value: 50, color: '#8a2be2' },
      { label: 'Community Libs', value: 80, color: '#00f0ff' },
      { label: 'Issue Queue', value: 90, color: '#8a2be2' }
    ]
  }
];




