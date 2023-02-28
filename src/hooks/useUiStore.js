import { useDispatch, useSelector } from 'react-redux'
import { onClodeDateModa, onOpenDateModal } from '../store';

export const useUiStore = () => {

    const dispatch = useDispatch();

    const { 
        isDateModalOpen
    } = useSelector( state => state.ui )

    const openDateModal = () => {
        dispatch( onOpenDateModal() )
    }

    const closeDateModa = () => {
        dispatch( onClodeDateModa() )
    }

    const toggleDateModal = () => {
        (isDateModalOpen) 
            ? openDateModal()
            : closeDateModa();
    }

    return {
        //*Propiedades
        isDateModalOpen,

        //*Métodos
        openDateModal,
        closeDateModa,
        toggleDateModal,
    }

}