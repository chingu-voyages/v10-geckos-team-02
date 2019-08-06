import React from "react";
import "./FAQ.css";
// Images
import back from "../../util/img/back.png";

const FAQ = ({ onBackClick }) => {
  return (
    <div className="faq">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      <div className="faq-card">
        <div className="faq-card-bg">
          <div className="questions">
            <h2>How does the app work?</h2>
            <p>
              Select a pet from the list of 8 kawaii kitties. You will then be
              directed to the Care page where you will be able to play with the
              cat or feed it with items from the Pet Store. You can keep track
              of your credits, and the cat's happiness and weight values. You
              can also gain credits by playing a special matching game. This
              application is responsive, user-friendly and pet friendly.
            </p>
            <h2>What’s your background, personally and professionally?</h2>
            <p>
              Marc lives in Montreal, Canada. He comes from a teaching
              background and is now a web developer who enjoys
              dancing...sometimes with his cat Smokey. Tina lives in
            </p>
            <h2>How did you come up with the idea?</h2>
            <p>
              We had our first video meeting and agreed that a pet app would be
              fun to build. After realizing we both liked cats and Japanese
              food, NekoFudo was born!
            </p>
            <h2>What’s the biggest achievement you’ve made on a project?</h2>
            <p>
              Cillum pariatur elit fugiat non dolore veniam ut quis sit nostrud.
              Fugiat duis irure nisi consectetur ea eu est adipisicing. Ullamco
              est dolor id officia laboris ullamco aliqua labore culpa consequat
              eiusmod in culpa voluptate. Nulla ex laborum sit est sit ut
              officia. Voluptate ad commodo cupidatat reprehenderit consectetur
              cupidatat. Nisi incididunt labore non id adipisicing tempor. Quis
              in laboris velit et esse.
            </p>
            <h2>How do you divide tasks and keep track of a project?</h2>
            <p>
              Cillum pariatur elit fugiat non dolore veniam ut quis sit nostrud.
              Fugiat duis irure nisi consectetur ea eu est adipisicing. Ullamco
              est dolor id officia laboris ullamco aliqua labore culpa consequat
              eiusmod in culpa voluptate. Nulla ex laborum sit est sit ut
              officia. Voluptate ad commodo cupidatat reprehenderit consectetur
              cupidatat. Nisi incididunt labore non id adipisicing tempor. Quis
              in laboris velit et ess
            </p>
            <h2>
              How did you keep the project development moving according to
              schedule?
            </h2>
            <p>
              Daily communication in Discord, recapping what we completed and
              what our next goals will be.
            </p>
          </div>
        </div>
      </div>

      <img className="back" src={back} alt="back" onClick={onBackClick} />
    </div>
  );
};

export default FAQ;
