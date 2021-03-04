import React, { Component, Fragment } from "react";

const name = [
  "Siri",
  "Alexa",
  "Google",
  "Facebook",
  "Twitter",
  "Linkedin",
  "Sinkedin",
];

const ResultSearch = (props) => (
  <div>
    <div>
      {console.log(props)}
      <h1>
        Titulo: {props.title}
        {props?.children}
      </h1>
    </div>
  </div>
);

// class ResultSearch extends Component {
//   render() {
//     return (
//       <>
//         <div>
//           <h1>Titulo: {this.props.title}</h1>
//         </div>
//       </>
//     );
//   }
// }

export default ResultSearch;
