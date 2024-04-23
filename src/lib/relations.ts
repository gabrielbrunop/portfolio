export type Relation = { source: string; target: string };
export type Node = { id: string; label: string };
export type Edge = { source: string; target: string; id: string };

export const removeDuplicates = <T>(arr: T[]) =>
  Array.from(new Set(arr).keys());

export const getRelationsNames = (relations: Relation[]) =>
  removeDuplicates(relations.map((e) => [e.source, e.target]).flat());

export const getNodesFromRelations = (relations: Relation[]): Node[] =>
  getRelationsNames(relations).map((e, i) => ({ id: String(i), label: e }));

export const generateIdFromRelation = (relation: Relation) =>
  `${relation.source}-${relation.target}`;

export const getEdgesFromRelations = (
  relations: Relation[],
  nodes: Node[]
): Edge[] =>
  relations
    .map(({ source, target }) => ({
      source: nodes.find((n) => n.label === source)!.id,
      target: nodes.find((n) => n.label === target)!.id,
    }))
    .map((e) => ({ ...e, id: generateIdFromRelation(e) }));
