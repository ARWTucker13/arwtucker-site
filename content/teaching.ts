export type Course = {
  code: string;
  title: string;
  institution: string;
  role: string;
  years: string;
  description: string;
  materials: string[];
};

export const courses: Course[] = [
  {
    code: "GHP 525",
    title: "Econometrics for Health Policy",
    institution: "Harvard T.H. Chan School of Public Health",
    role: "Teaching Fellow",
    years: "2021–2023",
    description:
      "The core econometrics sequence for health policy students — regression, causal inference, and applied methods taught through health applications. I built and ran the R labs, wrote problem sets and exam materials, and translated the theory into code students could actually run.",
    materials: [
      "R lab series: from R introduction through instrumental variables and regression discontinuity",
      "Problem sets with worked solutions (including synthetic control methods)",
      "Clustered standard errors simulation — why and when clustering matters, shown by simulation",
      "Midterm and exam materials with elaborated solutions",
    ],
  },
  {
    code: "PHS 2000B",
    title: "Quantitative Methods for Population Health Sciences",
    institution: "Harvard University (doctoral core)",
    role: "Teaching Fellow",
    years: "2022–2024",
    description:
      "The doctoral methods core for population health PhD students. I taught the causal inference toolkit — instrumental variables, difference-in-differences, regression discontinuity, and interrupted time series — through hands-on labs.",
    materials: [
      "Instrumental variables lab (R Markdown walkthrough)",
      "Regression discontinuity problem set with solutions",
      "Difference-in-differences and interrupted time series labs",
    ],
  },
  {
    code: "GENED 1063",
    title: "World Health: Challenges and Opportunities",
    institution: "Harvard College (Sue Goldie)",
    role: "Teaching Fellow → TF hiring & coordination",
    years: "2022–2024",
    description:
      "Harvard College's flagship global health course. I led discussion sections — including case studies like tuberculosis control in China — built section guides and teaching scripts, and later coordinated TF recruitment and hiring for the course.",
    materials: [
      "Section guides and slide decks (e.g., tuberculosis in China case study)",
      "Health systems video teaching script",
      "TF onboarding and hiring materials",
    ],
  },
];

export const featuredLabs = {
  name: "Econometrics for Health Policy — Interactive Modules",
  liveUrl: "https://labs.arwtucker.com",
  repoUrl: "https://github.com/ARWTucker13/econometrics-for-health-policy",
  description:
    "A module series that teaches econometrics through health problems — OLS, standard errors and clustering, inference, omitted variable bias, and panel data — with graded R exercises that run directly in the browser. No installation, no setup: open a module and start estimating.",
};

export const featuredTool = {
  name: "Health System Control Knobs",
  liveUrl: "https://healthsystems.vercel.app",
  repoUrl: "https://github.com/ARWTucker13/hs-site",
  description:
    "An interactive teaching tool built around the 'control knobs' framework from Getting Health Reform Right: turn the dials of financing, payment, organization, regulation, and behavior, and watch how health system outcomes respond. Built to give students an intuition that static slides can't.",
};

export const teachingHighlights = [
  "Certificates of Distinction in Teaching, 2022, 2023, and 2024",
  "Media & Design Fellow, Derek Bok Center (2024–25)",
  "Pedagogy Fellow (2023–24)",
  "ID 100: Foundations for Public Health (~600 students)",
];
