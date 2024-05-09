import React, { useState } from "react";
import "./Committee.css";

const Committee = () => {
  const [activeCommittee, setActiveCommittee] = useState("content1");

  const handleMouseOver = (id) => {
    setActiveCommittee(id);
  };

  return (
    <main>
      <div className="container3">
        <div className="icon">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div
              key={i}
              className={`imgBx ${
                activeCommittee === `content${i}` ? "active" : ""
              }`}
              style={{ "--i": i }}
              data-id={`content${i}`}
              onMouseOver={() => handleMouseOver(`content${i}`)}
            >
              <img src={`./Committee${i}.png`} alt={`Committee ${i}`} />
            </div>
          ))}
        </div>
        <div className="content">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div
              key={i}
              className={`contentBx ${
                activeCommittee === `content${i}` ? "active" : ""
              }`}
              id={`content${i}`}
            >
              <div className="card">
                <div className="textBx">
                  <h2>
                    Committee {i}
                    <br />
                    <span>Description for Committee {i}</span>
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Committee;

// import "./Committee.css";
// export default function Committee() {
//   let imgBx = document.querySelectorAll(".imgBx");
//   let contentBx = document.querySelectorAll(".contentBx");

//   for (let i = 0; i < imgBx.length; i++) {
//     imgBx[i].addEventListener("mouseover", function () {
//       for (let i = 0; i < contentBx.length; i++) {
//         contentBx[i].className = "contentBx";
//       }
//       document.getElementById(this.dataset.id).className = "contentBx active";

//       for (let i = 0; i < imgBx.length; i++) {
//         imgBx[i].className = "imgBx";
//       }
//       this.className = "imgBx active";
//     });
//   }
//   return (
//     <>
//       <main>
//         <div className="container3">
//           <div className="icon">
//             <div
//               className="imgBx active"
//               style={{ "--i": 1 }}
//               data-id="content1"
//             >
//               <img src="./Technical.png" alt="Technical" />
//             </div>
//             <div className="imgBx" style={{ "--i": 2 }} data-id="content2">
//               <img src="./Events.png" alt="Events" />
//             </div>
//             <div className="imgBx" style={{ "--i": 3 }} data-id="content3">
//               <img
//                 src="./Pr.png"
//                 alt="PR & Sponsorship"
//               />
//             </div>
//             <div className="imgBx" style={{ "--i": 4 }} data-id="content4">
//               <img src="./Editorial.png" alt="Editorial" />
//             </div>
//             <div className="imgBx" style={{ "--i": 5 }} data-id="content5">
//               <img src="./Design.png" alt="Design & VFX" />
//             </div>
//             <div className="imgBx" style={{ "--i": 6 }} data-id="content6">
//               <img src="./CSR.png" alt="CSR" />
//             </div>
//             <div className="imgBx" style={{ "--i": 7 }} data-id="content7">
//               <img src="./Social.png" alt="Social Media" />
//             </div>
//             <div className="imgBx" style={{ "--i": 8 }} data-id="content8">
//               <img src="./Logistic.png" alt="Logistics" />
//             </div>
//           </div>
//           <div className="content">
//             <div className="contentBx active" id="content1">
//               <div className="card">
//                 <div className="textBx">
//                   <h2>
//                     Technical Committee
//                     <br />
//                     <span>
//                       The Chapter's backbone, the Technical Team not only
//                       designs the websites and apps for the Chapter, but also
//                       propogates the culture of coding across entire UPES and
//                       works on projects that help students learn.
//                     </span>
//                   </h2>
//                 </div>
//               </div>
//             </div>
//             <div className="contentBx " id="content2">
//               <div className="card">
//                 <div className="textBx">
//                   <h2>
//                     Events Committee
//                     <br />
//                     <span>
//                       The brain of the chapter, this vivacious team is tasked
//                       with organizing a variety of events, whether they are
//                       technical or fun-filled. Through creative concepts and
//                       flawless event execution, the Events team makes sure that
//                       attendees enjoy every minute from conception to
//                       conclusion.
//                     </span>
//                   </h2>
//                 </div>
//               </div>
//             </div>
//             <div className="contentBx " id="content3">
//               <div className="card">
//                 <div className="textBx">
//                   <h2>
//                     PR & Sponsorship Committee
//                     <br />
//                     <span>
//                       This committee is the face of the chapter. The PR and
//                       Sponsorship team puts in immeasurable efforts to secure
//                       sponsorships for the events, responds to inquiries, and
//                       tries to increase the chapter's.
//                     </span>
//                   </h2>
//                 </div>
//               </div>
//             </div>
//             <div className="contentBx " id="content4">
//               <div className="card">
//                 <div className="textBx">
//                   <h2>
//                     Editorial Committee <br />
//                     <span>
//                       In addition to being the brainchild behind the Chapter's
//                       formal communications and blogs, the Editorial Team is
//                       also responsible for documenting the Chapter's daily
//                       proceedings.
//                     </span>
//                   </h2>
//                 </div>
//               </div>
//             </div>
//             <div className="contentBx " id="content5">
//               <div className="card">
//                 <div className="textBx">
//                   <h2>
//                     Design & VFX Committee <br />
//                     <span>
//                       This distinguished committee is the creative house of the
//                       chapters. The Design and VFX team always leads from the
//                       forefront by fabricating breathtaking videos and
//                       developing visually appealing graphic material such as
//                       images and animations.
//                     </span>
//                   </h2>
//                 </div>
//               </div>
//             </div>
//             <div className="contentBx " id="content6">
//               <div className="card">
//                 <div className="textBx">
//                   <h2>
//                     CSR Committee
//                     <br />
//                     <span>
//                       Being the reflection of the chapter’s ethics and deeds,
//                       the CSR committee curates activities that help contribute
//                       to the upliftment of society. It promotes education, and
//                       vocational skills among young children.
//                     </span>
//                   </h2>
//                 </div>
//               </div>
//             </div>
//             <div className="contentBx " id="content7">
//               <div className="card">
//                 <div className="textBx">
//                   <h2>
//                     Social Media Committee
//                     <br />
//                     <span>
//                       The Social Media Committee is responsible for innovatively
//                       using social media platforms as a means to connect and
//                       engage members, grow the membership base, and come up with
//                       strategies to increase the chapters’ social media
//                       presence.
//                     </span>
//                   </h2>
//                 </div>
//               </div>
//             </div>
//             <div className="contentBx " id="content8">
//               <div className="card">
//                 <div className="textBx">
//                   <h2>
//                     Logistics Committee <br />
//                     <span>
//                       The Logistics committee works behind the scenes to ensure
//                       the smooth functioning of every event or activity of the
//                       chapters. This team provides back-end support to every
//                       other committee by managing all the arrangements
//                       flawlessly.
//                     </span>
//                   </h2>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </>
//   );
// }
