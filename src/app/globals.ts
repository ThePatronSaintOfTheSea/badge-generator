interface BoolSection {
  default: boolean;
  id: number;
  true_idx: number;
  type: string;
  name: string;
}

interface SSelectValue {
  id: number;
  value: string;
}

interface SSelectSection {
  id: number;
  default: string;
  name: string;
  required: boolean;
  type: string;
  values: SSelectValue[];
}

interface ConfigSection {
  id: number;
  name: string;
  type: string;
  section: Array<BoolSection | SSelectSection | ConfigSection>;
}

interface BadgeConfig {
  id: number;
  section: ConfigSection[];
}

interface FullConfig {
  [index: number]: ConfigSection;
}

function isBoolSection(item: any): item is BoolSection {
  return item.type === 'bool';
}

function isSSelectSection(item: any): item is SSelectSection {
  return item.type === 'sselect';
}

function isConfigSection(item: any): item is ConfigSection {
  return item.type === 'section';
}

export type {FullConfig, ConfigSection, BoolSection, SSelectSection, BadgeConfig};
export {isBoolSection, isSSelectSection, isConfigSection};
