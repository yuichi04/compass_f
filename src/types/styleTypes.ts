export type MarginType = {
  m?: string;
  mt?: string;
  mr?: string;
  mb?: string;
  ml?: string;
};

export type PaddingType = {
  p?: string;
  pt?: string;
  pr?: string;
  pb?: string;
  pl?: string;
};

export type PositionType = {
  t?: string;
  r?: string;
  b?: string;
  l?: string;
};

export type FlexType = {
  flexDirection?: "column";
  justifyContent?: "center" | "space-between" | "space-around" | "flex-start" | "flex-end";
  alignItems?: "center" | "flex-end" | "flex-start";
};
