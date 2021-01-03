import {
  Array as RTArray,
  Dictionary,
  Lazy as RTLazy,
  Record,
  Runtype,
  Static,
  String as RTString,
  Undefined as RTUndefined,
} from "runtypes";

export type ClassSchema = {
  name: string;
  type?: string;
  doc?: string;
  inherits?: string[];
  mode?: string;
  properties?: { [key: string]: ClassSchema };
  returns?: string;
};

export const jsonSchemaRecord: Runtype<ClassSchema> = RTLazy(() =>
  Record({
    returns: RTString.Or(RTUndefined),
    args: Dictionary(jsonSchemaRecord).Or(RTUndefined),
    name: RTString,
    type: RTString.Or(RTUndefined),
    doc: RTString.Or(RTUndefined),
    mode: RTString.withConstraint((v: string) => !!v.match(/[\a-zA-Z+]/)).Or(
      RTUndefined,
    ),
    inherits: RTArray(RTString).Or(RTUndefined),
    properties: Dictionary(jsonSchemaRecord).Or(RTUndefined),
  })
);

export const jsonClassSchema = Dictionary(jsonSchemaRecord);

export type JsonClasses = Static<typeof jsonClassSchema>;
