// Code PasswordInput Component Here

function PasswordInput (){
    const handleChange = () => {
    console.log("Entering password...");
  };
    return(
        <input
      type="password"
      placeholder="Enter Password"
      onChange={handleChange}
    />
    )
}

export default PasswordInput;