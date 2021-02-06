import React from "react";
import styles from "./DrumPad.module.scss";

export const DrumPad = ({
  id,
  audioSrc,
  className,
  handleClick,
  handleKeyDown,
  audioRef,
  index,
}) => {
  return (
    <button
      onClick={() => handleClick(audioRef.current[index], index)}
      onKeyDown={handleKeyDown}
      className={`${styles.drumPad} ${className}`}
      id={id}
    >
      {id}
      <audio
        ref={(element) => {
          return (audioRef.current[index] = element);
        }}
        id={id}
        src={audioSrc}
        className="clip"
      >
        Your browser does not support the
        <code>audio</code> element.
      </audio>
    </button>
  );
};
