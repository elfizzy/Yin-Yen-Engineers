import React from 'react';
import CountUp, {useCountUp} from "react-countup";

 const Count= () => {
  //  const {countup1} = useCountUp({end:123456});
  //  const {countup2} = useCountUp({end:7000});
  //  const {countup3} = useCountUp({end:7000});

  return (
    <div className="achievements">
      <div className="wrapper">
        <div className="list">
          <h4><CountUp end={200}/>+</h4>
          <h2>Projects Compeleted</h2>
        </div>
        <div className="list">
          <h4><CountUp end={500}/>+</h4>
          <h2>Staff Memebers</h2>
        </div>
        <div className="list">
        <h4><CountUp end={150}/>+</h4>
          <h2>Million-Man Hours</h2>
        </div>
      </div>
     
    </div>
  )
}
const num = {
  fontSize:"60px",
  color:"rgb(119, 116, 109) "
}
export default Count;