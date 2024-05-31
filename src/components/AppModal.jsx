import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { GrClose } from "react-icons/gr";

export default function AppModal({
  show,
  onHide,
  size = "sm",
  children,
  TitleIcon,
  title,
}) {
  // Define size classes for the modal
  const sizeClasses = {
    sm: "max-w-xl",
    md: "max-w-3xl",
    lg: "max-w-6xl",
    fullscreen: "max-w-full h-full p-0 rounded-none",
  };

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
              <Dialog.Panel
                className={`w-full transform overflow-hidden rounded-md bg-white p-2 text-left align-middle shadow-xl transition-all ${sizeClasses[size]}`}
              >
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  <div className="flex justify-between items-center">
                  <div className="flex gap-2 items-center">
                    {TitleIcon && <TitleIcon />}
                    {title}
                  </div>
                  <GrClose className="cursor-pointer" onClick={onHide}/>
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
