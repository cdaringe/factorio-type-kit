// https://lua-api.factorio.com/latest/LuaLazyLoadedValue.html
type LuaLazyLoadedValue<T> = {
  /** Is this object valid? */
  readonly valid: boolean;
  /** The class name of this object. */
  readonly object_name: string;
  /** Gets the value of this lazy loaded value. */
  get: () => T;
  /** All methods, and properties that this object supports. */
  help: () => string;
};

/**
 * Some factorio typedefs ref LLV w/out Lua prefix :|
 */
type LazyLoadedValue<T> = LuaLazyLoadedValue<T>;
