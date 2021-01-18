/**
 * models that are know to _not_ have adequate type data from any of the class/concept/event
 * html pages, but _do_ show up as referenced types in various signatures :/
 */
export const unmodeled = [
  "blueprint entity",
  "Any",
  "varies",
  "table",
  // @todo look into these. try and find types for some!
  "Additional entity-specific parameters",
  "conditions",
  "Decorative",
  "DecorativeResult",
  "CustomScriptRenderTarget",
  "Anything",
  "waypoints",
  "alert",
  "blueprint tile",
  "Other attributes may have to be specified, depending on type",
  "PrototypeFilters",
  "Additional type-specific parameters",
  "MapSettings with DifficultySettings",
  "Depending on type",
  "peak",
  "restriction",
  "CustomArray of Alignment",
  "Icon",
  "Connection",
  "TabAndContent",
  "MapGenPreset",
  "UnitSpawnDefinition",
  "CircuitConnectionDefinition",
  "CraftingQueueItem",
  "action",
  /** https://lua-api.factorio.com/latest/LuaForce.html#LuaForce.research_all_technologies */
  "include_disabled_prototypes",
];
