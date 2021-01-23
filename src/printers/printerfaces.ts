import type { GenerateResult } from "..";
export type FactorioPrinter = (res: GenerateResult) => Promise<string>;
