import React from "react";

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
    "green",
    "yellow"
  ];

  const colorElements = colors.map((color) => {
    
    return <li key={color} style={{color:color}}>{color}</li> ;
  
  })
 

  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <ol>
        {colorElements}
      </ol>
    </div>
  );
  // const users = [
  //   { id: 1, firstName: "Duane", lastName: "Watson" },
  //   { id: 2, firstName: "Duane", lastName: "Johnson" },
  // ];

  // const userHeadings = users.map((user)=> {
  //   return <li key={user.id} >{user.firstName}</li>
  // })

}

export default ColorList;
