import React , {useState} from 'react'

const Child1 = (handlefirst , handlesec) => {
    const [first, setFirst] = useState(0)
  const [second, setSecond] = useState(0)
//   const [sum , setSum] = useState(0)
  
  const handlefirst1 = ()=>{
    handlefirst(first)
  }
  const handlesec2 = ()=>{
    handlesec(second)
  }
  const handleChange1 = (e)=>{
      let val = parseInt(e.target.value , 10)
      setFirst(val)
      handlefirst1();
      
      
  }
  const handleChange2 = (e)=>{
    let val = parseInt(e.target.value , 10)
    setSecond(val)
    handlesec2()
    
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