const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("tasks");
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (e) {
    console.warn("Could not load tasks", e);
    return [];
  }
};

const saveToLocalStorage = (tasks) => {
  try {
    const serializedState = JSON.stringify(tasks);
    localStorage.setItem("tasks", serializedState);
  } catch (e) {
    console.warn("Could not save tasks", e);
  }
};

const initialState = {
  tasks: loadFromLocalStorage(),
};

const taskReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case "ADD_TASK":
      newState = {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
      saveToLocalStorage(newState.tasks);
      return newState;
    case "DELETE_TASK":
      newState = {
        ...state,
        tasks: state.tasks.filter((task, index) => index !== action.payload),
      };
      saveToLocalStorage(newState.tasks);
      return newState;
    case "EDIT_TASK":
      newState = {
        ...state,
        tasks: state.tasks.map((task, index) =>
          index === action.payload.index ? action.payload.newTask : task
        ),
      };
      saveToLocalStorage(newState.tasks);
      return newState;
    default:
      return state;
  }
};

export default taskReducer;
