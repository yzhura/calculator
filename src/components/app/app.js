import CalculatorProvider from "../calulatorContext";
import NumberButton from "../numberButton";
import ResultWindow from "../resultWindow";
import ActionButton from "../actionButton";
import ResultButton from "../resultButton";
import ResetButtom from "../resetButton";
import PercentButton from "../percentButton";
import ReverseButton from "../reverseButton";

function App() {
  return (
    <div className='calc-app'>
        <CalculatorProvider>
          <ResultWindow/>
          <div className="numpad">
              <ResetButtom/>
              <ReverseButton/>
              <PercentButton/>
              <ActionButton action='/'/>
              <NumberButton number='7'/>
              <NumberButton number='8'/>
              <NumberButton number='9'/>
              <ActionButton action='x'/>
              <NumberButton number='4'/>
              <NumberButton number='5'/>
              <NumberButton number='6'/>
              <ActionButton action='-'/>
              <NumberButton number='1'/>
              <NumberButton number='2'/>
              <NumberButton number='3'/>
              <ActionButton action='+'/>
              <NumberButton number='0' addClass='two-col'/>
              <NumberButton number=','/>
              <ResultButton action='='/>
          </div>
        </CalculatorProvider>
    </div>
  );
}

export default App;
