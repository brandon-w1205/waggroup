// Next
import { BOARD_HEIGHT, BOARD_WIDTH, BOARD_MINES } from './minesweeper/constants'
import styles from '../styles/minesweeper/minesweeper.module.css'

// React
import React from 'react'
import { useState, useEffect } from 'react'

// Components
import MSBoard from './minesweeper/gameBoard'
import MSGameButtons from './minesweeper/gameBoardButton'
import MSMineDisplay from './minesweeper/mineDisplay'
import MSModal from './minesweeper/modal'
import MSTimer from './minesweeper/timerDisplay'

type Props = {}

const MinesweeperGame = (props: Props) => {
  const [gameRunning, setGameRunning] = useState(true)
  const [isHidden, setIsHidden] = useState(0)
  const [isFlagged, setIsFlagged] = useState(0)
  const [mines, setMines] = useState(40)

  return (
    <div className={styles.gameboardContainer}>
      <div>
        <MSModal />
      </div>

      <div className={styles.topDisplay}>
        <MSTimer 
          gameRunning={gameRunning}
        />

        <MSGameButtons
        />

        <MSMineDisplay 
          isFlagged={isFlagged}
          mines={mines}
        />

      </div>

      <MSBoard 
        width={BOARD_WIDTH} 
        height={BOARD_HEIGHT}
        mines={BOARD_MINES}
      />

    </div>
  )
}

export default MinesweeperGame