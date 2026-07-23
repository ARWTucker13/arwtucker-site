export type Publication = {
  title: string;
  journal: string;
  year: number;
  role?: "first-author";
  href?: string; // DOI/URL — fill in as confirmed
  note?: string;
};

// Selected peer-reviewed publications (TB/HIV health economics, mostly
// sub-Saharan Africa). Full list lives in the CV. DOIs to be added.
export const publications: Publication[] = [
  {
    title: "Costs along the TB diagnostic pathway in Uganda",
    journal: "International Journal of Tuberculosis and Lung Disease",
    year: 2021,
    role: "first-author",
  },
  {
    title:
      "Redefining and revisiting cost estimates of routine ART care in Zambia",
    journal: "Journal of the International AIDS Society",
    year: 2020,
    role: "first-author",
  },
  {
    title:
      "Multicomponent strategy with decentralized molecular testing for tuberculosis",
    journal: "New England Journal of Medicine",
    year: 2021,
    note: "with Cattamanchi et al.",
  },
  {
    title:
      "Cost-effectiveness of digital adherence technologies for TB treatment",
    journal: "Value in Health",
    year: 2022,
    note: "with Thompson et al.",
  },
  {
    title:
      "Cost-effectiveness of human-centered design for TB case finding",
    journal: "BMJ Global Health",
    year: 2022,
    note: "with Liu et al.",
  },
  {
    title: "Community health worker-delivered TB evaluation",
    journal: "PLOS Medicine",
    year: 2021,
    note: "with Cattamanchi et al.",
  },
  {
    title: "A costing framework for TB interventions",
    journal: "Implementation Science",
    year: 2020,
    note: "with Sohn et al.",
  },
];

export const publicationSummary = {
  count: 14,
  focus:
    "costs, cost-effectiveness, and delivery of TB and HIV care in sub-Saharan Africa",
  venues:
    "NEJM, PLOS Medicine, BMJ Global Health, Value in Health, JIAS, IJTLD, Implementation Science, and others",
};
