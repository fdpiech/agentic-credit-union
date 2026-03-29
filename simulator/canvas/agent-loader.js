import { readFileSync, readdirSync, existsSync } from 'fs';
import { join, resolve } from 'path';
import YAML from 'yaml';

const ROOT = resolve(import.meta.dirname, '..', '..');

export function loadAllAgents() {
  const agentsDir = join(ROOT, 'agents');
  if (!existsSync(agentsDir)) throw new Error(`Agents directory not found: ${agentsDir}`);

  const files = readdirSync(agentsDir).filter(f => f.endsWith('.md'));
  const agents = {};

  for (const file of files) {
    const raw = readFileSync(join(agentsDir, file), 'utf-8');
    const agent = parseAgentFile(raw, file);
    agents[agent.id] = agent;
  }

  return agents;
}

export function loadAgent(id) {
  const agents = loadAllAgents();
  if (!agents[id]) throw new Error(`Agent not found: ${id}. Available: ${Object.keys(agents).join(', ')}`);
  return agents[id];
}

function parseAgentFile(raw, filename) {
  const id = filename.replace(/\.md$/, '').replace(/^cu-/, '');

  // Parse YAML frontmatter
  const fmMatch = raw.match(/^---\n([\s\S]*?)\n---/);
  let name = id, description = '', color = 'white';
  if (fmMatch) {
    try {
      const fm = YAML.parse(fmMatch[1]);
      name = fm.name || id;
      description = fm.description || '';
      color = fm.color || 'white';
    } catch (e) {
      console.warn(`Warning: Failed to parse frontmatter in ${filename}: ${e.message}`);
    }
  }

  // Extract sections
  const body = raw.replace(/^---\n[\s\S]*?\n---\n/, '');
  const sections = extractSections(body);

  return {
    id,
    name,
    description,
    color,
    raw,
    body,
    sections,
    identity: sections['Your Identity & Memory'] || '',
    mission: sections['Your Core Mission'] || '',
    rules: sections['Critical Rules You Must Follow'] || '',
    deliverables: sections['CEO-Level Deliverables'] || sections['Underwriting Deliverables'] || sections['Compliance Program Deliverables'] || '',
    workflow: sections['Your Workflow Process'] || '',
    communication: sections['Your Communication Style'] || '',
    successMetrics: sections['Your Success Metrics'] || '',
  };
}

function extractSections(markdown) {
  const sections = {};
  const lines = markdown.split('\n');
  let currentKey = null;
  let currentContent = [];

  for (const line of lines) {
    const headerMatch = line.match(/^#{1,3}\s+(.+)/);
    if (headerMatch) {
      if (currentKey) {
        sections[currentKey] = currentContent.join('\n').trim();
      }
      currentKey = headerMatch[1].replace(/[🎯🚨📊📋💭🔄🚀🧠]/g, '').trim();
      currentContent = [];
    } else if (currentKey) {
      currentContent.push(line);
    }
  }
  if (currentKey) {
    sections[currentKey] = currentContent.join('\n').trim();
  }

  return sections;
}
