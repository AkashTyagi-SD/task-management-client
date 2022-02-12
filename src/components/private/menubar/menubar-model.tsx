import { Props } from '../sidebar/sidebar-model';

type MenuProps = {
  handleChange: () => void;
};

export type MenuBarProps = MenuProps & Props;
