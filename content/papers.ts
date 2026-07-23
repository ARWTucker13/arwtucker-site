export type WorkingPaper = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  status: string;
  question: string;
  motivation: string;
  approach: string;
  finding: string;
  policy: string;
  stats: { value: string; label: string }[];
};

// The three dissertation working papers.
// Overall theme: healthcare labor markets, workforce shortages, team
// dynamics, and the substitutability of care.
export const workingPapers: WorkingPaper[] = [
  {
    slug: "schools-nursing-homes",
    number: "01",
    title: "Schools Reopening and Nursing Home Staff Labor Supply",
    shortTitle: "Schools & nursing home staffing",
    status: "Draft complete",
    question:
      "When schools closed during the pandemic, did childcare obligations pull certified nursing assistants out of nursing homes — and did reopening bring them back?",
    motivation:
      "Nursing home staffing collapsed during COVID-19, with deadly consequences for residents. But it was hard to tell how much of the collapse came from infection risk, burnout, or wages — versus a quieter channel: the workers, overwhelmingly women, who suddenly had children at home all day. Isolating the childcare channel matters because it points to a very different set of policy fixes.",
    approach:
      "I link the CMS Payroll-Based Journal — daily, worker-level staffing records — to district-by-district variation in school reopening modality (in-person, hybrid, remote). Because neighboring districts reopened differently for reasons unrelated to nursing home conditions, this variation lets me isolate the childcare channel from everything else happening in the pandemic labor market.",
    finding:
      "A 10 percentage-point increase in in-person schooling raises CNA hours by 0.27 hours per worker-month, concentrated on the intensive margin — existing staff working more, rather than new staff returning.",
    policy:
      "Childcare access is long-term care workforce policy. When schools function as childcare infrastructure, closing them quietly drains the caregiving workforce that the most vulnerable populations depend on.",
    stats: [
      { value: "204,455", label: "workers observed" },
      { value: "1,658", label: "facilities" },
      { value: "21", label: "states" },
    ],
  },
  {
    slug: "obstetric-care-kenya",
    number: "02",
    title:
      "Variance, Drivers, and Timeliness of Facility-Based Obstetric Care in Kakamega County, Kenya",
    shortTitle: "Obstetric care quality in Kenya",
    status: "Preliminary analyses complete",
    question:
      "When a mother delivers in a Kenyan health facility, what determines whether she gets good, timely care — the facility she chose, the provider she drew, or the moment she arrived?",
    motivation:
      "Getting mothers to deliver in facilities was the great maternal health push of the last two decades — and it worked. But facility delivery only saves lives if the care inside is good. Understanding where quality varies (between facilities? between providers? delivery to delivery?) tells us whether to invest in infrastructure, training, staffing, or care processes.",
    approach:
      "Using direct clinical observations of 1,742 deliveries across 10 facilities from Kenya's Service Delivery Redesign, I decompose the variance in care quality and timeliness across facility, provider, and delivery levels, estimate peer effects among providers working together, and measure what happens to care quality when a delivery is handed off between providers.",
    finding:
      "Quality variance concentrates at the facility and provider levels — but timeliness variance lives at the delivery level. Providers exert measurable peer effects on each other (~0.06 after case-mix and leave-one-out corrections), and care quality drops 2.4 percentage points after a shift handoff.",
    policy:
      "Quality improvement and timeliness improvement are different problems. Quality tracks who and where; timeliness tracks when and what else is happening — so staffing-level and workflow interventions, not just training, are on the critical path.",
    stats: [
      { value: "1,742", label: "deliveries observed" },
      { value: "10", label: "facilities" },
      { value: "−2.4pp", label: "post-handoff quality" },
    ],
  },
  {
    slug: "immigrant-labor-capital",
    number: "03",
    title:
      "Immigrant Labor Supply and the Capital Margin of U.S. Nursing Homes",
    shortTitle: "Immigration & the capital margin",
    status: "Data collected, analysis under way",
    question:
      "When immigrant caregivers become scarce, do nursing homes buy machines to replace them — or machines to help the workers who remain?",
    motivation:
      "The U.S. long-term care workforce is disproportionately foreign-born, and immigration policy swings its supply. Economists usually study the labor response to these shocks. But there's a capital margin too: facilities can respond by substituting equipment for people, or by investing in technology that makes remaining workers more productive. Which one happens shapes both care quality and what restrictive immigration policy actually costs.",
    approach:
      "A shift-share (Bartik) instrument — national immigration flows interacted with pre-period settlement patterns — isolates plausibly exogenous variation in local immigrant labor supply, linked to facility-level capital expenditure from Medicare cost reports (HCRIS).",
    finding:
      "Analysis beginning — data collection complete.",
    policy:
      "If capital substitutes for scarce caregivers, immigration restrictions accelerate automation of intimate care work; if capital complements labor, restrictions simply make care scarcer and more expensive. The answer determines who bears the cost.",
    stats: [
      { value: "HCRIS", label: "facility capex data" },
      { value: "Bartik IV", label: "identification" },
      { value: "SNFs", label: "U.S. skilled nursing" },
    ],
  },
];
