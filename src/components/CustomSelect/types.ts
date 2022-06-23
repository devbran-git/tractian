export interface CustomSelectProps {
  options: Options[];
  selectedOption: string;
  isSelectActive: boolean;
  handleSelect: () => void;
  handleOptions: (t: string) => void;
}

interface Options {
  id: string;
  name: string;
}
