/**
 * intermediate representation
 */

export type WithDescription = { description: string };
export type WithType<T extends string> = { __type: T };
export type IRCommon<T extends string> = WithType<T> & WithDescription;
export type IRFactoryParam<T> = Omit<T, "__type" | "description"> &
  Partial<WithDescription>;

const factory = <T extends IRCommon<string>>(__type: T["__type"]) => (
  opts: IRFactoryParam<T>
): T =>
  ({
    ...opts,
    description: opts?.description || "",
    __type,
  } as T);

export type Any = IRCommon<"any">;
export const any = factory<Any>("any");

export type Bool = IRCommon<"boolean">;
export const bool = factory<Bool>("boolean");

export type Str = IRCommon<"string">;
export const str = factory<Str>("string");

export type Nil = IRCommon<"nil">;
export const nil = factory<Nil>("nil");

export type Num = IRCommon<"number">;
export const num = factory<Num>("number");

export type Primitive = Bool | Str | Nil | Num;

export type IRMap = IRCommon<"map"> & { keyType: Type; valueType: Type };
export const map = factory<IRMap>("map");

export type Field = { type: Type } & IRCommon<"field">;
export const field = factory<Field>("field");

export type IRArray = { valueType: Type } & IRCommon<"array">;
export const arr = factory<IRArray>("array");

export type Collection<K = unknown, V = unknown> = IRArray | IRMap;

export type Union = {
  members: Type[];
} & IRCommon<"union">;
export const union = factory<Union>("union");

export type And = {
  members: Type[];
} & IRCommon<"and">;
export const and = factory<And>("and");

export type Optional = {
  type: Type;
} & IRCommon<"optional">;
export const optional = factory<Optional>("optional");

export type Literal<V = unknown> = {
  value: V;
} & IRCommon<"literal">;
export const literal = factory<Literal>("literal");

export type ObjectLiteral<V extends Record<string, Type> = {}> = {
  value: V;
} & IRCommon<"object-literal">;
export const objectLiteral = <T extends Record<string, Type> = {}>(
  value: T
) => {
  /**
   * object literal benefits from _not_ using the factory function so as to
   * get type inference on the literal value passed
   */
  const fn = factory<ObjectLiteral<T>>("object-literal");
  return (arg?: Omit<Parameters<typeof fn>[0], "value">) =>
    fn({ ...arg, value });
};

export const testIsTypeObjectLiteral = (t: Type): t is ObjectLiteral =>
  typeof t === "object" && "__type" in t && t.__type === "object-literal";

export type Sym = {
  text: string;
} & IRCommon<"sym">;
export const sym = factory<Sym>("sym");

export type Type =
  | Any
  | And
  | Collection
  | Cls
  | Field
  | Function
  | Intf
  | Literal
  | ObjectLiteral
  | Optional
  | Param
  | Primitive
  | Property
  | Struct
  | Sym
  | Union;

export type Param = {
  name: string;
  type: Type;
  isOptional?: boolean;
  isVariadic?: boolean;
} & IRCommon<"param">;
export const param = factory<Param>("param");

export type Function = {
  name: string;
  parameters: Param[];
  returnDescription?: string;
  return: Type;
} & IRCommon<"function">;
export const fn = factory<Function>("function");

export type Property = {
  name: string;
  type: Type;
  isReadonly?: boolean;
} & IRCommon<"property">;
export const property = factory<Property>("property");

type StructLike = {
  name: string;
  members: Property[];
};

export type Struct = StructLike & IRCommon<"struct">;

export const struct = factory<Struct>("struct");

export type Intf = {
  name: string;
  membersByName: Record<string, Property>;
  isRoot?: boolean;
} & IRCommon<"interface">;
export const intf = factory<Intf>("interface");

export type Cls = {
  inherits?: Sym[];
} & StructLike &
  IRCommon<"class">;
export const cls = factory<Cls>("class");

export type TFactory<T> = (...args: any) => T;
export const testIsType = <Factory extends TFactory<any>>(
  v: any,
  factory: Factory
): v is ReturnType<typeof factory> => {
  return (
    v &&
    typeof v === "object" &&
    "__type" in v &&
    v.__type === factory({} as any).__type
  );
};

export * from "./of-lua";
export * as printer from "./printer";
