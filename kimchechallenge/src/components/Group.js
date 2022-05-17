import React from "react";
import { GroupSearch, Button } from "../styles";

const Group = ({ state, setState }) => {
  return (
    <GroupSearch>
      <h2>Group by:</h2>
      <div>
        <Button
          type="button"
          onClick={() => setState({ ...state, groupType: "Continent" })}
        >
          Continent
        </Button>
        <Button
          type="button"
          onClick={() => setState({ ...state, groupType: "Language" })}
        >
          Language
        </Button>
      </div>
    </GroupSearch>
  );
};

export default Group;
