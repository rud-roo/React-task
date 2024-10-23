import React, { useReducer } from 'react'


const counterReducer = (counterValue, action) => {
    switch(action.type){
        case "ADD":{
            return counterValue+action.value;
        }
        case "DEDUCT":{
            return counterValue-action.value;
        }
        default: {
            return counterValue
        }
    }
}

const initStateOfTheme = {bgColor: "#fff", textColor: "#000"}
const themeRedeucer = (state, action) => {
    switch(action.type){
        case "CHANGE_BG_COLOR": {
            return {...state, bgColor: action.payload}
        }
        case "CHANGE_TEXT_COLOR": {
            return {...state, textColor: action.payload}
        }
        default: {
            return state
        }
    }
}

const App2 = () => {
    const [counter, dispatchCounterAction] = useReducer(counterReducer, 0);
    const [theme, dispatchThemeAction] = useReducer(themeRedeucer, initStateOfTheme);

    const increaseCounter = (value) => {
        dispatchCounterAction({
            type: "ADD",
            value: value,
        })
    }
  return (
    <div 
        style={{
            backgroundColor: theme.bgColor,
            color: theme.textColor,
        }}
    >
        <div className="counter-app">
            <p>The value of the counter is {counter}</p>
            <button onClick={()=>increaseCounter(1)}>increase by 1</button>
            <button onClick={()=>dispatchCounterAction({type:"DEDUCT", value:1})}>decrease by 1</button>
            <button onClick={()=>dispatchCounterAction({type:"ADD", value:10})}>increase by 10</button>
        </div>
        
        <hr />

        <div className="theme-config">
            <div className="bg-btn-grp">
                <button 
                    onClick={()=>{
                        dispatchThemeAction({type:"CHANGE_BG_COLOR", payload:"#FF2C2C"})
                    }}>
                    Change BG color to Red
                </button>
                <button 
                    onClick={()=>{
                        dispatchThemeAction({type:"CHANGE_BG_COLOR", payload:"#800080"})
                    }}>
                    Change BG color to Purple
                </button>
                <button 
                    onClick={()=>{
                        dispatchThemeAction({type:"CHANGE_BG_COLOR", payload:"#00ff00"})
                    }}>
                    Change BG color to Green
                </button>
            </div>
            <hr />
            <div className="font-btn-grp">
                <button 
                    onClick={()=>{
                        dispatchThemeAction({type:"CHANGE_TEXT_COLOR", payload:"#001840"})
                    }}>
                    Change Font color to Blue
                </button>
                <button 
                    onClick={()=>{
                        dispatchThemeAction({type:"CHANGE_TEXT_COLOR", payload:"#964B00"})
                    }}>
                    Change Font color to Brown
                </button>
                <button 
                    onClick={()=>{
                        dispatchThemeAction({type:"CHANGE_TEXT_COLOR", payload:"#FF6347"})
                    }}>
                    Change Font color to Tomato
                </button>
            </div>
        </div>
    </div>
  )
}

export default App2