import style from './slide.module.css'
const Slide = ({ startIndex, divs }) => (
    <div className={style.ContainerSlide} >
      {divs[startIndex]}
      {divs[startIndex + 1]}
    </div>
  );

export default Slide;