const style = {
  width: 300,
  backgroundColor: "white",
  borderRadius: 10,
  borderColor: "gray ",
  borderWidth: "1",
  padding: 15,
  margin:10
};
export  function PostComponent({name,subtitle,image,time,description}) {
  return (
    <div style={style}>
      <div style={{ display: "flex" }}>
        <img
          src={image}
          alt="Avatar"
          style={{
            width: 30,
            height: 30,
            borderRadius: 20,
            marginTop: 3,
          }}
        />

        <div style={{ fontSize: 12, marginLeft: 10 }}>
          <b>{name}</b>
          <div>{subtitle} </div>
          {(time !== undefined)? <div style={{display:"flex"}}>
          <div>{time}</div>
          <img src="https://static.vecteezy.com/system/resources/previews/005/439/435/non_2x/clock-icon-design-element-logo-element-illustration-clock-symbol-icon-free-vector.jpg" alt="" style={{
            width:11,
            height:11,
            marginLeft:2,
            marginTop:1
          }} />

          </div>: null}
        </div>
      </div>
      <div style={{ fontSize: 14 }}>
       {description}
      </div>
    </div>
  );
}