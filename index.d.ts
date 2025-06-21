export type Attributes = Record<string, string>;
export type ElementNode = [string, ...(Attributes | JsonMLNode)[]];
export type JsonMLNode = string | ElementNode;
export type JsonMLNodes = JsonMLNode[];
export type JsonMLTree = JsonMLNode[];

export type Option = {
  breaks?: boolean;
};
export type TxastTextNode = {
  type: "text";
  value: string;
};
export type TxastBreaksNode = {
  type: "breaks";
  value: string;
};
export type TxastElementNode = {
  type: "element";
  tagName: Tags;
  properties?: Record<string, any>;
  children?: TxastNodes;
};
export type TxastNode = TxastTextNode | TxastBreaksNode | TxastElementNode;
export type TxastNodes = TxastNode[];
export type TxastTree = {
  type: "root";
  tagName: "html";
  children: TxastNodes;
};
export type WalkFunction = (
  node: TxastNode,
  index?: number,
  parent?: TxastNodes
) => any;
//
export interface TextileExtension {
  walkTree: WalkFunction;
}
export type TextileExtensionFn = (...args: any[]) => TextileExtension;
export type Tags =
  | "a"
  | "abbr"
  | "address"
  | "area"
  | "article"
  | "aside"
  | "audio"
  | "b"
  | "bdi"
  | "bdo"
  | "blockquote"
  | "body"
  | "br"
  | "button"
  | "canvas"
  | "caption"
  | "cite"
  | "code"
  | "col"
  | "colgroup"
  | "data"
  | "datalist"
  | "dd"
  | "del"
  | "details"
  | "dfn"
  | "dialog"
  | "div"
  | "dl"
  | "dt"
  | "em"
  | "embed"
  | "fieldset"
  | "figcaption"
  | "figure"
  | "footer"
  | "form"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "header"
  | "hgroup"
  | "hr"
  | "i"
  | "iframe"
  | "img"
  | "input"
  | "ins"
  | "kbd"
  | "label"
  | "legend"
  | "li"
  | "main"
  | "map"
  | "mark"
  | "menu"
  | "meter"
  | "nav"
  | "noscript"
  | "object"
  | "ol"
  | "optgroup"
  | "option"
  | "output"
  | "p"
  | "picture"
  | "pre"
  | "progress"
  | "q"
  | "rp"
  | "rt"
  | "ruby"
  | "s"
  | "samp"
  | "search"
  | "section"
  | "select"
  | "slot"
  | "small"
  | "source"
  | "span"
  | "strong"
  | "sub"
  | "summary"
  | "sup"
  | "table"
  | "tbody"
  | "td"
  | "template"
  | "textarea"
  | "tfoot"
  | "th"
  | "thead"
  | "time"
  | "tr"
  | "track"
  | "u"
  | "ul"
  | "var"
  | "video"
  | "wbr";

export function Name(name: string): string;
