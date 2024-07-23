import { createContext ,useState } from "react";
import {v4 as uuidv4} from 'uuid';


const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
    const [feedback , setFeedback] = useState([
        {
            id:1 ,
            text:"This is feedback item 1",
            rating:8 
        },
        {
            id:2 ,
            text:"This is feedback item 2",
            rating:7 
        },
        {
            id:3 ,
            text:"This is feedback item 3",
            rating:9 
        }
    ]);
    const [feedbackEdit , setFeedbackEdit] = useState({
        item: {},
        edit: false
    })
   //Delete Feedback
    const deleteFeedback = (id) => {
        if(window.confirm("Are you sure want to delete?")){
          setFeedback(feedback.filter((item) => item.id !== id));
        }
      }
    //Set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit:true
        })
    }
//Update Feedback item 
const updateFeedback = (id, updItem) => {
setFeedback(feedback.map((item) => item.id === id ? {...item,...updItem} : item))
}


 //Add Feedback
      const addFeedback = (newFeedback) => {
        newFeedback.id = +uuidv4();
        setFeedback([newFeedback, ...feedback])
  }
     


    return <FeedbackContext.Provider value ={{
feedback,
feedbackEdit,
deleteFeedback,
addFeedback,
editFeedback,
updateFeedback

    }} >
        {children}
    </FeedbackContext.Provider >
}
export default FeedbackContext