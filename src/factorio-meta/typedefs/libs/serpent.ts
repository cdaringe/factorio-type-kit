/** noSelfInFile **/
type SerpentOptions = {
  /** indentation; triggers long multi-line output. */
  indent: string;
  /** provide stringified value in a comment (up to maxlevel of depth). */
  comment: boolean | number;
  /** sort keys. */
  sortkeys: boolean | ((...args: unknown[]) => any);
  /** force sparse encoding (no nil filling based on #t). */
  sparse: boolean;
  /** remove spaces. */
  compact: boolean;
  /** raise fatal error on non-serilizable values. */
  fatal: boolean;
  /** disable bytecode serialization for easy comparison. */
  nocode: boolean;
  /** disable checking numbers against undefined and huge values. */
  nohuge: boolean;
  /** specify max level up to which to expand nested tables. */
  maxlevel: number;
  /** specify max number of elements in a table. */
  maxnum: number;
  /** specify max length for all table elements. */
  maxlength: number;
  /** use __tostring metamethod when serializing tables (v0.29); set to false to disable and serialize the table as is, even when __tostring is present. */
  metatostring: boolean;
  /** specify format for numeric values as shortest possible round-trippable double (v0.30). Use "%.16g" for better readability and "%.17g" (the default value) to preserve floating point precision. */
  numformat: string;
  /** allows to specify a list of values to ignore (as keys). */
  valignore: string[];
  /** allows to specify the list of keys to be serialized. Any keys not in this list are not included in final output (as keys). */
  keyallow: string[];
  /** allows to specity the list of keys to ignore in serialization. */
  keyignore: string[];
  /** allows to specify a list of value types to ignore (as keys). */
  valtypeignore: string[];
  /** provide custom output for tables. */
  custom: (opts: {
    /**  the name of the current element with '=' or an empty string in case of array index, */
    tag: any;
    /**  an opening table bracket { and associated indentation and newline (if any), */
    head: any;
    /**  table elements concatenated into a string using commas and indentation/newlines (if any), */
    body: any;
    /**  a closing table bracket } and associated indentation and newline (if any), and */
    tail: any;
    /**  the current level. */
    level: any;
  }) => any;
  /** name; triggers full serialization with self-ref section. */
  name: string;
};
declare const serpent: Serpent;

/** @noSelf **/
interface Serpent {
  /** full serialization; sets name, compact and sparse options; */
  dump(tbl: any, options?: Partial<SerpentOptions>): string;
  /** single line pretty printing, no self-ref section; sets sortkeys and comment options; */
  line(tbl: any, options?: Partial<SerpentOptions>): string;
  /** multi-line indented pretty printing, no self-ref section; sets indent, sortkeys, and comment options. */
  block(tbl: any, options?: Partial<SerpentOptions>): string;
}
