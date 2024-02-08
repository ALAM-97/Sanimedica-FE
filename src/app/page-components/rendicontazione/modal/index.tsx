import { Fragment, SetStateAction, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Button from "@/components/button";
import InputsRow from "./inputs-row";

type ModalPropsTypes = {
  open: boolean;
  handleChange: (access: object, key: string) => void;
  onAddRow: () => void;
  onClose: (value: SetStateAction<boolean>) => void;
  currentOperator: string;
  rows: number[];
};

const Modal = (props: ModalPropsTypes) => {
  const cancelButtonRef = useRef(null);

  const {
    open = false,
    onClose,
    currentOperator,
    rows,
    handleChange,
    onAddRow,
  } = props;

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={onClose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-2/5 h-3/6 min-h-4/6">
                <div className="bg-white px-7 pb-4 pt-5 h-9/10 overflow-y-auto">
                  <div className="sm:flex sm:items-start">
                    {/* <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <ExclamationTriangleIcon
                        className="h-6 w-6 text-red-600"
                        aria-hidden="true"
                      />
                    </div> */}
                    <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6 text-neutral-600"
                      >
                        <div className="flex">
                          <p className="me-2 text-2xl">
                            Inserisci gli accessi di:
                          </p>
                          <p className="text-2xl font-bold text-cyan-600">
                            {currentOperator}
                          </p>
                        </div>
                      </Dialog.Title>
                      <div className="grid grid-cols-12 mt-5 gap-5 ">
                        <div className="col-span-4 text-lg font-semibold text-gray-400">
                          Numero accessi
                        </div>
                        <div className="col-span-4 text-lg font-semibold text-gray-400">
                          Tipo di accessi
                        </div>
                        <div className="col-span-4 text-lg font-semibold text-gray-400">
                          ASL
                        </div>
                      </div>
                      {rows.map((row, index) => (
                        <InputsRow
                          key={row.toString()}
                          handleChange={handleChange}
                        />
                      ))}
                      <div
                        onClick={onAddRow}
                        className="cursor-pointer mt-2 text-lg font-medium text-neutral-600"
                      >
                        + Aggiungi altri accessi
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-7 py-4 flex justify-between items-center h-1/10">
                  <Button text="Chiudi" type="secondary" />

                  {/* <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm bg-amber-400 hover:bg-amber-300 sm:mt-0 sm:w-auto"
                    onClick={(open) => onClose(!open)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button> */}
                  <Button text="Salva" />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Modal;
