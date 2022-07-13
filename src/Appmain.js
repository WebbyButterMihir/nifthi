import "react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Trail from "./Component/Trail";
import ScrollBar from "./Component/scrollBar";
import FeatureEvents from "./Component/featureEvents";
import HeaderData from "./blockChain/headerData";
import Addevent from "./Component/Addevent";
import Reacttabs from "./Component/Tabs";


function Appmain() {
  return (
    <>
    
  <ScrollBar />  
   <Addevent />
    <Reacttabs />
    <FeatureEvents />
    
    </>
  );
}

export default Appmain;
