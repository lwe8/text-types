import type {
  Comment as IComment,
  Doctype as IDoctype,
  Element as IElement,
  ElementContent as IElementContent,
  Node as INode,
  Root as IRoot,
  Text as IText,
} from "hast";

export interface Root extends IRoot {}
export interface Doctype extends IDoctype {}
export type ElementContent = IElementContent;
export interface Node extends INode {}
export interface Element extends IElement {}
export interface Text extends IText {}
export interface Comment extends IComment {}

export type TextileVisitor = (
  node: Root | Doctype | ElementContent,
  index?: number,
  parent?: Root | Element
) => any;
export interface TextileTreeWalker {
  walk: TextileVisitor;
}
export interface TextileExtension extends TextileTreeWalker {}
export type TextileExtensionFn = (...args: any[]) => TextileExtension;

export function Name(name: string): string;
