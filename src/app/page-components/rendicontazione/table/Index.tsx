import TableBody from "./table-body";
import TableHead from "./table-head";

type OpenModalFunctionType = {
  onOpenModal: (name: string) => void;
};

const Table = (props: OpenModalFunctionType) => {
  const { onOpenModal } = props;

  return (
    <>
      <TableHead />
      <TableBody onOpenModal={(name: string) => onOpenModal(name)} />
    </>
  );
};

export default Table;
