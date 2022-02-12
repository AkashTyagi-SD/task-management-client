export type sidebarModel = {
  id: number;
  name: string;
  title: string;
  access: string;
  icon: React.ReactNode;
  route: string;
};

export type Props = {
  options: Array<sidebarModel>;
};
