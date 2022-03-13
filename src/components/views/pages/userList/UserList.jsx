import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";

export default function UserList() {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      editable: true,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img
              className="userListImg"
              src={params.row.avatar}
              alt="user img"
            />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 150,
      editable: true,
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
      editable: true,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 160,
      editable: true,
    },
    {
        field: "action",
        headerName: "Action",
        width: 160,
        editable: true,
        renderCell:(params)=>{
            return (
                <>
                <button className="userListEdit">
                    Edit
                </button>
                <DeleteOutline className="userListDelete"/>
                </>
                
            )
        }
      },
  ];

  const rows = [
    {
      id: 1,
      username: "Ricky Sensei",
      avatar: "sensei.png",
      email: "sensei@gmail.com",
      status: "active",
      transaction: "ksh. 234.00",
    },
    {
      id: 2,
      username: "Ricky Sensei",
      avatar: "sensei.png",
      email: "sensei@gmail.com",
      status: "active",
      transaction: "ksh. 234.00",
    },
    {
      id: 3,
      username: "Ricky Sensei",
      avatar: "sensei.png",
      email: "sensei@gmail.com",
      status: "active",
      transaction: "ksh. 234.00",
    },
    {
      id: 4,
      username: "Ricky Sensei",
      avatar: "sensei.png",
      email: "sensei@gmail.com",
      status: "active",
      transaction: "ksh. 234.00",
    },
    {
      id: 5,
      username: "Ricky Sensei",
      avatar: "sensei.png",
      email: "sensei@gmail.com",
      status: "active",
      transaction: "ksh. 234.00",
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
