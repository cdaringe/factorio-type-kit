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

export const map = <K, V>(keyType: K, valueType: V): IRMap<K, V> => ({
  keyType,
  valueType,
  __type: "map",
});

export type IRArray<V> = { valueType: V } & WithType<"array">;

export const arr = <V>(valueType: V): IRArray<V> => ({
  valueType,
  __type: "array",
});

export type Collection<K, V> = IRArray<V> | IRMap<K, V>;

export type Type<K = unknown, V = unknown> = Primitive | Collection<K, V>;

export type Param = {
  name: string;
  type: Type;
  isOptional?: boolean;
} & WithDescription &
  WithType<"param">;

export const param = (
  par: Pick<Param, "name" | "type" | "isOptional" | "description">
): Param => ({
  __type: "param",
  ...par,
});

export type Function = {
  name: string;
  parameters: Type[];
  return: Type;
} & WithDescription &
  WithType<"function">;

export const fn = (
  fun: Pick<Function, "name" | "parameters" | "return" | "description">
): Function => ({
  __type: "function",
  ...fun,
});

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

export type ClassMember = Property | Function;

export type Class = { members: IRMap<string, ClassMember> } & WithDescription &
  WithType<"class">;

export const cls = (
  clz: {
    members: IRMap<string, ClassMember>;
  } & Pick<Class, "description">
): Class => ({
  __type: "class",
  ...clz,
});
