import React from 'react'
import PatientForm from './ChatArea/PatientForm'

const ChatArea = () => {

const { dietPlan, setDietPlan } = useState("");


  return (
    <div className='overflow-x-auto'>
        <PatientForm setDietPlan={setDietPlan}/>
        <DietPlan dietPlan={dietPlan} />
        <Explaination />
    
    </div>
  )
}

export default ChatArea