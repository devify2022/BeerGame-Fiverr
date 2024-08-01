import stocks from "../../assets/game/participants.svg"
import participants from "../../assets/game/participants.svg"
import orders from "../../assets/game/orders.svg"
import week from "../../assets/game/weeks.svg"
import Game from "./Game";
import { useState } from "react";

const GameScreen = ({name, setName, setShowModal1}) => {
const [move1, setMove1] = useState(false)
const [move2, setMove2] = useState(false)
const [move3, setMove3] = useState(false)

    return (
        <div className="lg:mt-[12vh] md:mt-[8vh] mt-[14vh] w-full flex-1 overflow-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 justify-between items-center w-[95%] lg:w-[70%]  gap-5 ml-2 lg:ml-4 border-2 rounded-md py-2 px-5">
                <div className="flex items-center gap-5">
                    <img src={stocks} className="w-5" alt="" />
                    <p>Stocks</p>
                </div>
                <div className="flex items-center gap-5">
                    <img src={participants} className="w-5" alt="" />
                    <p>Paticipants 1/4</p>
                </div>
                <div className="flex items-center gap-5">
                    <img src={orders} className="w-5" alt="" />
                    <p>Orders 0/1</p>
                </div>
                <div className="flex items-center gap-5">
                    <img src={week} className="w-5" alt="" />
                    <p>Week 0</p>
                </div>
                <div className="flex items-center gap-2">
                    <button onClick={()=>setMove1(true)}>move</button>
                </div>
               
            </div>

            <div className="px-2 md:px-5 my-0 md:my-0 lg:mt-4 w-[80%] border bg-[#D7F4FD]">
                <Game 
                name={name}
                setName={setName}
                setShowModal1={setShowModal1}
                move1={move1}
                setMove1={setMove1}
                move2={move2}
                setMove2={setMove2}
                move3={move3}
                setMove3={setMove3}
                />
            </div>
        </div>
    );
};

export default GameScreen;