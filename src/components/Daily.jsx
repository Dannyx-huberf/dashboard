import data from '../data/data.json';
import Template from '../components/Template';
import elipisIcon from '../assets/images/icon-ellipsis.svg';

import workImg from '../assets/images/icon-work.svg';
import playImg from '../assets/images/icon-play.svg';
import studyImg from '../assets/images/icon-study.svg';
import exerciseImg from '../assets/images/icon-exercise.svg';
import socialImg from '../assets/images/icon-social.svg';
import selfCareImg from '../assets/images/icon-self-care.svg';

export default function Daily() {

  const imageMap = {
  Work: workImg,
  Play: playImg,
  Study: studyImg,
  Exercise: exerciseImg,
  Social: socialImg,
  SelfCare: selfCareImg,
};


const dailyData = data.map(item => ({
    title: item.title,
    timeframes: item.timeframes.daily
  }));

  return (
    <main className="card-styles">
      {dailyData.map((item, index) => (
        <Template
          key={index}
          data={[item]} // single item as array for Template
          img={imageMap[item.title]}
          elipis={<img src={elipisIcon} alt="ellipsis icon"
           />}
        />
      ))}
    </main>
  );
}