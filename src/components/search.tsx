// export default function Search() {
//   return <input type="text" className="border rounded py-2 px-3" />;
// }

import { Input } from "./ui/input";

export default function Search(props) {
  const { search, handleChange } = props;

  return (
    <div>
      <Input
        type="text"
        className="border rounded py -2 px-3"
        value={search}
        onChange={handleChange}
        placeholder="Search"
      />
      <h1>Search Result:{search}</h1>
    </div>
  );
}
