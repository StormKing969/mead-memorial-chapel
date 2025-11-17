/**
 * Static content and metadata for the Lawsuit section.
 * These constants power navigation, timeline content, party listings,
 * and narrative text within the lawsuit pages.
 */
/**
 * Sidebar/section navigation anchors for the lawsuit page.
 * Item shape:
 * - link: string — hash or route path for in-page navigation.
 * - title: string — section label.
 */
export const LawsuitSection = [
  {
    link: "#context",
    title: "Context",
  },
  {
    link: "#letter",
    title: "Alumni Letter",
  },
  {
    link: "#timeline",
    title: "Legal Timeline",
  },
  {
    link: "#parties",
    title: "Key Parties Involved",
  },
  // {
  //     link: "#allegations",
  //     title: "Allegations",
  // },
  // {
  //     link: "#defense",
  //     title: "Defense",
  // },
  // {
  //     link: "#outcome",
  //     title: "Outcome",
  // },
  {
    link: "documents",
    title: "Legal Documents",
  },
];

/**
 * Chronological legal milestones for the dispute.
 * Item shape:
 * - date: string — display label for the timeframe.
 * - title: string — short event headline.
 * - desc: string — concise description of what occurred.
 */
export const TimelineEvents = [
  {
    date: "September, 2021",
    title: "College removes Mead name from chapel",
    desc: "Middlebury College quietly removed the name 'Mead Memorial Chapel' from the marble building on campus, citing concerns about John A. Mead's historical role in promoting eugenics policies and prompting controversy that later led to legal action.",
  },
  {
    date: "March, 2023",
    title: "Lawsuit filed by Estate of John A. Mead",
    desc: "The Estate of John A. Mead, with former Vermont Governor Jim Douglas serving as special administrator, filed a lawsuit against The President and Fellows of Middlebury College alleging breach of contract and improper removal of the Mead Memorial Chapel name; court filing date recorded March 24, 2023.",
  },
  {
    date: "August, 2023",
    title: "Judge allows lawsuit to proceed",
    desc: "A Vermont judge ruled that the lawsuit brought by the Mead estate could move forward, allowing the case to continue through the court process rather than being dismissed at an early stage.",
  },
  {
    date: "September, 2024",
    title: "Litigation enters second year amid discovery disputes",
    desc: "Approximately 18 months into the litigation, the parties had attended multiple oral arguments and clashed over discovery issues, including debates about depositions and the relevance of certain requests as they awaited further rulings.",
  },
  {
    date: "April, 2025",
    title: "Vermont Superior Court rules in favor of Middlebury College",
    desc: "The Vermont Superior Court issued a decision closing the Middlebury Chapel lawsuit in favor of Middlebury College, resolving the case at the trial court level though the judgment left open the possibility of appeal by the Mead estate.",
  },
  {
    date: "November, 2025",
    title: "Appeal to Vermont Supreme Court filed",
    desc: "Following the adverse Superior Court ruling, the Mead estate (represented by former Governor Jim Douglas) appealed the decision to the Vermont Supreme Court, taking the dispute to the state’s highest court where it attracted filings of interest from other colleges and stakeholders.",
  },
];

/**
 * Narrative background text displayed near the top of the Lawsuit page.
 * Long-form string suitable for a lead paragraph.
 */
export const LawsuitPageBackgroundContent =
  "The Mead Memorial Chapel at Middlebury College is a historic monument built to honor the Mead family’s legacy, specifically that of Vermont Governor John Mead. In 2021, Middlebury College’s trustees elected to remove the Mead family name from the chapel, citing remarks from a 1912 speech given by Governor Mead. The decision caused significant outcry among the Mead descendants and associated community, who asserted that the deed for the chapel explicitly required the continued use of the Mead name. The estate filed suit against the college, contending both breach of a covenant and injury to the Mead family’s reputation and intent, leading to an ongoing dispute punctuated by motions, appeals, and considerable media coverage.";

/**
 * List of parties and stakeholders referenced in the lawsuit.
 * Item shape:
 * - title: string — grouping label (e.g., "Plaintiff").
 * - people: string — plain-text description or names.
 */
export const InvolvedParties = [
  {
    title: "Plaintiff",
    people:
      "Estate of John A. Mead, represented by Jim Douglas (Administrator and former Governor of Vermont)",
  },
  {
    title: "Defendant",
    people:
      "Middlebury College, represented by its Board of Trustees and senior officers",
  },
  {
    title: "Counsel for Plaintiff",
    people: "L. Brooke Dingledine, Valsangiacomo & Pelkey, P.C.",
  },
  {
    title: "Counsel for Defendant",
    people: "Justin Barnard, Dinse P.C.",
  },
  {
    title: "Other Stakeholders",
    people:
      "Vermont Supreme Court; Descendants of the Mead family; Public supporters; Media organizations covering the case",
  },
];

export const AllegationList = [
  "Middlebury College violated the conditions of Governor Mead's donation by unilaterally removing the family name from the chapel, despite explicit deed language requiring perpetual naming.",
  "The college’s action constitutes a breach of the covenant of good faith and fair dealing inherent in the original agreement.",
  "The removal constitutes reputational harm to the Mead family, diminishing their philanthropic intent and legacy.",
  "The college’s decision was made without transparent process or adequate opportunity for stakeholder input, reflecting broader issues of “cancel culture” and institutional overreach.",
];

export const DefenseList = [
  "Middlebury College contends it has the right, under institutional policy and contemporary ethical standards, to reconsider naming decisions, particularly when historic benefactors are found to have made statements or taken actions contrary to academic values or social justice.",
  "The college asserts that the deed language is not binding in perpetuity, arguing either ambiguity or public policy limitations on such covenants.",
  "The decision was in line with contemporary moves among higher education institutions to reassess historical symbols and legacies, aligning with values of inclusion and critique of problematic histories.",
  "The removal did not constitute a specific breach and no compensable harm has been suffered, as the building, use, and mission remain unchanged.",
];

export const CurrentOutcome =
  "As of late 2025, the legal process remains ongoing. Motions for summary judgment have resolved some issues in the estate’s favor at the Superior Court level, including acknowledgment of certain restrictive covenants, but the question of final remedy and standing is under appeal to the Vermont Supreme Court. The outcome will determine the future of the Mead name and establish precedent for donor intent in the context of evolving institutional ethics. Updates will be posted here as the court process continues.";