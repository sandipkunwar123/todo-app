import { Button } from "@/components/ui/button";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function Root() {
  const navigate = useNavigate();
  const handleGoToHome = () => {
    navigate("/");
  };
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <>
      <aside className="w-[200px] h-full absolute left-0 top-0 bg-primary">
        <Button onClick={handleGoToHome}>Go to Home</Button>
        <Button onClick={handleBack}>
          variant={"secondary"}
          Back
        </Button>
        <Link className="text-primary block p-3" to={"/counter"}>
          Counter
        </Link>
        <Link className="text-primary block p-3" to={"/toggle-light"}></Link>
      </aside>
      <main>
        <Outlet />
      </main>
    </>
  );
}
