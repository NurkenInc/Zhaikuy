import { Modal } from '@/shared/ui/Modal/Modal';
import { useSession } from '@/shared/lib/hooks/useSession';
import { useNavigate } from 'react-router-dom'

export const LogoutPage = () => {
  const navigate = useNavigate();
  const { logout } = useSession();

  const onCancel = () => {
    navigate(-1);
  }

  const onLogout = () => {
    logout();
    navigate('/');
  }

  return (
    <Modal 
      cancelText='Cancel'
      confirmText='Logout'
      modalId='logout_modal'
      onCancel={onCancel}
      onConfirm={onLogout}
      title='Logout'
      description='Do you really wanna logout?'
      isConfirmDestructive
      isOpen
    />
  )
}