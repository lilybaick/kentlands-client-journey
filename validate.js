/* ============================================================
   Data-integrity check for the flow chart.  Run:  node validate.js
   Catches the mistakes that would silently break the site:
     • duplicate node ids
     • a node missing id/label
     • a ref whose `to` points at a non-existent node (dead link)
     • a flow-detail key with no matching node (dead content)
   Exits non-zero on any problem, so it can gate a commit / CI.
   ============================================================ */
const fs = require("fs");
const path = require("path");
global.window = {};
require(path.join(__dirname, "flow-data.js"));
require(path.join(__dirname, "flow-detail.js"));

const ids = new Set();
const problems = [];
const refs = [];

(function walk(node, parentId) {
  if (node.type === "ref") { refs.push({ from: parentId, to: node.to }); return; }
  if (!node.id) problems.push("node with no id under " + parentId);
  if (!node.label) problems.push("node '" + node.id + "' has no label");
  if (node.id && node.id !== "root") {
    if (ids.has(node.id)) problems.push("duplicate id: " + node.id);
    ids.add(node.id);
  }
  (node.children || []).forEach((c) => walk(c, node.id || parentId));
})(window.JOURNEY, null);
ids.add("root");

refs.forEach((r) => { if (!ids.has(r.to)) problems.push("dead ref: '" + r.from + "' → '" + r.to + "' (no such node)"); });

Object.keys(window.FLOW_DETAIL || {}).forEach((k) => {
  if (!ids.has(k)) problems.push("orphaned flow-detail key: '" + k + "' (no matching node)");
});

if (problems.length) {
  console.error("✗ flow chart validation FAILED (" + problems.length + "):");
  problems.forEach((p) => console.error("   - " + p));
  process.exit(1);
}
console.log("✓ flow chart OK — " + ids.size + " nodes, " + refs.length + " refs, all resolve; no orphans.");
