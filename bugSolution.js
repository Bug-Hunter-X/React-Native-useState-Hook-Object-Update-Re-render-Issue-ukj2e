```javascript
import React, { useState } from 'react';

const MyComponent = () => {
  const [myObject, setMyObject] = useState({ name: 'John', age: 30 });

  const updateName = () => {
    setMyObject(prevObject => ({ ...prevObject, name: 'Jane' })); // Correct - creates a new object
  };

  return (
    <View>
      <Text>{myObject.name}</Text> <Text>{myObject.age}</Text>
      <Button title="Update Name" onPress={updateName} />
    </View>
  );
};
```