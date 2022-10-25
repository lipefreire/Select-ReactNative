import React from 'react'
import {SafeAreaView} from 'react-native'

import Select from "./src/components/select"
import {callList} from "./src/components/callList"

const App = () => {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Select
        options={callList}
        onChangeSelect={(id) => console.log(id)}
        text="Selecione o Campus"
        label="Campus"
        />
      </SafeAreaView>
    )
}

export default App;