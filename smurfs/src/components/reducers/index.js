const initialState = {
    smurfList: [
        {
            name: "Brainey",
            age: 200,
            height: "5cm",
            id: 0
          },
          
          {
            name: "Brain",
            age: 210,
            height: "7cm",
            id: 1
          }
    ]
};

export const reducer = (state = initialState, action) => {
    switch(action.type){
        default: return state;
    }
};