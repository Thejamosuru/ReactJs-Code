import logo from './logo.svg';
import './App.css';
import Props from './Components/Props/Props';
import Counter from './Components/State/Counter-Cls';
import { ListandKeys } from './Components/ListandKeys/ListandKeys';
import Header from './Components/Header/Header';
import Props_Object from './Components/Props/Props_Object';
import Routing from './Components/Routing/Routing';
import FromValidation from './Components/Fromvalidation/FromValidation';
import PropsInfo from './PractiseZone/PropsInfo';


function App() {

  let data = "Parent component to child component";
  let Courses = ["HTml","CSS","Bootstrap","Javscript","ReactJs"];
  let duration = {
    html:15,
    css:15,
    Bootstrap:3,
    Javascript:40,
    ReactJS:20
  }
  const info = [
    {"id": 1,"name": "Leanne Graham","username": "Bret","email": "Sincere@april.biz"},
    {"id": 2,"name": "Ervin Howell","username": "Antonette","email": "Shanna@melissa.tv"},
    {"id": 3,"name": "Clementine Bauch","username": "Samantha","email": "Nathan@yesenia.net"},
    {"id": 4,"name": "Patricia Lebsack","username": "Karianne","email": "Julianne.OConner@kory.org"},
    {"id": 5,"name": "Chelsey Dietrich","username": "Kamren","email": "Lucio_Hettinger@annie.ca"},
    {"id": 6,"name": "Mrs. Dennis Schulist","username": "Leopoldo_Corkery","email": "Karley_Dach@jasper.info"},
    {"id": 7,"name": "Kurtis Weissnat","username": "Elwyn.Skiles","email": "Telly.Hoeger@billy.biz"},
    {"id": 8,"name": "Nicholas Runolfsdottir V","username": "Maxime_Nienow","email": "Sherwood@rosamond.me"},
    {"id": 9,"name": "Glenna Reichert","username": "Delphine","email": "Chaim_McDermott@dana.io"},
    {"id": 10,"name": "Clementina DuBuque","username": "Moriah.Stanton","email": "Rey.Padberg@karina.biz"}
  ]

  let Transfer = "sucessfully"
  return (
    <div>
      {/* <Props continue = {data} Extension = {Courses}/>  */}
       {/* <Counter/> */}
      {/* <ListandKeys/> */}
      <Header/>
       <Routing/>
       {/* <PropsInfo strring={data} Arraay={Courses} OObject={info} time={duration}/> */}
       {/* <FromValidation/> */}
      {/* <Props_Object userinfo={info}/> */}
      
    </div>
  );
}

export default App;
