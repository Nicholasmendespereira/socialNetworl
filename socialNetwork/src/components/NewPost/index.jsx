import { ContainerMain, BoxOne, BoxTwo, BoxThree } from "./style";

//Recat icons
import { BiWorld, BiMessageRounded } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";

function NewPost() {
  return (
    <>
      <ContainerMain>
        <BoxOne>.</BoxOne>
        <BoxTwo>.</BoxTwo>
        <BoxThree><BiWorld/><BiMessageRounded/><IoMdSettings/></BoxThree>
      </ContainerMain>
    </>
  );
}
export default NewPost;
