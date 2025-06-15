import './App.css'
import AnimatedButton from './AnimatedButton'
import AnimatedBox from './AnimatedBox'
import LoadingBar from './LoadingBar'
import BouncingBall from './BouncingBall'
import PlusToMinus from './PlusToMinus'
import AnimatedSubmitButton from './AnimatedSubmitButton'
function App() {
  return (
    <>
      <div className='page-root-container'>
        <AnimatedButton />
        <AnimatedBox  />
        <LoadingBar  />
        <BouncingBall />
        <PlusToMinus />
        <AnimatedSubmitButton />
      </div>
    </>
  )
}

export default App
