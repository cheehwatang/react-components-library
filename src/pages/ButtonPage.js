import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";
import Button from "../components/Button";

function ButtonPage() {
  const handleClick = () => {
    console.log("Clicked");
  };

  return (
    <div>
      <div>
        <Button success outline rounded className="mb-5" onClick={handleClick}>
          <GoBell />
          Save
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoCloudDownload />
          Submit
        </Button>
      </div>
      <div>
        <Button warning>
          <GoDatabase />
          Click
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Check
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Delete
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
