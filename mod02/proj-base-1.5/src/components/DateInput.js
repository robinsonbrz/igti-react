
export default function DateInput({ 
  labelDescription = 'Descrição do label:',
  inputValue = '2023-11-07',
  onInputChange = null,
}) {

  function handleInputChange({currentTarget}) {
    if (onInputChange){
      const newValue = currentTarget.value;
      onInputChange(newValue);
    }
  }
  return (
    <div className="flex flex-col my-4">

    <label className="text-sm mb-1" htmlFor="inputName">
      {labelDescription}
    </label>

    <input 
      autoFocus 
      id="inputName" 
      className="border p-1" 
      type="date"
      value={inputValue}
      onChange={handleInputChange}
    />
    </div>
  );
}
