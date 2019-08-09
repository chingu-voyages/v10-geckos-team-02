import React from "react";
import "./FAQ.css";
// Images
import back from "../../util/img/back.png";

const FAQ = ({ onBackClick }) => {
  return (
    <div className='faq'>
      <h1 className='faq-title'>Frequently Asked Questions</h1>
      <div className='faq-card'>
        <div className='faq-card-bg'>
          <div className='questions'>
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
              Marc: lives in Montreal, Canada. He comes from a teaching
              background and is now a web developer who enjoys
              dancing...sometimes with his cat Smokey.
            </p>
            <p>
              Tina: currently lives in Fairfax, VA, USA. She originally worked
              as an experienced designer, now making a career transition into
              web development. She enjoys solving strategy games, criminal
              scenes and spending hours looking at her kittens' photos.
            </p>
            <h2>How did you come up with the idea?</h2>
            <p>
              We had our first video meeting and agreed that a pet app would be
              fun to build. After realizing we both liked cats and Japanese
              food, NekoFudo was born!
            </p>
            <h2>What’s the biggest mistake you’ve made on the project?</h2>
            <p>
              Probably not spending enough time to discuss how the layout should
              be, leading us to a point where our components were messy. We had
              to spend time to refactor the code, aligning it with current
              standards. We only learn by making mistakes, and it's good that we
              are able to comfortably communicate with one other about it.
            </p>
            <h2>What’s the biggest achievement you’ve made on the project?</h2>
            <p>
              Marc: In building a page where a user has to navigate to various
              pages and earn credits a whole lot of state was required. Passing
              down state to various components was manageable but when a child
              component needed to communicate to a parent component event
              binding was necessary. This was one challenging concept I
              specifically worked on and eventually figured out after hours of
              reading articles and Stack Overflow posts!
            </p>
            <p>
              <strong />
              Tina: This was my first time doing pair programming online, so I
              didn't know what kind of expectations I should have. Fortunately,
              everything turned out well. The biggest achievement I have done is
              to understand why I should use one elment rather than the others.
              In the first phase, Marc and I determined that functionality is
              our top priority. However, we gradually realized that a
              user-driven application needs to work in the right way. Not only
              does it help me understand what it takes to build a website but
              also why we code it the way we do.
            </p>
            <h2>How did you divide tasks and keep track of the project?</h2>
            <p>
              Daily communication in Discord, recapping what we completed and
              what our next goals will be. We used Git Issues for our project,
              which is a great way to keep track of tasks, enhancements and
              bugs. Having naming convention for git branch is another factor
              that we care for. However, the most important thing is that both
              of us have mutual respect for each other, understanding and
              sharing the responsibilities.
            </p>
          </div>
        </div>
      </div>

      <img className='back' src={back} alt='back' onClick={onBackClick} />
    </div>
  );
};

export default FAQ;
