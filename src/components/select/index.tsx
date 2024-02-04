"use client";

import { Fragment, useState } from "react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Listbox, Transition } from "@headlessui/react";

type SelectPropsTypes = {
  options: SelectOptionTypes[];
  label: string;
  name: string;
  value: string;
  onChange: (value: string, name: string) => void;
  className?: string;
  emptyOption?: boolean;
  withLabel?: boolean;
};

type SelectOptionTypes = {
  id: number;
  title: string;
};

const Select = (props: SelectPropsTypes) => {
  const [selected, setSelected] = useState(props.value || "");

  const { onChange, emptyOption = false, withLabel = true } = props;

  const classNames = (...classes: any) => {
    return classes.filter(Boolean).join(" ");
  };

  const handleChange = (value: string) => {
    setSelected(value);
    onChange(value, props.name);
  };

  return (
    <div className={`${props.className} w-full`}>
      <Listbox
        value={selected}
        onChange={(value: string) => handleChange(value)}
      >
        {(open) => (
          <>
            {withLabel && (
              <Listbox.Label className="block text-md font-semibold leading-3 text-gray-400 mb-2">
                {props.label}
              </Listbox.Label>
            )}
            <div className="relative">
              <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-2 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-800 sm:text-sm sm:leading-6">
                <span className="flex items-center">
                  {selected ? (
                    <span className="ml-3 block truncate text-gray-900 ">
                      {selected}
                    </span>
                  ) : (
                    <span className="ml-3 block truncate text-gray-400 ">
                      Scegli un&apos;opzione
                    </span>
                  )}
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                  <ChevronUpDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>

              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  <>
                    {emptyOption && (
                      <Listbox.Option
                        key={0}
                        className={({ active }) =>
                          classNames(
                            active ? "bg-cyan-800 text-white" : "text-gray-900",
                            "relative cursor-default select-none py-2 pl-3 pr-9"
                          )
                        }
                        value={""}
                      >
                        {({ selected, active }) => (
                          <>
                            <div className="flex items-center">
                              <span
                                className={classNames(
                                  selected ? "font-semibold" : "font-normal",
                                  "ml-3 block truncate"
                                )}
                              >
                                Scegli...
                              </span>
                            </div>

                            {selected ? (
                              <span
                                className={classNames(
                                  active ? "text-white" : "text-cyan-800",
                                  "absolute inset-y-0 right-0 flex items-center pr-4"
                                )}
                              >
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    )}
                    {props.options?.map((opt) => (
                      <Listbox.Option
                        key={opt.id}
                        className={({ active }) =>
                          classNames(
                            active ? "bg-cyan-800 text-white" : "text-gray-900",
                            "relative cursor-default select-none py-2 pl-3 pr-9"
                          )
                        }
                        value={opt.title}
                      >
                        {({ selected, active }) => (
                          <>
                            <div className="flex items-center">
                              <span
                                className={classNames(
                                  selected ? "font-semibold" : "font-normal",
                                  "ml-3 block truncate"
                                )}
                              >
                                {opt.title}
                              </span>
                            </div>

                            {selected ? (
                              <span
                                className={classNames(
                                  active ? "text-white" : "text-cyan-800",
                                  "absolute inset-y-0 right-0 flex items-center pr-4"
                                )}
                              >
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </>
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </div>
  );
};

export default Select;
