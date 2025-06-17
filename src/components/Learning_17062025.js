
function Learning_17062025() {
  const ele=['kaliapan','Abimanyu', 'Santhosh']
  return (
    <div className="Learning_17062025">
    <h1>17/06/2025 Learning</h1>
    <p> Check paragraph..!!</p>
    <h4>The Students of the class are </h4>
    <ul>
      {ele.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
    <input></input>
    </div>
  );
}

export default Learning_17062025;
