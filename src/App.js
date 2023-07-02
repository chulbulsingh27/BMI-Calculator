import { useState } from 'react';
function App() {
  const[weight,setWeight] = useState(0);
  const[height,setHeight] = useState(0);
  const[bmi,setBmi] = useState(0);
  const[message,setMessage] = useState(0);
  let calcBmi = (e)=> {
    e.preventDefault();
    if(weight === 0 || height === 0){
      alert("please enter a valid weight and height")
    }else{
      let bmi = (weight/(height*height)*703)
      setBmi(bmi.toFixed(1));
      if(bmi <= 25){
        setMessage('you are underweight')
      }else if(bmi>=25 && bmi<=30){
        setMessage('you are a healthy weight')
      }else{
        setMessage('you are overweight')
      }
    }
  }
  let imgSrc;
  if(bmi<=1){
    imgSrc=null;
  }else if(bmi<25){
    imgSrc='https://png.pngtree.com/png-clipart/20210911/ourmid/pngtree-thin-character-thin-man-hungry-png-image_3900909.png'
  }else if(bmi>=25 && bmi <= 30){
    imgSrc= 'https://png.pngtree.com/element_our/20200609/ourmid/pngtree-good-figure-image_2231550.jpg'
  }else {
    imgSrc='https://png.pngtree.com/png-vector/20220217/ourmid/pngtree-sad-overweight-woman-walk-outdoor-png-image_4396106.png'
  }
  let reLoad = ()=>{
    window.location.reload();
  }
  return (
    <div className="max-w-[1480px] h-[740px] relative">
      <div className='border-2 border-gray-500 w-[400px] absolute top-[10%] left-[50%] space-y-2 p-4 m-3 shadow-lg bg-slate-200 rounded-md'>
        <div className='flex items-center justify-center p-4'>
          <p className='text-2xl font-bold'>BMI Calculator</p>
        </div>
        <form onSubmit={calcBmi}>
          <div className='flex flex-col gap-2'>
            <label htmlFor='weight' >Weight (lbs)</label>
            <input className='border-2 border-gray-500 p-1.5 rounded-md outline-none'  value={weight} onChange={(event) => setWeight(event.target.value)}/>
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='weight'>Height (in)</label>
            <input className='border-2 border-gray-500 p-1.5 rounded-md'   value={height} onChange={(event) => setHeight(event.target.value)} />
          </div>
          <div className='flex flex-col space-y-3 pt-1.5'>
            <button className='border-2 border-gray-500 bg-black text-white p-2 outline-none rounded-md '>Submit</button>
            <button className='border-2 border-gray-500 p-1.5 rounded-md outline-none 'onClick={reLoad}>Reload</button>
          </div>
        </form>
        <div className='flex flex-col items-center justify-center'>
          <p className='text-xl font-bold text-blue-600'>Your BMI is: {bmi} </p>
          <p className='text-blue-500'>{message}</p>
        </div>
        <div className='flex items-center justify-center ' >
        <img src={imgSrc} alt="myImages"/>
        </div>
      </div>
    </div>
  );
}

export default App;
