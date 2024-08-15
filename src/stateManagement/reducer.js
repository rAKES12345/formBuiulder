const initialState = {
  componentsStore: [],
  selectedComponentIndex: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_COMPONENT':
      return {
        ...state,
        componentsStore: [...state.componentsStore, action.payload],
      };

    case 'DELETE_ITEM':
      if (
        typeof action.payload !== 'number' ||
        action.payload < 0 ||
        action.payload >= state.componentsStore.length
      ) {
        console.error('Invalid index for DELETE_ITEM');
        return state;
      }
      return {
        ...state,
        componentsStore: state.componentsStore.filter(
          (_, index) => index !== action.payload
        ),
      };

      case 'EDIT_SETTING':
        const updatedComponentsStore = [...state.componentsStore];
        updatedComponentsStore[action.payload.index] = {
          ...updatedComponentsStore[action.payload.index],
          settings: action.payload.settings,
        };
        return {
          ...state,
          componentsStore: updatedComponentsStore,
        };

      case 'SET_SELECTED_COMPONENT':
        return {
          ...state,
          selectedComponentIndex: action.payload, 
        };

    default:
      return state;
  }
};
