declare module "*.mdx" {
  let MDXComponent: (props: any) => JSX.Element;
  export const filename: string;
  export const attributes: {
    meta: Array<Record<string, any>>;
  };
  export default MDXComponent;
}
