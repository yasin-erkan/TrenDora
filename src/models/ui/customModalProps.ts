import { Product } from '../data/productsState';

export interface CustomModalProps {
  visible: boolean;
  onClose?: () => void;
  onConfirm?: () => void;
  title: string;
  description: string;
  icon?: React.ReactNode;
  buttonText?: string;
  cancelButtonText?: string;
}
