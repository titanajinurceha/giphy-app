
const Image = (props) => {
    return(
        <div>
          <img src={props.url} alt={props.err} />      
        </div> 
    );
};

export default Image;