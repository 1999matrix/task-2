import React , {useState} from 'react'

const Child1 = ({handlefirst , handlesec}) => {
    const [first, setFirst] = useState(0)
  const [second, setSecond] = useState(0)
//   const [sum , setSum] = useState(0)
  
  const handlefirst1 = (val)=>{
    handlefirst(val)
  }
  const handlesec2 = (val)=>{
    handlesec(val)
  }
  const handleChange1 = (e)=>{
      let val = parseInt(e.target.value , 10)
      setFirst(val)
      handlefirst1(val);
      
      
  }
  const handleChange2 = (e)=>{
    let val = parseInt(e.target.value , 10)
    setSecond(val)
    handlesec2(val)
    
  }
  return (
   <>
   <div>
      <label>First:
        <input
          type='number'
          value = {first}
          id='first'
          onChange = {handleChange1}
        />
      </label>
      <label> Second:
        <input
          type='number'
          value = {second}
          id='sec'
          onChange = {handleChange2}
        />
      </label>
      <h3>Addition:</h3>
      <span>{first+second}</span>
      </div>
   </>
  )
}

export default Child1