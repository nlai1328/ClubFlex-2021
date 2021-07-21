import { useEffect, useState } from "react";
import { Input, Space, Divider } from "antd";

const { Search } = Input;

const onSearch = (value) => console.log(value);

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
    console.log(matches);
    setSuggestions(matches);
    setText(text);
  };
  return (
    <Divider orientation="left" style={{ paddingTop: 25 }}>
      <Space>
        <Search
          placeholder="Player name"
          onSearch={onSearch}
          enterButton
          size="medium"
          style={{ width: 300 }}
          onChange={(e) => onChange(e.target.value)}
          value={text}
        />
        <div>
          {suggestions &&
            suggestions.map((suggestion, i) => (
              <div key={i}>{suggestion.name}</div>
            ))}
        </div>
      </Space>
    </Divider>
  );
}
