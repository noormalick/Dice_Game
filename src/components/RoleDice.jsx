import styled from "styled-components";
const RoleDice = ({
    roleDice,currentDice
}) => {

  return (
    <Dicecontainer>

        <div className="dice" onClick={roleDice}>
            <img src={`/images/Dice/dice_${currentDice}.png`} alt="Dice_1" />
        </div>
        <p>
            click on Dice to Roll  </p>
        
        </Dicecontainer>
  )
}

export default RoleDice;
const Dicecontainer=styled.div`
margin-top: 48px;
display: flex;
flex-direction: column;
align-items: center;

.dice{
    cursor: pointer;
}
 p{
font-size: 24px;
 }

`;
