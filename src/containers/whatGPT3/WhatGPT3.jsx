import { Feature } from "../../components";
import "./whatGPT3.css";

const texts = {
  whatIs:
    "We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.",
  chatBots:
    "We so opinion friends me message as delight. Whole front do of plate heard oh ought. ",
  knowledgebase:
    "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b",
  education:
    "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b",
};

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin " id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature title="What is GPT3" text={texts.whatIs} />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h2 className="gradient__text">
          The possibilities are beyond your imagination
        </h2>
        <p>Explore the library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title="ChatBots" text={texts.chatBots} />
        <Feature title="Knowledgebase" text={texts.knowledgebase} />
        <Feature title="Education" text={texts.education} />
      </div>
    </div>
  );
};
export default WhatGPT3;
