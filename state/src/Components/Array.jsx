function Arr() {
  let arr = ["Rohit", "ajay", "abhishek", "vijay"];
  return (
    <>
      <div>
        {arr.map((items) => (
          <p>{items}</p>
        ))}
        {arr.map((item) => item.length >= 5? <p>{item}</p>:<></>)}
      </div>
    </>
  );
}

export default Arr;
