import Carousel from 'react-multi-carousel';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-multi-carousel/lib/styles.css';


const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const percentage1 = 100;
  const percentage2 = 90;
  const percentage3 = 80;
  const percentage4 = 75;
  const percentage5 = 75;
  return (
    <section className="skills" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>you can see my skills here</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                            <CircularProgressbar value={percentage1} text={`${percentage1}%`} className="h-25 my-5"
                            styles={buildStyles({
                                pathColor: `#E6A223ff`,
                                textColor: '#fff',
                                trailColor: '#fff',
                            })}
                            />
                            <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <CircularProgressbar value={percentage2} text={`${percentage2}%`} className="h-25 my-5"
                                styles={buildStyles({
                                    pathColor: `#E6A223ff`,
                                    textColor: '#fff',
                                    trailColor: '#fff',
                                })}
                                />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <CircularProgressbar value={percentage3} text={`${percentage3}%`} className="h-25 my-5"
                                styles={buildStyles({
                                    pathColor: `#E6A223ff`,
                                    textColor: '#fff',
                                    trailColor: '#fff',
                                })}
                                />
                                <h5>bootstrap</h5>
                            </div>
                            <div className="item">
                                <CircularProgressbar value={percentage4} text={`${percentage4}%`} className="h-25 my-5"
                                styles={buildStyles({
                                    pathColor: `#E6A223ff`,
                                    textColor: '#fff',
                                    trailColor: '#fff',
                                })}
                                />
                                <h5>js</h5>
                            </div>
                            <div className="item">
                                <CircularProgressbar value={percentage5} text={`${percentage5}%`} className="h-25 my-5"
                                styles={buildStyles({
                                    pathColor: `#E6A223ff`,
                                    textColor: '#fff',
                                    trailColor: '#fff',
                                })}
                                />
                                <h5>react</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills;