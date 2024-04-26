import { Fragment } from "react";
import { Transition, Dialog } from "@headlessui/react";
import useLocalization from "../../hooks/useLocalization";

export default function CustomDialog({
  isOpen,
  onClose,
  title,
  onSubmit,
  children,
  hideSecondaryButton = false,
  primaryButtonText,
  secondaryButtonText,
}) {
  const { translate } = useLocalization();

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-md bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  {title}
                </Dialog.Title>
                <div className="mt-2">{children}</div>

                <div className="mt-4 flex gap-2 justify-end">
                  {!hideSecondaryButton && (
                    <button
                      type="button"
                      className="bg-gray-300 hover:bg-gray-400 inline-flex justify-center rounded-md border border-transparent text-gray-700 px-4 py-1.5 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={onClose}
                    >
                      {translate(secondaryButtonText || "cancel")}
                    </button>
                  )}

                  <button
                    type="submit"
                    className="bg-primary hover:bg-green-500 inline-flex justify-center rounded-md border border-transparent text-gray-100 px-4 py-1.5 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={onSubmit}
                  >
                    {translate(primaryButtonText || "submit")}
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
