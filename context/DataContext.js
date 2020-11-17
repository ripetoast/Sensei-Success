import createDataContext from './createDataContext';

const dataReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_DATA':
      return [...state, { title: `Example Data #${exampleData.length + 1}` }];
    default:
      return [...state];
  }
};

const addExampleData = () => {
  return () => {
    dispatch({ type: 'ADD_DATA' });
  };
};

export const { Context, Provider } = createDataContext(
  dataReducer,
  { addExampleData },
  []
);
