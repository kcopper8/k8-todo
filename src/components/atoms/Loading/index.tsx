interface Props {
  loading: boolean;
  children: any;
}

export const Loading: React.FC<Props> = ({ children, loading }) => {
  return loading ? <>ⓛ</> : children;
};
