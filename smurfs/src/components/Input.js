import React from 'react';

const Input = props => {
return (
<div>
<input type="text" name="name" placeholder="Name" />
<input type ="text" name="age" placeholder="Age" />
<input type ="number" name="height" placeholder="Height" />
<button type="submit">Submit</button>
</div>
)
}

export default Input;