const TextInput = ({
    labelText,
    inputId,
    defaultValue
}:{labelText: string,
    inputId: string,
    defaultValue?:string
}) => {
    return 
    <div>
        <label>{labelText}</label>
        <input id={inputId} defaultValue={"defaultValue"}/>
    </div>
}

export default TextInput;