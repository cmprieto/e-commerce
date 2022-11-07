import { ItemStyle, P } from "../app/styles";

const Item = (props) => {
  return (
    <ItemStyle>
      <P>
        {props.data.id} - {props.data.title}
      </P>
      <img src={props.data.foto} alt="foto" width={200} />
    </ItemStyle>
  );
};

export default Item;