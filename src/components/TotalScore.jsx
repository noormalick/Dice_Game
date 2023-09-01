import styled from "styled-components";

const TotalScore = ({score}) => {
  return (
    <Scoreconatiner>

    <h1>{score}</h1>
    <p> Total Score</p>

    </Scoreconatiner>
  )
}

export default TotalScore

const Scoreconatiner=styled.div`
max-width: 200px;
align-items: center;
    h1{
        font-size: 100px;
        font-weight: 500;
    }
    p{
        font-size: 24px;
        font-weight: 500;
    }
`