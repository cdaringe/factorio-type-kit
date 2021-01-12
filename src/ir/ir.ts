/**
 * intermediate representation
 */

export type WithDescription = { description: string };
export type WithType<T> = { __type: T };

export type Primitive = "boolean" | "number" | "string" | "null";

export const bool = () => "boolean";
export const str = () => "string";
export const nil = () => "null";
export const num = () => "number";

export type IRMap<K, V> = { keyType: K; valueType: V } & WithType<"map">;

export const map = <K = unknown, V = unknown>(
  keyType: K,
  valueType: V
): IRMap<K, V> => ({
  keyType,
  valueType,
  __type: "map",
});

export type Field = { type: Type } & WithDescription & WithType<"field">;

export const field = (fld: Pick<Field, "description" | "type">): Field => ({
  __type: "field",
  ...fld,
});

export type IRArray<V> = { valueType: V } & WithType<"array">;

export const arr = <V>(valueType: V): IRArray<V> => ({
  valueType,
  __type: "array",
});

export type Collection<K = unknown, V = unknown> = IRArray<V> | IRMap<K, V>;

export type Union = {
  members: Type[];
} & WithType<"union">;

export const union = (...members: Type[]): Union => ({
  __type: "union",
  members,
});

export type And = {
  members: Type[];
} & WithType<"and">;

export const and = (...members: Type[]): And => ({
  __type: "and",
  members,
});

export type Optional = {
  type: Type;
} & WithType<"optional">;

export const optional = (type: Type): Optional => ({
  __type: "optional",
  type,
});

export type Literal<V = unknown> = {
  value: V;
} & WithType<"literal">;

export const literal = <V>(value: V): Literal<V> => ({
  __type: "literal",
  value,
});

export type ObjectLiteral<V extends Record<string, Type> = {}> = {
  value: V;
} & WithType<"object-literal"> &
  Partial<WithDescription>;

export const objectLiteral = <V extends Record<string, Type>>(
  value: V,
  opts?: WithDescription
): ObjectLiteral<V> => ({
  ...opts,
  value,
  __type: "object-literal",
});

export type Sym = {
  text: string;
} & WithType<"sym"> &
  Partial<WithDescription>;

export const sym = (text: string, opts?: Partial<WithDescription>): Sym => ({
  ...opts,
  text,
  __type: "sym",
});

export type Type =
  | "any"
  | Primitive
  | Literal
  | ObjectLiteral
  | Collection
  | Sym
  | Optional
  | Union
  | And
  | Field
  | Function;

export type Param = {
  name: string;
  type: Type;
  isOptional?: boolean;
  isVariadic?: boolean;
} & WithDescription &
  WithType<"param">;

export const param = (
  par: Pick<
    Param,
    "name" | "type" | "isOptional" | "description" | "isVariadic"
  >
): Param => ({
  __type: "param",
  ...par,
});

export type Function = {
  name: string;
  parameters: Param[];
  returnDescription?: string;
  return: Type;
} & WithDescription &
  WithType<"function">;

export const fn = (
  fun: Pick<
    Function,
    "name" | "parameters" | "return" | "description" | "returnDescription"
  >
): Function => ({
  __type: "function",
  ...fun,
});

export const testIsTypeFn = (t: Type): t is Function => {
  if (typeof t === "object" && "__type" in t) {
    return t.__type === "function";
  }
  return false;
};

export type Property = {
  name: string;
  type: Type;
  isReadonly?: boolean;
} & WithDescription &
  WithType<"property">;

export const property = (
  prop: Pick<Property, "name" | "type" | "isReadonly" | "description">
): Property => ({
  __type: "property",
  ...prop,
});

export type Struct = {
  name: string;
  members: ClassMember[];
} & WithDescription &
  WithType<"struct">;

export const struct = (
  strukt: Pick<Struct, "description" | "members" | "name">
): Struct => ({
  ...strukt,
  __type: "struct",
});

export type ClassMember = Property | Function;

export type Cls = {
  inherits?: Sym[];
} & Omit<Struct, "__type"> &
  WithDescription &
  WithType<"class">;

export const cls = (
  clz: Parameters<typeof struct>[0] & Pick<Cls, "inherits">
): Cls => ({
  ...clz,
  __type: "class",
});

export * from "./of-lua";
