import { Modal } from '@/shared/ui/Modal/Modal'
import { CreateTaskForm } from './CreateTaskForm'
import { MutableRefObject, useRef } from 'react'
import { PlusCircle, Building } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export const CreateTaskModal = () => {
  const modalRef = useRef() as MutableRefObject<HTMLDialogElement>
  const { t } = useTranslation();

  const handleModalOpen = () => {
    modalRef.current.showModal();
  }

  const handleModalClose = () => {
    modalRef.current.close();
  }

  return (
    <div>
      <button className='btn btn-ghost' onClick={handleModalOpen}>
        <PlusCircle />
      </button>
      <Modal modalId='create_issue_modal' ref={modalRef} onCancel={handleModalClose}>
        <div className='flex items-center gap-1 select-none'>
          <span className='border border-gray-400 px-4 rounded-md text-gray-500 font-light drop-shadow-lg flex items-center gap-1'>
            <Building className='w-4 h-4 text-green-400' />
            JUM
          </span>
          <span className='text-sm font-semibold text-gray-500'>{' > '}</span>
          {t('new issue')}
        </div>
        <CreateTaskForm />
      </Modal>
    </div>
  )
}