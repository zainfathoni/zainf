declare module "*.mdx" {
  type RouteExport = (...args: any[]) => unknown;

  export const attributes: {
    meta: Array<Record<string, any>>;
    [key: string]: any;
  };
  export const filename: string;
  export const headers: RouteExport | undefined;
  export const handle: any;
  export const links: RouteExport | undefined;
  export const meta: RouteExport | undefined;

  const Component: RouteExport;
  export default Component;
}
