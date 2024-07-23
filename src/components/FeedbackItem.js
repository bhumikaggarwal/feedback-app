import { FaTimes , FaEdit} from 'react-icons/fa'
import React from 'react'
import Card from './shared/Card'
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackItem({item}) {
  const {deleteFeedback , editFeedback} = useContext(FeedbackContext);
  
  return (
    <Card >
    <div className='num-display'>{item.rating}</div>
    <button onClick={() => deleteFeedback(item.id)} className='close'>
      <FaTimes color='pink' />
    </button>
    <button onClick={() => editFeedback(item)} className='edit'>
      <FaEdit color='pink' />
    </button>
    <div className='text-display'>{item.text}</div>
    </Card>
    )
}


export default FeedbackItem