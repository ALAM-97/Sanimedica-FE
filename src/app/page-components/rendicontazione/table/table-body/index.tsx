import { DUMMY_OPERATORS } from "@/data";
import { PlusCircleIcon } from "@heroicons/react/20/solid";

type OpenModalFunctionType = {
  onOpenModal: (name: string) => void;
};

const TableBody = (props: OpenModalFunctionType) => {
  const { onOpenModal } = props;

  return (
    <div>
      {DUMMY_OPERATORS.map((op) => (
        <>
          <div className="grid grid-cols-30 gap-5 py-2 border-b-2 ">
            <div className="text-xl font-medium text-neutral-400 col-span-1 " />
            <div className="text-xl font-medium text-neutral-400 col-span-6">
              {op.name}
            </div>
            <div className="text-xl font-medium text-neutral-400 col-span-2">
              {op.ff ? "OK" : ""}
            </div>
            <div className="text-xl font-medium text-neutral-400 col-span-2">
              {op.asl}
            </div>
            <div className="text-xl font-medium text-neutral-400 col-span-2">
              {op.district}
            </div>
            <div className="text-xl font-medium text-neutral-400 col-span-3">
              {op.profession}
            </div>
            <div className="text-xl font-medium text-neutral-400 col-span-2">
              {op.ccnl}
            </div>
            <div className="text-xl font-medium text-neutral-400 col-span-3">
              {op.gestionale}
            </div>
            <div className="text-xl font-medium text-neutral-400 col-span-3">
              {op.plafond}
            </div>
            <div className="text-xl font-medium text-neutral-400 col-span-2">
              -
            </div>
            <div className="text-xl font-medium text-neutral-400 col-span-2">
              -
            </div>
            <div className="text-xl font-medium text-neutral-400 col-span-2 flex justify-end">
              <PlusCircleIcon
                className="text-cyan-800 w-7 h-7 cursor-pointer hover:text-cyan-600"
                onClick={() => onOpenModal(op.name)}
              />
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default TableBody;
