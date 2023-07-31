import { ReactNode, forwardRef } from 'react'

interface ModalProps {
  onCancel?: () => void
  onConfirm?: () => void
  confirmText?: string
  cancelText?: string
  modalId: string
  isOpen?: boolean
  title?: string
  description?: string
  isConfirmDestructive?: boolean
  children?: ReactNode
} 

export const Modal = forwardRef<
  HTMLDialogElement,
  ModalProps
>((props, ref) => {
  const {
    cancelText,
    confirmText,
    onCancel,
    onConfirm,
    modalId,
    isOpen,
    title,
    description,
    isConfirmDestructive,
    children
  } = props;

  return (
    <dialog id={modalId} className="modal modal-bottom sm:modal-middle" open={isOpen} ref={ref}>
      {!children ? (
        <form method="dialog" className="modal-box flex flex-col items-start">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={onCancel}>
            ✕
          </button>
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{description}</p>
          <div className='btn-group self-end'>
            <button onClick={onConfirm} className={`btn btn-accent btn-outline ${isConfirmDestructive && 'btn-error'}`}>
              {confirmText}
            </button>
            <button onClick={onCancel} className={`btn btn-accent btn-outline ${!isConfirmDestructive && 'btn-error'}`}>
              {cancelText}
            </button>
          </div>
        </form>
      ) : (
        <div className="modal-box flex flex-col items-start overflow-hidden">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={onCancel}>
            ✕
          </button>
          {children}
        </div>
      )}
    </dialog>
  )
})