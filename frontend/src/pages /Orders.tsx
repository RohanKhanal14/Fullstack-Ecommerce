import { ReactElement, useState } from "react";
import TableHOC from "../components/admin/TableHOC";
import { Column } from "react-table";
import { Link } from "react-router-dom";

type DataType = {
  _id: string;
  quantity: number;
  discount: number;
  amount: number;
  status: ReactElement;
  action: ReactElement;
};

const column: Column<DataType>[] = [
  {
    Header: "ID",
    accessor: "_id",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "Discount",
    accessor: "discount",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const Orders = () => {

  const [data] = useState<DataType[]>([
    {
      _id: "1",
      quantity: 2,
      discount: 10,
      amount: 100,
      status: <span className="green">Completed</span>,
      action: <Link to={`/order/id`}>View</Link>,
    },
    {
      _id: "2",
      quantity: 3,
      discount: 20,
      amount: 200,
      status: <span className="yellow">Pending</span>,
      action: <Link to={`/order/id`}>View</Link>,
    },
    {
      _id: "3",
      quantity: 4,
      discount: 30,
      amount: 300,
      status: <span className="red">Cancelled</span>,
      action: <Link to={`/order/`}>View</Link>,
    },
  ]);

  // here TabeleHOC is from the component folder and the datatype is defined above 

  const Table = TableHOC<DataType>(
    column,
    data,
    "dashboard-product-box",
    "Orders",
    data.length > 6
  )();

  return (
    <div className="container">
      <h1>My orders</h1>
      {Table}
    </div>
  );
};

export default Orders;
