import { useParams } from "react-router-dom";

export default function TodoDetail() {
  const { id } = useParams();
  return <h1>Todo Detail {id} </h1>;
}
