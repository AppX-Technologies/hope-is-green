import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function AppModal({
  show,
  onHide,
  size = "sm",
  children,
  TitleIcon,
  title,
}) {
  return (
    <Transition appear show={show} as={Fragment}>
      <Dialog as="div" className="relative z-[100]" onClose={onHide}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div
            className={`flex h-${
              !size || size === "fullscreen" ? "full" : "auto"
            } min-h-full items-center justify-center p-${
              !size || size === "fullscreen" ? "0" : "4"
            } text-center`}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={`w-full max-w-${
                  size === "sm" ? "xl" : size === "md" ? "3xl" : "full"
                } transform overflow-hidden min-h-full rounded-${
                  !size || size === "fullscreen" ? "0" : "md"
                } bg-white p-2 text-left align-middle shadow-xl transition-all`}
              >
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  <div className="flex gap-2 items-center">
                    {TitleIcon && <TitleIcon />}
                    {title}
                  </div>
                </Dialog.Title>
                <hr className="my-1" />
                <div className="mt-2">{children}</div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
