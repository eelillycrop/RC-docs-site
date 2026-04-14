/**
 * TabulaKit Site Configuration
 *
 * Edit these values to customize your documentation site.
 * The /startup wizard will configure these for you automatically.
 */
window.TABULAKIT_CONFIG = {
  // Site identity
  name: "LIMS",
  description: "Research Corporation Fermentation Documentation",
  logo: "",  // Path to logo image (optional, shown in sidebar)

  // Theme colors (CSS custom property overrides)
  theme: {
    color: "#3b82f6",           // Primary accent color (headings)
    tealColor: "#22d3ee",       // Secondary accent (links, nav highlights)
    sidebarWidth: "280px",
    baseFontSize: "17px"
  },

  // Docsify options (merged into window.$docsify)
  docsify: {
    subMaxLevel: 3,
    search: true
  }
};
