import { useState } from "react"

const NameUpdate = () => {
   const [game, setGame] = useState({
      id: 1,
      player: {
          name: "Dylan"
      }
    })

    const handleClick = () => {
        setGame({
          ...game,
          player: {
            name: "Mitchell"
          }
        })
    }

    return (
      <>
        <div>
          <li>id: {game.id}</li>
          <li>player name: {game.player.name}</li>
          <button onClick={handleClick}>Change Name</button>
        </div>
      </>
    );
}
export default NameUpdate