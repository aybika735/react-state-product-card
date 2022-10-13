import { useState } from "react";
function App(props) {
  const [btn, setBtn] = useState(false);
  const [text, setText] = useState("Добавить в корзину");
  const [isempty, setIsempty] = useState(false)

  const [formvalid, setFormvalid] = useState(false);

  const handleClick = (e) => {
    if (e.target.className === "btn") {
      setBtn(true);
      setText("уже в корзине");
      setFormvalid(!formvalid);

      
     
    }
  };
  const handleClicktwo = (e) =>{
    if(e.target.className === 'btn-red'){
      setText("Добавить в корзину");
      setFormvalid(!formvalid);
    setBtn(false);
    
     
    }
  }
  
const handleClickdetalis = (e) =>{
if(e.target.className === 'btn_detalis'){
  setIsempty(true);
}
}
const handledeleted =(e)=>{
  if(e.target.className === 'deleted'){
setIsempty(false);
  }
}
  return (
    <div className="App">
      {props.products.map((product) => {
        return (
          <div className="card">
            <div className="card-image">
              <img src={product.image} alt="" />
            </div>
            <div className="card-info">
              <div lassName="card-poFd">
                <div className="card-inf">
                  <div className="card-name">{product.name}</div>
                  <div className="inf-button">
                    <button className="btn_detalis" onClick={(e) => handleClickdetalis(e)}>Детали</button>
                    {isempty && <div className="display"><div  className='detalis'> loreem ipsum dolor sit amet, consectetur adipisicing elit.
                Animi, dignissimos.loreem ipsum dolor sit amet</div><span onClick={(e)=>handledeleted(e)} className="deleted">❌</span></div>}
                  </div>
                </div>
                <div className="card-price">$ {product.price} </div>
              </div>

              <hr></hr>
              <div className="card-text">
                loreem ipsum dolor sit amet, consectetur adipisicing elit.
                Animi, dignissimos.
              </div>
              <div className="card-button">
                <button
                  className={formvalid ? "disabled" : "btn"}
                  disabled={formvalid}
                  onClick={(e) => handleClick(e)}
               
                >
                  {text}
                </button>
                {btn ? <div  onClick={(e) => handleClicktwo(e)} className='btn-red'>удалить из корзины</div>:null}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;