import React from "react";
import PropTypes from "prop-types";
import '../style/index.css'
const ActionsButtons = (props) => {
  return (
    <div style={{ margin: "40px auto", textAlign: "center" }}>
      <button onClick={() => props.shuffle(props.deckArray)}>Shuffle</button>
      <button onClick={() => props.dealOneCard()}>pick 5 cards</button>

    </div>
  );
};

ActionsButtons.propTypes = {
  shuffle: PropTypes.func,
  dealOneCard: PropTypes.func,
  flip: PropTypes.func,
  deckArray: PropTypes.array
};

export default ActionsButtons;
