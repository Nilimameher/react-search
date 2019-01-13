// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import logo from './logo.svg';
// import ReactDOM from 'react-dom'; 
import './App.css';
import Optionn from 'react-select';
// import Emp from './emp';
// import {BrowserRouter as Router, Switch, Route,Link} from 'react-router-dom';
//  import Bio from './bio';

const cricketersName = [
{value:"Sachin Tendulkar",label:"Sachin Tendulkar", desc:"In 2001, Sachin Tendulkar became the first batsman to complete 10,000 ODI runs in his 259 innings.[13] In 2002, halfway through his career, Wisden Cricketers Almanack ranked him the second greatest Test batsman of all time, behind Don Bradman, and the second greatest ODI batsman of all time, behind Viv Richards. Later in his career, Tendulkar was a part of the Indian team that won the 2011 World Cup, his first win in six World Cup appearances for India. He had previously been named Player of the Tournament at the 2003 edition of the tournament, held in South Africa. In 2013, he was the only Indian cricketer included in an all-time Test World XI named to mark the 150th anniversary of Wisden Cricketers' Almanack"},
{value:"Sunil Gavaskar", label:"Sunil Gavaskar", desc:"(born 10 July 1949) is a former Indian international cricketer who played from the early 1970s to late 1980s for the Bombay cricket team and Indian national team. Widely regarded as one of the greatest Test batsmen and best opening batsmen in Test cricket history, Gavaskar set world records during his career for the most Test runs and most Test centuries scored by any batsman. He held the record of 34 Test centuries for almost two decades before it was broken by Sachin Tendulkar in December 2005. He was the first person to score centuries in both innings of a Test match three times. He was the first Test batsman to score 10,000 Test Runs in a Career and now stands at number 12 on the group of 13 players with 10,000+ Test Runs."},
{value:"Kapil Dev", label:"Kapil Dev", desc:"Dev captained the Indian cricket team that won the 1983 Cricket World Cup. He was India's national cricket coach between October 1999 and August 2000. He retired in 1994, holding the world record for the greatest number of wickets taken in Test cricket, a record subsequently broken by Courtney Walsh in 2000. At the time, he was also India's highest wicket taker in both major forms of cricket, Tests and ODIs. He is the first player to take 200 ODI wickets. He is the only player in the history of cricket to have taken more than 400 wickets (434 wickets) and scored more than 5000 runs in Tests, making him one of the greatest all-rounders to have played the game. On 11 March 2010, Dev was inducted into the ICC Cricket Hall of Fame"},
{value:"Rahul Dravid",label:"Rahul Dravid", desc:"Born in a Marathi family and brought up in Bangalore, he started playing cricket at the age of 12 and later represented Karnataka at the under-15, under-17 and under-19 levels. Hailed as The Wall, Dravid was named one of the best five cricketers of the year by Wisden Cricketers' Almanack in 2000 and received the Player of the Year and the Test Player of the Year awards at the inaugural ICC awards ceremony in 2004. In December 2011, he became the first non-Australian cricketer to deliver the Bradman Oration in Canberra."},
{value:"Saurav Ganguly", label:"Saurav Ganguly", desc:"Ganguly was introduced into the world of cricket by his elder brother, Snehasish. He is regarded as one of India's most successful captains in modern times, and one of the greatest ODI batsmen of all time. He started his career by playing in state and school teams. Currently, he is the 8th highest run scorer in One Day Internationals (ODIs) and was the 3rd batsman in history to cross the 10,000 run landmark, after Sachin Tendulkar and Inzamam Ul Haq. In 2002, the Wisden Cricketers' Almanack ranked him the sixth greatest ODI batsman of all time, next to Viv Richards, Sachin Tendulkar, Brian Lara, Dean Jones and Michael Bevan"},
{value:"Anil Kumble", label:"Anil Kumble", desc:"Born in Bengaluru, Karnataka, Kumble developed an early interest in cricket as he grew up watching players like B. S. Chandrasekhar before becoming a full-fledged cricketer. He made his First-class debut at the age of 19 while representing Karnataka. Soon he was picked up for the Austral-Asia Cup in 1990 before making his Test debut against England later that year. Since then he has represented the Indian Test team on more than 132 Test matches and was responsible for many of India's victories. Kumble became a part of the regular ODI team during the early 1990s and held some of the best performances during this time; which included his six for 12 (six wickets for 12 runs) against the West Indies. The year 1996 proved to very successful for him as he was selected for the World Cup and emerged out as the most successful bowler of the tournament; he played seven matches and captured 15 wickets at an average of 18.73"},
{value:"Virender Sehwag", label:"Virender Sehwag", desc:"(born 20 October 1978) is a former Indian cricketer. Widely regarded as one of the most destructive batsmen of all time, Sehwag played as an aggressive right-handed opening batsman and also bowled part-time right-arm off-spin. He played his first One Day International in 1999 and joined the Indian test side in 2001.[2] In April 2009, Sehwag became the first Indian to be honoured as the Wisden Leading Cricketer in the World for his performance in 2008, subsequently becoming the first player of any nationality to retain the award for 2009. He is the former Occasional captain of India, former Vice-Captain of India, former captain of Delhi Daredevils and former captain of Delhi Ranji Team."},
{value:"Mahendra Singh Dhoni", label:"Mahendra Singh Dhoni" ,desc:"commonly known as MS Dhoni; born July 7, 1981) is an Indian international cricketer who captained the Indian national team in limited-overs formats from 2007 to 2016 and in Test cricket from 2008 to 2014. An attacking right-handed middle-order batsman and wicket-keeper, he is widely regarded as one of the greatest finishers in limited-overs cricket. He is also regarded as one of the best wicket-keepers in world cricket. He made his One Day International (ODI) debut in December 2004 against Bangladesh, and played his first Test a year later against Sri Lanka"},
{value:"Yuvraj Singh",label:"Yuvraj Singh", desc:" (born 12 December 1981) is an Indian international cricketer, who played all forms of the game. An all-rounder who bats left-handed in the middle order and bowls slow left-arm orthodox, Yuvraj is the son of former Indian fast bowler and Punjabi actor Yograj Singh"},
{value:"Zaheer Khan", label:"Zaheer Khan", desc:"(born 7 October 1978) is an Indian former cricketer who played all forms of the game for the Indian national team from 2000 till 2014. He was the second-most successful Indian pace bowler in Test cricket, behind Kapil Dev. Khan started his domestic career by playing for Baroda. In the early years of his career, Khan was known for his hostile seam and pace bowling, especially fast inch-perfect yorkers" },
{value:"Virat Kohli", label:"Virat Kohli", desc:"born 5 November 1988) is an Indian international cricketer who currently captains the India national team. A right-handed top-order batsman, Kohli is regarded as one of the best batsmen in the world.[3] He plays for Royal Challengers Bangalore in the Indian Premier League (IPL), and has been the team's captain since 2013" }];

class App extends Component {
    state ={
      enter:'searched cricketer',
      date:"nilima"
    };
  updateData = enter =>{
    this.setState({enter});
  };
  
// update(e){
//   this.setState({
//     data: e.target.value
//   });
// }
// cleara(){
//   this.setState({
//     data:''
//   });
//   ReactDOM.findDOMNode(this.refs.myText).focus();
// }
// dltfunc = (index) => {
//   const empsupdatedlist = Object.assign([], this.state.empsArray); 
//   empsupdatedlist.splice(index,1);
//   this.setState({empsArray:empsupdatedlist});
// }
  render() {
    return (
      <div className="Container">
       <h1>Search famous cricketers of india </h1>
       <Optionn value={this.state.enter} 
       onChange={this.updateData}
       options={cricketersName}/>
      {/* <div className="example-config">
                    Selected Value: {JSON.stringify(this.state.enter.value)}
      </div> */}
       <h2>some interesting facts about {JSON.stringify(this.state.enter.value)}</h2>
       <p>{this.state.enter.desc} </p>

       <img src={logo} width="150" height="80" />
       {/* <img src={Ex} />  */}
       {/* {projects.map((e, idx) => 
        <ListOfProjects
          photo={e.photo}
          text={e.text}
          key={idx} // <-- here
          />
      )} */}
       
        {/* <Bio></Bio> */}
      </div>
      // <div>
      //   <p>First react programming</p>
      //   <input type="text" value={this.state.data} onChange={this.update.bind(this)} ref='myText'/>
      //   <h2>{this.state.data}</h2>
      //   <button onClick={this.cleara.bind(this)}>clear above</button>
      //    <table>
      //      <tbody>
      //        {
      //         this.state.empsArray.map((emp)=>{
      //           return (<Emp nm={emp.nm} key={emp.id} deleteEvent={(this.dltfunc.bind(this))}>{emp.sal}</Emp>)
      //         })
      //        }


      //      </tbody>
      //    </table>
      // </div>
      // <Router>
      // <div>
      //   <h2>routing to home page</h2>
      //   <ul>
      //     <li><Link to={'/'}>homeee</Link></li>
      //     <li><Link to={'/home'}>home</Link></li>
      //   </ul>
      //   <hr/>
      //   <Switch>
          
      //     <Route exact path='/home' component={Home}/>
      //   </Switch>
      // </div>
      // </Router>
    );
  }
}


export default App;
