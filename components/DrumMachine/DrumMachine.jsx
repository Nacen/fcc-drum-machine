import React, { useEffect, useRef, useState } from "react";
import { DrumPad } from "../DrumPad/DrumPad";
import { DRUMPADSDATA } from "../../Data/DrumpadData";

import styles from "./DrumMachine.module.scss";

const DrumMachine = () => {
  const [display, setDisplay] = useState("");
  const audioRef = useRef([]);

  const playAudio = (ref) => {
    if (ref) {
      ref.play();
    }
  };

  const handleClick = (ref, index) => {
    playAudio(ref);
    setDisplay(DRUMPADSDATA[index].soundDescription);
  };

  const handleKeyDown = (event) => {
    for (let i = 0; i < DRUMPADSDATA.length; i++) {
      if (event.key.toUpperCase() === DRUMPADSDATA[i].id) {
        playAudio(audioRef.current[i]);
        setDisplay(DRUMPADSDATA[i].soundDescription);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div id="drum-machine" className={styles.drumMachine}>
      {/* <h1>Drumpad Machine </h1> */}

      <div className={styles.displayContainer}>
        <h3 id="display" className={styles.display}>
          {display}
        </h3>
      </div>
      {DRUMPADSDATA.map((drumpad, index) => {
        return (
          <DrumPad
            id={drumpad.id}
            trigger={drumpad.trigger}
            audioSrc={drumpad.audioSrc}
            key={drumpad.id}
            audioRef={audioRef}
            index={index}
            handleClick={handleClick}
            className="drum-pad"
          />
        );
      })}
    </div>
  );
};

export default DrumMachine;
