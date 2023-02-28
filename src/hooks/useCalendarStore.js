import { useDispatch, useSelector } from "react-redux";
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from "../store";


export const useCalendarStore = () => {

    const dispatch = useDispatch();

    const { 
        events,
        activeEvents 
    } = useSelector( state => state.calendar );

    const setActiveEvent = ( calendarEvent ) => {
      dispatch( onSetActiveEvent( calendarEvent ) );
    }

    const starSavingEvent = async( calendarEvent ) => {
      //TODO: llegar al backend

      if( calendarEvent._id ) {
        //Actualizada
        dispatch( onUpdateEvent({ ...calendarEvent }) );
      }else{
        //Creando
        dispatch( onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }) );
      }
    }

    const startDeletingEvent = () => {
       //TODO: llegar al backend
      dispatch( onDeleteEvent() );
    }

  return {
    //*Propiedades
    activeEvents,
    events,
    hasEventSelected: !!activeEvents,

    //*Métodos
    startDeletingEvent,
    setActiveEvent,
    starSavingEvent,
  }
}
