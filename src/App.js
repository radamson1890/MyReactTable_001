import logo from './logo.svg';
import './App.css';
import MyTable from './component/table/table'


const data =
    [
        {
            id: 1,
            firstname: "Russell",
            lastname: "Adamson",
            email: "raladamson@outlook.com"
        },
        {
            id:2,
            firstname: "Emily",
            lastname: "Adamson",
            email: "apples4ndb4n4n4s@gmail.com"
        },
        {
            id: 3,
            firstname: "Bob",
            lastname: "Ross",
            email: "fantasticpainter@gmail.com"
        }
    ]

function App() {

    return (
      <div>
      <h1>TESTING !</h1>
            <MyTable props={data} />
      </div>
  );
}

export default App;
