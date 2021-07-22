import { useEffect, useState } from "react";
import { Input, Space, Divider } from "antd";
import "./searchBar.css";
const { Search } = Input;



export default function SearchPlayer() {
  const [members, setMembers] = useState([]);
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/members")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setMembers(result);
      });
  }, []);

  const onChange = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = members.filter((members) => {
        const regex = new RegExp(`${text}`, "gi");
        return members.name.match(regex);
      });
    }
    setSuggestions(matches);
    setText(text);
  };

  const onSuggest = (text) => {
    setText(text);
    setSuggestions([]);
    
    
  };
  return (
    <Divider orientation="left" style={{ paddingTop: 25 }}>
      <Space>
        <Input
          placeholder="Player name"
         
          size="medium"
          style={{ width: 300 }}
          onChange={(e) => onChange(e.target.value)}
          value={text}
          type="text"
        />
      </Space>
      <div>
        {suggestions &&
          suggestions.map((suggestion, i) => (
            <div
              className="suggestion"
              key={i}
              onClick={() => onSuggest(suggestions.name)}
            >
              {suggestion.name}
            </div>
          ))}
      </div>
    </Divider>
  );
}
