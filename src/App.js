import { Fragment } from "react";
import "./App.css";
import { RxidTable, useTable } from "./rxid-table";
import posts from "./posts.json";
function App() {
  const users = [
    {
      id: 1,
      name: "waladi",
      email: "waladi@gmail.com",
      phoneNumber: "+62 23798 237",
      address: "Jl. Bangsa",
    },
    {
      id: 2,
      name: "Budi",
      email: "Budi@gmail.com",
      phoneNumber: "+62 11111 237",
      address: "Jl. Rahuhut",
    },
    {
      id: 3,
      name: "Dora",
      email: "Dora@gmail.com",
      phoneNumber: "+62 11111 237",
      address: "Jl. Brigif",
    },
  ];
  const cars = [
    {
      id: 1,
      name: "BMW",
      color: "black",
    },
  ];
  const model = useTable({
    columns: [
      { header: "Name", field: "name", sortable: false },
      { header: "Email", field: "email" },
      { header: "Phone Number", field: "phoneNumber", sortable: false },
      { header: "Addres", field: "address" },
    ],
    records: users,
  });

  const carModel = useTable({
    columns: [
      { header: "Name", field: "name" },
      { header: "Color", field: "color" },
    ],
    records: cars,
  });
  const postModel = useTable({
    columns: [
      { header: "Judul", field: "title" },
      { header: "Artikel", field: "body" },
    ],
    records: posts,
  });
  // useEffect(() => {
  //   // model.setRecords(users);
  //   // carModel.setRecords(cars);
  // }, []);
  // model.setRecords(users);
  // carModel.setRecords(cars);

  const handelView = (record) => {
    console.log("info : Come from handelView");
    console.log(record);
  };
  const handelEdit = (record) => {
    console.log("info : Come from handelEdit");
    console.log(record);
  };
  const handelDelete = (record) => {
    console.log("info : Come from handleDelete");
    console.log(record);
  };

  const userAction = (record) => {
    return (
      <Fragment>
        <button
          className="btn btn-sm btn-primary"
          onClick={() => handelView(record)}
        >
          <em className="fas fa-search"></em>
        </button>
        <button
          className="btn btn-sm btn-warning mx-2"
          onClick={() => handelEdit(record)}
        >
          <em className="fas fa-pen"></em>
        </button>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => handelDelete(record)}
        >
          <em className="fas fa-trash"></em>
        </button>
      </Fragment>
    );
  };

  return (
    <div className="App">
      <div className="container py-4 ">
        <h1>React Table</h1>
        <h4>Create Reuse table component</h4>
        <RxidTable model={postModel} />
        <br />
        <RxidTable model={model} actions={userAction} />
        <br />
        <RxidTable model={carModel} />
        <br />
      </div>
    </div>
  );
}

export default App;
