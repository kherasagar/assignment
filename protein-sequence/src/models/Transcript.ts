export interface Transcript {
  source: string;
  version: number;
  assembly_name: string;
  id: string;
  display_name: string;
  object_type: string;
  Parent: string;
  species: string;
  start: number;
  strand: number;
  biotype: string;
  db_type: string;
  logic_name: string;
  seq_region_name: number;
  is_canonical: number;
  end: number;
}