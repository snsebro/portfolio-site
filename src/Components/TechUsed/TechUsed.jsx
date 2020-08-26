import React from "react";
import "./TechUsed.css";
import { ReactComponent as ReactIcon } from "../../Assets/react-original-wordmark.svg";
import { ReactComponent as HtmlIcon } from "../../Assets/html5-plain-wordmark.svg";
import { ReactComponent as CssIcon } from "../../Assets/css3-plain-wordmark.svg";
import { ReactComponent as PostgresIcon } from "../../Assets/postgresql-plain-wordmark.svg";
import { ReactComponent as RailsIcon } from "../../Assets/rails-plain-wordmark.svg";
import { ReactComponent as RubyIcon } from "../../Assets/ruby-plain-wordmark.svg";
import { ReactComponent as ReduxIcon } from "../../Assets/icons8-redux.svg";
import { ReactComponent as FirebaseIcon } from "../../Assets/icons8-firebase.svg";

export default function TechUsed(props) {
  switch (props.project.name) {
    case "Prep Chef":
      return (
        <>
          <div className="tech">
            <ReactIcon className="react-icon" />
          </div>
          <div className="tech">
            <CssIcon className="css-icon" />
          </div>
          <div className="tech">
            <HtmlIcon className="html-icon" />
          </div>
        </>
      );
    case "Aeternam Beauty":
      return (
        <>
          <div className="tech">
            <ReactIcon className="react-icon" />
          </div>
          <div className="tech">
            <CssIcon className="css-icon" />
          </div>
          <div className="tech">
            <HtmlIcon className="html-icon" />
          </div>
          <div className="tech">
            <RubyIcon className="ruby-icon" />
          </div>
          <div className="tech">
            <RailsIcon className="rails-icon" />
          </div>
          <div className="tech">
            <PostgresIcon className="postgres-icon" />
          </div>
        </>
      );
    case "Aeternam Clothing":
      return (
        <>
          <div className="tech">
            <ReactIcon className="react-icon" />
          </div>
          <div className="tech">
            <ReduxIcon className="redux-icon" />
          </div>
          <div className="tech">
            <CssIcon className="css-icon" />
          </div>
          <div className="tech">
            <HtmlIcon className="html-icon" />
          </div>
          <div className="tech">
            <FirebaseIcon className="firebase-icon" />
          </div>
        </>
      );
    default:
      return null
  }
}

// export default function TechUsed(props) {
//   return (
//     <>
//       {props.project.name === "Prep Chef" ? (
//         <>
//           <div className="tech">
//             <ReactIcon className="react-icon" />
//           </div>
//           <div className="tech">
//             <CssIcon className="css-icon" />
//           </div>
//           <div className="tech">
//             <HtmlIcon className="html-icon" />
//           </div>
//         </>
//       ) : (
// <>
//   <div className="tech">
//     <ReactIcon className="react-icon" />
//   </div>
//   <div className="tech">
//     <CssIcon className="css-icon" />
//   </div>
//   <div className="tech">
//     <HtmlIcon className="html-icon" />
//   </div>
//   <div className="tech">
//     <RubyIcon className="ruby-icon" />
//   </div>
//   <div className="tech">
//     <RailsIcon className="rails-icon" />
//   </div>
//   <div className="tech">
//     <PostgresIcon className="postgres-icon" />
//   </div>
// </>
//       )}
//     </>
//   );
// }
