import "./styles.css";
import { useState } from "react";

export default function App() {
  var [oldchange, newchange] = useState("");
  var [emoji, meaningm] = useState("");

  var emojiDictionary = {
    "😂": "Laughing",
    "❤️": "Heart",
    "😥": "Sad",
    "🤣": "Laughing Out Loud",
    "😊": "Smile",
    "🎶": "Music"
  };

  var emojiKnown = Object.keys(emojiDictionary);

  function changeinput(event) {
    newchange(event.target.value);
    var inputvalue = event.target.value;
    var meaning = emojiDictionary[inputvalue];

    if (inputvalue in emojiDictionary) {
      meaningm(meaning);
    } else {
      meaningm("We dont have it");
    }
  }

  function emojihandler(emoji) {
    var meaning = emojiDictionary[emoji];
    meaningm(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Dictionary</h1>
      <h3>Enter the emoji or click from below</h3>

      <input onChange={changeinput} />
      <h2>{oldchange}</h2>
      <p>{emoji}</p>

      <div>
        {emojiKnown.map(function (item) {
          return (
            <span onClick={() => emojihandler(item)} key={item}>
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}
